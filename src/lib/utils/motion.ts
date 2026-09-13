import { cubicOut } from "svelte/easing";

/**
 * Single source of truth for animation values. Add new sections against these tokens instead of hardcoding numbers so timings and curves stay consistent as the app grows.
 */
export const motion = {
  duration: {
    fast: 150,
    normal: 250,
    slow: 400,
  },
  easing: {
    standard: cubicOut,
  },
} as const;
