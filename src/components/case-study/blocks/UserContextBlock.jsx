import React from 'react';

export default function UserContextBlock({ content, isAlternate }) {
  const {
    heading,
    intro,
    userType,
    managesTitle,
    managesList = [],
    managesImage,
    researchHeading,
    researchSubheading,
    investigations = [],
    researchImage,
  } = content;

  return (
    <section className={`py-10 md:py-16 lg:py-20 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-white w-full overflow-hidden`}>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20">
        
        {/* Intro Section */}
        <div className="flex flex-col gap-3 md:gap-4 max-w-3xl">
          {heading && (
            <h2 className="font-clash text-sm uppercase tracking-[0.2em] text-primary">
              {heading}
            </h2>
          )}
          {intro && (
            <p className="font-franchise text-4xl md:text-5xl uppercase tracking-wide text-white leading-tight">
              {intro}
            </p>
          )}
        </div>

        {/* User Type & Manages Panel */}
        <div className="flex flex-col gap-8">
          {userType && (
            <div className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-white/60 leading-relaxed border-l-4 border-primary pl-6 py-2">
              <span className="opacity-50 block text-xs md:text-sm uppercase tracking-widest mb-2 font-clash font-medium">Primary User</span>
              {userType}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 md:gap-8 items-stretch">
            {/* Visual Panel */}
            <div className="relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 p-6 md:p-10 lg:p-12 flex flex-col justify-center min-h-[400px]">
              {/* Optional background image / subtle glow */}
              <div className="absolute inset-0 pointer-events-none">
                {managesImage ? (
                  <img src={managesImage} alt="User Context" className="w-full h-full object-cover opacity-20 mix-blend-overlay" loading="lazy" />
                ) : (
                  <div className="absolute -inset-[100%] bg-[radial-gradient(ellipse_at_center,_rgba(var(--primary-rgb),0.15)_0%,_transparent_50%)]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-[2px]" />
              </div>
              
              <div className="relative z-10">
                {managesTitle && (
                  <h3 className="font-clash text-xl md:text-2xl font-medium text-white/90 mb-6 flex items-center gap-4">
                    {managesTitle}
                    <div className="flex-1 h-px bg-white/20" />
                  </h3>
                )}
                <div className="flex flex-wrap gap-2.5 md:gap-3">
                  {managesList.map((item, idx) => (
                    <span key={idx} className="font-clash px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/90 text-sm font-medium tracking-wide backdrop-blur-md hover:bg-white/20 hover:border-white/30 transition-colors shadow-lg">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Research Summary */}
            <div className={`rounded-[2rem] bg-white/5 border border-white/10 p-6 md:p-10 lg:p-12 flex ${researchImage ? 'flex-col lg:flex-row items-center gap-8 lg:gap-10' : 'flex-col justify-center'} shadow-2xl relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
              
              <div className={`flex flex-col flex-1 relative z-10 ${researchImage ? 'w-full lg:w-1/2' : ''}`}>
                <div className="flex flex-col gap-2 mb-8">
                  {researchHeading && (
                    <h3 className="font-clash text-xl md:text-2xl font-medium text-primary leading-snug">
                      {researchHeading}
                    </h3>
                  )}
                  {researchSubheading && (
                    <p className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-white/60 leading-relaxed">
                      {researchSubheading}
                    </p>
                  )}
                </div>
                
                <div className="flex flex-col gap-4 md:gap-6">
                  <h4 className="text-xs md:text-sm font-clash font-semibold uppercase tracking-widest text-white/90">Investigated Topics</h4>
                  <ul className="flex flex-col gap-3">
                    {investigations.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]" />
                        <span className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-white/60 leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {researchImage && (
                <div className="flex-1 relative z-10 w-full lg:w-1/2 h-full rounded-2xl overflow-hidden border border-white/10 shadow-lg min-h-[300px]">
                  <img src={researchImage} alt="Research" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
