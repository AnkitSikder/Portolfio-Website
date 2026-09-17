import React from 'react';
import ScrollReveal from '../../common/ScrollReveal';
import SectionHeader from '../common/SectionHeader';

export default function FormativeTestingBlock({ content, sectionId, isAlternate }) {
  if (!content) return null;
  return (
    <section id={sectionId} className={`py-10 md:py-16 lg:py-20 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto">
        


        {/* 55/45 SPLIT (35%) */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-12 md:mb-16">
          {/* LEFT SIDE — Main Intro + Testing approach (55%) */}
          <div className="w-full lg:w-[55%] flex flex-col gap-8 md:gap-12">
            
            <ScrollReveal>
              <SectionHeader
                title="Testing"
                heading={content.title || "Did it actually work?"}
                description={content.participantCount || "5 participants tested the VR training experience across learning, interaction and workload."}
                className="!mb-0"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <div className="mb-8">
                  <h4 className="text-2xl md:text-3xl font-clash font-medium text-foreground">Testing approach</h4>
                </div>
                
                <div className="flex flex-col gap-8 pl-6 border-l border-white/10 relative">
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                    <h5 className="font-clash text-[20px] md:text-[22px] font-medium text-foreground mb-1">Tutorial</h5>
                    <p className="font-clash font-medium text-sm md:text-[15px] tracking-wide text-foreground/60 leading-relaxed">Learn and practise the seven hand signals.</p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                    <h5 className="font-clash text-[20px] md:text-[22px] font-medium text-foreground mb-1">Evaluation</h5>
                    <p className="font-clash font-medium text-sm md:text-[15px] tracking-wide text-foreground/60 leading-relaxed">Respond to live traffic without visual guidance.</p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                    <h5 className="font-clash text-[20px] md:text-[22px] font-medium text-foreground mb-1">Post-trial rating</h5>
                    <p className="font-clash font-medium text-sm md:text-[15px] tracking-wide text-foreground/60 leading-relaxed">Complete NASA-TLX and interface feedback questions.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>



          </div>

          {/* RIGHT SIDE — VR IMAGE (45%) */}
          <div className="w-full lg:w-[45%]">
            <ScrollReveal delay={0.3}>
              <div className="rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 h-full min-h-[500px] lg:min-h-[600px] relative shadow-2xl group hover:border-primary/20 transition-colors duration-500">
                <img src="/_archive/Testing%20VR.jpg" alt="VR Testing" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* MIDDLE — HORIZONTAL NASA-TLX CARD */}
        <ScrollReveal>
          <div className="p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative overflow-hidden group hover:border-primary/20 transition-colors duration-500 mb-12 md:mb-16 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex flex-col items-start lg:items-start w-full lg:w-1/3 relative z-10 text-left">
              {content.logoUrl ? (
                <img src={content.logoUrl} alt="Logo" className="h-16 md:h-20 mb-6 object-contain" />
              ) : (
                <h4 className="text-4xl font-franchise uppercase text-foreground mb-6 tracking-widest relative z-10">NASA-TLX</h4>
              )}
              <p className="text-lg md:text-xl font-clash font-medium text-foreground mb-2">Measuring perceived workload</p>
              <p className="font-clash font-medium text-sm md:text-[15px] tracking-wide text-foreground/60 max-w-sm leading-relaxed">
                NASA-TLX was used immediately after the simulation to capture the participant's perceived mental and physical workload during the task.
              </p>
            </div>

            <div className="w-full lg:w-2/3 relative z-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {['Mental', 'Physical', 'Temporal', 'Performance', 'Effort', 'Frustration'].map(pill => (
                <div key={pill} className="py-4 px-4 text-center rounded-xl bg-white/5 border border-white/10 text-xs md:text-sm font-clash text-foreground/80 tracking-widest uppercase hover:bg-white/10 transition-colors shadow-lg">
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* BOTTOM — LARGE GOOGLE FORM CHART (45%) */}
        <ScrollReveal>
          <div className="mb-0">
            <SectionHeader 
              title="What participants said"
              heading="Google Form results"
              className="!mb-8"
            />
            
            <div className="relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 mb-6 group shadow-2xl">
              <div className="absolute top-6 right-6 z-10 bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-xl">
                <span className="font-clash text-foreground text-sm font-medium tracking-wider">n = 5</span>
              </div>
              
              {content.image ? (
                <img src={content.image} alt="Google Form Results" className="w-full h-auto object-cover" />
              ) : (
                <div className="w-full aspect-[16/9] flex items-center justify-center text-foreground/20 font-clash tracking-widest">
                  [ LARGE GOOGLE FORM CHART IMAGE ]
                </div>
              )}
            </div>
            <p className="font-clash font-medium text-sm md:text-[15px] tracking-wide text-foreground/60 text-center max-w-2xl mx-auto leading-relaxed">
              Participant responses across workload, performance and post-test interaction questions.
            </p>
          </div>
        </ScrollReveal>



      </div>
    </section>
  );
}
