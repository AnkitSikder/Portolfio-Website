import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';

export default function AuraChargeIABlock({ content, sectionId, isAlternate }) {
  const { heading, description, displayIA, mobileIA } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        
        <ScrollReveal>
          <div className="max-w-4xl flex flex-col gap-6 text-center mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide leading-tight text-foreground">
              {heading}
            </h2>
            <p className="text-base md:text-lg text-foreground/70 font-clash font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-16 lg:gap-24">
          
          {/* Display IA */}
          {displayIA && (
            <div className="flex flex-col gap-8">
              <ScrollReveal delay={0.1}>
                <div className="flex flex-col gap-2">
                  <h3 className="font-franchise text-3xl md:text-4xl uppercase tracking-widest text-primary">Inverter Display Architecture</h3>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="w-full overflow-x-auto pb-6 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide">
                  <div className="min-w-[800px] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl p-4 md:p-8">
                    <img 
                      src={displayIA} 
                      alt="Display Information Architecture" 
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* Mobile IA */}
          {mobileIA && (
            <div className="flex flex-col gap-8">
              <ScrollReveal delay={0.1}>
                <div className="flex flex-col gap-2 text-right">
                  <h3 className="font-franchise text-3xl md:text-4xl uppercase tracking-widest text-primary">Mobile App Architecture</h3>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="w-full overflow-x-auto pb-6 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide" dir="rtl">
                  <div className="min-w-[800px] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl p-4 md:p-8" dir="ltr">
                    <img 
                      src={mobileIA} 
                      alt="Mobile App Information Architecture" 
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
