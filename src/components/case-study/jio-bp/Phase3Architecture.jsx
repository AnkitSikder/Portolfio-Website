import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';
import SectionHeader from '../common/SectionHeader';

export default function Phase3Architecture() {
  return (
    <div className="w-full bg-background text-foreground">
      
      {/* 24 — INFORMATION ARCHITECTURE */}
      <section className="py-24 px-8 md:px-14 lg:px-20 max-w-[1200px] mx-auto border-t border-white/5">
        <ScrollReveal>
          <SectionHeader 
            title="24 — Information Architecture"
            heading="Restructuring the Ecosystem"
            description="The architecture shifted from a flat &#34;forms and lists&#34; model to a structured hierarchy supporting the entire incident lifecycle and role-based visibility."
          />
          
          <div className="mt-12 rounded-2xl border border-white/10 overflow-hidden bg-card">
            <img 
              src="/jio-bp/Information Architecture.png" 
              alt="Information Architecture Diagram" 
              className="w-full h-auto"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* 25 — INCIDENT LIFECYCLE */}
      <section className="py-24 bg-card px-8 md:px-14 lg:px-20">
        <ScrollReveal>
          <div className="max-w-[1400px] mx-auto">
              <SectionHeader 
                title="25 — Incident Lifecycle"
                heading="The New Backbone"
                className="items-center text-center"
              />
            
            <div className="flex flex-wrap justify-center gap-4 text-center font-clash tracking-widest text-sm md:text-base">
              {['INCIDENT OCCURS', 'REPORT', 'ADD EVIDENCE', 'REVIEW', 'CLASSIFY', 'ASSIGN', 'ACT / ESCALATE', 'CORRECTIVE ACTION', 'VERIFY', 'CLOSE', 'LEARN', 'SOP / POLICY / TRAINING', 'PREVENT RECURRENCE'].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <div className={`px-4 py-3 rounded-lg border ${i === 0 || i === arr.length - 1 ? 'border-primary text-primary bg-primary/10' : 'border-white/20 text-white/80 bg-white/5'}`}>
                    {step}
                  </div>
                  {i < arr.length - 1 && <div className="flex items-center justify-center text-primary/50 text-xl mx-1">→</div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 26 — USER FLOWS */}
      <section className="py-24 px-8 md:px-14 lg:px-20 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionHeader 
            title="26 — User Flows"
            heading="Role-Specific Pathways"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <FlowColumn 
              role="RO"
              steps={['Observe', 'Report', 'Add evidence', 'Submit', 'Track', 'Learn']}
            />
            <FlowColumn 
              role="ASR"
              steps={['Receive', 'Review', 'Understand context', 'Decide', 'Assign / Escalate', 'Monitor']}
            />
            <FlowColumn 
              role="HO"
              steps={['Monitor', 'Compare', 'Detect pattern', 'Drill down', 'Understand risk', 'Govern']}
            />
          </div>
        </ScrollReveal>
      </section>

      {/* 27 — JOURNEY MAP */}
      <section className="py-24 bg-card px-8 md:px-14 lg:px-20 overflow-x-hidden">
        <ScrollReveal>
          <div className="max-w-[1400px] mx-auto">
              <SectionHeader 
                title="27 — Journey Map"
                heading="Mapping the Experience"
              />
            
            <div className="overflow-x-auto pb-8">
              <div className="min-w-[900px]">
                {/* Stages Header */}
                <div className="grid grid-cols-6 gap-4 mb-8">
                  {['NOTICE', 'REPORT', 'REVIEW', 'DECIDE', 'RESOLVE', 'LEARN'].map(stage => (
                    <div key={stage} className="text-center font-clash text-primary tracking-widest text-sm border-b border-primary/20 pb-4">{stage}</div>
                  ))}
                </div>
                
                {/* Rows */}
                <div className="space-y-4">
                  <JourneyRow role="RO" content="Goal / Need / Friction / Opportunity across all stages." />
                  <JourneyRow role="ASR" content="Goal / Need / Friction / Opportunity focusing on review and decision." />
                  <JourneyRow role="HO" content="Goal / Need / Friction / Opportunity focusing on patterns and learning." />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 28 — MIND MAP */}
      <section className="py-24 px-8 md:px-14 lg:px-20 max-w-[1000px] mx-auto text-center">
        <ScrollReveal>
            <SectionHeader 
              title="28 — Mind Map"
            />
          
          <div className="bg-card border border-white/10 rounded-3xl p-12 font-clash text-white/80">
            <div className="text-2xl text-primary mb-8">INCIDENT</div>
            <div className="w-px h-8 bg-white/20 mx-auto mb-8"></div>
            
            <div className="grid grid-cols-3 gap-8 mb-8 relative">
              <div className="absolute top-0 left-[16.6%] right-[16.6%] h-px bg-white/20"></div>
              
              <div className="relative pt-8">
                <div className="absolute top-0 left-1/2 w-px h-8 bg-white/20 -translate-x-1/2"></div>
                <h5 className="text-xl mb-6">PEOPLE</h5>
                <ul className="space-y-3 font-light text-sm text-white/60">
                  <li>RO / ASR / SOM</li>
                  <li>SH / HO</li>
                </ul>
              </div>
              
              <div className="relative pt-8">
                <div className="absolute top-0 left-1/2 w-px h-8 bg-white/20 -translate-x-1/2"></div>
                <h5 className="text-xl mb-6 text-primary">DATA</h5>
                <ul className="space-y-3 font-light text-sm text-white/60">
                  <li>Category</li>
                  <li>Severity</li>
                  <li>Evidence</li>
                  <li>Location</li>
                  <li>Impact</li>
                </ul>
              </div>
              
              <div className="relative pt-8">
                <div className="absolute top-0 left-1/2 w-px h-8 bg-white/20 -translate-x-1/2"></div>
                <h5 className="text-xl mb-6">ACTION</h5>
                <ul className="space-y-3 font-light text-sm text-white/60">
                  <li>Review</li>
                  <li>Assign</li>
                  <li>Escalate</li>
                  <li>Resolve</li>
                </ul>
              </div>
            </div>

            <div className="w-px h-8 bg-white/20 mx-auto mt-4 mb-4"></div>
            <div className="text-xl text-primary mb-4">LEARNING</div>
            <div className="w-px h-8 bg-white/20 mx-auto mb-4"></div>
            <div className="text-sm text-white/60 mb-4">Root Cause / SOP / Policy</div>
            <div className="w-px h-8 bg-white/20 mx-auto mb-4"></div>
            <div className="text-xl text-primary">PREVENTION</div>
          </div>
        </ScrollReveal>
      </section>

      {/* 29 — LOW FIDELITY */}
      <section className="py-24 bg-card px-8 md:px-14 lg:px-20">
        <ScrollReveal>
          <div className="max-w-[1200px] mx-auto text-center">
            <SectionHeader 
              title="29 — Low-Fidelity Ideation"
              heading="Thinking in Structure"
              className="items-center text-center"
            />
            
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-clash tracking-widest text-white/40 mb-20">
              {['CONTENT INVENTORY', 'PRIORITIZATION', 'LAYOUT EXPLORATION', 'WIREFRAME', 'COMPONENT MODEL', 'FINAL UI'].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <span className={i === 3 ? "text-primary" : ""}>{step}</span>
                  {i < arr.length - 1 && <span>→</span>}
                </React.Fragment>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <WireframePlaceholder title="Wireframe 01" desc="Existing information reorganized" />
              <WireframePlaceholder title="Wireframe 02" desc="RO action-first dashboard" />
              <WireframePlaceholder title="Wireframe 03" desc="ASR action queue" />
              <WireframePlaceholder title="Wireframe 04" desc="HO analytics architecture" />
              <WireframePlaceholder title="Wireframe 05" desc="Incident detail" />
              <WireframePlaceholder title="Wireframe 06" desc="Reporting form" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 30 — KPI LOGIC & 31 - COMPONENT THINKING */}
      <section className="py-24 px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="mb-24">
            <SectionHeader 
              title="30 — KPI Logic"
              heading="KPIs derived from Responsibility"
            />
            
            <div className="flex flex-wrap items-center gap-4 font-clash tracking-widest text-sm text-white/50 mb-16">
              <span>ROLE</span> <span className="text-primary">→</span>
              <span>RESPONSIBILITY</span> <span className="text-primary">→</span>
              <span>DECISION</span> <span className="text-primary">→</span>
              <span>INFORMATION</span> <span className="text-primary">→</span>
              <span className="text-white">KPI</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <KPICard 
                role="RO" 
                scope="Station / Personal"
                kpis={['My Reports', 'Drafts', 'In Progress', 'Closed', 'Station Safety', 'Resolution Time']}
              />
              <KPICard 
                role="ASR" 
                scope="Area / Operational"
                kpis={['Assigned', 'Overdue', 'Escalated', 'Resolution Rate', 'Response Time', 'Station Performance']}
              />
              <KPICard 
                role="HO" 
                scope="Enterprise / Strategic"
                kpis={['Total Incidents', 'Critical Incidents', 'SLA', 'Repeat Patterns', 'Regional Risk', 'Business Impact']}
              />
            </div>
          </div>

          <div>
            <SectionHeader 
              title="31 — Component Thinking"
            />
            <div className="flex flex-wrap items-center gap-4 font-clash tracking-widest text-sm text-white/50 mb-12">
              <span>FOUNDATIONS</span> <span className="text-primary">→</span>
              <span>CORE COMPONENTS</span> <span className="text-primary">→</span>
              <span>IMS PATTERNS</span> <span className="text-primary">→</span>
              <span>ROLE MODULES</span> <span className="text-primary">→</span>
              <span className="text-white">SCREENS</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {['KPI card', 'Incident card', 'Severity badge', 'Status', 'Action state', 'SLA', 'Timeline', 'Event log', 'Evidence', 'Remarks', 'Approval chain', 'Decision guardrail', 'Achievement', 'Incident table', 'Grid/list switch'].map((comp, i) => (
                <span key={i} className="px-4 py-2 bg-card border border-white/10 rounded-full text-sm text-white/70 font-light">{comp}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 32 — DESIGN PRINCIPLES */}
      <section className="py-32 bg-card text-foreground px-8 md:px-14 lg:px-20 text-center">
        <ScrollReveal>
          <SectionHeader 
            title="32 — Design Principles"
            className="items-center text-center"
          />
          
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-left">
            <Principle num="01" text="Design for the role, not the database." />
            <Principle num="02" text="Show the next action, not just the current status." />
            <Principle num="03" text="Context before consequence." />
            <Principle num="04" text="Keep evidence connected." />
            <Principle num="05" text="Reduce cognitive load at the frontline." />
            <Principle num="06" text="Increase analytical depth with organizational scope." />
            <Principle num="07" text="Make important actions traceable." />
            <Principle num="08" text="Turn incident data into organizational learning." />
            <Principle num="09" text="Use recognition to encourage better reporting." />
            <Principle num="10" text="Design for prevention, not just response." />
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

// Subcomponents

function FlowColumn({ role, steps }) {
  return (
    <div className="bg-card border border-white/10 rounded-2xl p-8 flex flex-col items-center">
      <h3 className="font-clash text-2xl text-primary mb-8">{role}</h3>
      <div className="flex flex-col gap-4 relative w-full items-center">
        {/* Connecting line */}
        <div className="absolute top-4 bottom-4 w-px bg-white/10 left-1/2 -translate-x-1/2"></div>
        {steps.map((step, i) => (
          <div key={i} className="relative z-10 bg-background border border-white/20 px-6 py-3 rounded-full text-sm text-white/80 w-4/5 text-center shadow-lg">
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}

function JourneyRow({ role, content }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
      <div className="w-24 flex-shrink-0 font-clash text-2xl text-primary">{role}</div>
      <div className="flex-1 text-white/60 font-light text-sm italic border-l border-white/10 pl-6 flex items-center">
        {content}
      </div>
    </div>
  );
}

function WireframePlaceholder({ title, desc }) {
  return (
    <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between group hover:border-primary/50 transition-colors">
      <div className="w-full flex-1 border-2 border-dashed border-white/10 rounded-xl mb-4 flex items-center justify-center opacity-50">
        <span className="text-white/20 text-4xl">⚏</span>
      </div>
      <div className="text-left">
        <h5 className="font-clash text-white mb-1 group-hover:text-primary transition-colors">{title}</h5>
        <p className="text-xs text-white/50 font-light">{desc}</p>
      </div>
    </div>
  );
}

function KPICard({ role, scope, kpis }) {
  return (
    <div className="p-8 border border-white/10 rounded-2xl bg-card">
      <div className="font-clash text-2xl text-primary mb-1">{role}</div>
      <div className="text-xs text-white/40 uppercase tracking-widest mb-8">{scope}</div>
      <ul className="space-y-4">
        {kpis.map((kpi, i) => (
          <li key={i} className="text-white/80 font-light text-sm flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
            {kpi}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Principle({ num, text }) {
  return (
    <div className="flex gap-6">
      <div className="font-clash text-4xl opacity-30">{num}</div>
      <div className="font-clash text-2xl md:text-3xl font-medium leading-snug">{text}</div>
    </div>
  );
}

