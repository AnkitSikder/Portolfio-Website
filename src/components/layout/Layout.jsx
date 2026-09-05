import React, { createContext, useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from '../common/CustomCursor';
import Header from './Header';
import Footer from './Footer';
import LoadingScreen from '../common/LoadingScreen';

export const SplineContext = createContext(null);

gsap.registerPlugin(ScrollTrigger);

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const lenis = useLenis(ScrollTrigger.update);

  // Scroll to top on route change
  useEffect(() => {
    if (location.hash) {
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
      window.scrollTo(0, 0);
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
      setTimeout(() => ScrollTrigger.refresh(), 150);
    }
  }, [location.pathname, location.hash]);

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
      

      {/* Loading screen — only visible on home page while Spline loads */}
      {isHomePage && <LoadingScreen isLoaded={isSplineLoaded} />}

      <main className="bg-background text-foreground flex flex-col min-h-screen">
        <Header isNavVisible={isNavVisible} isScrolled={isScrolled} />
        
        <div className="flex-1">
          <SplineContext.Provider value={setIsSplineLoaded}>
            <Outlet />
          </SplineContext.Provider>
        </div>
        
        <div className="relative z-30 bg-background">
          <Footer />
        </div>
      </main>
    </ReactLenis>
  );
}
