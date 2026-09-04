import React, { useState } from 'react';
import ScrollReveal from '../../common/ScrollReveal';

export default function MechanismBlock({ content, sectionId }) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = content.steps || [];

  return (
    <section id={sectionId} className="py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="mb-10 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide text-foreground">
              {content.heading || "How It Works"}
            </h2>
            {content.subheading && (
              <p className="mt-4 text-sm md:text-lg text-foreground/70 font-clash font-medium max-w-3xl">
                {content.subheading}
              </p>
            )}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Steps List (Desktop) & Numbered Cards (Mobile) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <button 
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-6 rounded-2xl md:rounded-3xl border transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary/10 border-primary/30 shadow-[0_0_20px_rgba(255,95,31,0.1)]' 
                        : 'bg-foreground/5 border-foreground/10 hover:bg-foreground/10'
                    }`}
                  >
                    <div className="flex gap-4 md:gap-6 items-start">
                      <div className={`w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full flex items-center justify-center font-clash font-bold text-sm md:text-base transition-colors ${
                        isActive ? 'bg-primary text-black' : 'bg-foreground/10 text-foreground'
                      }`}>
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg md:text-xl font-clash font-bold mb-2 transition-colors ${
                          isActive ? 'text-primary' : 'text-foreground'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm md:text-base font-clash leading-relaxed transition-colors ${
                          isActive ? 'text-foreground/90' : 'text-foreground/60'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right Column: Image Display */}
          <div className="lg:col-span-7 order-1 lg:order-2 lg:sticky lg:top-24">
            <ScrollReveal>
              <div className="w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-2xl relative aspect-[4/3] md:aspect-video lg:aspect-square flex items-center justify-center p-6 md:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
                {/* Fallback to mainImage if step image is missing */}
                <img 
                  key={activeStep} /* Force re-render for basic transition */
                  src={steps[activeStep]?.image || content.mainImage} 
                  alt={steps[activeStep]?.title || "Mechanism View"} 
                  className="w-full h-full object-contain relative z-10 animate-[fadeIn_0.5s_ease-in-out]" 
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
