import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';
import SectionHeader from '../common/SectionHeader';
import { 
  User, 
  Shield, 
  Fuel, 
  FileText, 
  Users, 
  Building2, 
  LineChart, 
  Smartphone, 
  Paperclip, 
  Award, 
  Map, 
  BookOpen, 
  ArrowRight,
  Target,
  ListTodo,
  CheckCircle2,
  Clock,
  AlertTriangle
} from 'lucide-react';

export default function KeyOpportunities() {
  const rows = [
    {
      number: "01",
      title: "LOGIN & ACCESS",
      subtitle: "Reduce friction and establish a clear, trustworthy entry point.",
      areaIcon: User,
      existing: [
        "Generic login screen",
        "No dedicated phone / OTP login flow",
        "Low trust and weak IMS identity",
        "CAPTCHA adds friction",
        "Limited visible help / recovery",
        "Weak login-state feedback"
      ],
      insights: [
        "Authentication is a major entry-point friction",
        "The login does not strongly communicate the IMS context",
        "Lack of system feedback increases uncertainty",
        "Recovery and help are not sufficiently visible",
        "Users need a faster, more flexible access model"
      ],
      opportunities: [
        { icon: <Smartphone size={16} />, text: "Password + Mobile OTP login" },
        { icon: <Shield size={16} />, text: "Meaningful IMS context and branding" },
        { icon: <CheckCircle2 size={16} />, text: "Clear validation / loading / recovery states" },
        { icon: <Target size={16} />, text: "Accessible authentication" },
        { icon: <AlertTriangle size={16} />, text: "Better password recovery visibility" }
      ],
      scope: "A secure, branded and user-friendly login experience with flexible authentication options, clear feedback, accessible interaction and stronger recovery support."
    },
    {
      number: "02",
      title: "RO — ACT",
      subtitle: "Retail Outlet · Station-level\nMake reporting easier, more motivating and less cognitively demanding.",
      areaIcon: Fuel,
      existing: [
        "Long and complex reporting form",
        "Limited field guidance",
        "Difficulty adding evidence",
        "Low engagement / little reporting motivation",
        "No clear progressive reporting journey",
        "No clear save-and-resume model in the initial reporting experience"
      ],
      insights: [
        "Frontline users need a faster, simpler reporting flow",
        "Long forms increase cognitive load",
        "Users benefit from progressive disclosure",
        "Evidence should be easier to capture",
        "Reporting needs clearer feedback and completion confidence",
        "Safety reporting can be positively reinforced"
      ],
      opportunities: [
        { icon: <ListTodo size={16} />, text: "Progressive incident reporting" },
        { icon: <Clock size={16} />, text: "Save Draft + Resume Later" },
        { icon: <Paperclip size={16} />, text: "Easier evidence capture" },
        { icon: <Map size={16} />, text: "Station safety visibility" },
        { icon: <Shield size={16} />, text: "Safety engagement" },
        { icon: <Award size={16} />, text: "Badges + achievements" }
      ],
      scope: "A guided, simple and engaging reporting experience for frontline teams, with progressive disclosure, easy evidence capture, save-and-resume support, station-level visibility and recognition for positive safety behavior."
    },
    {
      number: "03",
      title: "ASR — DECIDE",
      subtitle: "Area Sales Representative · Multi-outlet\nHelp users prioritize incidents, understand context and decide faster.",
      areaIcon: Users,
      existing: [
        "Tabular incident view with limited context",
        "No strong prioritization",
        "Manual follow-ups",
        "Scattered information across screens",
        "Limited visibility into ownership",
        "Status doesn't clearly indicate what should happen next"
      ],
      insights: [
        "ASR users need quick situational understanding",
        "Critical incidents need stronger prioritization",
        "Decisions require context before action",
        "Ownership must be visible",
        "Status alone is insufficient",
        "The next action should be explicit",
        "Multiple outlets increase the need for comparison and prioritization"
      ],
      opportunities: [
        { icon: <Target size={16} />, text: "Action-first incident queue" },
        { icon: <CheckCircle2 size={16} />, text: "Status + Owner + Next Action + SLA" },
        { icon: <FileText size={16} />, text: "Incident detail as a single source of truth" },
        { icon: <LineChart size={16} />, text: "Station performance + severity + trends" },
        { icon: <ArrowRight size={16} />, text: "Guided Reject / Close / Escalate decisions" },
        { icon: <Paperclip size={16} />, text: "Better evidence and timeline visibility" }
      ],
      scope: "A prioritized, insight-driven operational workspace for managing incidents across multiple outlets, with stronger context, ownership, SLA visibility and faster decision-making."
    },
    {
      number: "04",
      title: "HO — GOVERN",
      subtitle: "Head Officer · Enterprise\nTurn incident data into organizational risk intelligence and prevention.",
      areaIcon: Building2,
      existing: [
        "Limited analytical view",
        "Difficult to track trends",
        "No consolidated enterprise risk view",
        "Limited learning from incidents",
        "Weak regional/state comparison",
        "Incident data remains largely operational"
      ],
      insights: [
        "Leadership needs enterprise-level visibility",
        "Risk must be compared across regions and states",
        "Trends are more meaningful than isolated incidents",
        "Data should support prevention, not only reporting",
        "Incident information should connect with organizational learning",
        "Policies, SOPs and training can be informed by recurring patterns"
      ],
      opportunities: [
        { icon: <Map size={16} />, text: "Regional + state comparison" },
        { icon: <AlertTriangle size={16} />, text: "Risk / severity visibility" },
        { icon: <Target size={16} />, text: "Geographic drill-down" },
        { icon: <LineChart size={16} />, text: "Business impact & Trend analysis" },
        { icon: <BookOpen size={16} />, text: "Learning from incidents → SOP / policy / training" }
      ],
      scope: "An enterprise-level dashboard for holistic risk visibility, regional and trend analysis, data-driven decisions and stronger safety governance."
    }
  ];

  return (
    <section className="w-full max-w-[1600px] mx-auto">
      
      {/* HEADER */}
      <ScrollReveal>
        <SectionHeader 
          title="Opportunities & Scope"
          heading="Key Opportunities & Scope of Redesign"
          description="From heuristic findings to role-specific opportunities."
        />
      </ScrollReveal>

      {/* ROWS */}
      <div className="flex flex-col">
        {rows.map((row, idx) => (
          <ScrollReveal key={idx}>
            <div className={`flex flex-col xl:flex-row gap-8 xl:gap-12 pb-12 md:pb-16 ${idx === 0 ? 'pt-10 md:pt-14' : 'pt-12 md:pt-16 border-t border-border/50'} group relative`}>
              
              {/* 01 - ROLE / AREA */}
              <div className="xl:w-[20%] flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-franchise text-3xl md:text-4xl">{row.number}</span>
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-foreground">
                    <row.areaIcon size={18} />
                  </div>
                </div>
                <div>
                  <h3 className="font-clash text-xl md:text-2xl font-medium mb-2">{row.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed whitespace-pre-line">{row.subtitle}</p>
                </div>
              </div>

              {/* Mobile Divider */}
              <div className="xl:hidden w-full h-[1px] bg-border/30 my-2" />

              {/* Columns Container */}
              <div className="xl:w-[80%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-8 xl:gap-8 relative">
                
                {/* Desktop Arrows */}
                <div className="hidden xl:flex absolute top-0 left-[23%] -translate-x-1/2 text-primary z-0">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </div>
                <div className="hidden xl:flex absolute top-0 left-[48%] -translate-x-1/2 text-primary z-0">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </div>
                <div className="hidden xl:flex absolute top-0 left-[73%] -translate-x-1/2 text-primary z-0">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </div>

                {/* 02 - EXISTING IMS */}
                <div className="flex flex-col gap-5 relative z-10">
                  <h4 className="text-xs md:text-[13px] font-clash uppercase tracking-[0.2em] text-foreground/60 font-medium">Existing IMS</h4>
                  <ul className="flex flex-col gap-3">
                    {row.existing.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground/70 leading-relaxed items-start">
                        <span className="text-foreground/30 mt-[2px] text-[10px]">■</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 03 - RESEARCH INSIGHTS */}
                <div className="flex flex-col gap-5 relative z-10">
                  <h4 className="text-xs md:text-[13px] font-clash uppercase tracking-[0.2em] text-foreground/60 font-medium">Research Insights</h4>
                  <ul className="flex flex-col gap-3">
                    {row.insights.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground/70 leading-relaxed items-start">
                        <span className="text-primary/50 mt-[2px] text-[10px]">■</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 04 - KEY OPPORTUNITIES */}
                <div className="flex flex-col gap-5 relative z-10">
                  <h4 className="text-xs md:text-[13px] font-clash uppercase tracking-[0.2em] text-primary font-medium">Key Opportunities</h4>
                  <ul className="flex flex-col gap-3">
                    {row.opportunities.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground leading-relaxed items-start">
                        <span className="text-primary mt-[2px] shrink-0">{item.icon}</span>
                        <span className="font-medium">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 05 - SCOPE OF REDESIGN */}
                <div className="flex flex-col gap-5 relative z-10">
                  <h4 className="text-xs md:text-[13px] font-clash uppercase tracking-[0.2em] text-foreground/60 font-medium">Scope of Redesign</h4>
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl relative overflow-hidden group-hover:bg-white/[0.03] transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <p className="text-sm text-foreground/90 leading-relaxed relative z-10">
                      {row.scope}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

    </section>
  );
}
