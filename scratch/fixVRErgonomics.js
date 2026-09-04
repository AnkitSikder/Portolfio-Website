const fs = require('fs');
let content = fs.readFileSync('src/components/admin/blocks/BlockEditors.jsx', 'utf8');
const oldEditor = `// ─── VR Ergonomics Block ────────────────────────────────────────────────
export function VRErgonomicsEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const inputCls = "w-full bg-background border border-white/10 rounded-lg px-3 py-2 text-[#fcf2ec] text-sm font-hanken focus:border-primary focus:outline-none transition-colors";

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-clash text-white/50 mb-1">Hero VR Image URL</label>
          <input type="text" value={content.heroImage || ''} onChange={e => update('heroImage', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-clash text-white/50 mb-1">Operational UI Image URL</label>
          <input type="text" value={content.operationalImage || ''} onChange={e => update('operationalImage', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-clash text-white/50 mb-1">System UI Image URL</label>
          <input type="text" value={content.systemImage || ''} onChange={e => update('systemImage', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-clash text-white/50 mb-1">Tutorial Mode Image URL</label>
          <input type="text" value={content.tutorialImage || ''} onChange={e => update('tutorialImage', e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-clash text-white/50 mb-1">Evaluation Mode Image URL</label>
          <input type="text" value={content.evaluationImage || ''} onChange={e => update('evaluationImage', e.target.value)} className={inputCls} />
        </div>
      </div>
    </div>
  );
}`;

const newEditor = `// ─── VR Ergonomics Block ────────────────────────────────────────────────
export function VRErgonomicsEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const inputCls = "w-full bg-background border border-white/10 rounded-lg px-3 py-2 text-[#fcf2ec] text-sm font-hanken focus:border-primary focus:outline-none transition-colors";

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ImageUploader label="Hero VR Image" value={content.heroImage} onChange={val => update('heroImage', val)} folder="blocks" />
        <ImageUploader label="Operational UI Image" value={content.operationalImage} onChange={val => update('operationalImage', val)} folder="blocks" />
        <ImageUploader label="System UI Image" value={content.systemImage} onChange={val => update('systemImage', val)} folder="blocks" />
        <ImageUploader label="Tutorial Mode Image" value={content.tutorialImage} onChange={val => update('tutorialImage', val)} folder="blocks" />
        <ImageUploader label="Evaluation Mode Image" value={content.evaluationImage} onChange={val => update('evaluationImage', val)} folder="blocks" />
      </div>
    </div>
  );
}`;

if (content.includes(oldEditor)) {
  content = content.replace(oldEditor, newEditor);
  fs.writeFileSync('src/components/admin/blocks/BlockEditors.jsx', content);
  console.log('Successfully updated VRErgonomicsEditor with ImageUploader');
} else {
  console.log('Could not find the oldEditor string in BlockEditors.jsx!');
}
