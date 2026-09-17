import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';
import SectionHeader from '../common/SectionHeader';
import { 
  Eye, 
  Globe, 
  Undo2, 
  CopyCheck, 
  ShieldAlert, 
  Lightbulb, 
  Zap, 
  Palette, 
  LifeBuoy, 
  BookOpen 
} from 'lucide-react';

const heuristics = [
  { id: 1, title: 'Visibility of System Status', icon: Eye },
  { id: 2, title: 'Match Between System & the Real World', icon: Globe },
  { id: 3, title: 'User Control & Freedom', icon: Undo2 },
  { id: 4, title: 'Consistency & Standards', icon: CopyCheck },
  { id: 5, title: 'Error Prevention', icon: ShieldAlert },
  { id: 6, title: 'Recognition Rather than Recall', icon: Lightbulb },
  { id: 7, title: 'Flexibility & Efficiency of Use', icon: Zap },
  { id: 8, title: 'Aesthetic & Minimalist Design', icon: Palette },
  { id: 9, title: 'Help Users Recognize, Diagnose & Recover from Errors', icon: LifeBuoy },
  { id: 10, title: 'Help & Documentation', icon: BookOpen }
];

export default function HeuristicAnalysis() {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <ScrollReveal>
        <SectionHeader 
          title="Heuristic Analysis"
          heading="10 Usability Heuristics"
          description="Evaluating the existing system against Jakob Nielsen's 10 general principles for interaction design to identify areas for improvement."
          className="!mb-12"
        />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-4 md:mb-6">
          {heuristics.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-colors">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-background flex items-center justify-center border border-foreground/10 shadow-sm text-primary shrink-0">
                  <Icon size={24} strokeWidth={1.5} className="md:w-7 md:h-7" />
                </div>
                <h4 className="font-clash font-medium text-sm md:text-base text-foreground leading-snug">
                  {item.title}
                </h4>
              </div>
            );
          })}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="rounded-2xl overflow-hidden border border-foreground/10 shadow-xl bg-background p-2 md:p-4">
          <img 
            src="/jio-bp/Image10.jpg" 
            alt="10 Usability Heuristics Reference" 
            className="w-full h-auto rounded-xl object-contain"
          />
        </div>
      </ScrollReveal>
    </div>
  );
}

