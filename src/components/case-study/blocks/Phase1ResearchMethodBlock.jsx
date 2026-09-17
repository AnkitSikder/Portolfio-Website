import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';

export default function Phase1ResearchMethodBlock({ content, sectionId }) {
  const methods = [
    {
      num: "01",
      title: "Telephonic Interviews",
      points: ["harvesting routine", "tools currently used", "physical pain", "thorn injuries", "seed loss", "earnings and labor", "acceptance of a new tool", "important characteristics such as safety, speed, simplicity and cost"]
    },
    {
      num: "02",
      title: "Observational Study",
      points: ["worker posture", "water depth and visibility", "interaction with thorny plants", "group-based working", "manual tools", "movement patterns", "collection environment"]
    },
    {
      num: "03",
      title: "Research Synthesis",
      description: "Evidence was compared against the original research assumptions to identify what was confirmed, what was new, and what needed to influence the design."
    }
  ];

  const evidence = [
    { value: "25–30%", label: "Seed loss reported by multiple farmers" },
    { value: "6–8 HOURS", label: "Submersion confirmed through interviews" },
    { value: "\"WITHOUT HANDS, CANNOT HARVEST\"", label: "A key statement reflecting continued manual dependence" },
    { value: "5 FT", label: "Reported as a more productive / workable depth compared with shallower conditions" },
    { value: "72 HOURS", label: "Total processing timeline mentioned in interview synthesis" },
    { value: "65–70%", label: "Material loss noted during processing; 30 kg raw → about 8–10 kg popped was reported" }
  ];

  const images = [
    "05_research/slide_25_img_01.jpg",
    "05_research/slide_25_img_02.jpg",
    "05_research/slide_25_img_03.jpg",
    "05_research/slide_25_img_04.jpg"
  ];

  return (
    <section id={sectionId} className="py-10 md:py-16 lg:py-24 px-6 md:px-12 lg:px-24 bg-foreground/5 border-y border-foreground/10">
      <div className="max-w-[1400px] mx-auto">
        
        <ScrollReveal>
          <div className="mb-16 border-b border-foreground/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-clash text-sm uppercase tracking-[0.2em] text-primary mb-3">Research</p>
              <h2 className="font-franchise text-4xl md:text-5xl uppercase tracking-wide text-white leading-tight">
                Primary Research
              </h2>
            </div>
            <div className="font-clash font-medium text-xs md:text-sm tracking-widest text-foreground/60 md:mb-2">
              Interviews <span className="text-primary mx-2">•</span> Observation <span className="text-primary mx-2">•</span> Existing-Solution Review
            </div>
          </div>
        </ScrollReveal>

        {/* METHODOLOGY MODULES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {methods.map((method, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
              <div className="bg-background rounded-3xl p-8 border border-foreground/10 shadow-sm h-full flex flex-col">
                <div className="flex items-end gap-3 mb-6 pb-4 border-b border-foreground/10">
                  <span className="text-4xl font-franchise text-primary/30 leading-none">{method.num}</span>
                  <h3 className="font-clash font-medium text-foreground tracking-wide text-[20px] md:text-[22px]">{method.title}</h3>
                </div>
                {method.points && (
                  <div className="flex-1">
                    <p className="font-clash font-medium text-xs tracking-wide text-foreground/50 mb-4">What I wanted to understand:</p>
                    <ul className="space-y-2">
                      {method.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1 text-[10px] shrink-0">■</span>
                          <span className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-foreground/60 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {method.description && (
                  <div className="flex-1 flex items-center">
                    <p className="font-clash font-medium text-base text-foreground/80 leading-relaxed border-l-4 border-primary pl-4">
                      {method.description}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* VISUAL EVIDENCE */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {images.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-2xl border border-foreground/10 overflow-hidden relative">
                <img src={`/assets/projects/makhana-tool/assets/${img}`} alt="Research visual" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* EVIDENCE STRIP */}
        <ScrollReveal delay={0.3}>
          <h2 className="font-franchise text-4xl md:text-5xl uppercase tracking-wide text-white leading-tight mb-6">Verified Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {evidence.map((item, idx) => (
              <div key={idx} className="bg-foreground/5 rounded-2xl p-6 border border-foreground/10 hover:border-foreground/20 transition-colors">
                <div className="text-2xl md:text-3xl font-franchise text-primary leading-tight mb-2 uppercase">{item.value}</div>
                <div className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-foreground/60 leading-relaxed">{item.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
