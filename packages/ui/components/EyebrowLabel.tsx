import { cn } from "../lib/utils";

interface EyebrowLabelProps {
  children: string;
  className?: string;
  light?: boolean;
}

/**
 * Eyebrow / caption label — uppercase tracked sans-serif.
 * Used above every section headline.
 */
export function EyebrowLabel({ children, className, light = false }: EyebrowLabelProps) {
  return (
    <span
      className={cn(
        "text-eyebrow",
        light ? "text-ivory/60" : "text-charcoal-300",
        className
      )}
    >
      {children}
    </span>
  );
}
