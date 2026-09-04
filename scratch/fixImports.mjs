import fs from 'fs';
import path from 'path';

const dir = 'C:/Users/AnkitRaj/Downloads/Portfolio Antigravity/src/components/case-study/blocks/auracharge';

const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/from '\.\.\/\.\.\/common\/ScrollReveal'/g, "from '../../../common/ScrollReveal'");
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
});
