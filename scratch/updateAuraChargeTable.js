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
  console.log('Fetching AuraCharge project...');
  const { data: project, error: pError } = await supabase
    .from('projects')
    .select('id')
    .eq('slug', 'auracharge')
    .single();

  if (pError || !project) {
    console.error('Error fetching project:', pError);
    return;
  }

  const { data: blocks, error: bError } = await supabase
    .from('blocks')
    .select('*')
    .eq('project_id', project.id)
    .eq('type', 'ProductClassification');

  if (bError || !blocks || blocks.length === 0) {
    console.error('Error fetching blocks or no block found:', bError);
    return;
  }

  const blockId = blocks[0].id;
  const newItems = [
    {
      type: "Power Banks",
      capacity: "5,000 mAh - 30,000 mAh",
      dimensions: "4 x 2 x 1 in (avg.)",
      weight: "0.2 - 0.6 kgs (avg.)",
      purposes: "Charging smartphones, tablets, small gadgets",
      features: "USB ports, portable, lightweight"
    },
    {
      type: "Power Houses",
      capacity: "200W - 500W",
      dimensions: "8 x 5 x 5 - 11 x 8 x 6 in (avg.)",
      weight: "2 - 6 kgs (avg.)",
      purposes: "Camping, small home appliances, emergency backup",
      features: "Multiple ports (AC, USB), solar rechargeable"
    },
    {
      type: "Power Inverters",
      capacity: "1000W - 1500W",
      dimensions: "12 x 6 x 8 in (avg.)",
      weight: "8 - 12 kgs (avg.)",
      purposes: "Home backup, small business, smart home integration",
      features: "Smartphone app control, multiple outlets"
    },
    {
      type: "Power Stations",
      capacity: "1000W - 2500W",
      dimensions: "18 x 11 x 9 in (avg.)",
      weight: "9 - 20 kgs (avg.)",
      purposes: "Extended trips, off-grid living, emergency power supply",
      features: "High wattage output, fast recharge, multiple ports"
    }
  ];

  const content = { ...blocks[0].content, items: newItems };

  const { error: updateError } = await supabase
    .from('blocks')
    .update({ content })
    .eq('id', blockId);

  if (updateError) {
    console.error('Error updating block:', updateError);
  } else {
    console.log('Successfully updated ProductClassification block with exact contents!');
  }
}

main();
