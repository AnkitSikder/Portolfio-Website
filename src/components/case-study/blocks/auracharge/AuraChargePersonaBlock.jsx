import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';
import SectionHeader from '../../common/SectionHeader';

export default function AuraChargePersonaBlock({ content, sectionId, isAlternate }) {
  const { heading, personas = [] } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">
        
        <ScrollReveal>
          <SectionHeader title="User Persona" heading={heading} className="!mb-0" />
        </ScrollReveal>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
          {personas.map((persona, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx} className="h-full">
              <div className="flex flex-col h-full bg-white/5 text-foreground rounded-3xl p-6 md:p-8 md:p-10 border border-white/10 group transition-all duration-300 hover:border-primary/30 shadow-xl">
                
                {/* Header Section */}
                <div className="flex items-center gap-5 md:gap-6 border-b border-white/10 pb-6 mb-6">
                  
                  {/* Avatar Placeholder */}
                  <div className="w-16 h-16 md:w-[80px] md:h-[80px] rounded-full bg-white/10 flex items-center justify-center shrink-0 overflow-hidden shadow-lg border border-white/10">
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
                    <h3 className="text-xl md:text-[28px] font-bold font-clash tracking-wide text-white/90 leading-tight mb-1">{persona.name}</h3>
                    <div className="text-[10px] md:text-xs text-primary font-semibold uppercase tracking-widest mb-1.5">
                      {persona.role}
                    </div>
                    <div className="font-clash text-xs md:text-[13px] text-white/50 font-medium tracking-wide leading-relaxed">
                      {persona.demographics}
                    </div>
                  </div>

                </div>

                {/* Body Section */}
                <div className="flex flex-col gap-8 flex-1 pt-2">
                  
                  <div>
                    <h4 className="font-clash text-lg md:text-[20px] font-medium text-white/80 mb-4 tracking-wide leading-relaxed">Expectations</h4>
                    <ul className="font-clash text-sm md:text-[15px] text-white/60 space-y-2.5 list-none font-medium leading-relaxed tracking-wide">
                      {persona.expectations?.map((exp, eIdx) => (
                        <li key={eIdx} className="flex gap-3 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2 shadow-[0_0_8px_rgba(255,95,31,0.5)]" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-clash text-lg md:text-[20px] font-medium text-white/80 mb-4 tracking-wide leading-relaxed">Key Insights</h4>
                    <ul className="font-clash text-sm md:text-[15px] text-white/60 space-y-2.5 list-none font-medium leading-relaxed tracking-wide">
                      {persona.insights?.map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2 shadow-[0_0_8px_rgba(255,95,31,0.5)]" />
                          <span>{item}</span>
                        </li>
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
