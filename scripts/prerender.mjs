import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 4173;

const routes = [
  '/',
  '/cowork',
  '/produccion',
  '/galeria-arte',
  '/eventos',
  '/estudio-musical',
  '/workshops',
];

// Simple static file server for the built dist
function startServer() {
  const mime = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.svg': 'image/svg+xml',
    '.xml': 'application/xml',
    '.txt': 'text/plain',
  };

  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === '/' ? '/index.html' : req.url);

      // SPA fallback: if file doesn't exist, serve index.html
      if (!existsSync(filePath)) {
        filePath = join(DIST, 'index.html');
      }

      try {
        const data = readFileSync(filePath);
        const ext = '.' + filePath.split('.').pop();
        res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(PORT, () => {
      console.log(`  Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('\n🔍 Pre-rendering routes for SEO...\n');

  const server = await startServer();

  // Launch with system Chromium if available (Netlify), otherwise use bundled
  const launchOptions = {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  };

  // Use system Chromium on CI/Netlify
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    launchOptions.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  }

  const browser = await puppeteer.launch(launchOptions);

  for (const route of routes) {
    const page = await browser.newPage();

    // Block images/fonts/media to speed up rendering
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const type = req.resourceType();
      if (['image', 'font', 'media'].includes(type)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    const url = `http://localhost:${PORT}${route}`;
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait for React to render
    await new Promise((r) => setTimeout(r, 2000));

    // Get the full rendered HTML
    let html = await page.content();

    // Clean up: remove fullpage-active class (runtime only)
    html = html.replace(/\s*fullpage-active/g, '');

    // Write to the correct path
    const outDir = route === '/' ? DIST : join(DIST, route);
    const outFile = join(outDir, 'index.html');

    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true });
    }

    writeFileSync(outFile, html);
    console.log(`  ✓ ${route} → ${outFile.replace(DIST, 'dist')}`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log(`\n✅ Pre-rendered ${routes.length} routes successfully.\n`);
}

prerender().catch((err) => {
  console.error('⚠️  Pre-render failed (build continues without prerendering):', err.message);
  // Don't fail the build — the SPA still works, just without prerendered HTML
  process.exit(0);
});
