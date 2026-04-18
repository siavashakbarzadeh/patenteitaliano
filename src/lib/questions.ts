// ── Main questions aggregator ─────────────────────────────────────────────────
// Re-exports types and combines questions from all available chapter files.
// To add a new chapter: import its questions here and add to the array.

export type { Question, Chapter } from "@/lib/types";
export { chapters } from "@/lib/chapters/index";

import { chapter19Questions } from "@/lib/chapters/19/index";
import { chapter20Questions } from "@/lib/chapters/20/index";

// Add future chapters here:
// import { chapter1Questions }  from "@/lib/chapters/01/index";

export const questions = [
  ...chapter19Questions,
  ...chapter20Questions,
];
