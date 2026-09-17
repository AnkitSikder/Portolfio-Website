import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';
import SectionHeader from '../../common/SectionHeader';

export default function AuraChargeGalleryBlock({ content, sectionId, isAlternate }) {
  const { title, heading, narrative, images = [], layout = "masonry", noBorder } = content || {};

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="w-full md:w-1/2">
            <ScrollReveal>
            <SectionHeader title={title} heading={heading} className="!mb-0" />
            </ScrollReveal>
          </div>
          {narrative && (
            <div className="w-full md:w-1/2 md:pt-2">
              <ScrollReveal delay={0.1}>
                <p className="font-clash text-base md:text-lg font-medium tracking-wide text-white/70 leading-relaxed border-l-2 border-primary/50 pl-6">
                  {narrative}
                </p>
              </ScrollReveal>
            </div>
          )}
        </div>

        {/* Gallery */}
        <div className="w-full">
          {layout === 'single' ? (
            <div className="flex flex-col gap-8 md:gap-12 w-full">
              {images.map((img, idx) => (
                <ScrollReveal key={idx} delay={0.2} className="w-full">
                  <div className={`rounded-[2rem] overflow-hidden shadow-2xl group w-full ${noBorder ? '' : 'bg-white/5 border border-white/10'}`}>
                    <img 
                      src={img} 
                      alt={`Gallery Full ${idx}`} 
                      className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <>
              {/* Mobile: Swipeable */}
              <div className="flex md:hidden overflow-x-auto pb-6 -mx-5 px-5 snap-x snap-mandatory gap-4 scrollbar-hide">
                {images.map((img, idx) => (
                  <div key={idx} className="shrink-0 w-[85%] snap-center rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-xl group">
                    <img 
                      src={img} 
                      alt={`Gallery ${idx}`} 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                      loading="lazy" 
                    />
                  </div>
                ))}
              </div>

              {/* Desktop: Grid / Editorial */}
              <div className={`hidden md:grid gap-6 ${layout === 'grid' ? 'grid-cols-2 lg:grid-cols-3' : 'columns-2 lg:columns-3'}`}>
                {images.map((img, idx) => (
                  <ScrollReveal key={idx} delay={0.1 * idx} className="mb-6 break-inside-avoid">
                    <div className="rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl group cursor-pointer hover:border-primary/20 transition-colors">
                      <img 
                        src={img} 
                        alt={`Gallery ${idx}`} 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
