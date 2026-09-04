import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';

export default function Phase1UserNeedsBlock({ content, sectionId }) {
  const priorities = [
    {
      level: "PRIMARY",
      color: "bg-primary text-primary-foreground",
      items: [
        "Reduce musculoskeletal strain",
        "Prevent thorn injuries",
        "Increase productivity and earnings",
        "Maintain occupational dignity"
      ]
    },
    {
      level: "SECONDARY",
      color: "bg-foreground/10 text-foreground",
      items: [
        "Reduce submersion time",
        "Improve posture",
        "Improve seed recovery",
        "Enable group-based harvesting"
      ]
    },
    {
      level: "TERTIARY",
      color: "bg-foreground/5 text-foreground/70",
      items: [
        "Access affordable technology",
        "Preserve cultural knowledge",
        "Improve health/safety support",
        "Improve economic agency"
      ]
    }
  ];

  const comparisons = [
    { metric: "Pain / strain", current: "78% lower back, 67% neck, 52% wrist", desired: "30–50% reduction target" },
    { metric: "Thorn injuries", current: "Nearly daily puncture exposure", desired: "50% fewer injuries target" },
    { metric: "Productivity", current: "3.8–4.0 kg/hr", desired: "6–8 kg/hr" },
    { metric: "Earnings", current: "₹250–600/day", desired: "₹400–800/day target" },
    { metric: "Submersion", current: "6–8 hrs", desired: "4–6 hrs target" },
    { metric: "Seed recovery", current: "25% seeds reported lost", desired: "Recover 5–10% additional seeds" },
    { metric: "Affordability", current: "₹1–3 lakh mechanical options", desired: "Tool under ₹5,000" }
  ];

  return (
    <section id={sectionId} className="py-10 md:py-16 lg:py-24 px-6 md:px-12 lg:px-24 bg-foreground/5 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto">
        
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide text-foreground leading-tight max-w-4xl">
              What the solution has to do.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* PRIORITY FRAMEWORK */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.1}>
              <h3 className="font-clash font-semibold text-sm uppercase tracking-wider text-foreground/50 mb-6">Priority Framework</h3>
              <div className="flex flex-col gap-4">
                {priorities.map((group, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:items-stretch gap-0 md:gap-4 bg-background rounded-2xl border border-foreground/10 overflow-hidden">
                    <div className={`${group.color} p-4 md:w-32 flex items-center justify-center shrink-0`}>
                      <span className="font-clash font-bold uppercase tracking-widest text-xs rotate-0 md:-rotate-90 whitespace-nowrap">
                        {group.level}
                      </span>
                    </div>
                    <div className="p-5 flex-1">
                      <ul className="space-y-2">
                        {group.items.map((item, i) => (
                          <li key={i} className="text-sm font-clash font-medium text-foreground/80 flex items-start gap-2">
                            <span className="text-primary mt-1.5 w-1 h-1 rounded-full shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* CURRENT VS DESIRED */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-clash font-semibold text-sm uppercase tracking-wider text-foreground/50">Current vs Desired</h3>
                <span className="inline-block bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  TARGET / DESIRED STATE
                </span>
              </div>
              
              <div className="bg-background rounded-3xl overflow-hidden border border-foreground/10">
                {/* Header row (hidden on mobile) */}
                <div className="hidden md:grid grid-cols-3 bg-foreground/5 p-4 border-b border-foreground/10 text-xs font-clash font-bold uppercase tracking-wider text-foreground/50">
                  <div className="col-span-1">Metric</div>
                  <div className="col-span-1 border-l border-foreground/10 pl-4">Current</div>
                  <div className="col-span-1 border-l border-foreground/10 pl-4 text-primary">Desired</div>
                </div>

                <div className="divide-y divide-foreground/10">
                  {comparisons.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-0 items-stretch hover:bg-foreground/3 transition-colors group">
                      
                      {/* Metric name */}
                      <div className="col-span-1 md:p-4 mb-2 md:mb-0 flex items-center">
                        <span className="text-sm font-clash font-semibold text-foreground uppercase tracking-wider">
                          {row.metric}
                        </span>
                      </div>
                      
                      {/* Current */}
                      <div className="col-span-1 md:border-l border-foreground/10 md:p-4 mb-2 md:mb-0 flex flex-col justify-center">
                        <span className="md:hidden text-[10px] font-clash font-bold uppercase text-foreground/40 mb-1">Current</span>
                        <span className="text-sm font-clash font-medium text-foreground/70">{row.current}</span>
                      </div>
                      
                      {/* Desired */}
                      <div className="col-span-1 md:border-l border-foreground/10 md:p-4 flex flex-col justify-center relative overflow-hidden bg-primary/5 group-hover:bg-primary/10 transition-colors">
                        <span className="md:hidden text-[10px] font-clash font-bold uppercase text-primary mb-1">Desired Target</span>
                        <span className="text-sm font-clash font-semibold text-primary">{row.desired}</span>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* End Transition */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 max-w-2xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-clash font-semibold text-foreground/80 leading-relaxed italic">
              "These needs became the criteria against which concepts would be explored next."
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
