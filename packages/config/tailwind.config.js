/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Web app
    "../../apps/web/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../apps/web/components/**/*.{js,ts,jsx,tsx,mdx}",
    // Shared UI package
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── Color Design Tokens ──────────────────────────────────────────────
      colors: {
        // Backgrounds — earthy neutrals
        ivory:     { DEFAULT: "#F9F6F0", 50: "#FDFCFA", 100: "#F9F6F0", 200: "#F2EDE2" },
        stone:     { DEFAULT: "#C8BCA8", 50: "#F5F3EF", 100: "#E8E2D8", 200: "#D6CEC0", 300: "#C8BCA8", 400: "#B5A690", 500: "#9E8E77" },
        concrete:  { DEFAULT: "#D4CFC8", 50: "#F0EDE9", 100: "#E4E0DA", 200: "#D4CFC8", 300: "#C0BAB1" },
        terracotta:{ DEFAULT: "#C17B5A", light: "#D4956E", muted: "#A86848" },
        // Charcoal text system
        charcoal:  { DEFAULT: "#2C2B29", 50: "#F5F4F2", 100: "#E8E6E3", 200: "#C8C4BE", 300: "#9C9790", 400: "#706B63", 500: "#524E48", 600: "#3D3A35", 700: "#2C2B29", 800: "#1E1D1B", 900: "#141310" },
        // White as a design element
        cream:     { DEFAULT: "#FDFCFA", warm: "#F7F3ED" },
        // Accent — barely-there gold
        gold:      { DEFAULT: "#B5995A", muted: "#C9B278", light: "#E8D9AA" },
      },

      // ─── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        serif:      ["var(--font-playfair)", "Georgia", "serif"],
        sans:       ["var(--font-inter)", "system-ui", "sans-serif"],
        display:    ["var(--font-playfair)", "Georgia", "serif"],
      },
      fontSize: {
        // Editorial scale — exaggerated hierarchy
        "2xs":    ["0.625rem",  { lineHeight: "1rem" }],
        "display-sm": ["clamp(2.5rem, 5vw, 3.5rem)",  { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display":    ["clamp(3.5rem, 7vw, 5.5rem)",  { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(4.5rem, 9vw, 7.5rem)",  { lineHeight: "1",    letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(5.5rem, 11vw, 10rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "editorial":  ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.4",  letterSpacing: "-0.01em" }],
        "caption-xl": ["0.75rem",  { lineHeight: "1.6", letterSpacing: "0.2em" }],
      },
      letterSpacing: {
        "widest-2": "0.25em",
        "widest-3": "0.35em",
      },

      // ─── Spacing — Extreme Whitespace Scale ───────────────────────────────
      spacing: {
        "18":  "4.5rem",
        "22":  "5.5rem",
        "26":  "6.5rem",
        "30":  "7.5rem",
        "34":  "8.5rem",
        "38":  "9.5rem",
        "42":  "10.5rem",
        "46":  "11.5rem",
        "50":  "12.5rem",
        "60":  "15rem",
        "68":  "17rem",
        "72":  "18rem",
        "80":  "20rem",
        "88":  "22rem",
        "96":  "24rem",
        "104": "26rem",
        "120": "30rem",
        "section": "8rem",          // standard section padding
        "section-lg": "12rem",      // generous section padding
      },

      // ─── Layout / Grid ────────────────────────────────────────────────────
      gridTemplateColumns: {
        "editorial":   "1fr 2fr",
        "editorial-r": "2fr 1fr",
        "sanctuary":   "55% 45%",
        "gallery":     "repeat(12, 1fr)",
        "asymm-3":     "1fr 1.618fr 1fr",
      },
      gridTemplateRows: {
        "gallery": "repeat(3, minmax(0, auto))",
      },

      // ─── Animations & Motion ──────────────────────────────────────────────
      transitionTimingFunction: {
        "luxury":      "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "reveal":      "cubic-bezier(0.76, 0, 0.24, 1)",
        "silk":        "cubic-bezier(0.45, 0.05, 0.55, 0.95)",
      },
      transitionDuration: {
        "400":  "400ms",
        "600":  "600ms",
        "800":  "800ms",
        "1200": "1200ms",
        "1500": "1500ms",
        "2000": "2000ms",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "ken-burns": {
          "0%":   { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.08) translate(-2%, -1%)" },
        },
        "slide-in-left": {
          "0%":   { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "reveal-bar": {
          "0%":   { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },
      animation: {
        "fade-up":       "fade-up 1s ease-out forwards",
        "fade-up-slow":  "fade-up 1.5s ease-out forwards",
        "fade-in":       "fade-in 1.2s ease-out forwards",
        "fade-in-slow":  "fade-in 2s ease-out forwards",
        "scale-in":      "scale-in 1.2s ease-out forwards",
        "ken-burns":     "ken-burns 12s ease-in-out infinite alternate",
        "slide-left":    "slide-in-left 1s ease-out forwards",
        "reveal-bar":    "reveal-bar 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards",
      },

      // ─── Aspect Ratios ────────────────────────────────────────────────────
      aspectRatio: {
        "portrait":   "3 / 4",
        "cinematic":  "21 / 9",
        "editorial":  "4 / 5",
        "panoramic":  "16 / 7",
      },

      // ─── Border Radius ────────────────────────────────────────────────────
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      // ─── Max Width ────────────────────────────────────────────────────────
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
        "prose-xl": "75ch",
      },

      // ─── Backdrop Blur ────────────────────────────────────────────────────
      backdropBlur: {
        "xs": "2px",
      },
    },
  },
  plugins: [],
};
