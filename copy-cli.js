#!/usr/bin/env node

import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname as pathDirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const args = process.argv.slice(2);

if (args.includes("--help")) {
  console.log(`Usage:
  copy <source> <destination>

Options:
  --help      Show help
  --version   Show version
`);
  process.exit(0);
}

if (args.includes("--version")) {
  const packageJSON = await fs.readFile(
    join(__dirname, "package.json"),
    "utf-8"
  );
  const version = JSON.parse(packageJSON).version;
  console.log(`copy v${version}`);
  process.exit(0);
}

const fileName = args[0];
const destinationPath = args[1];

if (!fileName) {
  console.error("Full filename is mandatory.");
  process.exit(1);
}

if (!destinationPath) {
  console.error("Path to paste the source is mandatory.");
  process.exit(1);
}

const imageBuffer = await fs.readFile(fileName);
await fs.writeFile(`${destinationPath}/${fileName}`, imageBuffer);

console.log("File copied successfully!");
