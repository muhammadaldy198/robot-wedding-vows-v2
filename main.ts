// robot-wedding-vows-v2 — REBUILD #2 (rombak total)
// Duel benchmark LAYAK+1: vs tidy-harbor-94 / vivid-heron-65 / lively-marten-76.
// Pick: vow klasik "to have and to hold" + angka mesin 256 + lane unik
// finger/patch/midnight v1 + twist penutup: "forever" di-deprecate.
// 150 karakter, satu baris. K2: turn di kata terakhir ("forever").
// K3: bahasa janji pernikahan klasik. K4: midnight patch, working finger,
// deprecated — spesifik mesin. K5: satu tarikan napas, jeda em-dash
// sebelum punch.
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const PICK =
  "I take you to have and to hold through 256 midnight patches, and vow to hold your hand with my last working finger \u2014 they deprecated the word forever.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.cwd();
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
