import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';
import SectionHeader from '../common/SectionHeader';

export default function Phase2Research() {
  return (
    <div className="w-full bg-background text-foreground">
      
      {/* 16 — RESEARCH QUESTIONS */}
      <section className="py-20 px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto border-t border-white/5">
        <ScrollReveal>
          <SectionHeader 
            title="16 — Research Questions"
            heading="Moving from interface to operation"
            className="text-center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <QuestionCard num="01" q="How does an incident move through the organization from initial observation to resolution?" />
            <QuestionCard num="02" q="What does each role need to know at each point of the lifecycle?" />
            <QuestionCard num="03" q="Where does the existing interface create unnecessary cognitive load?" />
            <QuestionCard num="04" q="Which information should be visible immediately, and which should be progressively disclosed?" />
            <QuestionCard num="05" q="How can the system communicate ownership, state and next action?" />
            <QuestionCard num="06" q="How can resolved incidents contribute to organizational learning?" />
          </div>
        </ScrollReveal>
      </section>

      {/* 17 — RESEARCH METHOD */}
      <section className="py-20 bg-card px-8 md:px-14 lg:px-20">
        <ScrollReveal>
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 sticky top-32">
              <SectionHeader 
                title="17 — Research Method"
                heading="A Workflow-Centric Approach"
                description="The methodology relied heavily on deconstructing the legacy system to map the underlying operational requirements, then projecting those requirements onto industry-standard safety architectures."
              />
            </div>
            
            <div className="md:w-2/3 grid grid-cols-2 gap-x-8 gap-y-12">
              <MethodGroup 
                title="Discovery & Audit" 
                methods={['Desk / system research', 'Existing-system walkthrough', 'Legacy screen audit', 'Workflow reconstruction', 'Information inventory', 'Role analysis']} 
              />
              <MethodGroup 
                title="Strategy" 
                methods={['Heuristic evaluation', 'Competitive benchmark', 'UX pattern analysis', 'Design research', 'Information architecture', 'Role mapping']} 
              />
              <MethodGroup 
                title="Design" 
                methods={['User flows', 'Low-fidelity exploration', 'Component modeling', 'Data visualization exploration']} 
              />
              <MethodGroup 
                title="Validation" 
                methods={['Task-based walkthroughs', 'Heuristic re-evaluation', 'Accessibility review', 'Responsive review']} 
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 18 — COMPETITIVE / INDUSTRY BENCHMARK */}
      <section className="py-24 px-8 md:px-14 lg:px-20 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionHeader 
            title="18 — Industry Benchmark"
            heading="What mature EHS products taught me"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <BenchmarkCard title="ServiceNow" desc="Current Health & Safety Incident Management material describes incident/observation management, supporting documentation, investigations, root-cause analysis and corrective/preventive actions." />
            <BenchmarkCard title="Cority" desc="Cority emphasizes real-time incident capture, standardized investigations, root-cause analysis, corrective actions, CAPA and analytics." />
            <BenchmarkCard title="SafetyCulture" desc="SafetyCulture connects investigation workflows with assigned corrective actions and responsibility." />
          </div>

          <div className="bg-card border border-white/10 rounded-2xl p-10 text-center">
            <h3 className="text-primary font-clash mb-8 text-lg">Validated Industry Lifecycle Pattern</h3>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 font-clash tracking-widest text-sm text-white/80">
              {['REPORT', 'INVESTIGATE', 'UNDERSTAND ROOT CAUSE', 'CORRECT', 'VERIFY', 'LEARN', 'PREVENT'].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <span>{step}</span>
                  {i < arr.length - 1 && <span className="text-white/20">→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 19 & 20 — ROLE MAPPING & MENTAL MODEL */}
      <section className="py-24 bg-card px-8 md:px-14 lg:px-20">
        <ScrollReveal>
          <div className="max-w-[1200px] mx-auto space-y-32">
            
            {/* 19 — ROLE MAPPING */}
            <div>
              <SectionHeader 
                title="19 — Stakeholder / Role Mapping"
                heading="The Escalation Chain"
              />
              
              <div className="flex flex-col md:flex-row gap-6 mb-12 overflow-x-auto pb-4">
                <RoleChainItem title="RO" scope="One outlet" />
                <RoleChainArrow />
                <RoleChainItem title="ASR" scope="Multiple outlets" />
                <RoleChainArrow />
                <RoleChainItem title="SOM" scope="Operational area" />
                <RoleChainArrow />
                <RoleChainItem title="SH" scope="State" />
                <RoleChainArrow />
                <RoleChainItem title="HO" scope="Enterprise" />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-white font-clash">
                      <th className="py-4 px-6 font-medium">Role</th>
                      <th className="py-4 px-6 font-medium">Scope</th>
                      <th className="py-4 px-6 font-medium">Primary mode</th>
                      <th className="py-4 px-6 font-medium">Key question</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-light text-white/70">
                    <RoleRow role="RO" scope="One outlet" mode="Act" question="What happened here?" />
                    <RoleRow role="ASR" scope="Multiple outlets" mode="Decide" question="What needs my attention?" />
                    <RoleRow role="SOM" scope="Operational area" mode="Review" question="What needs escalation?" />
                    <RoleRow role="SH" scope="State" mode="Oversee" question="Where is risk increasing?" />
                    <RoleRow role="HO" scope="Enterprise" mode="Govern" question="What patterns affect the business?" />
                  </tbody>
                </table>
              </div>
            </div>

            {/* 20 — MENTAL MODEL */}
            <div>
              <SectionHeader title="20 — User Mental Model" />
              <div className="flex flex-col gap-8 max-w-2xl mx-auto items-center">
                <MentalModelBox role="RO" quote="I need to REPORT this." />
                <span className="text-primary">↓</span>
                <MentalModelBox role="ASR" quote="I need to UNDERSTAND and ACT." />
                <span className="text-primary">↓</span>
                <MentalModelBox role="SOM / SH" quote="I need to REVIEW and ESCALATE." />
                <span className="text-primary">↓</span>
                <MentalModelBox role="HO" quote="I need to IDENTIFY PATTERNS and GOVERN." />
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 21 & 22 — SYNTHESIS & INSIGHTS */}
      <section className="py-24 px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <SectionHeader 
            heading="The Eight Pillars of the Redesign"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InsightCard num="01" theme="Lifecycle" insight="Incident management is a lifecycle, not a form." />
            <InsightCard num="02" theme="Scale" insight="Role determines information density." />
            <InsightCard num="03" theme="State" insight="Status is not enough. Users need: Status + Owner + Next Action + SLA." />
            <InsightCard num="04" theme="Context" insight="Decisions need context." />
            <InsightCard num="05" theme="Ownership" insight="Evidence should remain connected to the incident." />
            <InsightCard num="06" theme="Abstraction" insight="Information needs multiple levels of abstraction (Incident → Station → Area → State → Enterprise)." />
            <InsightCard num="07" theme="Learning" insight="Resolution should create learning." />
            <InsightCard num="08" theme="Engagement" insight="Safety participation should be positively reinforced." />
          </div>
        </ScrollReveal>
      </section>

      {/* 23 — PROBLEM -> INSIGHT -> DESIGN RESPONSE */}
      <section className="py-24 bg-card px-8 md:px-14 lg:px-20">
        <ScrollReveal>
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader 
              title="23 — Design Bridge"
              heading="Problem → Insight → Design Response"
              description="How observations from the legacy system translated directly into product features."
            />

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/20">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-white font-clash bg-white/[0.02]">
                    <th className="py-6 px-6 font-medium w-1/3">Existing Problem</th>
                    <th className="py-6 px-6 font-medium w-1/3">UX Insight</th>
                    <th className="py-6 px-6 font-medium text-primary w-1/3">Design Response</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-light">
                  <BridgeRow p="Long incident form" i="Users need progressive structure" d="Guided reporting flow" />
                  <BridgeRow p="Dense information" i="Role changes information needs" d="Role-based dashboards" />
                  <BridgeRow p="Status without context" i="Status alone doesn't explain action" d="Status + owner + next action + SLA" />
                  <BridgeRow p="Evidence buried in modal" i="Decisions need context" d="Unified incident record" />
                  <BridgeRow p="Long category lists" i="Users need easier recognition" d="Structured taxonomy" />
                  <BridgeRow p="Repeated actions" i="High-risk actions need context" d="Review & Act pattern" />
                  <BridgeRow p="Resolved records become history" i="Organization needs memory" d="Learning module" />
                  <BridgeRow p="Reporting can feel transactional" i="Safety behavior benefits from reinforcement" d="Recognition system" />
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

// Subcomponents

function QuestionCard({ num, q }) {
  return (
    <div className="p-8 rounded-2xl bg-card border border-white/10 flex flex-col gap-4">
      <span className="text-primary font-clash text-xl opacity-50">{num}</span>
      <p className="text-white/90 font-light leading-relaxed">{q}</p>
    </div>
  );
}

function MethodGroup({ title, methods }) {
  return (
    <div>
      <h5 className="font-clash text-white text-lg mb-4">{title}</h5>
      <ul className="space-y-3">
        {methods.map((m, i) => (
          <li key={i} className="text-white/60 font-light text-sm flex gap-3">
            <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-white/20 flex-shrink-0" />
            <span>{m}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenchmarkCard({ title, desc }) {
  return (
    <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
      <h4 className="text-xl font-clash text-white mb-4">{title}</h4>
      <p className="text-white/60 font-light text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function RoleChainItem({ title, scope }) {
  return (
    <div className="flex-1 min-w-[120px] bg-white/5 border border-white/10 rounded-xl p-4 text-center">
      <div className="font-clash text-white text-xl mb-1">{title}</div>
      <div className="text-xs text-white/40 uppercase tracking-widest">{scope}</div>
    </div>
  );
}

function RoleChainArrow() {
  return <div className="hidden md:flex items-center text-primary/50">→</div>;
}

function RoleRow({ role, scope, mode, question }) {
  return (
    <tr className="hover:bg-white/[0.02] transition-colors">
      <td className="py-4 px-6 text-white font-clash">{role}</td>
      <td className="py-4 px-6 text-white/60">{scope}</td>
      <td className="py-4 px-6 text-white/60">{mode}</td>
      <td className="py-4 px-6 text-primary">{question}</td>
    </tr>
  );
}

function MentalModelBox({ role, quote }) {
  return (
    <div className="w-full max-w-md bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
      <div className="text-primary font-clash mb-2">{role}</div>
      <div className="text-white text-lg font-light italic">"{quote}"</div>
    </div>
  );
}

function InsightCard({ num, theme, insight }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-white/10 flex flex-col gap-4 relative overflow-hidden group hover:border-primary/30 transition-colors">
      <div className="absolute top-0 right-0 p-4 font-clash text-6xl text-white/[0.02] group-hover:text-primary/[0.05] transition-colors">{num}</div>
      <div className="text-xs font-clash uppercase tracking-widest text-primary mb-2 relative z-10">{theme}</div>
      <p className="text-white/90 font-light text-sm leading-relaxed relative z-10">{insight}</p>
    </div>
  );
}

function BridgeRow({ p, i, d }) {
  return (
    <tr className="hover:bg-white/[0.02] transition-colors">
      <td className="py-6 px-6 text-white/80">{p}</td>
      <td className="py-6 px-6 text-white/80">{i}</td>
      <td className="py-6 px-6 text-primary font-medium">{d}</td>
    </tr>
  );
}
