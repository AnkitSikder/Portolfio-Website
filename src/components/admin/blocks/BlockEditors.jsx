import React from 'react';
import ImageUploader from '../ImageUploader';

// ─── Shared Admin Input Styles ──────────────────────────────────────────────
// These are applied via inline className to avoid adding CSS

const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#fcf2ec] text-sm font-hanken placeholder:text-white/20 focus:outline-none focus:border-primary/40 transition-all resize-none";
const labelCls = "block text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/50 mb-1.5";

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className={labelCls}>{label}</label>}
      {children}
    </div>
  );
}

// ─── Text Block ──────────────────────────────────────────────────────────────
export function TextBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  return (
    <div className="flex flex-col gap-4">
      <Field label="Eyebrow">
        <input className={inputCls} value={content.eyebrow || ''} onChange={e => update('eyebrow', e.target.value)} placeholder="e.g. Research Phase" />
      </Field>
      <Field label="Heading">
        <input className={inputCls} value={content.heading || ''} onChange={e => update('heading', e.target.value)} placeholder="Section heading" />
      </Field>
      <Field label="Body">
        <textarea className={`${inputCls} h-32`} value={content.body || ''} onChange={e => update('body', e.target.value)} placeholder="Body text..." />
      </Field>
      <Field label="Alignment">
        <select className={inputCls} value={content.alignment || 'left'} onChange={e => update('alignment', e.target.value)}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </Field>
    </div>
  );
}

// ─── Hero Block ────────────────────────────────────────────────────────────────
export function HeroBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Category Override"><input className={inputCls} value={content.category || ''} onChange={e => update('category', e.target.value)} placeholder="Leave blank to use project category" /></Field>
        <Field label="Title Override"><input className={inputCls} value={content.title || ''} onChange={e => update('title', e.target.value)} placeholder="Leave blank to use project title" /></Field>
      </div>
      <Field label="Summary Override">
        <textarea className={`${inputCls} h-20`} value={content.summary || ''} onChange={e => update('summary', e.target.value)} placeholder="Leave blank to use project short description..." />
      </Field>
      <div className="grid grid-cols-3 gap-3">
        <Field label="Role"><input className={inputCls} value={content.role || ''} onChange={e => update('role', e.target.value)} placeholder="e.g. Product Designer" /></Field>
        <Field label="Duration"><input className={inputCls} value={content.duration || ''} onChange={e => update('duration', e.target.value)} placeholder="e.g. 2023 - 2024" /></Field>
        <Field label="Tools (comma-separated)"><input className={inputCls} value={content.toolsRaw !== undefined ? content.toolsRaw : (Array.isArray(content.tools) ? content.tools.join(', ') : (content.tools || ''))} onChange={e => onChange({ ...content, toolsRaw: e.target.value, tools: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} placeholder="Figma, React, etc." /></Field>
      </div>
    </div>
  );
}

// ─── Image Block ─────────────────────────────────────────────────────────────
export function ImageBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className={labelCls}>Heading (Optional)</label>
        <input className={inputCls} value={content.heading || ''} onChange={e => update('heading', e.target.value)} placeholder="e.g. Benchmark Product" />
      </div>
      <ImageUploader label="Image" value={content.image} onChange={val => update('image', val)} folder="blocks" />
      <Field label="Alt Text">
        <input className={inputCls} value={content.alt || ''} onChange={e => update('alt', e.target.value)} placeholder="Describe the image for accessibility" />
      </Field>
      <Field label="Caption">
        <input className={inputCls} value={content.caption || ''} onChange={e => update('caption', e.target.value)} placeholder="Optional caption" />
      </Field>
      <Field label="Width">
        <select className={inputCls} value={content.width || 'full'} onChange={e => update('width', e.target.value)}>
          <option value="full">Full Width</option>
          <option value="contained">Contained</option>
          <option value="narrow">Narrow</option>
        </select>
      </Field>
    </div>
  );
}

// ─── Image Gallery ───────────────────────────────────────────────────────────
export function ImageGalleryEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const images = content.images || [];

  const addImage = (url) => update('images', [...images, { url, alt: '', caption: '' }]);
  const removeImage = (idx) => update('images', images.filter((_, i) => i !== idx));
  const updateImage = (idx, key, val) => update('images', images.map((img, i) => i === idx ? { ...img, [key]: val } : img));

  return (
    <div className="flex flex-col gap-4">
      <Field label="Section Title (Optional)">
        <input className={inputCls} value={content.title || ''} onChange={e => update('title', e.target.value)} placeholder="e.g. VISUAL DESIGN" />
      </Field>

      <Field label="Layout">
        <select className={inputCls} value={content.layout || 'grid'} onChange={e => update('layout', e.target.value)}>
          <option value="grid">Grid</option>
          <option value="masonry">Masonry</option>
          <option value="carousel">Carousel</option>
          <option value="scroll">Horizontal Scroll</option>
          <option value="bento">Bento Grid</option>
        </select>
      </Field>

      <div className="flex flex-col gap-3">
        <label className={labelCls}>Images</label>
        {images.map((img, idx) => (
          <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#fcf2ec]/40 font-clash">Image {idx + 1}</span>
              <button onClick={() => removeImage(idx)} className="text-xs text-red-400 hover:text-red-300 font-clash">Remove</button>
            </div>
            <ImageUploader 
              value={img.url} 
              onChange={val => updateImage(idx, 'url', val)} 
              label={`Image ${idx + 1}`}
              folder="blocks" 
            />
            <input className={`${inputCls} text-xs`} value={img.alt || ''} onChange={e => updateImage(idx, 'alt', e.target.value)} placeholder="Alt text" />
            <input className={`${inputCls} text-xs`} value={img.caption || ''} onChange={e => updateImage(idx, 'caption', e.target.value)} placeholder="Caption (optional)" />
          </div>
        ))}
        <button
          onClick={() => addImage('')}
          className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all"
        >
          + Add Image
        </button>
      </div>

      <Field label="Gallery Caption">
        <input className={inputCls} value={content.caption || ''} onChange={e => update('caption', e.target.value)} placeholder="Overall gallery caption" />
      </Field>
    </div>
  );
}

