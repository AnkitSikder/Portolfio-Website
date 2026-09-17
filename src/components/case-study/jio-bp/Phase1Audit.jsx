import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';
import SectionHeader from '../common/SectionHeader';

export default function Phase1Audit() {
  return (
    <div className="w-full bg-background text-foreground">
      
      {/* 04 — EXISTING IMS AUDIT */}
      <section className="py-20 md:py-32 px-8 md:px-14 lg:px-20 max-w-[1400px] mx-auto border-t border-white/5">
        <ScrollReveal>
          <SectionHeader 
            title="04 — Existing IMS Audit"
            heading="BEFORE — EXISTING IMS"
            description="Analyzing the existing legacy system revealed a functional but fragmented interface. The system supported all necessary workflows, but the execution created high cognitive load."
          />
          
          <div className="relative w-full rounded-2xl bg-card border border-white/10 p-8 md:p-16 flex items-center justify-center min-h-[600px] overflow-hidden">
            {/* Placeholder for annotated legacy screenshots */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale mix-blend-overlay"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <AnnotationCard number="1" text="Long vertically-scrolling workflow" />
              <AnnotationCard number="2" text="Repeated actions at multiple points" />
              <AnnotationCard number="3" text="Weak section hierarchy" />
              <AnnotationCard number="4" text="Dense category selection" />
              <AnnotationCard number="5" text="Limited progress visibility" />
              <AnnotationCard number="6" text="Context hidden inside overlays" />
              <AnnotationCard number="7" text="Sparse incident-list state" />
              <AnnotationCard number="8" text="CAPTCHA-heavy login" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 05 — SCREEN-BY-SCREEN UX AUDIT */}
      <section className="py-20 px-8 md:px-14 lg:px-20 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <SectionHeader 
            title="05 — Screen-by-Screen UX Audit"
            heading="Screen 01 — Report an Incident"
            description="The form begins with Business Type, Marketing State, Location, Title, Incident Date, Product and Incident Description, followed by creation controls."
          />

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-card p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-clash text-green-400 mb-6">What Worked (Good)</h3>
              <ul className="space-y-6">
                <li>
                  <strong className="block text-white mb-1">Match to domain</strong>
                  <span className="text-white/60 text-sm">The form exposes domain-specific fields rather than generic contact-style inputs.</span>
                </li>
                <li>
                  <strong className="block text-white mb-1">Clear primary task</strong>
                  <span className="text-white/60 text-sm">The screen clearly communicates that the user is creating/reporting an incident.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-clash text-red-400 mb-6">Problems</h3>
              <ul className="space-y-6">
                <li>
                  <strong className="block text-white mb-1">Long-form cognitive load</strong>
                  <span className="text-white/60 text-sm">Multiple pieces of information are presented together without a strong progressive structure.</span>
                </li>
                <li>
                  <strong className="block text-white mb-1">Weak grouping</strong>
                  <span className="text-white/60 text-sm">Business context, incident identification and description are visually present, but the hierarchy between them is not particularly strong.</span>
                </li>
                <li>
                  <strong className="block text-white mb-1">Progression is unclear</strong>
                  <span className="text-white/60 text-sm">The form becomes much longer later in the flow, but there is no strong persistent sense of "where am I?"</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-lg font-clash uppercase tracking-widest text-white/40 mb-6">Relevant Heuristics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <HeuristicCard code="H2" title="Match with real world" desc="Domain terminology is relevant." />
              <HeuristicCard code="H6" title="Recognition over recall" desc="Needs better grouping and helper text." />
              <HeuristicCard code="H8" title="Aesthetic & minimal" desc="Visually heavy experience." />
              <HeuristicCard code="H7" title="Flexibility & efficiency" desc="Structured progression needed." />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 06 & 07 — MULTI-STAGE FORM & HEURISTIC ANALYSIS */}
      <section className="py-20 bg-card px-8 md:px-14 lg:px-20">
        <ScrollReveal>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div>
                <SectionHeader 
                  title="06 — Create Incident"
                  heading="A Multi-Stage Form Disguised as a Canvas"
                  description="The reporting experience is not a single form. It is effectively a multi-stage workflow presented as one long canvas. This leads to a massive cognitive burden."
                />
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="font-clash text-primary mb-3">Design Implication</h3>
                  <p className="text-white/80 font-light text-sm italic">
                    Instead of asking: "How do I make this form prettier?"<br/><br/>
                    Ask: "How do I turn a long data-entry surface into a comprehensible incident-reporting journey?"
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <span className="text-xs uppercase tracking-widest text-white/40">This leads naturally to:</span>
                {['Progressive disclosure', 'Logical sections', 'Clear stage hierarchy', 'Persistent progress', 'Contextual validation', 'Save-and-resume', 'Evidence at the appropriate stage'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-white/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 07 — TABLE */}
            <div className="mb-8">
              <SectionHeader 
                title="07 — Heuristic Analysis of the Create Incident Flow"
              />
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-white/70 border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-4 px-6 font-clash font-medium text-white">Heuristic</th>
                      <th className="py-4 px-6 font-clash font-medium text-white">Existing Observation</th>
                      <th className="py-4 px-6 font-clash font-medium text-white">UX Implication</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-light">
                    <TableRow h="Visibility of system status" obs="Long form gives weak sense of progression" imp="Add stage/progress visibility" />
                    <TableRow h="Match with real world" obs="HSE terms are domain-specific and useful" imp="Preserve domain language" />
                    <TableRow h="User control" obs="Draft exists, which is good" imp="Make save/resume state more explicit" />
                    <TableRow h="Consistency" obs="Repeated Draft / Final Submit controls" imp="Consolidate action model" />
                    <TableRow h="Error prevention" obs="Many fields across long flow" imp="Validate progressively" />
                    <TableRow h="Recognition vs recall" obs="User must remember what info belongs where" imp="Group fields into meaningful stages" />
                    <TableRow h="Flexibility" obs="Draft capability helps" imp="Support resume later" />
                    <TableRow h="Minimalist design" obs="Very dense long-form canvas" imp="Reduce simultaneous cognitive load" />
                    <TableRow h="Error recovery" obs="Validation/state feedback is not prominent" imp="Make errors local and recoverable" />
                    <TableRow h="Help/documentation" obs="Little contextual guidance visible" imp="Add field-level guidance where necessary" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 08 - 15 COMPONENT AUDITS */}
      <section className="py-20 px-8 md:px-14 lg:px-20 max-w-[1200px] mx-auto space-y-32">
        <AuditSection 
          num="08" 
          title="Category Selection Audit"
          insight="The system contains meaningful safety taxonomy, which is valuable. But the interaction is essentially: Large list → scan → select rather than: Understand category → narrow choices → select confidently."
          good={["Strong domain specificity.", "The categories themselves reflect actual incident-management concepts."]}
          problems={["Long scanning burden", "Weak categorization hierarchy", "Little contextual guidance", "Selection takes place in a visually plain list", "It can be hard to understand where the user is within the overall report flow"]}
          heuristics={["H6 — Recognition rather than recall", "H8 — Aesthetic and minimalist design", "H7 — Flexibility and efficiency"]}
        />

        <AuditSection 
          num="09 & 10" 
          title="Incident Impact, Details & Property Damage"
          insight="Incident reporting is not just about recording what happened. It is about capturing consequence, response and escalation context."
          architecture={["WHAT HAPPENED?", "HOW SEVERE?", "WHAT WAS THE IMPACT?", "WHAT WAS DONE?", "WHAT IS NEEDED NEXT?"]}
          opportunity="The form is attempting to become context-sensitive, which is good. The problem is that conditional complexity is embedded inside the long-form experience. Reveal only the information relevant to the selected incident category."
        />

        <AuditSection 
          num="11" 
          title="Incident List Audit"
          insight="This section shows the existing system already had the right basic concepts (All, My, Assigned), even though the UX could be improved."
          good={["Multiple user perspectives (Awareness of roles)", "Explicit status model (New/In progress/Closed)", "Search and Export functionality"]}
          problems={["Information hierarchy is weak (content area is sparse)", "Status vs Action is unclear (What should I do next?)", "Filter semantics are disconnected from status", "Empty state offers no explanation"]}
        />

        <AuditSection 
          num="12" 
          title="Login Audit"
          insight="A familiar split-layout authentication pattern, but with friction points."
          good={["Strong product identity", "Familiar authentication pattern", "Password visibility and Forgot password pathways"]}
          problems={["Large unused visual area on the left", "CAPTCHA adds interaction cost", "Weak field affordances (thin bottom-border inputs)"]}
          opportunity="Redesigning adds another authentication pathway with OTP, creating a meaningful UX improvement rather than merely a visual refresh."
        />

        <div className="grid md:grid-cols-2 gap-16">
          <AuditSection 
            num="13" 
            title="Remark Modal"
            insight="A good UX pattern: Contextual incident info without leaving the screen (Underlying Incident + Contextual Action + Focused Input)."
            problems={["Large modal relative to task", "Generic action wording", "Little visible feedback after submission", "Broader incident history not shown"]}
          />
          <AuditSection 
            num="14" 
            title="Attachment / Document Modal"
            insight="The system recognizes evidence as part of the record, but interaction feels like an administrative upload form."
            opportunity="Turn 'UPLOAD FILE' into 'ADD EVIDENCE' (Photo, Video, Inspection) making it a first-class part of incident management."
          />
        </div>

        <AuditSection 
          num="15" 
          title="Business / Product Context Audit"
          insight="The product isn't an isolated incident form. It is an enterprise platform operating across multiple business contexts. That makes role-based Information Architecture even more important."
          isLast
        />

      </section>
    </div>
  );
}

