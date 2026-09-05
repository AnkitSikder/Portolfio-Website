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
      }, 60);
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
    <div className={`fixed inset-0 z-[100] overflow-hidden pointer-events-auto ${!isRevealing ? 'bg-[#F4EFE6]' : ''}`}>
      {/* 4 Quadrants (Beige Background) */}
      <div 
        className="absolute transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] bg-[#F4EFE6]"
        style={{
          top: 0, left: 0, right: '80vw', bottom: '75vh',
          transform: isRevealing ? 'translate(-100%, -100%)' : 'translate(0, 0)'
        }}
      />
      <div 
        className="absolute transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] bg-[#F4EFE6]"
        style={{
          top: 0, left: '20vw', right: 0, bottom: '75vh',
          transform: isRevealing ? 'translate(100%, -100%)' : 'translate(0, 0)'
        }}
      />
      <div 
        className="absolute transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] bg-[#F4EFE6]"
        style={{
          top: '25vh', left: 0, right: '80vw', bottom: 0,
          transform: isRevealing ? 'translate(-100%, 100%)' : 'translate(0, 0)'
        }}
      />
      <div 
        className="absolute transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] bg-[#F4EFE6]"
        style={{
          top: '25vh', left: '20vw', right: 0, bottom: 0,
          transform: isRevealing ? 'translate(100%, 100%)' : 'translate(0, 0)'
        }}
      />

      {/* Grid Lines */}
      {/* Horizontal Line */}
      <div 
        className="absolute left-0 right-0 top-[25vh] h-6 bg-[#11131A] transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] -translate-y-1/2"
        style={{
          transform: isRevealing ? 'translateY(-50%) scaleX(0)' : 'translateY(-50%) scaleX(1)',
          opacity: isRevealing ? 0 : 1,
          transformOrigin: '20vw center'
        }}
      />
      {/* Vertical Line */}
      <div 
        className="absolute top-0 bottom-0 left-[20vw] w-6 bg-[#11131A] transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] -translate-x-1/2"
        style={{
          transform: isRevealing ? 'translateX(-50%) scaleY(0)' : 'translateX(-50%) scaleY(1)',
          opacity: isRevealing ? 0 : 1,
          transformOrigin: 'center 25vh'
        }}
      />

      {/* Intersection Element */}
      <div 
        className="absolute left-[20vw] top-[25vh] rounded-full flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)]"
        style={{
          width: '176px', height: '176px', // 128px + 24px + 24px = 176px
          backgroundColor: '#11131A',
          transform: `translate(-50%, -50%) ${isRevealing ? 'scale(25)' : 'scale(1)'}`,
          opacity: isRevealing ? 0 : 1
        }}
      >
        {/* Orange Inner Circle */}
        <div 
          className="absolute w-[128px] h-[128px] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out"
          style={{
            backgroundColor: '#FF6B00',
            transform: isRevealing ? 'scale(0)' : 'scale(1)',
            opacity: isRevealing ? 0 : 1
          }}
        >
          {/* Spinning Logo */}
          <img 
            src="/Logo v3.svg" 
            alt="Logo" 
            className="w-16 h-auto animate-spin" 
            style={{ animationDuration: '3s' }} 
          />
        </div>
      </div>

      {/* Progress Text */}
      <div 
        className="absolute right-8 bottom-4 md:right-16 md:bottom-8 font-bold text-[14vw] leading-none tracking-tighter transition-all duration-500"
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
