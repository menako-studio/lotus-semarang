/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── Warm Wellness Color Palette ─────────────────────────────────────
      colors: {
        // Backgrounds — skin-tone pastels
        peach:    { DEFAULT: "#F2C4A8", light: "#FAE8DC", muted: "#E8B090", soft: "#FDF0E8" },
        sand:     { DEFAULT: "#E8D5B5", light: "#F5ECD8", muted: "#D4BF98", soft: "#FAF5EC" },
        sage:     { DEFAULT: "#B8C9A8", light: "#D4E2C8", muted: "#9DB88A", soft: "#EDF2E8" },
        terra:    { DEFAULT: "#D4845A", light: "#E8A888", muted: "#BC6E44", soft: "#FAEEE8" },
        blush:    { DEFAULT: "#E8C4C0", light: "#F5DDD8", muted: "#D4A8A4", soft: "#FDF5F4" },
        // Deep grounding text colors
        espresso: { DEFAULT: "#2D1F14", 700: "#3D2A1A", 600: "#4D3522", 500: "#5C4030", 400: "#8B6B55", 300: "#B89880", 200: "#D4BBA8", 100: "#F0E8E0" },
        forest:   { DEFAULT: "#1E3A28", 700: "#264A34", 600: "#2E5A40", 500: "#3A7050", 400: "#5A9068", 300: "#88B895", 200: "#B8D8C0", 100: "#E4F0E8" },
        // Warm cream base
        cream:    { DEFAULT: "#FFFFFF", warm: "#FAF0E4", deep: "#F5E8D4" },
        // Keep ivory for compatibility
        ivory:    { DEFAULT: "#FFFFFF" },
      },

      // ─── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        serif:   ["var(--font-fraunces)", "Georgia", "serif"],
        sans:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },

      // ─── Font Size — Big, Friendly, Display Scale ─────────────────────────
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)",   { lineHeight: "1.0",  letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display":    ["clamp(2rem, 4.5vw, 4rem)",    { lineHeight: "1.1",  letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.5rem)",  { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        "caption":    ["0.7rem",  { lineHeight: "1.5", letterSpacing: "0.12em" }],
        "label":      ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.06em" }],
      },

      // ─── Border Radius — Rounded, Friendly ───────────────────────────────
      borderRadius: {
        "xl":   "0.75rem",
        "2xl":  "1rem",
        "3xl":  "1.5rem",
        "4xl":  "2rem",
        "5xl":  "2.5rem",
        "blob": "60% 40% 55% 45% / 45% 55% 40% 60%",
      },

      // ─── Spacing ──────────────────────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "section":    "5rem",
        "section-lg": "8rem",
      },

      // ─── Animations ───────────────────────────────────────────────────────
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "marquee":      "marquee 28s linear infinite",
        "marquee-slow": "marquee 40s linear infinite",
        "fade-up":      "fade-up 0.7s ease-out forwards",
        "scale-in":     "scale-in 0.6s ease-out forwards",
        "float":        "float 4s ease-in-out infinite",
      },

      // ─── Box Shadows ──────────────────────────────────────────────────────
      boxShadow: {
        "warm":   "0 4px 24px rgba(45, 31, 20, 0.08)",
        "warm-lg":"0 12px 48px rgba(45, 31, 20, 0.12)",
        "warm-xl":"0 24px 80px rgba(45, 31, 20, 0.16)",
        "card":   "0 2px 16px rgba(45, 31, 20, 0.06), 0 8px 32px rgba(45, 31, 20, 0.04)",
      },

      // ─── Max Width ────────────────────────────────────────────────────────
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
