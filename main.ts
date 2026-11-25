// doomscrollache — a new English word for make.fun's "Invent a Word We Need".
// The program writes the word and its one-line definition to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "doomscrollache — the headache you get from reading bad news you went looking for.";

// The sealed scorer only accepts 1 to 140 characters, so fail loudly
// instead of writing an entry the judge would never see.
if (entry.length < 1 || entry.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
