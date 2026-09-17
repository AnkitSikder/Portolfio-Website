import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';
import SectionHeader from '../common/SectionHeader';

export default function Phase4Outcomes() {
  return (
    <div className="w-full bg-background text-foreground">
      
      {/* 33 — FINAL UI TRANSITION */}
      <section className="py-32 px-8 md:px-14 lg:px-20 text-center">
        <ScrollReveal>
          <SectionHeader 
            title="33 — The Final UI"
            heading="From Research to Interface"
            description="The resulting product was not just a modernized aesthetic, but a completely restructured operational tool."
            className="items-center text-center max-w-[800px] mx-auto mb-16"
          />
          <div className="max-w-[1200px] mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/jio-bp/Slide 16_9 - 4.jpg" 
              alt="Final UI Transition - From Research to Interface" 
              className="w-full h-auto object-cover"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* 34, 35, 36 — ROLE DASHBOARDS */}
      <section className="pb-32 px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto space-y-32">
        <UIShowcase 
          num="34"
          title="RO Dashboard"
          subtitle="Designed for the frontline."
          question="How is my station doing, and what do I need to do?"
          annotations={['Personal reporting', 'Drafts', 'Station safety', 'Resolution', 'Heatmap', 'Recognition']}
          explanation="Deliberately not overloaded with enterprise analytics to maintain focus on immediate operational reality."
        />
        
        <UIShowcase 
          num="35"
          title="ASR Dashboard"
          subtitle="Designed for operational decisions."
          question="What requires my attention, and what should happen next?"
          annotations={['KPI layer', 'Assigned incidents', 'Overdue', 'Severity', 'Station performance', 'Action queue']}
          explanation="Central interaction concept: Review & Act."
        />
        
        <UIShowcase 
          num="36"
          title="HO Dashboard"
          subtitle="Designed for enterprise intelligence."
          question="Where is risk increasing, and what patterns need leadership attention?"
          annotations={['Regional view', 'State performance', 'Category', 'Severity', 'Map', 'Business impact']}
        />
      </section>

      {/* 37 — INCIDENT DETAIL */}
      <section className="py-32 bg-card px-8 md:px-14 lg:px-20">
        <ScrollReveal>
          <div className="max-w-[1200px] mx-auto text-center">
            <SectionHeader 
              title="37 — Incident Detail"
              heading="The Single Source of Truth"
              className="items-center text-center"
            />
            
            <div className="flex flex-wrap justify-center items-center gap-3 font-clash tracking-widest text-sm text-white/80 mb-12">
              {['CONTEXT', 'EVIDENCE', 'STATUS', 'OWNER', 'REMARKS', 'TIMELINE', 'ACTION', 'RESOLUTION', 'LEARNING'].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <span className="bg-white/5 px-3 py-1 rounded-md border border-white/10">{step}</span>
                  {i < arr.length - 1 && <span className="text-primary">+</span>}
                </React.Fragment>
              ))}
            </div>
            
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto italic">
              "The incident detail became the single source of truth behind every decision. This is a powerful result of the research."
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 38 — REPORTING EXPERIENCE REDESIGN */}
      <section className="py-32 px-8 md:px-14 lg:px-20 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionHeader 
            title="38 — Reporting Experience Redesign"
            heading="Structuring the Journey"
          />
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border border-white/10 rounded-2xl p-10 bg-red-900/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-red-500/50 font-clash tracking-widest text-sm">BEFORE</div>
              <h3 className="text-2xl font-clash text-white mb-6">Long continuous form</h3>
              <div className="w-full h-[400px] bg-black/40 rounded-xl border border-white/5 flex flex-col gap-2 p-4 opacity-50">
                {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                  <div key={i} className="w-full h-8 bg-white/5 rounded"></div>
                ))}
              </div>
            </div>
            
            <div className="border border-primary/30 rounded-2xl p-10 bg-primary/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-primary/70 font-clash tracking-widest text-sm">AFTER</div>
              <h3 className="text-2xl font-clash text-white mb-6">Structured reporting journey</h3>
              <ul className="space-y-6">
                {[
                  '1. CONTEXT', '2. INCIDENT', '3. IMPACT', 
                  '4. RESPONSE', '5. EVIDENCE', '6. REVIEW', '7. SUBMIT'
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-clash text-white/90">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 39, 40, 41 — SAFETY, LOG, LEARNING */}
      <section className="py-32 bg-card px-8 md:px-14 lg:px-20 border-t border-white/5">
        <ScrollReveal>
          <div className="max-w-[1200px] mx-auto space-y-32">
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeader 
                  title="39 — Safety Engagement & Recognition"
                  heading="Encouraging better safety participation"
                />
                <div className="flex flex-col gap-3 font-clash tracking-widest text-sm text-white/50 mb-8">
                  <span>OBSERVE <span className="text-primary inline-block ml-2">↓</span></span>
                  <span>REPORT <span className="text-primary inline-block ml-2">↓</span></span>
                  <span>FEEDBACK <span className="text-primary inline-block ml-2">↓</span></span>
                  <span>RECOGNITION <span className="text-primary inline-block ml-2">↓</span></span>
                  <span className="text-white">SAFETY HABIT</span>
                </div>
                <p className="text-white/60 font-light text-sm italic">Not positioned as "game mechanics", but as intrinsic behavioral reinforcement.</p>
              </div>
              <div className="h-[300px] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-white/20 font-clash">[ Achievement UI Placeholder ]</div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
              <div className="order-2 md:order-1 h-[400px] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-white/20 font-clash">[ Timeline UI Placeholder ]</div>
              <div className="order-1 md:order-2">
                <SectionHeader 
                  title="40 — Event Log"
                  heading="Traceable History"
                />
                <p className="text-lg text-white/80 font-light mb-8">Every important action creates a traceable history.</p>
                <ul className="space-y-4 text-white/60 font-light border-l border-white/10 pl-6 relative">
                  <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 to-transparent -translate-x-px"></div>
                  {['Incident submitted', 'Assigned', 'Remark added', 'Escalated', 'Corrective action', 'Evidence uploaded', 'Closed'].map((s,i) => (
                    <li key={i} className="relative">
                      <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-card border border-primary"></div>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <SectionHeader 
                title="41 — Learning from Incidents"
                heading="From Response to Prevention"
                className="items-center text-center"
              />
              <div className="flex flex-wrap justify-center items-center gap-3 font-clash tracking-widest text-sm text-white/50 mb-12">
                {['INCIDENT', 'ROOT CAUSE', 'CORRECTIVE ACTION', 'VERIFICATION', 'LESSON', 'SOP / POLICY', 'TRAINING', 'PREVENTION'].map((step, i, arr) => (
                  <React.Fragment key={i}>
                    <span className={i === arr.length - 1 ? 'text-primary' : ''}>{step}</span>
                    {i < arr.length - 1 && <span className="text-primary">→</span>}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-xl text-white/80 font-light italic">
                This isn't merely a "knowledge page". It's the point where the product moves from responding to incidents, to learning from incidents.
              </p>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 42 — VALIDATION */}
      <section className="py-32 px-8 md:px-14 lg:px-20 max-w-[1200px] mx-auto border-t border-white/5">
        <ScrollReveal>
          <SectionHeader 
            title="42 — Validation"
            heading="Evaluation Framework"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ValidationCol role="RO Tasks" tasks={['Report incident', 'Save draft', 'Find previous report', 'Check station safety', 'View achievement']} />
            <ValidationCol role="ASR Tasks" tasks={['Find assigned incident', 'Review evidence', 'Add remark', 'Decide', 'Escalate', 'Find high-risk station']} />
            <ValidationCol role="HO Tasks" tasks={['Identify high-risk region', 'Compare states', 'Inspect category', 'Trace incident', 'Find SOP']} />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center bg-card p-10 rounded-3xl border border-white/10">
            <div>
              <h3 className="text-2xl font-clash text-white mb-6">Metrics Tracked</h3>
              <ul className="grid grid-cols-2 gap-3 text-white/60 font-light">
                <li>• Task completion</li>
                <li>• Time on task</li>
                <li>• Error rate</li>
                <li>• Findability</li>
                <li>• Comprehension</li>
                <li>• Decision accuracy</li>
                <li>• Confidence</li>
              </ul>
            </div>
            <div className="border-l border-white/10 pl-10">
              <h3 className="text-lg font-clash text-primary mb-2">Strongest Metric: Time to Decide</h3>
              <div className="flex flex-col gap-2 font-clash tracking-widest text-sm text-white/80 mb-4 mt-6">
                <span>OPEN INCIDENT <span className="text-white/30 ml-2">↓</span></span>
                <span>UNDERSTAND CONTEXT <span className="text-white/30 ml-2">↓</span></span>
                <span className="text-primary">CHOOSE CORRECT ACTION</span>
              </div>
              <p className="text-sm text-white/50 font-light">This was specifically identified as the most meaningful ASR metric.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 45 & 46 — OUTCOME & REFLECTION */}
      <section className="py-32 bg-card text-foreground px-8 md:px-14 lg:px-20">
        <ScrollReveal>
          <div className="max-w-[1000px] mx-auto text-center">
            
            <div className="mb-32">
              <SectionHeader 
                title="45 — Outcome"
                heading="Designed to Achieve:"
                className="items-center text-center"
              />
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 text-left max-w-3xl mx-auto">
                <OutcomeItem text="Faster frontline reporting" />
                <OutcomeItem text="Clearer role-based decisions" />
                <OutcomeItem text="Better ownership visibility" />
                <OutcomeItem text="Stronger incident traceability" />
                <OutcomeItem text="More actionable analytics" />
                <OutcomeItem text="Improved organizational learning" />
                <OutcomeItem text="Greater safety participation" />
              </div>
            </div>

            <div>
              <SectionHeader 
                title="46 — Final Reflection"
                heading="I started by redesigning an incident dashboard. I ended up redesigning how incident information moves through an organization."
                className="items-center text-center"
              />
              <p className="text-xl md:text-2xl font-light text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                "The most important lesson was that enterprise UX isn't about giving everyone more information. It's about giving every role the right information at the right level of responsibility."
              </p>
            </div>

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

// Subcomponents

function UIShowcase({ num, title, subtitle, question, annotations, explanation }) {
  return (
    <div className="border border-white/10 bg-card rounded-3xl overflow-hidden">
      <div className="p-8 md:p-12 border-b border-white/10 flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
        <div>
          <h4 className="text-primary font-clash tracking-[0.2em] uppercase text-sm mb-2">{num} — {title}</h4>
          <h3 className="text-2xl md:text-4xl font-clash text-white mb-2">{subtitle}</h3>
          <p className="text-white/60 font-light italic">"{question}"</p>
        </div>
        {explanation && <p className="text-sm text-white/50 max-w-sm text-right hidden md:block">{explanation}</p>}
      </div>
      
      <div className="relative w-full aspect-video bg-black/50 flex items-center justify-center p-8">
        <div className="absolute inset-0 flex items-center justify-center opacity-30 text-white/30 font-clash text-xl tracking-widest border-2 border-dashed border-white/10 m-8 rounded-xl">
          [ {title} UI Placeholder ]
        </div>
        <div className="relative z-10 flex flex-wrap justify-center gap-3">
          {annotations && annotations.map((ann, i) => (
            <span key={i} className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-xs font-clash text-white shadow-lg">
              + {ann}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ValidationCol({ role, tasks }) {
  return (
    <div>
      <h3 className="font-clash text-xl text-primary mb-6">{role}</h3>
      <ul className="space-y-4">
        {tasks.map((task, i) => (
          <li key={i} className="flex gap-3 text-white/80 font-light text-sm">
            <span className="text-white/20">→</span>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

function OutcomeItem({ text }) {
  return (
    <div className="flex items-center gap-4 border-b border-foreground/10 pb-4">
      <div className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center text-foreground font-bold">✓</div>
      <span className="text-lg md:text-xl font-clash">{text}</span>
    </div>
  );
}

