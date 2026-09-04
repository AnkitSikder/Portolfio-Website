import React, { useState } from 'react';
import Lanyard from '../layout/Lanyard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '../common/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <section id="about" className="relative w-full min-h-screen bg-background text-foreground flex items-center overflow-hidden z-10">
      
      {/* Linear Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff5f1f]/30 via-background to-background mix-blend-screen opacity-80" />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: About Me Content */}
        <div className="flex flex-col z-10 order-2 lg:order-1 pt-12 pb-0 lg:pt-16 lg:pb-0">
          {/* Typographic Hero */}
          <div className="mb-16 flex flex-col items-start gap-1 md:gap-2 font-clash">
            
            {/* Line 1 */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground leading-none">
                <span>Hi! I'm</span>
                <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#fcf2ec] shadow-lg">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#ff5f1f] via-[#ff3b00] to-[#ff9a44]">
                    Ankit Sikder
                  </span>
                </span>
              </div>
            </ScrollReveal>
            
            {/* Line 2 */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground leading-none">
              <span>a</span>
              <span className="inline-flex items-center px-5 py-2 md:py-3 rounded-full bg-[#262a37] text-foreground text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide leading-none shadow-md">
                Digital Product Designer
              </span>
            </div>
            </ScrollReveal>

            {/* Line 3 */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground leading-none">
              <span>from</span>
              <span className="inline-flex items-center px-5 py-2 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-sm text-foreground text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide leading-none">
                Kolkata <span className="font-bold text-[0.6em] ml-2 text-primary tracking-wider">IN</span>
              </span>
            </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal delay={0.4}>
              <p className="mt-8 text-foreground/75 font-clash text-xl md:text-2xl leading-relaxed max-w-[640px]">
                Masters student in Interaction Design with 3+ years of industry experience in UI/UX and Product Design. I craft research-driven, AI-integrated digital experiences.
              </p>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="text-5xl font-franchise tracking-wide text-foreground mb-6 border-b border-foreground/10 pb-4 inline-block">
                Education
              </h3>
            </ScrollReveal>
            <ul className="space-y-8 font-clash">
              <ScrollReveal delay={0.2}>
                <li className="flex items-start gap-4 relative">
                <div className="w-16 h-16 shrink-0 rounded-md bg-foreground/5 border border-foreground/10 p-1.5 flex items-center justify-center">
                  <img src="/logos/iiitdm.png" alt="IIITDM Jabalpur" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-2xl text-foreground font-medium">Masters in Interaction Design</h4>
                    <span className="text-primary text-base md:text-lg font-medium tracking-wider">06/2027</span>
                  </div>
                  <p className="text-foreground/60 text-lg">IIITDM Jabalpur, Jabalpur, Madhya Pradesh</p>
                </div>
              </li>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <li className="flex items-start gap-4 relative">
                <div className="w-16 h-16 shrink-0 rounded-md bg-foreground/5 border border-foreground/10 p-1.5 flex items-center justify-center">
                  <img src="/logos/nirma.png" alt="Nirma University" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-2xl text-foreground font-medium">Bachelors in Visual Design</h4>
                    <span className="text-primary text-base md:text-lg font-medium tracking-wider">06/2023</span>
                  </div>
                  <p className="text-foreground/60 text-lg">IOD, Nirma University, Ahmedabad, Gujarat</p>
                </div>
              </li>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <li className="flex items-start gap-4 relative">
                <div className="w-16 h-16 shrink-0 rounded-md bg-foreground/5 border border-foreground/10 p-1.5 flex items-center justify-center">
                  <img src="/logos/apeejay.png" alt="Apeejay School" className="w-full h-full object-contain rounded-sm" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-2xl text-foreground font-medium">Higher Studies</h4>
                    <span className="text-primary text-base md:text-lg font-medium tracking-wider">06/2019</span>
                  </div>
                  <p className="text-foreground/60 text-lg">Apeejay School, Kolkata, West Bengal</p>
                </div>
              </li>
              </ScrollReveal>
            </ul>
          </div>
        </div>

        {/* Right Side: Interactive Lanyard Card */}
        <div 
          className="relative w-full h-[600px] lg:h-[800px] z-10 flex justify-center items-center order-1 lg:order-2 cursor-grab active:cursor-grabbing pointer-events-none md:pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
        >
          {/* Custom Cursor Tooltip */}
          {isHovered && (
            <div 
              className="hidden md:block fixed pointer-events-none z-50 px-4 py-1.5 bg-foreground text-black text-sm font-semibold rounded-full shadow-xl whitespace-nowrap"
              style={{
                left: mousePos.x,
                top: mousePos.y,
                transform: 'translate(15px, 15px)'
              }}
            >
              Drag it!!
            </div>
          )}

          {/* A subtle glowing pedestal effect under the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-foreground/5 blur-[100px] pointer-events-none" />
          
          <Lanyard 
            position={[0, 0, 20]} 
            gravity={[0, -40, 0]} 
            frontImage="/20230306_122745.jpg" 
            backImage="/logo-card.svg" 
            imageFit="cover" 
            lanyardWidth={1}
          />
        </div>

      </div>
    </section>
  );
}
