import React, { useEffect } from 'react';
import ProjectHero from '../../components/case-study/ProjectHero';
import ScrollReveal from '../../components/common/ScrollReveal';
import SectionHeader from '../../components/case-study/common/SectionHeader';
import SectionProgressNav from '../../components/case-study/SectionProgressNav';

import CompetitorAnalysis from '../../components/case-study/jio-bp/CompetitorAnalysis';
import KeyOpportunities from '../../components/case-study/jio-bp/KeyOpportunities';
import HeuristicAnalysis from '../../components/case-study/jio-bp/HeuristicAnalysis';
import NextProjectNav from '../../components/case-study/NextProjectNav';

export default function JioBPProject() {
  const navSections = [
    { id: 'project-hero', label: 'Overview' },
    { id: 'about', label: 'The Problem' },
    { id: 'audit', label: 'Existing UI' },
    { id: 'heuristic-analysis', label: 'Heuristic Analysis' },
    { id: 'competitor-analysis', label: 'Competitive Analysis' },
    { id: 'key-opportunities', label: 'Opportunities' },
    { id: 'research', label: 'Research Questions' },
    { id: 'stakeholders', label: 'Stakeholders' },
    { id: 'pillars', label: 'Eight Pillars' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'lifecycle', label: 'Lifecycle' },
    { id: 'wireframes', label: 'Wireframes' },
    { id: 'design-system', label: 'Design System' },
    { id: 'final-ui', label: 'Final UI' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="bg-background min-h-screen">
      <SectionProgressNav sections={navSections} />

      {/* =========================================
          HERO (DO NOT TOUCH)
      ========================================= */}
      <div id="project-hero">
        <ProjectHero
          category="HSE Dashboard Design"
          title="Jio-bp Incident Management System"
          summary="Designing a role-based safety ecosystem from frontline reporting to enterprise intelligence. One incident. Different decisions. One connected lifecycle."
          role="UX / UI Designer"
          duration="2.5 months"
          tools={["Figma", "Claude", "Antigravity", "Stitch", "Lottie Creator", "Procreate"]}
          heroImage="/jio-bp/Mockup_JioBP_3.jpg"
        />
      </div>

      {/* =========================================
          01 — ABOUT THE PROJECT / PROBLEM
      ========================================= */}
      <section id="about" className="py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-foreground/5">
        <ScrollReveal>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] gap-8 mb-10">
              <div>
                <h2 className="font-clash text-sm uppercase tracking-[0.2em] text-primary md:mt-2">The Problem</h2>
              </div>
              <div className="max-w-4xl">
                <SectionHeader 
                  heading="A functional system that needed a better experience."
                />
                <p className="font-clash text-base md:text-lg font-medium tracking-wide text-foreground/70 leading-relaxed mt-6">
                  The existing IMS already supported incident reporting, tracking, attachments, remarks, status and operational workflows. However, the experience required users to work around long forms, unclear hierarchy, dense information, disconnected contextual actions, limited role differentiation, weak prioritization, unclear next actions, and limited analytical depth.
                </p>
                <div className="font-clash text-[20px] md:text-[22px] font-medium tracking-wide text-foreground/80 leading-relaxed border-l-4 border-primary pl-6 py-2 mt-12">
                  <span className="opacity-50 block text-xs uppercase tracking-widest mb-2 font-clash font-medium">The Challenge</span>
                  "The challenge was not to invent an incident-management system from scratch. It was to rethink how incident information moves through the organization."
                </div>
              </div>
            </div>


          </div>
        </ScrollReveal>
      </section>


      <section id="audit" className="py-10 md:py-16 lg:py-20 bg-background overflow-hidden">
        <ScrollReveal>
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 mb-10 md:mb-16">
            <h2 className="font-clash text-sm uppercase tracking-[0.2em] text-primary mb-4">
              The Existing IMS
            </h2>
            <h3 className="font-franchise text-4xl md:text-5xl uppercase tracking-wide text-white leading-tight mb-6">
              WHAT THE EXISTING IMS LOOKS LIKE.
            </h3>
            <p className="font-clash text-base md:text-lg font-medium tracking-wide text-foreground/70 leading-relaxed max-w-3xl">
              The existing platform supported core features like incident reporting, dashboards, and attachments—but the entire experience required structural changes to reduce cognitive load and workflow friction.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="marquee-container overflow-hidden w-full relative mb-6 md:mb-8">
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div 
              className="marquee-content flex gap-6 h-[280px] md:h-[400px] w-max pr-6"
              style={{ animationDuration: '10s' }}
            >
              {[
                'Screenshot 2026-06-02 110114.png',
                'Screenshot 2026-06-02 110440.png',
                'Screenshot 2026-06-02 110521.png',
                'Screenshot 2026-06-02 110522.png',
                'Screenshot 2026-06-10 120927.png',
                'Screenshot 2026-06-10 121016.png',
                'Screenshot 2026-06-10 121040.png',
                'Screenshot 2026-06-10 121104.png',
                'Screenshot 2026-06-10 121205.png',
                'Screenshot 2026-06-10 121230.png',
                'Screenshot 2026-06-10 122333.png',
                'Screenshot 2026-06-10 122401.png',
                'Screenshot 2026-06-10 122539.png',
                'Screenshot 2026-06-10 122607.png',
                // duplicate for infinite scroll
                'Screenshot 2026-06-02 110114.png',
                'Screenshot 2026-06-02 110440.png',
                'Screenshot 2026-06-02 110521.png',
                'Screenshot 2026-06-02 110522.png',
                'Screenshot 2026-06-10 120927.png',
                'Screenshot 2026-06-10 121016.png',
                'Screenshot 2026-06-10 121040.png',
                'Screenshot 2026-06-10 121104.png',
                'Screenshot 2026-06-10 121205.png',
                'Screenshot 2026-06-10 121230.png',
                'Screenshot 2026-06-10 122333.png',
                'Screenshot 2026-06-10 122401.png',
                'Screenshot 2026-06-10 122539.png',
                'Screenshot 2026-06-10 122607.png'
              ].map((src, idx) => (
                <div key={idx} className="relative group rounded-2xl overflow-hidden bg-foreground/5 border border-foreground/10 shadow-lg shrink-0 h-full">
                  <img src={`/jio-bp/screens/old/${src}`} alt={`Existing Screen ${idx + 1}`} className="h-full w-auto object-cover pointer-events-none" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="marquee-container overflow-hidden w-full relative">
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div 
              className="marquee-content flex gap-6 h-[280px] md:h-[400px] w-max pr-6"
              style={{ animationDuration: '12s', animationDirection: 'reverse' }}
            >
              {[
                'Screenshot 2026-06-10 122607.png',
                'Screenshot 2026-06-10 122539.png',
                'Screenshot 2026-06-10 122401.png',
                'Screenshot 2026-06-10 122333.png',
                'Screenshot 2026-06-10 121230.png',
                'Screenshot 2026-06-10 121205.png',
                'Screenshot 2026-06-10 121104.png',
                'Screenshot 2026-06-10 121040.png',
                'Screenshot 2026-06-10 121016.png',
                'Screenshot 2026-06-10 120927.png',
                'Screenshot 2026-06-02 110522.png',
                'Screenshot 2026-06-02 110521.png',
                'Screenshot 2026-06-02 110440.png',
                'Screenshot 2026-06-02 110114.png',
                // duplicate for infinite scroll
                'Screenshot 2026-06-10 122607.png',
                'Screenshot 2026-06-10 122539.png',
                'Screenshot 2026-06-10 122401.png',
                'Screenshot 2026-06-10 122333.png',
                'Screenshot 2026-06-10 121230.png',
                'Screenshot 2026-06-10 121205.png',
                'Screenshot 2026-06-10 121104.png',
                'Screenshot 2026-06-10 121040.png',
                'Screenshot 2026-06-10 121016.png',
                'Screenshot 2026-06-10 120927.png',
                'Screenshot 2026-06-02 110522.png',
                'Screenshot 2026-06-02 110521.png',
                'Screenshot 2026-06-02 110440.png',
                'Screenshot 2026-06-02 110114.png'
              ].map((src, idx) => (
                <div key={idx} className="relative group rounded-2xl overflow-hidden bg-foreground/5 border border-foreground/10 shadow-lg shrink-0 h-full">
                  <img src={`/jio-bp/screens/old/${src}`} alt={`Existing Screen ${idx + 1}`} className="h-full w-auto object-cover pointer-events-none" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>


      </section>

      {/* =========================================
          04.5 — HEURISTIC ANALYSIS
      ========================================= */}
      <section id="heuristic-analysis" className="py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-foreground/5">
        <HeuristicAnalysis />
      </section>

      {/* =========================================
          05 — COMPETITIVE ANALYSIS
      ========================================= */}
      <div id="competitor-analysis" className="py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-background">
        <CompetitorAnalysis />

      </div>

      {/* =========================================
          06 — OPPORTUNITIES & SCOPE OF REDESIGN
      ========================================= */}
      <div id="key-opportunities" className="py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-foreground/5">
        <KeyOpportunities />

      </div>

      {/* =========================================
          07 — RESEARCH QUESTIONS
      ========================================= */}
      <section id="research" className="py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-background">
        <ScrollReveal>
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader 
              title="Research Questions"
              heading="Moving from interface to operation."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 md:mt-16">
              <ScrollReveal delay={0.1}><ResearchQuestion num="01" text="How does an incident move through the organization from initial observation to resolution?" /></ScrollReveal>
              <ScrollReveal delay={0.2}><ResearchQuestion num="02" text="What does each role need to know at each point of the lifecycle?" /></ScrollReveal>
              <ScrollReveal delay={0.3}><ResearchQuestion num="03" text="Where does the existing interface create unnecessary cognitive load?" /></ScrollReveal>
              <ScrollReveal delay={0.4}><ResearchQuestion num="04" text="Which information should be visible immediately, and which should be progressively disclosed?" /></ScrollReveal>
              <ScrollReveal delay={0.5}><ResearchQuestion num="05" text="How can the system communicate ownership, state and next action?" /></ScrollReveal>
              <ScrollReveal delay={0.6}><ResearchQuestion num="06" text="How can resolved incidents contribute to organizational learning?" /></ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =========================================
          08 — STAKEHOLDER / ROLE MAPPING
      ========================================= */}
      <section id="stakeholders" className="py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-foreground/5">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <SectionHeader 
              title="Stakeholder / Role Mapping"
              heading="The Escalation Chain"
              className="items-center text-center"
              headingClassName="mx-auto"
            />
            
            {/* Escalation Chain Visual - Snake layout */}
            <div className="hidden md:grid grid-cols-3 gap-8 max-w-5xl mx-auto mt-12 mb-8 items-stretch">
              {/* Row 1 */}
              <div className="relative">
                <RoleCard role="RO" fullName="Retail Outlet" scope="One outlet" mode="Act" />
                <Arrow direction="right" />
              </div>
              <div className="relative">
                <RoleCard role="ASR" fullName="Area Sales Representative" scope="Multiple outlets" mode="Decide" />
                <Arrow direction="right" />
              </div>
              <div className="relative">
                <RoleCard role="SOM" fullName="Sales Officer Manager" scope="Operational area" mode="Review" />
                <Arrow direction="down" />
              </div>
              
              {/* Row 2 */}
              <div className="relative"></div>
              <div className="relative">
                <RoleCard role="HO" fullName="Head Office" scope="Enterprise" mode="Govern" />
              </div>
              <div className="relative">
                <RoleCard role="SH" fullName="State Head" scope="State" mode="Oversee" />
                <Arrow direction="left" />
              </div>
            </div>

            {/* Mobile Layout - Vertical Stack */}
            <div className="flex flex-col gap-4 mt-8 md:hidden">
              <RoleCard role="RO" fullName="Retail Outlet" scope="One outlet" mode="Act" />
              <Arrow direction="downMobile" />
              <RoleCard role="ASR" fullName="Area Sales Representative" scope="Multiple outlets" mode="Decide" />
              <Arrow direction="downMobile" />
              <RoleCard role="SOM" fullName="Sales Officer Manager" scope="Operational area" mode="Review" />
              <Arrow direction="downMobile" />
              <RoleCard role="SH" fullName="State Head" scope="State" mode="Oversee" />
              <Arrow direction="downMobile" />
              <RoleCard role="HO" fullName="Head Office" scope="Enterprise" mode="Govern" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          09 — THE EIGHT PILLARS OF THE REDESIGN
      ========================================= */}
      <section id="pillars" className="py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="mb-10">
              <SectionHeader 
                heading="The Eight Pillars of the Redesign"
                className="items-center text-center"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Pillar num="01" title="Lifecycle" desc="Incident management is a lifecycle, not a form." />
              <Pillar num="02" title="Scale" desc="Role determines information density." />
              <Pillar num="03" title="State" desc={<>Status is not enough.<br/>Need: Status + Owner + Action</>} />
              <Pillar num="04" title="Context" desc="Decisions need context." />
              <Pillar num="05" title="Ownership" desc="Evidence should remain connected to the incident." />
              <Pillar num="06" title="Abstraction" desc="Information needs multiple levels of abstraction." />
              <Pillar num="07" title="Learning" desc="Resolution should create learning." />
              <Pillar num="08" title="Engagement" desc="Safety participation should be positively reinforced." />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          10 — INFORMATION ARCHITECTURE
      ========================================= */}
      <section id="architecture" className="py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-foreground/5">
        <ScrollReveal>
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-10">
              <SectionHeader 
                title="Information Architecture"
                heading="A connected architecture for role-based incident management."
              />
            </div>
            
            {/* IA Image */}
            <div className="w-full rounded-[2rem] overflow-hidden border border-foreground/10 shadow-2xl bg-foreground/5">
              <img 
                src="/jio-bp/Information Architecture.png" 
                alt="Information Architecture Diagram" 
                className="w-full h-auto"
              />
            </div>


          </div>
        </ScrollReveal>
      </section>



      {/* =========================================
          12 — INCIDENT LIFECYCLE
      ========================================= */}
      <section id="lifecycle" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <ScrollReveal>
          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <div className="mb-16">
              <SectionHeader 
                title="The Incident Lifecycle"
                heading="An incident does not end when it is closed."
                className="items-center"
              />
            </div>

            {/* New Timeline Flow */}
            <div className="relative mb-20 bg-foreground/[0.02] border border-foreground/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-sm">
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-[10px] md:text-xs font-clash font-semibold tracking-wider">
                {[
                  { label: "Report", type: "start" },
                  { label: "Evidence", type: "default" },
                  { label: "Review", type: "default" },
                  { label: "Classify", type: "default" },
                  { label: "Assign", type: "default" },
                  { label: "Investigate", type: "default" },
                  { label: "Act / Escalate", type: "default" },
                  { label: "Corrective Action", type: "default" },
                  { label: "Verify", type: "default" },
                  { label: "Close", type: "end" },
                  { label: "Learn", type: "learning" },
                  { label: "Prevent Recurrence", type: "learning" }
                ].map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className={`px-4 py-2.5 rounded-full border transition-all duration-300 hover:-translate-y-1 ${
                      step.type === 'start' ? 'bg-primary/10 border-primary/30 text-primary' :
                      step.type === 'end' ? 'bg-orange-500/10 border-orange-500/30 text-orange-500' :
                      step.type === 'learning' ? 'bg-[#34d399]/10 border-[#34d399]/30 text-[#34d399]' :
                      'bg-foreground/5 border-foreground/10 text-foreground/70'
                    }`}>
                      {step.label}
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="text-foreground/20 font-bold hidden md:block text-lg">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Enhanced Loop Cards */}
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Operational Loop */}
              <div className="group p-8 md:p-10 border border-foreground/10 rounded-3xl bg-gradient-to-br from-foreground/5 to-transparent hover:border-primary/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h4 className="text-primary font-clash font-semibold tracking-wider text-base">Operational Loop</h4>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-foreground/90 font-clash font-medium tracking-wide text-xs md:text-sm">
                  <span className="bg-foreground/5 px-3 py-1 rounded">Report</span>
                  <span className="text-primary/50">→</span>
                  <span className="bg-foreground/5 px-3 py-1 rounded">Review</span>
                  <span className="text-primary/50">→</span>
                  <span className="bg-foreground/5 px-3 py-1 rounded">Act</span>
                  <span className="text-primary/50">→</span>
                  <span className="bg-foreground/5 px-3 py-1 rounded border border-primary/20 text-primary">Close</span>
                </div>
              </div>

              {/* Learning Loop */}
              <div className="group p-8 md:p-10 border border-foreground/10 rounded-3xl bg-gradient-to-br from-foreground/5 to-transparent hover:border-[#34d399]/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#34d399]/10 flex items-center justify-center text-[#34d399] border border-[#34d399]/20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-[#34d399] font-clash font-semibold tracking-wider text-base">Learning Loop</h4>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-foreground/90 font-clash font-medium tracking-wide text-xs md:text-sm">
                  <span className="bg-foreground/5 px-3 py-1 rounded border border-[#34d399]/20 text-[#34d399]">Close</span>
                  <span className="text-[#34d399]/50">→</span>
                  <span className="bg-foreground/5 px-3 py-1 rounded">Learn</span>
                  <span className="text-[#34d399]/50">→</span>
                  <span className="bg-foreground/5 px-3 py-1 rounded">SOP / Train</span>
                  <span className="text-[#34d399]/50">→</span>
                  <span className="bg-[#34d399]/10 px-3 py-1 rounded text-[#34d399]">Prevent</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =========================================
          13 — LOW-FIDELITY IDEATION
      ========================================= */}
      <section id="wireframes" className="py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-foreground/5">
        <ScrollReveal>
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12">
              <SectionHeader 
                title="Lofidelity Wireframes"
                heading="Lofidelity Wireframes"
              />
            </div>
            <div className="w-full rounded-[2rem] overflow-hidden border border-foreground/10 shadow-2xl bg-foreground/5">
              <img 
                src="/jio-bp/Wireframes.jpg" 
                alt="Lofidelity Wireframes" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =========================================
          14 — DESIGN SYSTEM & COMPONENT LIBRARY
      ========================================= */}
      <section id="design-system" className="py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-background">
        <ScrollReveal>
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16">
              <SectionHeader 
                title="Design System"
                heading="A cohesive ecosystem of reusable components."
              />
            </div>

            <div className="w-full rounded-[2rem] overflow-hidden border border-foreground/10 shadow-2xl bg-foreground/5">
              <img 
                src="/jio-bp/Image8.jpg" 
                alt="Design System Elements" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =========================================
          15 — FINAL UI INTRODUCTION
      ========================================= */}
      <section id="final-ui" className="py-10 md:py-16 lg:py-20 text-center px-6 md:px-12 lg:px-24 bg-foreground/5">
        <div className="max-w-[1200px] mx-auto">
            <div className="mb-10 md:mb-12">
              <SectionHeader 
                title="High-Fidelity Screens"
                heading="The Redesigned IMS"
                description={<>The final UI reflects the role, responsibility and decisions<br className="hidden md:block"/> identified through the research process.</>}
                className="items-center text-center"
              />
            </div>
            <div className="w-full rounded-[2rem] overflow-hidden border border-foreground/10 shadow-2xl bg-foreground/5">
              <img 
                src="/jio-bp/Slide_16_9_4.jpg" 
                alt="The Redesigned IMS - Final UI" 
                className="w-full h-auto object-cover"
              />
            </div>
        </div>

      {/* =========================================
          15.5 — MOBILE INTEGRATION SHOWCASE
      ========================================= */}
        <ScrollReveal>
          <div className="max-w-[1400px] mx-auto mt-10 md:mt-16 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Side: Content */}
              <div className="lg:col-span-5 flex flex-col justify-center relative z-10">
                {/* Decorative background blur */}
                <div className="absolute -left-10 top-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                <div className="mb-10 md:mb-12">
                  <SectionHeader 
                    title="Mobile Integration"
                    heading="Connected with My Station"
                    description="The IMS is integrated with the My Station mobile app, connecting incident reporting, tracking, event flow and supporting documents across platforms."
                  />
                </div>
                
                <div className="space-y-4 mb-12">
                  {/* Feature 1 */}
                  <div className="group p-5 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                    <div className="flex gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-background border border-foreground/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-sm">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-clash font-medium text-foreground text-lg md:text-xl mb-1 group-hover:text-primary transition-colors duration-300">01 — Connected Incident Flow</h4>
                        <p className="font-satoshi text-sm md:text-base text-foreground/60 leading-relaxed">Incident information and workflow remain connected between IMS and the mobile app.</p>
                      </div>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="group p-5 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                    <div className="flex gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-background border border-foreground/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-sm">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-clash font-medium text-foreground text-lg md:text-xl mb-1 group-hover:text-primary transition-colors duration-300">02 — Documents &amp; Event Logs</h4>
                        <p className="font-satoshi text-sm md:text-base text-foreground/60 leading-relaxed">Supporting documents and event history stay linked to the same incident.</p>
                      </div>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="group p-5 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                    <div className="flex gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-background border border-foreground/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-sm">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-clash font-medium text-foreground text-lg md:text-xl mb-1 group-hover:text-primary transition-colors duration-300">03 — Mobile-first Incident Access</h4>
                        <p className="font-satoshi text-sm md:text-base text-foreground/60 leading-relaxed">Redesigned incident cards keep essential information and actions accessible on the go.</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

              {/* Right Side: Video */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center mt-12 lg:mt-0 gap-6 md:gap-8">
                
                <div className="inline-flex items-center gap-4 p-4 rounded-3xl bg-background border border-foreground/10 shadow-sm group">
                  <div className="flex flex-col items-center">
                    <span className="font-clash font-semibold tracking-wide text-foreground text-sm md:text-base">IMS Web</span>
                  </div>
                  <div className="flex-1 border-t-2 border-dashed border-foreground/20 group-hover:border-primary/50 transition-colors duration-500 relative min-w-[60px] flex justify-center items-center">
                    <div className="absolute p-1.5 bg-background rounded-full border border-foreground/10 shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-foreground/10 to-transparent p-[1px] shadow-sm overflow-hidden shrink-0">
                      <div className="w-full h-full bg-background/80 backdrop-blur-sm rounded-xl p-1.5 flex items-center justify-center">
                        <img src="/jio-bp/My%20station%20logo%20app.jpg" alt="My Station Logo" className="w-full h-full rounded-md object-cover" />
                      </div>
                    </div>
                    <span className="font-clash font-semibold tracking-wide text-foreground text-sm md:text-base">My Station App</span>
                  </div>
                </div>

                <div className="w-full max-w-[360px] md:max-w-[480px] rounded-[2rem] md:rounded-[2.5rem] bg-white border border-foreground/10 shadow-2xl relative flex items-center justify-center p-6 md:p-10">
                  <div className="w-full max-w-[240px] md:max-w-[300px]">
                    <video 
                      src="/jio-bp/My%20Station.mp4" 
                      className="w-full h-auto object-contain"
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      preload="auto"
                      aria-label="My Station mobile app integration"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      {/* =========================================
          16 — VIDEO SHOWCASE: THE INTERFACE IN ACTION
      ========================================= */}
        <ScrollReveal>
          <div className="max-w-[1400px] mx-auto mt-10 md:mt-16 text-left">
            <div className="w-full rounded-[2rem] overflow-hidden border border-foreground/10 shadow-sm bg-foreground/5 mb-10 md:mb-16">
              <img 
                src="/jio-bp/Mockup%20JioBP%201.jpg" 
                alt="IMS Dashboard Overview" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-[3.8fr_1fr] gap-6 md:gap-8 mb-10 md:mb-16">
              {/* Video 1: Login RO */}
              <div className="flex flex-col gap-5 h-full">
                <div className="w-full rounded-2xl overflow-hidden border border-foreground/10 bg-foreground/5 shadow-sm relative group">
                  <video 
                    src="/jio-bp/Login RO.mp4" 
                    className="w-full h-auto object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    preload="auto"
                    aria-label="RO Login and Access workflow"
                  />
                </div>
                <div className="mt-auto">
                  <h4 className="font-clash font-semibold text-foreground tracking-wide text-lg md:text-xl mb-1">RO Login & Access</h4>
                  <p className="font-clash text-foreground/60 text-sm md:text-base leading-relaxed">Streamlined entry into the incident management experience.</p>
                </div>
              </div>

              {/* Video 2: RO Mobile */}
              <div className="flex flex-col gap-5 h-full">
                <div className="w-full rounded-2xl overflow-hidden border border-foreground/10 bg-foreground/5 shadow-sm relative group">
                  <video 
                    src="/jio-bp/RO Mobile.mp4" 
                    className="w-full h-auto object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    preload="auto"
                    aria-label="RO Mobile incident management workflow"
                  />
                </div>
                <div className="mt-auto">
                  <h4 className="font-clash font-semibold text-foreground tracking-wide text-lg md:text-xl mb-1">RO Mobile Experience</h4>
                  <p className="font-clash text-foreground/60 text-sm md:text-base leading-relaxed">Focused mobile workflows for reporting and tracking incidents.</p>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Video 3: ASR Dashboard */}
              <div className="flex flex-col gap-5 h-full">
                <div className="w-full rounded-2xl overflow-hidden border border-foreground/10 bg-foreground/5 shadow-sm relative group">
                  <video 
                    src="/jio-bp/ASR Dashboard.mp4" 
                    className="w-full h-auto object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    preload="auto"
                    aria-label="ASR Dashboard interaction"
                  />
                </div>
                <div className="mt-auto">
                  <h4 className="font-clash font-semibold text-foreground tracking-wide text-lg md:text-xl mb-1">ASR Dashboard</h4>
                  <p className="font-clash text-foreground/60 text-sm md:text-base leading-relaxed">Action-focused incident review and decision-making.</p>
                </div>
              </div>

              {/* Video 4: HO Dashboard */}
              <div className="flex flex-col gap-5 h-full">
                <div className="w-full rounded-2xl overflow-hidden border border-foreground/10 bg-foreground/5 shadow-sm relative group">
                  <video 
                    src="/jio-bp/HO Dashboard.mp4" 
                    className="w-full h-auto object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    preload="auto"
                    aria-label="HO Dashboard interaction"
                  />
                </div>
                <div className="mt-auto">
                  <h4 className="font-clash font-semibold text-foreground tracking-wide text-lg md:text-xl mb-1">HO Dashboard</h4>
                  <p className="font-clash text-foreground/60 text-sm md:text-base leading-relaxed">Enterprise-level visibility across incidents, risk and performance.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      {/* =========================================
          24 — FINAL UI SCREEN GALLERY / MOCKUPS
      ========================================= */}
        <ScrollReveal>
          <div className="max-w-[1400px] mx-auto text-center mt-10 md:mt-16">
            <div className="space-y-12">
              <div className="w-full rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-2xl">
                <img src="/jio-bp/Mockup%20JioBP%202.jpg" alt="Mockup JioBP 2" className="w-full h-auto" />
              </div>
              <div className="w-full rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-2xl">
                <img src="/jio-bp/Mockup%20JioBP%208.jpg" alt="Mockup JioBP 8" className="w-full h-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="w-full rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-2xl">
                  <img src="/jio-bp/Mockup_JioBP_3.jpg" alt="Mockup JioBP 3" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" />
                </div>
                <div className="w-full rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-2xl">
                  <img src="/jio-bp/Mockup%20JioBP%204.jpg" alt="Mockup JioBP 4" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" />
                </div>
                <div className="w-full rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-2xl">
                  <img src="/jio-bp/Mockup%20JioBP%205.jpg" alt="Mockup JioBP 5" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" />
                </div>
                <div className="w-full rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-2xl">
                  <img src="/jio-bp/Mockup%20JioBP%206.jpg" alt="Mockup JioBP 6" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <NextProjectNav currentPath="/work/jio-bp" />
    </article>
  );
}