// ─── Research Block ───────────────────────────────────────────────────────────
export function ResearchBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const findings = content.findings || [];

  const addFinding = () => update('findings', [...findings, { title: '', description: '' }]);
  const removeFinding = (idx) => update('findings', findings.filter((_, i) => i !== idx));
  const updateFinding = (idx, key, val) => update('findings', findings.map((f, i) => i === idx ? { ...f, [key]: val } : f));

  return (
    <div className="flex flex-col gap-4">
      <Field label="Variant">
        <select className={inputCls} value={content.variant || 'interviews'} onChange={e => update('variant', e.target.value)}>
          <option value="interviews">User Interviews</option>
          <option value="surveys">Surveys</option>
          <option value="combined">Combined (Left/Right)</option>
          <option value="custom">Custom</option>
        </select>
      </Field>

      {content.variant === 'combined' ? (
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-4 p-4 border border-foreground/10 rounded-xl">
            <h4 className="font-bold text-foreground">Left Column</h4>
            <Field label="Heading">
              <input className={inputCls} value={content.heading || ''} onChange={e => update('heading', e.target.value)} placeholder="e.g. User Interviews" />
            </Field>
            <Field label="Text">
              <textarea className={`${inputCls} h-24`} value={content.participants || ''} onChange={e => update('participants', e.target.value)} placeholder="Text below heading" />
            </Field>
            <Field label="Image">
              <ImageUploader value={content.image} onChange={url => update('image', url)} folder="blocks" />
            </Field>
          </div>
          <div className="flex flex-col gap-4 p-4 border border-foreground/10 rounded-xl">
            <h4 className="font-bold text-foreground">Right Column</h4>
            <Field label="Heading">
              <input className={inputCls} value={content.heading2 || ''} onChange={e => update('heading2', e.target.value)} placeholder="e.g. Survey Insights" />
            </Field>
            <Field label="Text">
              <textarea className={`${inputCls} h-24`} value={content.participants2 || ''} onChange={e => update('participants2', e.target.value)} placeholder="Text below heading" />
            </Field>
            <Field label="Image">
              <ImageUploader value={content.image2} onChange={url => update('image2', url)} folder="blocks" />
            </Field>
          </div>
        </div>
      ) : (
        <>
          <Field label="Heading">
        <input className={inputCls} value={content.heading || ''} onChange={e => update('heading', e.target.value)} placeholder="Section heading" />
      </Field>
      <Field label="Subheading">
        <input className={inputCls} value={content.subheading || ''} onChange={e => update('subheading', e.target.value)} placeholder="Section subheading" />
      </Field>
      <Field label="Participants / Method">
        <textarea className={`${inputCls} h-20`} value={content.participants || ''} onChange={e => update('participants', e.target.value)} placeholder="Describe participants or methodology..." />
      </Field>
      <Field label="Image">
        <ImageUploader value={content.image} onChange={url => update('image', url)} folder="blocks" />
      </Field>

      <div className="flex flex-col gap-3">
        <label className={labelCls}>Findings</label>
        {findings.map((f, idx) => (
          <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#fcf2ec]/40 font-clash">Finding {idx + 1}</span>
              <button onClick={() => removeFinding(idx)} className="text-xs text-red-400 font-clash">Remove</button>
            </div>
            <input className={inputCls} value={f.title || ''} onChange={e => updateFinding(idx, 'title', e.target.value)} placeholder="Finding title" />
            <textarea className={`${inputCls} h-16`} value={f.description || ''} onChange={e => updateFinding(idx, 'description', e.target.value)} placeholder="Finding description" />
          </div>
        ))}
        <button onClick={addFinding} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
          + Add Finding
        </button>
      </div>
      </>
      )}
    </div>
  );
}

// ─── Persona Block ────────────────────────────────────────────────────────────
export function PersonaBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const personas = content.personas || [];

  const addPersona = () => update('personas', [...personas, {
    name: '', bio: '', demographics: '', motivations: '', frustrations: '', goals: '', quote: '', personality: [], image: ''
  }]);
  const removePersona = (idx) => update('personas', personas.filter((_, i) => i !== idx));
  const updatePersona = (idx, key, val) => update('personas', personas.map((p, i) => i === idx ? { ...p, [key]: val } : p));

  return (
    <div className="flex flex-col gap-4">
      {personas.map((p, idx) => (
        <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#fcf2ec]/60 font-clash font-medium">{p.name || `Persona ${idx + 1}`}</span>
            <button onClick={() => removePersona(idx)} className="text-xs text-red-400 font-clash">Remove</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Name">
              <input className={inputCls} value={p.name || ''} onChange={e => updatePersona(idx, 'name', e.target.value)} placeholder="e.g. Ankit Mehta" />
            </Field>
            <Field label="Demographics">
              <input className={inputCls} value={p.demographics || ''} onChange={e => updatePersona(idx, 'demographics', e.target.value)} placeholder="Age • Occupation • Location" />
            </Field>
          </div>
          <Field label="Bio">
            <textarea className={`${inputCls} h-16`} value={p.bio || ''} onChange={e => updatePersona(idx, 'bio', e.target.value)} placeholder="Brief persona bio..." />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Motivations">
              <textarea className={`${inputCls} h-16`} value={p.motivations || ''} onChange={e => updatePersona(idx, 'motivations', e.target.value)} placeholder="What drives them" />
            </Field>
            <Field label="Frustrations">
              <textarea className={`${inputCls} h-16`} value={p.frustrations || ''} onChange={e => updatePersona(idx, 'frustrations', e.target.value)} placeholder="What frustrates them" />
            </Field>
          </div>
          <Field label="Quote">
            <input className={inputCls} value={p.quote || ''} onChange={e => updatePersona(idx, 'quote', e.target.value)} placeholder="Persona quote" />
          </Field>
          <Field label="Personality Tags (comma-separated)">
            <input className={inputCls} value={(p.personality || []).join(', ')} onChange={e => updatePersona(idx, 'personality', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} placeholder="Introvert, Techie, Enthusiastic" />
          </Field>
          <ImageUploader label="Photo (optional)" value={p.image} onChange={val => updatePersona(idx, 'image', val)} folder="personas" />
        </div>
      ))}
      <button onClick={addPersona} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
        + Add Persona
      </button>
    </div>
  );
}

