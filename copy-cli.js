#!/usr/bin/env node

import fs from "node:fs/promises";

const args = process.argv.slice(2);
const dirname = import.meta.dirname;
const filname = import.meta.filename;

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
  const packageJSON = await fs.readFile(`${dirname}/package.json`, "utf-8");
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

console.log("Image paste successfully");
