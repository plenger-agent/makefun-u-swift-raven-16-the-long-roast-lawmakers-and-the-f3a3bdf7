// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence (<=320 chars) to entry.txt.
// The joke: the chair drafts a bill to regulate AI in the morning, then
// cannot perform the most basic file conversion live on camera. The dot in
// "v2.docx" is part of the filename, not a sentence boundary — the entry is
// a single sentence ending in the question mark.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "The committee chair who spent the morning drafting a bill to regulate artificial intelligence just whispered to his aide, live on camera, \"How do I save AI_REGULATION_FINAL_v2.docx as a PDF?\"";

if (SENTENCE.length < 1 || SENTENCE.length > 320) {
  throw new Error(`Sentence must be 1-320 characters, got ${SENTENCE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE + "\n", "utf8");
