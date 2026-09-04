import React, { useEffect } from 'react';
import ProjectHero from '../../components/case-study/ProjectHero';
import ProjectRenderer, { getSectionList } from '../../components/case-study/ProjectRenderer';
import SectionProgressNav from '../../components/case-study/SectionProgressNav';
import { getHeroProps, getBodyBlocks } from '../../utils/projectUtils';

export default function ImmersiveTraffic() {
  const project = {
  "id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
  "title": "Immersive Traffic Command",
  "slug": "vrtraffic",
  "short_description": "A VR training system for smarter, safer traffic decisions.",
  "thumbnail": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/thumbnails/1788331220380-kgfv3yef4bd.png",
  "hero_image": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/heroes/1788331223892-qjkosb1rbk.png",
  "category": "Virtual Reality",
  "status": "Published",
  "featured": true,
  "display_order": 1,
  "created_at": "2026-09-02T06:40:12.939371+00:00",
  "updated_at": "2026-09-02T09:45:11.105+00:00",
  "logo_icon": null,
  "blocks": [
    {
      "id": "894bdf52-e2d4-4422-b2c1-f336492ea2de",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "Hero",
      "content": {
        "role": " Interaction Designer",
        "title": "Immersive Traffic Command",
        "tools": [
          "Unity · Blender · Shapr3D · VS Code · Gemini"
        ],
        "summary": "A risk-free training environment where traffic personnel can practise hand signals, traffic coordination and high-pressure decision-making before facing real-world intersections.",
        "category": "",
        "duration": "1.5 months",
        "toolsRaw": "Unity · Blender · Shapr3D · VS Code · Gemini",
        "heroImage": ""
      },
      "order_index": 0,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },
    {
      "id": "06835669-d3d3-4a87-9793-d0264e1b2c11",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "GapAnalysis",
      "content": {
        "heading": "THE PROBLEM",
        "gapTitle": "The gap",
        "leftItems": [
          "Classroom",
          "Static / theoretical",
          "Hazardous"
        ],
        "leftTitle": "TRAINING",
        "rightItems": [
          "High-speed traffic",
          "Mixed vehicles",
          "Noise",
          "Emergency situations",
          "Aggressive drivers"
        ],
        "rightTitle": "REALITY",
        "subheading": "Traffic training breaks down where reality begins.",
        "consequences": [
          {
            "title": "Decision-making",
            "description": "Managing multiple moving priorities under pressure."
          },
          {
            "title": "Safety",
            "description": "Mistakes can affect both officers and road users."
          },
          {
            "title": "Consistency",
            "description": "Training does not fully prepare officers for unpredictable intersections."
          }
        ],
        "leftItemsRaw": "Classroom, Static / theoretical, Hazardous",
        "gapDescription": "Officers are expected to make high-stakes decisions in environments they rarely get to practise safely.",
        "problemStatement": ""
      },
      "order_index": 1,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },
    {
      "id": "68e616c5-0103-4758-a214-2f6e6947621a",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "UserContext",
      "content": {
        "intro": "I needed to understand what happens when the intersection stops behaving predictably.",
        "heading": "UNDERSTANDING THE USER",
        "navLabel": "",
        "userType": "Traffic constables working in high-stress, mixed-traffic environments.",
        "managesList": [
          "Traffic flow",
          "Aggressive drivers",
          "Emergency vehicles",
          "Pedestrians",
          "VIP convoys",
          "Heat",
          "Noise",
          "Blind spots"
        ],
        "managesImage": "",
        "managesTitle": "They manage",
        "investigations": [
          "training vs real-world traffic",
          "hand-signal effectiveness",
          "emergency situations",
          "attention and prioritisation",
          "fatigue and environmental stress",
          "conflict management"
        ],
        "researchHeading": "Primary research",
        "researchSubheading": "3 police officers interviewed",
        "researchImage": "/interview.jpg"
      },
      "order_index": 2,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },
    {
      "id": "bff5da28-d9f5-4b0f-bde7-08607795fca8",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "ResearchInsights",
      "content": {
        "intro": "The biggest problem wasn't knowing the rules.\nIt was applying them under pressure.",
        "heading": "RESEARCH INSIGHTS",
        "insights": [
          {
            "title": "Theory ≠ readiness",
            "number": "01",
            "description": "Classroom learning does not adequately prepare recruits for chaotic, real-time road decisions."
          },
          {
            "title": "Confidence collapses under pressure",
            "number": "02",
            "description": "New recruits face a confidence gap when multiple events happen simultaneously."
          },
          {
            "title": "Experience is doing the work training should do",
            "number": "03",
            "description": "With limited structured practice, critical skills are often learned through inconsistent on-the-job exposure."
          }
        ],
        "navLabel": "RESEARCH INSIGHTS",
        "opportunityText": "Let officers safely experience the difficult situations before they encounter them on the road.",
        "opportunityPrefix": "This created an opportunity:"
      },
      "order_index": 3,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },

    {
      "id": "0a1ae599-d4c5-42a5-af06-94dd9c6c9666",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "SolutionCapabilities",
      "content": {
        "heading": "THE SOLUTION",
        "navLabel": "THE SOLUTION",
        "subtitle": "A VR training system built around three capabilities.",
        "productName": "Immersive Traffic Command",
        "capabilities": [
          {
            "title": "Experience realistic chaos",
            "number": "01",
            "listItems": [
              "mixed vehicles",
              "rickshaws",
              "wrong-side driving",
              "pedestrians",
              "stray animals",
              "emergency situations"
            ],
            "description": "Simulate Indian traffic conditions:"
          },
          {
            "title": "Learn through physical action",
            "number": "02",
            "description": "Instead of selecting answers on a screen, trainees perform the required hand signals and receive real-time feedback."
          },
          {
            "title": "Build confidence under pressure",
            "number": "03",
            "description": "Start with guided learning and progressively remove assistance until the trainee can respond independently."
          }
        ]
      },
      "order_index": 5,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },
    {
      "id": "fd804acc-23a0-4444-97bc-ba3768226944",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "Image",
      "content": {
        "alt": "",
        "image": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332486918-ym8amv1hso.jpg",
        "width": "full",
        "caption": "",
        "heading": "CPM-GOMS (Cognitive-Perceptual-Motor GOMS)",
        "navLabel": "CPM-GOMS"
      },
      "order_index": 6,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },
    {
      "id": "16142f58-3e7f-4b5e-b601-47790c120214",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "Image",
      "content": {
        "alt": "",
        "image": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332008041-ui8wdubu86l.png",
        "width": "full",
        "caption": "",
        "heading": "The 7 Core Hand Signals: Execution & Purpose",
        "navLabel": "Hand Signals"
      },
      "order_index": 7,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },
    {
      "id": "9a416e44-b93c-4e55-94fa-7fb5ab462b20",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "ImageGallery",
      "content": {
        "title": "Spatial Design & Environmental Architecture",
        "images": [
          {
            "alt": "",
            "url": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332290956-4jrvt0dtu9k.png",
            "caption": ""
          },
          {
            "alt": "",
            "url": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332810802-kq6s9hev9r.png",
            "caption": ""
          },
          {
            "alt": "",
            "url": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332362875-gafyybzpel.png",
            "caption": ""
          }
        ],
        "layout": "bento",
        "caption": "",
        "navLabel": "Spatial Design"
      },
      "order_index": 8,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },
    {
      "id": "39abb12c-936f-4c4d-a2d6-d895925bcd97",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "Image",
      "content": {
        "alt": "",
        "image": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332039953-rmda83plgwo.jpg",
        "width": "contained",
        "caption": "",
        "heading": "Instructor Character Design",
        "navLabel": "Character Design"
      },
      "order_index": 9,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },
    {
      "id": "2d693186-15f5-4995-aace-f86a241987dc",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "Image",
      "content": {
        "alt": "",
        "image": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788331706336-oyayhka60p.jpg",
        "width": "contained",
        "caption": "",
        "heading": "MoSCoW Matrix",
        "navLabel": "MoSCoW Matrix"
      },
      "order_index": 10,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },
    {
      "id": "c6c3aac6-0eb6-4bc5-98e5-3cb371c0b10c",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "Image",
      "content": {
        "alt": "",
        "image": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332517992-pzwoemvpfg.jpg",
        "width": "full",
        "caption": "",
        "heading": "Process Flow",
        "navLabel": "Process Flow"
      },
      "order_index": 11,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },
    {
      "id": "5329f7c9-f7bf-4e05-9cae-c5061120d27f",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "VRErgonomics",
      "content": {
        "intro": "In VR, UI has to coexist with the real task...",
        "iaDesc": "Prioritizing what needs attention now.",
        "heading": "DESIGNING INFORMATION",
        "iaTitle": "Information Architecture",
        "vrImage": "",
        "features": [
          {
            "title": "Observe",
            "description": "See the correct signal."
          },
          {
            "title": "Attempt",
            "description": "Try it yourself."
          }
        ],
        "heroImage": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332575677-6geh7yhovwk.png",
        "subheading": "AROUND THE TASK, NOT OVER IT",
        "systemImage": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332605348-iqnxtz8nidj.png",
        "featuresTitle": "Four Steps to Mastery",
        "tutorialImage": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332623490-awdscyqznbo.png",
        "ergonomicsDesc": "Keeping interactions within the natural field of view.",
        "ergonomicsTitle": "Ergonomics",
        "evaluationImage": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332631512-zzd4dzwtqoc.png",
        "learningLoopDesc": "Watch, copy, receive feedback.",
        "operationalImage": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332594904-56baz6iyihx.png",
        "learningLoopTitle": "The Learning Loop"
      },
      "order_index": 12,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },
    {
      "id": "d6bd5d6a-041c-4630-8f4e-7d174adf1a70",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "Image",
      "content": {
        "alt": "",
        "image": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332763807-oh5thnxmf5.png",
        "width": "full",
        "caption": "",
        "heading": "Nielsen's 10 Usability Heuristics Implementation",
        "navLabel": "Usability Test"
      },
      "order_index": 13,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },
    {
      "id": "d7da064c-c0f6-49ea-b271-951c6efd0495",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "Image",
      "content": {
        "alt": "",
        "image": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332056407-0ta93osjkqid.png",
        "width": "full",
        "caption": "",
        "heading": "Shneiderman's 8 Golden Rules Implementation",
        "navLabel": "Shneiderman Analysis"
      },
      "order_index": 14,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },
    {
      "id": "b96454a5-3c89-472e-b77b-1d3f1caf0d92",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "Video",
      "content": {
        "loop": true,
        "muted": true,
        "caption": "",
        "autoPlay": true,
        "navLabel": "Demo Video",
        "videoUrl": "https://drive.google.com/file/d/1aujY3L2cqdjnOWTep-twY0vNEBFH1YQ2/view?usp=sharing",
        "posterUrl": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332900025-hyhnljfm81p.png"
      },
      "order_index": 15,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    },
    {
      "id": "bb378ec3-3322-44d9-a5cd-ffee8e78eff8",
      "project_id": "df15c2fd-1a6a-4a50-8612-2e85c818cc49",
      "type": "FormativeTesting",
      "content": {
        "image": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332922360-youkscys6jh.png",
        "title": "Did it actually work?",
        "heading": "TESTING",
        "logoUrl": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788332925069-353yy7o3kwh.png",
        "navLabel": "TESTING",
        "description": "Don't imply statistical significance. This is formative usability testing. Your testing instrument includes NASA-TLX workload measures plus questions around ghost hands, audio, detection accuracy and adaptive difficulty.",
        "participantCount": "5 participants tested the simulation."
      },
      "order_index": 16,
      "created_at": "2026-09-02T09:45:12.52776+00:00",
      "updated_at": "2026-09-02T09:45:12.52776+00:00"
    }
  ]
};
  
  useEffect(() => {
    document.title = `${project.title} — Ankit Sikder`;
  }, []);

  const blocks = project.blocks || [];
  const heroProps = getHeroProps(project, blocks);
  const bodyBlocks = getBodyBlocks(blocks);

  const bodySections = getSectionList(bodyBlocks);
  const navSections = [
    { id: 'project-hero', label: 'Intro' },
    ...bodySections,
  ];

  return (
    <article className="bg-background min-h-screen">
      <SectionProgressNav sections={navSections} />
      <div id="project-hero">
        <ProjectHero {...heroProps} />
      </div>
      <ProjectRenderer blocks={bodyBlocks} />
    </article>
  );
}
