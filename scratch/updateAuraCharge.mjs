import fs from 'fs';
import path from 'path';

const filePath = 'C:/Users/AnkitRaj/Downloads/Portfolio Antigravity/src/pages/projects/AuraCharge.jsx';
let content = fs.readFileSync(filePath, 'utf-8');

// The new blocks array based on the prompt requirements
const newBlocksJSON = `[
    {
      "id": "76d5879b-6787-4141-80b6-8be2880cfa54",
      "project_id": "03c6cc48-b7d6-40dc-a762-5be2ada03f69",
      "type": "Hero",
      "content": {
        "role": "Product Designer",
        "title": "AuraCharge",
        "tools": [
          "Fusion  ·  KeyShot"
        ],
        "summary": "Minimal footprint, maximum efficiency.",
        "duration": "2 months",
        "toolsRaw": "Fusion  ·  KeyShot",
        "heroImage": ""
      },
      "order_index": 0
    },
    {
      "id": "aura-intro",
      "type": "AuraChargeIntro",
      "content": {
        "heading": "AuraCharge — more than a power backup.",
        "intro": "AuraCharge is a multifunctional product concept that combines device charging, power backup and smart-home interaction into a single system. The project explored how a traditionally bulky utility product could become a calmer, more integrated part of everyday life.",
        "secondary": "The scope covered both product design and interaction design, with the goal of reducing gadget clutter, integrating essential functions and creating a more seamless experience for charging, backup power and environmental control.",
        "audience": [
          "Tech-savvy homeowners",
          "Urban dwellers",
          "Small business owners",
          "Smart-home integrators"
        ],
        "image": "/AURACHARGE_PORTFOLIO_ASSETS/01_hero/hero_product.png",
        "kpis": [
          { "title": "PRODUCT + UX", "value": "Product design and interaction design" },
          { "title": "UNIFIED SYSTEM", "value": "Charging + backup + smart interaction" },
          { "title": "CORE INTENT", "value": "Reduce clutter and simplify energy management" }
        ],
        "navLabel": "Introduction"
      },
      "order_index": 1
    },
    {
      "id": "aura-problem",
      "type": "AuraChargeProblem",
      "content": {
        "heading": "The problem was not a lack of power. It was fragmentation.",
        "statements": [
          "1. Users often manage separate devices for charging, power backup and ambient/power-related functions.",
          "2. Multiple cords and scattered gadgets create friction and visual clutter.",
          "3. Traditional power backups and charging stations can feel bulky, dated and unintuitive.",
          "4. The disjointed setup affects both usability and the calmness of the user's environment."
        ],
        "image": "/AURACHARGE_PORTFOLIO_ASSETS/02_intro_problem/product_front_detail.jpg",
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
        "heading": "How might one device do more, without becoming more complicated?",
        "inputs": [
          { "id": "01", "title": "PORTABLE & COMPACT", "description": "Minimal footprint with maximum efficiency." },
          { "id": "02", "title": "POWER BACKUP", "description": "Reliable backup power for devices." },
          { "id": "03", "title": "USER ENVIRONMENT ENHANCEMENT", "description": "A more intuitive and integrated user experience." }
        ],
        "outcome": { "title": "UNIFIED DEVICE" },
        "navLabel": "Design Challenge"
      },
      "order_index": 3
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
      "order_index": 4
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
      "order_index": 5
    },
    {
      "id": "aura-journey",
      "type": "AuraChargeJourney",
      "content": {
        "heading": "The experience starts long before the device is plugged in.",
        "narrative": "The storyboard follows a modern user through everyday work and home situations where power interruptions, scattered devices and manual recovery interrupt an otherwise seamless routine. AuraCharge is positioned as a single system that can take over the backup and management burden.",
        "stages": ["WORK", "INTERRUPTION", "DISCOVERY", "SETUP", "AUTOMATION", "CONTINUITY"],
        "image": "/AURACHARGE_PORTFOLIO_ASSETS/04_research_journey/user_journey_storyboard.jpg",
        "navLabel": "User Journey"
      },
      "order_index": 6
    },
    {
      "id": "aura-benchmark",
      "type": "AuraChargeBenchmark",
      "content": {
        "heading": "What users already see in the category.",
        "images": [
          "/AURACHARGE_PORTFOLIO_ASSETS/05_competitor_personas/benchmark_product_01.jpg",
          "/AURACHARGE_PORTFOLIO_ASSETS/05_competitor_personas/benchmark_product_02.jpg",
          "/AURACHARGE_PORTFOLIO_ASSETS/05_competitor_personas/benchmark_product_03.jpg"
        ],
        "observations": [
          "Utility-first product language",
          "Visible hardware controls",
          "Portability / handle language",
          "Industrial appearance",
          "Limited environmental integration"
        ],
        "navLabel": "Benchmark"
      },
      "order_index": 7
    },
    {
      "id": "aura-research",
      "type": "AuraChargeResearch",
      "content": {
        "heading": "I wanted to know what people actually struggle with.",
        "interviews": {
          "participants": "10 participants",
          "demographics": "6 male, 4 female · Age 24–50",
          "summary": "Across interviews, portability, charging speed and reliability repeatedly surfaced as the strongest concerns.",
          "image": "/AURACHARGE_PORTFOLIO_ASSETS/04_research_journey/interview_wordcloud.png"
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
      "id": "aura-competitor",
      "type": "AuraChargeCompetitor",
      "content": {
        "heading": "The category had power. It was missing cohesion.",
        "interpretation": [
          "Traditional products tend to be practical but basic.",
          "Newer products introduce smarter interfaces and connectivity but can remain bulky or fragmented.",
          "AuraCharge should use the opportunity to combine utility, digital control and domestic integration."
        ],
        "matrix": {
          "columns": [
            { "name": "V-Guard", "logo": "/AURACHARGE_PORTFOLIO_ASSETS/05_competitor_personas/vguard_logo.png" },
            { "name": "Luminous", "logo": "/AURACHARGE_PORTFOLIO_ASSETS/05_competitor_personas/luminous_logo.png" },
            { "name": "Exide", "logo": "/AURACHARGE_PORTFOLIO_ASSETS/05_competitor_personas/exide_logo.png" }
          ],
          "rows": [
            { "feature": "Technology", "values": ["DSP/Sine Wave", "Sine Wave, Solar", "Pure Sine Wave"] },
            { "feature": "Models", "values": ["Smart/Prime/Solar", "Zelio, Eco Watt", "Inverterzz"] },
            { "feature": "Backup Time", "values": ["Varies", "Reliable", "Good"] },
            { "feature": "Smart Features", "values": ["Wi-Fi, Bluetooth", "Basic", "Basic"] },
            { "feature": "Control", "values": ["Mobile App", "Display/Switches", "Manual"] },
            { "feature": "Design", "values": ["Modern, compact", "Industrial, boxy", "Traditional"] },
            { "feature": "CMF Choices", "values": ["White/Grey", "Black/Yellow", "Black/Red"] },
            { "feature": "Brand Identity", "values": ["Innovative, Smart", "Trusted, Core", "Durable"] },
            { "feature": "UI/UX", "values": ["App integration", "LED indicators", "LCD/LEDs"] }
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
      "order_index": 9
    },
    {
      "id": "aura-persona",
      "type": "AuraChargePersona",
      "content": {
        "heading": "Two users. Different routines. Same need for control.",
        "personas": [
          { "name": "Khushboo", "image": "/AURACHARGE_PORTFOLIO_ASSETS/05_competitor_personas/persona_khushboo.png" },
          { "name": "Tapashi", "image": "/AURACHARGE_PORTFOLIO_ASSETS/05_competitor_personas/persona_tapashi.png" }
        ],
        "navLabel": "Personas"
      },
      "order_index": 10
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
      "order_index": 11
    },
    {
      "id": "aura-ideation",
      "type": "AuraChargeGallery",
      "content": {
        "heading": "Before deciding what AuraCharge should be, I explored what it could become.",
        "narrative": "The original ideation explores appliance forms, power-station form factors, handles, display placement, wheels, environmental integration and multiple body configurations, eventually moving toward an integrated, upright, compact appliance with a clear front interface.",
        "layout": "masonry",
        "images": [
          "/AURACHARGE_PORTFOLIO_ASSETS/06_ideation_brand/ideation_sketches.jpg",
          "/AURACHARGE_PORTFOLIO_ASSETS/06_ideation_brand/personas_ideation_overview.jpg"
        ],
        "navLabel": "Ideation"
      },
      "order_index": 12
    },
    {
      "id": "aura-brand",
      "type": "AuraChargeBrand",
      "content": {
        "heading": "A visual language that makes utility feel at home.",
        "logos": [
          "/AURACHARGE_PORTFOLIO_ASSETS/06_ideation_brand/logo_lockup_vertical.png",
          "/AURACHARGE_PORTFOLIO_ASSETS/06_ideation_brand/logo_lockup_horizontal.png",
          "/AURACHARGE_PORTFOLIO_ASSETS/06_ideation_brand/logo_construction.png"
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
        "navLabel": "Visual Language"
      },
      "order_index": 13
    },
    {
      "id": "aura-ia",
      "type": "AuraChargeIA",
      "content": {
        "heading": "The physical product is only half the system.",
        "description": "AuraCharge also needed a digital layer for monitoring, rooms, devices, energy usage and settings.",
        "displayIA": "/AURACHARGE_PORTFOLIO_ASSETS/07_information_architecture/information_architecture_display.png",
        "mobileIA": "/AURACHARGE_PORTFOLIO_ASSETS/07_information_architecture/information_architecture_mobile.png",
        "navLabel": "Information Architecture"
      },
      "order_index": 14
    },
    {
      "id": "aura-lowfi",
      "type": "AuraChargeGallery",
      "content": {
        "heading": "Structure first, polish later.",
        "narrative": "The first pass focused on information placement, navigation and task grouping rather than visual polish, establishing the core structure for the dashboard, rooms, analytics, and settings.",
        "layout": "grid",
        "images": [
          "/AURACHARGE_PORTFOLIO_ASSETS/08_low_fidelity/low_fidelity_screens.jpg",
          "/AURACHARGE_PORTFOLIO_ASSETS/08_low_fidelity/low_fidelity_detail.jpg"
        ],
        "navLabel": "Low-Fi Explorations"
      },
      "order_index": 15
    },
    {
      "id": "aura-highfi",
      "type": "AuraChargeGallery",
      "content": {
        "heading": "From structure to a usable interface.",
        "layout": "grid",
        "images": [
          "/AURACHARGE_PORTFOLIO_ASSETS/09_high_fidelity/high_fidelity_display.png",
          "/AURACHARGE_PORTFOLIO_ASSETS/09_high_fidelity/display_screen_detail.png",
          "/AURACHARGE_PORTFOLIO_ASSETS/09_high_fidelity/mobile_screen_detail.png",
          "/AURACHARGE_PORTFOLIO_ASSETS/07_information_architecture/highfi_mobile_overview.png"
        ],
        "navLabel": "High-Fi Screens"
      },
      "order_index": 16
    },
    {
      "id": "aura-features",
      "type": "AuraChargeFeatures",
      "content": {
        "heading": "Designed as a complete everyday power system.",
        "image": "/AURACHARGE_PORTFOLIO_ASSETS/00_source/Auracharge features.jpg",
        "labels": [
          "Ventilation",
          "Solar hybrid capability",
          "Digital interaction panel",
          "Wireless charging pad",
          "Detachable torch",
          "Integrated speaker",
          "Multi-output power hub",
          "Lifting handles"
        ],
        "navLabel": "Product Features"
      },
      "order_index": 17
    },
    {
      "id": "aura-renders",
      "type": "AuraChargeRenders",
      "content": {
        "heading": "The final form.",
        "featureImage": "/AURACHARGE_PORTFOLIO_ASSETS/10_final_renders/product_render_angled.jpg",
        "detailImages": [
          "/AURACHARGE_PORTFOLIO_ASSETS/10_final_renders/product_render_back.jpg"
        ],
        "colorVariants": [
          { "name": "Rhodium Red", "image": "/AURACHARGE_PORTFOLIO_ASSETS/10_final_renders/product_render_red.png" },
          { "name": "Jade Green", "image": "/AURACHARGE_PORTFOLIO_ASSETS/10_final_renders/product_render_green.png" },
          { "name": "Midnight Blue", "image": "/AURACHARGE_PORTFOLIO_ASSETS/10_final_renders/product_render_blue.png" }
        ],
        "contextualRenders": [
          "/AURACHARGE_PORTFOLIO_ASSETS/10_final_renders/context_render_01.jpg",
          "/AURACHARGE_PORTFOLIO_ASSETS/10_final_renders/context_render_02.jpg",
          "/AURACHARGE_PORTFOLIO_ASSETS/10_final_renders/context_render_03.jpg",
          "/AURACHARGE_PORTFOLIO_ASSETS/10_final_renders/context_render_04.jpg"
        ],
        "navLabel": "Final Renders"
      },
      "order_index": 18
    },
    {
      "id": "aura-takeaway",
      "type": "Outcome",
      "content": {
        "heading": "From backup power to a calmer everyday experience.",
        "body": "AuraCharge began as an exploration of power backup, but the project evolved into a broader product-and-interface system: a more compact physical appliance, a unified control experience, and a visual language intended to make essential energy infrastructure feel more natural in the home.",
        "navLabel": "Conclusion"
      },
      "order_index": 19
    }
]`;

// Find the start and end of the "blocks" array in the content
const blocksStartMatch = content.match(/"blocks": \[/);
if (blocksStartMatch) {
  let openBrackets = 0;
  let blocksEndIndex = -1;
  const startIndex = blocksStartMatch.index + '"blocks": '.length;
  
  for (let i = startIndex; i < content.length; i++) {
    if (content[i] === '[') openBrackets++;
    if (content[i] === ']') {
      openBrackets--;
      if (openBrackets === 0) {
        blocksEndIndex = i;
        break;
      }
    }
  }

  if (blocksEndIndex !== -1) {
    const updatedContent = content.substring(0, startIndex) + newBlocksJSON + content.substring(blocksEndIndex + 1);
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log("Successfully updated blocks in AuraCharge.jsx");
  } else {
    console.log("Could not find end of blocks array");
  }
} else {
  console.log("Could not find blocks array start");
}
