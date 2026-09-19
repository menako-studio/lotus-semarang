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
      // ─── Official Lotus Clinic Color Palette (Client Brand Guide) ──────
      colors: {
        // Brand Colors
        brand: {
          pink: "#D65A8C",      // Primary: Logo, heading utama, tombol utama, aksen brand
          green: "#A7B89F",     // Secondary: Elemen pendukung, heading sekunder, ikon, navigasi
        },
        // Service Colors
        service: {
          akupunktur: "#F4C0DF", // Akupunktur (Pink)
          fisioterapi: "#CDE0D0",// Fisioterapi (Sage Green)
          hidroterapi: "#416DC2",// Hidroterapi (Blue)
          swim: "#2F9FC9",       // Swim Course (Active Blue)
        },
        // Supporting Tints
        tint: {
          pink: "#FBE9F2",
          blue: "#EAF2FF",
          sage: "#EEF5EC",
        },
        // Neutral Colors
        neutral: {
          primary: "#2E2E2E",    // Teks utama, judul
          secondary: "#6B6B6B",  // Teks pendukung, placeholder
          divider: "#E8E8E8",    // Border, garis pemisah
        },

        // ─── Semantic Aliases to preserve component styling ───
        blush:    { DEFAULT: "#D65A8C", light: "#F4C0DF", muted: "#C45A72", deep: "#B84874", soft: "#FBE9F2" },
        lotus:    { DEFAULT: "#D65A8C", light: "#F4C0DF", muted: "#A7B89F", deep: "#B84874", soft: "#FBE9F2", green: "#A7B89F" },
        peach:    { DEFAULT: "#F2C4A8", light: "#FAE8DC", muted: "#E8B090", soft: "#FDF0E8" },
        sand:     { DEFAULT: "#E8D5B5", light: "#F5ECD8", muted: "#D4BF98", soft: "#FAF5EC" },
        sage:     { DEFAULT: "#A7B89F", light: "#CDE0D0", muted: "#7E9475", soft: "#EEF5EC" },
        forest:   { DEFAULT: "#2E2E2E", 700: "#22392B", 600: "#2E4A37", 500: "#3D684E", 400: "#5C8C6F", 300: "#88B298", 200: "#BCD4C5", 100: "#EEF5EC" },
        terra:    { DEFAULT: "#C86A50", light: "#E08B74", muted: "#AC543D", soft: "#FAEEE8" },
        hydro:    { DEFAULT: "#416DC2", light: "#2F9FC9", muted: "#2C4E91", soft: "#EAF2FF" },
        espresso: { DEFAULT: "#2E2E2E", 700: "#3D3D3D", 600: "#4D4D4D", 500: "#6B6B6B", 400: "#8C8C8C", 300: "#B0B0B0", 200: "#D4D4D4", 100: "#E8E8E8" },
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
