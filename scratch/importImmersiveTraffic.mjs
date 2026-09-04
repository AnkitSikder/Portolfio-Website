import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://qsaqptsicqthcpsqzbvx.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzYXFwdHNpY3F0aGNwc3F6YnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NDc3NzcsImV4cCI6MjEwMzQyMzc3N30.DC7he9cAZOVHabXHo31-cO5Ol4DU3rQDxf2In0Y-HmI';
const supabase = createClient(supabaseUrl, supabaseKey);

async function importImmersiveTraffic() {
  console.log('Starting Immersive Traffic Command import...');
  const assetPath = (n) => `/assets/projects/immersive-traffic-command/page_${n}.png`;

  const projectData = {
    title: 'Immersive Traffic Command',
    slug: 'immersive-traffic-command',
    short_description: 'VR-based traffic enforcement training for Indian police personnel',
    thumbnail: assetPath(1),
    hero_image: assetPath(1),
    category: 'Interaction Design',
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

  const blocks = [
    {
      type: 'Hero',
      content: {
        title: 'Immersive Traffic Command',
        summary: 'VR-based traffic enforcement training for Indian police personnel.',
        role: 'Interaction Designer',
        duration: '3 Months',
        heroImage: assetPath(1)
      }
    },
    {
      type: 'Image',
      content: {
        image: assetPath(2),
        width: 'contained',
        caption: 'The Problem Statement: Current training vs The Reality'
      }
    },
    {
      type: 'FeaturesGrid',
      content: {
        heading: 'The Quantum of the Problem',
        columns: 3,
        items: [
          { title: 'Economic Hemorrhage', description: 'India loses ~3% of GDP annually to inefficiency. Static signals create bottlenecks.' },
          { title: '"Golden Hour" Failure', description: '1.5 Lakh+ annual deaths. Officers "freeze" when ambulances approach.' },
          { title: 'The Safety Deficit', description: 'Rising aggression & public distrust. Minor stops turn into major conflicts.' }
        ]
      }
    },
    {
      type: 'Image',
      content: {
        image: assetPath(4),
        width: 'contained',
        caption: 'Interaction Mapping: Erratic Driver, Ambulance, Pedestrian, VIP Convoy'
      }
    },
    {
      type: 'Image',
      content: {
        image: assetPath(5),
        width: 'contained',
        caption: 'The Opportunity Triangle'
      }
    },
    {
      type: 'FeaturesGrid',
      content: {
        heading: 'Position in Interaction Design',
        columns: 2,
        items: [
          { title: 'The Design Challenge', description: 'It\'s not just about "seeing" traffic; it\'s about Proprioception and Stress Inoculation.' },
          { title: 'Feedback Loops', description: 'Visual, Haptic, and Audio feedback.' }
        ]
      }
    },
    {
      type: 'FeaturesGrid',
      content: {
        heading: 'Solution Concept',
        columns: 3,
        items: [
          { title: 'The "Indian" Chaos', description: 'Simulates mixed traffic reality: rickshaws, wrong-side driving, and stray animals.' },
          { title: 'Hand Signal Mastery', description: 'Leverages hand-tracking to verify visibility and precision.' },
          { title: 'Soft Skills & De-escalation', description: 'Scenarios focused on de-escalating angry drivers.' }
        ]
      }
    },
    {
      type: 'Image',
      content: {
        image: assetPath(8),
        width: 'contained',
        caption: 'Refined Problem Statement'
      }
    },
    {
      type: 'Timeline',
      content: {
        heading: 'Project Timeline',
        events: [
          { date: 'FEBRUARY', title: 'Phase 1: Discovery', description: 'Secondary Research\nStakeholder Mapping\nUser Personas' },
          { date: 'FEBRUARY', title: 'Phase 2: Explore', description: 'Field Site Visits\nTask Analysis\nFeasibility Study' },
          { date: 'MARCH', title: 'Phase 3: Build', description: '3D Asset Modeling\nUnity Environment\nLab Coordination' },
          { date: 'APRIL', title: 'Phase 4: Test & Iterate', description: 'UAT / NASA TLX\nDesign Refinement\nDocumentation' }
        ]
      }
    },
    {
      type: 'CombinedResearch',
      content: {
        heading: 'Primary Research Insights',
        interviews: {
          heading: 'Problem Areas',
          findings: [
            { id: 1, title: 'Gap Between Theory and Practice', description: 'Classroom learning doesn\'t prepare for chaotic real-time road decisions.' },
            { id: 2, title: 'High Learning Curve', description: 'New recruits face a confidence gap.' },
            { id: 3, title: 'Resource Constraints', description: 'Lack of fixed structure; reliance on inconsistent on-the-job learning.' }
          ]
        },
        surveys: {
          heading: 'Opportunity Areas',
          findings: [
            { id: 1, title: 'Virtual Simulation', description: 'Risk-free practice for high-stress scenarios.' },
            { id: 2, title: 'Adaptive Learning', description: 'Digital simulations tracking response to traffic flow.' },
            { id: 3, title: 'AI Integration', description: 'Data-based management and investigation procedures.' }
          ]
        },
        image: assetPath(12)
      }
    },
    {
      type: 'Image',
      content: {
        image: assetPath(13),
        width: 'full',
        caption: 'CPM-GOMS Task Analysis'
      }
    },
    {
      type: 'FeaturesGrid',
      content: {
        heading: 'The "Anti-Design Thinking" Stingray Model',
        columns: 3,
        items: [
          { title: 'Train', description: 'Feeding Gemini specific constraints, MoRTH regulations, and personas.' },
          { title: 'Develop', description: 'Simultaneous problem/solution exploration. Writing logic code while refining the flow.' },
          { title: 'Iterate', description: 'Using Synthetic Users to simulate edge cases and UX friction before physical testing.' }
        ]
      }
    },
    {
      type: 'Pipeline',
      content: {
        heading: 'Technical Execution',
        steps: [
          { title: 'Asset Creation', description: 'Low-Poly Modeling (Blender, Shapr3D) & PBR Texturing' },
          { title: 'Integration & Logic', description: 'XR Interaction Toolkit & C# Scripting with Gemini' },
          { title: 'Environment Optimization', description: 'Occlusion Culling & Lightmap Baking' }
        ]
      }
    },
    {
      type: 'Image',
      content: {
        image: assetPath(17),
        width: 'full',
        caption: 'The 7 Core Hand Signals'
      }
    },
    {
      type: 'ImageGallery',
      content: {
        layout: 'grid',
        images: [
          { url: assetPath(18), caption: 'Spatial Design & Environment' },
          { url: assetPath(19), caption: 'Instructor Character Design' }
        ]
      }
    },
    {
      type: 'MoSCoW',
      content: {
        mustHave: ['Indian Road Prospect', 'Standard Booth', 'System Logic', '7 Core Signals', 'Vehicle AI'],
        shouldHave: ['"Ghost Hand" Hints', 'Multi-modal Feedback', 'Success Cues', '3-Strike System', 'Spatial Audio'],
        couldHave: ['Reinforcement audio', 'Ergonomic UI', 'Nielsen standards', 'Rationale text'],
        wontHave: ['Avatars (Recruitment standard)', 'Weather Cycles', 'Biometrics', '22 Major Indian languages', 'Full-body control']
      }
    },
    {
      type: 'Image',
      content: {
        image: assetPath(21),
        width: 'full',
        caption: 'Process Flow'
      }
    },
    {
      type: 'FeaturesGrid',
      content: {
        heading: 'Spatial UI Design & Ergonomics',
        columns: 3,
        items: [
          { title: 'Optimized FOV', description: 'Tutorial interface centered within the 110° horizontal cone of vision.' },
          { title: 'Visual Ergonomics', description: 'Scales calculated based on spatial distance.' },
          { title: 'Spatial Depth', description: 'Fixed ergonomic distance mitigates vergence-accommodation conflict.' }
        ]
      }
    },
    {
      type: 'Comparison',
      content: {
        insight: 'Visual Scaffolding & Performance Verification',
        items: [
          { title: 'Tutorial Mode', text: 'Guided Learning with Ghost Hands, Detection Volumes, Feedback Loop, and Sequential Progression.', image: assetPath(24) },
          { title: 'Evaluation Mode', text: 'Recall & Stress testing. Scaffolding Removed, Ground Truth Triggers, Dynamic Feedback.', image: assetPath(24) }
        ]
      }
    },
    {
      type: 'ExpandableCards',
      content: {
        heading: 'Usability Heuristics (Nielsen & Shneiderman)',
        cards: [
          { title: 'Visibility of System Status', content: 'Progress bar, HUD elements for score/time, synchronized hand cutouts.' },
          { title: 'Match System & Real World', content: 'MoRTH standards, Indian junction layouts, senior trainer character.' },
          { title: 'Error Prevention', content: 'Strike system (3 lives), collision physics, Ghost Hands visual scaffolding.' },
          { title: 'Recognition vs Recall', content: 'Visual hints, spatial audio cues.' },
          { title: 'Offer Informative Feedback', content: '"Ding" sound + Tick icon for successful signals.' }
        ]
      }
    },
    {
      type: 'Learnings',
      content: {
        heading: 'Testing Feedback & Iterations',
        items: [
          { problem: 'Did you feel overwhelmed or "frozen" when the evaluation mode started?', learning: 'Initial Freezing: Two people reported feeling overwhelmed due to forgetting actions when vehicles approached.' },
          { problem: 'Is this VR practice better than reading the training manual?', learning: 'Effectiveness: VR practice is universally considered superior because of actual engagement, real-scenario practice, and multi-sensory experiences.' },
          { problem: 'Did the Invisible Detection Boxes accurately catch your hand gestures?', learning: 'Accuracy Issues: Detection was sometimes inconsistent. Needed adjustments for height issues and box sizes.' }
        ]
      }
    },
    {
      type: 'Image',
      content: {
        image: assetPath(31),
        width: 'full',
        caption: 'NASA-TLX Responses'
      }
    }
  ];

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

  console.log('Successfully created Immersive Traffic Command project and blocks!');
}

importImmersiveTraffic();
