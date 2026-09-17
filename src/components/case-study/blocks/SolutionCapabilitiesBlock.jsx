import React from 'react';
import SectionHeader from '../common/SectionHeader';

export default function SolutionCapabilitiesBlock({ content, isAlternate }) {
  const {
    heading,
    productName,
    subtitle,
    capabilities = [],
  } = content;

  return (
    <section className={`py-10 md:py-16 lg:py-20 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-white w-full overflow-hidden`}>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
        
        {/* Intro */}
        <SectionHeader 
          title={heading}
          heading={productName}
          description={subtitle}
          className="items-center text-center mx-auto max-w-4xl"
        />

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {capabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-[2rem] bg-white/5 border border-white/10 p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 hover:bg-white/10 hover:border-white/20 transition-colors duration-500"
            >
              {/* Subtle accent line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="flex items-center gap-4">
                <span className="font-franchise text-4xl md:text-5xl text-primary/80">
                  {cap.number}
                </span>
                <div className="h-px bg-white/20 flex-1" />
              </div>
              
              <div className="flex flex-col gap-3">
                <h3 className="font-clash text-[20px] md:text-[22px] font-medium text-white/90 leading-snug">
                  {cap.title}
                </h3>
                {cap.description && (
                  <p className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-white/60 leading-relaxed">
                    {cap.description}
                  </p>
                )}
                {cap.listItems && cap.listItems.length > 0 && (
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {cap.listItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]" />
                        <span className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-white/60 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
