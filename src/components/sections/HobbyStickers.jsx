import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Using all 9 premium custom icons provided by the user
// Positioned with gaps to avoid overlap, and some placed towards the center 
// so they appear beautifully behind the 3D character and header text.
const stickers = [
  { id: 1, name: 'Mountain', url: '/20230724_092824.jpg', top: '20%', left: '15%', size: '220px', rotation: 10 },
  { id: 2, name: 'Flower', url: '/20250111_125157.jpg', top: '30%', left: '85%', size: '200px', rotation: -12 },
  { id: 3, name: 'Crab', url: '/IMG_20230730_141813727_HDR~2.jpg', top: '65%', left: '82%', size: '210px', rotation: 8 },
  { id: 4, name: 'Selfie', url: '/20221229_110358.jpg', top: '55%', left: '12%', size: '240px', rotation: -8 },
  { id: 5, name: 'Feet Mountain', url: '/IMG_20230724_123719.jpg', top: '80%', left: '18%', size: '230px', rotation: 15 },
  { id: 6, name: 'Leaf Sun', url: '/20221017_101454.jpg', top: '15%', left: '68%', size: '190px', rotation: -18 },
  { id: 7, name: 'Notebook', url: '/202210319_094439.jpg', top: '85%', left: '72%', size: '215px', rotation: -5 },
];

export default function HobbyStickers() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const stickerElements = Array.from(container.children);
    const stickerData = stickerElements.map(el => ({ el }));

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      stickerData.forEach(({ el }) => {
        const rect = el.getBoundingClientRect();
        // Calculate center precisely based on bounding box
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const radius = 280; // slightly larger reveal radius
        
        if (dist < radius) {
          const intensity = 1 - (dist / radius); 
          
          gsap.to(el, {
            opacity: Math.min(intensity * 2, 1),
            scale: 0.5 + (intensity * 0.7),
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto"
          });
        } else {
          gsap.to(el, {
            opacity: 0,
            scale: 0.5,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto"
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial hidden state
    gsap.set(stickerElements, { opacity: 0, scale: 0.5 });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // z-[5] guarantees they sit BEHIND the text (z-10) and the 3D Spline character (z-20)
  return (
    <div ref={containerRef} className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
      {stickers.map((s) => (
        <div
          key={s.id}
          className="absolute flex items-center justify-center will-change-transform -translate-x-1/2 -translate-y-1/2"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
          }}
        >
          <div style={{ transform: `rotate(${s.rotation}deg)`, width: '100%', height: '100%' }}>
            <img 
              src={s.url} 
              alt={s.name} 
              title={s.name}
              className="w-full h-full object-cover rounded-xl border-[6px] border-foreground shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
              style={{ filter: 'brightness(1.05) contrast(1.1)' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
