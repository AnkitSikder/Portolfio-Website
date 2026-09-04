const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.static(__dirname));

const outDir = path.join(__dirname, '..', 'public', 'assets', 'projects', 'immersive-traffic-command');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

app.post('/upload', (req, res) => {
  const { filename, base64 } = req.body;
  const buffer = Buffer.from(base64.replace(/^data:image\/png;base64,/, ''), 'base64');
  fs.writeFileSync(path.join(outDir, filename), buffer);
  console.log(`Saved ${filename}`);
  res.send('ok');
});

app.listen(3000, () => console.log('Extraction server running on port 3000'));
