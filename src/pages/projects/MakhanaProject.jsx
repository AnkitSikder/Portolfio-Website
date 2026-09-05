import React, { useEffect } from 'react';
import ProjectHero from '../../components/case-study/ProjectHero';
import ProjectRenderer, { getSectionList } from '../../components/case-study/ProjectRenderer';
import SectionProgressNav from '../../components/case-study/SectionProgressNav';
import NextProjectNav from '../../components/case-study/NextProjectNav';
import { getHeroProps, getBodyBlocks } from '../../utils/projectUtils';

export default function MakhanaProject() {
  const project = {
    "id": "a959ad20-7411-456a-9a5a-02fb6512b88d",
    "title": "Makhana Seed Collector",
    "slug": "makhana-tool",
    "short_description": "Affordable, ergonomic tool that helps makhana workers collect seeds safely, comfortably, and efficiently.",
    "thumbnail": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/thumbnails/1788343323821-di1b8asa1ml.png",
    "hero_image": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/heroes/1788343319893-02930qrlf9yu.png",
    "category": "Product Design",
    "status": "Published",
    "featured": true,
    "display_order": 2,
    "logo_icon": "https://qsaqptsicqthcpsqzbvx.supabase.co/storage/v1/object/public/portfolio-media/logos/1788343221927-866fadt4vm.png",
    "blocks": [
      // 00 HERO
      {
        "type": "Hero",
        "content": {
          "role": "Product Designer",
          "title": "MAKHANA SEED COLLECTION TOOL",
          "tools": ["Blender · Shapr3D · Procreate · Notebook LLM"],
          "summary": "An ergonomic hand-tool concept for makhana harvesting, designed to reduce awkward postures, thorn exposure and repetitive effort while improving seed collection efficiency.",
          "duration": "2 months",
          "navLabel": "Hero"
        }
      },
      // 01 INTRODUCTION
      {
        "type": "Phase1Intro",
        "content": {}
      },
      // 02 THE PRODUCTION CYCLE
      {
        "type": "Phase1Cycle",
        "content": {}
      },
      // 03 FIELD / PROCESS IMAGE CAROUSEL
      {
        "type": "ImageGallery",
        "content": {
          "navLabel": "Process",
          "title": "What the production system looks like.",
          "layout": "carousel",
          "speed": "15s",
          "images": [
            { "url": "/assets/projects/makhana-tool/assets/02_cycle/slide_05_img_02.jpg", "caption": "Makhana Flora" },
            { "url": "/assets/projects/makhana-tool/assets/02_cycle/slide_05_img_03.png", "caption": "Seed Collection" },
            { "url": "/assets/projects/makhana-tool/assets/02_cycle/slide_05_img_04.png", "caption": "Manual Harvesting" },
            { "url": "/assets/projects/makhana-tool/assets/02_cycle/slide_05_img_06.png", "caption": "Mud Separation" },
            { "url": "/assets/projects/makhana-tool/assets/02_cycle/slide_05_img_08.png", "caption": "Grading" },
            { "url": "/assets/projects/makhana-tool/assets/02_cycle/slide_05_img_09.png", "caption": "Pre-heating" }
          ]
        }
      },
      // 04 PROBLEM OVERVIEW / OPPORTUNITY GAP
      {
        "type": "Phase1ProblemBento",
        "content": {}
      },
      // 05 EXISTING PRODUCTS / METHODS
      {
        "type": "Phase1ExistingMethods",
        "content": {}
      },
      // 06 ERGONOMIC FINDINGS + ANTHROPOMETRY
      {
        "type": "Phase1Ergonomics",
        "content": {}
      },
      // 07 DESIGN BRIEF + TARGET USERS
      {
        "type": "Phase1DesignBrief",
        "content": {}
      },
      // 08 RESEARCH METHOD + FIELD EVIDENCE
      {
        "type": "Phase1ResearchMethod",
        "content": {}
      },
      // 09 USER PERSONA + EMPATHY MAP
      {
        "type": "Phase1PersonaEmpathy",
        "content": {}
      },

      // 11 USER NEEDS
      {
        "type": "Phase1UserNeeds",
        "content": {}
      },
      // 12 IDEATIONS
      {
        "type": "Image",
        "content": {
          "heading": "Ideations",
          "image": "/assets/projects/makhana-tool/assets/07_ideation_future/Final Ideation.jpg",
          "width": "full",
          "navLabel": "Ideations"
        }
      },
      // 13 SELECTED CONCEPT
      {
        "type": "Phase2SelectedConcept",
        "content": {}
      },
      // 13 TECHNICAL ASPECTS
      {
        "type": "Phase2TechnicalAspects",
        "content": { "isAlternate": true }
      },
      // 14 PRODUCT SPECIFICATION
      {
        "type": "Phase2ProductSpec",
        "content": {}
      },
      // 16 DIMENSIONS
      {
        "type": "Phase2Dimensions",
        "content": { "isAlternate": true }
      },
      // 17 FINAL RENDERS
      {
        "type": "Phase2Renders",
        "content": {}
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
      <NextProjectNav currentPath="/work/makhana-tool" />
    </article>
  );
}
