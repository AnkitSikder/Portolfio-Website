import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';

export default function Phase2RendersBlock({ content, sectionId, isAlternate }) {
  const bgClass = isAlternate ? 'bg-foreground/5' : 'bg-background';

  const renders = [
    { url: '/assets/projects/makhana-tool/assets/08_product_concept_future/render_01.png', view: 'Hero 3/4 View', type: 'large' },
    { url: '/assets/projects/makhana-tool/assets/08_product_concept_future/render_02.png', view: 'Front Functional View', type: 'small' },
    { url: '/assets/projects/makhana-tool/assets/08_product_concept_future/render_03.png', view: 'Side Profile View', type: 'small' },
    { url: '/assets/projects/makhana-tool/assets/08_product_concept_future/render_04.png', view: 'Rear Basket View', type: 'full', position: 'object-bottom' },
    { url: '/assets/projects/makhana-tool/assets/08_product_concept_future/render_05.png', view: 'Collection Assembly Detail', type: 'half' },
    { url: '/assets/projects/makhana-tool/assets/08_product_concept_future/render_06.png', view: 'Wheel Mechanism Detail', type: 'half' }
  ];

  const contexts = [
    { url: '/assets/projects/makhana-tool/assets/08_product_concept_future/context_visual_01.jpg', label: 'Concept visualization in shallow water' },
    { url: '/assets/projects/makhana-tool/assets/08_product_concept_future/context_visual_02.jpg', label: 'Concept visualization of pulling action' },
    { url: '/assets/projects/makhana-tool/assets/08_product_concept_future/context_visual_03.jpg', label: 'Concept visualization of debris interaction' }
  ];

  const ImageCard = ({ item, className }) => (
    <div className={`relative group overflow-hidden rounded-2xl md:rounded-[2rem] bg-foreground/5 border border-foreground/10 shrink-0 ${className}`}>
      <img 
        src={item.url} 
        alt={item.view || item.label} 
        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${item.position || 'object-center'}`}
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden md:block">
        <span className="font-clash font-semibold tracking-wider text-sm text-foreground uppercase bg-background/80 px-3 py-1.5 rounded-full backdrop-blur-md">
          {item.view || 'Concept visualization'}
        </span>
      </div>
      {/* Mobile persistent caption */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 p-3 bg-background/80 backdrop-blur-sm">
        <span className="font-clash text-xs font-medium text-foreground">{item.view || 'Concept visualization'}</span>
      </div>
    </div>
  );

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 ${bgClass}`}>
      
      {/* Product Renders */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-24 mb-20">
        <ScrollReveal>
          <div className="mb-10 max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-franchise uppercase tracking-wide text-foreground leading-tight">
              The final concept, from every angle.
            </h2>
          </div>
        </ScrollReveal>

        {/* Desktop Grid Layout, Mobile Horizontal Scroll */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 custom-scrollbar">
          {renders.map((render, idx) => (
            <ImageCard key={idx} item={render} className="w-[85vw] h-[60vh] snap-center" />
          ))}
        </div>

        <div className="hidden md:grid grid-cols-2 gap-6">
          {/* Top block: Bento grid of 4 images */}
          <ScrollReveal className="col-span-2 grid grid-cols-2 gap-6">
            {/* Left Column: Hero + Rear Basket */}
            <div className="col-span-1 flex flex-col gap-6">
              <ImageCard item={renders[0]} className="h-[450px]" />
              <ImageCard item={renders[3]} className="h-[300px]" />
            </div>
            
            {/* Right Column: Front Functional + Side Profile */}
            <div className="col-span-1 flex flex-col gap-6">
              <ImageCard item={renders[1]} className="h-[300px]" />
              <ImageCard item={renders[2]} className="h-[450px]" />
            </div>
          </ScrollReveal>

          {/* Bottom row: Two details */}
          <ScrollReveal delay={0.2} className="col-span-2 grid grid-cols-2 gap-6">
            <ImageCard item={renders[4]} className="h-[400px]" />
            <ImageCard item={renders[5]} className="h-[400px]" />
          </ScrollReveal>
        </div>
      </div>

      {/* Context Visuals */}
      <div className="w-full mt-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-12 lg:px-24 mb-12 md:mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-franchise uppercase tracking-wide text-foreground leading-tight text-center md:text-left">
              From CAD to the pond.
            </h2>
            <p className="mt-4 text-sm md:text-base font-clash text-foreground/60 max-w-2xl text-center md:text-left">
              Visualizing the product in its intended environment to evaluate scale, ergonomics, and interaction with the pond bed.
            </p>
          </ScrollReveal>
        </div>

        <div className="w-full px-5 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
          {/* Mobile Horizontal Scroll, Desktop Grid */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {contexts.map((ctx, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx} className="shrink-0 w-[85vw] md:w-auto snap-center group">
                <div className="rounded-2xl md:rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-xl aspect-[4/3] relative">
                  <img 
                    src={ctx.url} 
                    alt={ctx.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden md:block">
                    <span className="font-clash font-semibold tracking-wider text-sm text-foreground uppercase bg-background/80 px-3 py-1.5 rounded-full backdrop-blur-md">
                      Concept visualization
                    </span>
                  </div>
                </div>
                {/* Mobile persistent caption */}
                <p className="mt-4 font-clash text-sm text-foreground/60 font-medium md:hidden text-center">
                  Concept visualization
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
