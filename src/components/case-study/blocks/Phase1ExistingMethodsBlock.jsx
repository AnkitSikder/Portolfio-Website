import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';

export default function Phase1ExistingMethodsBlock({ content, sectionId }) {
  return (
    <section id={sectionId} className="py-10 md:py-16 lg:py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide text-foreground max-w-4xl leading-tight">
              Before designing something new, I looked at what workers already had.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          
          {/* CARD 01 — KAARA */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col h-full bg-foreground/5 border border-foreground/10 rounded-3xl overflow-hidden group">
              <div className="h-64 md:h-80 w-full relative">
                <img src="/assets/projects/makhana-tool/assets/04_existing_methods/kaara_new.jpg" alt="Kaara" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-4xl font-franchise text-foreground mb-1">Kaara</h3>
                  <p className="text-sm font-clash font-semibold text-primary uppercase tracking-wider">Traditional bamboo anchor pole</p>
                </div>
                <ul className="space-y-4 font-clash font-medium text-sm text-foreground/70 flex-1">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <span><strong className="text-foreground">Length:</strong> 2–3 m</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <span><strong className="text-foreground">Function:</strong> anchoring reference point in pond</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <span><strong className="text-foreground">Limitation:</strong> provides no collection assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <span>Still requires full submersion</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* CARD 02 — GANJAA */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col h-full bg-foreground/5 border border-foreground/10 rounded-3xl overflow-hidden group">
              <div className="h-64 md:h-80 w-full relative">
                <img src="/assets/projects/makhana-tool/assets/04_existing_methods/ganjaa_new.jpg" alt="Ganjaa" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-4xl font-franchise text-foreground mb-1">Ganjaa</h3>
                  <p className="text-sm font-clash font-semibold text-primary uppercase tracking-wider">Traditional bamboo sieve</p>
                </div>
                <ul className="space-y-4 font-clash font-medium text-sm text-foreground/70 flex-1">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <span>Cone-shaped form, approximately 40–60 cm diameter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <span>Separates seeds from mud by density</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <span>Requires vigorous shaking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <span>No ergonomic handle; can cause hand fatigue after repeated use</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Transition statement */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-3xl mx-auto text-center border-t border-foreground/10 pt-12">
            <p className="text-lg md:text-xl font-clash font-medium text-foreground/80 leading-relaxed mb-6">
              Traditional tools are not "wrong"; they are optimized around local knowledge, available materials and familiar working methods.
            </p>
            <p className="text-xl md:text-2xl font-clash font-semibold text-primary leading-relaxed">
              The opportunity is to improve the experience without forcing workers to abandon that knowledge.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