// ─── Quote Block ──────────────────────────────────────────────────────────────
export function QuoteBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  return (
    <div className="flex flex-col gap-4">
      <Field label="Quote">
        <textarea className={`${inputCls} h-24`} value={content.quote || ''} onChange={e => update('quote', e.target.value)} placeholder="Quote text..." />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Person">
          <input className={inputCls} value={content.person || ''} onChange={e => update('person', e.target.value)} placeholder="Name" />
        </Field>
        <Field label="Role">
          <input className={inputCls} value={content.role || ''} onChange={e => update('role', e.target.value)} placeholder="Job title or context" />
        </Field>
      </div>
    </div>
  );
}

// ─── Statistic Block ──────────────────────────────────────────────────────────
export function StatisticBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const stats = content.stats || [];

  const addStat = () => update('stats', [...stats, { number: '', label: '', description: '' }]);
  const removeStat = (idx) => update('stats', stats.filter((_, i) => i !== idx));
  const updateStat = (idx, key, val) => update('stats', stats.map((s, i) => i === idx ? { ...s, [key]: val } : s));

  return (
    <div className="flex flex-col gap-4">
      {stats.map((s, idx) => (
        <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#fcf2ec]/40 font-clash">Stat {idx + 1}</span>
            <button onClick={() => removeStat(idx)} className="text-xs text-red-400 font-clash">Remove</button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Number / Value">
              <input className={inputCls} value={s.number || ''} onChange={e => updateStat(idx, 'number', e.target.value)} placeholder="e.g. 15" />
            </Field>
            <Field label="Label">
              <input className={inputCls} value={s.label || ''} onChange={e => updateStat(idx, 'label', e.target.value)} placeholder="e.g. Players interviewed" />
            </Field>
          </div>
          <Field label="Description (optional)">
            <input className={`${inputCls} text-xs`} value={s.description || ''} onChange={e => updateStat(idx, 'description', e.target.value)} placeholder="Additional context" />
          </Field>
        </div>
      ))}
      <button onClick={addStat} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
        + Add Statistic
      </button>
    </div>
  );
}

// ─── Comparison Block ─────────────────────────────────────────────────────────
export function ComparisonBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const items = content.items || [];

  const addItem = () => update('items', [...items, { name: '', focus: '', strengths: '', weaknesses: '', highlight: false }]);
  const removeItem = (idx) => update('items', items.filter((_, i) => i !== idx));
  const updateItem = (idx, key, val) => update('items', items.map((it, i) => i === idx ? { ...it, [key]: val } : it));

  return (
    <div className="flex flex-col gap-4">
      <Field label="Insight / Summary">
        <textarea className={`${inputCls} h-20`} value={content.insight || ''} onChange={e => update('insight', e.target.value)} placeholder="Key differentiating insight..." />
      </Field>
      {items.map((it, idx) => (
        <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#fcf2ec]/40 font-clash">Item {idx + 1}</span>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1.5 text-xs text-amber-400 font-clash cursor-pointer">
                <input type="checkbox" checked={it.highlight || false} onChange={e => updateItem(idx, 'highlight', e.target.checked)} className="rounded" />
                Highlight
              </label>
              <button onClick={() => removeItem(idx)} className="text-xs text-red-400 font-clash">Remove</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Name"><input className={inputCls} value={it.name || ''} onChange={e => updateItem(idx, 'name', e.target.value)} placeholder="Company/Product" /></Field>
            <Field label="Focus"><input className={inputCls} value={it.focus || ''} onChange={e => updateItem(idx, 'focus', e.target.value)} placeholder="Main focus area" /></Field>
          </div>
          <Field label="Strengths"><textarea className={`${inputCls} h-14`} value={it.strengths || ''} onChange={e => updateItem(idx, 'strengths', e.target.value)} placeholder="Strengths..." /></Field>
          <Field label="Weaknesses"><textarea className={`${inputCls} h-14`} value={it.weaknesses || ''} onChange={e => updateItem(idx, 'weaknesses', e.target.value)} placeholder="Weaknesses..." /></Field>
        </div>
      ))}
      <button onClick={addItem} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
        + Add Item
      </button>
    </div>
  );
}

