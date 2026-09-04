import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';

export default function Phase1DesignBriefBlock({ content, sectionId }) {
  const targets = [
    { title: "ERGONOMIC", desc: "30–50% reduction in postural stress and submersion time" },
    { title: "SAFETY", desc: "50% reduction in thorn-related injuries" },
    { title: "PRODUCTIVITY", desc: "4.0 → 6–8 kg/hr target per worker" },
    { title: "ECONOMIC", desc: "Under ₹5,000 target cost" },
    { title: "USABILITY", desc: "Learnable in 1 day; maintainable locally" },
    { title: "DURABILITY", desc: "3–5 year lifespan in aquatic environment" }
  ];

  return (
    <section id={sectionId} className="py-10 md:py-16 lg:py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide text-foreground leading-tight max-w-4xl">
              Designing for the people who already know the pond.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* DESIGN BRIEF */}
          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="font-clash font-semibold text-sm uppercase tracking-wider text-foreground/50 mb-4">The Mission</h3>
              <p className="text-xl md:text-2xl font-clash font-medium text-foreground leading-relaxed mb-10 pl-4 border-l-4 border-primary">
                "Design an affordable, ergonomically optimized hand tool that helps makhana workers collect seeds more safely, comfortably and productively while preserving traditional harvesting knowledge."
              </p>

              <div className="mb-4 flex items-center gap-4">
                <h3 className="font-clash font-semibold text-sm uppercase tracking-wider text-foreground/50">Design Targets</h3>
                <div className="flex-1 h-px bg-foreground/10"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {targets.map((target, idx) => (
                  <div key={idx} className="bg-foreground/5 rounded-2xl p-5 border border-foreground/10 hover:border-primary/30 transition-colors">
                    <h4 className="text-primary font-clash font-bold uppercase tracking-wider text-sm mb-2">{target.title}</h4>
                    <p className="text-foreground/70 font-clash font-medium text-sm leading-relaxed">{target.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* TARGET USERS */}
          <div className="flex flex-col gap-8">
            <ScrollReveal delay={0.2}>
              <h3 className="font-clash font-semibold text-sm uppercase tracking-wider text-foreground/50 mb-6">Target Users</h3>
              
              <div className="bg-background rounded-3xl p-8 border border-foreground/10 shadow-lg relative overflow-hidden mb-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-franchise text-2xl">01</div>
                  <div>
                    <h4 className="text-2xl font-franchise text-foreground">PRIMARY USER</h4>
                    <p className="text-sm font-clash font-semibold uppercase tracking-wider text-primary">Makhana harvesters</p>
                  </div>
                </div>
                <ul className="space-y-3 font-clash font-medium text-sm text-foreground/70 ml-2">
                  <li className="flex items-start gap-3"><span className="text-primary mt-0.5">•</span> Men, 25–55 in the source project profile</li>
                  <li className="flex items-start gap-3"><span className="text-primary mt-0.5">•</span> Mallah / Sahni communities</li>
                  <li className="flex items-start gap-3"><span className="text-primary mt-0.5">•</span> 10–35 years traditional harvesting experience</li>
                  <li className="flex items-start gap-3"><span className="text-primary mt-0.5">•</span> Mithilanchal region</li>
                  <li className="flex items-start gap-3"><span className="text-primary mt-0.5">•</span> Chronic physical strain + thorn injuries</li>
                  <li className="flex items-start gap-3"><span className="text-primary mt-0.5">•</span> Need reduced strain, better safety and higher productivity</li>
                </ul>
              </div>

              <div className="bg-background rounded-3xl p-8 border border-foreground/10 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-bl-full pointer-events-none"></div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground font-franchise text-2xl">02</div>
                  <div>
                    <h4 className="text-2xl font-franchise text-foreground">BUYER / EMPLOYER</h4>
                    <p className="text-sm font-clash font-semibold uppercase tracking-wider text-foreground/60">Small-scale farmers</p>
                  </div>
                </div>
                <ul className="space-y-3 font-clash font-medium text-sm text-foreground/70 ml-2">
                  <li className="flex items-start gap-3"><span className="text-foreground/40 mt-0.5">•</span> 1–5 acres of makhana ponds</li>
                  <li className="flex items-start gap-3"><span className="text-foreground/40 mt-0.5">•</span> Labor shortages</li>
                  <li className="flex items-start gap-3"><span className="text-foreground/40 mt-0.5">•</span> Rising wages</li>
                  <li className="flex items-start gap-3"><span className="text-foreground/40 mt-0.5">•</span> Mechanized harvesters unaffordable</li>
                  <li className="flex items-start gap-3"><span className="text-foreground/40 mt-0.5">•</span> Limited tool budget</li>
                  <li className="flex items-start gap-3"><span className="text-foreground/40 mt-0.5">•</span> Need a practical efficiency improvement</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
