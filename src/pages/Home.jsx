import React, { useContext, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplineContext } from '../components/layout/Layout';

// Sections
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Journey from '../components/sections/Journey';
import OrangeRevealWrapper from '../components/sections/OrangeRevealWrapper';
import IntegrationHero from '../components/sections/IntegrationHero';
import AboutMe from '../components/sections/AboutMe';
import Marquee from '../components/common/Marquee';

export default function Home() {
  const setIsSplineLoaded = useContext(SplineContext);

  // Kill all ScrollTriggers BEFORE React unmounts this component.
  // GSAP's `pin` feature moves DOM nodes out of their original parents.
  // If we don't restore them first, React's removeChild call crashes the tree.
  useLayoutEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  return (
    <>
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
