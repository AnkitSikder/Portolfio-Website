import React from 'react';
import {
  ProjectOverview,
  ProjectResearch,
  ProjectSurveys,
  ProjectPersona,
  ProjectComparison,
  ProjectDesignSystem,
  ProjectTesting,
  ProjectScreenShowcase,
  ProjectProductClassification,
  ProjectSWOT,
  ProjectMindMap,
  ProjectBenchmark,
  ProjectRenderShowcase,
  ProjectCombinedResearch,

} from './CaseStudyComponents';
import ScrollReveal from '../common/ScrollReveal';
import GapAnalysisBlock from './blocks/GapAnalysisBlock';
import UserContextBlock from './blocks/UserContextBlock';
import ResearchInsightsBlock from './blocks/ResearchInsightsBlock';
import ReframeProblemBlock from './blocks/ReframeProblemBlock';
import SolutionCapabilitiesBlock from './blocks/SolutionCapabilitiesBlock';
import VRErgonomicsBlock from './blocks/VRErgonomicsBlock';
import VideoBlock from './blocks/VideoBlock';
import FormativeTestingBlock from './blocks/FormativeTestingBlock';
import TableBlock from './blocks/TableBlock';
import MechanismBlock from './blocks/MechanismBlock';

import Phase1IntroBlock from './blocks/Phase1IntroBlock';
import Phase1CycleBlock from './blocks/Phase1CycleBlock';
import Phase1ProblemBentoBlock from './blocks/Phase1ProblemBentoBlock';
import Phase1ExistingMethodsBlock from './blocks/Phase1ExistingMethodsBlock';
import Phase1ErgonomicsBlock from './blocks/Phase1ErgonomicsBlock';
import Phase1DesignBriefBlock from './blocks/Phase1DesignBriefBlock';
import Phase1ResearchMethodBlock from './blocks/Phase1ResearchMethodBlock';
import Phase1PersonaEmpathyBlock from './blocks/Phase1PersonaEmpathyBlock';
import Phase1OpportunityBlock from './blocks/Phase1OpportunityBlock';
import Phase1UserNeedsBlock from './blocks/Phase1UserNeedsBlock';

import Phase2SelectedConceptBlock from './blocks/Phase2SelectedConceptBlock';
import Phase2TechnicalAspectsBlock from './blocks/Phase2TechnicalAspectsBlock';
import Phase2ProductSpecBlock from './blocks/Phase2ProductSpecBlock';
import Phase2DimensionsBlock from './blocks/Phase2DimensionsBlock';
import Phase2RendersBlock from './blocks/Phase2RendersBlock';
import Phase2TakeawayBlock from './blocks/Phase2TakeawayBlock';

import AuraChargeIntroBlock from './blocks/auracharge/AuraChargeIntroBlock';
import AuraChargeProblemBlock from './blocks/auracharge/AuraChargeProblemBlock';
import AuraChargeChallengeBlock from './blocks/auracharge/AuraChargeChallengeBlock';
import AuraChargeJourneyBlock from './blocks/auracharge/AuraChargeJourneyBlock';
import AuraChargeBenchmarkBlock from './blocks/auracharge/AuraChargeBenchmarkBlock';
import AuraChargeResearchBlock from './blocks/auracharge/AuraChargeResearchBlock';
import AuraChargeCompetitorBlock from './blocks/auracharge/AuraChargeCompetitorBlock';
import AuraChargePersonaBlock from './blocks/auracharge/AuraChargePersonaBlock';
import AuraChargeBrandBlock from './blocks/auracharge/AuraChargeBrandBlock';
import AuraChargeIABlock from './blocks/auracharge/AuraChargeIABlock';
import AuraChargeGalleryBlock from './blocks/auracharge/AuraChargeGalleryBlock';
import AuraChargeFeaturesBlock from './blocks/auracharge/AuraChargeFeaturesBlock';
import AuraChargeRendersBlock from './blocks/auracharge/AuraChargeRendersBlock';

