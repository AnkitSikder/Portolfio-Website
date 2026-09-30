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
  let tags = p.tags || [];

  if (p.title === 'Immersive Traffic Command') {
    icon = "/auracharge/icon.png";
    description = "A VR training simulator for smarter traffic management decisions.";
    tags = ['VR Design', 'UI/UX', 'Simulation'];
  }

  if (p.title === 'Makhana Seed Collector') {
    icon = "/makhana/Makhana logo.png";
    description = "An ergonomic tool designed for safer, more efficient seed harvesting.";
    tags = ['Product Design', 'Ergonomics', 'Agriculture'];
  }

  if (p.title === 'AuraCharge' || p.title === 'Aura Charge') {
    link = "/auracharge/10_final_renders/context_render_07.jpg";
    description = "A smart inverter seamlessly bridging power backup and home automation.";
    tags = ['Industrial Design', 'Consumer Tech', 'Smart Home'];
  }

  if (p.title === 'Jio-bp Incident Management System') {
    link = "/jio-bp/Mockup_JioBP_3.jpg";
    tags = ['UI/UX', 'B2B Software', 'Design System'];
  }

  let finalTitle = p.title;
  if (finalTitle === 'AuraCharge' || finalTitle === 'Aura Charge') {
    finalTitle = 'Aura Charge Smart Inverter';
  }

  return {
    title: finalTitle,
    description,
    pointers: [],
    tags,
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
            description: 'An enterprise platform streamlining the incident management lifecycle.',
            pointers: [],
            tags: ['UI/UX', 'B2B Software', 'Design System'],
            link: '/jio-bp/Mockup_JioBP_3.jpg', // Updated image
            pageLink: '/work/jio-bp',
            color: '#3b2f2f', // Distinctive color for the card
            icon: (
              <svg viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M55.5625 46.3021V35.7187C55.5625 27.0192 55.5625 22.6695 53.1601 19.7432C52.7206 19.2078 52.2297 18.7169 51.6943 18.2774C48.768 15.875 44.4182 15.875 35.7187 15.875C27.0192 15.875 22.6695 15.875 19.7432 18.2774C19.2078 18.7169 18.7169 19.2078 18.2774 19.7432C15.875 22.6695 15.875 27.0192 15.875 35.7187V46.3021C15.875 55.0016 15.875 59.3513 18.2774 62.2776C18.7184 62.8138 19.207 63.3024 19.7432 63.7434C22.6695 66.1458 27.0192 66.1458 35.7187 66.1458C44.4182 66.1458 48.768 66.1458 51.6943 63.7434C52.2305 63.3024 52.7191 62.8138 53.1601 62.2776C55.5625 59.3513 55.5625 55.0016 55.5625 46.3021ZM41.0104 82.0208H30.4271C26.7335 82.0208 24.8867 82.0208 23.3892 82.4759C21.7232 82.9805 20.2074 83.8882 18.976 85.1186C17.7447 86.349 16.8359 87.8641 16.3301 89.5297C15.875 91.0325 15.875 92.8793 15.875 96.5729C15.875 100.266 15.875 102.113 16.3301 103.611C16.8346 105.277 17.7423 106.793 18.9727 108.024C20.2031 109.255 21.7183 110.164 23.3839 110.67C24.8867 111.125 26.7335 111.125 30.4271 111.125H41.0104C44.704 111.125 46.5508 111.125 48.0483 110.67C49.7143 110.165 51.2301 109.258 52.4615 108.027C53.6928 106.797 54.6016 105.282 55.1074 103.616C55.5625 102.113 55.5625 100.266 55.5625 96.5729C55.5625 92.8793 55.5625 91.0325 55.1074 89.535C54.6029 87.869 53.6952 86.3532 52.4648 85.1219C51.2344 83.8905 49.7192 82.9817 48.0536 82.4759C46.5508 82.0208 44.704 82.0208 41.0104 82.0208ZM111.125 91.2812V80.6979C111.125 71.9984 111.125 67.6487 108.723 64.7224C108.283 64.187 107.792 63.696 107.257 63.2566C104.33 60.8542 99.9807 60.8542 91.2812 60.8542C82.5817 60.8542 78.232 60.8542 75.3057 63.2566C74.7703 63.696 74.2794 64.187 73.8399 64.7224C71.4375 67.6487 71.4375 71.9984 71.4375 80.6979V91.2812C71.4375 99.9807 71.4375 104.33 73.8399 107.257C74.2809 107.793 74.7695 108.282 75.3057 108.723C78.232 111.125 82.5817 111.125 91.2812 111.125C99.9807 111.125 104.33 111.125 107.257 108.723C107.793 108.282 108.282 107.793 108.723 107.257C111.125 104.33 111.125 99.9807 111.125 91.2812ZM96.5729 15.875H85.9896C82.296 15.875 80.4492 15.875 78.9517 16.3301C77.2857 16.8346 75.7699 17.7423 74.5385 18.9727C73.3072 20.2031 72.3984 21.7183 71.8926 23.3839C71.4375 24.8867 71.4375 26.7335 71.4375 30.4271C71.4375 34.1207 71.4375 35.9675 71.8926 37.465C72.3971 39.131 73.3048 40.6468 74.5352 41.8781C75.7656 43.1095 77.2808 44.0183 78.9464 44.5241C80.4492 44.9792 82.296 44.9792 85.9896 44.9792H96.5729C100.266 44.9792 102.113 44.9792 103.611 44.5241C105.277 44.0195 106.793 43.1118 108.024 41.8814C109.255 40.651 110.164 39.1359 110.67 37.4703C111.125 35.9675 111.125 34.1207 111.125 30.4271C111.125 26.7335 111.125 24.8867 110.67 23.3892C110.165 21.7232 109.258 20.2074 108.027 18.976C106.797 17.7447 105.282 16.8359 103.616 16.3301C102.113 15.875 100.266 15.875 96.5729 15.875Z" stroke="white" strokeWidth="7.9375" strokeLinejoin="round"/>
              </svg>
            )
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

