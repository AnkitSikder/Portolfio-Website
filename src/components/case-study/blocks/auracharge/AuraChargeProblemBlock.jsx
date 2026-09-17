import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';
import SectionHeader from '../../common/SectionHeader';

export default function AuraChargeProblemBlock({ content, sectionId, isAlternate }) {
  const { heading, statements = [], image, painPoints = [] } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">
        
        {/* Top: Crisp Text Area */}
        <div className="max-w-4xl">
          <ScrollReveal>
            <SectionHeader title="The Problem" heading={heading} className="!mb-8 lg:!mb-12" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-3 md:gap-4 font-clash text-base md:text-lg font-medium tracking-wide text-white/70 leading-relaxed">
              {statements.map((stmt, idx) => (
                <p key={idx} className="leading-relaxed">{stmt}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom: Split Image + Pain Points */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Image side - optimized for the white background product shot */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <ScrollReveal delay={0.2} className="h-full">
              <div className="rounded-[2rem] overflow-hidden bg-white shadow-2xl h-full flex flex-col items-center justify-center p-8 md:p-12 relative min-h-[350px] md:min-h-[450px]">
                {image && (
                  <img 
                    src={image} 
                    alt="Problem Context" 
                    className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Pain Points Grid side */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {painPoints.map((point, idx) => (
              <ScrollReveal key={idx} delay={0.3 + (idx * 0.1)} className="h-full">
                <div className="flex flex-col gap-4 p-8 lg:p-10 rounded-[2rem] bg-foreground/5 border border-foreground/10 hover:border-primary/40 hover:bg-foreground/10 transition-all duration-300 h-full group shadow-lg">
                  <h4 className="font-clash text-[20px] md:text-[22px] font-medium tracking-wide text-primary">
                    {point.title}
                  </h4>
                  <p className="text-sm md:text-[15px] font-clash font-medium text-white/60 leading-relaxed group-hover:text-white/60 transition-colors tracking-wide">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
