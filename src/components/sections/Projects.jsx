import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';
import StackingCards from '../projects/stacking-card';
import ScrollReveal from '../common/ScrollReveal';
import { projects as staticProjects } from '../../data/projectsData';
import { getPublishedProjects } from '../../api/cmsApi';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Maps a CMS project to the shape expected by the StackingCards component.
 * Falls back to original hardcoded fields if CMS project lacks them.
 */
function mapCmsProject(p, index) {
  const colors = ['#ffb366', '#ff9933', '#ff8000', '#e66000', '#cc5200'];
  let icon = p.logo_icon || <Activity className="w-6 h-6" />;
  let description = p.short_description || '';
  let link = p.thumbnail || '';

  if (p.title === 'Immersive Traffic Command') {
    icon = "/auracharge/icon.png";
    description = "A VR training system for smarter, safer traffic decisions.";
  }

  if (p.title === 'Makhana Seed Collector') {
    icon = "/makhana/Makhana logo.png";
  }

  if (p.title === 'AuraCharge' || p.title === 'Aura Charge') {
    link = "/auracharge/10_final_renders/context_render_07.jpg";
  }

  if (p.title === 'Jio-bp Incident Management System') {
    link = "/jio-bp/Mockup_JioBP_3.jpg";
  }

  let finalTitle = p.title;
  if (finalTitle === 'AuraCharge' || finalTitle === 'Aura Charge') {
    finalTitle = 'Aura Charge Smart Inverter';
  }

  return {
    title: finalTitle,
    description,
    pointers: [],
    link,
    pageLink: `/work/${p.slug}`,
    color: colors[index % colors.length],
    icon,
  };
}

export default function Projects() {
  // null = not yet loaded, [] = CMS responded with no published projects
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getPublishedProjects()
      .then(data => {
        // CMS responded — use exactly what it says (could be empty if all hidden)
        let mapped = data ? data.map(mapCmsProject) : [];

        // Inject Jio-bp project if it doesn't exist
        if (!mapped.some(p => p.title === 'Jio-bp Incident Management System')) {
          mapped.push({
            title: 'Jio-bp Incident Management System',
            description: 'One incident. Different decisions. One connected lifecycle.',
            pointers: [],
            link: '/jio-bp/Mockup_JioBP_3.jpg', // Updated image
            pageLink: '/work/jio-bp',
            color: '#3b2f2f', // Distinctive color for the card
            icon: <img src="/jio-bp/Dashboard.png" alt="Dashboard Icon" className="w-6 h-6 object-contain" />
          });
        }

        // Enforce specific order requested by user
        const order = {
          "Immersive Traffic Command": 1,
          "Jio-bp Incident Management System": 2,
          "Makhana Seed Collector": 3,
          "Aura Charge Smart Inverter": 4
        };

        mapped.sort((a, b) => {
          const orderA = order[a.title] || 99;
          const orderB = order[b.title] || 99;
          return orderA - orderB;
        });

        setProjects(mapped);
        setTimeout(() => ScrollTrigger.refresh(), 100);
      })
      .catch(() => {
        // Supabase unreachable — fall back to static so the page isn't blank
        setProjects(staticProjects);
        setTimeout(() => ScrollTrigger.refresh(), 100);
      });
  }, []);

  return (
    <section id="work" className="w-full bg-background pt-8 md:pt-12 pb-0">
      <div className="max-w-[1400px] mx-auto relative px-6 md:px-12 lg:px-24">
        {/* 
          We stick the title container at exactly the same top offset AND with the exact same height 
          as the cards container (h-[calc...]). This guarantees their bottom edges match the parent's bottom edge, 
          so they are pushed up by the section's bottom edge at the exact same pixel of scroll.
          We use an absolute wrapper so it doesn't take up space in the document flow.
        */}
        <div className="absolute inset-0 z-20 pointer-events-none px-6 md:px-12 lg:px-24">
          <div className="sticky top-0 h-screen w-full">
            <div className="pointer-events-auto pt-2 md:pt-4">
              <ScrollReveal>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-franchise uppercase tracking-wide text-primary leading-[1.1] m-0 drop-shadow-sm">
                  Featured Work
                </h2>
              </ScrollReveal>
            </div>
          </div>
        </div>
        <div className="w-full relative z-10 pt-20 md:pt-28">
          <StackingCards projects={projects ?? []} />
        </div>
      </div>
    </section>
  );
}

