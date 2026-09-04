import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';
import { Activity, ZapOff, ShieldAlert } from 'lucide-react';

export default function Phase1ErgonomicsBlock({ content, sectionId }) {
  const findings = [
    {
      stat: "78%",
      title: "LOWER-BACK PAIN",
      description: "Directly associated with prolonged bent or prone work in the water.",
      color: "text-primary",
      bg: "bg-primary/5",
      border: "border-primary/20",
    },
    {
      icon: <Activity className="w-8 h-8 md:w-10 md:h-10" />,
      title: "REPETITIVE SWEEPING",
      description: "Constant, repetitive manual sweeping motions lead to high musculoskeletal stress.",
      color: "text-primary",
      bg: "bg-primary/5",
      border: "border-primary/20",
    },
    {
      icon: <ZapOff className="w-8 h-8 md:w-10 md:h-10" />,
      title: "NO MECHANICAL ADVANTAGE",
      description: "Current tools rely entirely on manual human effort, offering zero mechanical leverage.",
      color: "text-primary",
      bg: "bg-primary/5",
      border: "border-primary/20",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 md:w-10 md:h-10" />,
      title: "NO INTEGRATED PROTECTION",
      description: "Sharp thorns and contaminated pond water remain unavoidable direct hazards.",
      color: "text-primary",
      bg: "bg-primary/5",
      border: "border-primary/20",
    }
  ];

  return (
    <section id={sectionId} className="py-10 md:py-16 lg:py-24 px-6 md:px-12 lg:px-24 bg-foreground/5 border-y border-foreground/10">
      <div className="max-w-[1400px] mx-auto">
        
        <ScrollReveal>
          <div className="mb-12 md:mb-20 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-franchise uppercase tracking-wide text-foreground leading-tight mx-auto max-w-4xl">
              The biggest opportunity was <span className="text-primary">ergonomic</span>.
            </h2>
            <p className="text-base md:text-xl font-clash font-medium text-foreground/70 max-w-2xl mx-auto mt-6">
              It wasn't about digitizing the process—it was about protecting the human body from extreme physical toll.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {findings.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
              <div className={`h-full p-6 md:p-8 rounded-[1.5rem] border ${item.border} ${item.bg} relative overflow-hidden group hover:shadow-lg transition-all`}>
                <div className="relative z-10 flex flex-col h-full">
                  {item.stat ? (
                    <div className={`text-5xl md:text-6xl font-franchise leading-none ${item.color} mb-4`}>{item.stat}</div>
                  ) : (
                    <div className={`mb-4 ${item.color} opacity-80 group-hover:scale-110 transition-transform origin-left`}>{item.icon}</div>
                  )}
                  <div className="mt-auto">
                    <h3 className={`text-xl md:text-2xl font-franchise tracking-wide uppercase ${item.color} mb-2`}>{item.title}</h3>
                    <p className="text-sm md:text-base font-clash font-medium text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                {/* Decorative background glow */}
                <div className={`absolute -bottom-16 -right-16 w-48 h-48 ${item.bg} blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity z-0`}></div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
