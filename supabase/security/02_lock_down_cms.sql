-- STEP 2 — LOCK DOWN THE CMS. Run only after reading STEP 1's output.
-- Effect: everyone can still READ published projects and their blocks
-- (the public site keeps working). Only YOUR admin account can write.
--
-- Before running:
--   1. Replace every 00000000-0000-0000-0000-000000000000 below with your
--      user id from STEP 1 (query 1d).
--   2. Take a backup: Database → Backups, or export the two tables as CSV.
--   3. In Authentication → Sign In / Providers → Email, turn OFF
--      "Allow new users to sign up".
-- The whole script runs in one transaction: if anything fails, nothing changes.

begin;

-- One place that defines "the admin".
create schema if not exists private;
create or replace function private.is_portfolio_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select (select auth.uid()) = '00000000-0000-0000-0000-000000000000'::uuid;
$$;
-- Policies run as the visitor's role, so anon must be able to call this
-- yes/no check (it only ever answers "is the current user the admin?").
revoke all on function private.is_portfolio_admin() from public;
grant usage on schema private to anon, authenticated;
grant execute on function private.is_portfolio_admin() to anon, authenticated;

-- Turn RLS on.
alter table public.projects enable row level security;
alter table public.blocks   enable row level security;

-- Remove every existing policy on these two tables (they may be open).
do $$
declare p record;
begin
  for p in
    select policyname, tablename from pg_policies
    where schemaname = 'public' and tablename in ('projects', 'blocks')
  loop
    execute format('drop policy %I on public.%I', p.policyname, p.tablename);
  end loop;
end $$;

-- PUBLIC READ: published projects only.
create policy "public reads published projects"
  on public.projects for select
  to anon, authenticated
  using (status = 'Published' or (select private.is_portfolio_admin()));

-- PUBLIC READ: blocks that belong to a published project.
create policy "public reads blocks of published projects"
  on public.blocks for select
  to anon, authenticated
  using (
    exists (
      select 1 from public.projects p
      where p.id = blocks.project_id and p.status = 'Published'
    )
    or (select private.is_portfolio_admin())
  );

-- ADMIN WRITE: only your account.
create policy "admin inserts projects" on public.projects for insert to authenticated
  with check ((select private.is_portfolio_admin()));
create policy "admin updates projects" on public.projects for update to authenticated
  using ((select private.is_portfolio_admin())) with check ((select private.is_portfolio_admin()));
create policy "admin deletes projects" on public.projects for delete to authenticated
  using ((select private.is_portfolio_admin()));

create policy "admin inserts blocks" on public.blocks for insert to authenticated
  with check ((select private.is_portfolio_admin()));
create policy "admin updates blocks" on public.blocks for update to authenticated
  using ((select private.is_portfolio_admin())) with check ((select private.is_portfolio_admin()));
create policy "admin deletes blocks" on public.blocks for delete to authenticated
  using ((select private.is_portfolio_admin()));

-- STORAGE: bucket stays public for reading (images keep loading).
-- Only the admin may upload, replace or delete files in it.
-- First drop any existing write policies that mention this bucket:
do $$
declare p record;
begin
  for p in
    select policyname from pg_policies
    where schemaname = 'storage' and tablename = 'objects'
      and cmd in ('INSERT', 'UPDATE', 'DELETE', 'ALL')
      and (coalesce(qual, '') || coalesce(with_check, '')) like '%portfolio-media%'
  loop
    execute format('drop policy %I on storage.objects', p.policyname);
  end loop;
end $$;

create policy "admin uploads portfolio media" on storage.objects for insert to authenticated
  with check (bucket_id = 'portfolio-media' and (select private.is_portfolio_admin()));
create policy "admin updates portfolio media" on storage.objects for update to authenticated
  using (bucket_id = 'portfolio-media' and (select private.is_portfolio_admin()))
  with check (bucket_id = 'portfolio-media' and (select private.is_portfolio_admin()));
create policy "admin deletes portfolio media" on storage.objects for delete to authenticated
  using (bucket_id = 'portfolio-media' and (select private.is_portfolio_admin()));

commit;

-- AFTER RUNNING: re-run STEP 1. Then open the live site in a private window and
-- check the home page project cards and every /work/... page still load.
-- Note: the scripts in /scripts used the public key to write. After this change
-- they will be refused, which is the point. Use the /admin dashboard instead.
