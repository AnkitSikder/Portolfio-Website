import React from 'react';

export default function PdfCoverPage() {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-background text-white flex flex-col justify-between p-8 md:p-14 lg:p-20">
      
      {/* ── Background Abstract Elements ── */}
      {/* Glowing Orb 1 */}
      <div 
        className="absolute top-[-25%] right-[-20%] w-[50vw] h-[50vw] md:w-[60vw] md:h-[60vw] rounded-full pointer-events-none mix-blend-screen opacity-50 md:opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(255,95,31,0.8) 0%, rgba(255,95,31,0.4) 40%, rgba(10,9,16,0) 70%)',
          filter: 'blur(90px)'
        }}
      />
      
      {/* Glowing Orb 2 */}
      <div 
        className="absolute bottom-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full pointer-events-none mix-blend-screen opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255,95,31,0.25) 0%, rgba(255,255,255,0.1) 40%, rgba(10,9,16,0) 70%)',
          filter: 'blur(100px)'
        }}
      />
      
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* ── Top Row: Utility Text ── */}
      <div className="relative z-10 flex justify-between items-start font-clash uppercase tracking-widest text-[10px] md:text-xs text-white/50 font-medium md:font-semibold">
        <div>
          <p>Ankit Sikder</p>
          <p>Interactive Design</p>
        </div>
        <div className="text-right">
          <p>Selected Works</p>
          <p>© 2026</p>
        </div>
      </div>

      {/* ── Center/Bottom Content: Massive Typography ── */}
      <div className="relative z-10 flex flex-col items-start w-full">
        {/* Subtitle Tag */}
        <div className="mb-4">
            <span
              className="inline-block px-4 py-1.5 text-[11px] font-clash font-semibold rounded-full uppercase tracking-[0.18em] border"
              style={{
                borderColor: 'rgba(255,95,31,0.35)',
                background: 'rgba(255,95,31,0.12)',
                color: '#ff5f1f',
              }}
            >
              Creative Portfolio
            </span>
        </div>

        {/* Huge Title */}
        <div className="flex flex-col w-full">
          <h1 
            className="font-franchise leading-[0.8] uppercase text-white/90"
            style={{ fontSize: 'clamp(5rem, 15vw, 15rem)', letterSpacing: '-0.02em' }}
          >
            PORTFOLIO
          </h1>
          <div className="flex justify-between items-end w-full mt-2">
            <h2 
              className="font-franchise leading-[0.8] uppercase text-[#ff5f1f]"
              style={{ fontSize: 'clamp(4rem, 12vw, 12rem)', letterSpacing: '-0.02em' }}
            >
              2026
            </h2>
            <div className="hidden md:flex flex-col items-end pb-2 font-satoshi font-medium text-sm text-white/50 max-w-xs text-right leading-relaxed border-r-2 border-[#ff5f1f]/50 pr-4">
              <p>A curated collection of product design, immersive experiences, and interactive systems.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
