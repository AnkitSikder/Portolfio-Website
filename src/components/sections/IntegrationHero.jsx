import React from "react";
import { Button } from "@/components/common/button";
import { LogoCloud } from "../ui/logo-cloud-2";
import ScrollReveal from "../common/ScrollReveal";

export default function IntegrationHero() {
  return (
    <section className="relative py-32 overflow-hidden text-foreground z-30">
      {/* Light grid background tailored to dark theme */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <ScrollReveal delay={0.1}>
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full border border-foreground/10 bg-foreground/5 text-primary tracking-wider uppercase">
            My Creative Toolbox
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-franchise uppercase tracking-wide text-primary max-w-4xl mx-auto leading-[1.1]">
          Everything I need <br className="hidden md:block" />
          to make things happen.
          </h2>
        </ScrollReveal>
        {/* Logo Cloud */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 w-full relative">
            <LogoCloud />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
