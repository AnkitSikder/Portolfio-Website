import React from 'react';
import ScrollReveal from '../../../common/ScrollReveal';
import SectionHeader from '../../common/SectionHeader';

export default function AuraChargeCompetitorBlock({ content, sectionId, isAlternate }) {
  const { heading, interpretation, matrix = {}, features = [] } = content || {};
  const { columns = [], rows = [] } = matrix;

  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-foreground w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">
        
        <ScrollReveal>
          <SectionHeader title="Competitor Analysis" heading={heading} className="!mb-0" />
        </ScrollReveal>

        {/* Matrix Table */}
        {columns.length > 0 && rows.length > 0 && (
          <ScrollReveal delay={0.1}>
            <div className="w-full overflow-x-auto pb-6 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide">
              <table className="w-full min-w-[900px] text-left border-separate border-spacing-y-3">
                <thead>
                  <tr>
                    <th className="p-5 text-sm font-clash font-medium font-bold uppercase tracking-[0.2em] text-white/60 w-1/4 align-middle tracking-wide leading-relaxed">
                      Features
                    </th>
                    {columns.map((col, idx) => (
                      <th key={idx} className="p-5 text-center align-middle w-1/4">
                        {col.logo ? (
                          <div className="h-10 md:h-12 flex items-center justify-center overflow-hidden w-full max-w-[160px] mx-auto">
                             <img 
                               src={col.logo} 
                               alt={col.name} 
                               className={`
                                 opacity-80 hover:opacity-100 transition-all duration-300
                                 ${col.name === 'Luminous' ? 'scale-[1.3] md:scale-[1.5] object-contain w-full h-full' : ''}
                                 ${col.name === 'V-Guard' ? 'max-h-[140px] max-w-[140px] object-contain' : ''}
                                 ${col.name !== 'Luminous' && col.name !== 'V-Guard' ? 'max-h-full max-w-[140px] object-contain' : ''}
                               `} 
                             />
                          </div>
                        ) : (
                          <span className="typo-h5">{col.name}</span>
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
            <div className="p-8 md:p-12 rounded-[2rem] bg-foreground/5 border border-foreground/10 shadow-xl -mt-2 md:-mt-6">
              <h3 className="font-clash text-[20px] md:text-[22px] font-medium text-white/90 mb-6 md:mb-8">
                Features that will make AuraCharge stand out
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-clash text-sm md:text-[15px] font-medium tracking-wide text-white/60 leading-relaxed">
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
