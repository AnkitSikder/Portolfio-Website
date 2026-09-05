import { supabase } from '../lib/supabaseClient';

// ─── PUBLIC API ──────────────────────────────────────────────────────────────

/**
 * Fetch all published projects for the homepage, ordered by display_order.
 * The homepage cards use this to decide which projects to show.
 */
export async function getPublishedProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('id, title, slug, short_description, thumbnail, category, display_order')
    .eq('status', 'Published')
    .order('display_order', { ascending: true });
  if (error) throw error;
  return data;
}

// ─── ADMIN API ───────────────────────────────────────────────────────────────

/** Fetch ALL projects (any status) for the admin dashboard */
export async function adminGetAllProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('id, title, slug, category, status, thumbnail, display_order, updated_at')
    .order('display_order', { ascending: true });
  if (error) throw error;
  return data;
}

/** Update project metadata fields */
async function adminUpdateProject(id, fields) {
  const { data, error } = await supabase
    .from('projects')
    .update({ ...fields, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

/** Publish a project — makes it visible on the portfolio */
export async function adminPublishProject(id) {
  return adminUpdateProject(id, { status: 'Published' });
}

/** Unpublish a project — hides it from the portfolio */
export async function adminUnpublishProject(id) {
  return adminUpdateProject(id, { status: 'Draft' });
}
