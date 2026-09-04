import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';

export default function Phase2DimensionsBlock({ content, sectionId, isAlternate }) {
  const bgClass = isAlternate ? 'bg-foreground/5' : 'bg-background';

  const highlights = [
    { title: 'HANDLE', desc: '~826 mm shown in technical drawing' },
    { title: 'BODY / BASKET', desc: 'Core collection volume' },
    { title: 'WHEEL / CHASSIS', desc: 'Defines the working height and movement' },
    { title: 'OVERALL SYSTEM', desc: 'Long reach + low working interface' }
  ];

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-24 mb-10">
        <ScrollReveal>
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-franchise uppercase tracking-wide text-foreground leading-tight">
              Sized for the real working environment.
            </h2>
            <p className="mt-4 text-sm font-clash font-medium text-foreground/70 leading-relaxed max-w-2xl">
              The final form was translated into front, side and top views to define the working envelope and key component dimensions.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Technical Drawing - Full width container with horizontal scroll on mobile */}
      <ScrollReveal>
        <div className="w-full overflow-x-auto pb-6 custom-scrollbar px-5 md:px-12 lg:px-24">
          <div className="min-w-[800px] w-full rounded-2xl md:rounded-[2rem] bg-foreground/5 p-4 md:p-10 border border-foreground/10 flex justify-center">
            <img 
              src="/assets/projects/makhana-tool/assets/08_product_concept_future/Final Dimensions.png" 
              alt="Final Dimensions Technical Drawing" 
              className="w-full max-w-[1200px] h-auto object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </ScrollReveal>

    </section>
  );
}
