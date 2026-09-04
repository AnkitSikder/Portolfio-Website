import React from 'react';
import { visistAiData } from '../data/projects/visist-ai';
import ProjectHero from '../components/case-study/ProjectHero';
import { 
  ProjectOverview, 
  ProjectResearch,
  ProjectSurveys,
  ProjectPersona, 
  ProjectComparison, 
  ProjectDesignSystem,
  ProjectTesting,
  ProjectScreenShowcase 
} from '../components/case-study/CaseStudyComponents';

export default function VisistAiCaseStudy() {
  const data = visistAiData;

  return (
    <article className="bg-background min-h-screen">
      <ProjectHero {...data.hero} />
      <ProjectOverview {...data.overview} />
      
      {/* Research Phase */}
      <ProjectResearch interviews={data.research.interviews} />
      <ProjectSurveys surveys={data.research.surveys} />
      <ProjectPersona personas={data.research.personas} />
      <ProjectComparison insight={data.competition.insight} competitors={data.competition.competitors} />
      
      {/* Design System & Assets */}
      <ProjectDesignSystem designSystem={data.designSystem} />
      
      {/* User Testing Feedback */}
      <ProjectTesting testing={data.testing} />
      
      {/* High-Fidelity Screens & Flow (Reusing Screen Showcase) */}
      <ProjectScreenShowcase screens={data.screens} />
      
      {/* Outcome Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-primary text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-franchise uppercase tracking-wide mb-8">The Outcome</h2>
          <p className="text-xl md:text-2xl font-hanken font-light leading-relaxed opacity-90">
            Visist.ai provides a comprehensive ecosystem for badminton players and coaches. By translating raw performance data into actionable insights through an intuitive interface, we bridged the gap between professional coaching and everyday practice.
          </p>
        </div>
      </section>
    </article>
  );
}
