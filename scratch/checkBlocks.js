import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const envPath = path.resolve('.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const envVars = {};
envContent.split('\n').forEach(line => {
  if (line && line.includes('=')) {
    const [key, ...value] = line.split('=');
    envVars[key.trim()] = value.join('=').trim().replace(/['"]/g, '');
  }
});

const supabase = createClient(envVars.VITE_SUPABASE_URL, envVars.VITE_SUPABASE_ANON_KEY);

async function main() {
  const { data: project } = await supabase.from('projects').select('id').eq('slug', 'auracharge').single();
  const { data: blocks } = await supabase.from('blocks').select('*').eq('project_id', project.id).eq('type', 'Image');
  
  console.log(JSON.stringify(blocks, null, 2));
}
main();