// Subcomponents

function AnnotationCard({ number, text }) {
  return (
    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-clash font-medium text-sm">
        {number}
      </div>
      <span className="text-sm text-white/90 font-light">{text}</span>
    </div>
  );
}

function HeuristicCard({ code, title, desc }) {
  return (
    <div className="p-4 border border-white/10 rounded-lg bg-white/[0.02]">
      <span className="text-primary font-clash font-medium mb-2 block">{code}</span>
      <strong className="block text-white text-sm mb-1 font-clash">{title}</strong>
      <span className="text-white/50 text-xs font-light leading-relaxed">{desc}</span>
    </div>
  );
}

function TableRow({ h, obs, imp }) {
  return (
    <tr className="hover:bg-white/[0.02] transition-colors">
      <td className="py-4 px-6 text-white/90 font-medium">{h}</td>
      <td className="py-4 px-6">{obs}</td>
      <td className="py-4 px-6 text-primary">{imp}</td>
    </tr>
  );
}

function AuditSection({ num, title, insight, good, problems, heuristics, architecture, opportunity, isLast }) {
  return (
    <ScrollReveal>
      <div className={`pb-16 ${!isLast ? 'border-b border-white/5' : ''}`}>
        <SectionHeader 
          title={`${num} — ${title}`}
          description={insight}
        />
        
        {architecture && (
          <div className="flex flex-col items-center sm:flex-row sm:justify-between bg-card border border-white/10 rounded-xl p-8 mb-10 text-center font-clash tracking-widest text-sm text-white/70">
            {architecture.map((step, i) => (
              <React.Fragment key={step}>
                <span>{step}</span>
                {i < architecture.length - 1 && <span className="text-primary hidden sm:block">→</span>}
                {i < architecture.length - 1 && <span className="text-primary sm:hidden my-2">↓</span>}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {good && (
            <div>
              <h5 className="text-green-400 font-clash mb-4">Good Patterns</h5>
              <ul className="space-y-2">
                {good.map((item, i) => <li key={i} className="text-white/60 font-light text-sm flex gap-3"><span className="text-green-500/50">✓</span> {item}</li>)}
              </ul>
            </div>
          )}
          {problems && (
            <div>
              <h5 className="text-red-400 font-clash mb-4">Problems</h5>
              <ul className="space-y-2">
                {problems.map((item, i) => <li key={i} className="text-white/60 font-light text-sm flex gap-3"><span className="text-red-500/50">✕</span> {item}</li>)}
              </ul>
            </div>
          )}
        </div>

        {opportunity && (
          <div className="mt-10 p-6 bg-primary/10 border border-primary/20 rounded-xl">
            <h5 className="text-primary font-clash mb-2">Design Opportunity</h5>
            <p className="text-white/80 font-light text-sm">{opportunity}</p>
          </div>
        )}

        {heuristics && (
          <div className="mt-8 flex flex-wrap gap-3">
            {heuristics.map((h, i) => (
              <span key={i} className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/50 tracking-wide font-light">{h}</span>
            ))}
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}
