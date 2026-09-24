import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';
import SectionHeader from '../../common/SectionHeader';

export default function AuraChargeIntroBlock({ content, sectionId, isAlternate }) {
  const { heading, intro, secondary, audience = [], image, kpis = [] } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 md:gap-12">
        
        <div className="w-full">
          <SectionHeader 
            title="About the project"
            heading={heading}
            className="!mb-8 lg:!mb-12"
          />

          <ScrollReveal delay={0.1}>
            <div className="space-y-4 font-clash text-base md:text-lg font-medium tracking-wide text-white/70 leading-relaxed mb-10 max-w-5xl">
              <p>{intro}</p>
              <p>{secondary}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-4 mt-10">
              <h3 className="font-franchise text-4xl md:text-5xl uppercase tracking-wide text-white leading-tight mb-2">Target Audience</h3>
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
