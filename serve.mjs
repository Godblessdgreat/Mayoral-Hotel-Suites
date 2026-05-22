// Minimal localhost dev server for the Mayoral project.
// Run with: node serve.mjs
// Serves the project root at http://localhost:3000
// No dependencies — uses Node built-ins only.

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = Number(process.env.PORT) || 3000;
const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)));

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.htm':  'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.mjs':  'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.otf':  'font/otf',
  '.txt':  'text/plain; charset=utf-8',
  '.md':   'text/markdown; charset=utf-8',
};

function color(code, s) { return `\x1b[${code}m${s}\x1b[0m`; }
const dim   = s => color('2', s);
const green = s => color('32', s);
const red   = s => color('31', s);
const cyan  = s => color('36', s);

async function resolveFsPath(urlPath) {
  // Decode and strip query/hash; remove leading slash
  const clean = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  let rel = clean.replace(/^\/+/, '');
  if (rel === '' || rel.endsWith('/')) rel += 'index.html';

  // Path traversal guard
  const target = resolve(ROOT, rel);
  if (!target.startsWith(ROOT + sep) && target !== ROOT) return null;

  try {
    const s = await stat(target);
    if (s.isDirectory()) {
      const indexed = join(target, 'index.html');
      const si = await stat(indexed).catch(() => null);
      return si && si.isFile() ? indexed : null;
    }
    return s.isFile() ? target : null;
  } catch {
    return null;
  }
}

const server = createServer(async (req, res) => {
  const start = Date.now();
  const reqPath = req.url || '/';
  const fsPath = await resolveFsPath(reqPath);

  if (!fsPath) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
    console.log(`${red('404')} ${reqPath}  ${dim((Date.now() - start) + 'ms')}`);
    return;
  }

  try {
    const data = await readFile(fsPath);
    const mime = MIME[extname(fsPath).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': mime,
      'Cache-Control': 'no-store',
    });
    res.end(data);
    console.log(`${green('200')} ${reqPath}  ${dim((Date.now() - start) + 'ms')}`);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('500 Server Error');
    console.log(`${red('500')} ${reqPath}  ${dim(err.message)}`);
  }
});

server.listen(PORT, () => {
  console.log(`\n${cyan('serve.mjs')} — Mayoral dev server`);
  console.log(`  Serving ${dim(ROOT)}`);
  console.log(`  Listening on ${cyan('http://localhost:' + PORT)}\n`);
});

process.on('SIGINT', () => {
  console.log(`\n${dim('Shutting down…')}`);
  server.close(() => process.exit(0));
});
