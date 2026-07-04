import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class names intelligently.
 * Resolves conflicts (e.g., `p-4` vs `p-6` → keeps last).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
