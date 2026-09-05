import React from 'react';
import HoverButton from '../common/HoverButton';
import ScrollReveal from '../common/ScrollReveal';

export default function Footer() {
  return (
    <footer id="contact" data-footer="site-footer" className="relative w-full md:aspect-[1920/833] min-h-[700px] md:min-h-[450px] bg-[#171621] overflow-hidden flex font-clash select-none">
      
      {/* Custom SVG Background */}
      <svg 
        className="absolute inset-0 w-full h-full z-0" 
        viewBox="0 120 1920 833" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g>
          <rect y="120" width="1920" height="833" fill="#171621"/>
          
          {/* The 4 cream rounded rectangles that form the intersecting lines */}
          <path d="M3000 3000 V835 H208.997 A90 90 0 0 1 129 914.997 V3000 H3000 Z" fill="#FCF2EC"/>
          <path d="M-2000 3000 V835 H30.003 A90 90 0 0 0 110 914.997 V3000 H-2000 Z" fill="#FCF2EC"/>
          <path d="M-2000 -1000 V816 H30.003 A90 90 0 0 1 110 736.003 V-1000 H-2000 Z" fill="#FCF2EC"/>
          <path d="M3000 -1000 V816 H208.997 A90 90 0 0 0 129 736.003 V-1000 H3000 Z" fill="#FCF2EC"/>
          
          {/* Rotating Avatar Button */}
          <g className="animate-[spin_12s_linear_infinite]" style={{ transformOrigin: "119.5px 825.5px" }}>
            <circle cx="119.5" cy="825.5" r="75" fill="#ff5a00" />
            {/* Dark inner border for the button to match reference */}
            <circle cx="119.5" cy="825.5" r="70.5" fill="none" stroke="#171621" strokeWidth="6" />
            {/* Avatar Sticker (Spinning with the button) */}
            <image href="/Avatar%20Sticker.png" x="49.5" y="755.5" width="140" height="140" />
          </g>

        </g>
      </svg>

      {/* HTML Overlay for accessibility, responsiveness and interactions */}
      <div className="absolute top-[8%] md:top-[15%] left-[5%] md:left-[12%] right-[5%] md:right-[5%] bottom-[20%] md:bottom-[25%] flex flex-col md:flex-row items-center md:items-start justify-between pointer-events-none z-10 pt-2 md:pt-6">
        
        {/* Left Column */}
        <div className="flex flex-col items-center md:items-start justify-between h-auto md:h-full pointer-events-auto gap-8 md:gap-0">
          {/* Logo */}
          <ScrollReveal delay={0.1} direction="up">
            <img src="/logo-card.svg" alt="Logo" className="w-48 md:w-80" />
          </ScrollReveal>

          {/* Text Links */}
          <ScrollReveal delay={0.2} direction="up">
            <div className="flex justify-center md:justify-start gap-8 md:gap-16 text-[5vw] md:text-[32px] text-[#171621] font-medium tracking-tight mb-2 md:mb-0">
              <HoverButton text="Work" href="#work" className="hover:text-[#F76300] w-fit" />
              <HoverButton text="About" href="#about" className="hover:text-[#F76300] w-fit" />
              <HoverButton text="Resume" href="https://drive.google.com/file/d/1RfFByeKvDICGWapt51O5PgBdOqusrpjO/view?usp=sharing" target="_blank" className="hover:text-[#F76300] w-fit" icon={
                <svg 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path d="M7 7h10v10"/>
                  <path d="M7 17 17 7"/>
                </svg>
              } />
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center md:items-start justify-between h-auto md:h-full pointer-events-auto mt-12 md:mt-0 gap-8 md:gap-0">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <ScrollReveal delay={0.3} direction="up">
              <h2 className="text-[18vw] md:text-[100px] leading-[0.85] font-franchise uppercase text-[#171621] mb-4 md:mb-4 tracking-wide drop-shadow-sm">
                Let's <span className="text-[#F76300]">TALK</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.4} direction="up">
              <HoverButton 
                text="raj19june2001@gmail.com"
                href="mailto:raj19june2001@gmail.com" 
                className="text-[5vw] md:text-[32px] font-medium text-gray-500 hover:text-[#F76300] transition-colors select-text w-fit mx-auto md:mx-0"
              />
            </ScrollReveal>
          </div>

          {/* Social Icons Stack (Horizontal) */}
          <ScrollReveal delay={0.5} direction="up">
            <div className="flex flex-row justify-center md:justify-start gap-6 md:gap-6 mt-4 md:mt-0 mb-2 md:mb-0">
              <a href="tel:+919051515918" aria-label="Phone" className="transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-6 hover:scale-110">
                <svg viewBox="0 0 48 48" className="w-14 h-14 md:w-[72px] md:h-[72px] drop-shadow-sm">
                  <rect width="48" height="48" rx="12" fill="#4caf50"></rect>
                  <path fill="#fff" transform="scale(1.2) translate(8, 8)" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/ankitsikder" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-6 hover:scale-110">
                <svg viewBox="0 0 48 48" className="w-14 h-14 md:w-[72px] md:h-[72px] drop-shadow-sm">
                  <rect width="48" height="48" rx="12" fill="#2867B2"></rect>
                  <path fill="#fff" d="M14 19h5v15h-5V19zm2.5-8a2.9 2.9 0 1 1 0 5.8 2.9 2.9 0 0 1 0-5.8zM22 19h4.8v2.05h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 6 3.2 6 7.36V34h-5v-6.6c0-1.57-.03-3.6-2.3-3.6-2.3 0-2.66 1.72-2.66 3.49V34h-5V19z"></path>
                </svg>
              </a>
              <a href="https://behance.net/ankitsikder" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-6 hover:scale-110">
                <img src="/behance.png" alt="Behance" className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-[14px] md:rounded-[18px] drop-shadow-sm object-cover" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="absolute w-full md:w-auto left-0 md:left-[12%] bottom-[4%] md:bottom-[4%] flex items-center justify-center pointer-events-auto z-10">
        <p className="font-clash font-medium text-[#171621] text-[3.5vw] md:text-[22px] select-text">
          Copyright © Anki Designs, 2026
        </p>
      </div>

      {/* Back to Top — Arch Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="absolute right-[5%] md:right-[5%] bottom-0 z-10 pointer-events-auto group w-[72px] h-[60px] md:w-[90px] md:h-[72px] bg-[#171621] hover:bg-[#F76300] transition-colors duration-300 flex items-center justify-center"
        style={{ borderRadius: '9999px 9999px 0 0' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:-translate-y-1"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>

    </footer>
  );
}
