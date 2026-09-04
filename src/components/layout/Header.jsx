import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HoverButton from '../common/HoverButton';
import { siteConfig } from '../../data/siteConfig';

export default function Header({ isNavVisible, isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 pointer-events-none transition-transform duration-500 ease-in-out ${isNavVisible || isMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'}`}>
        <div className={`pointer-events-auto flex items-center justify-between rounded-[20px] border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] bg-black/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.3)] w-full ios-26-glass max-w-[1400px] px-5 py-3`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center transition-transform duration-300 ease-out hover:scale-105 ml-2" onClick={() => setIsMenuOpen(false)}>
            <img src="/Logo Portfolio Dark.svg" alt="Ankit Sikder Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="relative hidden items-center justify-end md:flex">
            <div className="flex items-center gap-5 transition-opacity duration-300 md:gap-7 opacity-100">
              <nav className="font-clash flex items-center gap-6 text-[16px] text-[#f5f0e6] md:gap-8 md:text-[18px]">
                <HoverButton href="#work" text="Work" className="hover:text-[#ff5a00]" />
                <HoverButton href="#about" text="About" className="hover:text-[#ff5a00]" />
                <HoverButton 
                  href="/resume.pdf" 
                  text="Resume" 
                  className="hover:text-[#ff5a00]" 
                  icon={
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
                  }
                />
              </nav>
              <span className="h-4 w-px bg-white/20" aria-hidden="true"></span>
              <div className="flex items-center gap-3.5">
                <a href={siteConfig.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:rotate-6 hover:scale-125">
                  <svg viewBox="0 0 48 48" width="24" height="24" className="h-7 w-7 drop-shadow-sm">
                    <rect width="48" height="48" rx="12" fill="#2867B2"></rect>
                    <path fill="#fff" d="M14 19h5v15h-5V19zm2.5-8a2.9 2.9 0 1 1 0 5.8 2.9 2.9 0 0 1 0-5.8zM22 19h4.8v2.05h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 6 3.2 6 7.36V34h-5v-6.6c0-1.57-.03-3.6-2.3-3.6-2.3 0-2.66 1.72-2.66 3.49V34h-5V19z"></path>
                  </svg>
                </a>
                <a href={siteConfig.socials.behance} aria-label="Behance" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:rotate-6 hover:scale-125">
                  <img src="/behance.png" alt="Behance" className="h-7 w-7 rounded-[7px] drop-shadow-sm object-cover" />
                </a>
                <a href={siteConfig.socials.email} aria-label="Email" className="transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:rotate-6 hover:scale-125">
                  <svg viewBox="0 0 48 48" width="24" height="24" className="h-7 w-7 drop-shadow-sm">
                    <path fill="#4caf50" d="M45 16.2l-5 2.75-5 4.75L35 40h7a3 3 0 0 0 3-3V16.2z"></path>
                    <path fill="#1e88e5" d="M3 16.2l3.614 1.71L13 23.7V40H6a3 3 0 0 1-3-3V16.2z"></path>
                    <path fill="#e53935" d="M35 11.2L24 19.45 13 11.2 12 17l1 6.7 11 8.25 11-8.25 1-6.7z"></path>
                    <path fill="#c62828" d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859A4.298 4.298 0 0 0 3 12.298z"></path>
                    <path fill="#fbc02d" d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341A4.298 4.298 0 0 1 45 12.298z"></path>
                  </svg>
                </a>
                <a href={siteConfig.socials.phone} aria-label="Phone" className="transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:rotate-6 hover:scale-125">
                  <svg viewBox="0 0 48 48" width="24" height="24" className="h-7 w-7 drop-shadow-sm">
                    <rect width="48" height="48" rx="12" fill="#4caf50"></rect>
                    <path fill="#fff" transform="scale(1.2) translate(8, 8)" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            type="button" 
            aria-label="Menu" 
            aria-expanded={isMenuOpen} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex h-10 w-10 items-center justify-center md:hidden text-[#f5f0e6]"
          >
            <span className="relative block h-3.5 w-6">
              <span className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`absolute left-0 top-1.5 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 top-3 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-xl ios-26-glass transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col pt-32 px-8 ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'}`}
      >
        <nav className="flex flex-col gap-8 text-4xl font-franchise uppercase tracking-wider text-white">
          <Link to="/#work" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Work</Link>
          <Link to="/#about" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">About</Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors flex items-center gap-3">
            Resume
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10"/>
              <path d="M7 17 17 7"/>
            </svg>
          </a>
        </nav>

        <div className="mt-auto mb-16">
          <p className="text-white/50 text-sm font-clash tracking-widest uppercase mb-6">Let's Connect</p>
          <div className="flex items-center gap-6">
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 48 48" width="32" height="32"><rect width="48" height="48" rx="12" fill="#2867B2"></rect><path fill="#fff" d="M14 19h5v15h-5V19zm2.5-8a2.9 2.9 0 1 1 0 5.8 2.9 2.9 0 0 1 0-5.8zM22 19h4.8v2.05h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 6 3.2 6 7.36V34h-5v-6.6c0-1.57-.03-3.6-2.3-3.6-2.3 0-2.66 1.72-2.66 3.49V34h-5V19z"></path></svg>
            </a>
            <a href={siteConfig.socials.behance} target="_blank" rel="noopener noreferrer">
              <img src="/behance.png" alt="Behance" className="h-8 w-8 rounded-[8px] object-cover" />
            </a>
            <a href={siteConfig.socials.email}>
              <svg viewBox="0 0 48 48" width="32" height="32"><path fill="#4caf50" d="M45 16.2l-5 2.75-5 4.75L35 40h7a3 3 0 0 0 3-3V16.2z"></path><path fill="#1e88e5" d="M3 16.2l3.614 1.71L13 23.7V40H6a3 3 0 0 1-3-3V16.2z"></path><path fill="#e53935" d="M35 11.2L24 19.45 13 11.2 12 17l1 6.7 11 8.25 11-8.25 1-6.7z"></path><path fill="#c62828" d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859A4.298 4.298 0 0 0 3 12.298z"></path><path fill="#fbc02d" d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341A4.298 4.298 0 0 1 45 12.298z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
