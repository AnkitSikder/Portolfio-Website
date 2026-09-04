import React, { useEffect } from 'react';
import ProjectHero from '../../components/case-study/ProjectHero';
import ProjectRenderer, { getSectionList } from '../../components/case-study/ProjectRenderer';
import SectionProgressNav from '../../components/case-study/SectionProgressNav';
import { getHeroProps, getBodyBlocks } from '../../utils/projectUtils';

export default function AuraCharge() {
  const project = {
  "id": "03c6cc48-b7d6-40dc-a762-5be2ada03f69",
  "title": "Aura Charge",
  "slug": "auracharge",
  "short_description": "A multi-functional product concept combining device charging with smart home features.",
  "thumbnail": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/thumbnails/1788349026152-csrdy0cptka.jpg",
  "hero_image": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/heroes/1788349034149-ykc25d3f0j.jpg",
  "category": "Product Design",
  "status": "Published",
  "featured": true,
  "display_order": 1,
  "created_at": "2026-09-02T10:34:07.565396+00:00",
  "updated_at": "2026-09-02T13:13:23.885+00:00",
  "logo_icon": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/logos/1788348998868-f4k3jbjiypv.png",
  "blocks": [
    {
      "id": "76d5879b-6787-4141-80b6-8be2880cfa54",
      "project_id": "03c6cc48-b7d6-40dc-a762-5be2ada03f69",
      "type": "Hero",
      "content": {
        "role": "Product Designer",
        "title": "Aura Charge",
        "tools": [
          "Keyshot  ·  Creo  ·  Procreate  ·  Figma  ·  Illustrator  ·  Premiere Pro"
        ],
        "summary": "Redefining power backup into a unified, smart energy experience for the modern home.",
        "duration": "2 months",
        "toolsRaw": "Keyshot  ·  Creo  ·  Procreate  ·  Figma  ·  Illustrator  ·  Premiere Pro",
        "heroImage": ""
      },
      "order_index": 0
    },
    {
      "id": "aura-intro",
      "type": "AuraChargeIntro",
      "content": {
        "heading": "Aura Charge — more than a power backup.",
        "intro": "Aura Charge is a multifunctional system combining device charging, power backup, and smart-home interaction. It transforms a traditionally bulky utility into a calm, integrated part of everyday life.",
        "secondary": "Focusing on both product and interaction design, this concept reduces gadget clutter and creates a seamless experience for energy management and environmental control.",
        "audience": [
          "Tech-savvy homeowners",
          "Urban dwellers",
          "Small business owners",
          "Smart-home integrators"
        ],
        "image": "/AURACHARGE_PORTFOLIO_ASSETS/01_hero/hero_product.png",
        "kpis": [
          { "title": "PRODUCT + UX", "value": "Product design & interaction" },
          { "title": "UNIFIED SYSTEM", "value": "Charge + backup + control" },
          { "title": "CORE INTENT", "value": "Simplify energy management" }
        ],
        "navLabel": "Introduction"
      },
      "order_index": 1
    },
    {
      "id": "aura-problem",
      "type": "AuraChargeProblem",
      "content": {
        "heading": "Power isn't the problem. Fragmentation is.",
        "statements": [
          "Users juggle scattered devices for charging and backup. Cords and disconnected gadgets create visual clutter, while traditional power backup solutions remain bulky and unrefined."
        ],
        "image": "/AURACHARGE_PORTFOLIO_ASSETS/02_intro_problem/traditional_inverter.png",
        "painPoints": [
          { "title": "CLUTTER", "description": "Multiple devices, cables and power accessories compete for space." },
          { "title": "FRAGMENTATION", "description": "Charging, backup and control are handled through separate interactions." },
          { "title": "BULK", "description": "Existing power-backup products prioritize utility over everyday integration." },
          { "title": "DISCONNECTED EXPERIENCE", "description": "Power management becomes something users have to actively manage rather than something that quietly supports them." }
        ],
        "navLabel": "The Problem"
      },
      "order_index": 2
    },
    {
      "id": "aura-challenge",
      "type": "AuraChargeChallenge",
      "content": {
        "heading": "Design Challenge",
        "inputs": [
          { "id": "1", "title": "Portable & Compact", "description": "Minimal footprint, maximum efficiency." },
          { "id": "2", "title": "Power Backup", "description": "Provides reliable power backup for devices." },
          { "id": "3", "title": "User Environment Enhancement", "description": "Enhances user environment with intuitive design." }
        ],
        "outcome": { "title": "Unified Device" },
        "navLabel": "Design Challenge"
      },
      "order_index": 3
    },
    {
      "id": "ad7647f5-327b-4672-9327-1d699f3c210a",
      "project_id": "03c6cc48-b7d6-40dc-a762-5be2ada03f69",
      "type": "SWOT",
      "content": {
        "threats": [
          "Lead-Acid batteries",
          "Pure Sine Wave",
          "Technology shifts"
        ],
        "strengths": [
          "Innovative smart and solar inverters",
          "Trusted in traditional power backup",
          "Intuitive interfaces, mobile apps",
          "High-quality interfaces, user-centric",
          "Reputation for innovative products"
        ],
        "weaknesses": [
          "Modern but bulky",
          "Manual, basic monitoring",
          "Industrial look, black/grey",
          "Basic interfaces, limited app support",
          "Limited integration"
        ],
        "marketImage": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788350337171-mgo1tyoss5.jpg",
        "opportunities": [
          "Smart Features: Wi-Fi, Bluetooth, voice control",
          "Remote monitoring",
          "App-based control in premium models"
        ]
      },
      "order_index": 4
    },
    {
      "id": "7922691d-c734-442e-b51e-8000b4a969e5",
      "project_id": "03c6cc48-b7d6-40dc-a762-5be2ada03f69",
      "type": "ProductClassification",
      "content": {
        "items": [
          {
            "type": "Power Banks",
            "weight": "0.2 - 0.6 kgs (avg.)",
            "capacity": "5,000 mAh - 30,000 mAh",
            "features": "USB ports, portable, lightweight",
            "purposes": "Charging smartphones, tablets, small gadgets",
            "dimensions": "4 x 2 x 1 in (avg.)"
          },
          {
            "type": "Power Houses",
            "weight": "2 - 6 kgs (avg.)",
            "capacity": "200W - 500W",
            "features": "Multiple ports (AC, USB), solar rechargeable",
            "purposes": "Camping, small home appliances, emergency backup",
            "dimensions": "8 x 5 x 5 - 11 x 8 x 6 in (avg.)"
          },
          {
            "type": "Power Inverters",
            "weight": "8 - 12 kgs (avg.)",
            "capacity": "1000W - 1500W",
            "features": "Smartphone app control, multiple outlets",
            "purposes": "Home backup, small business, smart home integration",
            "dimensions": "12 x 6 x 8 in (avg.)"
          },
          {
            "type": "Power Stations",
            "weight": "9 - 20 kgs (avg.)",
            "capacity": "1000W - 2500W",
            "features": "High wattage output, fast recharge, multiple ports",
            "purposes": "Extended trips, off-grid living, emergency power supply",
            "dimensions": "18 x 11 x 9 in (avg.)"
          }
        ]
      },
      "order_index": 5
    },

    {
      "id": "aura-benchmark",
      "type": "AuraChargeBenchmark",
      "content": {
        "heading": "Benchmark Product",
        "image": "/AURACHARGE_PORTFOLIO_ASSETS/Frame 1984079505.jpg",
        "navLabel": "Benchmark"
      },
      "order_index": 7
    },
    {
      "id": "aura-research",
      "type": "AuraChargeResearch",
      "content": {
        "heading": "Primary Research",
        "interviews": {
          "participants": "10 participants",
          "demographics": "6 male, 4 female · Age 24–50",
          "summary": "Across interviews, portability, charging speed and reliability repeatedly surfaced as the strongest concerns.",
          "wordCloud": [
            { "text": "cable", "weight": 3, "color": "text-green-600" },
            { "text": "heavy", "weight": 4, "color": "text-purple-900" },
            { "text": "unreliable", "weight": 2, "color": "text-yellow-400" },
            { "text": "slow", "weight": 4, "color": "text-blue-800" },
            { "text": "design", "weight": 2, "color": "text-green-400" },
            { "text": "forget", "weight": 3, "color": "text-purple-800" },
            { "text": "battery", "weight": 5, "color": "text-teal-500" },
            { "text": "indicator", "weight": 2, "color": "text-green-500" },
            { "text": "short", "weight": 3, "color": "text-teal-600" },
            { "text": "inconvenient", "weight": 2, "color": "text-purple-800" },
            { "text": "bulky", "weight": 4, "color": "text-purple-900" },
            { "text": "dead", "weight": 3, "color": "text-teal-500" },
            { "text": "expensive", "weight": 2, "color": "text-blue-500" },
            { "text": "charge", "weight": 3, "color": "text-yellow-500" },
            { "text": "life", "weight": 3, "color": "text-green-500" },
            { "text": "overheat", "weight": 2, "color": "text-purple-700" },
            { "text": "charging", "weight": 3, "color": "text-teal-600" },
            { "text": "ugly", "weight": 2, "color": "text-green-500" },
            { "text": "clutter", "weight": 3, "color": "text-blue-700" }
          ]
        },
        "survey": {
          "participants": "38 respondents",
          "demographics": "Approx. 60% male, 40% female · Age 18–50",
          "data": [
            { "label": "Battery capacity", "percentage": 90 },
            { "label": "Reliability of portable solutions", "percentage": 85 },
            { "label": "Faster charging", "percentage": 80 },
            { "label": "Compact form factor", "percentage": 75 },
            { "label": "Durability / brand trust", "percentage": 65 },
            { "label": "Dissatisfaction with bulk", "percentage": 60 },
            { "label": "Aesthetic design importance", "percentage": 50 }
          ]
        },
        "callout": "The design brief was becoming clear: make backup power reliable enough to trust, compact enough to live with, and simple enough to forget about.",
        "navLabel": "User Research"
      },
      "order_index": 8
    },
    {
      "id": "7569554e-f24e-43b0-88ac-637e47054b22",
      "project_id": "03c6cc48-b7d6-40dc-a762-5be2ada03f69",
      "type": "Image",
      "content": {
        "alt": "",
        "image": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/blocks/1788350276942-dm685o55t95.jpg",
        "width": "full",
        "caption": "",
        "heading": "Mind Map",
        "navLabel": "Mind Map"
      },
      "order_index": 9
    },
    {
      "id": "aura-competitor",
      "type": "AuraChargeCompetitor",
      "content": {
        "heading": "Competitor Analysis",
        "matrix": {
          "columns": [
            { "name": "Exide", "logo": "/AURACHARGE_PORTFOLIO_ASSETS/05_competitor_personas/exide_logo.png" },
            { "name": "Luminous", "logo": "/AURACHARGE_PORTFOLIO_ASSETS/05_competitor_personas/luminous_logo.png" },
            { "name": "V-Guard", "logo": "/AURACHARGE_PORTFOLIO_ASSETS/05_competitor_personas/vguard_logo.png" }
          ],
          "rows": [
            { "feature": "Technology", "values": ["Lead-Acid batteries", "Lead-Acid, Gel, Lithium-ion", "Lead-Acid, Lithium-ion"] },
            { "feature": "Models", "values": ["Pure Sine Wave", "Pure Sine Wave, Square Wave, Hybrid", "Pure Sine Wave, Digital UPS, Solar"] },
            { "feature": "Backup Time", "values": ["Decent, limited by Lead-Acid", "Comparable, efficient in new models", "Efficient, extended due to power management"] },
            { "feature": "Smart Features", "values": ["Limited integration", "Wi-Fi connectivity, Remote monitoring", "Wi-Fi, Bluetooth, voice control"] },
            { "feature": "Control", "values": ["Manual, basic monitoring", "App-based control in premium models", "Advanced control via mobile apps"] },
            { "feature": "Design", "values": ["Bulky, functional", "Modern but bulky", "Sleek, modern"] },
            { "feature": "CMF Choices", "values": ["Industrial look, black/grey", "App-based control in premium models", "Advanced control via mobile apps"] },
            { "feature": "Brand Identity", "values": ["Trusted in traditional power backup", "Innovative in smart and solar inverters", "Reputation for innovative products"] },
            { "feature": "UI/UX", "values": ["Basic interfaces, limited app support", "Intuitive interfaces, mobile apps", "High-quality interfaces, user-centric"] }
          ]
        },
        "features": [
          "Intelligent Energy Management",
          "Remote Monitoring and Control",
          "Integration with Smart Home Systems",
          "Efficient Charging and Discharging",
          "User-Friendly Interface",
          "Fuse Detection",
          "Talk Aloud Mode",
          "Emergency Power Backup",
          "Data Logging and Reporting",
          "Safety Features",
          "Compatibility with Solar Energy",
          "In-Built Detachable Flashlight",
          "Self Diagnostics"
        ],
        "navLabel": "Competitor Analysis"
      },
      "order_index": 10
    },
    {
      "id": "aura-persona",
      "type": "AuraChargePersona",
      "content": {
        "heading": "Two users. Different routines. Same need for control.",
        "personas": [
          { 
            "name": "Khushboo Singh",
            "image": "/AURACHARGE_PORTFOLIO_ASSETS/05_competitor_personas/khushboo_avatar.png",
            "role": "Junior Assistant Researcher, Botany",
            "demographics": "Age 28 • Female • Uttarakhand",
            "expectations": [
              "Inverters with remote accessibility and solar recharge.",
              "Expandable, high capacity battery with visual & audio feedback.",
              "Easy installation and maintenance."
            ],
            "insights": [
              "Unpredictable 8-16 hour workdays making it hard to balance job and home care.",
              "Elderly parents are often home alone and face prolonged power outages during monsoons."
            ]
          },
          { 
            "name": "Tapashi Reddy",
            "image": "/AURACHARGE_PORTFOLIO_ASSETS/05_competitor_personas/tapashi_avatar.png",
            "role": "Homemaker",
            "demographics": "Age 36 • Female • Bangalore",
            "expectations": [
              "Durable, easy to move and carry.",
              "Looks like a piece of home decor with power consumption monitoring.",
              "App connectivity for easy access and control."
            ],
            "insights": [
              "Manages a flat and cares for two children while husband works outside.",
              "Frequently moves heavy gadgets and needs to constantly monitor appliance usage by children for safety."
            ]
          }
        ],
        "navLabel": "Personas"
      },
      "order_index": 11
    },
    {
      "id": "aura-ideation",
      "type": "AuraChargeGallery",
      "content": {
        "heading": "Before deciding what Aura Charge should be, I explored what it could become.",
        "narrative": "The original ideation explores appliance forms, power-station form factors, handles, display placement, wheels, environmental integration and multiple body configurations, eventually moving toward an integrated, upright, compact appliance with a clear front interface.",
        "layout": "single",
        "images": [
          "/AURACHARGE_PORTFOLIO_ASSETS/06_ideation_brand/ideation_sketches.jpg"
        ],
        "navLabel": "Ideation"
      },
      "order_index": 12
    },
    {
      "id": "aura-brand",
      "type": "AuraChargeBrand",
      "content": {
        "heading": "Style Guide",
        "logos": [
          "/AURACHARGE_PORTFOLIO_ASSETS/99_all_embedded/Logo Design Margin-11 2.png",
          "/AURACHARGE_PORTFOLIO_ASSETS/99_all_embedded/highfi_mobile_overview.png"
        ],
        "typography": {
          "name": "Kumbh Sans",
          "weights": ["Regular", "Medium", "SemiBold", "Bold", "ExtraBold"]
        },
        "colors": [
          "#899BAB", "#77ACC7", "#33506C",
          "#AAADB1", "#E0E5E9", "#7B92A9",
          "#DCDAD9", "#FFFFFF", "#4AC140",
          "#000000"
        ],
        "marginSpacing": {
          "heading": "Margin & Spacing",
          "items": [
            {
              "image": "/AURACHARGE_PORTFOLIO_ASSETS/99_all_embedded/Group 404.png",
              "stats": [
                { "label": "Margin", "value": "22px" },
                { "label": "Columns", "value": "9" },
                { "label": "Gutter", "value": "22px" }
              ]
            },
            {
              "image": "/AURACHARGE_PORTFOLIO_ASSETS/99_all_embedded/Frame 1984079519.png",
              "stats": [
                { "label": "Column", "value": "6" },
                { "label": "Margin", "value": "16px" },
                { "label": "Gutter", "value": "16px" }
              ]
            }
          ]
        },
        "informationArchitecture": [
          {
            "heading": "Information Architecture for Inverter Display",
            "image": "/AURACHARGE_PORTFOLIO_ASSETS/99_all_embedded/Architecture1.png"
          },
          {
            "heading": "Information Architecture for Mobile App",
            "image": "/AURACHARGE_PORTFOLIO_ASSETS/99_all_embedded/Architecture2.png"
          }
        ],
        "lowFidelity": {
          "heading": "Low-Fidelity Screens",
          "description": "The first pass focused on information placement, navigation and task grouping rather than visual polish, establishing the core structure for the dashboard, rooms, analytics, and settings.",
          "image": "/AURACHARGE_PORTFOLIO_ASSETS/99_all_embedded/Low Fidelity1.jpg"
        },
        "navLabel": "Visual Language"
      },
      "order_index": 13
    },

    {
      "id": "aura-highfi",
      "type": "AuraChargeGallery",
      "content": {
        "heading": "Hi-Fidelity Screens",
        "layout": "single",
        "images": [
          "/AURACHARGE_PORTFOLIO_ASSETS/99_all_embedded/embedded_05.png",
          "/AURACHARGE_PORTFOLIO_ASSETS/99_all_embedded/embedded_06.png",
          "/AURACHARGE_PORTFOLIO_ASSETS/00_source/auracharge GIF (1).gif"
        ],
        "navLabel": "High-Fi Screens"
      },
      "order_index": 16
    },
    {
      "id": "aura-context-renders",
      "type": "AuraChargeGallery",
      "content": {
        "heading": "The Final Experience",
        "narrative": "A look at the final product UI embedded directly within its physical hardware and real-world environments.",
        "layout": "single",
        "images": [
          "/AURACHARGE_PORTFOLIO_ASSETS/00_source/auracharge_infographic_v3.jpg",
          "/AURACHARGE_PORTFOLIO_ASSETS/00_source/Screenshot 2026-09-03 045312.png",
          "/AURACHARGE_PORTFOLIO_ASSETS/10_final_renders/context_render_06.jpg",
          "/AURACHARGE_PORTFOLIO_ASSETS/00_source/Recording 2024-07-04 at 21.04.00.gif"
        ],
        "navLabel": "Renders"
      },
      "order_index": 18
    },


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
