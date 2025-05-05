import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getQueryParams() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return Object.fromEntries(params.entries());
}
