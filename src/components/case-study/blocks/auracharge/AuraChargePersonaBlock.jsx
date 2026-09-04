import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';

export default function AuraChargePersonaBlock({ content, sectionId, isAlternate }) {
  const { heading, personas = [] } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 lg:gap-16">
        
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide leading-tight text-foreground text-center">
            {heading}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
          {personas.map((persona, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx} className="h-full">
              <div className="flex flex-col h-full bg-white/5 text-foreground rounded-3xl p-6 md:p-8 border border-white/10 group transition-all duration-300 hover:border-primary/30">
                
                {/* Header Section */}
                <div className="flex items-center gap-5 border-b border-white/10 pb-6 mb-6">
                  
                  {/* Avatar Placeholder */}
                  <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-white/10 flex items-center justify-center shrink-0 overflow-hidden shadow-lg border border-white/10">
                    {persona.image ? (
                      <img 
                        src={persona.image} 
                        alt={persona.name} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <span className="text-3xl md:text-4xl font-franchise text-white/30">
                        {persona.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold font-clash tracking-wide leading-tight">{persona.name}</h3>
                    <div className="text-[10px] md:text-xs text-primary font-semibold uppercase tracking-widest mt-1">
                      {persona.role}
                    </div>
                    <div className="text-[11px] md:text-xs text-foreground/50 mt-1.5 font-medium">
                      {persona.demographics}
                    </div>
                  </div>

                </div>

                {/* Body Section */}
                <div className="flex flex-col gap-6 flex-1">
                  
                  <div>
                    <h4 className="font-bold text-sm text-foreground/80 mb-2.5 tracking-wide">Expectations</h4>
                    <ul className="text-xs md:text-[13px] text-foreground/60 space-y-1.5 list-disc ml-4 font-medium leading-relaxed">
                      {persona.expectations?.map((exp, eIdx) => (
                        <li key={eIdx}>{exp}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-foreground/80 mb-2.5 tracking-wide">Key Insights</h4>
                    <ul className="text-xs md:text-[13px] text-foreground/60 space-y-1.5 list-disc ml-4 font-medium leading-relaxed">
                      {persona.insights?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