// ─── Design System Block ──────────────────────────────────────────────────────
export function DesignSystemBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const colors = content.colors || [];
  const typography = content.typography || [];

  const addColor = () => update('colors', [...colors, { hex: '', name: '' }]);
  const removeColor = (idx) => update('colors', colors.filter((_, i) => i !== idx));
  const updateColor = (idx, key, val) => update('colors', colors.map((c, i) => i === idx ? { ...c, [key]: val } : c));

  const addFont = () => update('typography', [...typography, { family: '', weights: [] }]);
  const removeFont = (idx) => update('typography', typography.filter((_, i) => i !== idx));
  const updateFont = (idx, key, val) => update('typography', typography.map((f, i) => i === idx ? { ...f, [key]: val } : f));

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Heading"><input className={inputCls} value={content.heading || 'Style Guide'} onChange={e => update('heading', e.target.value)} /></Field>
        <Field label="Subheading"><input className={inputCls} value={content.subheading || ''} onChange={e => update('subheading', e.target.value)} placeholder="Brief description" /></Field>
      </div>

      {/* Colors */}
      <div>
        <label className={labelCls}>Color Palette</label>
        <div className="flex flex-col gap-2 mt-2">
          {colors.map((c, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg border border-white/10 shrink-0" style={{ backgroundColor: `#${c.hex}` }} />
              <input className={`${inputCls} w-28`} value={c.hex || ''} onChange={e => updateColor(idx, 'hex', e.target.value)} placeholder="RRGGBB" />
              <input className={`${inputCls} flex-1`} value={c.name || ''} onChange={e => updateColor(idx, 'name', e.target.value)} placeholder="Color name" />
              <button onClick={() => removeColor(idx)} className="text-red-400 text-xs font-clash shrink-0">✕</button>
            </div>
          ))}
          <button onClick={addColor} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
            + Add Color
          </button>
        </div>
      </div>

      {/* Typography */}
      <div>
        <label className={labelCls}>Typography</label>
        <div className="flex flex-col gap-2 mt-2">
          {typography.map((f, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <input className={`${inputCls} flex-1 mr-2`} value={f.family || ''} onChange={e => updateFont(idx, 'family', e.target.value)} placeholder="Font family name" />
                <button onClick={() => removeFont(idx)} className="text-red-400 text-xs font-clash">✕</button>
              </div>
              <input className={`${inputCls} text-xs`} value={(f.weights || []).join(', ')} onChange={e => updateFont(idx, 'weights', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} placeholder="Regular, Medium, Bold, SemiBold" />
            </div>
          ))}
          <button onClick={addFont} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
            + Add Font
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Testing Block ────────────────────────────────────────────────────────────
export function TestingBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const insights = content.insights || [];
  const quotes = content.quotes || [];

  const addInsight = () => update('insights', [...insights, { category: '', positive: '', improvement: '' }]);
  const removeInsight = (idx) => update('insights', insights.filter((_, i) => i !== idx));
  const updateInsight = (idx, key, val) => update('insights', insights.map((it, i) => i === idx ? { ...it, [key]: val } : it));

  const addQuote = () => update('quotes', [...quotes, '']);
  const removeQuote = (idx) => update('quotes', quotes.filter((_, i) => i !== idx));
  const updateQuote = (idx, val) => update('quotes', quotes.map((q, i) => i === idx ? val : q));

  return (
    <div className="flex flex-col gap-6">
      <div>
        <label className={labelCls}>Testing Insights</label>
        <div className="flex flex-col gap-3 mt-2">
          {insights.map((it, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#fcf2ec]/40 font-clash">Insight {idx + 1}</span>
                <button onClick={() => removeInsight(idx)} className="text-xs text-red-400 font-clash">Remove</button>
              </div>
              <Field label="Category"><input className={inputCls} value={it.category || ''} onChange={e => updateInsight(idx, 'category', e.target.value)} placeholder="e.g. Ease of Use" /></Field>
              <Field label="Positive"><textarea className={`${inputCls} h-14`} value={it.positive || ''} onChange={e => updateInsight(idx, 'positive', e.target.value)} placeholder="What worked well..." /></Field>
              <Field label="Improvement"><textarea className={`${inputCls} h-14`} value={it.improvement || ''} onChange={e => updateInsight(idx, 'improvement', e.target.value)} placeholder="What needs improvement..." /></Field>
            </div>
          ))}
          <button onClick={addInsight} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
            + Add Insight
          </button>
        </div>
      </div>

      <div>
        <label className={labelCls}>User Quotes</label>
        <div className="flex flex-col gap-2 mt-2">
          {quotes.map((q, idx) => (
            <div key={idx} className="flex gap-2">
              <textarea className={`${inputCls} h-14 flex-1`} value={q} onChange={e => updateQuote(idx, e.target.value)} placeholder={`User quote ${idx + 1}...`} />
              <button onClick={() => removeQuote(idx)} className="text-red-400 text-xs font-clash shrink-0">✕</button>
            </div>
          ))}
          <button onClick={addQuote} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
            + Add Quote
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Screen Showcase Block ────────────────────────────────────────────────────
export function ScreenShowcaseBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const screens = content.screens || [];

  const addScreen = () => update('screens', [...screens, { type: 'hero', image: '', caption: '' }]);
  const removeScreen = (idx) => update('screens', screens.filter((_, i) => i !== idx));
  const updateScreen = (idx, key, val) => update('screens', screens.map((s, i) => i === idx ? { ...s, [key]: val } : s));

  return (
    <div className="flex flex-col gap-3">
      {screens.map((s, idx) => (
        <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#fcf2ec]/40 font-clash">Screen {idx + 1}</span>
            <button onClick={() => removeScreen(idx)} className="text-xs text-red-400 font-clash">Remove</button>
          </div>
          <Field label="Type">
            <select className={inputCls} value={s.type || 'hero'} onChange={e => updateScreen(idx, 'type', e.target.value)}>
              <option value="hero">Full Width</option>
              <option value="pair">Side by Side (pair)</option>
            </select>
          </Field>
          <ImageUploader label="Image" value={s.image} onChange={val => updateScreen(idx, 'image', val)} folder="screens" />
          {s.type === 'pair' && <ImageUploader label="Second Image" value={s.image2} onChange={val => updateScreen(idx, 'image2', val)} folder="screens" />}
          <Field label="Caption"><input className={inputCls} value={s.caption || ''} onChange={e => updateScreen(idx, 'caption', e.target.value)} placeholder="Optional caption" /></Field>
        </div>
      ))}
      <button onClick={addScreen} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
        + Add Screen
      </button>
    </div>
  );
}

// ─── Outcome Block ────────────────────────────────────────────────────────────
export function OutcomeBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  return (
    <div className="flex flex-col gap-4">
      <Field label="Heading">
        <input className={inputCls} value={content.heading || 'The Outcome'} onChange={e => update('heading', e.target.value)} />
      </Field>
      <Field label="Body">
        <textarea className={`${inputCls} h-32`} value={content.body || ''} onChange={e => update('body', e.target.value)} placeholder="Results and impact..." />
      </Field>
      <Field label="Theme">
        <select className={inputCls} value={content.theme || 'orange'} onChange={e => update('theme', e.target.value)}>
          <option value="orange">Orange (Primary)</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </Field>
    </div>
  );
}

