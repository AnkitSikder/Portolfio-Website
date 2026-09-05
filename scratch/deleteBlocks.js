// Run this script to delete all blocks from Supabase
// Usage: node scratch/deleteBlocks.js

import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

const envContent = fs.readFileSync('.env.local', 'utf-8');
const env = Object.fromEntries(
  envContent.split('\n').filter(l => l.includes('=')).map(line => {
    const [k, ...v] = line.split('=');
    return [k.trim(), v.join('=').trim().replace(/"/g, '')];
  })
);

const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY);

const { error } = await supabase.from('blocks').delete().neq('id', '00000000-0000-0000-0000-000000000000');
if (error) {
  console.error('Error deleting blocks:', error.message);
} else {
  console.log('All blocks deleted successfully.');
}
