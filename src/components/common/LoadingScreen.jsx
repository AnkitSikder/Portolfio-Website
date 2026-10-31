import React, { useState, useEffect } from 'react';

// shortcut: visitors never wait longer than this, even if the 3D scene is slow; raise it if the scene grows.
const MAX_WAIT_MS = 6000;

export default function LoadingScreen({ isLoaded }) {
  const [progress, setProgress] = useState(0);
  const [target, setTarget] = useState(15); // app is running
  const [isRevealing, setIsRevealing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [forceLoaded, setForceLoaded] = useState(false);

  useEffect(() => {
    const failsafe = setTimeout(() => setForceLoaded(true), MAX_WAIT_MS);
    return () => clearTimeout(failsafe);
  }, []);

  // Real milestones: Spline code downloaded -> scene file downloaded -> character rendered (isLoaded).
  useEffect(() => {
    if (!('PerformanceObserver' in window)) return;
    const po = new PerformanceObserver(list => {
      for (const e of list.getEntries()) {
        if (e.name.includes('scene.splinecode')) setTarget(t => Math.max(t, 80));
        else if (e.name.includes('react-spline')) setTarget(t => Math.max(t, 40));
      }
    });
    po.observe({ type: 'resource', buffered: true });
    return () => po.disconnect();
  }, []);

  useEffect(() => {
    const done = isLoaded || forceLoaded;
    const goal = done ? 100 : target;
    const tick = setInterval(() => {
      setProgress(p => {
        // Between milestones, creep slowly (never past 95) so the counter never looks frozen.
        if (p >= goal) return done ? 100 : Math.min(p + (Math.random() < 0.2 ? 1 : 0), goal + 10, 95);
        return Math.min(goal, p + Math.max(1, Math.round((goal - p) / (done ? 4 : 8))));
      });
    }, done ? 30 : 60);
    return () => clearInterval(tick);
  }, [isLoaded, forceLoaded, target]);

  // At 100%: start the exit animation, then remove the overlay once it has finished.
  useEffect(() => {
    if (progress < 100) return;
    const reveal = setTimeout(() => setIsRevealing(true), 100);
    const remove = setTimeout(() => setIsDone(true), 1300);
    return () => { clearTimeout(reveal); clearTimeout(remove); };
  }, [progress]);

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