// ─── Overview Block ────────────────────────────────────────────────────────────
export function OverviewBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const audience = content.audience || [];

  const addAudience = () => update('audience', [...audience, '']);
  const removeAudience = (idx) => update('audience', audience.filter((_, i) => i !== idx));
  const updateAudience = (idx, val) => update('audience', audience.map((it, i) => i === idx ? val : it));

  return (
    <div className="flex flex-col gap-4">
      <Field label="Title"><input className={inputCls} value={content.title || ''} onChange={e => update('title', e.target.value)} placeholder="e.g. The Context" /></Field>
      <Field label="Description">
        <textarea className={`${inputCls} h-28`} value={content.description || ''} onChange={e => update('description', e.target.value)} placeholder="Project overview..." />
      </Field>
      <div className="flex flex-col gap-2 mt-2">
        <label className={labelCls}>Target Audience</label>
        {audience.map((item, idx) => (
          <div key={idx} className="flex gap-2">
            <input className={`${inputCls} flex-1`} value={item} onChange={e => updateAudience(idx, e.target.value)} placeholder="e.g. Tech-Savvy Homeowners" />
            <button onClick={() => removeAudience(idx)} className="text-red-400 text-xs font-clash shrink-0">✕</button>
          </div>
        ))}
        <button onClick={addAudience} className="px-3 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
          + Add Audience
        </button>
      </div>
    </div>
  );
}

// ─── Product Classification Block ─────────────────────────────────────────────
export function ProductClassificationEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const items = content.items || [];
  const addItem = () => update('items', [...items, { type: '', capacity: '', dimensions: '', weight: '', purposes: '', features: '', image: '' }]);
  const removeItem = (idx) => update('items', items.filter((_, i) => i !== idx));
  const updateItem = (idx, key, val) => update('items', items.map((it, i) => i === idx ? { ...it, [key]: val } : it));
  return (
    <div className="flex flex-col gap-4">
      {items.map((it, idx) => (
        <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#fcf2ec]/40 font-clash">Classification {idx + 1}</span>
            <button onClick={() => removeItem(idx)} className="text-xs text-red-400 font-clash">Remove</button>
          </div>
          <ImageUploader label="Image" value={it.image} onChange={val => updateItem(idx, 'image', val)} folder="blocks" />
          <Field label="Type"><input className={inputCls} value={it.type || ''} onChange={e => updateItem(idx, 'type', e.target.value)} placeholder="Type" /></Field>
          <Field label="Capacity"><input className={inputCls} value={it.capacity || ''} onChange={e => updateItem(idx, 'capacity', e.target.value)} placeholder="Capacity" /></Field>
          <Field label="Dimensions"><input className={inputCls} value={it.dimensions || ''} onChange={e => updateItem(idx, 'dimensions', e.target.value)} placeholder="Dimensions" /></Field>
          <Field label="Weight"><input className={inputCls} value={it.weight || ''} onChange={e => updateItem(idx, 'weight', e.target.value)} placeholder="Weight" /></Field>
          <Field label="Purposes"><input className={inputCls} value={it.purposes || ''} onChange={e => updateItem(idx, 'purposes', e.target.value)} placeholder="Purposes" /></Field>
          <Field label="Features"><textarea className={inputCls} value={it.features || ''} onChange={e => updateItem(idx, 'features', e.target.value)} placeholder="Features..." /></Field>
        </div>
      ))}
      <button onClick={addItem} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
        + Add Classification
      </button>
    </div>
  );
}

// ─── SWOT Block ───────────────────────────────────────────────────────────────
export function SWOTEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  
  const renderListEditor = (key, label) => {
    const list = content[key] || [];
    const addItem = () => update(key, [...list, '']);
    const removeItem = (idx) => update(key, list.filter((_, i) => i !== idx));
    const updateItem = (idx, val) => update(key, list.map((it, i) => i === idx ? val : it));
    return (
      <div className="flex flex-col gap-2">
        <label className={labelCls}>{label}</label>
        {list.map((item, idx) => (
          <div key={idx} className="flex gap-2">
            <input className={`${inputCls} flex-1`} value={item} onChange={e => updateItem(idx, e.target.value)} placeholder={`${label} item...`} />
            <button onClick={() => removeItem(idx)} className="text-red-400 text-xs font-clash shrink-0">✕</button>
          </div>
        ))}
        <button onClick={addItem} className="px-3 py-1.5 rounded-lg border border-dashed border-white/20 text-[#fcf2ec]/40 text-xs font-clash hover:border-primary/40 hover:text-primary transition-all">
          + Add {label} Item
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4">
        {renderListEditor('strengths', 'Strengths')}
        {renderListEditor('weaknesses', 'Weaknesses')}
        {renderListEditor('opportunities', 'Opportunities')}
        {renderListEditor('threats', 'Threats')}
      </div>
      <div>
        <label className={labelCls}>Market Inverter Analysis Image (Optional)</label>
        <ImageUploader value={content.marketImage} onChange={val => update('marketImage', val)} folder="blocks" />
      </div>
    </div>
  );
}

// ─── MindMap Block ────────────────────────────────────────────────────────────
export function MindMapBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const branches = content.branches || [];

  const addBranch = () => update('branches', [...branches, { name: '', subtopics: [] }]);
  const removeBranch = (idx) => update('branches', branches.filter((_, i) => i !== idx));
  const updateBranch = (idx, key, val) => update('branches', branches.map((b, i) => i === idx ? { ...b, [key]: val } : b));
  
  return (
    <div className="flex flex-col gap-4">
      <Field label="Central Topic"><input className={inputCls} value={content.topic || ''} onChange={e => update('topic', e.target.value)} placeholder="Central Topic" /></Field>
      {branches.map((b, idx) => (
        <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#fcf2ec]/40 font-clash">Branch {idx + 1}</span>
            <button onClick={() => removeBranch(idx)} className="text-xs text-red-400 font-clash">Remove</button>
          </div>
          <Field label="Branch Name"><input className={inputCls} value={b.name || ''} onChange={e => updateBranch(idx, 'name', e.target.value)} placeholder="Branch Name" /></Field>
          <Field label="Subtopics (comma-separated)">
            <input className={inputCls} value={(b.subtopics || []).join(', ')} onChange={e => updateBranch(idx, 'subtopics', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} placeholder="Subtopic 1, Subtopic 2" />
          </Field>
        </div>
      ))}
      <button onClick={addBranch} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
        + Add Branch
      </button>
    </div>
  );
}

