const fs = require('fs');
const path = require('path');
const { getDocument } = require('pdfjs-dist');
const { createCanvas } = require('canvas');

const NodeCanvasFactory = {
  create(width, height) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    return {
      canvas,
      context,
    };
  },
  reset(canvasAndContext, width, height) {
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  },
  destroy(canvasAndContext) {
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  },
};

async function extractPagesAsImages(pdfPath, outDir) {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = getDocument({
    data,
    cMapUrl: path.join(__dirname, 'node_modules/pdfjs-dist/cmaps/').replace(/\\/g, '/') + '/',
    cMapPacked: true,
    standardFontDataUrl: path.join(__dirname, 'node_modules/pdfjs-dist/standard_fonts/').replace(/\\/g, '/') + '/',
  });

  const pdfDocument = await loadingTask.promise;
  const numPages = pdfDocument.numPages;
  console.log(`Loaded PDF with ${numPages} pages`);

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (let i = 1; i <= numPages; i++) {
    const page = await pdfDocument.getPage(i);
    // Render at 3x for very high resolution suitable for cropping and retina displays
    const viewport = page.getViewport({ scale: 3.0 }); 
    const canvasFactory = NodeCanvasFactory;
    const canvasAndContext = canvasFactory.create(viewport.width, viewport.height);

    const renderContext = {
      canvasContext: canvasAndContext.context,
      viewport: viewport,
      canvasFactory: canvasFactory,
    };

    await page.render(renderContext).promise;
    const imageBuffer = canvasAndContext.canvas.toBuffer('image/png');
    const outPath = path.join(outDir, `page_${i}.png`);
    fs.writeFileSync(outPath, imageBuffer);
    console.log(`Saved ${outPath}`);
    page.cleanup();
  }
}

const pdfPath = "C:\\Users\\AnkitRaj\\Downloads\\Portfolio Antigravity\\Immersive Traffic Command- Prabir Sir.pdf";
const outDir = path.join(__dirname, "pdf_pages");
extractPagesAsImages(pdfPath, outDir).catch(console.error);
