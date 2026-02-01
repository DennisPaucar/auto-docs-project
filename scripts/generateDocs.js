const fs = require("fs");
const path = require("path");

const srcPath = path.join(__dirname, "../src");
const docsPath = path.join(__dirname, "../docs");

// Crear carpeta docs si no existe
if (!fs.existsSync(docsPath)) {
  fs.mkdirSync(docsPath);
}

// Leer archivos fuente
const files = fs.readdirSync(srcPath);

// Documentación
let md = "# Documentación automática\n\n";
let mermaid = "graph LR\n";

files.forEach(file => {
  const content = fs.readFileSync(path.join(srcPath, file), "utf8");

  // Detectar funciones simples
  const matches = content.match(/function (\w+)/g) || [];
  matches.forEach(m => {
    const name = m.replace("function ", "");
    md += `## ${name}\nFunción detectada automáticamente.\n\n`;
    mermaid += `  ${file} --> ${name}\n`;
  });
});

// Guardar archivos
fs.writeFileSync(path.join(docsPath, "docs.md"), md);
fs.writeFileSync(path.join(docsPath, "diagram.mmd"), mermaid);

console.log("📄 Documentación y diagramas generados");
