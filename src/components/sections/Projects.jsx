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

  if (p.title === 'Immersive Traffic Command') {
    icon = "/AURACHARGE_PORTFOLIO_ASSETS/icon.png";
    description = "A VR training system for smarter, safer traffic decisions.";
  }

  return {
    title: p.title,
    description,
    pointers: [],
    link: p.thumbnail || '',
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
    <section id="work" className="w-full bg-background pt-24 pb-0">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="sticky top-24 z-0 md:relative md:top-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-franchise uppercase tracking-wide text-primary mb-6 leading-[1.1]">
              Featured Work
            </h2>
          </ScrollReveal>
        </div>
        <div className="w-full relative z-10">
          <StackingCards projects={projects ?? []} />
        </div>
      </div>
    </section>
  );
}
