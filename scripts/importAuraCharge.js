import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Provide placeholders for Supabase URL and Key if not available in env
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://qsaqptsicqthcpsqzbvx.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzYXFwdHNpY3F0aGNwc3F6YnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NDc3NzcsImV4cCI6MjEwMzQyMzc3N30.DC7he9cAZOVHabXHo31-cO5Ol4DU3rQDxf2In0Y-HmI';
const supabase = createClient(supabaseUrl, supabaseKey);

async function importAuraCharge() {
  console.log('Starting AuraCharge import...');

  // 1. Create Project
  const projectData = {
    title: 'AuraCharge',
    slug: 'auracharge',
    short_description: 'A multi-functional product concept combining device charging with smart home features.',
    thumbnail: '', // Placeholder
    hero_image: '', // Placeholder
    category: 'Product Design',
    status: 'Published',
    featured: true,
    display_order: 1,
  };

  const { data: project, error: projectError } = await supabase
    .from('projects')
    .upsert([projectData], { onConflict: 'slug' })
    .select()
    .single();

  if (projectError) {
    console.error('Error creating project:', projectError);
    return;
  }
  
  console.log('Project created/updated with ID:', project.id);

  // 2. Define Blocks
  const blocks = [
    {
      type: 'Hero',
      content: {
        title: 'AuraCharge',
        summary: 'Minimal footprint, maximum efficiency.',
        role: 'Product Designer',
        duration: '2023 - 2024',
        heroImage: ''
      }
    },
    {
      type: 'Overview',
      content: {
        title: 'About The Project',
        description: 'AuraCharge is a multi-functional product concept that combines device charging with smart home features...',
        audience: ['Homeowners', 'Tech Enthusiasts']
      }
    },
    {
      type: 'Text',
      content: {
        eyebrow: 'Design Challenge',
        heading: 'Minimal footprint, maximum efficiency',
        body: 'Portable & Compact. Provides reliable power backup for devices. Unified Device. Enhances user environment with intuitive design.',
        alignment: 'left'
      }
    },
    {
      type: 'ProductClassification',
      content: {
        items: [
          {
            type: 'Power Stations',
            capacity: 'High',
            dimensions: 'Large',
            weight: 'Heavy',
            purposes: 'Off-grid, RVs, Emergency backup',
            features: 'Multiple outlets, solar charging, high power output.',
            image: ''
          },
          {
            type: 'Power Houses',
            capacity: 'Medium',
            dimensions: 'Medium',
            weight: 'Moderate',
            purposes: 'Home backup, small appliances',
            features: 'Reliable backup, decent capacity, some smart features.',
            image: ''
          },
          {
            type: 'Power Inverters',
            capacity: 'Varies',
            dimensions: 'Varies',
            weight: 'Varies',
            purposes: 'Converting DC to AC for vehicles or solar',
            features: 'Efficient conversion, pure sine wave.',
            image: ''
          },
          {
            type: 'Power Banks',
            capacity: 'Low',
            dimensions: 'Small',
            weight: 'Light',
            purposes: 'Mobile devices, laptops',
            features: 'Portable, USB charging, fast charging.',
            image: ''
          }
        ]
      }
    },
    {
      type: 'SWOT',
      content: {
        strengths: ['Innovative smart and solar inverters', 'Trusted in traditional power backup', 'Intuitive interfaces, mobile apps', 'High-quality interfaces, user-centric', 'Reputation for innovative products'],
        weaknesses: ['Modern but bulky', 'Manual, basic monitoring', 'Industrial look, black/grey', 'Basic interfaces, limited app support', 'Limited integration'],
        opportunities: ['Smart Features: Wi-Fi, Bluetooth, voice control', 'Remote monitoring', 'App-based control in premium models'],
        threats: ['Lead-Acid batteries', 'Pure Sine Wave', 'Technology shifts']
      }
    },
    {
      type: 'Benchmark',
      content: {
        items: [
          {
            name: 'Anker 521 PowerHouse - 256Wh | 200W',
            brand: 'Anker',
            attributes: ['Portable', '256Wh Capacity'],
            image: ''
          },
          {
            name: 'Anker PowerHouse 767 Portable Power Station with App Connectivity',
            brand: 'Anker',
            attributes: ['App Connectivity', 'Large Capacity'],
            image: ''
          },
          {
            name: 'Anker PowerHouse 757-1229Wh | 1500W Portable Power Station',
            brand: 'Anker',
            attributes: ['1229Wh', '1500W Output'],
            image: ''
          }
        ]
      }
    },
    {
      type: 'DesignSystem',
      content: {
        heading: 'Style Guide',
        subheading: 'Typography and Color Palette',
        colors: [
          { name: 'Green', hex: '4AC140' },
          { name: 'Light Grey', hex: 'DCDAD9' },
          { name: 'Grey', hex: 'AAADB1' },
          { name: 'Dark Grey', hex: '899BAB' },
          { name: 'Black', hex: '000000' },
          { name: 'White', hex: 'FFFFFF' },
          { name: 'Off White', hex: 'E0E5E9' },
          { name: 'Light Blue', hex: '77ACC7' },
          { name: 'Blue Grey', hex: '7B92A9' },
          { name: 'Dark Blue', hex: '33506C' }
        ],
        typography: [
          { family: 'Kumbh Sans', weights: ['Regular', 'Medium', 'SemiBold', 'Bold', 'ExtraBold'] }
        ]
      }
    },
    {
      type: 'MindMap',
      content: {
        topic: 'AuraCharge',
        branches: [
          { name: 'Core Features', subtopics: ['Intelligent Energy Management', 'Remote Monitoring and Control', 'Integration with Smart Home Systems'] },
          { name: 'Charging & Power', subtopics: ['Efficient Charging and Discharging', 'Emergency Power Backup', 'Compatibility with Solar Energy'] },
          { name: 'User Experience', subtopics: ['User-Friendly Interface', 'Talk Aloud Mode', 'In-Built Detachable Flashlight'] },
          { name: 'Safety & Data', subtopics: ['Fuse Detection', 'Data Logging and Reporting', 'Safety Features', 'Self Diagnostics'] }
        ]
      }
    },
    {
      type: 'ProductRender',
      content: {
        renders: [
          { image: '', layout: 'full', caption: 'Narzo Grey' },
          { image: '', layout: 'half', caption: 'Rhodium Red' },
          { image: '', layout: 'half', caption: 'Jade Green' },
          { image: '', layout: 'half', caption: 'Midnight Blue' }
        ]
      }
    }
  ];

  // Insert Blocks
  // First delete existing blocks
  await supabase.from('blocks').delete().eq('project_id', project.id);

  const blocksToInsert = blocks.map((b, idx) => ({
    project_id: project.id,
    type: b.type,
    content: b.content,
    order_index: idx,
  }));

  const { error: blocksError } = await supabase.from('blocks').insert(blocksToInsert);
  if (blocksError) {
    console.error('Error creating blocks:', blocksError);
    return;
  }

  console.log('Successfully created AuraCharge project and blocks!');
}

importAuraCharge();
