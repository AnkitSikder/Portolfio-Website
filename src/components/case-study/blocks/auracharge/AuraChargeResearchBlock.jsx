import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';

export default function AuraChargeResearchBlock({ content, sectionId, isAlternate }) {
  const { heading, interviews, survey, callout } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 lg:gap-20">
        
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide leading-tight text-foreground text-center">
            {heading}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: User Interviews */}
          {interviews && (
            <div className="flex flex-col gap-8">
              <ScrollReveal>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2 pb-6 border-b border-foreground/10">
                    <h3 className="font-franchise text-3xl md:text-4xl uppercase tracking-widest text-primary">User Interviews</h3>
                    <div className="flex items-center gap-4 text-sm font-clash font-medium text-foreground/60">
                      <span className="font-semibold text-foreground">{interviews.participants}</span>
                      <span>{interviews.demographics}</span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-foreground/80 font-clash font-medium leading-relaxed">
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
                        case 5: sizeClass = "text-5xl md:text-6xl lg:text-7xl font-bold"; break;
                        case 4: sizeClass = "text-4xl md:text-5xl lg:text-6xl font-bold"; break;
                        case 3: sizeClass = "text-2xl md:text-3xl lg:text-4xl font-semibold"; break;
                        case 2: sizeClass = "text-lg md:text-xl lg:text-2xl font-medium"; break;
                        default: sizeClass = "text-base font-medium"; break;
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
                    <h3 className="font-franchise text-3xl md:text-4xl uppercase tracking-widest text-primary">Survey</h3>
                    <div className="flex items-center gap-4 text-sm font-clash font-medium text-foreground/60">
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
                        <span className="text-sm md:text-base font-clash font-medium text-foreground/80 group-hover:text-foreground transition-colors">
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
