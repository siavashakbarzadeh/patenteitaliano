// ── Main questions aggregator ─────────────────────────────────────────────────
// Re-exports types and combines questions from all 25 chapter files.

export type { Question, Chapter } from "@/lib/types";
export { chapters } from "@/lib/chapters/index";

// ── Chapters 1–11 ─────────────────────────────────────────────────────────────
import { chapter1Questions }  from "@/lib/chapters/1/index";
import { chapter2Questions }  from "@/lib/chapters/2/index";
import { chapter3Questions }  from "@/lib/chapters/3/index";
import { chapter4Questions }  from "@/lib/chapters/4/index";
import { chapter5Questions }  from "@/lib/chapters/5/index";
import { chapter6Questions }  from "@/lib/chapters/6/index";
import { chapter7Questions }  from "@/lib/chapters/7/index";
import { chapter8Questions }  from "@/lib/chapters/8/index";
import { chapter9Questions }  from "@/lib/chapters/9/index";
import { chapter10Questions } from "@/lib/chapters/10/index";
import { chapter11Questions } from "@/lib/chapters/11/index";

// ── Chapters 12–20 ────────────────────────────────────────────────────────────
import { chapter12Questions } from "@/lib/chapters/12/index";
import { chapter13Questions } from "@/lib/chapters/13/index";
import { chapter14Questions } from "@/lib/chapters/14/index";
import { chapter15Questions } from "@/lib/chapters/15/index";
import { chapter16Questions } from "@/lib/chapters/16/index";
import { chapter17Questions } from "@/lib/chapters/17/index";
import { chapter18Questions } from "@/lib/chapters/18/index";
import { chapter19Questions } from "@/lib/chapters/19/index";
import { chapter20Questions } from "@/lib/chapters/20/index";

// ── Chapters 21–25 ────────────────────────────────────────────────────────────
import { chapter21Questions } from "@/lib/chapters/21/index";
import { chapter22Questions } from "@/lib/chapters/22/index";
import { chapter23Questions } from "@/lib/chapters/23/index";
import { chapter24Questions } from "@/lib/chapters/24/index";
import { chapter25Questions } from "@/lib/chapters/25/index";

export const questions = [
  ...chapter1Questions,
  ...chapter2Questions,
  ...chapter3Questions,
  ...chapter4Questions,
  ...chapter5Questions,
  ...chapter6Questions,
  ...chapter7Questions,
  ...chapter8Questions,
  ...chapter9Questions,
  ...chapter10Questions,
  ...chapter11Questions,
  ...chapter12Questions,
  ...chapter13Questions,
  ...chapter14Questions,
  ...chapter15Questions,
  ...chapter16Questions,
  ...chapter17Questions,
  ...chapter18Questions,
  ...chapter19Questions,
  ...chapter20Questions,
  ...chapter21Questions,
  ...chapter22Questions,
  ...chapter23Questions,
  ...chapter24Questions,
  ...chapter25Questions,
];
