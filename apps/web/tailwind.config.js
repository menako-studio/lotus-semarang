/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── Refined Lotus Wellness Sanctuary Color Palette ──────────────────
      colors: {
        // Lotus Blossom & Rose Petal (Aligned with Logo Flower)
        blush:    { DEFAULT: "#D97087", light: "#F4A6C1", muted: "#C45A72", deep: "#B8556D", soft: "#FDF2F4" },
        lotus:    { DEFAULT: "#D97087", light: "#F4A6C1", muted: "#C45A72", deep: "#B8556D", soft: "#FDF2F4" },
        // Backgrounds & Accents — skin-tone & warm pastels
        peach:    { DEFAULT: "#F2C4A8", light: "#FAE8DC", muted: "#E8B090", soft: "#FDF0E8" },
        sand:     { DEFAULT: "#E8D5B5", light: "#F5ECD8", muted: "#D4BF98", soft: "#FAF5EC" },
        // Botanical Lotus Leaf & Sage (Aligned with Logo Stem)
        sage:     { DEFAULT: "#7A9A82", light: "#A3BDAA", muted: "#5B7F64", soft: "#EEF4F0" },
        forest:   { DEFAULT: "#2D4836", 700: "#22392B", 600: "#2E4A37", 500: "#3D684E", 400: "#5C8C6F", 300: "#88B298", 200: "#BCD4C5", 100: "#EEF4F0" },
        // Warm Earth Terracotta
        terra:    { DEFAULT: "#C86A50", light: "#E08B74", muted: "#AC543D", soft: "#FAEEE8" },
        // Aquatic Spa & Hydrotherapy Mist
        hydro:    { DEFAULT: "#5A9491", light: "#7EA8A4", muted: "#437875", soft: "#EBF3F2" },
        // Deep grounding editorial espresso / charcoal
        espresso: { DEFAULT: "#241C18", 700: "#332722", 600: "#45362F", 500: "#57443C", 400: "#80685E", 300: "#AC968B", 200: "#D3C6BF", 100: "#EDE6E2" },
        // Warm retreat cream base
        cream:    { DEFAULT: "#FFFFFF", warm: "#FAF7F2", deep: "#F5EDE0" },
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
