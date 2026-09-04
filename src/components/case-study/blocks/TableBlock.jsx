import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';

export default function TableBlock({ content }) {
  const { heading, columns = [], rows = [] } = content;

  if (columns.length === 0 || rows.length === 0) return null;

  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {heading && (
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-franchise uppercase tracking-wide text-foreground mb-8">
              {heading}
            </h2>
          </ScrollReveal>
        )}
        
        <ScrollReveal delay={0.1}>
          <div className="w-full overflow-x-auto rounded-[2rem] bg-foreground/5 border border-foreground/10 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-foreground/10 bg-foreground/5">
                  {columns.map((col, idx) => (
                    <th 
                      key={idx} 
                      className="p-5 md:p-6 font-clash text-sm md:text-base font-semibold tracking-wide text-foreground uppercase"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/5">
                {rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-foreground/[0.02] transition-colors">
                    {columns.map((_, colIdx) => (
                      <td 
                        key={colIdx} 
                        className="p-5 md:p-6 font-clash text-sm md:text-[15px] font-medium tracking-wide text-foreground/70"
                      >
                        {row[colIdx]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
