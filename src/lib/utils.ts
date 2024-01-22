import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { METHOD, Method } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
