import React, { useEffect, useState, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import {
  adminGetAllProjects,
  adminDeleteProject,
  adminPublishProject,
  adminUnpublishProject,
  adminArchiveProject,
  adminDuplicateProject,
} from '../../api/cmsApi';
import toast from 'react-hot-toast';
import {
  Plus, Search, MoreVertical, Eye, EyeOff, Copy, Trash2,
  Archive, RotateCcw, ExternalLink, Star, StarOff, FolderOpen, Loader2
} from 'lucide-react';

// ── Inline publish/unpublish toggle ─────────────────────────────────────────
function VisibilityToggle({ project, onRefresh }) {
  const isPublished = project.status === 'Published';
  const [optimistic, setOptimistic] = useState(isPublished);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    const next = !optimistic;
    setOptimistic(next);     // instant visual feedback
    setLoading(true);
    try {
      if (next) {
        await adminPublishProject(project.id);
        toast.success('Project is now live ✓');
      } else {
        await adminUnpublishProject(project.id);
        toast.success('Project hidden from portfolio');
      }
      onRefresh();
    } catch (e) {
      setOptimistic(!next); // revert on error
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading || project.status === 'Archived'}
      title={project.status === 'Archived' ? 'Restore from archive first' : optimistic ? 'Click to hide' : 'Click to publish'}
      className="group flex items-center gap-2.5 disabled:opacity-40 disabled:cursor-not-allowed"
      style={{ cursor: project.status === 'Archived' ? 'not-allowed' : 'pointer' }}
    >
      {/* iOS-style pill track */}
      <span
        className="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-300 ease-in-out"
        style={{
          background: optimistic
            ? 'rgba(52,211,153,0.9)'   // emerald when published
            : 'rgba(255,255,255,0.12)', // muted when draft
        }}
      >
        {/* Thumb */}
        <span
          className="inline-block h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out flex items-center justify-center"
          style={{ transform: optimistic ? 'translateX(18px)' : 'translateX(3px)' }}
        >
          {loading && (
            <Loader2
              className="w-2.5 h-2.5 animate-spin"
              style={{ color: optimistic ? '#10b981' : '#888' }}
            />
          )}
        </span>
      </span>

      {/* Label */}
      <span
        className="text-[11px] font-clash font-semibold uppercase tracking-wider transition-colors duration-200"
        style={{ color: optimistic ? 'rgb(52,211,153)' : 'rgba(252,242,236,0.35)' }}
      >
        {project.status === 'Archived' ? 'Archived' : optimistic ? 'Live' : 'Hidden'}
      </span>
    </button>
  );
}

const STATUS_COLORS = {
  Published: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  Draft:     'bg-amber-400/10 text-amber-400 border-amber-400/20',
  Archived:  'bg-white/5 text-white/30 border-white/10',
};

function StatusBadge({ status }) {
  return (
    <span className={`px-2.5 py-1 rounded-full text-[11px] font-clash font-semibold uppercase tracking-wider border ${STATUS_COLORS[status] || STATUS_COLORS.Draft}`}>
      {status}
    </span>
  );
}

