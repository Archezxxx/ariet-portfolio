import { createServer } from "node:http";
import { createReadStream, statSync } from "node:fs";
import { resolve, extname, sep } from "node:path";
const root = import.meta.dirname;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".jpg": "image/jpeg",
  ".png": "image/png",
};
const port = Number(process.env.PORT || 4173);
createServer((req, res) => {
  try {
    const pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      ),
      file = resolve(root, "." + (pathname === "/" ? "/index.html" : pathname)),
      relative = file.slice(root.length + 1);
    if (
      !file.startsWith(root + sep) ||
      relative.split(/[\\/]/).some((p) => p.startsWith(".")) ||
      !types[extname(file)]
    ) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }
    if (!statSync(file).isFile()) throw new Error("Not found");
    res.writeHead(200, {
      "Content-Type": types[extname(file)],
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff",
    });
    createReadStream(file).pipe(res);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}).listen(port, "127.0.0.1", () =>
  console.log(`Portfolio ready: http://localhost:${port}`),
);
