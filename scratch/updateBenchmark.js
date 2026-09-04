import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Read .env.local manually
const envPath = path.resolve('.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const envVars = {};
envContent.split('\n').forEach(line => {
  if (line && line.includes('=')) {
    const [key, ...value] = line.split('=');
    envVars[key.trim()] = value.join('=').trim().replace(/['"]/g, '');
  }
});

const supabaseUrl = envVars.VITE_SUPABASE_URL;
const supabaseKey = envVars.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data: project } = await supabase
    .from('projects')
    .select('id')
    .eq('slug', 'auracharge')
    .single();

  if (!project) return;

  const { data: blocks } = await supabase
    .from('blocks')
    .select('*')
    .eq('project_id', project.id)
    .eq('type', 'Image');

  if (!blocks || blocks.length === 0) return;
  
  // Just take the first Image block since there's only one
  const block = blocks[0];
  
  // Keep the alt text but add the heading
  const content = { ...block.content, heading: 'Benchmark Product' }; 
  
  await supabase
    .from('blocks')
    .update({ content })
    .eq('id', block.id);
    
  console.log('Successfully updated Image block with Benchmark heading!');
}

main();
