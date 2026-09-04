const fs = require('fs');

const rawAura = fs.readFileSync('scripts/importAuraCharge.js', 'utf8');

const pMatch = rawAura.match(/const projectData = (\{[\s\S]*?\n  \});/);
let projectData = {};
eval('projectData = ' + pMatch[1]);

const bMatch = rawAura.match(/const blocks = (\[[\s\S]*?\n  \]);/);
let blocks = [];
eval('blocks = ' + bMatch[1]);

let sql = '-- Paste this entirely into the Supabase SQL Editor\n\n';
sql += `DELETE FROM public.projects WHERE slug = 'auracharge';\n\n`;

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

sql += `DO $$\nDECLARE\n  v_project_id uuid;\nBEGIN\n  SELECT id INTO v_project_id FROM public.projects WHERE slug = 'auracharge';\n\n`;

blocks.forEach((b, idx) => {
  const contentJson = JSON.stringify(b.content).replace(/'/g, "''");
  sql += `  INSERT INTO public.blocks (project_id, type, content, order_index)\n  VALUES (v_project_id, '${b.type}', '${contentJson}'::jsonb, ${idx});\n\n`;
});

sql += `END $$;\n`;

fs.writeFileSync('scratch/restoreAuraCharge.sql', sql);
console.log('AuraCharge SQL generated!');
