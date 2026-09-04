import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://qsaqptsicqthcpsqzbvx.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzYXFwdHNpY3F0aGNwc3F6YnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NDc3NzcsImV4cCI6MjEwMzQyMzc3N30.DC7he9cAZOVHabXHo31-cO5Ol4DU3rQDxf2In0Y-HmI';
const supabase = createClient(supabaseUrl, supabaseKey);

async function updateHeroImage() {
  const imagePath = 'C:\\Users\\AnkitRaj\\.gemini\\antigravity-ide\\brain\\8a481a5a-1a7d-4028-8716-90d39d704188\\.user_uploaded\\media_1788152847462.png';
  
  if (!fs.existsSync(imagePath)) {
    console.error('Image not found:', imagePath);
    return;
  }

  const fileBuffer = fs.readFileSync(imagePath);
  const fileName = `auracharge/hero-${Date.now()}.png`;

  console.log('Uploading image to Supabase...');
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('portfolio-media')
    .upload(fileName, fileBuffer, {
      contentType: 'image/png',
      cacheControl: '3600',
      upsert: false
    });

  if (uploadError) {
    console.error('Upload error:', uploadError);
    return;
  }

  const { data: { publicUrl } } = supabase.storage
    .from('portfolio-media')
    .getPublicUrl(fileName);

  console.log('Uploaded successfully. URL:', publicUrl);
}

updateHeroImage();
