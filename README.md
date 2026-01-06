A simple and fast **CLI tool** to copy files from one location to another — built with modern Node.js and ES Modules.

You can:

- Copy **any file** to a desired location
- Run it **globally from anywhere** as a CLI
- View **help** and **version** info

---

## Features

- ⚡ Fast and lightweight
- 🖥️ Works globally via npm
- 🧩 Supports `--help` and `--version`
- 🧠 Handles text, images, or any binary file
- 📦 Built with modern Node.js (`fs/promises`, ESM)

---

## Requirements

- **Node.js v20+** (recommended: latest LTS)

---

## Installation

Install globally using npm:

```bash
npm install -g @engineer.dilnawaz.khan/copy
```

---

## Usage

### Copy a file

```bash
copy <source-file> <destination-folder>
```

**Example:**

```bash
copy ./image.png /Users/dilnawazkhan/Desktop
```

**Output:**

```
Image paste successfully
```

> Note: The destination folder must exist.

---

### CLI Flags

- `--help` → Show usage information

```bash
copy --help
```

**Output Example:**

```
Usage:
  copy <source> <destination>

Options:
  --help      Show help
  --version   Show version
```

- `--version` → Show current version of the CLI

```bash
copy --version
```

**Output Example:**

```
copy v1.0.0
```

---

## How It Works

- Reads the source file using `node:fs/promises`
- Writes the file to the destination path
- Maintains binary integrity (works for text or images)
- Case-insensitive handling of file names is handled by OS

---

## Local Development

Clone the repository and link it locally:

```bash
git clone https://github.com/engineer-dilnawaz/copy.git
cd copy
npm install
npm link
```

Test it:

```bash
copy ./test.txt ~/Desktop
```

Unlink after testing:

```bash
npm unlink
```

---

## Project Structure

```text
├── task.js       # CLI entry point
├── package.json
└── README.md
```

---

## CLI Implementation Notes

- Uses **shebang**: `#!/usr/bin/env node`
- Exposed via the `bin` field in `package.json`
- Distributed as a **global npm CLI**
- Node ≥20 required for `import.meta.dirname`

---

## License

MIT © Dilnawaz Khan

---

## Author

**Dilnawaz Khan**
Frontend / Full-Stack Engineer
npm: `@engineer.dilnawaz.khan`

---

[![npm version](https://img.shields.io/npm/v/@engineer.dilnawaz.khan/copy-cli?style=flat-square&color=brightgreen)](https://www.npmjs.com/package/@engineer.dilnawaz.khan/copy-cli)

---

## Future Improvements

- Support for copying folders recursively (`-r` flag)
- Overwrite confirmation
- Progress output for large files
- Auto-create destination folder if missing

---

⭐ If you find this useful, consider starring the repository or sharing feedback!
