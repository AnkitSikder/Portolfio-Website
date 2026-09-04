import React from 'react';

const shapes = [
  // 4-Pointed Star (Sparkle)
  <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z"/></svg>,
  // Diamond
  <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 0L24 12L12 24L0 12L12 0Z"/></svg>,
  // Plus / Cross
  <svg viewBox="0 0 24 24" width="42" height="42" fill="currentColor"><path d="M10 0H14V10H24V14H14V24H10V14H0V10H10V0Z"/></svg>,
  // Flower / Cloud
  <svg viewBox="0 0 24 24" width="42" height="42" fill="currentColor"><path d="M6 6C6 2.68629 8.68629 0 12 0C15.3137 0 18 2.68629 18 6C21.3137 6 24 8.68629 24 12C24 15.3137 21.3137 18 18 18C18 21.3137 15.3137 24 12 24C8.68629 24 6 21.3137 6 18C2.68629 18 0 15.3137 0 12C0 8.68629 2.68629 6 6 6Z"/></svg>
];

const marqueeItems = [
  "Interaction Design",
  "Creative Technology",
  "Information Architecture",
  "AI Prototyping",
  "Visual Design",
  "Web Design",
  "Design Systems",
  "Brand Systems",
  "AR/VR Experiences",
  "Vibe Coding",
  "Product Design",
  "Product Strategy"
];

export default function Marquee() {
  // Duplicate the items a few times to ensure the marquee has enough content to scroll infinitely without gaps
  const displayItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="w-full bg-gradient-to-b from-[#ff7300] to-[#d04000] py-6 md:py-8 overflow-hidden flex items-center z-10 relative">
      <div className="marquee-container">
        <div className="marquee-content flex items-center">
          {displayItems.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-3xl md:text-5xl font-clash font-semibold text-foreground mx-8 md:mx-16 uppercase tracking-wide">
                {item}
              </span>
              <span className="text-foreground flex items-center justify-center shrink-0">
                {shapes[index % shapes.length]}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
