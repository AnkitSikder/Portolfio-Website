import React from 'react';
import ScrollReveal from '../common/ScrollReveal';

export function ProjectOverview({ title, description, audience }) {
  return (
    <section className="py-12 md:py-16 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
        <div className="lg:col-span-4">
          <ScrollReveal>
            <h2 className="text-xs font-clash uppercase tracking-[0.2em] text-primary">{title}</h2>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8 md:gap-12">
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-2xl lg:text-3xl text-foreground font-clash font-medium tracking-wide leading-snug">
              {description}
            </p>
          </ScrollReveal>
          
          {audience && audience.length > 0 && (
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-4 pt-6 md:pt-8 border-t border-foreground/10">
                <h3 className="text-xs font-clash uppercase tracking-[0.2em] text-foreground/50">Target Audience</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {audience.map((item, idx) => (
                    <span key={idx} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-foreground/5 border border-foreground/10 text-sm text-foreground/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}

export function ProjectResearch({ interviews }) {
  if (!interviews) return null;
  return (
    <section className="py-12 md:py-16 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 mb-8 md:mb-16">
            <div className="flex flex-col gap-3 md:gap-4 flex-1">
              <h2 className="text-4xl md:text-5xl font-franchise uppercase tracking-wide text-primary">
                {interviews.heading || "User Interviews"}
              </h2>
              {(interviews.subheading || interviews.participants) && (
                <p className="text-sm md:text-base text-foreground/70 max-w-3xl font-clash font-medium tracking-wide">
                  {interviews.subheading || interviews.participants}
                </p>
              )}
            </div>
            {interviews.image && (
              <div className="w-full md:w-1/2 rounded-3xl overflow-hidden bg-foreground/5 border border-foreground/10 shadow-xl shrink-0">
                <img src={interviews.image} alt={interviews.heading || "User Interviews"} className="w-full h-auto object-cover max-h-[400px]" />
              </div>
            )}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {interviews.findings.map((finding, idx) => (
            <ScrollReveal key={idx} delay={0.1 * (idx + 1)}>
              <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl backdrop-blur-xl bg-foreground/5 border border-foreground/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] h-full flex flex-col gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-clash text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg md:text-xl font-clash font-semibold text-foreground">{finding.title}</h3>
                <p className="text-xs md:text-sm text-foreground/60 font-clash font-medium tracking-wide leading-relaxed">{finding.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCombinedResearch({ content }) {
  if (!content) return null;
  return (
    <section className="py-12 md:py-16 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          
          {/* Left Side */}
          <ScrollReveal>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3 md:gap-4">
                <h2 className="text-4xl md:text-5xl font-franchise uppercase tracking-wide text-foreground">
                  {content.heading || "User Interviews"}
                </h2>
                {(content.subheading || content.participants) && (
                  <p className="text-sm md:text-base text-foreground/70 font-clash font-medium tracking-wide">
                    {content.subheading || content.participants}
                  </p>
                )}
              </div>
              {content.image && (
                <div className="w-full rounded-3xl overflow-hidden bg-foreground/5 border border-foreground/10 shadow-xl">
                  <img src={content.image} alt={content.heading || "User Interviews"} className="w-full h-auto object-cover" />
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Right Side */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3 md:gap-4">
                <h2 className="text-4xl md:text-5xl font-franchise uppercase tracking-wide text-foreground">
                  {content.heading2 || "Survey Insights"}
                </h2>
                {(content.subheading2 || content.participants2) && (
                  <p className="text-sm md:text-base text-foreground/70 font-clash font-medium tracking-wide">
                    {content.subheading2 || content.participants2}
                  </p>
                )}
              </div>
              {content.image2 && (
                <div className="w-full rounded-3xl overflow-hidden bg-foreground/5 border border-foreground/10 shadow-xl">
                  <img src={content.image2} alt={content.heading2 || "Survey Insights"} className="w-full h-auto object-cover" />
                </div>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

export function ProjectSurveys({ surveys }) {
  if (!surveys) return null;
  return (
    <section className="py-12 md:py-16 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-franchise uppercase tracking-wide text-foreground">Survey Insights</h2>
            <p className="text-sm md:text-base text-foreground/70 max-w-3xl font-clash font-medium tracking-wide">{surveys.method}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {surveys.insights.map((insight, idx) => (
            <ScrollReveal key={idx} delay={0.1 * (idx + 1)}>
              <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-background/60 border border-foreground/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] h-full flex flex-col gap-3 md:gap-4">
                <h3 className="text-lg md:text-xl font-clash font-semibold text-primary">{insight.title}</h3>
                <p className="text-xs md:text-sm text-foreground/80 font-clash font-medium tracking-wide leading-relaxed">{insight.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


export function ProjectPersona({ personas }) {
  if (!personas) return null;
  return (
    <section className="py-12 md:py-16 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-franchise uppercase tracking-wide text-foreground mb-8 md:mb-16">User Personas</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {personas.map((persona, idx) => (
            <ScrollReveal key={idx} delay={0.2 * idx}>
              <div className="rounded-2xl md:rounded-[2rem] bg-background/60 backdrop-blur-xl border border-foreground/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden flex flex-col h-full relative group">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/20 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="p-5 md:p-6 relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                    {persona.image ? (
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/30 shrink-0">
                        <img src={persona.image} alt={persona.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-foreground/10 flex items-center justify-center text-xl md:text-2xl text-foreground/50 font-clash shrink-0">
                        {persona.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-clash font-bold text-foreground">{persona.name}</h3>
                      <p className="text-xs md:text-sm text-foreground/50 tracking-wide mt-0.5">{persona.demographics}</p>
                    </div>
                  </div>

                  <div className="mb-5 md:mb-8">
                    <p className="text-sm md:text-base text-primary font-clash font-medium tracking-wide italic leading-relaxed">"{persona.quote}"</p>
                  </div>

                  {persona.personality && persona.personality.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5 md:mb-8">
                      {persona.personality.map((trait, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-foreground/5 text-[11px] text-foreground/60 uppercase tracking-wider">{trait}</span>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 mt-auto">
                    <div>
                      <h4 className="text-xs font-clash uppercase tracking-[0.2em] text-foreground/60 mb-2 md:mb-3">Motivations</h4>
                      {Array.isArray(persona.motivations || persona.goals) ? (
                        <ul className="flex flex-col gap-2">
                          {(persona.motivations || persona.goals).map((item, i) => (
                            <li key={i} className="text-sm text-foreground/80 leading-relaxed flex gap-2">
                              <span className="text-primary mt-1 text-xs">◆</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-foreground/80 leading-relaxed">{persona.motivations || persona.goals}</p>
                      )}
                    </div>
                    <div>
                      <h4 className="text-xs font-clash uppercase tracking-[0.2em] text-foreground/60 mb-2 md:mb-3">Frustrations</h4>
                      {Array.isArray(persona.frustrations) ? (
                        <ul className="flex flex-col gap-2">
                          {persona.frustrations.map((item, i) => (
                            <li key={i} className="text-sm text-foreground/80 leading-relaxed flex gap-2">
                              <span className="text-red-400 mt-1 text-xs">◆</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-foreground/80 leading-relaxed">{persona.frustrations}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectComparison({ insight, competitors }) {
  if (!competitors) return null;
  return (
    <section className="py-12 md:py-16 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="max-w-4xl mb-8 md:mb-16">
            <h2 className="text-xs font-clash uppercase tracking-[0.2em] text-primary mb-4 md:mb-6">Competitive Analysis</h2>
            <p className="text-lg md:text-2xl text-foreground font-clash font-medium tracking-wide leading-snug">
              {insight}
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontally scrollable on mobile, grid on desktop */}
        <div className="overflow-x-auto pb-4 -mx-5 px-5 md:mx-0 md:px-0 snap-x snap-mandatory">
          <div className="flex md:grid md:grid-cols-4 gap-3 md:gap-4" style={{ minWidth: 'max-content' }}>
            {competitors.map((comp, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <div
                  className={`p-5 md:p-6 rounded-2xl flex flex-col gap-4 md:gap-6 h-full snap-start ${
                    comp.name === 'Visist.ai'
                      ? 'bg-primary text-black'
                      : 'backdrop-blur-lg bg-foreground/5 border border-foreground/10 text-foreground shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]'
                  }`}
                  style={{ minWidth: '220px' }}
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-clash font-bold mb-1">{comp.name}</h3>
                    <span className={`text-xs uppercase tracking-wider ${comp.name === 'Visist.ai' ? 'text-black/60' : 'text-foreground/40'}`}>{comp.focus}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${comp.name === 'Visist.ai' ? 'text-black/80' : 'text-primary'}`}>Strengths</h4>
                    <p className={`text-sm leading-relaxed ${comp.name === 'Visist.ai' ? 'text-black/90' : 'text-foreground/70'}`}>{comp.strengths}</p>
                  </div>
                  
                  <div className="flex-1 pt-3 md:pt-4 border-t border-current/10">
                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${comp.name === 'Visist.ai' ? 'text-black/80' : 'text-foreground/40'}`}>Weaknesses</h4>
                    <p className={`text-sm leading-relaxed ${comp.name === 'Visist.ai' ? 'text-black/90' : 'text-foreground/70'}`}>{comp.weaknesses}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectDesignSystem({ designSystem }) {
  if (!designSystem) return null;
  return (
    <section className="py-12 md:py-16 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-24">
        <ScrollReveal>
          <div className="flex flex-col gap-3 md:gap-4">
            <h2 className="text-4xl md:text-5xl font-franchise uppercase tracking-wide text-foreground">Style Guide</h2>
            <p className="text-sm md:text-base text-foreground/70 font-clash font-medium tracking-wide">The visual foundation balancing athletic energy with data-driven precision.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-5 md:gap-8">
              <h3 className="text-xs font-clash uppercase tracking-[0.2em] text-foreground/50">Color Palette</h3>
              <div className="grid grid-cols-5 gap-2 md:gap-4">
                {designSystem.colors.map((color, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5 md:gap-2">
                    <div className="w-full aspect-square rounded-xl md:rounded-2xl border border-foreground/10 shadow-lg" style={{ backgroundColor: `#${color.hex}` }} />
                    <div>
                      <p className="text-[10px] md:text-xs font-bold text-foreground truncate">{color.name}</p>
                      <p className="text-[9px] md:text-[10px] text-foreground/50">#{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-5 md:gap-8">
              <h3 className="text-xs font-clash uppercase tracking-[0.2em] text-foreground/50">Typography</h3>
              <div className="flex flex-col gap-4 md:gap-8">
                {designSystem.typography.map((type, idx) => (
                  <div key={idx} className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-foreground/5 border border-foreground/10 flex flex-col gap-3 md:gap-4">
                    <div className="text-4xl md:text-6xl text-foreground" style={{ fontFamily: type.family }}>Aa</div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-foreground mb-2">{type.family}</h4>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {type.weights.map((w, i) => (
                          <span key={i} className="text-[10px] md:text-xs px-2 py-1 rounded bg-foreground/10 text-foreground/80">{w}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function ProjectTesting({ testing }) {
  if (!testing) return null;
  return (
    <section className="py-12 md:py-16 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-16">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-franchise uppercase tracking-wide text-primary">User Testing Insights</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6">
            {testing.insights.map((insight, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <div className="p-5 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-xl bg-foreground/5 border border-foreground/10">
                  <h3 className="text-base md:text-lg font-clash font-bold text-foreground mb-3 md:mb-4">{insight.category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-primary font-bold mb-1 block">Positive</span>
                      <p className="text-sm text-foreground/80 leading-relaxed">{insight.positive}</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#ffb366] font-bold mb-1 block">Improvement</span>
                      <p className="text-sm text-foreground/80 leading-relaxed">{insight.improvement}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
            {testing.quotes.slice(0, 3).map((quote, idx) => (
              <ScrollReveal key={idx} delay={0.2 * idx}>
                <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-primary/10 border border-primary/20 relative">
                  <span className="absolute -top-3 -left-1 text-5xl md:text-6xl text-primary/40 font-serif">"</span>
                  <p className="text-sm md:text-lg text-foreground font-clash font-medium tracking-wide italic leading-relaxed relative z-10">
                    {quote}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectScreenShowcase({ screens }) {
  if (!screens || screens.length === 0) return null;
  
  return (
    <section className="py-12 md:py-16 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-24">
        {screens.map((screen, idx) => {
          if (screen.type === 'hero' || screen.type === 'full') {
            return (
              <ScrollReveal key={idx}>
                <div className="w-full flex flex-col gap-3 md:gap-4">
                  <div className="w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-xl">
                    <img src={screen.image} alt={screen.caption} className="w-full h-auto" />
                  </div>
                  {screen.caption && <p className="text-center text-xs md:text-sm text-foreground/50 font-clash font-medium tracking-wide">{screen.caption}</p>}
                </div>
              </ScrollReveal>
            );
          }
          
          if (screen.type === 'pair') {
            return (
              <ScrollReveal key={idx}>
                <div className="w-full flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
                    <div className="w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-xl">
                      <img src={screen.image1} alt={screen.caption} className="w-full h-auto" />
                    </div>
                    <div className="w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-foreground/5 border border-foreground/10 shadow-xl md:mt-12">
                      <img src={screen.image2} alt={screen.caption} className="w-full h-auto" />
                    </div>
                  </div>
                  {screen.caption && <p className="text-center text-xs md:text-sm text-foreground/50 font-clash font-medium tracking-wide mt-2 md:mt-4">{screen.caption}</p>}
                </div>
              </ScrollReveal>
            );
          }
          
          return null;
        })}
      </div>
    </section>
  );
}

export function ProjectProductClassification({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="py-12 md:py-16 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-franchise uppercase tracking-wide text-foreground mb-8 md:mb-12">Product Classification</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="w-full flex flex-col gap-2">
            {/* Header Row */}
            <div className="grid grid-cols-[1.2fr_1fr_1.2fr_1fr_1.5fr_1.5fr] gap-2">
              <div className="p-3 md:p-4 bg-primary/10 border border-primary/20 text-primary font-clash uppercase tracking-wider text-xs md:text-sm rounded-xl">Product Type</div>
              <div className="p-3 md:p-4 bg-foreground/5 border border-foreground/10 text-foreground/70 font-clash uppercase tracking-wider text-xs md:text-sm rounded-xl">Capacity</div>
              <div className="p-3 md:p-4 bg-foreground/5 border border-foreground/10 text-foreground/70 font-clash uppercase tracking-wider text-xs md:text-sm rounded-xl">Dimensions</div>
              <div className="p-3 md:p-4 bg-foreground/5 border border-foreground/10 text-foreground/70 font-clash uppercase tracking-wider text-xs md:text-sm rounded-xl">Weight</div>
              <div className="p-3 md:p-4 bg-foreground/5 border border-foreground/10 text-foreground/70 font-clash uppercase tracking-wider text-xs md:text-sm rounded-xl">Purposes</div>
              <div className="p-3 md:p-4 bg-foreground/5 border border-foreground/10 text-foreground/70 font-clash uppercase tracking-wider text-xs md:text-sm rounded-xl">Features</div>
            </div>

            {/* Data Rows */}
            {items.map((item, idx) => {
              const isHighlighted = item.type.toLowerCase().includes('inverter');
              
              return (
                <div key={idx} className="relative group">
                  {/* Outline Border for Highlighted Row */}
                  {isHighlighted && (
                    <div className="absolute inset-0 rounded-xl border-[2px] border-primary/80 shadow-[0_0_15px_rgba(255,95,31,0.2)] z-10 pointer-events-none" style={{ top: '-2px', bottom: '-2px', left: '-2px', right: '-2px' }}></div>
                  )}
                  
                  {/* Row Content */}
                  <div className="grid grid-cols-[1.2fr_1fr_1.2fr_1fr_1.5fr_1.5fr] gap-2 relative z-0">
                    <div className={`p-3 md:p-4 flex items-center bg-primary/5 text-foreground font-clash font-bold text-xs md:text-sm lg:text-base rounded-xl border border-primary/10 transition-all group-hover:bg-primary/20 group-hover:border-primary/30 ${isHighlighted ? 'bg-primary/10 border-primary/30' : ''}`}>{item.type}</div>
                    <div className={`p-3 md:p-4 flex items-center bg-foreground/5 text-foreground/80 font-clash font-medium tracking-wide text-xs md:text-sm rounded-xl border border-foreground/5 transition-all group-hover:bg-foreground/10 group-hover:border-foreground/20 ${isHighlighted ? 'bg-primary/5' : ''}`}>{item.capacity}</div>
                    <div className={`p-3 md:p-4 flex items-center bg-foreground/5 text-foreground/80 font-clash font-medium tracking-wide text-xs md:text-sm rounded-xl border border-foreground/5 transition-all group-hover:bg-foreground/10 group-hover:border-foreground/20 ${isHighlighted ? 'bg-primary/5' : ''}`}>{item.dimensions}</div>
                    <div className={`p-3 md:p-4 flex items-center bg-foreground/5 text-foreground/80 font-clash font-medium tracking-wide text-xs md:text-sm rounded-xl border border-foreground/5 transition-all group-hover:bg-foreground/10 group-hover:border-foreground/20 ${isHighlighted ? 'bg-primary/5' : ''}`}>{item.weight}</div>
                    <div className={`p-3 md:p-4 flex items-center bg-foreground/5 text-foreground/80 font-clash font-medium tracking-wide text-xs md:text-sm rounded-xl border border-foreground/5 transition-all group-hover:bg-foreground/10 group-hover:border-foreground/20 ${isHighlighted ? 'bg-primary/5' : ''}`}>{item.purposes}</div>
                    <div className={`p-3 md:p-4 flex items-center bg-foreground/5 text-foreground/80 font-clash font-medium tracking-wide text-xs md:text-sm rounded-xl border border-foreground/5 transition-all group-hover:bg-foreground/10 group-hover:border-foreground/20 ${isHighlighted ? 'bg-primary/5' : ''}`}>{item.features}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ProjectSWOT({ strengths, weaknesses, opportunities, threats, marketImage }) {
  const sections = [
    { title: 'Strengths', data: strengths, color: 'text-primary' },
    { title: 'Weaknesses', data: weaknesses, color: 'text-red-400' },
    { title: 'Opportunities', data: opportunities, color: 'text-blue-400' },
    { title: 'Threats', data: threats, color: 'text-yellow-400' },
  ];

  return (
    <section className="py-12 md:py-16 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-franchise uppercase tracking-wide text-foreground">SWOT & Market Analysis</h2>
          </div>
        </ScrollReveal>
        
        <div className={`grid grid-cols-1 ${marketImage ? 'lg:grid-cols-2' : ''} gap-8 lg:gap-16 items-center`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {sections.map((section, idx) => (
              section.data && section.data.length > 0 && (
                <ScrollReveal key={idx} delay={0.1 * idx}>
                  <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl backdrop-blur-xl bg-foreground/5 border border-foreground/10 h-full">
                    <h3 className={`text-xl md:text-2xl font-clash font-bold mb-4 ${section.color}`}>{section.title}</h3>
                    <ul className="flex flex-col gap-3">
                      {section.data.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm md:text-base font-clash font-medium tracking-wide text-foreground/80">
                          <span className="text-foreground/40 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )
            ))}
          </div>

          {marketImage && (
            <div className="w-full h-full min-h-[300px] md:min-h-[500px]">
              <ScrollReveal delay={0.3}>
                <div className="rounded-2xl md:rounded-[2rem] overflow-hidden border border-foreground/10 h-full flex items-center justify-center bg-foreground/5">
                  <img src={marketImage} alt="Market Inverter Analysis" className="w-full h-full object-contain" />
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function ProjectMindMap({ topic, branches }) {
  if (!branches || branches.length === 0) return null;
  return (
    <section className="py-12 md:py-16 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-franchise uppercase tracking-wide text-foreground mb-12 text-center">{topic || 'Mind Map'}</h2>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 relative">
          {branches.map((branch, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="flex flex-col items-center max-w-[280px]">
                <div className="p-4 rounded-xl bg-primary/20 border border-primary/30 text-primary font-clash font-bold text-center mb-6 w-full shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                  {branch.name}
                </div>
                {branch.subtopics && branch.subtopics.length > 0 && (
                  <div className="flex flex-col gap-3 w-full border-l-2 border-foreground/10 pl-4 ml-4">
                    {branch.subtopics.map((sub, i) => (
                      <div key={i} className="py-2 px-3 rounded-lg bg-foreground/5 text-sm text-foreground/80 font-clash font-medium tracking-wide">
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectBenchmark({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="py-12 md:py-16 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-franchise uppercase tracking-wide text-foreground mb-8 md:mb-16">Benchmark Products</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx}>
              <div className="rounded-2xl md:rounded-3xl bg-background border border-foreground/10 overflow-hidden h-full flex flex-col group hover:border-primary/50 transition-colors">
                {item.image && (
                  <div className="h-48 md:h-64 bg-white/5 flex items-center justify-center p-6 relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-screen group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <span className="text-xs font-clash uppercase tracking-widest text-primary mb-1">{item.brand}</span>
                  <h3 className="text-xl md:text-2xl font-bold font-clash text-foreground mb-6">{item.name}</h3>
                  <ul className="flex flex-col gap-3 mt-auto">
                    {item.attributes && item.attributes.map((attr, i) => (
                      <li key={i} className="flex gap-3 text-sm font-clash font-medium tracking-wide text-foreground/70 border-t border-foreground/5 pt-3">
                        <span className="text-primary mt-1 text-xs">◆</span>
                        <span>{attr}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectRenderShowcase({ renders }) {
  if (!renders || renders.length === 0) return null;
  return (
    <section className="py-12 md:py-16 px-5 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-16">
        {renders.map((render, idx) => {
          if (render.layout === 'full') {
            return (
              <ScrollReveal key={idx}>
                <div className="w-full flex flex-col gap-3 md:gap-4">
                  <div className="w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-background border border-foreground/10 shadow-2xl relative group">
                    <img src={render.image} alt={render.caption} className="w-full h-auto mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {render.caption && <p className="text-center text-xs md:text-sm text-foreground/50 font-clash font-medium tracking-wide">{render.caption}</p>}
                </div>
              </ScrollReveal>
            );
          } else if (render.layout === 'half') {
            return (
              <ScrollReveal key={idx}>
                <div className="w-full md:w-2/3 mx-auto flex flex-col gap-3 md:gap-4">
                  <div className="w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-background border border-foreground/10 shadow-xl relative">
                    <img src={render.image} alt={render.caption} className="w-full h-auto mix-blend-screen" />
                  </div>
                  {render.caption && <p className="text-center text-xs md:text-sm text-foreground/50 font-clash font-medium tracking-wide">{render.caption}</p>}
                </div>
              </ScrollReveal>
            );
          } else {
             return (
              <ScrollReveal key={idx}>
                <div className="w-full md:w-1/2 mx-auto flex flex-col gap-3 md:gap-4">
                  <div className="w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-background border border-foreground/10 shadow-xl relative">
                    <img src={render.image} alt={render.caption} className="w-full h-auto mix-blend-screen" />
                  </div>
                  {render.caption && <p className="text-center text-xs md:text-sm text-foreground/50 font-clash font-medium tracking-wide">{render.caption}</p>}
                </div>
              </ScrollReveal>
            );
          }
        })}
      </div>
    </section>
  );
}

