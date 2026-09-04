import { supabase } from '../lib/supabaseClient';

// ─── PUBLIC API ──────────────────────────────────────────────────────────────

/** Fetch all published projects for the homepage (ordered by display_order) */
export async function getPublishedProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('status', 'Published')
    .order('display_order', { ascending: true });
  if (error) throw error;
  return data;
}

/** Fetch a single published project by slug, with its blocks */
export async function getProjectBySlug(slug) {
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'Published')
    .single();
  if (error) throw error;

  const { data: blocks, error: blocksError } = await supabase
    .from('blocks')
    .select('*')
    .eq('project_id', project.id)
    .order('order_index', { ascending: true });
  if (blocksError) throw blocksError;

  return { ...project, blocks };
}

// ─── ADMIN API ───────────────────────────────────────────────────────────────

/** Fetch ALL projects (any status) for the admin dashboard */
export async function adminGetAllProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('updated_at', { ascending: false });
  if (error) throw error;
  return data;
}

/** Fetch a project by ID with its blocks for the admin editor */
export async function adminGetProjectById(id) {
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;

  const { data: blocks, error: blocksError } = await supabase
    .from('blocks')
    .select('*')
    .eq('project_id', id)
    .order('order_index', { ascending: true });
  if (blocksError) throw blocksError;

  return { ...project, blocks };
}

/** Create a new project (returns the new project) */
export async function adminCreateProject(projectData) {
  const { data, error } = await supabase
    .from('projects')
    .insert([{ ...projectData, status: 'Draft' }])
    .select()
    .single();
  if (error) throw error;
  return data;
}

/** Update project metadata fields */
export async function adminUpdateProject(id, fields) {
  const { data, error } = await supabase
    .from('projects')
    .update({ ...fields, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

/** Duplicate a project and all its blocks */
export async function adminDuplicateProject(projectId) {
  const original = await adminGetProjectById(projectId);
  const newSlug = `${original.slug}-copy-${Date.now()}`;

  const { data: newProject, error } = await supabase
    .from('projects')
    .insert([{
      title: `${original.title} (Copy)`,
      slug: newSlug,
      short_description: original.short_description,
      thumbnail: original.thumbnail,
      logo_icon: original.logo_icon,
      hero_image: original.hero_image,
      category: original.category,
      status: 'Draft',
      featured: false,
      display_order: 999,
    }])
    .select()
    .single();
  if (error) throw error;

  if (original.blocks && original.blocks.length > 0) {
    const blocksToInsert = original.blocks.map(b => ({
      project_id: newProject.id,
      type: b.type,
      content: b.content,
      order_index: b.order_index,
    }));
    const { error: blocksError } = await supabase.from('blocks').insert(blocksToInsert);
    if (blocksError) throw blocksError;
  }

  return newProject;
}

/** Delete a project (cascade deletes blocks via FK constraint) */
export async function adminDeleteProject(id) {
  const { error } = await supabase.from('projects').delete().eq('id', id);
  if (error) throw error;
}

/** Publish a project */
export async function adminPublishProject(id) {
  return adminUpdateProject(id, { status: 'Published' });
}

/** Unpublish a project (back to Draft) */
export async function adminUnpublishProject(id) {
  return adminUpdateProject(id, { status: 'Draft' });
}

/** Archive a project */
export async function adminArchiveProject(id) {
  return adminUpdateProject(id, { status: 'Archived' });
}

// ─── BLOCK API ────────────────────────────────────────────────────────────────

/** Upsert all blocks for a project (replace strategy for simplicity) */
export async function adminSaveBlocks(projectId, blocks) {
  // Delete all existing blocks for this project
  await supabase.from('blocks').delete().eq('project_id', projectId);

  if (!blocks || blocks.length === 0) return [];

  const toInsert = blocks.map((b, idx) => ({
    project_id: projectId,
    type: b.type,
    content: b.content,
    order_index: idx,
  }));

  const { data, error } = await supabase
    .from('blocks')
    .insert(toInsert)
    .select();
  if (error) throw error;
  return data;
}

// ─── MEDIA API ────────────────────────────────────────────────────────────────

/** Upload a file to Supabase Storage and return its public URL */
export async function uploadMedia(file, folder = 'images') {
  const ext = file.name.split('.').pop();
  const filename = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await supabase.storage
    .from('portfolio-media')
    .upload(filename, file, { cacheControl: '3600', upsert: false });
  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from('portfolio-media')
    .getPublicUrl(filename);

  return publicUrl;
}

/** List all media files from a folder */
export async function listMedia(folder = '') {
  const { data, error } = await supabase.storage
    .from('portfolio-media')
    .list(folder || '', { limit: 200, sortBy: { column: 'created_at', order: 'desc' } });
  if (error) throw error;
  return data.filter(f => f.name !== '.emptyFolderPlaceholder').map(f => ({
    ...f,
    url: supabase.storage.from('portfolio-media').getPublicUrl(folder ? `${folder}/${f.name}` : f.name).data.publicUrl,
  }));
}

/** Delete a media file */
export async function deleteMedia(path) {
  const { error } = await supabase.storage.from('portfolio-media').remove([path]);
  if (error) throw error;
}

// ─── SLUG UTILITY ─────────────────────────────────────────────────────────────

export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/** Check if a slug is already taken */
export async function isSlugTaken(slug, excludeId = null) {
  let query = supabase.from('projects').select('id').eq('slug', slug);
  if (excludeId) query = query.neq('id', excludeId);
  const { data } = await query;
  return data && data.length > 0;
}
