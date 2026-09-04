import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';

export default function AuraChargeChallengeBlock({ content, sectionId, isAlternate }) {
  const { heading, inputs = [], outcome } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1200px] mx-auto flex flex-col items-start gap-12 lg:gap-16">
        
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash font-semibold tracking-wide text-foreground">
            {heading}
          </h2>
        </ScrollReveal>

        <div className="w-full relative">
          
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-row items-stretch justify-between relative min-h-[400px]">
            
            {/* Left Inputs */}
            <div className="flex flex-col justify-between w-5/12 gap-6 z-10 py-4">
              {inputs.map((input, idx) => (
                <ScrollReveal key={idx} delay={0.1 * idx}>
                  <div className="flex items-center gap-6 p-6 rounded-r-3xl rounded-l-lg bg-foreground/5 border-l-4 border-l-primary border-y border-r border-foreground/10 shadow-lg">
                    <span className="text-4xl font-franchise text-primary/80">{input.id}</span>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-clash font-medium text-foreground/70">{input.description}</p>
                      <h4 className="font-clash text-lg font-semibold text-foreground">{input.title}</h4>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Middle Connecting SVG */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M 45 16.6 C 58 16.6, 58 50, 70 50" stroke="currentColor" className="text-foreground/20" strokeWidth="0.3" fill="none" />
                <path d="M 45 50 L 70 50" stroke="currentColor" className="text-foreground/20" strokeWidth="0.3" fill="none" />
                <path d="M 45 83.3 C 58 83.3, 58 50, 70 50" stroke="currentColor" className="text-foreground/20" strokeWidth="0.3" fill="none" />
              </svg>
            </div>

            {/* Right Outcome */}
            <div className="flex flex-col justify-center w-1/4 z-10">
              <ScrollReveal delay={0.4}>
                <div className="flex items-center justify-center p-8 rounded-l-3xl rounded-r-lg bg-primary/10 border-r-4 border-r-primary border-y border-l border-primary/20 text-center shadow-xl">
                  <h3 className="font-clash text-xl font-bold tracking-wider text-primary">
                    {outcome?.title}
                  </h3>
                </div>
              </ScrollReveal>
            </div>
            
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col items-center gap-6 w-full">
            {inputs.map((input, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx} className="w-full">
                <div className="flex flex-row items-center gap-4 p-6 rounded-2xl bg-foreground/5 border border-foreground/10 shadow-md w-full">
                  <span className="text-3xl font-franchise text-primary">{input.id}</span>
                  <div className="flex flex-col gap-1 text-left">
                    <p className="text-xs font-clash font-medium text-foreground/70">{input.description}</p>
                    <h4 className="font-clash text-base font-semibold text-foreground">{input.title}</h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.4} className="w-full mt-4">
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center shadow-xl w-full">
                <h3 className="font-clash text-xl font-bold tracking-wider text-primary">
                  {outcome?.title}
                </h3>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
