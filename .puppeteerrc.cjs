/**
 * Puppeteer config — on CI (Netlify), skip download and use system Chromium.
 * Locally, Puppeteer downloads its own Chrome automatically.
 */
module.exports = {
  skipDownload: !!process.env.PUPPETEER_SKIP_DOWNLOAD,
};
