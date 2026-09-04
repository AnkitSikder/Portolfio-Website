import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';

export default function Phase2TechnicalAspectsBlock({ content, sectionId, isAlternate }) {
  const bgClass = isAlternate ? 'bg-foreground/5' : 'bg-background';

  const anthroData = [
    { label: 'ELBOW HEIGHT', vals: ['945', '1039', '1123'] },
    { label: 'KNEE HEIGHT', vals: ['419', '464', '517'] },
    { label: 'FORWARD REACH', vals: ['749', '849', '939'] },
    { label: 'SHOULDER BREADTH', vals: ['341', '380', '422'] },
    { label: 'HAND LENGTH', vals: ['163', '180', '198'] },
    { label: 'GRIP DIAMETER', vals: ['42', '49', '56'] }
  ];

  const ergoStory = [
    {
      step: 'PULL',
      details: ['800 mm handle length', '700 ± 30 mm pivot height', '300–350 mm two-hand span']
    },
    {
      step: 'COLLECT',
      details: ['Knee-stop angle −20° ± 2°', 'Guides forward momentum']
    },
    {
      step: 'LIFT',
      details: ['780 ± 30 mm holder height', '≈ 250 mm lift distance', 'Max lift: 12–15 kg']
    },
    {
      step: 'SHAKE',
      details: ['≈ 1030 ± 100 mm shake height', 'Near elbow-level working zone', '≥ 350 mm clearance above shake']
    }
  ];

  const materials = [
    { part: 'LOADER BUCKET', mat: 'Stainless steel', desc: 'For major structural / wet-environment components.' },
    { part: 'SEED BASKET', mat: 'Stainless steel / Bamboo', desc: 'Retains the traditional material language of the basket.' },
    { part: 'BRUSH', mat: 'Silicone', desc: 'Used for the flexible brush interface.' },
    { part: 'HANDLE', mat: 'Stainless steel', desc: 'Provides structural rigidity for pulling.' },
    { part: 'HANDLE GRIP', mat: 'Rubber', desc: 'Used at the main contact points for wet grip.' },
    { part: 'WHEELS', mat: 'Stainless steel / Iron', desc: 'Used for the heavy-duty wheel system.' }
  ];

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-20">
        
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-4xl">
            <h2 className="text-sm font-clash uppercase tracking-[0.2em] text-primary mb-4">
              Designing the tool around the human.
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-franchise uppercase tracking-wide text-foreground leading-tight">
              The geometry was shaped by reach, elbow height, grip and lifting posture — not just by form.
            </p>
          </div>
        </ScrollReveal>

        {/* Compact Side-by-Side Layout for Data & Ergonomics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Part A: Anthropometric Reference */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-franchise text-foreground mb-1">Anthropometric Reference (mm)</h3>
                <p className="text-sm font-clash font-medium text-foreground/60 max-w-lg">
                  References used to position the handle, holder and shaking interaction around practical reach and working heights.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="flex-grow">
              <div className="bg-foreground/5 border border-foreground/10 rounded-2xl overflow-hidden h-full">
                <div className="overflow-x-auto h-full">
                  <table className="w-full text-left border-collapse whitespace-nowrap h-full">
                    <thead>
                      <tr className="border-b border-foreground/10 bg-foreground/[0.02]">
                        <th className="font-clash text-[10px] text-foreground/50 uppercase tracking-widest p-4">Measurement</th>
                        <th className="font-clash text-[10px] text-foreground/50 uppercase tracking-widest p-4 text-center">5th</th>
                        <th className="font-clash text-[10px] text-foreground/50 uppercase tracking-widest p-4 text-center">50th</th>
                        <th className="font-clash text-[10px] text-foreground/50 uppercase tracking-widest p-4 text-center">95th</th>
                      </tr>
                    </thead>
                    <tbody>
                      {anthroData.map((item, idx) => (
                        <tr key={idx} className="border-b border-foreground/5 hover:bg-foreground/[0.02] transition-colors last:border-0">
                          <td className="p-3 px-4 font-clash text-xs font-semibold text-primary">{item.label}</td>
                          <td className="p-3 px-4 font-franchise text-xl text-foreground/80 text-center">{item.vals[0]}</td>
                          <td className="p-3 px-4 font-franchise text-2xl text-foreground text-center">{item.vals[1]}</td>
                          <td className="p-3 px-4 font-franchise text-xl text-foreground/80 text-center">{item.vals[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Part B & C: Ergonomic Story & Dimensions */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollReveal>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-franchise text-foreground mb-1">Key Ergonomic Dimensions</h3>
                <p className="text-sm font-clash font-medium text-foreground/60">
                  Geometry adapts to the sequence of user movement.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="flex flex-col flex-grow py-2">
              {ergoStory.map((phase, idx) => (
                <ScrollReveal key={idx} delay={0.1 * idx}>
                  <div className="relative pl-6 pb-24 last:pb-5 group">
                    {/* Vertical Timeline connector */}
                    {idx !== ergoStory.length - 1 && (
                      <div className="absolute left-0 top-2 bottom-0 w-px bg-foreground/10 group-hover:bg-primary/30 transition-colors"></div>
                    )}
                    <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
                    
                    <h4 className="font-franchise text-2xl text-foreground mb-4 leading-none">{phase.step}</h4>
                    <ul className="flex flex-col gap-3">
                      {phase.details.map((detail, dIdx) => (
                        <li key={dIdx} className="font-clash text-xs font-medium text-foreground/70 flex items-start gap-2">
                          <span className="text-primary mt-[2px] opacity-70">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>

        {/* Part D: Material System */}
        <div>
          <ScrollReveal>
            <div className="mb-8 max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-franchise text-foreground mb-3">Traditional where it matters. Durable where it counts.</h3>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {materials.map((mat, idx) => (
              <ScrollReveal key={idx} delay={0.05 * idx}>
                <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 h-full flex flex-col gap-2 hover:bg-foreground/10 transition-colors">
                  <h4 className="font-clash text-xs font-semibold tracking-widest text-primary uppercase">{mat.part}</h4>
                  <div className="font-franchise text-3xl text-foreground tracking-wide">{mat.mat}</div>
                  <p className="font-clash text-sm font-medium text-foreground/60 mt-auto pt-4">{mat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
