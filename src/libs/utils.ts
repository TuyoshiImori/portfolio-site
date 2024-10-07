import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// グラスモーフィズムのスタイル
export const glassmorphism =
  "backdrop-blur-md border border-border shadow-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-md backdrop-saturate-150";
