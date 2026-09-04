import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';

export default function Phase1IntroBlock({ content, sectionId }) {
  const kpis = [
    { value: "80%+", label: "OF INDIA'S MAKHANA" },
    { value: "85%+", label: "OF GLOBAL SUPPLY" },
    { value: "4–6 FT", label: "TYPICAL WATER DEPTH MENTIONED IN THE PROJECT" },
    { value: "6–8 HRS", label: "DAILY SUBMERSION DURING HARVESTING" }
  ];

  return (
    <section id={sectionId} className="py-10 md:py-16 lg:py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-stretch">
        {/* Left Column */}
        <div className="w-full md:w-[55%] flex flex-col justify-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide text-foreground mb-6 leading-tight">
              A crop grown in water, harvested by hand.
            </h2>
            <div className="space-y-4 text-foreground/70 font-clash font-medium text-base leading-relaxed mb-10">
              <p>
                Makhana (Euryale ferox), also known as fox nut or gorgon nut, is an aquatic cash crop cultivated in lowland ponds, particularly across Bihar and other parts of eastern India. Much of India's production comes from Bihar, making the crop deeply connected to the region's agricultural economy and traditional harvesting communities.
              </p>
              <p>
                The important context for this project is simple: the crop has a modern, high-value market, but one of its most demanding stages is still performed through highly manual pond-based work.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {kpis.map((kpi, idx) => (
                <div key={idx} className="flex flex-col gap-1 p-4 rounded-2xl bg-foreground/5 border border-foreground/10">
                  <span className="text-4xl md:text-5xl font-franchise text-primary leading-none">{kpi.value}</span>
                  <span className="text-xs md:text-sm text-foreground font-clash font-semibold uppercase tracking-wider">{kpi.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[45%] h-[400px] md:h-auto flex flex-col">
          <ScrollReveal delay={0.3} className="h-full flex flex-col">
            <div className="flex-1 w-full rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-xl relative min-h-[300px]">
              <img src="/assets/projects/makhana-tool/assets/01_introduction/slide_04_img_01.png" alt="Makhana Cultivation" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <p className="text-center text-xs text-foreground/50 font-clash font-medium tracking-wide mt-4">
              "From pond cultivation to seed collection, the entire system is shaped by water."
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
