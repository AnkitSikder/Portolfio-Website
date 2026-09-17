import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';
import SectionHeader from '../common/SectionHeader';

export default function Phase1DesignBriefBlock({ content, sectionId }) {
  const targets = [
    { title: "Ergonomic", desc: "30–50% reduction in postural stress and submersion time" },
    { title: "Safety", desc: "50% reduction in thorn-related injuries" },
    { title: "Productivity", desc: "4.0 → 6–8 kg/hr target per worker" },
    { title: "Economic", desc: "Under ₹5,000 target cost" },
    { title: "Usability", desc: "Learnable in 1 day; maintainable locally" },
    { title: "Durability", desc: "3–5 year lifespan in aquatic environment" }
  ];

  return (
    <section id={sectionId} className="py-10 md:py-16 lg:py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        
        <ScrollReveal>
          <SectionHeader title="Design Brief" heading="Designing for the people who already know the pond." className="!mb-16 max-w-4xl" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* DESIGN BRIEF */}
          <div>
            <ScrollReveal delay={0.1}>
              {/* Sub-label */}
              <span className="font-clash text-xs uppercase tracking-widest text-foreground/50 font-medium block mb-3">The Mission</span>
              <p className="font-clash text-[20px] md:text-[22px] font-medium text-white/80 leading-relaxed mb-10 pl-4 border-l-4 border-primary">
                "Design an affordable, ergonomically optimized hand tool that helps makhana workers collect seeds more safely, comfortably and productively while preserving traditional harvesting knowledge."
              </p>

              <div className="mb-4 flex items-center gap-4">
                <span className="font-clash text-xs uppercase tracking-widest text-foreground/50 font-medium">Design Targets</span>
                <div className="flex-1 h-px bg-foreground/10"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {targets.map((target, idx) => (
                  <div key={idx} className="bg-foreground/5 rounded-2xl p-5 border border-foreground/10 hover:border-primary/30 transition-colors">
                    <h4 className="text-primary font-clash font-medium tracking-wide text-sm mb-2">{target.title}</h4>
                    <p className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-foreground/60 leading-relaxed">{target.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* TARGET USERS */}
          <div className="flex flex-col gap-8">
            <ScrollReveal delay={0.2}>
              <span className="font-clash text-xs uppercase tracking-widest text-foreground/50 font-medium block mb-6">Target Users</span>
              
              {/* Primary User */}
              <div className="bg-background rounded-3xl p-8 border border-foreground/10 shadow-lg relative overflow-hidden mb-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-franchise text-2xl shrink-0">01</div>
                  <div>
                    <h4 className="font-clash text-[20px] md:text-[22px] font-medium text-foreground">Primary User</h4>
                    <p className="font-clash text-sm font-medium tracking-wide text-primary">Makhana harvesters</p>
                  </div>
                </div>
                <ul className="space-y-3 ml-2">
                  {[
                    "Men, 25–55 in the source project profile",
                    "Mallah / Sahni communities",
                    "10–35 years traditional harvesting experience",
                    "Mithilanchal region",
                    "Chronic physical strain + thorn injuries",
                    "Need reduced strain, better safety and higher productivity"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-0.5 shrink-0">•</span>
                      <span className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-foreground/60 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buyer / Employer */}
              <div className="bg-background rounded-3xl p-8 border border-foreground/10 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-bl-full pointer-events-none"></div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground font-franchise text-2xl shrink-0">02</div>
                  <div>
                    <h4 className="font-clash text-[20px] md:text-[22px] font-medium text-foreground">Buyer / Employer</h4>
                    <p className="font-clash text-sm font-medium tracking-wide text-foreground/60">Small-scale farmers</p>
                  </div>
                </div>
                <ul className="space-y-3 ml-2">
                  {[
                    "1–5 acres of makhana ponds",
                    "Labor shortages",
                    "Rising wages",
                    "Mechanized harvesters unaffordable",
                    "Limited tool budget",
                    "Need a practical efficiency improvement"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-foreground/40 mt-0.5 shrink-0">•</span>
                      <span className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-foreground/60 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