function ProjectRow({ project, onRefresh }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, right: 0 });
  const [deleting, setDeleting] = useState(false);
  const triggerRef = useRef(null);

  const openMenu = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setMenuPos({
        top: rect.bottom + window.scrollY + 4,
        right: window.innerWidth - rect.right,
      });
    }
    setMenuOpen(true);
  };

  const handleDelete = async () => {
    if (!window.confirm(`Delete "${project.title}"? This cannot be undone.`)) return;
    setDeleting(true);
    try {
      await adminDeleteProject(project.id);
      toast.success('Project deleted');
      onRefresh();
    } catch (e) {
      toast.error('Delete failed: ' + e.message);
    } finally {
      setDeleting(false);
      setMenuOpen(false);
    }
  };

  const handleDuplicate = async () => {
    const t = toast.loading('Duplicating project...');
    try {
      await adminDuplicateProject(project.id);
      toast.dismiss(t);
      toast.success('Project duplicated!');
      onRefresh();
    } catch (e) {
      toast.dismiss(t);
      toast.error('Duplicate failed: ' + e.message);
    }
    setMenuOpen(false);
  };

  const handleStatusChange = async (action) => {
    try {
      if (action === 'publish') await adminPublishProject(project.id);
      else if (action === 'unpublish') await adminUnpublishProject(project.id);
      else if (action === 'archive') await adminArchiveProject(project.id);
      toast.success('Status updated');
      onRefresh();
    } catch (e) {
      toast.error(e.message);
    }
    setMenuOpen(false);
  };

  return (
    <tr className="border-b border-white/5 hover:bg-white/3 transition-colors group">
      {/* Thumbnail */}
      <td className="py-3 pl-6 pr-4 w-16">
        <div className="w-12 h-9 rounded-lg overflow-hidden bg-white/5 border border-white/10 shrink-0">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/20 text-xs font-clash">
              {project.title?.[0] ?? '?'}
            </div>
          )}
        </div>
      </td>

      {/* Title + Slug */}
      <td className="py-3 pr-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-[#fcf2ec] font-clash font-medium text-sm leading-tight">{project.title}</span>
          <span className="text-[#fcf2ec]/30 font-hanken text-xs">/work/{project.slug}</span>
        </div>
      </td>

      {/* Category */}
      <td className="py-3 pr-4 text-[#fcf2ec]/50 font-hanken text-sm">
        {project.category || '—'}
      </td>

      {/* Featured */}
      <td className="py-3 pr-4">
        {project.featured
          ? <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
          : <StarOff className="w-4 h-4 text-white/15" />}
      </td>

      {/* Visibility Toggle */}
      <td className="py-3 pr-4">
        <VisibilityToggle project={project} onRefresh={onRefresh} />
      </td>

      {/* Updated */}
      <td className="py-3 pr-4 text-[#fcf2ec]/30 font-hanken text-xs whitespace-nowrap">
        {new Date(project.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      </td>

      {/* Actions */}
      <td className="py-3 pr-6">
        <div className="flex items-center gap-2 justify-end relative">
          <Link
            to={`/admin/projects/${project.id}/edit`}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#fcf2ec]/60 hover:text-[#fcf2ec] text-xs font-clash transition-all"
          >
            Edit
          </Link>

          <div className="relative">
            <button
              ref={triggerRef}
              onClick={openMenu}
              className="p-1.5 rounded-lg hover:bg-white/10 text-[#fcf2ec]/40 hover:text-[#fcf2ec] transition-all"
            >
              <MoreVertical className="w-4 h-4" />
            </button>

            {/* Portal menu — renders into body, never clipped by overflow-hidden */}
            {menuOpen && ReactDOM.createPortal(
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-[9998]"
                  onClick={() => setMenuOpen(false)}
                />
                {/* Menu panel */}
                <div
                  className="fixed z-[9999] w-52 bg-[#1c1b2a] border border-white/10 rounded-xl shadow-2xl py-1.5 overflow-hidden"
                  style={{ top: menuPos.top, right: menuPos.right }}
                >
                  {project.status !== 'Published' && (
                    <button onClick={() => handleStatusChange('publish')} className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm font-hanken text-emerald-400 hover:bg-emerald-400/10 transition-colors">
                      <Eye className="w-4 h-4" /> Publish
                    </button>
                  )}
                  {project.status === 'Published' && (
                    <button onClick={() => handleStatusChange('unpublish')} className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm font-hanken text-amber-400 hover:bg-amber-400/10 transition-colors">
                      <EyeOff className="w-4 h-4" /> Unpublish
                    </button>
                  )}
                  {project.status !== 'Archived' && (
                    <button onClick={() => handleStatusChange('archive')} className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm font-hanken text-[#fcf2ec]/50 hover:bg-white/5 transition-colors">
                      <Archive className="w-4 h-4" /> Archive
                    </button>
                  )}
                  {project.status === 'Archived' && (
                    <button onClick={() => handleStatusChange('unpublish')} className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm font-hanken text-[#fcf2ec]/50 hover:bg-white/5 transition-colors">
                      <RotateCcw className="w-4 h-4" /> Restore to Draft
                    </button>
                  )}
                  {project.status === 'Published' && (
                    <a href={`/work/${project.slug}`} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm font-hanken text-[#fcf2ec]/50 hover:bg-white/5 transition-colors">
                      <ExternalLink className="w-4 h-4" /> View Live
                    </a>
                  )}
                  <div className="h-px bg-white/5 mx-2 my-1" />
                  <button onClick={handleDuplicate} className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm font-hanken text-[#fcf2ec]/50 hover:bg-white/5 transition-colors">
                    <Copy className="w-4 h-4" /> Duplicate
                  </button>
                  <button onClick={handleDelete} disabled={deleting} className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm font-hanken text-red-400 hover:bg-red-400/10 transition-colors disabled:opacity-40">
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </>,
              document.body
            )}
          </div>
        </div>
      </td>
    </tr>
  );
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await adminGetAllProjects();
      setProjects(data);
    } catch (e) {
      toast.error('Could not load projects: ' + e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const handleCreate = async () => {
    navigate('/admin/projects/new');
  };

  const filtered = projects.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      (p.slug || '').toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'All' || p.status === filter;
    return matchSearch && matchFilter;
  });

  const counts = {
    All: projects.length,
    Published: projects.filter(p => p.status === 'Published').length,
    Draft: projects.filter(p => p.status === 'Draft').length,
    Archived: projects.filter(p => p.status === 'Archived').length,
  };

  return (
    <div className="p-8 max-w-7xl mx-auto" style={{ cursor: 'default' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-clash font-semibold text-[#fcf2ec]">Projects</h1>
          <p className="text-sm text-[#fcf2ec]/40 font-hanken mt-1">{counts.All} total · {counts.Published} published</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleCreate}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-clash font-medium hover:bg-primary/90 transition-all"
          >
            <Plus className="w-4 h-4" />
            New Project
          </button>
        </div>
      </div>

      {/* Filters + Search */}
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-hanken text-[#fcf2ec] placeholder:text-white/25 focus:outline-none focus:border-primary/40 w-64 transition-all"
          />
        </div>

        <div className="flex gap-1.5">
          {['All', 'Published', 'Draft', 'Archived'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-xs font-clash font-medium transition-all ${
                filter === f
                  ? 'bg-primary/15 text-primary border border-primary/30'
                  : 'text-[#fcf2ec]/40 hover:text-[#fcf2ec] hover:bg-white/5'
              }`}
            >
              {f} {counts[f] !== undefined ? `(${counts[f]})` : ''}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#171621] border border-white/8 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-3">
              <div className="w-7 h-7 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              <span className="text-sm text-[#fcf2ec]/30 font-clash">Loading projects...</span>
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <FolderOpen className="w-6 h-6 text-white/20" />
            </div>
            <p className="text-[#fcf2ec]/50 font-clash font-medium">
              {search ? 'No projects found' : 'Your portfolio is empty'}
            </p>
            <p className="text-[#fcf2ec]/25 font-hanken text-sm mt-1">
              {search ? 'Try a different search term' : 'Create your first project to get started'}
            </p>
            {!search && (
              <button onClick={handleCreate} className="mt-6 flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-clash font-medium hover:bg-primary/90 transition-all">
                <Plus className="w-4 h-4" /> Create First Project
              </button>
            )}
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left py-3 pl-6 pr-4 text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/25 w-16"></th>
                <th className="text-left py-3 pr-4 text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/25">Project</th>
                <th className="text-left py-3 pr-4 text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/25">Category</th>
                <th className="text-left py-3 pr-4 text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/25">Featured</th>
                <th className="text-left py-3 pr-4 text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/25">Visibility</th>
                <th className="text-left py-3 pr-4 text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/25">Updated</th>
                <th className="py-3 pr-6"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(project => (
                <ProjectRow key={project.id} project={project} onRefresh={load} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}


