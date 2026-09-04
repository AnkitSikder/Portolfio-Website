/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#171621', // Dark blue custom
        foreground: '#fcf2ec', // Creme
        primary: '#ff5f1f', // Vibrant Orange
        card: '#171b28',
        border: '#313442',
        muted: '#262a37',
        mutedForeground: '#9a938e'
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll-left": "scroll-left 30s linear infinite",
        "scroll-right": "scroll-right 30s linear infinite",
        "blob": "blob 7s infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "blob": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "0% 100%" },
        },
      },
      fontFamily: {
        franchise: ['"Franchise"', 'sans-serif'],
        display: ['"DTGetaiGroteskDisplay"', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        hanken: ['"Hanken Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        clash: ['"Clash Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
