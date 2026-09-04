import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';

export default function AuraChargeBrandBlock({ content, sectionId, isAlternate }) {
  const { heading, logos = [], typography = {}, colors = [], marginSpacing, informationArchitecture, lowFidelity } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 lg:gap-24">
        
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide leading-tight text-foreground text-center max-w-4xl mx-auto">
            {heading}
          </h2>
        </ScrollReveal>

        {/* Logos Section */}
        {logos.length > 0 && (
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full justify-center items-stretch">
                {logos.map((logo, idx) => (
                  <div key={idx} className={`bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center w-full ${idx === 0 ? 'lg:w-[30%]' : 'lg:w-[70%]'}`}>
                    <img src={logo} alt={`Logo Element ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Typography & Colors Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 w-full items-start">
          
          {/* Typography */}
          {typography.name && (
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              <ScrollReveal delay={0.2}>
                <h3 className="font-clash text-xl font-medium tracking-wide text-primary uppercase mb-6">Typography</h3>
                <h4 className="font-clash text-2xl md:text-3xl font-bold tracking-wide text-foreground mb-8">{typography.name}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6">
                  {typography.weights?.map((weight, idx) => (
                    <div key={idx} className="flex flex-col items-start gap-2">
                      <span className="text-5xl md:text-6xl text-foreground tracking-tight" style={{ fontWeight: weight.toLowerCase() }}>Aa</span>
                      <span className="text-sm text-foreground/60 font-clash">{weight}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* Color Palette */}
          {colors && colors.length > 0 && (
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
              <ScrollReveal delay={0.3}>
                <h3 className="font-clash text-xl font-medium tracking-wide text-primary uppercase mb-6">Color Palette</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
                  {colors.map((color, idx) => {
                    const hex = color.replace('#', '');
                    const r = parseInt(hex.substr(0, 2), 16) || 0;
                    const g = parseInt(hex.substr(2, 2), 16) || 0;
                    const b = parseInt(hex.substr(4, 2), 16) || 0;
                    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
                    const textColor = yiq >= 128 ? 'text-black' : 'text-white';
                    
                    return (
                      <div 
                        key={idx} 
                        className="w-full h-14 md:h-16 rounded-xl flex items-center justify-center shadow-md border border-white/10 hover:scale-105 transition-transform" 
                        style={{ backgroundColor: color }} 
                      >
                        <span className={`text-sm font-clash font-medium tracking-wider uppercase ${textColor}`}>
                          {color}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>
          )}

        </div>

        {/* Margin & Spacing */}
        {marginSpacing && marginSpacing.items && (
          <ScrollReveal delay={0.4}>
            <div className="w-full flex flex-col gap-8">
              <h3 className="font-clash text-xl font-medium tracking-wide text-primary uppercase">{marginSpacing.heading}</h3>
              
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-stretch">
                {marginSpacing.items.map((item, idx) => (
                  <div key={idx} className={`flex flex-col gap-6 w-full ${idx === 0 ? 'lg:w-[75%]' : 'lg:w-[25%]'}`}>
                    
                    {/* Stats */}
                    <div className="flex flex-row flex-wrap justify-between items-center w-full px-2 text-foreground/90 gap-4">
                      {item.stats?.map((stat, sIdx) => (
                        <div key={sIdx} className="flex flex-row items-baseline gap-2">
                          <span className="font-clash font-bold text-lg md:text-xl tracking-wide">{stat.label} :</span>
                          <span className="text-foreground/80 font-clash text-md">{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Image */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center w-full grow p-4 md:p-8">
                      <img src={item.image} alt={`${marginSpacing.heading} Graphic ${idx + 1}`} className="w-full h-auto object-contain rounded-xl" />
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Information Architecture */}
        {informationArchitecture && informationArchitecture.length > 0 && (
          <div className="w-full flex flex-col gap-12 lg:gap-16">
            {informationArchitecture.map((ia, idx) => (
              <ScrollReveal key={idx} delay={0.2 + idx * 0.1}>
                <div className="flex flex-col gap-6 lg:gap-8 w-full">
                  <h3 className="font-clash text-xl md:text-2xl font-medium tracking-wide text-primary uppercase text-center md:text-left">{ia.heading}</h3>
                  <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center w-full p-4 md:p-8">
                    <img src={ia.image} alt={ia.heading} className="w-full h-auto object-contain rounded-xl" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Low-Fidelity Screens */}
        {lowFidelity && (
          <ScrollReveal delay={0.4}>
            <div className="w-full flex flex-col gap-6 lg:gap-8">
              <div className="w-full flex flex-col gap-4">
                <h3 className="font-clash text-2xl md:text-3xl font-medium tracking-wide text-primary uppercase">{lowFidelity.heading}</h3>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-satoshi max-w-4xl">{lowFidelity.description}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center w-full p-4 md:p-8">
                <img src={lowFidelity.image} alt={lowFidelity.heading} className="w-full h-auto object-contain rounded-xl" />
              </div>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}
