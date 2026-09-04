import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OrangeRevealWrapper({ children }) {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const contentRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current || !circleRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top', 
          end: '+=100%', // Pin duration
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onRefresh: (self) => {
            if (self.spacer) {
              self.spacer.style.pointerEvents = 'none';
            }
          }
        }
      });

      // Initial states: circle at 0, content invisible and slightly down.
      gsap.set(circleRef.current, { scale: 0 });
      gsap.set(contentRef.current, { autoAlpha: 0, y: 50 });

      // 1. Expand the circle from the bottom center (takes up first 70% of scroll)
      tl.to(circleRef.current, {
        scale: 120, 
        ease: 'power2.inOut',
        duration: 0.7
      });

      // 2. Fade in and slide up content (takes remaining 30%)
      tl.to(contentRef.current, {
        autoAlpha: 1,
        y: 0,
        ease: 'power3.out',
        duration: 0.3
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* The fixed expanding circle */}
      <div className="fixed inset-0 z-20 pointer-events-none overflow-hidden flex items-end justify-center">
        <div 
          ref={circleRef}
          className="w-[50px] h-[50px] bg-primary rounded-full translate-y-1/2"
        />
      </div>

      {/* The actual content that follows */}
      {/* We use -mt-[100vh] to perfectly overlap the last 100vh sticky scroll of the previous section, eliminating the gap! */}
      <div ref={containerRef} className="orange-theme w-full relative z-30 pb-20 pt-10 -mt-[100vh] pointer-events-none">
        <div ref={contentRef} className="w-full h-full text-background invisible pointer-events-auto">
          {children}
        </div>
      </div>
    </>
  );
}
