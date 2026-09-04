import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectHero({ category, title, summary, role, duration, heroImage, tools }) {
  const imgRef = useRef(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `translateY(${y * 0.35}px) scale(1.08)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-[#0a0910]">

      {/* ── Parallax Background Image ── */}
      {heroImage ? (
        <div
          ref={imgRef}
          className="absolute inset-0 will-change-transform"
          style={{ transform: 'scale(1.08)' }}
        >
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.55)' }}
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1828] via-[#0d0c14] to-[#0a0910]" />
      )}

      {/* ── Cinematic Gradient Overlays ── */}
      {/* Main bottom-up text protection (smooth scrim) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            to top, 
            rgba(10, 9, 16, 1) 0%,
            rgba(10, 9, 16, 0.95) 8%,
            rgba(10, 9, 16, 0.82) 18%,
            rgba(10, 9, 16, 0.62) 33%,
            rgba(10, 9, 16, 0.38) 50%,
            rgba(10, 9, 16, 0.15) 70%,
            rgba(10, 9, 16, 0) 100%
          )`
        }}
      />
      
      {/* Deep left-side shadow for title */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            to right, 
            rgba(10, 9, 16, 0.9) 0%,
            rgba(10, 9, 16, 0.75) 15%,
            rgba(10, 9, 16, 0.45) 35%,
            rgba(10, 9, 16, 0.15) 60%,
            rgba(10, 9, 16, 0) 100%
          )`
        }}
      />
      
      {/* Subtle top-right angled light to make the product pop */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        style={{
          background: `radial-gradient(
            circle at 75% 35%, 
            rgba(255, 255, 255, 0.08) 0%, 
            rgba(255, 255, 255, 0.02) 40%, 
            transparent 70%
          )`
        }}
      />

      {/* ── Back Button ── */}
      <div className="absolute top-28 left-8 md:top-32 md:left-14 lg:left-20 z-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-clash uppercase tracking-widest text-white/60 hover:text-primary transition-colors duration-300 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* ── Main Content — pinned bottom-left ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-10 md:px-14 md:pb-14 lg:px-20 lg:pb-16">
        <div className="max-w-[1400px] mx-auto">

          {/* Category pill */}
          <div className="mb-5">
            <span
              className="inline-block px-4 py-1.5 text-[11px] font-clash font-semibold rounded-full uppercase tracking-[0.18em] border"
              style={{
                borderColor: 'rgba(255,95,31,0.35)',
                background: 'rgba(255,95,31,0.12)',
                color: '#ff5f1f',
              }}
            >
              {category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-franchise uppercase leading-[0.88] text-white mb-5"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)', letterSpacing: '-0.01em' }}
          >
            {title}
          </h1>

          {/* Summary */}
          <p
            className="font-clash font-light text-white/70 max-w-2xl leading-relaxed mb-8"
            style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)' }}
          >
            {summary}
          </p>

          {/* Metadata row — frosted glass pills */}
          <div className="flex flex-wrap items-center gap-3">
            {role && (
              <MetaPill label="Role" value={role} />
            )}
            {duration && (
              <MetaPill label="Duration" value={duration} />
            )}
            {tools && tools.length > 0 && (
              <MetaPill label="Tools" value={Array.isArray(tools) ? tools.join(' · ') : tools} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaPill({ label, value }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-2.5 rounded-full"
      style={{
        background: 'rgba(255,255,255,0.07)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <span className="text-[10px] font-clash uppercase tracking-[0.2em] text-white/40">{label}</span>
      <span className="w-px h-3 bg-white/15 rounded-full" />
      <span className="text-xs font-clash font-medium text-white/85">{value}</span>
    </div>
  );
}
