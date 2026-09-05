import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { TypeAnimation } from 'react-type-animation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ConstellationGrid from '../ui/constellation-grid';
import HobbyStickers from './HobbyStickers';

export default function Hero({ setIsSplineLoaded }) {
  const containerRef = useRef(null);
  const heroTextRef = useRef(null);
  const splineWrapperRef = useRef(null);

  useEffect(() => {
    let rafId;
    // Parallax mouse effect for the giant hero text
    const handleMouseMove = (e) => {
      if (!heroTextRef.current || window.innerWidth < 768) return;
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 60; // 30px offset max
        const y = (e.clientY / window.innerHeight - 0.5) * 60;
        if (heroTextRef.current) {
          heroTextRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    const handleMouseLeave = () => {
      if (!heroTextRef.current) return;
      if (rafId) cancelAnimationFrame(rafId);
      heroTextRef.current.style.transform = `translate(0px, 0px)`;
    };

    // ── Block Spline camera zoom on scroll ──────────────────────────────────
    // We intercept wheel events at the document CAPTURE phase (fires before the
    // event reaches Spline's internal canvas handlers), then redirect the scroll
    // to the page. Mouse events are untouched → look-at-cursor still works.
    const blockSplineZoom = (e) => {
      if (splineWrapperRef.current && splineWrapperRef.current.contains(e.target)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        window.scrollBy({ top: e.deltaY, left: 0, behavior: 'auto' });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    // capture: true → fires BEFORE Spline sees the event
    document.addEventListener('wheel', blockSplineZoom, { passive: false, capture: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('wheel', blockSplineZoom, { capture: true });
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* Constellation Grid Background */}
      <ConstellationGrid />

      {/* Hobby Stickers Layer (Revealed on mouse hover) */}
      <HobbyStickers />

      {/* Giant Hero Text (Typing Effect) */}
      <div className="absolute top-[calc(20%-10px)] w-full z-10 pointer-events-none flex justify-center text-center">
        <div ref={heroTextRef}>
          <TypeAnimation
            sequence={[
              'Ankit Sikder', 5000,
              'Interaction Designer', 2500,
              'Spatial Designer', 2500,
              'Creative Technologist', 2500,
              'UI/UX Designer', 2500,
              'Usability Researcher', 2500,
              '3D Generalist', 2500,
              'Systems Thinker', 2500,
              'Visual Designer', 2500,
            ]}
            wrapper="h1"
            speed={1}
            deletionSpeed={1}
            repeat={Infinity}
            className="font-franchise text-[13vw] leading-[0.8] uppercase tracking-normal whitespace-nowrap text-[#f5f0e6]"
            cursor={true}
          />
        </div>
      </div>

      {/* 3D Spline Character — pointer-events: auto on md+ so cursor tracking works.
          On mobile (pointer-events-none), interactions are fully disabled.
          Scroll zoom is blocked separately via a non-passive wheel listener in useEffect. */}
      <div 
        ref={splineWrapperRef}
        className="absolute inset-0 z-20 pointer-events-none md:pointer-events-auto overflow-hidden"
      >
        <div 

          className="absolute"
          // We use CSS scale to actually shrink the character because Spline's camera auto-fits
          style={{ 
            width: '200vw', 
            height: '200vh',
            left: '-50vw', // Centered horizontally
            top: 'calc(-45vh + 45px)', // Shifted down 45px total
            transform: 'scale(0.85)', // Shrink the visual size of the character!
            transformOrigin: 'center center',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 60px), calc(100% - 180px) calc(100% - 60px), calc(100% - 180px) 100%, 0% 100%)',
          }}
        >
          <Spline 
            scene="https://prod.spline.design/AtW72O4zfSpbuuvx/scene.splinecode?v=fresh7" 
            onLoad={(splineApp) => {
              // Delay removing the loader to ensure Spline finishes painting the 3D canvas
              setTimeout(() => {
                setIsSplineLoaded(true);
                // Refresh ScrollTrigger to recalculate layout after loading screen disappears
                setTimeout(() => ScrollTrigger.refresh(), 500);
              }, 1500);
              
              // Aggressively hunt down and DESTROY the Spline logo DOM element
              const destroyLogo = () => {
                const logos = document.querySelectorAll('a[href*="spline.design"], a[href*="spline3d.com"], #logo');
                logos.forEach(logo => logo.remove());
              };
              
              // Spline sometimes delays injecting the logo, so we run this multiple times
              destroyLogo();
              setTimeout(destroyLogo, 100);
              setTimeout(destroyLogo, 500);
              setTimeout(destroyLogo, 1000);
              setTimeout(destroyLogo, 3000);
            }}
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, background: 'transparent' }}
          />
        </div>
      </div>

      {/* Left Side Text */}
      <div className="absolute left-6 md:left-24 lg:left-32 top-[65%] md:top-[75%] -translate-y-1/2 z-30 max-w-[260px] md:max-w-[340px] pointer-events-none">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-clash text-mutedForeground leading-tight font-medium tracking-wide flex flex-col items-start gap-0 md:gap-1">
          <span>Crafting</span>
          <span>seamless</span>
          <span className="text-foreground relative inline-block">
            <span className="word-slider-container">
              <span className="word-slider">
                <span>experiences</span>
                <span>interactions</span>
                <span>experiences</span>
                <span>interactions</span>
                <span>experiences</span>
              </span>
            </span>
            <svg 
              className="absolute -bottom-1 left-[-2%] w-[104%] h-[14px] text-primary pointer-events-none" 
              viewBox="0 0 300 15" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              preserveAspectRatio="none"
            >
              <path 
                d="M3 11.5C80 4 200 2 290 5C298 5.5 298 9 290 9.5C200 12.5 80 14.5 5 13C-2 12.5 -1 8.5 3 11.5Z" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="mt-1 md:mt-2">for people.</span>
        </h2>
      </div>
    </section>
  );
}
