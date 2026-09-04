const fs = require('fs');
let content = fs.readFileSync('src/components/admin/blocks/BlockEditors.jsx', 'utf8');
const marker = '// ─── Solution Capabilities Block';
const idx = content.indexOf(marker);
if (idx !== -1) {
  const newContent = content.substring(0, idx) + `// ─── Solution Capabilities Block ────────────────────────────────────────────────
export function SolutionCapabilitiesEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const inputCls = 'w-full bg-background border border-white/10 rounded-lg px-3 py-2 text-[#fcf2ec] text-sm font-hanken focus:border-primary focus:outline-none transition-colors';

  const addCapability = () => {
    const caps = content.capabilities || [];
    update('capabilities', [...caps, { number: String(caps.length + 1).padStart(2, '0'), title: '', description: '', listItems: [] }]);
  };
  const updateCapability = (idx, key, val) => {
    const caps = [...(content.capabilities || [])];
    caps[idx] = { ...caps[idx], [key]: val };
    update('capabilities', caps);
  };
  const removeCapability = (idx) => {
    const caps = (content.capabilities || []).filter((_, i) => i !== idx);
    update('capabilities', caps);
  };

  const Field = ({ label, children }) => (
    <div className="mb-3">
      <label className="block text-xs font-clash text-white/50 mb-1">{label}</label>
      {children}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Field label="Section Heading">
          <input type="text" value={content.heading || ''} onChange={e => update('heading', e.target.value)} className={inputCls} />
        </Field>
        <Field label="Product Name">
          <input type="text" value={content.productName || ''} onChange={e => update('productName', e.target.value)} className={inputCls} />
        </Field>
      </div>
      <Field label="Subtitle">
        <textarea value={content.subtitle || ''} onChange={e => update('subtitle', e.target.value)} className={inputCls} rows={2} />
      </Field>

      <div className="border-t border-white/5 pt-4">
        <h4 className="text-sm font-clash text-white/70 mb-4">Capabilities</h4>
        <div className="space-y-4">
          {(content.capabilities || []).map((cap, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl relative">
              <button onClick={() => removeCapability(idx)} className="absolute top-3 right-3 text-white/40 hover:text-red-400">×</button>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <Field label="Number (e.g. 01)">
                  <input type="text" value={cap.number || ''} onChange={e => updateCapability(idx, 'number', e.target.value)} className={inputCls} />
                </Field>
                <Field label="Title">
                  <input type="text" value={cap.title || ''} onChange={e => updateCapability(idx, 'title', e.target.value)} className={inputCls} />
                </Field>
              </div>
              <Field label="Description">
                <textarea className={\`\${inputCls} h-16\`} value={cap.description || ''} onChange={e => updateCapability(idx, 'description', e.target.value)} />
              </Field>
              <Field label="List Items (Optional, one per line)">
                <textarea className={\`\${inputCls} h-24\`} value={(cap.listItems || []).join('\\n')} onChange={e => updateCapability(idx, 'listItems', e.target.value.split('\\n').map(s => s.trim()).filter(Boolean))} />
              </Field>
            </div>
          ))}
          <button onClick={addCapability} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all mt-2">
            + Add Capability
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── VR Ergonomics Block ────────────────────────────────────────────────
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
}
`;
  fs.writeFileSync('src/components/admin/blocks/BlockEditors.jsx', newContent);
  console.log('Fixed');
} else {
  console.log('Marker not found');
}
