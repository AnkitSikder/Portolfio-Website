import React, { useState } from 'react';
import ScrollReveal from '../../../common/ScrollReveal';
import { ZoomIn, X } from 'lucide-react';

export default function AuraChargeFeaturesBlock({ content, sectionId, isAlternate }) {
  const { heading, image, labels = [] } = content || {};
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 lg:gap-16">
        
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide leading-tight text-foreground text-center max-w-4xl mx-auto">
            {heading}
          </h2>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Large Image Viewer */}
          <div className="w-full lg:w-3/4">
            <ScrollReveal delay={0.1}>
              <div 
                className="relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl cursor-zoom-in group"
                onClick={() => setIsZoomed(true)}
              >
                <img 
                  src={image} 
                  alt="Product Features" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Compact Feature Callouts */}
          {labels.length > 0 && (
            <div className="w-full lg:w-1/4 flex flex-col gap-4">
              <ScrollReveal delay={0.2}>
                <h4 className="font-clash text-lg font-medium tracking-wide text-primary uppercase mb-4 border-b border-foreground/10 pb-4">
                  System Elements
                </h4>
              </ScrollReveal>
              {labels.map((label, idx) => (
                <ScrollReveal key={idx} delay={0.3 + (idx * 0.05)}>
                  <div className="flex items-center gap-3 py-2 border-b border-foreground/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                    <span className="font-clash font-medium text-sm text-foreground/80">{label}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Lightbox Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-7xl max-h-full overflow-y-auto rounded-xl">
            <img 
              src={image} 
              alt="Product Features Expanded" 
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
