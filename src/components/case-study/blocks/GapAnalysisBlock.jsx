import React from 'react';
import SectionHeader from '../common/SectionHeader';

export default function GapAnalysisBlock({ content, isAlternate }) {
  const {
    heading,
    subheading,
    leftTitle,
    leftItems = [],
    rightTitle,
    rightItems = [],
    gapTitle,
    gapDescription,
    consequences = [],
    problemStatement,
  } = content;

  return (
    <section className={`py-10 md:py-16 lg:py-20 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-white w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <SectionHeader 
          title={heading}
          heading={subheading}
          description={problemStatement}
         className="!mb-8 md:!mb-12" />

      {/* Split View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2 md:mb-6">
        {/* Training */}
        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-10 lg:p-12 backdrop-blur-sm">
          <h4 className="font-clash text-[20px] md:text-[22px] font-medium text-white/90 mb-6">
            {leftTitle}
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            {leftItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-white/60 font-clash text-sm md:text-[15px] font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-white/20 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Reality */}
        <div className="bg-primary/5 border border-primary/20 rounded-[2rem] p-6 md:p-10 lg:p-12 backdrop-blur-sm relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          
          <h4 className="font-clash text-[20px] md:text-[22px] font-medium text-primary mb-6 relative z-10">
            {rightTitle}
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 relative z-10">
            {rightItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-white font-clash text-sm md:text-[15px] font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0 shadow-[0_0_10px_rgba(255,95,31,0.5)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* The Gap */}
      <div className="flex flex-col items-center text-center mb-4 md:mb-6">
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent mb-4" />
        {gapTitle && (
          <h4 className="font-clash text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            {gapTitle}
          </h4>
        )}
        {gapDescription && (
          <p className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-white/60 max-w-lg mx-auto leading-relaxed">
            {gapDescription}
          </p>
        )}
      </div>

      {/* Consequence Cards */}
      {consequences.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {consequences.map((c, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-colors duration-500 flex flex-col gap-2 md:gap-3"
            >
              <h5 className="font-clash text-[20px] md:text-[22px] font-medium text-white/90 leading-snug">
                {c.title}
              </h5>
              <p className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-white/60 leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      )}
      </div>
    </section>
  );
}
