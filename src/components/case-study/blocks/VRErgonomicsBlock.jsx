import React from 'react';
import { ArrowRight, Search, Eye, Activity, Target, Shield, CheckCircle2, Navigation } from 'lucide-react';

export default function VRErgonomicsBlock({ content, isAlternate }) {
  const {
    heroImage,
    operationalImage,
    systemImage,
    tutorialImage,
    evaluationImage
  } = content || {};

  return (
    <section className={`py-10 md:py-16 lg:py-20 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-white w-full overflow-hidden`}>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16 md:gap-24 lg:gap-32">
        
        {/* Intro */}
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="font-franchise text-4xl md:text-5xl uppercase tracking-wide text-foreground leading-tight">
              Designing information around the task, not over it
            </h2>
            <p className="font-clash text-lg md:text-xl font-medium tracking-wide text-white/70 leading-relaxed max-w-3xl border-l-4 border-primary pl-6 py-2">
              In a VR traffic simulation, the interface cannot compete with the intersection itself. I structured the information architecture around where the user looks, what they are doing, and how much guidance they need at each stage of training.
            </p>
          </div>
          
          {heroImage && (
            <div className="w-full rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl relative aspect-[21/9] flex items-center justify-center">
              <img src={heroImage} alt="VR Ergonomics Hero" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
          )}
        </div>

        {/* 01 - VISUAL ERGONOMICS */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="font-clash text-sm uppercase tracking-[0.2em] text-primary">
              Visual Ergonomics
            </h2>
            <h3 className="font-franchise text-4xl md:text-5xl uppercase tracking-wide text-white leading-tight">
              The UI stays within the user's natural view
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 lg:p-10 rounded-[2rem] flex flex-col gap-4 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="font-clash text-xl md:text-2xl font-medium text-white/90">110&deg; Field of View</h4>
              <p className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-white/60 leading-relaxed">
                Tutorial elements are positioned within the 110&deg; horizontal field of view, reducing unnecessary head rotation and physical fatigue.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 lg:p-10 rounded-[2rem] flex flex-col gap-4 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="font-clash text-xl md:text-2xl font-medium text-white/90">Spatial Legibility</h4>
              <p className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-white/60 leading-relaxed">
                UI scale is determined by spatial distance, maintaining readability while reducing the perceived screen-door effect.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 md:p-8 lg:p-10 rounded-[2rem] flex flex-col gap-4 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-clash text-xl md:text-2xl font-medium text-white/90">Comfortable Depth</h4>
              <p className="font-clash text-sm md:text-[15px] font-medium tracking-wide text-white/60 leading-relaxed">
                Fixed virtual distances help reduce vergence&ndash;accommodation conflict, limiting visual strain during extended interaction.
              </p>
            </div>
          </div>
          
        </div>

        {/* 02 - INFORMATION ARCHITECTURE */}
        <div className="flex flex-col gap-12 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
          
          <div className="flex flex-col gap-4 relative z-10">
            <h2 className="font-clash text-sm uppercase tracking-[0.2em] text-primary">
              Information Architecture
            </h2>
            <h3 className="font-franchise text-4xl md:text-5xl uppercase tracking-wide text-white leading-tight">
              Two layers of information, two modes of attention
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start relative z-10">
            
            {/* Operational UI */}
            <div className="flex flex-col gap-6">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 relative">
                {operationalImage ? (
                  <img src={operationalImage} alt="Operational UI" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-clash bg-black/50">Operational UI Image</div>
                )}
                <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex flex-wrap gap-2">
                  <span className="text-xs font-clash uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full text-white/80">Waist height</span>
                  <span className="text-xs font-clash uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full text-white/80">45&deg; upward tilt</span>
                  <span className="text-xs font-clash uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full text-white/80">Persistent HUD</span>
                </div>
              </div>
              <div>
                <h4 className="font-clash text-2xl font-medium text-primary mb-3">Performance Mode</h4>
                <p className="font-clash text-[15px] font-medium tracking-wide text-white/60 leading-relaxed">
                  Persistent information stays in the lower visual field, aligned with the physical booth, so the trainee can monitor status without losing focus on traffic.
                </p>
              </div>
            </div>


            {/* System UI */}
            <div className="flex flex-col gap-6">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 relative">
                {systemImage ? (
                  <img src={systemImage} alt="System UI" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-clash bg-black/50">System UI Image</div>
                )}
                <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex flex-wrap gap-2">
                  <span className="text-xs font-clash uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full text-white/80">2 m virtual distance</span>
                  <span className="text-xs font-clash uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full text-white/80">State-dependent</span>
                  <span className="text-xs font-clash uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full text-white/80">Menu Controls</span>
                </div>
              </div>
              <div>
                <h4 className="font-clash text-2xl font-medium text-primary mb-3">System Mode</h4>
                <p className="font-clash text-[15px] font-medium tracking-wide text-white/60 leading-relaxed">
                  Controls appear directly in front of the user only when needed, separating simulation control from active traffic management.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 03 - TUTORIAL -> EVALUATION */}
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="font-clash text-sm uppercase tracking-[0.2em] text-primary">
              Tutorial &rarr; Evaluation
            </h2>
            <h3 className="font-franchise text-4xl md:text-5xl uppercase tracking-wide text-white leading-tight">
              Teach the gesture. Then remove the guidance.
            </h3>
            <p className="font-clash text-[15px] font-medium tracking-wide text-white/60 leading-relaxed max-w-2xl mt-2">
              The training interface gradually reduces support: users first learn through visual and audio cues, then perform the same actions independently in live traffic.
            </p>
          </div>

          {/* 4-step progression */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative">
            
            <div className="flex flex-col gap-4 relative z-10 group">
              <div className="hidden md:block absolute top-6 left-[64px] w-[calc(100%-3rem)] h-px bg-white/10" />
              <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-franchise text-2xl group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] transition-all">01</div>
              <div>
                <h4 className="font-clash text-lg font-semibold text-white/90 mb-1 uppercase tracking-wider">Learn</h4>
                <p className="font-clash text-sm text-primary font-medium mb-2">Ghost Hands</p>
                <p className="font-clash text-sm text-white/50 leading-relaxed">Semi-transparent hand models demonstrate the required posture and movement.</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 relative z-10 group">
              <div className="hidden md:block absolute top-6 left-[64px] w-[calc(100%-3rem)] h-px bg-white/10" />
              <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-franchise text-2xl group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] transition-all">02</div>
              <div>
                <h4 className="font-clash text-lg font-semibold text-white/90 mb-1 uppercase tracking-wider">Practise</h4>
                <p className="font-clash text-sm text-primary font-medium mb-2">Hand Tracking</p>
                <p className="font-clash text-sm text-white/50 leading-relaxed">The trainee reproduces the gesture directly through hand movement.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 relative z-10 group">
              <div className="hidden md:block absolute top-6 left-[64px] w-[calc(100%-3rem)] h-px bg-white/10" />
              <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-franchise text-2xl group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] transition-all">03</div>
              <div>
                <h4 className="font-clash text-lg font-semibold text-white/90 mb-1 uppercase tracking-wider">Verify</h4>
                <p className="font-clash text-sm text-primary font-medium mb-2">Immediate Feedback</p>
                <p className="font-clash text-sm text-white/50 leading-relaxed">Detection volumes validate the gesture with visual ticks and "ding" audio.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 relative z-10 group">
              <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-franchise text-2xl shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">04</div>
              <div>
                <h4 className="font-clash text-lg font-semibold text-white/90 mb-1 uppercase tracking-wider">Respond</h4>
                <p className="font-clash text-sm text-primary font-medium mb-2">World Feedback</p>
                <p className="font-clash text-sm text-white/50 leading-relaxed">The surrounding traffic responds to the officer's action, connecting gesture to consequence.</p>
              </div>
            </div>
          </div>

          {/* Tutorial vs Evaluation Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch mt-8">
            
            {/* Tutorial Mode */}
            <div className="rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden flex flex-col group hover:border-white/20 transition-all">
              <div className="p-6 md:p-8 bg-background/50 border-b border-white/5">
                <h4 className="font-clash text-2xl font-medium text-white/90 mb-2 flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-primary" />
                  Tutorial Mode
                </h4>
                <p className="font-clash text-[15px] text-white/50">Guide the user toward competence.</p>
              </div>
              <div className="aspect-[16/9] w-full bg-black/50 relative border-b border-white/5">
                {tutorialImage ? (
                  <img src={tutorialImage} alt="Tutorial Mode" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-clash">Tutorial Mode Image</div>
                )}
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-4 bg-background/30 flex-1">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="font-clash text-xs uppercase tracking-widest text-primary">Guidance</span>
                  <span className="font-clash text-sm text-white/80">Ghost Hand demonstrations</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="font-clash text-xs uppercase tracking-widest text-primary">Pacing</span>
                  <span className="font-clash text-sm text-white/80">One mission at a time</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="font-clash text-xs uppercase tracking-widest text-primary">Feedback</span>
                  <span className="font-clash text-sm text-white/80">Visual + audio confirmation</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-clash text-xs uppercase tracking-widest text-primary">Navigation</span>
                  <span className="font-clash text-sm text-white/80">Next / Back for self-paced learning</span>
                </div>
              </div>
            </div>

            {/* Evaluation Mode */}
            <div className="rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden flex flex-col group hover:border-white/20 transition-all">
              <div className="p-6 md:p-8 bg-background/50 border-b border-white/5">
                <h4 className="font-clash text-2xl font-medium text-white/90 mb-2 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  Evaluation Mode
                </h4>
                <p className="font-clash text-[15px] text-white/50">Remove the support. Test the response.</p>
              </div>
              <div className="aspect-[16/9] w-full bg-black/50 relative border-b border-white/5">
                {evaluationImage ? (
                  <img src={evaluationImage} alt="Evaluation Mode" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-clash">Evaluation Mode Image</div>
                )}
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-4 bg-background/30 flex-1">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="font-clash text-xs uppercase tracking-widest text-primary">Guidance</span>
                  <span className="font-clash text-sm text-white/80">No Ghost Hands</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="font-clash text-xs uppercase tracking-widest text-primary">Decision</span>
                  <span className="font-clash text-sm text-white/80">Choose the signal from live traffic</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="font-clash text-xs uppercase tracking-widest text-primary">Validation</span>
                  <span className="font-clash text-sm text-white/80">Ground-truth triggers monitor execution</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-clash text-xs uppercase tracking-widest text-primary">Pressure</span>
                  <span className="font-clash text-sm text-white/80">Multi-lane decision-making under stress</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* INTERACTION LOOP */}
        <div className="w-full rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-6 md:p-12 lg:p-16 flex flex-col gap-8 md:gap-12 relative overflow-hidden">
          <div className="absolute -inset-[100%] bg-[radial-gradient(ellipse_at_center,_rgba(var(--primary-rgb),0.05)_0%,_transparent_50%)] pointer-events-none" />
          
          <div className="text-center relative z-10">
            <h4 className="font-franchise text-3xl md:text-4xl tracking-wide text-white/90 uppercase mb-3">Every interaction follows the same loop</h4>
            <div className="w-24 h-px bg-primary/50 mx-auto" />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 xl:gap-6 relative z-10 max-w-5xl mx-auto w-full">
            <div className="flex flex-col items-center text-center gap-2">
              <span className="font-clash text-xs uppercase tracking-widest text-white/40">01 / User Action</span>
              <span className="font-clash text-lg text-white/90 font-medium px-5 py-3 bg-white/5 rounded-2xl border border-white/10 w-full lg:w-auto min-w-[180px]">Performs gesture</span>
            </div>
            
            <ArrowRight className="w-5 h-5 text-primary rotate-90 lg:rotate-0 shrink-0" />
            
            <div className="flex flex-col items-center text-center gap-2">
              <span className="font-clash text-xs uppercase tracking-widest text-white/40">02 / Detection</span>
              <span className="font-clash text-lg text-white/90 font-medium px-5 py-3 bg-white/5 rounded-2xl border border-white/10 w-full lg:w-auto min-w-[180px]">Hand position checked</span>
            </div>

            <ArrowRight className="w-5 h-5 text-primary rotate-90 lg:rotate-0 shrink-0" />
            
            <div className="flex flex-col items-center text-center gap-2">
              <span className="font-clash text-xs uppercase tracking-widest text-white/40">03 / Feedback</span>
              <span className="font-clash text-lg text-white/90 font-medium px-5 py-3 bg-white/5 rounded-2xl border border-white/10 w-full lg:w-auto min-w-[180px]">Visual + Audio + Haptic</span>
            </div>

            <ArrowRight className="w-5 h-5 text-primary rotate-90 lg:rotate-0 shrink-0" />

            <div className="flex flex-col items-center text-center gap-2">
              <span className="font-clash text-xs uppercase tracking-widest text-white/40">04 / World Response</span>
              <span className="font-clash text-lg text-primary font-medium px-5 py-3 bg-primary/10 rounded-2xl border border-primary/20 w-full lg:w-auto min-w-[180px] shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]">Vehicles react</span>
            </div>
          </div>

          <div className="text-center relative z-10 mt-4 max-w-2xl mx-auto">
            <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-6 opacity-80" />
            <p className="font-franchise text-2xl md:text-3xl tracking-wide text-white/80 uppercase leading-snug">
              The interface doesn't tell the user what to do forever.<br/>
              <span className="text-white">It teaches, confirms, and eventually gets out of the way.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
