import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] || '');
if (!process.argv[2] || !fs.statSync(root, { throwIfNoEntry: false })?.isDirectory()) {
  console.error('Usage: node tools/edm-preview-kit/serve-preview.mjs <output-directory>');
  process.exit(1);
}

const mime = { '.html': 'text/html; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
const server = http.createServer((request, response) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname); }
  catch { response.writeHead(400).end(); return; }
  const target = path.resolve(root, '.' + pathname);
  if (target !== root && !target.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
  const file = fs.statSync(target, { throwIfNoEntry: false })?.isDirectory() ? path.join(target, 'index.html') : target;
  if (!fs.statSync(file, { throwIfNoEntry: false })?.isFile()) { response.writeHead(404).end(); return; }
  response.writeHead(200, { 'Content-Type': mime[path.extname(file).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(response);
});
server.listen(0, '127.0.0.1', () => console.log(`Open http://127.0.0.1:${server.address().port}/`));
