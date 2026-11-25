import { writeFileSync, mkdirSync } from "node:fs";

const review =
  "One star. Sat forty minutes, no coffee, cold eggs — and Monday still billed me for the weekend I never got.";

// Gate guard: one line, at most 25 words, 1-180 characters.
const words = review.trim().split(/\s+/).length;
if (words > 25 || review.length > 180 || review.length < 1) {
  throw new Error(`gate fail: ${words} words, ${review.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
console.log(review);
