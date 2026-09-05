import React, { useRef, useEffect } from 'react';

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 1,
  className = ''
}) {
  const elemRef = useRef(null);

  useEffect(() => {
    const el = elemRef.current;
    if (!el) return;

    let yOffset = 0;
    let xOffset = 0;
    switch (direction) {
      case 'up':    yOffset =  50; break;
      case 'down':  yOffset = -50; break;
      case 'left':  xOffset =  50; break;
      case 'right': xOffset = -50; break;
      default:      yOffset =  50;
    }

    // Set initial hidden state via inline style (no GSAP dependency)
    el.style.opacity = '0';
    el.style.transform = `translateY(${yOffset}px) translateX(${xOffset}px) scale(0.95)`;
    el.style.filter = 'blur(6px)';
    el.style.transition = `opacity ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform ${duration}s cubic-bezier(0.22,1,0.36,1) ${delay}s, filter ${duration}s ease ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate in
          el.style.opacity = '1';
          el.style.transform = 'translateY(0px) translateX(0px) scale(1)';
          el.style.filter = 'blur(0px)';
          observer.unobserve(el); // fire once
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay, duration]);

  return (
    <div ref={elemRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
