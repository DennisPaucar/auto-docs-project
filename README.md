# Auto Docs Project

Automated documentation generation project for JavaScript code.

## Structure

```
auto-docs-project/
├─ src/           # Source code files
├─ scripts/       # Build and utility scripts
├─ docs/          # Generated documentation
├─ config/        # Configuration files
└─ README.md
```

## Usage

1. Install dependencies:
   ```bash
   npm init -y
   npm install --save-dev jsdoc
   ```

2. Generate documentation:
   ```bash
   node scripts/generateDocs.js
   ```

3. View generated docs:
   Open `docs/index.html` in your browser

## Configuration

Documentation settings are in `config/docs.json`.