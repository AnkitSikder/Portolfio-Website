import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { BLOCK_TYPES, BLOCK_TYPE_LIST } from './blocks/blockTypes';
import {
  TextBlockEditor,
  HeroBlockEditor,
  ImageBlockEditor,
  ImageGalleryEditor,
  ResearchBlockEditor,
  PersonaBlockEditor,
  QuoteBlockEditor,
  StatisticBlockEditor,
  ComparisonBlockEditor,
  DesignSystemBlockEditor,
  TestingBlockEditor,
  ScreenShowcaseBlockEditor,
  OutcomeBlockEditor,
  OverviewBlockEditor,
  ProductClassificationEditor,
  SWOTEditor,
  MindMapBlockEditor,
  BenchmarkEditor,
  ProductRenderEditor,
  GapAnalysisEditor,
  UserContextEditor,
  ResearchInsightsEditor,
  ReframeProblemEditor,
  SolutionCapabilitiesEditor,
  VRErgonomicsEditor,
  VideoBlockEditor,
  FormativeTestingEditor,
} from './blocks/BlockEditors';
import {
  GripVertical, ChevronDown, ChevronUp, Trash2, Copy, Plus, X
} from 'lucide-react';

// ─── Editor map ──────────────────────────────────────────────────────────────
const EDITORS = {
  Hero: HeroBlockEditor,
  Text: TextBlockEditor,
  Image: ImageBlockEditor,
  ImageGallery: ImageGalleryEditor,
  Research: ResearchBlockEditor,
  Persona: PersonaBlockEditor,
  Quote: QuoteBlockEditor,
  Statistic: StatisticBlockEditor,
  Comparison: ComparisonBlockEditor,
  DesignSystem: DesignSystemBlockEditor,
  Testing: TestingBlockEditor,
  ScreenShowcase: ScreenShowcaseBlockEditor,
  Outcome: OutcomeBlockEditor,
  Overview: OverviewBlockEditor,
  ProductClassification: ProductClassificationEditor,
  SWOT: SWOTEditor,
  MindMap: MindMapBlockEditor,
  Benchmark: BenchmarkEditor,
  ProductRender: ProductRenderEditor,
  GapAnalysis: GapAnalysisEditor,
  UserContext: UserContextEditor,
  ResearchInsights: ResearchInsightsEditor,
  ReframeProblem: ReframeProblemEditor,
  SolutionCapabilities: SolutionCapabilitiesEditor,
  VRErgonomics: VRErgonomicsEditor,
  Video: VideoBlockEditor,
  FormativeTesting: FormativeTestingEditor,
};

