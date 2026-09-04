import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from '../common/CustomCursor';
import Header from './Header';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const location = useLocation();

  const lenis = useLenis(ScrollTrigger.update);

  // Scroll to top or hash on route change
  useEffect(() => {
    if (location.hash) {
      // Need a small timeout to ensure the DOM has rendered the elements
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          if (lenis) {
            lenis.scrollTo(element, { offset: 0, duration: 1.5 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location, lenis]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update isScrolled (for shrinking)
      setIsScrolled(currentScrollY > 50);

      // Only toggle nav if scrolled more than a threshold to prevent jitter
      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        if (currentScrollY > lastScrollY && currentScrollY > 400) {
          setIsNavVisible(false);
        } else {
          setIsNavVisible(true);
        }
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.5, smoothTouch: true }}>
      <CustomCursor />
      
      {/* iOS 26 Liquid Glass SVG Filter */}
      <svg style={{ display: 'none' }}>
        <filter id="liquid-glass">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <main className="bg-background text-foreground flex flex-col min-h-screen">
        <Header isNavVisible={isNavVisible} isScrolled={isScrolled} />
        
        <div className="flex-1">
          <Outlet />
        </div>
        
        <div className="relative z-30 bg-background">
          <Footer />
        </div>
      </main>
    </ReactLenis>
  );
}
