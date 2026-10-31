-- STEP 1 — READ-ONLY CHECK. Safe to run. Changes nothing.
-- Supabase Dashboard → SQL Editor → paste → Run.
-- Shows whether Row Level Security (RLS) is on and which policies exist.

-- 1a. Is RLS enabled on the CMS tables?  (rls_enabled must be TRUE for both)
select relname as table_name, relrowsecurity as rls_enabled, relforcerowsecurity as rls_forced
from pg_class
where relnamespace = 'public'::regnamespace
  and relname in ('projects', 'blocks');

-- 1b. Which policies exist on the CMS tables?
-- RED FLAG: any INSERT / UPDATE / DELETE / ALL policy whose roles include
-- {public} or {anon}, or whose qual / with_check is just "true".
select tablename, policyname, cmd, roles, qual, with_check
from pg_policies
where schemaname = 'public' and tablename in ('projects', 'blocks')
order by tablename, cmd;

-- 1c. Storage policies for the media bucket.
-- RED FLAG: INSERT / UPDATE / DELETE allowed for {public} / {anon}.
select policyname, cmd, roles, qual, with_check
from pg_policies
where schemaname = 'storage' and tablename = 'objects'
order by cmd;

-- 1d. Your admin user id — copy the id for STEP 2.
select id, email, created_at, last_sign_in_at from auth.users order by created_at;
-- RED FLAG: any user here you do not recognise. That means sign-ups are open
-- and someone else created an account.
