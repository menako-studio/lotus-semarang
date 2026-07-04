import { type ReactNode } from "react";
import { cn } from "../lib/utils";

interface GhostButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "dark" | "light";
}

/**
 * Ghost / outline button — the primary CTA style for Lotus Semarang.
 * Inverts on hover for dark variant, and vice versa for light.
 */
export function GhostButton({
  children,
  href,
  onClick,
  className,
  variant = "dark",
}: GhostButtonProps) {
  const base = cn(
    "btn-ghost",
    variant === "light" ? "btn-ghost-light" : "text-charcoal border-charcoal",
    className
  );

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={base}>
      {children}
    </button>
  );
}
