import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ isLoaded }) {
  const [progress, setProgress] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [forceLoaded, setForceLoaded] = useState(false);

  useEffect(() => {
    // Increased failsafe to 8 seconds to allow Spline to actually load on slower mobile networks
    const failsafe = setTimeout(() => setForceLoaded(true), 8000);
    return () => clearTimeout(failsafe);
  }, []);

  useEffect(() => {
    let interval;
    const effectivelyLoaded = isLoaded || forceLoaded;
    
    if (!effectivelyLoaded) {
      const startT = Date.now();
      // Simulate loading progress based on elapsed time to prevent it from getting stuck
      interval = setInterval(() => {
        setProgress(p => {
          const elapsed = Date.now() - startT;
          const target = Math.floor((elapsed / 3000) * 90); // Reach ~90% in 3s
          const next = Math.max(p, target);
          // Also add a tiny random increment occasionally so it feels alive
          const randomInc = Math.random() > 0.5 ? 1 : 0;
          const finalNext = Math.max(next, p + randomInc);
          return finalNext > 90 ? 90 : finalNext;
        });
      }, 50);
    } else {
      // Spline is loaded, complete the progress quickly
      interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            
            // Trigger exit animation
            setTimeout(() => {
              setIsRevealing(true);
              
              // Remove from DOM after animations complete
              setTimeout(() => {
                setIsDone(true);
              }, 1200);
            }, 100);
            return 100;
          }
          // Quickly jump to 100% instead of +2 per tick
          const remaining = 100 - p;
          const increment = Math.max(Math.floor(remaining / 4), 3);
          return Math.min(100, p + increment);
        });
      }, 30);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isLoaded, forceLoaded]);

  if (isDone) return null;

  return (
    <div className={`fixed inset-0 z-[100] overflow-hidden pointer-events-auto`}>
      {/* Base Dark Background (Provides strokes color outside the expanding circle, fades out to reveal home page) */}
      <div 
        className="absolute inset-0 z-0 bg-[#11131A] transition-opacity duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)]" 
        style={{ opacity: isRevealing ? 0 : 1 }}
      />

      {/* Layer 3: 4 Quadrants (Beige Background) with native gaps and perfect circular cutouts */}
      <div 
        className="absolute z-20 transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] bg-[#F4EFE6]"
        style={{
          top: 0, left: 0, right: 'calc(80% + 12px)', bottom: 'calc(75% + 12px)',
          transform: isRevealing ? 'translate(-100%, -100%)' : 'translate(0, 0)',
          WebkitMaskImage: 'radial-gradient(circle at calc(100% + 12px) calc(100% + 12px), transparent 88px, black 89px)',
          maskImage: 'radial-gradient(circle at calc(100% + 12px) calc(100% + 12px), transparent 88px, black 89px)'
        }}
      />
      <div 
        className="absolute z-20 transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] bg-[#F4EFE6]"
        style={{
          top: 0, left: 'calc(20% + 12px)', right: 0, bottom: 'calc(75% + 12px)',
          transform: isRevealing ? 'translate(100%, -100%)' : 'translate(0, 0)',
          WebkitMaskImage: 'radial-gradient(circle at -12px calc(100% + 12px), transparent 88px, black 89px)',
          maskImage: 'radial-gradient(circle at -12px calc(100% + 12px), transparent 88px, black 89px)'
        }}
      />
      <div 
        className="absolute z-20 transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] bg-[#F4EFE6]"
        style={{
          top: 'calc(25% + 12px)', left: 0, right: 'calc(80% + 12px)', bottom: 0,
          transform: isRevealing ? 'translate(-100%, 100%)' : 'translate(0, 0)',
          WebkitMaskImage: 'radial-gradient(circle at calc(100% + 12px) -12px, transparent 88px, black 89px)',
          maskImage: 'radial-gradient(circle at calc(100% + 12px) -12px, transparent 88px, black 89px)'
        }}
      />
      <div 
        className="absolute z-20 transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] bg-[#F4EFE6]"
        style={{
          top: 'calc(25% + 12px)', left: 'calc(20% + 12px)', right: 0, bottom: 0,
          transform: isRevealing ? 'translate(100%, 100%)' : 'translate(0, 0)',
          WebkitMaskImage: 'radial-gradient(circle at -12px -12px, transparent 88px, black 89px)',
          maskImage: 'radial-gradient(circle at -12px -12px, transparent 88px, black 89px)'
        }}
      />

      {/* Orange Inner Circle & Logo (Foreground) */}
      <div 
        className="absolute z-30 left-[20%] top-[25%] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out"
        style={{
          width: '128px', height: '128px',
          backgroundColor: '#FF6B00',
          transform: `translate(-50%, -50%) ${isRevealing ? 'scale(0)' : 'scale(1)'}`,
          opacity: isRevealing ? 0 : 1
        }}
      >
        <img 
          src="/logos/Logo v3.svg" 
          alt="Logo" 
          className="w-16 h-16 animate-[spin_4s_linear_infinite]" 
        />
      </div>

      {/* Progress Text */}
      <div 
        className="absolute z-40 right-8 bottom-4 md:right-16 md:bottom-8 font-bold text-[45vw] sm:text-[35vw] md:text-[14vw] leading-none tracking-tighter transition-all duration-500"
        style={{
          fontFamily: "'Franchise', sans-serif",
          opacity: isRevealing ? 0 : 1,
          transform: isRevealing ? 'translateY(20px)' : 'translateY(0)'
        }}
      >
        {/* Dark Base */}
        <div className="text-[#11131A] select-none">{progress}%</div>
        
        {/* Orange Fill (Clipped from bottom to top) */}
        <div 
          className="absolute top-0 left-0 text-[#FF6B00] select-none transition-all duration-75"
          style={{
            // Negative insets on right, bottom, left prevent clipping font overhangs
            clipPath: `inset(${100 - progress}% -20px -20px -20px)`
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}

