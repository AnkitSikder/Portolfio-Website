import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';

export default function AuraChargeRendersBlock({ content, sectionId, isAlternate }) {
  const { heading, featureImage, detailImages = [], colorVariants = [], contextualRenders = [] } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 lg:gap-24">
        
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-franchise uppercase tracking-wide leading-tight text-foreground text-center">
            {heading}
          </h2>
        </ScrollReveal>

        {/* Feature Image */}
        {featureImage && (
          <ScrollReveal delay={0.1}>
            <div className="w-full rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-2xl">
              <img 
                src={featureImage} 
                alt="Feature Render" 
                className="w-full h-[50vh] md:h-[75vh] object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        )}

        {/* Detail Row */}
        {detailImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {detailImages.map((img, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <div className="w-full rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-xl group">
                  <img 
                    src={img} 
                    alt={`Detail Render ${idx + 1}`} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Color Variants */}
        {colorVariants.length > 0 && (
          <div className="flex flex-col gap-8">
            <ScrollReveal>
              <h3 className="font-franchise text-3xl md:text-4xl uppercase tracking-widest text-primary text-center">
                Color Variants
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {colorVariants.map((variant, idx) => (
                <ScrollReveal key={idx} delay={0.1 * idx}>
                  <div className="flex flex-col gap-3 group">
                    <div className="rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-lg">
                      <img 
                        src={variant.image} 
                        alt={variant.name} 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-center font-clash text-sm font-medium tracking-widest uppercase text-foreground/80">
                      {variant.name}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Contextual Renders */}
        {contextualRenders.length > 0 && (
          <div className="flex flex-col gap-12 pt-16 border-t border-foreground/10">
            <ScrollReveal>
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-franchise text-3xl md:text-4xl uppercase tracking-widest text-primary text-center">
                  In The Environment
                </h3>
                <span className="text-xs font-clash font-medium text-foreground/40 uppercase tracking-widest bg-foreground/5 px-3 py-1 rounded-full border border-foreground/10">
                  Concept visualization
                </span>
              </div>
            </ScrollReveal>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {contextualRenders.map((img, idx) => (
                <ScrollReveal key={idx} delay={0.1 * idx} className="break-inside-avoid">
                  <div className="rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-xl group">
                    <img 
                      src={img} 
                      alt={`Contextual Render ${idx + 1}`} 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
