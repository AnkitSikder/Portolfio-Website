import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
  });
  const page = await browser.newPage();
  
  // Set a large viewport for the "long sheet"
  await page.setViewport({ width: 1440, height: 1080 });
  
  console.log("Navigating to http://localhost:5173/pdf...");
  await page.goto('http://localhost:5173/pdf', { waitUntil: 'domcontentloaded', timeout: 60000 });

  console.log("Scrolling to bottom to trigger animations and lazy loads...");
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      let distance = 500;
      let timer = setInterval(() => {
        let scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });

  // Scroll back to top just in case
  await page.evaluate(() => window.scrollTo(0, 0));
  
  // Wait for images to settle
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const bodyHeight = await page.evaluate(() => document.documentElement.scrollHeight);

  // Fix 100vh bug for fullPage screenshot without causing overlaps
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      html, body, #root, .pdf-mode {
        background-color: #171621 !important;
      }
      .h-screen { height: 1080px !important; max-height: none !important; }
      .min-h-screen { min-height: 1080px !important; max-height: none !important; }
      .h-\\[100svh\\] { height: 1080px !important; max-height: none !important; }
      .min-h-\\[100svh\\] { min-height: 1080px !important; max-height: none !important; }
    `;
    document.head.appendChild(style);
  });

  // Recompute body height after fixing vh units, as the layout might have shifted
  await new Promise(resolve => setTimeout(resolve, 1000));
  const finalBodyHeight = await page.evaluate(() => document.documentElement.scrollHeight);

  // Set the viewport to full height so clips render properly
  await page.setViewport({ width: 1440, height: finalBodyHeight });

  console.log(`Dividing portfolio (height: ${finalBodyHeight}px) into 4 pieces...`);
  const numPieces = 4;
  const chunkHeight = Math.ceil(finalBodyHeight / numPieces);

  for (let i = 0; i < numPieces; i++) {
    const currentHeight = (i === numPieces - 1) ? (finalBodyHeight - i * chunkHeight) : chunkHeight;
    const partPath = path.join(__dirname, `Portfolio_Part_${i + 1}.png`);
    console.log(`Taking screenshot for part ${i + 1}...`);
    await page.screenshot({
      path: partPath,
      clip: {
        x: 0,
        y: i * chunkHeight,
        width: 1440,
        height: currentHeight
      }
    });
  }

  const pdfPath = path.join(__dirname, 'Portfolio_2026.pdf');
  console.log(`Generating A3 Landscape PDF...`);
  await page.pdf({ 
    path: pdfPath, 
    printBackground: true,
    width: '1440px',
    height: '1080px',
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    timeout: 180000
  });
  
  await browser.close();
  console.log("Done! Saved 4 PNG parts and " + pdfPath);
})().catch(err => {
  console.error("Error capturing page:", err);
  process.exit(1);
});
