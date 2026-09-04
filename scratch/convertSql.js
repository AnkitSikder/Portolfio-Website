const fs = require('fs');

const raw = fs.readFileSync('scratch/importImmersiveTraffic.mjs', 'utf8');

// Extract the projectData object
const assetPath = (n) => `/assets/projects/immersive-traffic-command/page_${n}.png`;

const pMatch = raw.match(/const projectData = (\{[\s\S]*?\n  \});/);
let projectData = {};
eval('projectData = ' + pMatch[1]);

// Extract the blocks array
const bMatch = raw.match(/const blocks = (\[[\s\S]*?\n  \]);/);
let blocks = [];
eval('blocks = ' + bMatch[1]);

let sql = '-- Paste this entirely into the Supabase SQL Editor\n\n';

// 1. Delete existing project if it exists (which cascades and deletes blocks)
sql += `DELETE FROM public.projects WHERE slug = 'immersive-traffic-command';\n\n`;

// 2. Insert the project
sql += `INSERT INTO public.projects (id, created_at, title, slug, short_description, thumbnail, hero_image, category, status, featured, display_order)
VALUES (
  gen_random_uuid(),
  now(),
  '${projectData.title.replace(/'/g, "''")}',
  '${projectData.slug}',
  '${projectData.short_description.replace(/'/g, "''")}',
  '${projectData.thumbnail}',
  '${projectData.hero_image}',
  '${projectData.category}',
  '${projectData.status}',
  ${projectData.featured},
  ${projectData.display_order}
);\n\n`;

// 3. Insert blocks
sql += `DO $$
DECLARE
  v_project_id uuid;
BEGIN
  SELECT id INTO v_project_id FROM public.projects WHERE slug = 'immersive-traffic-command';
\n`;

blocks.forEach((b, idx) => {
  const contentJson = JSON.stringify(b.content).replace(/'/g, "''");
  sql += `  INSERT INTO public.blocks (project_id, type, content, order_index)
  VALUES (v_project_id, '${b.type}', '${contentJson}'::jsonb, ${idx});\n\n`;
});

sql += `END $$;\n`;

fs.writeFileSync('scratch/restoreLatestImmersiveTraffic.sql', sql);
console.log('SQL generated!');