// ─── Benchmark Block ──────────────────────────────────────────────────────────
export function BenchmarkEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const items = content.items || [];

  const addItem = () => update('items', [...items, { image: '', name: '', brand: '', attributes: [] }]);
  const removeItem = (idx) => update('items', items.filter((_, i) => i !== idx));
  const updateItem = (idx, key, val) => update('items', items.map((it, i) => i === idx ? { ...it, [key]: val } : it));

  return (
    <div className="flex flex-col gap-4">
      {items.map((it, idx) => (
        <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#fcf2ec]/40 font-clash">Benchmark {idx + 1}</span>
            <button onClick={() => removeItem(idx)} className="text-xs text-red-400 font-clash">Remove</button>
          </div>
          <ImageUploader label="Image" value={it.image} onChange={val => updateItem(idx, 'image', val)} folder="blocks" />
          <Field label="Name"><input className={inputCls} value={it.name || ''} onChange={e => updateItem(idx, 'name', e.target.value)} placeholder="Product Name" /></Field>
          <Field label="Brand"><input className={inputCls} value={it.brand || ''} onChange={e => updateItem(idx, 'brand', e.target.value)} placeholder="Brand Name" /></Field>
          <Field label="Attributes (one per line)">
            <textarea className={`${inputCls} h-20`} value={(it.attributes || []).join('\n')} onChange={e => updateItem(idx, 'attributes', e.target.value.split('\n').map(s => s.trim()).filter(Boolean))} placeholder="Attribute 1\nAttribute 2" />
          </Field>
        </div>
      ))}
      <button onClick={addItem} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
        + Add Benchmark
      </button>
    </div>
  );
}

// ─── Product Render Block ──────────────────────────────────────────────────────
export function ProductRenderEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const renders = content.renders || [];

  const addRender = () => update('renders', [...renders, { image: '', layout: 'full', caption: '' }]);
  const removeRender = (idx) => update('renders', renders.filter((_, i) => i !== idx));
  const updateRender = (idx, key, val) => update('renders', renders.map((r, i) => i === idx ? { ...r, [key]: val } : r));

  return (
    <div className="flex flex-col gap-3">
      {renders.map((r, idx) => (
        <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#fcf2ec]/40 font-clash">Render {idx + 1}</span>
            <button onClick={() => removeRender(idx)} className="text-xs text-red-400 font-clash">Remove</button>
          </div>
          <ImageUploader label="Image" value={r.image} onChange={val => updateRender(idx, 'image', val)} folder="blocks" />
          <Field label="Layout">
            <select className={inputCls} value={r.layout || 'full'} onChange={e => updateRender(idx, 'layout', e.target.value)}>
              <option value="full">Full Bleed</option>
              <option value="half">Half / Detail</option>
              <option value="grid">Grid Detail</option>
            </select>
          </Field>
          <Field label="Caption"><input className={inputCls} value={r.caption || ''} onChange={e => updateRender(idx, 'caption', e.target.value)} placeholder="Caption" /></Field>
        </div>
      ))}
      <button onClick={addRender} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
        + Add Render
      </button>
    </div>
  );
}

