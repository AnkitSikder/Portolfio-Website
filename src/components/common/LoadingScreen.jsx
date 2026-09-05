import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ isLoaded }) {
  const [progress, setProgress] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let interval;
    if (!isLoaded) {
      // Simulate loading progress
      interval = setInterval(() => {
        setProgress(p => {
          // Slow down as it gets closer to 90%
          const increment = Math.floor(Math.random() * 3) + 1;
          const next = p + increment;
          return next > 90 ? 90 : next;
        });
      }, 25);
    } else {
      // Spline is loaded, complete the progress quickly
      clearInterval(interval);
      
      const finishInterval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(finishInterval);
            
            // Trigger exit animation
            setTimeout(() => {
              setIsRevealing(true);
              
              // Remove from DOM after animations complete
              setTimeout(() => {
                setIsDone(true);
              }, 1200);
            }, 300);
            return 100;
          }
          return p + 2;
        });
      }, 20);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isLoaded]);

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
          src="/Logo v3.svg" 
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
