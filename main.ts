import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "One star. The sun fades my curtains, cracks my dashboard, and has never once paid up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
