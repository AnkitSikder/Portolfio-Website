import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';
import StackingCards from '../projects/stacking-card';
import ScrollReveal from '../common/ScrollReveal';
import { projects as staticProjects } from '../../data/projectsData';
import { getPublishedProjects } from '../../api/cmsApi';

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
    icon = "/AURACHARGE_PORTFOLIO_ASSETS/icon.png";
    description = "A VR training system for smarter, safer traffic decisions.";
  }

  if (p.title === 'AuraCharge' || p.title === 'Aura Charge') {
    link = "/AURACHARGE_PORTFOLIO_ASSETS/10_final_renders/context_render_07.jpg";
  }

  return {
    title: p.title,
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

        // Enforce specific order requested by user
        const order = {
          "Immersive Traffic Command": 1,
          "Makhana Seed Collector": 2,
          "Aura Charge": 3
        };

        mapped.sort((a, b) => {
          const orderA = order[a.title] || 99;
          const orderB = order[b.title] || 99;
          return orderA - orderB;
        });

        setProjects(mapped);
      })
      .catch(() => {
        // Supabase unreachable — fall back to static so the page isn't blank
        setProjects(staticProjects);
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
