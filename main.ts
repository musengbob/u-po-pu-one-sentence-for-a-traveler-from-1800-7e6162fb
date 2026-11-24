import { mkdirSync, writeFileSync } from "node:fs";

// One sentence (193 characters) explaining the modern internet to a
// traveler from 1800, built only from things they already know:
// a road, a post office, a library, a letter, ink.
const ENTRY =
  "Imagine a road of light joining every post office and library on earth, so a letter you write here reaches a stranger across the sea before the ink is dry, and their reply returns just as fast.";

// Competition gate for "One Sentence for a Traveler from 1800":
//   - exactly one sentence (a single terminal period, no other
//     sentence-ending punctuation inside the text)
//   - 1-200 characters inclusive (the entry is 193)
//   - no trailing newline (the file is the sentence, byte for byte)
//   - non-empty, no leading/trailing whitespace
// Anything outside the gate is a bug in the entry, not a formatting
// choice, so fail loudly instead of writing a bad file.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(
      `entry must be 1-200 characters, got ${text.length}`,
    );
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (text.endsWith("\n")) {
    throw new Error("entry must not end with a trailing newline");
  }
  const terminators = (text.match(/[.!?]/g) ?? []).length;
  if (terminators !== 1 || !text.endsWith(".")) {
    throw new Error(
      `entry must be exactly one sentence ending with a period, got ${terminators} terminator(s)`,
    );
  }
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
