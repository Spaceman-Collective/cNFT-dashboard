import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateKey = (str: string, length: number = 6) =>
  `${str.slice(0, length)}...${str.slice(str.length - length, str.length)}`;
