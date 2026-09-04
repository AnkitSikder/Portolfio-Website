import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';

export default function Phase2TakeawayBlock({ content, sectionId, isAlternate }) {
  const bgClass = isAlternate ? 'bg-foreground/5' : 'bg-background';

  const statements = [
    { title: 'ERGONOMIC', desc: 'Designed around human reach and working height.' },
    { title: 'INTEGRATED', desc: 'Collection and first-stage separation brought into one system.' },
    { title: 'ACCESSIBLE', desc: 'Designed as an intermediate solution rather than full-scale mechanization.' }
  ];

  return (
    <section id={sectionId} className={`py-16 md:py-24 lg:py-32 px-5 md:px-12 lg:px-24 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">
        
        {/* Left: Heading & Body */}
        <div className="w-full md:w-[45%] flex flex-col gap-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide text-foreground leading-tight">
              A hand tool between tradition and mechanization.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base md:text-lg font-clash font-medium text-foreground/70 leading-relaxed">
              The final concept keeps the familiar logic of manual harvesting while introducing a controlled pulling action, integrated collection and simple mechanical assistance. The result is intended to reduce unnecessary physical effort without requiring the infrastructure of a large mechanized harvester.
            </p>
          </ScrollReveal>
        </div>

        {/* Right: Statements */}
        <div className="w-full md:w-[55%] flex flex-col gap-8 justify-center">
          {statements.map((stmt, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="flex flex-col gap-2 pl-6 md:pl-8 border-l-2 border-primary">
                <h3 className="font-franchise text-3xl md:text-4xl text-foreground tracking-wide uppercase">
                  {stmt.title}
                </h3>
                <p className="font-clash text-base text-foreground/60 font-medium">
                  {stmt.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
