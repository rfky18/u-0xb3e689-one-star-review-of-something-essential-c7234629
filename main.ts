import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "One star. The sun fades my curtains, cracks my dashboard, and has never once paid up.";

// The gate allows 1-160 chars; this review is exactly 85, no trailing newline.
if (review.length !== 85) throw new Error("review must be exactly 85 chars");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
