"use client";

/* ─── Service items repeated for seamless loop ───────────────────────────── */
const items = [
  "Akupunktur",
  "Hidroterapi",
  "Fisioterapi",
  "Swim Course",
  "Akupunktur",
  "Hidroterapi",
  "Fisioterapi",
  "Swim Course",
  "Akupunktur",
  "Hidroterapi",
  "Fisioterapi",
  "Swim Course",
];

const SEPARATOR = "✦";

interface MarqueeProps {
  /** Background color token (default: espresso) */
  bg?: "espresso" | "peach" | "sage" | "terra" | "sand";
  /** Text color */
  textClass?: string;
  /** Speed variant */
  speed?: "normal" | "slow";
}

export function Marquee({
  bg = "espresso",
  textClass = "text-cream",
  speed = "normal",
}: MarqueeProps) {
  const bgMap = {
    espresso: "bg-espresso",
    peach:    "bg-peach",
    sage:     "bg-sage",
    terra:    "bg-terra",
    sand:     "bg-sand",
  };

  return (
    <div
      className={`${bgMap[bg]} py-4 overflow-hidden select-none`}
      aria-label="Layanan: Akupunktur, Hidroterapi, Fisioterapi, Swim Course"
    >
      {/* Outer wrapper — clips overflow */}
      <div className="relative flex">
        {/* Fade edges */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none ${bgMap[bg]}`}
          style={{ background: `linear-gradient(to right, ${bg === "espresso" ? "#2D1F14" : "var(--color-" + bg + ")"}, transparent)` }}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none ${bgMap[bg]}`}
          style={{ background: `linear-gradient(to left, ${bg === "espresso" ? "#2D1F14" : "var(--color-" + bg + ")"}, transparent)` }}
        />

        {/* Track — duplicated for seamless loop */}
        <div
          className={`marquee-track ${speed === "slow" ? "animation-marquee-slow" : ""}`}
          style={{ animationDuration: speed === "slow" ? "40s" : "28s" }}
        >
          {/* First copy */}
          {items.map((item, i) => (
            <span
              key={`a-${i}`}
              className={`flex items-center gap-4 ${textClass} font-display font-black px-4`}
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", whiteSpace: "nowrap", letterSpacing: "-0.01em" }}
            >
              {item}
              <span className="opacity-50 text-base font-sans">{SEPARATOR}</span>
            </span>
          ))}
          {/* Duplicate copy for seamless loop */}
          {items.map((item, i) => (
            <span
              key={`b-${i}`}
              className={`flex items-center gap-4 ${textClass} font-display font-black px-4`}
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", whiteSpace: "nowrap", letterSpacing: "-0.01em" }}
            >
              {item}
              <span className="opacity-50 text-base font-sans">{SEPARATOR}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
