const fs = require("fs");
const path = require("path");

const packageRoot = path.join(
  __dirname,
  "..",
  "node_modules",
  "@types",
  "react-dom",
);
const indexPath = path.join(packageRoot, "index.d.ts");

if (!fs.existsSync(packageRoot)) {
  process.exit(0);
}

if (!fs.existsSync(indexPath)) {
  const sourcePath = path.join(__dirname, "react-dom-index.d.ts");
  const contents = fs.readFileSync(sourcePath, "utf8");
  fs.writeFileSync(indexPath, contents);
}
