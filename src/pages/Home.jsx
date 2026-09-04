import React, { useState } from 'react';

// Sections
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Journey from '../components/sections/Journey';
import OrangeRevealWrapper from '../components/sections/OrangeRevealWrapper';
import IntegrationHero from '../components/sections/IntegrationHero';
import AboutMe from '../components/sections/AboutMe';
import Marquee from '../components/common/Marquee';

export default function Home() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  return (
    <>
      {/* Loading Screen Overlay */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isSplineLoaded ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 pointer-events-auto translate-y-0'}`}
      >
        <div className="flex flex-col items-center">
          <img src="/Logo Portfolio Dark.svg" alt="Ankit Sikder Logo" className="h-16 w-auto mb-10 drop-shadow-[0_0_15px_rgba(255,90,0,0.3)]" />
          <div className="w-64 h-[2px] bg-foreground/10 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-[40%] bg-primary rounded-full animate-progress" />
          </div>
          <span className="mt-4 text-sm font-clash tracking-[0.2em] text-foreground/50 uppercase">Loading Realities</span>
        </div>
      </div>

      <Hero setIsSplineLoaded={setIsSplineLoaded} />

      <Marquee />
      <Projects />
      
      <OrangeRevealWrapper>
        <IntegrationHero />
      </OrangeRevealWrapper>
      
      <div className="relative z-30 bg-background">
        <AboutMe />
        <Journey />
        <Marquee />
      </div>
    </>
  );
}
