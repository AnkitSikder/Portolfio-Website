import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 1,
  className = ''
}) {
  const elemRef = useRef(null);

  useEffect(() => {
    if (!elemRef.current) return;

    let yOffset = 0;
    let xOffset = 0;

    switch (direction) {
      case 'up': yOffset = 50; break;
      case 'down': yOffset = -50; break;
      case 'left': xOffset = 50; break;
      case 'right': xOffset = -50; break;
      default: yOffset = 50;
    }

    gsap.set(elemRef.current, {
      opacity: 0,
      y: yOffset,
      x: xOffset,
      scale: 0.95,
      rotationX: 10,
      filter: 'blur(8px)',
      transformPerspective: 1000
    });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: elemRef.current,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(elemRef.current, {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotationX: 0,
            filter: 'blur(0px)',
            duration: duration,
            delay: delay,
            ease: 'power3.out',
            clearProps: 'transformPerspective,rotationX,filter' // clean up for performance
          });
        }
      });
    }, elemRef);

    return () => ctx.revert();
  }, [direction, delay, duration]);

  return (
    <div ref={elemRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
