import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';
import SectionHeader from '../common/SectionHeader';

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
          <SectionHeader 
            title={content.heading || "From many ideas, one direction made the most sense."}
            heading={<>A pull-based collector that combines collection, <br className="hidden lg:block" />agitation and first-stage separation into one workflow.</>}
            className="!mb-12 md:!mb-16"
          />
        </ScrollReveal>

        <div className="flex flex-col">
          {/* Main Visual */}
          <ScrollReveal className="w-full">
            <img 
              src="/assets/projects/makhana-tool/assets/08_product_concept_future/selected_concept_mechanism.jpg" 
              alt="Selected Concept Mechanism" 
              className="w-full h-auto object-contain rounded-2xl md:rounded-[2rem]"
              loading="lazy"
              decoding="async"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