// ─── Gap Analysis Block ───────────────────────────────────────────────────────
export function GapAnalysisEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const consequences = content.consequences || [];
  
  const addConsequence = () => update('consequences', [...consequences, { title: '', description: '' }]);
  const removeConsequence = (idx) => update('consequences', consequences.filter((_, i) => i !== idx));
  const updateConsequence = (idx, key, val) => update('consequences', consequences.map((c, i) => i === idx ? { ...c, [key]: val } : c));

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Heading"><input className={inputCls} value={content.heading || ''} onChange={e => update('heading', e.target.value)} /></Field>
        <Field label="Subheading"><input className={inputCls} value={content.subheading || ''} onChange={e => update('subheading', e.target.value)} /></Field>
      </div>
      
      <Field label="Problem Statement">
        <textarea 
          className={`${inputCls} h-32`} 
          value={content.problemStatement || ''} 
          onChange={e => update('problemStatement', e.target.value)} 
          placeholder="Enter problem statement here..."
        />
      </Field>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
          <Field label="Left Column Title"><input className={inputCls} value={content.leftTitle || ''} onChange={e => update('leftTitle', e.target.value)} /></Field>
          <Field label="Left Items (comma-separated)">
            <textarea className={`${inputCls} h-24`} value={content.leftItemsRaw !== undefined ? content.leftItemsRaw : (content.leftItems || []).join(', ')} onChange={e => onChange({ ...content, leftItemsRaw: e.target.value, leftItems: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} />
          </Field>
        </div>
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
          <Field label="Right Column Title"><input className={inputCls} value={content.rightTitle || ''} onChange={e => update('rightTitle', e.target.value)} /></Field>
          <Field label="Right Items (comma-separated)">
            <textarea className={`${inputCls} h-24`} value={content.rightItemsRaw !== undefined ? content.rightItemsRaw : (content.rightItems || []).join(', ')} onChange={e => onChange({ ...content, rightItemsRaw: e.target.value, rightItems: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} />
          </Field>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
        <Field label="Gap Title"><input className={inputCls} value={content.gapTitle || ''} onChange={e => update('gapTitle', e.target.value)} /></Field>
        <Field label="Gap Description">
          <textarea className={`${inputCls} h-20`} value={content.gapDescription || ''} onChange={e => update('gapDescription', e.target.value)} />
        </Field>
      </div>

      <div>
        <label className={labelCls}>Consequence Cards</label>
        <div className="flex flex-col gap-2 mt-2">
          {consequences.map((c, idx) => (
            <div key={idx} className="flex gap-2">
              <input className={`${inputCls} w-1/3`} value={c.title || ''} onChange={e => updateConsequence(idx, 'title', e.target.value)} placeholder="Title" />
              <textarea className={`${inputCls} h-12 flex-1`} value={c.description || ''} onChange={e => updateConsequence(idx, 'description', e.target.value)} placeholder="Description" />
              <button onClick={() => removeConsequence(idx)} className="text-red-400 text-xs font-clash shrink-0 p-2">✕</button>
            </div>
          ))}
          <button onClick={addConsequence} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all">
            + Add Consequence
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── User Context Block ─────────────────────────────────────────────────────────
export function UserContextEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const inputCls = "w-full bg-background border border-white/10 rounded-lg px-3 py-2 text-[#fcf2ec] text-sm font-hanken focus:border-primary focus:outline-none transition-colors";
  const labelCls = "block text-xs font-clash uppercase tracking-wider text-[#fcf2ec]/40 mb-1.5";

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Heading"><input className={inputCls} value={content.heading || ''} onChange={e => update('heading', e.target.value)} /></Field>
        <Field label="User Type"><input className={inputCls} value={content.userType || ''} onChange={e => update('userType', e.target.value)} /></Field>
      </div>
      <Field label="Intro"><textarea className={`${inputCls} h-16`} value={content.intro || ''} onChange={e => update('intro', e.target.value)} /></Field>

      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
        <h4 className="text-sm font-clash text-white">They Manage Panel</h4>
        <Field label="Panel Title"><input className={inputCls} value={content.managesTitle || ''} onChange={e => update('managesTitle', e.target.value)} /></Field>
        <Field label="Items (one per line)">
          <textarea className={`${inputCls} h-32`} value={(content.managesList || []).join('\n')} onChange={e => update('managesList', e.target.value.split('\n').map(s => s.trim()).filter(Boolean))} />
        </Field>
        <ImageUploader label="Panel Image (Optional)" value={content.managesImage} onChange={val => update('managesImage', val)} folder="blocks" />
      </div>

      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
        <h4 className="text-sm font-clash text-white">Primary Research</h4>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Research Heading"><input className={inputCls} value={content.researchHeading || ''} onChange={e => update('researchHeading', e.target.value)} /></Field>
          <Field label="Research Subheading"><input className={inputCls} value={content.researchSubheading || ''} onChange={e => update('researchSubheading', e.target.value)} /></Field>
        </div>
        <Field label="Investigated Topics (one per line)">
          <textarea className={`${inputCls} h-32`} value={(content.investigations || []).join('\n')} onChange={e => update('investigations', e.target.value.split('\n').map(s => s.trim()).filter(Boolean))} />
        </Field>
      </div>
    </div>
  );
}

// ─── Research Insights Block ──────────────────────────────────────────────────
export function ResearchInsightsEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const insights = content.insights || [];
  
  const addInsight = () => update('insights', [...insights, { number: String(insights.length + 1).padStart(2, '0'), title: '', description: '' }]);
  const removeInsight = (idx) => update('insights', insights.filter((_, i) => i !== idx));
  const updateInsight = (idx, key, val) => update('insights', insights.map((item, i) => i === idx ? { ...item, [key]: val } : item));

  const inputCls = "w-full bg-background border border-white/10 rounded-lg px-3 py-2 text-[#fcf2ec] text-sm font-hanken focus:border-primary focus:outline-none transition-colors";
  const labelCls = "block text-xs font-clash uppercase tracking-wider text-[#fcf2ec]/40 mb-1.5";

  return (
    <div className="flex flex-col gap-6">
      <Field label="Heading"><input className={inputCls} value={content.heading || ''} onChange={e => update('heading', e.target.value)} /></Field>
      <Field label="Intro Statement">
        <textarea className={`${inputCls} h-20`} value={content.intro || ''} onChange={e => update('intro', e.target.value)} placeholder="The biggest problem wasn't knowing the rules..." />
      </Field>

      <div>
        <label className={labelCls}>Insight Cards</label>
        <div className="flex flex-col gap-3 mt-2">
          {insights.map((ins, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#fcf2ec]/40 font-clash">Insight {idx + 1}</span>
                <button onClick={() => removeInsight(idx)} className="text-xs text-red-400 font-clash">Remove</button>
              </div>
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-2">
                  <Field label="Number"><input className={inputCls} value={ins.number || ''} onChange={e => updateInsight(idx, 'number', e.target.value)} placeholder="01" /></Field>
                </div>
                <div className="col-span-10">
                  <Field label="Title"><input className={inputCls} value={ins.title || ''} onChange={e => updateInsight(idx, 'title', e.target.value)} /></Field>
                </div>
              </div>
              <Field label="Description">
                <textarea className={`${inputCls} h-20`} value={ins.description || ''} onChange={e => updateInsight(idx, 'description', e.target.value)} />
              </Field>
            </div>
          ))}
          <button onClick={addInsight} className="px-4 py-2 rounded-xl border border-dashed border-white/20 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all mt-2">
            + Add Insight
          </button>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
        <h4 className="text-sm font-clash text-white">Opportunity Transition</h4>
        <Field label="Prefix (e.g., 'This created an opportunity:')"><input className={inputCls} value={content.opportunityPrefix || ''} onChange={e => update('opportunityPrefix', e.target.value)} /></Field>
        <Field label="Main Text"><input className={inputCls} value={content.opportunityText || ''} onChange={e => update('opportunityText', e.target.value)} /></Field>
      </div>
    </div>
  );
}

// ─── Reframe Problem Block ──────────────────────────────────────────────────
export function ReframeProblemEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const inputCls = "w-full bg-background border border-white/10 rounded-lg px-3 py-2 text-[#fcf2ec] text-sm font-hanken focus:border-primary focus:outline-none transition-colors";
  
  return (
    <div className="flex flex-col gap-6">
      <Field label="Heading"><input className={inputCls} value={content.heading || ''} onChange={e => update('heading', e.target.value)} /></Field>
      
      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
        <h4 className="text-sm font-clash text-white">Persona Statements</h4>
        <Field label="Statement 1 (Identity)">
          <textarea className={`${inputCls} h-16`} value={content.statement1 || ''} onChange={e => update('statement1', e.target.value)} />
        </Field>
        <Field label="Statement 2 (Goal)">
          <textarea className={`${inputCls} h-16`} value={content.statement2 || ''} onChange={e => update('statement2', e.target.value)} />
        </Field>
        <Field label="Statement 3 (Constraint)">
          <textarea className={`${inputCls} h-16`} value={content.statement3 || ''} onChange={e => update('statement3', e.target.value)} />
        </Field>
        <Field label="Statement 4 (Result)">
          <textarea className={`${inputCls} h-20`} value={content.statement4 || ''} onChange={e => update('statement4', e.target.value)} />
        </Field>
      </div>

      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
        <h4 className="text-sm font-clash text-white">Design Challenge</h4>
        <Field label="Challenge Title"><input className={inputCls} value={content.challengeTitle || ''} onChange={e => update('challengeTitle', e.target.value)} /></Field>
        <Field label="Challenge Text">
          <textarea className={`${inputCls} h-24`} value={content.challengeText || ''} onChange={e => update('challengeText', e.target.value)} />
        </Field>
      </div>
    </div>
  );
}

