import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';
import { Plus, Equal } from 'lucide-react';

export default function Phase1OpportunityBlock({ content, sectionId }) {
  const equationItems = [
    "HIGH PHYSICAL COST",
    "LOW PRODUCTIVITY",
    "TECHNOLOGY GAP",
    "AFFORDABILITY NEED"
  ];

  return (
    <section id={sectionId} className="py-10 md:py-16 lg:py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide text-foreground leading-tight max-w-5xl">
              The opportunity was not to replace the worker. It was to reduce the work the body should not have to do.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.1}>
              <p className="text-lg md:text-xl font-clash font-medium text-foreground/80 leading-relaxed">
                Workers in Bihar's makhana industry spend hours submerged in murky pond water, working in extreme bent-over positions with traditional tools to search for and collect seeds from the pond bed. 
                <br /><br />
                The process creates substantial physical strain, repeated thorn exposure, low productivity and seed loss — while the available mechanical alternatives are too expensive or technically demanding for small-scale use.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6">
            <ScrollReveal delay={0.2}>
              <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(var(--primary),0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <h3 className="text-sm font-clash font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-primary"></span>
                    Design Opportunity
                  </h3>
                  <p className="text-2xl md:text-3xl font-franchise text-foreground leading-tight">
                    Create an affordable hand tool that uses ergonomic working heights, simple mechanical advantage and integrated collection to reduce unnecessary physical strain while improving seed-collection efficiency.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>



      </div>
    </section>
  );
}
