import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Phase1CycleBlock({ content, sectionId }) {
  const steps = [
    { num: "01", title: "Makhana plant", desc: "Grown in pond" },
    { num: "02", title: "Flower", desc: "Produces flower with changes to fruit" },
    { num: "03", title: "Fruit", desc: "After bursting, seeds settle at the bottom of the pond" },
    { num: "04", title: "Harvesting", desc: "Traditional tools such as Kara & Ganjaa are used", highlight: true },
    { num: "05", title: "Processing of raw makhana", desc: "Seeds are graded by size and moved into processing" },
    { num: "06", title: "Puffed makhana", desc: "Post-processing produces puffed makhana" },
    { num: "07", title: "Polishing, cleaning, grading & packaging", desc: "" },
    { num: "08", title: "Packaging & marketing", desc: "" }
  ];

  const postHarvestSteps = [
    "Sun drying", "Grading", "Pre-heating", "Tempering", "Roasting & subsequent popping", "Puffed makhana"
  ];

  return (
    <section id={sectionId} className="py-10 md:py-16 lg:py-24 px-6 md:px-12 lg:px-24 bg-foreground/5 border-y border-foreground/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide text-foreground mb-4">
              Before the tool, understand the cycle.
            </h2>
            <p className="text-foreground/70 font-clash font-medium text-base md:text-lg max-w-3xl">
              Makhana moves through a long seasonal chain — from pond cultivation and seed collection to drying, processing, popping and finally packaging. The collection stage sits at the transition between cultivation and everything that follows.
            </p>
          </div>
        </ScrollReveal>

        {/* Flowchart container */}
        <div className="relative mt-12 pt-4">
          <ScrollReveal delay={0.2}>
            {/* Grid Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className={`flex flex-col p-6 rounded-2xl relative border h-full ${step.highlight ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(var(--primary),0.15)] ring-1 ring-primary/20' : 'bg-background border-foreground/10'}`}>
                  <span className={`text-5xl font-franchise mb-3 ${step.highlight ? 'text-primary' : 'text-foreground/30'}`}>
                    {step.num}
                  </span>
                  <h3 className="font-clash font-bold text-foreground text-sm uppercase mb-3 leading-tight tracking-wider">
                    {step.title}
                  </h3>
                  <p className="font-clash font-medium text-sm text-foreground/70 leading-relaxed mt-auto">
                    {step.desc}
                  </p>
                  {step.highlight && (
                    <div className="absolute -top-4 right-4 md:-right-2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      Focus Area
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Post-harvest branch */}
          <ScrollReveal delay={0.4}>
            <div className="mt-16 bg-background rounded-2xl p-6 md:p-8 border border-foreground/10 border-l-4 border-l-primary/50">
              <h4 className="font-clash font-semibold text-sm uppercase tracking-wider text-foreground/70 mb-6">
                Post-Harvest Processing Branch
              </h4>
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                {postHarvestSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="px-3 py-2 rounded-lg bg-foreground/5 text-xs md:text-sm font-clash font-medium text-foreground whitespace-nowrap">
                      {step}
                    </div>
                    {idx < postHarvestSteps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-foreground/30 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
