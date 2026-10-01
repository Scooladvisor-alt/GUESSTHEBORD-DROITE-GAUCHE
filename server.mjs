import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = process.cwd();
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8' };
createServer(async (req, res) => {
  const path = normalize(join(root, req.url === '/' ? 'index.html' : req.url.split('?')[0]));
  if (!path.startsWith(root)) return res.writeHead(403).end();
  try { res.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream' }); res.end(await readFile(path)); }
  catch { res.writeHead(404).end('Not found'); }
}).listen(process.env.PORT || 5173, '0.0.0.0', () => console.log('Gauche ou Droite available on http://localhost:5173'));
