import React, { useState } from 'react';
import ScrollReveal from '../../../common/ScrollReveal';
import SectionHeader from '../../common/SectionHeader';

export default function AuraChargeIABlock({ content, sectionId, isAlternate }) {
  const { heading, description, displayIA, mobileIA } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">
        
        <ScrollReveal>
          <SectionHeader title="Information Architecture" heading={heading} description={description} className="!mb-0" />
        </ScrollReveal>

        <div className="flex flex-col gap-8 md:gap-12">
          
          {/* Display IA */}
          {displayIA && (
            <div className="flex flex-col gap-8">
              <ScrollReveal delay={0.1}>
                <div className="flex flex-col gap-2">
                  <h3 className="font-clash text-[20px] md:text-[22px] font-medium tracking-wide text-primary">Inverter Display Architecture</h3>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="w-full overflow-x-auto pb-6 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide">
                  <div className="min-w-[800px] rounded-[2rem] overflow-hidden shadow-2xl">
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
                  <h3 className="font-clash text-[20px] md:text-[22px] font-medium tracking-wide text-primary">Mobile App Architecture</h3>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="w-full overflow-x-auto pb-6 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide" dir="rtl">
                  <div className="min-w-[800px] rounded-[2rem] overflow-hidden shadow-2xl" dir="ltr">
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
