import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';

export default function Phase2SelectedConceptBlock({ content, sectionId, isAlternate }) {
  const bgClass = isAlternate ? 'bg-foreground/5' : 'bg-background';
  
  const rationales = [
    {
      num: '01',
      title: 'EASIER PULLING',
      desc: 'The tool converts repeated manual sweeping into a more controlled forward pulling action.'
    },
    {
      num: '02',
      title: 'DEBRIS + PLANT TRAPPING',
      desc: 'A brush at the front helps catch plants and debris during collection.'
    },
    {
      num: '03',
      title: 'COLLECTION + FIRST-STAGE CLEANING',
      desc: 'The concept combines collection with an initial separation step instead of treating them as completely separate operations.'
    },
    {
      num: '04',
      title: 'EASIER UNLOADING',
      desc: 'The removable / liftable collection basket reduces handling effort during unloading.'
    },
    {
      num: '05',
      title: 'INCREASED COLLECTION EFFICIENCY',
      desc: 'The overall mechanism is intended to make seed collection more efficient than the existing manual approach.'
    }
  ];

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="mb-12 md:mb-16 max-w-5xl mx-auto text-center">
            <h2 className="text-sm font-clash uppercase tracking-[0.2em] text-primary mb-4">
              {content.heading || "From many ideas, one direction made the most sense."}
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-franchise uppercase tracking-wide text-foreground leading-tight">
              {content.subheading || "A pull-based collector that combines collection, agitation and first-stage separation into one workflow."}
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col items-center">
          {/* Main Visual */}
          <ScrollReveal className="w-full max-w-5xl">
            <div className="rounded-2xl md:rounded-[2rem] bg-foreground/5 border border-foreground/10 p-6 md:p-10 shadow-2xl relative overflow-hidden group">
              <img 
                src="/assets/projects/makhana-tool/assets/08_product_concept_future/selected_concept_mechanism.jpg" 
                alt="Selected Concept Mechanism" 
                className="w-full h-auto object-contain mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700 relative z-0"
                loading="lazy"
                decoding="async"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
