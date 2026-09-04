import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';

export default function AuraChargeJourneyBlock({ content, sectionId, isAlternate }) {
  const { heading, narrative, stages = [], image } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        
        {/* Header & Narrative */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="w-full md:w-1/2">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-franchise uppercase tracking-wide leading-tight text-foreground">
                {heading}
              </h2>
            </ScrollReveal>
          </div>
          <div className="w-full md:w-1/2">
            <ScrollReveal delay={0.1}>
              <p className="text-base md:text-lg text-foreground/70 font-clash font-medium leading-relaxed border-l-2 border-primary/30 pl-6">
                {narrative}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Stage Indicator */}
        {stages && stages.length > 0 && (
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-2 md:gap-4 py-4 md:py-6 px-6 md:px-8 bg-foreground/5 border border-foreground/10 rounded-2xl">
              {stages.map((stage, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-xs md:text-sm font-clash font-medium tracking-widest uppercase text-foreground/90">
                    {stage}
                  </span>
                  {idx < stages.length - 1 && (
                    <span className="text-primary/50 text-sm md:text-base">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Storyboard Image */}
        <ScrollReveal delay={0.3}>
          <div className="w-full overflow-x-auto pb-6 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide">
            <div className="min-w-[800px] w-full rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
              {image && (
                <img 
                  src={image} 
                  alt="User Journey Storyboard" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
