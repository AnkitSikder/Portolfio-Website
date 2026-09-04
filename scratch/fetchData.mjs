import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = 'https://qsaqptsicqthcpsqzbvx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzYXFwdHNpY3F0aGNwc3F6YnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NDc3NzcsImV4cCI6MjEwMzQyMzc3N30.DC7he9cAZOVHabXHo31-cO5Ol4DU3rQDxf2In0Y-HmI';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchAll() {
  const { data: projects } = await supabase.from('projects').select('*');
  const { data: blocks } = await supabase.from('blocks').select('*');
  
  const result = projects.map(p => ({
    ...p,
    blocks: blocks.filter(b => b.project_id === p.id).sort((a, b) => a.order_index - b.order_index)
  }));

  fs.writeFileSync('c:/Users/AnkitRaj/Downloads/Portfolio Antigravity/scratch/projects.json', JSON.stringify(result, null, 2));
  console.log('Saved to scratch/projects.json');
}

fetchAll();
