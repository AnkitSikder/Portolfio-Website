import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '../../data/journeyData';

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const lineRef = useRef(null);
  const timelineNodesRef = useRef([]);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    
    timelineNodesRef.current.forEach((node) => {
      if (!node) return;
      const cardInner = node.querySelector('.journey-card-inner');
      const bgText = node.querySelector('.bg-year-text');
      if (!cardInner) return;

      const rect = cardInner.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Distance from cursor to card center
      const deltaX = e.clientX - cardCenterX;
      const deltaY = e.clientY - cardCenterY;
      
      // Normalize values (-1 to 1 depending on bounds)
      const x = deltaX / (window.innerWidth / 2);
      const y = deltaY / (window.innerHeight / 2);

      const clampedX = Math.max(-1, Math.min(1, x));
      const clampedY = Math.max(-1, Math.min(1, y));

      // 3D Tilt calculation
      const maxTilt = 10; // degrees
      const rotX = -clampedY * maxTilt;
      const rotY = clampedX * maxTilt;

      gsap.to(cardInner, {
        rotateX: rotX,
        rotateY: rotY,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.5
      });
      
      // Slight parallax on the background text
      if (bgText) {
        gsap.to(bgText, {
          x: -clampedX * 30,
          y: -clampedY * 30,
          ease: "power2.out",
          duration: 0.5
        });
      }
    });
  };

  const handleMouseLeave = () => {
    timelineNodesRef.current.forEach((node) => {
      if (!node) return;
      const cardInner = node.querySelector('.journey-card-inner');
      const bgText = node.querySelector('.bg-year-text');
      if (!cardInner) return;
      gsap.to(cardInner, {
        rotateX: 0,
        rotateY: 0,
        ease: "power2.out",
        duration: 0.8
      });
      if (bgText) {
        gsap.to(bgText, {
          x: 0,
          y: 0,
          ease: "power2.out",
          duration: 0.8
        });
      }
    });
  };

  useEffect(() => {
    if (!sectionRef.current || !scrollContainerRef.current) return;

    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // DESKTOP LOGIC (>= 768px)
      mm.add("(min-width: 768px)", () => {
        const container = scrollContainerRef.current;
        
        const getScrollAmount = () => -(container.scrollWidth - window.innerWidth);
        
        const scrollTween = gsap.to(container, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            anticipatePin: 1,
            scrub: 1,
            end: () => `+=${container.scrollWidth - window.innerWidth}`,
            invalidateOnRefresh: true,
          }
        });

        if (lineRef.current) {
          gsap.fromTo(lineRef.current,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: () => `+=${container.scrollWidth - window.innerWidth}`,
                scrub: true,
                invalidateOnRefresh: true,
              }
            }
          );
        }

        timelineNodesRef.current.forEach((node) => {
          if (!node) return;
          const circle = node.querySelector('.journey-circle');
          const content = node.querySelector('.timeline-content');
          const connector = node.querySelector('.connector-line');
          const bgText = node.querySelector('.bg-year-text');
          
          if (circle) gsap.set(circle, { scale: 0 });
          if (connector) gsap.set(connector, { scaleY: 0 });
          if (bgText) gsap.set(bgText, { autoAlpha: 0, scale: 0.8 });
          gsap.set(content, { autoAlpha: 0, y: 50 });

          ScrollTrigger.create({
            trigger: node,
            containerAnimation: scrollTween,
            start: "left 85%", 
            onEnter: () => {
              if (circle) gsap.to(circle, { scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" });
              if (connector) gsap.to(connector, { scaleY: 1, duration: 0.8, ease: "power2.out", delay: 0.1 });
              if (bgText) gsap.to(bgText, { autoAlpha: 0.05, scale: 1, duration: 1.2, ease: "power3.out" });
              gsap.to(content, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 });
            },
            onLeaveBack: () => {
              if (circle) gsap.to(circle, { scale: 0, duration: 0.5 });
              if (connector) gsap.to(connector, { scaleY: 0, duration: 0.5 });
              if (bgText) gsap.to(bgText, { autoAlpha: 0, scale: 0.8, duration: 0.5 });
              gsap.to(content, { autoAlpha: 0, y: 50, duration: 0.5 });
            }
          });
        });
      });

      // MOBILE LOGIC (< 768px)
      mm.add("(max-width: 767px)", () => {
        if (lineRef.current) {
          gsap.fromTo(lineRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: scrollContainerRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
              }
            }
          );
        }
        
        timelineNodesRef.current.forEach((node) => {
          if (!node) return;
          const circle = node.querySelector('.journey-circle');
          const content = node.querySelector('.timeline-content');
          const bgText = node.querySelector('.bg-year-text');
          
          if (circle) gsap.set(circle, { scale: 0 });
          if (bgText) gsap.set(bgText, { autoAlpha: 0 });
          gsap.set(content, { autoAlpha: 0, x: 50 });

          ScrollTrigger.create({
            trigger: node,
            start: "top 75%",
            onEnter: () => {
              if (circle) gsap.to(circle, { scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" });
              if (bgText) gsap.to(bgText, { autoAlpha: 0.05, duration: 1 });
              gsap.to(content, { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.2 });
            },
            onLeaveBack: () => {
              if (circle) gsap.to(circle, { scale: 0, duration: 0.5 });
              if (bgText) gsap.to(bgText, { autoAlpha: 0, duration: 0.5 });
              gsap.to(content, { autoAlpha: 0, x: 50, duration: 0.5 });
            }
          });
        });
      });

    }, sectionRef);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Helper to extract year
  const extractYear = (dateStr) => {
    const match = dateStr.match(/\d{4}/);
    return match ? match[0] : "2024";
  };

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="w-full bg-background overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pt-12 md:pt-20 px-6 md:px-12 mb-8 md:mb-0 max-w-[1400px] w-full mx-auto relative z-20 flex justify-start">
        <h2 className="text-5xl font-franchise tracking-wide text-foreground mb-6 border-b border-foreground/10 pb-4 inline-block">
          Professional Journey
        </h2>
      </div>

      <div 
        ref={scrollContainerRef} 
        className="flex flex-col md:flex-row items-center md:items-start relative pb-24 md:pb-0 mt-12 md:mt-16"
        style={{ width: "fit-content", minWidth: "100%" }}
      >
        {/* Background Track Line */}
        <div className="absolute left-8 md:left-0 top-0 md:top-auto md:bottom-[60px] w-[2px] md:w-full h-full md:h-[2px] bg-foreground/5 z-0" />
        
        {/* Animated Active Line */}
        <div 
          ref={lineRef}
          className="absolute left-8 md:left-0 top-0 md:top-auto md:bottom-[60px] w-[2px] md:w-full h-full md:h-[2px] bg-gradient-to-b md:bg-gradient-to-r from-primary to-[#ff8000] origin-top md:origin-left z-0 shadow-[0_0_15px_rgba(255,108,12,0.5)]"
        />

        <div className="hidden md:block w-[10vw] shrink-0" />

        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-16 md:gap-24 px-6 md:px-0 w-full md:w-auto relative z-10 pt-4 md:pt-0">
          {experiences.map((exp, index) => {
            return (
              <div 
                key={`journey-pulse-${exp.id}`}
                ref={el => timelineNodesRef.current[index] = el}
                className="flex flex-col relative shrink-0 w-full md:w-[460px] md:pb-[120px]"
              >
                
                {/* Mobile specific circle (Left aligned) */}
                <div className="md:hidden absolute left-[1px] top-10 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(255,108,12,0.8)] z-20 journey-circle border-[3px] border-background" />

                {/* Horizontal Connector Line (Mobile) */}
                <div className="md:hidden absolute top-[47px] left-[17px] w-[15px] h-[2px] bg-primary/60 connector-line origin-left z-10" />

                {/* Desktop Connection Node (Circle perfectly centered on track) */}
                <div className="hidden md:flex absolute bottom-[53px] left-[calc(50%-8px)] w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(255,108,12,0.8)] z-20 journey-circle items-center justify-center border-[3px] border-background" />

                {/* Vertical Connector Line (Desktop) - Connects exactly to the center of the circle */}
                <div className="hidden md:block absolute bottom-[60px] left-[calc(50%-1px)] w-[2px] bg-primary/60 connector-line h-[60px] origin-bottom z-10" />


                {/* Floating Content Box */}
                <div 
                  className={`w-full h-full timeline-content flex flex-col z-20 pl-8 md:pl-0`} 
                  style={{ perspective: '1200px' }}
                >
                  <div className="journey-card-inner relative w-full h-full rounded-xl bg-[#171621] border border-primary shadow-[0_10px_30px_rgba(255,108,12,0.1)] p-6 md:p-8 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(255,108,12,0.25)] hover:bg-black/90 font-clash">
                    
                    {/* Logo Box */}
                    {exp.logo && (
                      <div className="absolute -top-8 right-6 h-16 rounded-xl bg-[#171621] border border-primary shadow-xl flex items-center justify-center p-2 z-20">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className="h-full w-auto max-w-[140px] object-contain" 
                        />
                      </div>
                    )}

                    <div className="flex flex-col gap-2 mb-6 mt-6 md:mt-8">
                      <span className="text-sm uppercase tracking-widest text-primary font-semibold">
                        {exp.role}
                      </span>
                      <h3 className="text-3xl md:text-[32px] font-clash tracking-wide text-[#FCF2EC] leading-none font-semibold">
                        {exp.company}
                      </h3>
                      <span className="text-base text-foreground/50 border-b border-primary/30 pb-4 inline-block w-fit mt-1 font-semibold tracking-wide">
                        {exp.date}
                      </span>
                    </div>

                    <p className="text-foreground/80 font-normal text-[18px] leading-relaxed relative tracking-wide">
                      {exp.description}
                    </p>
                    
                  </div>
                </div>

              </div>
            );
          })}
        </div>
        <div className="hidden md:block w-[10vw] shrink-0" />

      </div>
    </section>
  );
}
