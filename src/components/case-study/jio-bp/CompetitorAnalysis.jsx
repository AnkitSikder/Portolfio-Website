import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';
import SectionHeader from '../common/SectionHeader';

const competitors = [
  { name: 'Jio-bp', type: 'logo', src: '/logos/jiobp.png', className: 'max-h-10' },
  { name: 'ServiceNow', type: 'logo', src: '/jio-bp/servicenow.png', className: 'scale-[1.8] max-h-10' },
  { name: 'Cority', type: 'logo', src: '/jio-bp/Cority.png' },
  { name: 'SafetyCulture', type: 'logo', src: '/jio-bp/SafetyCulture.png' },
];

const featuresData = [
  { feature: 'Frontline reporting', data: ['Basic / manual', 'Strong / guided', 'Strong / configurable', 'Strong / mobile-first'] },
  { feature: 'Guided workflow', data: ['Limited', 'Strong / structured', 'Strong / configurable', 'Moderate / template-based'] },
  { feature: 'Investigation & RCA', data: ['Basic', 'Strong / integrated', 'Strong / purpose-built', 'Moderate'] },
  { feature: 'Evidence & documentation', data: ['Basic / limited', 'Strong / centralized', 'Strong / traceable', 'Strong / easy capture'] },
  { feature: 'Corrective & preventive actions', data: ['Limited', 'Strong / workflow-driven', 'Strong / configurable', 'Moderate'] },
  { feature: 'Ownership / SLA tracking', data: ['Basic', 'Strong / automated', 'Strong / configurable', 'Moderate'] },
  { feature: 'Analytics & dashboards', data: ['Basic', 'Strong / real-time', 'Strong / detailed', 'Moderate'] },
  { feature: 'Mobile / field use', data: ['Limited / not evident', 'Strong / mobile-enabled', 'Strong / mobile-enabled', 'Strong / mobile-first'] },
  { feature: 'Organizational learning / prevention', data: ['Limited', 'Strong / data-driven', 'Strong / insights & learning', 'Moderate'] },
  { feature: 'Role-based experience', data: ['Role differentiation not explicit', 'Strong / role-based', 'Strong / role-based', 'Moderate'] },
];

export default function CompetitorAnalysis() {
  return (
    <section className="w-full max-w-[1400px] mx-auto">
      <ScrollReveal>
        <SectionHeader 
          title="Competitor Analysis"
          heading="Benchmarking against industry-leading enterprise platforms."
          headingClassName="!max-w-none lg:text-[2.75rem]"
          className="!mb-10 lg:!mb-14"
        />

        <div className="w-full overflow-x-auto pb-6 mt-4">
          <div className="min-w-[1000px] flex flex-col gap-3">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-white/10 items-center">
              <div className="text-[13px] font-clash uppercase tracking-[0.2em] text-white/60 font-medium col-span-1">
                Features
              </div>
              {competitors.map((comp, idx) => (
                <div key={idx} className="col-span-1 flex justify-center items-center h-12">
                  {comp.type === 'logo' ? (
                    <img src={comp.src} alt={comp.name} className={`max-w-[140px] object-contain opacity-90 ${comp.className || 'max-h-8'}`} />
                  ) : (
                    <span className="text-base font-clash font-medium text-white/90 text-center">{comp.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Table Rows */}
            {featuresData.map((row, rowIndex) => (
              <div 
                key={rowIndex} 
                className="grid grid-cols-5 gap-4 px-6 py-5 items-center bg-white/[0.03] hover:bg-white/[0.06] transition-colors border border-white/5 rounded-xl"
              >
                <div className="col-span-1 text-sm md:text-base font-clash font-medium text-primary">
                  {row.feature}
                </div>
                {row.data.map((value, valIndex) => {
                  return (
                    <div key={valIndex} className="col-span-1 flex justify-center text-center">
                      <span className="text-sm md:text-base font-medium text-white/90">
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

