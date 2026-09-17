import React from 'react';
import SectionHeader from '../common/SectionHeader';

export default function ResearchInsightsBlock({ content, isAlternate }) {
  const {
    heading,
    intro,
    insights = [],
    opportunityPrefix,
    opportunityText,
  } = content;

  return (
    <section className={`py-10 md:py-16 lg:py-20 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-white w-full overflow-hidden`}>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
        
        {/* Intro */}
        <SectionHeader 
          title={heading}
          heading={intro}
          className="items-center text-center mx-auto max-w-4xl"
        />

        {/* Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {insights.map((ins, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-[2rem] bg-white/5 border border-white/10 p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 hover:bg-white/10 hover:border-white/20 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none translate-x-1/2 -translate-y-1/2" />
              
              <div className="font-franchise text-4xl md:text-5xl text-primary/60">
                {ins.number}
              </div>
              
              <div className="flex flex-col gap-3 mt-auto">
                <h3 className="font-clash text-[20px] md:text-[22px] font-medium text-white/90 leading-snug">
                  {ins.title}
                </h3>
                <p className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-white/60 leading-relaxed">
                  {ins.description}
                </p>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
