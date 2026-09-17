import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';
import SectionHeader from '../../common/SectionHeader';

export default function AuraChargeResearchBlock({ content, sectionId, isAlternate }) {
  const { heading, interviews, survey, callout } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">
        
        <ScrollReveal>
          <SectionHeader title="Primary Research" heading={heading} className="!mb-0" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: User Interviews */}
          {interviews && (
            <div className="flex flex-col gap-8">
              <ScrollReveal>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2 pb-6 border-b border-foreground/10">
                    <h3 className="font-clash text-xl md:text-2xl font-bold tracking-wide text-white">User Interviews</h3>
                    <div className="flex items-center gap-4 text-base md:text-lg font-clash font-medium text-white/60 tracking-wide leading-relaxed">
                      <span className="font-semibold text-foreground">{interviews.participants}</span>
                      <span>{interviews.demographics}</span>
                    </div>
                  </div>
                  <p className="font-clash text-base md:text-lg font-medium tracking-wide text-white/70 leading-relaxed">
                    {interviews.summary}
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2} className="h-full">
                <div className="rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl p-6 md:p-8 flex flex-wrap items-center justify-center content-center gap-x-4 gap-y-2 h-full min-h-[250px]">
                  {interviews.wordCloud ? (
                    interviews.wordCloud.map((word, idx) => {
                      let sizeClass = "";
                      switch (word.weight) {
                        case 5: sizeClass = "text-4xl md:text-5xl lg:text-6xl font-bold"; break;
                        case 4: sizeClass = "text-3xl md:text-4xl lg:text-5xl font-bold"; break;
                        case 3: sizeClass = "text-xl md:text-2xl lg:text-3xl font-semibold"; break;
                        case 2: sizeClass = "text-base md:text-lg lg:text-xl font-medium"; break;
                        default: sizeClass = "text-sm font-medium"; break;
                      }
                      return (
                        <span 
                          key={idx} 
                          className={`${sizeClass} ${word.color || 'text-foreground/80'} font-clash leading-none tracking-widest hover:scale-105 transition-transform cursor-default`}
                          style={{ 
                            // Add a slight random vertical offset for a more organic "cloud" look
                            transform: `translateY(${Math.random() * 8 - 4}px)`
                          }}
                        >
                          {word.text}
                        </span>
                      );
                    })
                  ) : interviews.image ? (
                    <img 
                      src={interviews.image} 
                      alt="User Interviews Word Cloud" 
                      className="w-full max-w-lg h-auto object-contain"
                      loading="lazy"
                    />
                  ) : null}
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* Right Column: Survey */}
          {survey && (
            <div className="flex flex-col gap-8">
              <ScrollReveal>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2 pb-6 border-b border-foreground/10">
                    <h3 className="font-clash text-xl md:text-2xl font-bold tracking-wide text-white">Survey</h3>
                    <div className="flex items-center gap-4 text-base md:text-lg font-clash font-medium text-white/60 tracking-wide leading-relaxed">
                      <span className="font-semibold text-foreground">{survey.participants}</span>
                      <span>{survey.demographics}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2} className="h-full">
                <div className="flex flex-col gap-4 p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 shadow-xl h-full justify-center">
                  {survey.data?.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 group">
                      <div className="w-full sm:w-[45%]">
                        <span className="font-clash text-sm md:text-base font-medium tracking-wide text-white/80">
                          {item.label}
                        </span>
                      </div>
                      <div className="w-full sm:w-[55%] flex items-center gap-4">
                        <div className="flex-1 h-3 rounded-full bg-foreground/10 overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <span className="text-base md:text-lg font-franchise text-primary w-10 text-right">
                          {item.percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>

        {/* Synthesis Callout */}
        {callout && (
          <ScrollReveal>
            <div className="mt-4 p-8 md:p-12 rounded-[2rem] bg-primary/10 border border-primary/20 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              <p className="font-clash text-xl md:text-3xl font-medium tracking-wide text-foreground leading-relaxed">
                {callout}
              </p>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}
