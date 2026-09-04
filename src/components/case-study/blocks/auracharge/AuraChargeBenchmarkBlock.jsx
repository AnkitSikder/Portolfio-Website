import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';

export default function AuraChargeBenchmarkBlock({ content, sectionId, isAlternate }) {
  const { heading, image } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-10 md:gap-16">
        
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide leading-tight text-foreground text-center">
            {heading}
          </h2>
        </ScrollReveal>

        {image && (
          <ScrollReveal delay={0.2} className="w-full">
            <div className="w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-xl flex items-center justify-center">
              <img 
                src={image} 
                alt={heading} 
                className="w-full h-auto max-h-[80vh] object-contain"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        )}
        
      </div>
    </section>
  );
}
