import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Um scriptzinho pra não ter tanta dor de cabeça pra concatenar classes
 * predefinidas com `classNames` arbitrários.
 * 
 * @param  {import("clsx/clsx")} inputs - as classes em si
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
