import { type ReactNode } from "react";
import { cn } from "../lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: "ivory" | "warm" | "charcoal";
}

/**
 * Consistent section wrapper with vertical rhythm applied.
 * All major sections should be wrapped in this.
 */
export function SectionWrapper({
  id,
  className,
  children,
  background = "ivory",
}: SectionWrapperProps) {
  const bgMap = {
    ivory:   "bg-ivory",
    warm:    "bg-cream-warm",
    charcoal:"bg-charcoal",
  };

  return (
    <section
      id={id}
      className={cn("section-padding overflow-hidden", bgMap[background], className)}
    >
      {children}
    </section>
  );
}
