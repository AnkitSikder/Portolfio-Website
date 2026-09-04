import React from "react";
import { cn } from "@/utils";

const ICONS_ROW1 = [
  { name: "Figma", src: "/logos/figma-logo.png" },
  { name: "Framer", src: "/logos/framer-logo.svg" },
  { name: "Spline", src: "/logos/spline-logo.png?v=3", scale: 1.3 },
  { name: "Gemini", src: "/logos/gemini-logo.png" },
  { name: "Unity", src: "/logos/unity-logo.svg" },
  { name: "Blender", src: "/logos/blender-logo.png" },
  { name: "Shapr3D", src: "/logos/shapr3d-logo.png", scale: 1.6 },
  { name: "Procreate", src: "/logos/procreate-logo.png", scale: 1.6 },
  { name: "ChatGPT", src: "/logos/chatgpt-logo.png" },
  { name: "Cursor", src: "/logos/cursor-logo.png" },
  { name: "Miro", src: "/logos/miro-logo.png" },
];

const ICONS_ROW2 = [
  { name: "Premiere Pro", src: "/logos/premiere.svg" },
  { name: "Photoshop", src: "/logos/photoshop.svg" },
  { name: "Illustrator", src: "/logos/illustrator.svg" },
  { name: "InDesign", src: "/logos/indesign.svg" },
  { name: "AfterEffects", src: "/logos/after-effects.svg" },
  { name: "Lottie", src: "/logos/lottiefiles-logo.svg" },
  { name: "Antigravity", src: "/logos/antigravity-logo.png" },
  { name: "Claude", src: "/logos/claude-logo.png" },
  { name: "Codex", src: "/logos/codex-logo.png", scale: 1.6 },
  { name: "Replit", src: "/logos/replit-logo.png" },
];

const repeatedIcons = (icons, repeat = 4) => Array.from({ length: repeat }).flatMap(() => icons);

export function LogoCloud({ className, ...props }) {
  return (
    <div className={cn("relative w-full overflow-hidden flex flex-col gap-6 group", className)} {...props}>
      {/* Row 1 */}
      <div className="flex gap-6 whitespace-nowrap animate-scroll-left w-max">
        {repeatedIcons(ICONS_ROW1).map((logo, i) => (
          <LogoCard key={i} logo={logo} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex gap-6 whitespace-nowrap animate-scroll-right w-max ml-[-50%]">
        {repeatedIcons(ICONS_ROW2).map((logo, i) => (
          <LogoCard key={i} logo={logo} />
        ))}
      </div>

      {/* Fade Overlays */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#ff5f1f] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#ff5f1f] to-transparent pointer-events-none" />
    </div>
  );
}

function LogoCard({ logo, className, ...props }) {
  const Icon = logo.icon;
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 w-24 h-24 md:w-32 md:h-32 shrink-0 bg-foreground shadow-xl rounded-2xl md:rounded-3xl",
        className
      )}
      {...props}
      title={logo.name}
    >
      {Icon ? (
        <Icon className="w-8 h-8 md:w-12 md:h-12 opacity-90" style={{ color: logo.color }} strokeWidth={1.5} />
      ) : logo.isText ? (
        <span className="text-black font-clash font-bold text-2xl md:text-4xl tracking-tight select-none pointer-events-none">
          {logo.text}
        </span>
      ) : (
        <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
          <img
            alt={logo.name}
            className="pointer-events-none max-h-full max-w-full object-contain select-none opacity-90 mix-blend-multiply"
            src={logo.src}
            style={{ transform: `scale(${logo.scale || 1})` }}
          />
        </div>
      )}
      <span className="text-[10px] md:text-xs font-semibold text-black/70 tracking-wide select-none">
        {logo.name}
      </span>
    </div>
  );
}
