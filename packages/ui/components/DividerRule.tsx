import { cn } from "../lib/utils";

interface DividerRuleProps {
  className?: string;
  light?: boolean;
}

/**
 * Thin horizontal rule — the editorial separator between content sections.
 */
export function DividerRule({ className, light = false }: DividerRuleProps) {
  return (
    <div
      className={cn(
        "w-full border-t",
        light ? "border-ivory/20" : "border-stone-200/60",
        className
      )}
    />
  );
}
