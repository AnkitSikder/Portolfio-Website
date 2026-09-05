import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the device supports hover (if false, it's a touch device like a phone/tablet)
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;
    
    let isHovering = false;
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const vel = { x: 0, y: 0 };
    
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if we are hovering over anything clickable
      if (
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        isHovering = true;
        cursor.classList.add('cursor-hovering');
      } else {
        isHovering = false;
        cursor.classList.remove('cursor-hovering');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Use GSAP's ticker for a buttery smooth 60/120fps physics loop
    const render = () => {
      // Calculate distance between current pos and mouse
      vel.x = mouse.x - pos.x;
      vel.y = mouse.y - pos.y;
      
      // Update position with a smooth lerp (0.35 means it follows closely but smoothly)
      pos.x += vel.x * 0.35; 
      pos.y += vel.y * 0.35;
      
      // Calculate angle of movement
      const angle = Math.atan2(vel.y, vel.x) * (180 / Math.PI);
      
      // Calculate speed of movement
      const speed = Math.sqrt(vel.x * vel.x + vel.y * vel.y);
      
      // Dynamic stretch based on speed (stretches up to 0.8 extra scale)
      const stretch = Math.min(speed * 0.015, 0.8);
      
      // Target base scale depends on hover state
      const targetScale = isHovering ? 2.5 : 1;

      // Apply transforms using GSAP for hardware acceleration
      gsap.set(cursor, {
        x: pos.x,
        y: pos.y,
        rotation: angle, // Rotates the stretch to point in direction of movement
        scaleX: targetScale + stretch, // Stretch forwards
        scaleY: targetScale - (stretch * 0.4), // Squash inwards slightly for a natural droplet effect
      });
    };

    gsap.ticker.add(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      gsap.ticker.remove(render);
    };
  }, []);

  // Return nothing on mobile/touch devices
  if (isTouchDevice) return null;

  return (
    <>
      <style>{`
        /* Hide the default system cursor globally — except in admin */
        body:not(.admin-mode) * {
          cursor: none !important;
        }

        /* Hover state animations for the custom cursor inner dot */
        .cursor-hovering .cursor-dot {
          opacity: 0;
          transform: scale(0);
        }
      `}</style>
      
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center will-change-transform"
        style={{
          width: '24px',
          height: '24px',
          marginLeft: '-12px',
          marginTop: '-12px',
          borderRadius: '50%',
          backgroundColor: '#ffffff', // White with difference blend inverts everything behind it
        }}
      >
        {/* The inner black dot counters the white mix-blend-difference, 
            meaning the background shines through perfectly untouched in the very center! */}
        <div className="cursor-dot w-1.5 h-1.5 bg-black rounded-full transition-all duration-300 ease-out"></div>
      </div>
    </>
  );
}

