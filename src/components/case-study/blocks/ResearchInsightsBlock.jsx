import React from 'react';

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
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20">
        
        {/* Intro */}
        <div className="flex flex-col gap-3 md:gap-4 max-w-4xl mx-auto text-center">
          {heading && (
            <h2 className="font-clash text-sm uppercase tracking-[0.2em] text-primary">
              {heading}
            </h2>
          )}
          {intro && (
            <p className="font-franchise text-4xl md:text-5xl uppercase tracking-wide text-white leading-tight whitespace-pre-line">
              {intro}
            </p>
          )}
        </div>

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
                <h3 className="font-clash text-xl md:text-2xl font-medium text-white/90 leading-snug">
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
