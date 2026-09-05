import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';

export default function AuraChargeCompetitorBlock({ content, sectionId, isAlternate }) {
  const { heading, interpretation, matrix = {}, features = [] } = content || {};
  const { columns = [], rows = [] } = matrix;

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
        
        <ScrollReveal>
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-franchise uppercase tracking-wide leading-tight text-foreground">
              {heading}
            </h2>
          </div>
        </ScrollReveal>

        {/* Matrix Table */}
        {columns.length > 0 && rows.length > 0 && (
          <ScrollReveal delay={0.1}>
            <div className="w-full overflow-x-auto pb-6 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide mt-4">
              <table className="w-full min-w-[900px] text-left border-separate border-spacing-y-3">
                <thead>
                  <tr>
                    <th className="p-5 text-sm font-clash font-bold uppercase tracking-[0.2em] text-foreground/60 w-1/4 align-middle">
                      Features
                    </th>
                    {columns.map((col, idx) => (
                      <th key={idx} className="p-5 text-center align-middle w-1/4">
                        {col.logo ? (
                          <div className="h-10 flex items-center justify-center">
                             <img src={col.logo} alt={col.name} className="max-h-full max-w-[140px] object-contain opacity-80 hover:opacity-100 transition-opacity" />
                          </div>
                        ) : (
                          <span className="font-franchise text-2xl uppercase tracking-widest text-foreground/80">{col.name}</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rIdx) => (
                    <tr key={rIdx} className="group">
                      <td className="p-5 bg-white/10 rounded-l-2xl text-sm font-clash font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors border-y border-l border-white/5">
                        {row.feature}
                      </td>
                      {row.values.map((val, cIdx) => (
                        <td key={cIdx} className={`p-5 bg-white/5 border-y border-white/5 text-center text-sm font-clash font-medium text-foreground/80 group-hover:bg-white/10 transition-colors ${cIdx === row.values.length - 1 ? 'rounded-r-2xl border-r' : ''}`}>
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        )}

        {/* Features List */}
        {features && features.length > 0 && (
          <ScrollReveal delay={0.2}>
            <div className="mt-8 p-8 md:p-12 rounded-[2rem] bg-foreground/5 border border-foreground/10 shadow-xl">
              <h3 className="font-franchise text-3xl md:text-4xl uppercase tracking-widest text-primary mb-8">
                Features that will make AuraCharge stand out
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-clash text-foreground/80 font-medium tracking-wide">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(255,95,31,0.5)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}
