import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// グラスモーフィズムのスタイル
export const glassmorphism = "backdrop-blur-md border-b border-border";
