import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';

export default function Phase2ProductSpecBlock({ content, sectionId, isAlternate }) {
  const bgClass = isAlternate ? 'bg-foreground/5' : 'bg-background';

  const specs = [
    { num: '01', title: 'SEED COLLECTION MESH CHAMBER', desc: 'Guides material into a removable mesh basket for easy unloading.' },
    { num: '02', title: 'GROUND INTAKE SCOOP ASSEMBLY', desc: 'Interfaces with the collection area, using brushes to trap plant debris.' },
    { num: '03', title: 'SILICONE SPIKE AGITATION ROLLER', desc: 'Translates forward movement into rotational agitation of the pond bed.' },
    { num: '04', title: 'ROTATING EXPANDABLE HANDLE', desc: 'Enables controlled, ergonomic pulling operation from behind the tool.' },
    { num: '05', title: 'TRACTION WHEEL ASSEMBLY', desc: 'Provides stability while driving internal mechanisms across the pond bed.' },
    { num: '06', title: 'WHEEL-TO-ROLLER DRIVE CHAIN', desc: 'Directly links traction wheel movement to power the agitation roller.' }
  ];

  const markers = [
    { num: '01', top: '60%', left: '83%' },
    { num: '02', top: '59%', left: '68%' },
    { num: '03', top: '69%', left: '68%' },
    { num: '04', top: '52%', left: '43%' },
    { num: '05', top: '81%', left: '85%' },
    { num: '06', top: '78%', left: '76%' }
  ];

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-14">

        {/* Heading */}
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-franchise uppercase tracking-wide text-foreground leading-tight">
            Every part has a job.
          </h2>
        </ScrollReveal>

        {/* Full-width Image with Markers */}
        <ScrollReveal>
          <div className="rounded-2xl md:rounded-[2rem] bg-foreground/5 border border-foreground/10 overflow-hidden shadow-xl p-4 md:p-6">
            {/* Cropping Container */}
            <div className="w-full overflow-hidden" style={{ maxHeight: '55vh' }}>
              {/* Image & Markers Wrapper (Shifted up to crop top) */}
              <div className="relative w-full" style={{ marginTop: '-35%' }}>
                <img
                  src="/assets/projects/makhana-tool/assets/08_product_concept_future/product_spec_right.png"
                  alt="Product Specification"
                  className="w-full h-auto object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                />
                {/* Overlaid Markers */}
                {markers.map((marker, i) => (
                  <div
                    key={i}
                    className="absolute w-7 h-7 md:w-9 md:h-9 rounded-full bg-background text-primary flex items-center justify-center font-franchise text-base md:text-xl transform -translate-x-1/2 -translate-y-1/2 shadow-lg border-2 border-primary/50 hover:scale-110 transition-transform cursor-default"
                    style={{ top: marker.top, left: marker.left }}
                  >
                    {marker.num}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3-column spec cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specs.map((spec, idx) => (
            <ScrollReveal key={idx} delay={0.05 * idx}>
              <div className="h-full p-5 md:p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-primary/30 transition-colors flex gap-4 items-start">
                <span className="font-franchise text-3xl md:text-4xl text-primary leading-none shrink-0">{spec.num}</span>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col">
                    <h4 className="font-clash text-sm md:text-base font-semibold text-foreground tracking-wide uppercase">{spec.title}</h4>
                    {spec.subtitle && <span className="font-clash text-xs text-foreground/50">{spec.subtitle}</span>}
                  </div>
                  <p className="font-clash text-sm text-foreground/60 leading-relaxed font-medium">{spec.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