// ─── Section label map ────────────────────────────────────────────────────────
export const BLOCK_LABELS = {
  Overview:      'Overview',
  Research:      'Research',
  Persona:       'Personas',
  Comparison:    'Competition',
  DesignSystem:  'Design System',
  Testing:       'User Testing',
  ScreenShowcase:'Screens',
  Outcome:       'Outcome',
  Text:          'Section',
  Image:         'Gallery',
  ImageGallery:  'Gallery',
  Quote:         'Quote',
  Statistic:     'Stats',
  ProductClassification: 'Product Classification',
  SWOT:          'SWOT',
  MindMap:       'Mind Map',
  Benchmark:     'Benchmark',
  ProductRender: 'Product Renders',
  VRErgonomics:  'VR Ergonomics',
  Video:         'Video',
  FormativeTesting: 'Formative Testing',

  GapAnalysis:   'Gap Analysis',
  UserContext:   'User Context',
  ResearchInsights: 'Research Insights',
  ReframeProblem: 'Reframe Problem',
  SolutionCapabilities: 'Solution Capabilities',
  Table:         'Data',
  Mechanism:     'Mechanism',

  Phase1Intro: 'Introduction',
  Phase1Cycle: 'Cycle',
  Phase1ProblemBento: 'Opportunity Gap',
  Phase1ExistingMethods: 'Existing Methods',
  Phase1Ergonomics: 'Ergonomics',
  Phase1DesignBrief: 'Design Brief',
  Phase1ResearchMethod: 'Research',
  Phase1PersonaEmpathy: 'Persona',
  Phase1Opportunity: 'Opportunity',
  Phase1UserNeeds: 'User Needs',
  
  Phase2SelectedConcept: 'Selected Concept',
  Phase2TechnicalAspects: 'Technical Aspects',
  Phase2ProductSpec: 'Product Spec',
  Phase2Dimensions: 'Dimensions',
  Phase2Renders: 'Final Renders',
  Phase2Takeaway: 'Takeaway',

  AuraChargeIntro: 'Introduction',
  AuraChargeProblem: 'The Problem',
  AuraChargeChallenge: 'Design Challenge',
  AuraChargeJourney: 'User Journey',
  AuraChargeBenchmark: 'Benchmark',
  AuraChargeResearch: 'User Research',
  AuraChargeCompetitor: 'Competitor Analysis',
  AuraChargePersona: 'Personas',
  AuraChargeBrand: 'Visual Language',
  AuraChargeIA: 'Information Architecture',
  AuraChargeGallery: 'Gallery',
  AuraChargeFeatures: 'Product Features',
  AuraChargeRenders: 'Final Renders',
};

/** Derives a stable DOM id + display label for each block */
export function getSectionList(blocks) {
  const counts = {};
  return blocks.map(block => {
    const base = block.type.toLowerCase();
    counts[base] = (counts[base] || 0) + 1;
    const suffix = counts[base] > 1 ? `-${counts[base]}` : '';
    // Surveys are a Research block with variant='surveys' — give them a unique label
    const defaultLabel = (block.type === 'Research' && block.content?.variant === 'surveys')
      ? 'Surveys'
      : (BLOCK_LABELS[block.type] || block.type);
      
    const label = block.content?.navLabel || defaultLabel;
    return { id: `section-${base}${suffix}`, label };
  });
}

// ─── Individual Block Renderers ───────────────────────────────────────────────

