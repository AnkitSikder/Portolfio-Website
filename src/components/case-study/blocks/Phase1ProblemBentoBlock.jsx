import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';

export default function Phase1ProblemBentoBlock({ content, sectionId }) {
  return (
    <section id={sectionId} className="py-10 md:py-16 lg:py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide text-foreground mb-12 max-w-4xl leading-tight">
            The bottleneck is not growing the crop.<br />
            It is collecting it.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* CARD A — HERO STAT */}
          <ScrollReveal className="md:col-span-2 lg:col-span-2 md:row-span-2 h-full">
            <div className="relative h-full flex flex-col justify-end p-8 rounded-3xl bg-foreground/5 border border-foreground/10 overflow-hidden group">
              <img src="/assets/projects/makhana-tool/assets/03_problems/slide_09_img_01.png" alt="6-8 hours submerged" className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <div className="relative z-20 mt-32">
                <h3 className="text-6xl md:text-7xl font-franchise text-white leading-none mb-2">6–8 HOURS</h3>
                <p className="text-xl font-clash font-semibold text-white/90 uppercase tracking-wider mb-4">SUBMERGED DAILY</p>
                <p className="text-sm font-clash font-medium text-white/80 max-w-sm">
                  Workers collect seeds from pond beds in 4–6 ft murky water, often in bent-over / prone positions.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* CARD B — HEALTH */}
          <ScrollReveal className="md:col-span-1 lg:col-span-1 md:row-span-2 h-full">
            <div className="h-full flex flex-col p-6 rounded-3xl bg-primary/10 border border-primary/20 relative overflow-hidden group">
              <img src="/assets/projects/makhana-tool/assets/03_problems/physical_cost_new.jpg" alt="Physical cost" className="absolute inset-0 w-full h-full opacity-40 object-cover mix-blend-luminosity group-hover:scale-105 transition-transform duration-700 ease-out" />
              <h3 className="font-clash font-semibold text-primary uppercase tracking-wider text-sm mb-6 relative z-10 drop-shadow-md">Physical Cost</h3>
              <div className="space-y-6 mt-auto relative z-10">
                <div>
                  <div className="text-5xl font-franchise text-foreground leading-none">78%</div>
                  <div className="text-xs font-clash font-medium text-foreground/70 uppercase">LOWER-BACK PAIN</div>
                </div>
                <div>
                  <div className="text-5xl font-franchise text-foreground leading-none">67%</div>
                  <div className="text-xs font-clash font-medium text-foreground/70 uppercase">NECK PAIN</div>
                </div>
                <div>
                  <div className="text-5xl font-franchise text-foreground leading-none">52%</div>
                  <div className="text-xs font-clash font-medium text-foreground/70 uppercase">WRIST / HAND PAIN</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CARD C — PHYSICAL LOAD */}
          <ScrollReveal delay={0.1} className="md:col-span-1 h-full">
            <div className="h-full p-6 rounded-3xl bg-foreground/5 border border-foreground/10 flex flex-col justify-between">
              <div className="text-4xl lg:text-5xl font-franchise text-foreground leading-none">112.86 BPM</div>
              <div className="text-xs font-clash font-semibold uppercase text-primary tracking-wider mb-3">WORKING HEART RATE</div>
              <p className="text-xs font-clash font-medium text-foreground/60 italic">"Classified in the project as a heavy to very heavy workload."</p>
            </div>
          </ScrollReveal>

          {/* CARD D — PRODUCTIVITY */}
          <ScrollReveal delay={0.2} className="md:col-span-1 h-full">
            <div className="h-full p-6 rounded-3xl bg-foreground/5 border border-foreground/10 flex flex-col justify-between">
              <div className="text-4xl lg:text-5xl font-franchise text-foreground leading-none mb-1">3.8–4.0<span className="text-2xl">KG/HR</span></div>
              <div className="text-xs font-clash font-semibold uppercase text-foreground tracking-wider mb-3">CURRENT PRODUCTIVITY</div>
              <p className="text-xs font-clash font-medium text-foreground/60">The current process remains dependent on repetitive manual collection.</p>
            </div>
          </ScrollReveal>

          {/* CARD E — SEED LOSS */}
          <ScrollReveal className="md:col-span-2 lg:col-span-1 h-full">
            <div className="h-full p-6 rounded-3xl bg-[#fce8e8] dark:bg-red-900/20 border border-red-500/20 flex flex-col justify-between">
              <div>
                <div className="text-5xl font-franchise text-red-600 dark:text-red-400 leading-none">15.8%</div>
                <div className="text-xs font-clash font-semibold uppercase text-red-600/80 dark:text-red-400/80 tracking-wider mt-1">LEFT UNCOLLECTED</div>
              </div>
              <p className="text-sm font-clash font-medium text-red-600/90 dark:text-red-400/90 my-auto leading-relaxed">
                Inefficient manual harvesting in murky water leads to permanent crop loss.
              </p>
              <p className="text-xs font-clash font-medium text-red-600/60 dark:text-red-400/60 mt-4">— project problem overview</p>
            </div>
          </ScrollReveal>

          {/* CARD F — DAILY EARNINGS */}
          <ScrollReveal delay={0.1} className="md:col-span-1 h-full">
            <div className="h-full p-6 rounded-3xl bg-foreground/5 border border-foreground/10 flex flex-col justify-between">
              <div className="text-4xl font-franchise text-foreground leading-none mb-2">₹250–600</div>
              <div className="text-xs font-clash font-semibold uppercase text-foreground/70 tracking-wider mb-2">DAILY EARNINGS</div>
              <p className="text-xs font-clash font-medium text-foreground/60 italic">"Extreme physical work for relatively low daily earnings."</p>
            </div>
          </ScrollReveal>

          {/* CARD I & J — TECHNOLOGY GAP / FEASIBILITY (Combined spanning) */}
          <ScrollReveal delay={0.2} className="md:col-span-2 lg:col-span-2 h-full">
            <div className="h-full p-6 md:p-8 rounded-3xl bg-primary text-primary-foreground flex flex-col justify-center relative overflow-hidden">
               <div className="absolute -right-10 -bottom-10 opacity-20 w-64 h-64 bg-white/20 blur-3xl rounded-full pointer-events-none"></div>
               <div className="relative z-10">
                 <h3 className="font-clash font-semibold text-primary-foreground/80 uppercase tracking-wider text-sm mb-4">The Technology Gap</h3>
                 <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
                   <div>
                     <div className="text-2xl md:text-3xl font-franchise leading-none mb-1">TRADITIONAL TOOLS</div>
                     <div className="text-xs font-clash font-medium opacity-80 uppercase">vs. Expensive Mechanization</div>
                   </div>
                   <div className="flex-1">
                     <div className="text-4xl md:text-5xl font-franchise leading-none mb-1">₹500–5,000</div>
                     <div className="text-xs font-clash font-semibold uppercase tracking-wider mb-2">TARGET RANGE IDENTIFIED</div>
                     <p className="text-xs font-clash font-medium opacity-90 max-w-xs">
                       Affordable enough to sit between unchanged traditional tools and ₹1–3 lakh mechanical alternatives.
                     </p>
                   </div>
                 </div>
               </div>
            </div>
          </ScrollReveal>

          {/* CARD G — WORKFORCE */}
          <ScrollReveal className="md:col-span-2 lg:col-span-2 h-full">
             <div className="h-full p-6 rounded-3xl bg-foreground/5 border border-foreground/10 flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3 aspect-square md:aspect-auto md:h-full rounded-xl overflow-hidden relative">
                  <img src="/assets/projects/makhana-tool/assets/03_problems/younger_workers_wide.png" alt="Younger workers leaving" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-franchise text-foreground leading-tight mb-2">YOUNGER WORKERS ARE LEAVING</div>
                  <p className="text-sm font-clash font-medium text-foreground/60">
                    The project identifies labor shortages as a threat to continuity of the occupation.
                  </p>
                </div>
             </div>
          </ScrollReveal>

          {/* CARD H — IMAGE PORTRAIT */}
          <ScrollReveal delay={0.1} className="md:col-span-2 lg:col-span-2 h-full min-h-[250px]">
             <div className="h-full rounded-3xl overflow-hidden relative border border-foreground/10 bg-foreground/5 shadow-sm group">
                <img src="/assets/projects/makhana-tool/assets/03_problems/man_with_mud.jpg" alt="Harvesting in water" className="absolute inset-0 w-full h-full object-cover object-top md:object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out" />
             </div>
          </ScrollReveal>

          {/* MARKET STATS ROW (Smaller bento cards) */}
          <ScrollReveal className="md:col-span-3 lg:col-span-4 mt-8">
            <h3 className="font-clash font-semibold text-foreground text-sm uppercase tracking-wider mb-6 pb-2 border-b border-foreground/10">Market & System Context</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              <div className="p-4 rounded-2xl bg-foreground/3 border border-foreground/5 flex flex-col justify-center">
                <div className="text-3xl font-franchise text-foreground">₹8.5B</div>
                <div className="text-xs md:text-sm font-clash font-semibold uppercase text-foreground/60 mt-1">INDIA MAKHANA MARKET 2024</div>
              </div>
              <div className="p-4 rounded-2xl bg-foreground/3 border border-foreground/5 flex flex-col justify-center">
                <div className="text-3xl font-franchise text-foreground">₹19.6B</div>
                <div className="text-xs md:text-sm font-clash font-semibold uppercase text-foreground/60 mt-1">PROJECTED 2033</div>
              </div>
              <div className="p-4 rounded-2xl bg-foreground/3 border border-foreground/5 flex flex-col justify-center">
                <div className="text-3xl font-franchise text-foreground">9.22%</div>
                <div className="text-xs md:text-sm font-clash font-semibold uppercase text-foreground/60 mt-1">CAGR</div>
              </div>
              <div className="p-4 rounded-2xl bg-foreground/3 border border-foreground/5 flex flex-col justify-center">
                <div className="text-3xl font-franchise text-foreground">80–90%</div>
                <div className="text-xs md:text-sm font-clash font-semibold uppercase text-foreground/60 mt-1">SUPPLY FROM BIHAR</div>
              </div>
              <div className="p-4 rounded-2xl bg-foreground/3 border border-foreground/5 flex flex-col justify-center">
                <div className="text-3xl font-franchise text-foreground">25,130+</div>
                <div className="text-xs md:text-sm font-clash font-semibold uppercase text-foreground/60 mt-1">EXPORT SHIPMENTS</div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