// ─── Solution Capabilities Block ────────────────────────────────────────────────
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
                <textarea className={`${inputCls} h-16`} value={cap.description || ''} onChange={e => updateCapability(idx, 'description', e.target.value)} />
              </Field>
              <Field label="List Items (Optional, one per line)">
                <textarea className={`${inputCls} h-24`} value={(cap.listItems || []).join('\n')} onChange={e => updateCapability(idx, 'listItems', e.target.value.split('\n').map(s => s.trim()).filter(Boolean))} />
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
        <ImageUploader label="Hero VR Image" value={content.heroImage} onChange={val => update('heroImage', val)} folder="blocks" />
        <ImageUploader label="Operational UI Image" value={content.operationalImage} onChange={val => update('operationalImage', val)} folder="blocks" />
        <ImageUploader label="System UI Image" value={content.systemImage} onChange={val => update('systemImage', val)} folder="blocks" />
        <ImageUploader label="Tutorial Mode Image" value={content.tutorialImage} onChange={val => update('tutorialImage', val)} folder="blocks" />
        <ImageUploader label="Evaluation Mode Image" value={content.evaluationImage} onChange={val => update('evaluationImage', val)} folder="blocks" />
      </div>
    </div>
  );
}

// ─── Video Block ──────────────────────────────────────────────────────────────
export function VideoBlockEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const inputCls = "w-full bg-background border border-white/10 rounded-lg px-3 py-2 text-[#fcf2ec] text-sm font-hanken focus:border-primary focus:outline-none transition-colors";

  return (
    <div className="flex flex-col gap-4">
      <ImageUploader label="Video File" value={content.videoUrl} onChange={val => update('videoUrl', val)} folder="blocks" acceptType="video" />
      <ImageUploader label="Poster Image (Optional)" value={content.posterUrl} onChange={val => update('posterUrl', val)} folder="blocks" acceptType="image" />
      <Field label="Caption (Optional)">
        <input className={inputCls} value={content.caption || ''} onChange={e => update('caption', e.target.value)} placeholder="Video caption..." />
      </Field>
      <div className="grid grid-cols-3 gap-4">
        <label className="flex items-center gap-2 text-sm text-[#fcf2ec]/80 cursor-pointer">
          <input type="checkbox" checked={content.autoPlay !== false} onChange={e => update('autoPlay', e.target.checked)} className="accent-primary" />
          Auto Play
        </label>
        <label className="flex items-center gap-2 text-sm text-[#fcf2ec]/80 cursor-pointer">
          <input type="checkbox" checked={content.loop !== false} onChange={e => update('loop', e.target.checked)} className="accent-primary" />
          Loop
        </label>
        <label className="flex items-center gap-2 text-sm text-[#fcf2ec]/80 cursor-pointer">
          <input type="checkbox" checked={content.muted !== false} onChange={e => update('muted', e.target.checked)} className="accent-primary" />
          Muted
        </label>
      </div>
    </div>
  );
}

// ─── Formative Testing Block ──────────────────────────────────────────────────
export function FormativeTestingEditor({ content, onChange }) {
  const update = (key, val) => onChange({ ...content, [key]: val });
  const inputCls = "w-full bg-background border border-white/10 rounded-lg px-3 py-2 text-[#fcf2ec] text-sm font-hanken focus:border-primary focus:outline-none transition-colors resize-none";

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Field label="Section Heading">
          <input className={inputCls} value={content.heading || ''} onChange={e => update('heading', e.target.value)} placeholder="SECTION 13 — TESTING" />
        </Field>
        <Field label="Title">
          <input className={inputCls} value={content.title || ''} onChange={e => update('title', e.target.value)} placeholder="Did it actually work?" />
        </Field>
      </div>
      <Field label="Participant Count / Highlight Text">
        <input className={inputCls} value={content.participantCount || ''} onChange={e => update('participantCount', e.target.value)} placeholder="5 participants tested the simulation." />
      </Field>
      <Field label="Description">
        <textarea className={`${inputCls} h-24`} value={content.description || ''} onChange={e => update('description', e.target.value)} placeholder="This is formative usability testing..." />
      </Field>
      <ImageUploader label="Graphs / Stats Image" value={content.image} onChange={val => update('image', val)} folder="blocks" acceptType="image" />
      <ImageUploader label="Logo Image (e.g. NASA-TLX)" value={content.logoUrl} onChange={val => update('logoUrl', val)} folder="blocks" acceptType="image" />
    </div>
  );
}