function TextBlockRenderer({ content, sectionId, isAlternate }) {
  const alignClass = content.alignment === 'center' ? 'text-center items-center' : content.alignment === 'right' ? 'text-right items-end' : 'text-left items-start';
  const bgClass = isAlternate ? 'bg-foreground/5' : 'bg-background';
  return (
    <section id={sectionId} className={`py-10 md:py-16 lg:py-20 px-5 md:px-12 lg:px-24 ${bgClass}`}>
      <div className={`max-w-[1400px] mx-auto flex flex-col gap-4 ${alignClass}`}>
        {content.eyebrow && (
          <ScrollReveal>
            <span className="text-sm font-clash uppercase tracking-[0.2em] text-primary">{content.eyebrow}</span>
          </ScrollReveal>
        )}
        {content.heading && (
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-franchise uppercase tracking-wide text-foreground">{content.heading}</h2>
          </ScrollReveal>
        )}
        {content.body && (
          <ScrollReveal delay={0.2}>
            <p className="text-sm md:text-base text-foreground/70 font-clash font-medium tracking-wide leading-relaxed max-w-4xl">{content.body}</p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

function ImageBlockRenderer({ content, sectionId, isAlternate }) {
  if (!content.image) return null;
  const widthClass = content.width === 'narrow' ? 'max-w-2xl mx-auto' : content.width === 'contained' ? 'max-w-5xl mx-auto' : 'w-full';
  
  const isTall = content.height === 'tall';
  const imgClass = isTall 
    ? "w-full h-[60vh] md:h-[85vh] object-cover" 
    : "w-full h-auto";

  const bgClass = isAlternate ? 'bg-foreground/5' : 'bg-background';

  return (
    <section id={sectionId} className={`py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 ${bgClass}`}>
      <div className={`max-w-[1400px] mx-auto`}>
        <ScrollReveal>
          <div className={`${widthClass} flex flex-col gap-4`}>
            {content.heading && (
              <h2 className="text-3xl md:text-5xl font-franchise uppercase tracking-wide text-foreground text-center mb-4">{content.heading}</h2>
            )}
            <div className="w-full rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-xl">
              <img src={content.image} alt={content.alt || ''} className={imgClass} />
            </div>
            {content.caption && <p className="text-center text-sm text-foreground/50 font-clash font-medium tracking-wide">{content.caption}</p>}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ImageGalleryRenderer({ content, sectionId, isAlternate }) {
  const images = content.images || [];
  if (images.length === 0) return null;

  const bgClass = isAlternate ? 'bg-foreground/5' : 'bg-background';

  if (content.layout === 'carousel') {
    // Double images array for seamless infinite marquee scroll
    const marqueeImages = [...images, ...images];
    
    return (
      <section id={sectionId} className={`py-10 md:py-16 lg:py-20 overflow-hidden ${bgClass}`}>
        <div className="w-full">
          {content.title && (
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 mb-10 text-left">
              <h2 className="font-franchise text-4xl md:text-5xl uppercase tracking-wide text-foreground leading-tight">
                {content.title}
              </h2>
            </div>
          )}

          <div className="marquee-container overflow-hidden w-full relative">
            {/* Optional gradient fades on edges */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div 
              className="marquee-content flex gap-6 px-3 h-[220px] md:h-[280px]"
              style={content.speed ? { animationDuration: content.speed } : {}}
            >
              {marqueeImages.map((img, idx) => (
                <div key={idx} className="relative group rounded-2xl overflow-hidden bg-foreground/5 border border-foreground/10 shadow-lg shrink-0 h-full">
                  <img 
                    src={img.url} 
                    alt={img.alt || ''} 
                    className="h-full w-auto object-contain md:object-cover pointer-events-none" 
                    loading="lazy" 
                  />
                  {img.caption && (
                    <div className="absolute bottom-0 inset-x-0 bg-background/80 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <p className="text-xs text-center text-foreground font-clash font-medium tracking-wide">{img.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {content.caption && (
            <p className="text-center text-sm text-foreground/50 font-clash font-medium tracking-wide mt-6 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
              {content.caption}
            </p>
          )}
        </div>
      </section>
    );
  }

  const layoutClass = content.layout === 'masonry'
    ? 'columns-2 md:columns-3 gap-4'
    : content.layout === 'scroll'
    ? 'flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory'
    : content.layout === 'bento'
    ? 'grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

  return (
    <section id={sectionId} className={`py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto">
        
        {content.title && (
          <div className="mb-10 text-left">
            <h2 className="font-franchise text-4xl md:text-5xl uppercase tracking-wide text-foreground leading-tight">
              {content.title}
            </h2>
          </div>
        )}

        <div className={layoutClass}>
          {images.map((img, idx) => {
            let itemClass = `rounded-2xl overflow-hidden bg-foreground/5 border border-foreground/10 shadow-lg ${content.layout === 'scroll' ? 'shrink-0 w-80 snap-start' : ''}`;
            if (content.layout === 'bento') {
              itemClass += idx === 0 ? ' md:row-span-2 h-full' : ' h-full';
            }
            
            return (
              <ScrollReveal key={idx} delay={0.05 * idx} className={content.layout === 'bento' ? (idx === 0 ? 'md:row-span-2 h-full' : 'h-full') : ''}>
                <div className={`${itemClass} flex flex-col ${content.layout === 'bento' ? 'h-full' : ''}`}>
                  <img 
                    src={img.url} 
                    alt={img.alt || ''} 
                    className={`w-full ${content.layout === 'bento' ? 'h-full object-cover flex-1' : 'h-auto'}`} 
                    loading="lazy" 
                  />
                  {img.caption && <p className="text-xs text-center text-foreground/50 font-clash font-medium tracking-wide py-2 px-3 shrink-0">{img.caption}</p>}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        {content.caption && <p className="text-center text-sm text-foreground/50 font-clash font-medium tracking-wide mt-6">{content.caption}</p>}
      </div>
    </section>
  );
}

function QuoteBlockRenderer({ content, sectionId, isAlternate }) {
  const bgClass = isAlternate ? 'bg-foreground/5' : 'bg-background';
  return (
    <section id={sectionId} className={`py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 ${bgClass}`}>
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <blockquote className="relative p-10 rounded-3xl bg-primary/5 border border-primary/15">
            <span className="absolute -top-6 -left-2 text-8xl text-primary/20 font-serif leading-none">"</span>
            <p className="text-2xl md:text-3xl font-clash font-medium tracking-wide italic text-foreground leading-relaxed relative z-10">{content.quote}</p>
            {(content.person || content.role) && (
              <footer className="mt-6 flex items-center gap-3">
                {content.avatar && <img src={content.avatar} alt={content.person} className="w-10 h-10 rounded-full object-cover border border-primary/20" />}
                <div>
                  {content.person && <p className="text-sm font-clash font-semibold text-foreground">{content.person}</p>}
                  {content.role && <p className="text-xs text-foreground/50">{content.role}</p>}
                </div>
              </footer>
            )}
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}

function StatisticBlockRenderer({ content, sectionId, isAlternate }) {
  const stats = content.stats || [];
  if (stats.length === 0) return null;
  const bgClass = isAlternate ? 'bg-foreground/5' : 'bg-background';
  return (
    <section id={sectionId} className={`py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto">
        <div className={`grid gap-8 ${stats.length <= 2 ? 'grid-cols-2' : stats.length === 3 ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-4'}`}>
          {stats.map((s, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="flex flex-col gap-2 p-8 rounded-3xl bg-foreground/3 border border-foreground/10">
                <span className="text-5xl md:text-6xl font-franchise text-primary leading-none">{s.number}</span>
                <span className="text-base font-clash text-foreground font-medium">{s.label}</span>
                {s.description && <span className="text-sm text-foreground/50 font-clash font-medium tracking-wide">{s.description}</span>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomeBlockRenderer({ content, sectionId, isAlternate }) {
  // If the user specified a theme, use it, otherwise use the alternate logic
  const bgClass = content.theme === 'orange' ? 'bg-primary text-black' 
                : content.theme === 'light' ? 'bg-[#fcf2ec] text-[#171621]' 
                : (isAlternate ? 'bg-foreground/5' : 'bg-background');
  return (
    <section id={sectionId} className={`py-12 md:py-20 lg:py-24 px-5 md:px-12 lg:px-24 ${bgClass}`}>
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-franchise uppercase tracking-wide mb-8">{content.heading}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-sm md:text-base font-clash font-medium tracking-wide leading-relaxed opacity-90">{content.body}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── Block → Renderer Map ─────────────────────────────────────────────────────

// Map CMS block types to public renderers
// Reuses existing CaseStudyComponents where possible for design parity
function renderBlock(block, sectionId, isAlternate) {
  const { type, content } = block;

  switch (type) {
    case 'Text':
      return <TextBlockRenderer content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'Image':
      return <ImageBlockRenderer content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'ImageGallery':
      return <ImageGalleryRenderer content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'Video':
      return <VideoBlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'FormativeTesting':
      return <FormativeTestingBlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'Overview':
      return <section id={sectionId} className={isAlternate ? 'bg-foreground/5' : ''}><ProjectOverview title={content.title} description={content.description} audience={content.audience} /></section>;
    case 'Research':
      if (content.variant === 'surveys') {
        return <section id={sectionId} className={isAlternate ? 'bg-foreground/5' : ''}><ProjectSurveys surveys={{ method: content.participants, insights: content.findings }} /></section>;
      }
      if (content.variant === 'combined') {
        return <section id={sectionId} className={isAlternate ? 'bg-foreground/5' : ''}><ProjectCombinedResearch content={content} /></section>;
      }
      return <section id={sectionId} className={isAlternate ? 'bg-foreground/5' : ''}><ProjectResearch interviews={{ heading: content.heading, subheading: content.subheading, image: content.image, participants: content.participants, findings: content.findings || [] }} /></section>;
    case 'Persona':
      return <section id={sectionId} className={isAlternate ? 'bg-foreground/5' : ''}><ProjectPersona personas={content.personas || []} /></section>;
    case 'Quote':
      return <QuoteBlockRenderer content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'Statistic':
      return <StatisticBlockRenderer content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'Comparison':
      return <section id={sectionId} className={isAlternate ? 'bg-foreground/5' : ''}><ProjectComparison insight={content.insight} competitors={content.items || []} /></section>;
    case 'DesignSystem':
      return <section id={sectionId} className={isAlternate ? 'bg-foreground/5' : ''}><ProjectDesignSystem designSystem={{ colors: content.colors || [], typography: content.typography || [] }} /></section>;
    case 'Testing':
      return <section id={sectionId} className={isAlternate ? 'bg-foreground/5' : ''}><ProjectTesting testing={{ insights: content.insights || [], quotes: content.quotes || [] }} /></section>;
    case 'ScreenShowcase':
      return <section id={sectionId} className={isAlternate ? 'bg-foreground/5' : ''}><ProjectScreenShowcase screens={content.screens || []} /></section>;
    case 'Outcome':
      return <OutcomeBlockRenderer content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'ProductClassification':
      return <section id={sectionId} className={isAlternate ? 'bg-foreground/5' : ''}><ProjectProductClassification items={content.items || []} /></section>;
    case 'SWOT':
      return <section id={sectionId} className={isAlternate ? 'bg-foreground/5' : ''}><ProjectSWOT strengths={content.strengths || []} weaknesses={content.weaknesses || []} opportunities={content.opportunities || []} threats={content.threats || []} marketImage={content.marketImage} /></section>;
    case 'MindMap':
      return <section id={sectionId} className={isAlternate ? 'bg-foreground/5' : ''}><ProjectMindMap topic={content.topic} branches={content.branches || []} /></section>;
    case 'Benchmark':
      return <section id={sectionId} className={isAlternate ? 'bg-foreground/5' : ''}><ProjectBenchmark items={content.items || []} /></section>;
    case 'ProductRender':
      return <section id={sectionId} className={isAlternate ? 'bg-foreground/5' : ''}><ProjectRenderShowcase renders={content.renders || []} /></section>;

    case 'GapAnalysis':
      return <div id={sectionId}><GapAnalysisBlock content={content} isAlternate={isAlternate} /></div>;
    case 'UserContext':
      return <div id={sectionId}><UserContextBlock content={content} isAlternate={isAlternate} /></div>;
    case 'ResearchInsights':
      return <div id={sectionId}><ResearchInsightsBlock content={content} isAlternate={isAlternate} /></div>;
    case 'ReframeProblem':
      return <div id={sectionId}><ReframeProblemBlock content={content} isAlternate={isAlternate} /></div>;
    case 'SolutionCapabilities':
      return <div id={sectionId}><SolutionCapabilitiesBlock content={content} isAlternate={isAlternate} /></div>;
    case 'VRErgonomics':
      return <div id={sectionId}><VRErgonomicsBlock content={content} isAlternate={isAlternate} /></div>;
    case 'Table':
      return <div id={sectionId}><TableBlock content={content} isAlternate={isAlternate} /></div>;
    case 'Mechanism':
      return <div id={sectionId}><MechanismBlock content={content} sectionId={sectionId} isAlternate={isAlternate} /></div>;
      
    case 'Phase1Intro':
      return <Phase1IntroBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
    case 'Phase1Cycle':
      return <Phase1CycleBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
    case 'Phase1ProblemBento':
      return <Phase1ProblemBentoBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
    case 'Phase1ExistingMethods':
      return <Phase1ExistingMethodsBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
    case 'Phase1Ergonomics':
      return <Phase1ErgonomicsBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
    case 'Phase1DesignBrief':
      return <Phase1DesignBriefBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
    case 'Phase1ResearchMethod':
      return <Phase1ResearchMethodBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
    case 'Phase1PersonaEmpathy':
      return <Phase1PersonaEmpathyBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
    case 'Phase1Opportunity':
      return <Phase1OpportunityBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
    case 'Phase1UserNeeds':
      return <Phase1UserNeedsBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
      
    case 'Phase2SelectedConcept':
      return <Phase2SelectedConceptBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
    case 'Phase2TechnicalAspects':
      return <Phase2TechnicalAspectsBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
    case 'Phase2ProductSpec':
      return <Phase2ProductSpecBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
    case 'Phase2Dimensions':
      return <Phase2DimensionsBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
    case 'Phase2Renders':
      return <Phase2RendersBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
    case 'Phase2Takeaway':
      return <Phase2TakeawayBlock content={content} sectionId={sectionId} isAlternate={isAlternate || content.isAlternate} />;
      
    case 'AuraChargeIntro':
      return <AuraChargeIntroBlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'AuraChargeProblem':
      return <AuraChargeProblemBlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'AuraChargeChallenge':
      return <AuraChargeChallengeBlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'AuraChargeJourney':
      return <AuraChargeJourneyBlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'AuraChargeBenchmark':
      return <AuraChargeBenchmarkBlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'AuraChargeResearch':
      return <AuraChargeResearchBlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'AuraChargeCompetitor':
      return <AuraChargeCompetitorBlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'AuraChargePersona':
      return <AuraChargePersonaBlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'AuraChargeBrand':
      return <AuraChargeBrandBlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'AuraChargeIA':
      return <AuraChargeIABlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'AuraChargeGallery':
      return <AuraChargeGalleryBlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'AuraChargeFeatures':
      return <AuraChargeFeaturesBlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;
    case 'AuraChargeRenders':
      return <AuraChargeRendersBlock content={content} sectionId={sectionId} isAlternate={isAlternate} />;

    default:
      return null;
  }
}

// ─── Main ProjectRenderer ─────────────────────────────────────────────────────

export default function ProjectRenderer({ blocks = [] }) {
  const sectionList = getSectionList(blocks);
  return (
    <>
      {blocks.map((block, idx) => (
        <React.Fragment key={block.id || block.clientId || idx}>
          {renderBlock(block, sectionList[idx]?.id, idx % 2 !== 0)}
        </React.Fragment>
      ))}
    </>
  );
}