// ─── Add Block Picker ─────────────────────────────────────────────────────────
function AddBlockPicker({ onAdd, onClose }) {
  return (
    <div className="border border-white/10 rounded-2xl bg-[#1c1b2a] overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <span className="text-sm font-clash text-[#fcf2ec]/70">Add a block</span>
        <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10 text-[#fcf2ec]/40">
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="p-3 grid grid-cols-2 gap-1.5">
        {BLOCK_TYPE_LIST.map(({ type, label, description, icon }) => (
          <button
            key={type}
            onClick={() => { onAdd(type); onClose(); }}
            className="flex items-start gap-2.5 p-3 rounded-xl text-left hover:bg-white/5 transition-colors group"
          >
            <span className="text-lg leading-none mt-0.5 shrink-0">{icon}</span>
            <div>
              <p className="text-sm font-clash text-[#fcf2ec] leading-tight group-hover:text-primary transition-colors">{label}</p>
              <p className="text-xs text-[#fcf2ec]/30 font-hanken mt-0.5 leading-tight">{description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Sortable Block Item ──────────────────────────────────────────────────────
function SortableBlock({ block, index, total, onUpdate, onDelete, onDuplicate, onMoveUp, onMoveDown }) {
  const [collapsed, setCollapsed] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: block.clientId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 999 : undefined,
  };

  const meta = BLOCK_TYPES[block.type] || {};
  const Editor = EDITORS[block.type];

  return (
    <div ref={setNodeRef} style={style} className="group">
      <div className={`bg-[#171621] border rounded-2xl overflow-hidden transition-all ${isDragging ? 'border-primary/50 shadow-lg shadow-primary/10' : 'border-white/8 hover:border-white/15'}`}>
        {/* Block Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          {/* Drag Handle */}
          <button
            {...attributes}
            {...listeners}
            className="p-1 rounded cursor-grab active:cursor-grabbing text-[#fcf2ec]/20 hover:text-[#fcf2ec]/50 transition-colors shrink-0"
            title="Drag to reorder"
          >
            <GripVertical className="w-4 h-4" />
          </button>

          {/* Type indicator */}
          <span className="text-base leading-none">{meta.icon}</span>
          <span className="text-sm font-clash text-[#fcf2ec]/70 flex-1">{meta.label || block.type}</span>

          {/* Controls */}
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => onMoveUp(index)} disabled={index === 0} className="p-1.5 rounded-lg hover:bg-white/10 text-[#fcf2ec]/40 hover:text-[#fcf2ec] disabled:opacity-20 transition-all" title="Move Up">
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => onMoveDown(index)} disabled={index === total - 1} className="p-1.5 rounded-lg hover:bg-white/10 text-[#fcf2ec]/40 hover:text-[#fcf2ec] disabled:opacity-20 transition-all" title="Move Down">
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => onDuplicate(index)} className="p-1.5 rounded-lg hover:bg-white/10 text-[#fcf2ec]/40 hover:text-[#fcf2ec] transition-all" title="Duplicate">
              <Copy className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => onDelete(index)} className="p-1.5 rounded-lg hover:bg-red-400/10 text-[#fcf2ec]/40 hover:text-red-400 transition-all" title="Delete">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <button onClick={() => setCollapsed(v => !v)} className="p-1.5 rounded-lg hover:bg-white/10 text-[#fcf2ec]/30 transition-colors">
            {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>

        {/* Block Content Editor */}
        {!collapsed && (
          <div className="p-4 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/50">Nav Label Override (Optional)</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-[#fcf2ec] font-hanken placeholder:text-[#fcf2ec]/30 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Custom name for the progress navigation..."
                value={block.content?.navLabel || ''}
                onChange={e => onUpdate(index, { ...block.content, navLabel: e.target.value })}
              />
            </div>
            
            <div className="h-px bg-white/5 w-full" />

            {Editor ? (
              <Editor content={block.content} onChange={newContent => onUpdate(index, newContent)} />
            ) : (
              <p className="text-sm text-[#fcf2ec]/30 font-hanken italic">No editor for block type: {block.type}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main BlockEditor ─────────────────────────────────────────────────────────
export default function BlockEditor({ blocks, onChange }) {
  const [showPicker, setShowPicker] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const addBlock = (type) => {
    const meta = BLOCK_TYPES[type];
    const newBlock = {
      clientId: `block-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      type,
      content: { ...(meta?.defaultContent || {}) },
    };
    onChange([...blocks, newBlock]);
  };

  const updateBlock = (index, newContent) => {
    onChange(blocks.map((b, i) => i === index ? { ...b, content: newContent } : b));
  };

  const deleteBlock = (index) => {
    if (!window.confirm('Delete this block?')) return;
    onChange(blocks.filter((_, i) => i !== index));
  };

  const duplicateBlock = (index) => {
    const block = blocks[index];
    const copy = {
      ...block,
      clientId: `block-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      content: JSON.parse(JSON.stringify(block.content)),
    };
    const newBlocks = [...blocks];
    newBlocks.splice(index + 1, 0, copy);
    onChange(newBlocks);
  };

  const moveUp = (index) => {
    if (index === 0) return;
    onChange(arrayMove(blocks, index, index - 1));
  };

  const moveDown = (index) => {
    if (index === blocks.length - 1) return;
    onChange(arrayMove(blocks, index, index + 1));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = blocks.findIndex(b => b.clientId === active.id);
      const newIndex = blocks.findIndex(b => b.clientId === over.id);
      onChange(arrayMove(blocks, oldIndex, newIndex));
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {blocks.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 border-2 border-dashed border-white/10 rounded-2xl text-center">
          <span className="text-3xl mb-3">📋</span>
          <p className="text-[#fcf2ec]/40 font-clash text-sm">No content blocks yet</p>
          <p className="text-[#fcf2ec]/20 font-hanken text-xs mt-1">Add blocks to build your case study</p>
        </div>
      )}

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={blocks.map(b => b.clientId)} strategy={verticalListSortingStrategy}>
          <div className="flex flex-col gap-3">
            {blocks.map((block, index) => (
              <SortableBlock
                key={block.clientId}
                block={block}
                index={index}
                total={blocks.length}
                onUpdate={updateBlock}
                onDelete={deleteBlock}
                onDuplicate={duplicateBlock}
                onMoveUp={moveUp}
                onMoveDown={moveDown}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {/* Add Block */}
      <div className="relative">
        <button
          onClick={() => setShowPicker(v => !v)}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-white/15 text-[#fcf2ec]/40 text-sm font-clash hover:border-primary/40 hover:text-primary transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Block
        </button>
        {showPicker && (
          <div className="absolute bottom-full mb-2 left-0 right-0 z-50">
            <AddBlockPicker onAdd={addBlock} onClose={() => setShowPicker(false)} />
          </div>
        )}
      </div>
    </div>
  );
}
