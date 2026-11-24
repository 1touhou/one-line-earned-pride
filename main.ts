import { mkdirSync, writeFileSync } from "node:fs";

// One line of earned pride: a small person doing something hard,
// a long effort finally landing. Written from scratch for the
// make.fun "One Line of Earned Pride" bounty.
const LINE =
  "After four failed tests, she reversed into the bay on the first try, cut the engine, and sat there a moment longer than she had to, both hands still on the wheel.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
