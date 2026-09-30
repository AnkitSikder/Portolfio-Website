import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';

export default function AuraChargeIntroBlock({ content, sectionId, isAlternate }) {
  const { heading, intro, secondary, audience = [], image, kpis = [] } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
        
        {/* Left Side: Section Title */}
        <div className="w-full lg:w-1/4 shrink-0">
          <ScrollReveal>
            <h2 className="font-clash text-sm uppercase tracking-[0.2em] text-primary pt-2">
              About the project
            </h2>
          </ScrollReveal>
        </div>
        
        {/* Right Side: Content */}
        <div className="w-full flex-1">
          <ScrollReveal delay={0.1}>
            <h3 className="font-franchise text-4xl md:text-5xl uppercase tracking-wide text-white leading-tight mb-8 max-w-4xl">
              {heading}
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4 font-clash text-base md:text-lg font-medium tracking-wide text-white/70 leading-relaxed mb-12 max-w-4xl">
              <p>{intro}</p>
              <p>{secondary}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col gap-5">
              <h3 className="font-franchise text-3xl md:text-4xl uppercase tracking-wide text-white leading-tight">Target Audience</h3>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {audience.map((item, idx) => (
                  <span key={idx} className="font-clash px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-white/60 text-sm font-medium tracking-wide leading-relaxed">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
