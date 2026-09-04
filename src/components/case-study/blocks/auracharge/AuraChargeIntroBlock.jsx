import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';

export default function AuraChargeIntroBlock({ content, sectionId, isAlternate }) {
  const { heading, intro, secondary, audience = [], image, kpis = [] } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left: Section Title */}
        <div className="w-full lg:w-1/4 flex-shrink-0">
          <ScrollReveal>
            <h2 className="text-sm font-clash uppercase tracking-[0.2em] text-primary font-semibold">
              About the project
            </h2>
          </ScrollReveal>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-8">
          <ScrollReveal>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide leading-tight text-foreground">
              {heading}
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-4 text-foreground/70 font-clash font-medium text-base md:text-lg leading-relaxed">
              <p>{intro}</p>
              <p>{secondary}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-4 mt-2">
              <h4 className="text-xs md:text-sm font-clash uppercase tracking-widest text-primary font-semibold">Target Audience</h4>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {audience.map((item, idx) => (
                  <span key={idx} className="font-clash px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-foreground/80 text-sm font-medium tracking-wide">
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
