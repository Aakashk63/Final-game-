const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;

// 1. Files for the core engine bundle
const bundleFiles = [
  'icons.js',
  'sound.js',
  'levels-data.js',
  'diorama-engine.js',
  'simulation.js',
  'boss-canvas.js',
  'game.js'
];

console.log('Building bundle.js...');
const bundleContent = bundleFiles.map(file => {
  const filePath = path.join(projectRoot, file);
  return `/* === FILE: ${file} === */\n` + fs.readFileSync(filePath, 'utf8');
}).join('\n\n');

fs.writeFileSync(path.join(projectRoot, 'bundle.js'), bundleContent, 'utf8');
console.log(`bundle.js written (${(bundleContent.length / 1024).toFixed(1)} KB)`);

// 2. Read style.css
const cssContent = fs.readFileSync(path.join(projectRoot, 'style.css'), 'utf8');
console.log(`style.css read (${(cssContent.length / 1024).toFixed(1)} KB)`);

// 3. Read index.html
let html = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');

// Clean up any existing embedded style and script blocks if present
html = html.replace(/<style id="app-design-styles">[\s\S]*?<\/style>/i, '');
html = html.replace(/<script id="ridequest-embedded-engine">[\s\S]*?<\/script>/i, '');

// Clean up query parameters on links to avoid routing/MIME quirks
html = html.replace(/href="\.\/style\.css\?v=[^"]*"/g, 'href="style.css"');
html = html.replace(/href="\.\/style\.css"/g, 'href="style.css"');
html = html.replace(/src="\.\/bundle\.js\?v=[^"]*"/g, 'src="bundle.js"');
html = html.replace(/src="\.\/bundle\.js"/g, 'src="bundle.js"');

// Insert embedded <style id="app-design-styles"> immediately after <link rel="stylesheet" href="style.css">
const styleTag = `\n  <style id="app-design-styles">\n${cssContent}\n  </style>`;
if (html.includes('<link rel="stylesheet" href="style.css">')) {
  html = html.replace('<link rel="stylesheet" href="style.css">', `<link rel="stylesheet" href="style.css">${styleTag}`);
} else {
  html = html.replace('</head>', `${styleTag}\n</head>`);
}

// Insert embedded <script id="ridequest-embedded-engine"> before </body>
const scriptTag = `\n  <script id="ridequest-embedded-engine">\n${bundleContent}\n  </script>\n`;
if (html.includes('<script src="bundle.js"></script>')) {
  html = html.replace('<script src="bundle.js"></script>', `<script src="bundle.js"></script>${scriptTag}`);
} else {
  html = html.replace('</body>', `${scriptTag}</body>`);
}

fs.writeFileSync(path.join(projectRoot, 'index.html'), html, 'utf8');
console.log(`index.html updated with embedded styles and bundle (${(html.length / 1024).toFixed(1)} KB)`);
console.log('Build completed successfully!');