/* =========================================
   HELPER COMPONENTS
========================================= */

function SnapshotItem({ label, value, className = "" }) {
  return (
    <div className={className}>
      <span className="block text-primary font-clash text-xs uppercase tracking-[0.2em] mb-2">{label}</span>
      <span className="block text-foreground font-clash font-medium tracking-wide">{value}</span>
    </div>
  );
}

function HeuristicNode({ code, title, desc }) {
  return (
    <div className="p-6 bg-background border border-foreground/10 rounded-2xl">
      <span className="text-primary font-franchise text-2xl mb-2 block">{code}</span>
      <strong className="block text-foreground font-clash font-medium tracking-wide mb-2">{title}</strong>
      <p className="text-foreground/70 font-clash font-medium tracking-wide text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ResearchQuestion({ num, text }) {
  return (
    <div className="flex flex-col gap-4 p-8 rounded-[2rem] bg-background border border-foreground/10 shadow-sm h-full">
      <span className="text-4xl md:text-5xl font-franchise text-primary/50 leading-none">{num}</span>
      <p className="text-sm md:text-base font-clash font-medium tracking-wide text-foreground/80 leading-relaxed">{text}</p>
    </div>
  );
}

function RoleCard({ role, fullName, scope, mode }) {
  return (
    <div className="flex flex-col p-6 rounded-3xl bg-background border border-foreground/10 h-full w-full relative group hover:border-primary/30 transition-colors shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-xl font-franchise tracking-wide text-primary shadow-inner">
          {role}
        </div>
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-clash font-medium text-[10px] tracking-widest uppercase border border-primary/20">
          {mode}
        </span>
      </div>
      <div className="mt-auto">
        <h4 className="font-clash font-semibold text-foreground text-sm xl:text-base uppercase tracking-wider leading-snug mb-1">{fullName}</h4>
        <p className="text-[10px] xl:text-xs text-foreground/50 uppercase tracking-[0.2em]">{scope}</p>
      </div>
    </div>
  );
}

function Arrow({ direction }) {
  const classes = {
    right: "absolute -right-4 top-1/2 -translate-y-1/2 text-primary/30 text-xl hidden md:block z-10 translate-x-1/2",
    down: "absolute left-1/2 -bottom-4 -translate-x-1/2 text-primary/30 text-xl hidden md:block z-10 translate-y-1/2",
    left: "absolute -left-4 top-1/2 -translate-y-1/2 text-primary/30 text-xl hidden md:block z-10 -translate-x-1/2",
    downMobile: "text-primary/30 text-xl md:hidden text-center"
  };

  const symbol = {
    right: "→",
    down: "↓",
    left: "←",
    downMobile: "↓"
  };

  return (
    <div className={classes[direction]}>
      {symbol[direction]}
    </div>
  );
}

function ScopeNode({ role, mode, scope }) {
  return (
    <div className="p-6 bg-foreground/5 border border-foreground/10 rounded-2xl">
      <strong className="block text-foreground text-xl font-franchise tracking-wide mb-2">{role}</strong>
      <span className="block text-primary font-clash font-medium tracking-[0.15em] uppercase text-xs mb-3">{mode}</span>
      <span className="block text-foreground/40 text-[10px] font-clash uppercase tracking-[0.2em]">{scope}</span>
    </div>
  );
}

function Pillar({ num, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-background border border-foreground/10 hover:border-primary/30 transition-colors h-full flex flex-col">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-primary font-franchise text-3xl leading-none">{num}</span>
        <span className="text-foreground/80 font-clash font-semibold text-xs tracking-[0.2em] uppercase">{title}</span>
      </div>
      <p className="text-foreground/60 font-clash font-medium text-sm leading-snug">{desc}</p>
    </div>
  );
}

function SystemCol({ title, items }) {
  return (
    <div>
      <h4 className="text-primary text-xs uppercase tracking-[0.2em] font-clash mb-6 border-b border-foreground/10 pb-3">{title}</h4>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="text-foreground/80 font-clash font-medium tracking-wide text-sm">{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ScreenShowcase({ title, subtitle, desc, imgSrc }) {
  return (
    <section className="px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      <ScrollReveal>
        <div className="mb-10 max-w-4xl mx-auto text-center">
          {subtitle && <p className="text-primary font-clash font-medium uppercase tracking-[0.2em] text-xs mb-4">{subtitle}</p>}
          <h3 className="font-franchise text-4xl md:text-5xl uppercase tracking-wide text-white leading-tight mb-4">{title}</h3>
          <p className="font-clash text-base md:text-lg font-medium tracking-wide text-foreground/70 leading-relaxed max-w-3xl mx-auto">{desc}</p>
        </div>
        {imgSrc ? (
          <div className="w-full rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-2xl">
            <img src={imgSrc} alt={title} className="w-full h-auto" />
          </div>
        ) : (
          <div className="w-full rounded-[2rem] bg-foreground/5 border border-foreground/10 h-64 flex items-center justify-center text-foreground/30 font-clash font-medium text-xs tracking-widest uppercase">
            Asset intentionally omitted / represented by structure
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}

