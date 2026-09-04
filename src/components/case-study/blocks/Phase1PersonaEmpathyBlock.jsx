import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';
import { MessageSquare, Brain, Target, Heart } from 'lucide-react';

export default function Phase1PersonaEmpathyBlock({ content, sectionId }) {
  const quadrants = [
    {
      title: "SAYS",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      items: [
        "“My hands are covered in thorn marks and my whole body hurts from this work.”",
        "“These bamboo tools haven’t changed in generations.”",
        "“Young people won’t do this work anymore.”",
        "“There must be a better way to do this.”"
      ]
    },
    {
      title: "THINKS",
      icon: <Brain className="w-5 h-5" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      items: [
        "“My back pain and constant injuries are treated as normal, but they shouldn’t be.”",
        "“I don’t want to leave farming, but this occupation may disappear.”",
        "“Machines exist, but they are too expensive for us.”"
      ]
    },
    {
      title: "DOES",
      icon: <Target className="w-5 h-5" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      items: [
        "Submerges in murky pond water",
        "Works in bent/prone positions",
        "Manually sweeps and searches for seeds",
        "Uses bamboo sieves and repeated shaking",
        "Works in groups for safety",
        "Passes traditional knowledge to the next generation"
      ]
    },
    {
      title: "FEELS",
      icon: <Heart className="w-5 h-5" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      items: [
        "Physical pain",
        "Frustration with low earnings",
        "Pride in traditional expertise",
        "Concern about the future of the occupation",
        "Strong openness to practical innovation"
      ]
    }
  ];

  return (
    <section id={sectionId} className="py-10 md:py-16 lg:py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide text-foreground leading-tight">
              Meet Rajesh.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* PERSONA */}
          <div className="lg:col-span-4 h-full">
            <ScrollReveal delay={0.1} className="h-full">
              <div className="bg-foreground/5 rounded-3xl overflow-hidden border border-foreground/10 h-full flex flex-col relative shadow-xl">
                {/* Header / Portrait */}
                <div className="h-56 bg-primary/20 relative flex items-center justify-center border-b border-foreground/10">
                  <img src="/assets/projects/makhana-tool/assets/05_research/persona_new.jpg" alt="Rajesh Persona" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-luminosity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
                  <div className="relative z-20 self-end p-6 w-full translate-y-2">
                    <h3 className="text-4xl font-franchise text-foreground mb-1 leading-none drop-shadow-md">Rajesh</h3>
                    <p className="text-xs font-clash font-bold uppercase tracking-widest text-primary drop-shadow-md">Makhana Seed Harvester</p>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col gap-8 bg-background">
                  
                  {/* Demographics */}
                  <div className="grid grid-cols-2 gap-4 border-b border-foreground/10 pb-6">
                    <div>
                      <div className="text-[10px] font-clash font-bold uppercase text-foreground/40 tracking-wider mb-1">Age</div>
                      <div className="text-sm font-clash font-semibold text-foreground">38 years old</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-clash font-bold uppercase text-foreground/40 tracking-wider mb-1">Experience</div>
                      <div className="text-sm font-clash font-semibold text-foreground">22 years</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-clash font-bold uppercase text-foreground/40 tracking-wider mb-1">Community</div>
                      <div className="text-sm font-clash font-semibold text-foreground">Mallah</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-clash font-bold uppercase text-foreground/40 tracking-wider mb-1">Location</div>
                      <div className="text-sm font-clash font-semibold text-foreground leading-tight">Darbhanga, Bihar</div>
                    </div>
                  </div>

                  {/* Context Sections */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-clash font-bold uppercase tracking-wider text-foreground/50 mb-3 flex items-center gap-2">
                        <span className="w-4 h-px bg-foreground/20"></span> Work Context
                      </h4>
                      <ul className="space-y-2 text-sm font-clash font-medium text-foreground/80">
                        <li>• 6–8 hours/day during harvest</li>
                        <li>• 3.8–4.0 kg/hour productivity</li>
                        <li>• Traditional bamboo tools</li>
                        <li>• Works with groups of harvesters</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-clash font-bold uppercase tracking-wider text-foreground/50 mb-3 flex items-center gap-2">
                        <span className="w-4 h-px bg-foreground/20"></span> Pain Points
                      </h4>
                      <ul className="space-y-2 text-sm font-clash font-medium text-foreground/80">
                        <li>• Chronic back, neck and wrist pain</li>
                        <li>• Frequent thorn injuries</li>
                        <li>• Low daily earnings</li>
                        <li>• Fear of long-term physical damage</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* EMPATHY MAP */}
          <div className="lg:col-span-8">
            <ScrollReveal delay={0.2}>
              <h3 className="font-clash font-semibold text-sm uppercase tracking-wider text-foreground/50 mb-6">Empathy Map</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {quadrants.map((q, idx) => (
                  <div key={idx} className={`rounded-3xl p-6 md:p-8 border ${q.borderColor} ${q.bgColor} flex flex-col h-full hover:shadow-md transition-shadow`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-2 rounded-xl bg-background ${q.color} shadow-sm border ${q.borderColor}`}>
                        {q.icon}
                      </div>
                      <h4 className={`text-xl font-franchise tracking-wide ${q.color}`}>{q.title}</h4>
                    </div>
                    <ul className="space-y-4 font-clash text-sm text-foreground/80 flex-1">
                      {q.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${q.color} opacity-60`}></span>
                          <span className={`${item.startsWith('“') ? 'italic font-medium' : 'font-medium'}`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
