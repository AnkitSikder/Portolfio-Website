import React, { useEffect, useRef, useState } from 'react';

/**
 * SectionProgressNav
 *
 * DESKTOP (lg+):
 *   Default → thin lines at right edge.
 *   Hover   → dark glass card fades in, labels slide in.
 *
 * MOBILE (<lg):
 *   A floating pill at the bottom center showing the current section name.
 *   Tapping it opens a bottom drawer listing all sections.
 *   Closes on selection or outside tap.
 */
export default function SectionProgressNav({ sections = [] }) {
  const [activeId, setActiveId]           = useState(sections[0]?.id || '');
  const [isNavHovered, setIsNavHovered]   = useState(false);
  const [hoveredRowId, setHoveredRowId]   = useState(null);
  const [footerVisible, setFooterVisible] = useState(false);
  const [drawerOpen, setDrawerOpen]       = useState(false);
  const sectionObRef = useRef(null);
  const footerObRef  = useRef(null);

  // ── Track active section ──────────────────────────────────────────────────
  useEffect(() => {
    if (!sections.length) return;
    
    const visibleSections = new Map();
    
    sectionObRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          visibleSections.set(e.target.id, e.isIntersecting);
        });
        
        // Find the first section in the array that is currently visible
        const firstVisible = sections.find(({ id }) => visibleSections.get(id));
        if (firstVisible) {
          setActiveId(firstVisible.id);
        }
      },
      { rootMargin: '-15% 0px -40% 0px', threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) sectionObRef.current.observe(el);
    });
    return () => sectionObRef.current?.disconnect();
  }, [sections]);

  // ── Hide desktop nav when footer is in view ───────────────────────────────
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;
    footerObRef.current = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
        if (entry.isIntersecting) setDrawerOpen(false);
      },
      { threshold: 0.05 }
    );
    footerObRef.current.observe(footer);
    return () => footerObRef.current?.disconnect();
  }, []);

  const activeLabel = sections.find(s => s.id === activeId)?.label || '';
  const activeIndex = sections.findIndex(s => s.id === activeId);

  if (!sections.length) return null;

  return (
    <>
      {/* ════════════════════════════════════════════
          DESKTOP NAV — right-side lines + glass card
          ════════════════════════════════════════════ */}
      <nav
        aria-label="Page sections"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block select-none transition-opacity duration-500"
        style={{
          opacity: footerVisible ? 0 : 1,
          pointerEvents: footerVisible ? 'none' : 'auto',
        }}
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
      >
        <div
          className="flex flex-col rounded-l-2xl overflow-hidden transition-all duration-400"
          style={{
            gap: isNavHovered ? '2px' : '16px',
            paddingTop: isNavHovered ? '16px' : '0',
            paddingBottom: isNavHovered ? '16px' : '0',
            paddingRight: isNavHovered ? '16px' : '12px',
            background: isNavHovered ? 'rgba(12, 10, 22, 0.72)' : 'transparent',
            backdropFilter: isNavHovered ? 'blur(24px) saturate(160%)' : 'none',
            WebkitBackdropFilter: isNavHovered ? 'blur(24px) saturate(160%)' : 'none',
            border: isNavHovered ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
            borderRight: 'none',
            boxShadow: isNavHovered ? '-12px 0 40px rgba(0,0,0,0.35)' : 'none',
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {sections.map(({ id, label }, i) => {
            const isActive = activeId === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={e => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => setHoveredRowId(id)}
                onMouseLeave={() => setHoveredRowId(null)}
                className="flex items-center justify-end"
                style={{
                  gap: isNavHovered ? '14px' : '0',
                  paddingTop: isNavHovered ? '6px' : '0',
                  paddingBottom: isNavHovered ? '6px' : '0',
                  paddingLeft: isNavHovered ? '16px' : '0',
                  borderRadius: '8px',
                  background: isNavHovered && hoveredRowId === id && !isActive
                    ? 'rgba(255,255,255,0.05)'
                    : 'transparent',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                <span
                  className="font-clash text-[10px] uppercase tracking-[0.18em] whitespace-nowrap"
                  style={{
                    opacity: isNavHovered ? 1 : 0,
                    transform: isNavHovered ? 'translateX(0)' : 'translateX(10px)',
                    maxWidth: isNavHovered ? '240px' : '0px',
                    overflow: 'hidden',
                    color: isActive ? '#ff5f1f' : 'rgba(252,242,236,0.5)',
                    fontWeight: isActive ? '700' : '500',
                    transition: `opacity 0.3s ease ${i * 35}ms, transform 0.35s ease ${i * 35}ms, max-width 0.35s ease, color 0.2s ease`,
                  }}
                >
                  {label}
                </span>
                <span
                  className="block h-[1.5px] rounded-full shrink-0"
                  style={{
                    width: isActive ? '28px' : '10px',
                    background: isActive ? '#ff5f1f' : 'rgba(252,242,236,0.22)',
                    boxShadow: isActive ? '0 0 8px rgba(255,95,31,0.55)' : 'none',
                    transition: 'width 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
                  }}
                />
              </a>
            );
          })}
        </div>
      </nav>

      {/* ════════════════════════════════════════════
          MOBILE NAV — floating bottom pill + drawer
          ════════════════════════════════════════════ */}
      <div
        className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center transition-all duration-500"
        style={{
          opacity: footerVisible ? 0 : 1,
          pointerEvents: footerVisible ? 'none' : 'auto',
        }}
      >
        {/* Bottom Drawer — slides up from the pill */}
        <div
          className="w-[88vw] max-w-sm mb-3 rounded-2xl transition-all duration-400 ease-out flex flex-col"
          style={{
            background: 'rgba(12, 10, 22, 0.88)',
            backdropFilter: 'blur(24px) saturate(160%)',
            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 -8px 40px rgba(0,0,0,0.5)',
            maxHeight: drawerOpen ? '60vh' : '0px',
            opacity: drawerOpen ? 1 : 0,
            transform: drawerOpen ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
            pointerEvents: drawerOpen ? 'auto' : 'none',
            overflow: 'hidden',
          }}
        >
          <div className="px-3 py-3 flex flex-col gap-0.5 overflow-y-auto" style={{ maxHeight: '60vh', WebkitOverflowScrolling: 'touch' }}>
            {sections.map(({ id, label }, i) => {
              const isActive = activeId === id;
              return (
                <button
                  key={id}
                  onClick={() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    setDrawerOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 text-left"
                  style={{
                    background: isActive ? 'rgba(255,95,31,0.12)' : 'transparent',
                  }}
                >
                  {/* Index + label */}
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[10px] font-clash tabular-nums"
                      style={{ color: isActive ? '#ff5f1f' : 'rgba(252,242,236,0.3)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="text-xs font-clash uppercase tracking-[0.14em]"
                      style={{
                        color: isActive ? '#ff5f1f' : 'rgba(252,242,236,0.65)',
                        fontWeight: isActive ? '700' : '500',
                      }}
                    >
                      {label}
                    </span>
                  </div>

                  {/* Line */}
                  <span
                    className="block h-[1.5px] rounded-full shrink-0"
                    style={{
                      width: isActive ? '24px' : '10px',
                      background: isActive ? '#ff5f1f' : 'rgba(252,242,236,0.18)',
                      boxShadow: isActive ? '0 0 6px rgba(255,95,31,0.5)' : 'none',
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Floating pill — always visible */}
        <button
          onClick={() => setDrawerOpen(v => !v)}
          className="flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300 active:scale-95"
          style={{
            background: 'rgba(12, 10, 22, 0.82)',
            backdropFilter: 'blur(20px) saturate(160%)',
            WebkitBackdropFilter: 'blur(20px) saturate(160%)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
          }}
        >
          {/* Progress dots */}
          <div className="flex items-center gap-1">
            {sections.map((s, i) => (
              <span
                key={s.id}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === i ? '16px' : '4px',
                  height: '4px',
                  background: activeIndex === i ? '#ff5f1f' : 'rgba(252,242,236,0.25)',
                }}
              />
            ))}
          </div>

          {/* Divider */}
          <span className="w-px h-4 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />

          {/* Current section name */}
          <span className="font-clash text-[11px] uppercase tracking-[0.15em] text-white/80 whitespace-nowrap">
            {activeLabel}
          </span>

          {/* Chevron */}
          <svg
            width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className="text-white/40 transition-transform duration-300"
            style={{ transform: drawerOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      </div>

      {/* Mobile backdrop — close drawer on outside tap */}
      {drawerOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </>
  );
}
