import { mkdirSync, writeFileSync } from "node:fs";

// One sentence (193 characters) explaining the modern internet to a
// traveler from 1800, built only from things they already know:
// a road, a post office, a library, a letter, ink.
const ENTRY =
  "Imagine a road of light joining every post office and library on earth, so a letter you write here reaches a stranger across the sea before the ink is dry, and their reply returns just as fast.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
