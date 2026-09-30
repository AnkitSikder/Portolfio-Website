---
name: Electric Noir
colors:
  surface: '#0f131f'
  surface-dim: '#0f131f'
  surface-bright: '#353946'
  surface-container-lowest: '#0a0e1a'
  surface-container-low: '#171b28'
  surface-container: '#1b1f2c'
  surface-container-high: '#262a37'
  surface-container-highest: '#313442'
  on-surface: '#dfe2f3'
  on-surface-variant: '#e3bfb3'
  inverse-surface: '#dfe2f3'
  inverse-on-surface: '#2c303d'
  outline: '#aa897f'
  outline-variant: '#5b4138'
  surface-tint: '#ffb59c'
  primary: '#ffb59c'
  on-primary: '#5c1900'
  primary-container: '#ff5f1f'
  on-primary-container: '#561700'
  inverse-primary: '#ab3600'
  secondary: '#b5c4ff'
  on-secondary: '#00287c'
  secondary-container: '#004edd'
  on-secondary-container: '#c9d3ff'
  tertiary: '#cec5bf'
  on-tertiary: '#342f2c'
  tertiary-container: '#9a938e'
  on-tertiary-container: '#312c28'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#832700'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b5c4ff'
  on-secondary-fixed: '#00164e'
  on-secondary-fixed-variant: '#003bae'
  tertiary-fixed: '#eae1db'
  tertiary-fixed-dim: '#cec5bf'
  on-tertiary-fixed: '#1f1b17'
  on-tertiary-fixed-variant: '#4b4642'
  background: '#0f131f'
  on-background: '#dfe2f3'
  surface-variant: '#313442'
  creme: '#fcf2ec'
  deep-blue: '#0a0e1a'
  electric-blue: '#2e64f2'
  vibrant-orange: '#ff5f1f'
  surface-elevated: '#161c2e'
typography:
  display-xl:
    fontFamily: Syne
    fontSize: 120px
    fontWeight: '800'
    lineHeight: 110%
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 110%
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 120%
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 120%
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-caps:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
  container-max: 1440px
---

## Brand & Style

This design system is a high-octane blend of **Minimalism** and **High-Contrast Bold** aesthetics. It is designed for premium creative platforms, immersive portfolios, and high-impact digital experiences that demand instant engagement. The brand personality is "vibrant sophistication"—it combines the depth of a cinematic noir setting with the energetic pulse of modern digital art.

The visual narrative is driven by extreme weight, intentional negative space, and a "funky" rhythmic cadence. The UI should feel heavy, magnetic, and confident. By pairing expansive, deep-sea backgrounds with searing accent colors and thick, geometric typography, the design system creates a world that feels both luxurious and rebellious.

## Colors

The color strategy relies on a high-tension relationship between an immersive dark base and "vibrating" accents.

- **Primary (Vibrant Orange):** Used exclusively for high-priority calls to action and critical interactive states. It is the "spark" in the noir environment.
- **Secondary (Electric Blue):** Derived from the brand logo, this color acts as a supportive accent for secondary interactions, active indicators, and decorative elements.
- **Tertiary/Foreground (Creme):** This off-white replaces standard white to provide a premium, editorial feel that is easier on the eyes in high-contrast dark modes.
- **Neutral (Deep Blue):** The foundation of the system. It is a highly saturated, deep dark blue that provides more character and depth than pure black.

## Typography

Typography is the "voice" of the design system.

- **Syne (Headlines):** Its ultra-wide proportions and brutalist roots provide the "funky" edge. Use the heaviest weights for maximum impact.
- **Hanken Grotesk (Body):** A sharp, neutral sans-serif that ensures long-form content remains readable against the high-contrast background.
- **Space Mono (Labels):** Used for technical metadata and small UI details. The monospaced nature introduces a "process" aesthetic that grounds the expressive headlines.

Maintain tight leading on all display text to create visual "blocks" of type that feel architectural.

## Layout & Spacing

The layout uses a **fluid 12-column grid** that encourages **asymmetrical arrangements**.

- **Rhythm:** Use the 8px base unit for all internal component spacing. Use the `section-gap` (160px) to create dramatic pauses between content blocks.
- **Asymmetry:** Avoid perfectly centered layouts. Offset image galleries and text blocks to create an editorial, magazine-like scanning pattern.
- **Breakpoints:** 
  - **Desktop (1200px+):** Full 12-column span with wide margins.
  - **Tablet (768px - 1199px):** 8-column grid, reduced margins.
  - **Mobile (Under 768px):** 4-column grid. Typography remains oversized to maintain the "bold" brand identity even on small screens.

## Elevation & Depth

This system rejects traditional soft shadows in favor of **Tonal Layering** and **High-Contrast Definition**.

- **Layers:** Depth is communicated through color. The base is `deep-blue`. Elements that are "higher" in the hierarchy use `surface-elevated` or semi-transparent overlays.
- **Backdrop Blurs:** Use frosted-glass effects (20px-40px blur) on navigation bars and floating menus using the `creme` color at 5% opacity to maintain context without visual clutter.
- **Borders:** Define interactive surfaces with 1px low-opacity `creme` borders rather than shadows. This maintains the flat, modular aesthetic.
- **Interactive Depth:** When an element is focused or hovered, it should not "lift" via shadow. Instead, it should trigger a color shift (e.g., border turning `vibrant-orange`) or a scale transformation.

## Shapes

The shape language is **Rounded**, providing a "buttery" and tactile feel that contrasts against the aggressive typography and colors.

- **Standard Elements:** Buttons, cards, and inputs use a 0.5rem (8px) radius.
- **Large Components:** Hero images and large containers use `rounded-xl` (1.5rem) to feel like modern, softened hardware.
- **Interactive Elements:** Use `rounded-lg` for smaller chips and tags to ensure they look distinct from standard text.

## Components

### Buttons
- **Primary:** Background `vibrant-orange`, text `deep-blue`. Bold, wide proportions. On hover, apply a slight "squish" (horizontal scale 1.05x).
- **Secondary:** Transparent background, 2px border in `creme`, text `creme`. 
- **Ghost:** `space-mono` text in `electric-blue` with an arrow icon.

### Cards & Containers
- Cards use `surface-elevated` as a background with a subtle 1px border.
- Project thumbnails should occupy 100% of the card width, utilizing a grayscale-to-color transition on hover.

### Inputs & Form Fields
- Minimalist underline style: 1px `creme` border-bottom.
- Label: `label-caps` in `creme` at 60% opacity.
- Focus State: Underline animates to 2px `vibrant-orange`.

### Lists & Navigation
- Navigation links use `syne` in medium weight. 
- Active states are indicated by a small `vibrant-orange` dot (derived from the logo's geometry) appearing below or next to the text.

### Chips & Tags
- Pill-shaped (`rounded-full`), small `space-mono` text. Background: `deep-blue` with a `creme` border. High-contrast and technical.