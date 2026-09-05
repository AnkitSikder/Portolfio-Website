import React, { useEffect, useState, useCallback } from 'react';
import {
  adminGetAllProjects,
  adminPublishProject,
  adminUnpublishProject,
} from '../../api/cmsApi';
import toast from 'react-hot-toast';
import { Eye, EyeOff, Loader2, FolderOpen } from 'lucide-react';

// ── Inline visibility toggle ─────────────────────────────────────────────────
function VisibilityToggle({ project, onRefresh }) {
  const isPublished = project.status === 'Published';
  const [optimistic, setOptimistic] = useState(isPublished);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    const next = !optimistic;
    setOptimistic(next);
    setLoading(true);
    try {
      if (next) {
        await adminPublishProject(project.id);
        toast.success(`"${project.title}" is now live ✓`);
      } else {
        await adminUnpublishProject(project.id);
        toast.success(`"${project.title}" hidden from portfolio`);
      }
      onRefresh();
    } catch (e) {
      setOptimistic(!next);
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      title={optimistic ? 'Click to hide from portfolio' : 'Click to show on portfolio'}
      className="group flex items-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {/* iOS-style toggle track */}
      <span
        className="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-300"
        style={{ background: optimistic ? 'rgba(52,211,153,0.9)' : 'rgba(255,255,255,0.12)' }}
      >
        <span
          className="inline-flex h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-300 items-center justify-center"
          style={{ transform: optimistic ? 'translateX(18px)' : 'translateX(3px)' }}
        >
          {loading && <Loader2 className="w-2.5 h-2.5 animate-spin" style={{ color: optimistic ? '#10b981' : '#888' }} />}
        </span>
      </span>

      {/* Label + icon */}
      <span className="flex items-center gap-1.5">
        {optimistic
          ? <Eye className="w-3.5 h-3.5 text-emerald-400" />
          : <EyeOff className="w-3.5 h-3.5 text-white/30" />}
        <span
          className="text-[11px] font-clash font-semibold uppercase tracking-wider transition-colors duration-200"
          style={{ color: optimistic ? 'rgb(52,211,153)' : 'rgba(252,242,236,0.35)' }}
        >
          {optimistic ? 'Visible' : 'Hidden'}
        </span>
      </span>
    </button>
  );
}

// ── Project card row ──────────────────────────────────────────────────────────
function ProjectRow({ project, onRefresh }) {
  return (
    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
      {/* Thumbnail */}
      <td className="py-4 pl-6 pr-4 w-16">
        <div className="w-12 h-9 rounded-lg overflow-hidden bg-white/5 border border-white/10 shrink-0">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/20 text-sm font-clash font-bold">
              {project.title?.[0] ?? '?'}
            </div>
          )}
        </div>
      </td>

      {/* Title + URL */}
      <td className="py-4 pr-6">
        <div className="flex flex-col gap-0.5">
          <span className="text-[#fcf2ec] font-clash font-medium text-sm leading-tight">{project.title}</span>
          <span className="text-[#fcf2ec]/30 font-hanken text-xs">/work/{project.slug}</span>
        </div>
      </td>

      {/* Category */}
      <td className="py-4 pr-6 text-[#fcf2ec]/40 font-hanken text-sm hidden md:table-cell">
        {project.category || '—'}
      </td>

      {/* Visibility toggle */}
      <td className="py-4 pr-6">
        <VisibilityToggle project={project} onRefresh={onRefresh} />
      </td>

      {/* Updated */}
      <td className="py-4 pr-6 text-[#fcf2ec]/25 font-hanken text-xs whitespace-nowrap hidden lg:table-cell">
        {project.updated_at
          ? new Date(project.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          : '—'}
      </td>
    </tr>
  );
}

// ── Dashboard page ────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const published = projects.filter(p => p.status === 'Published').length;

  return (
    <div className="p-8 max-w-4xl mx-auto" style={{ cursor: 'default' }}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-clash font-semibold text-[#fcf2ec]">Projects</h1>
        <p className="text-sm text-[#fcf2ec]/40 font-hanken mt-1">
          {projects.length} total · {published} visible on portfolio
        </p>
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
        ) : projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <FolderOpen className="w-6 h-6 text-white/20" />
            </div>
            <p className="text-[#fcf2ec]/50 font-clash font-medium">No projects found</p>
            <p className="text-[#fcf2ec]/25 font-hanken text-sm mt-1">
              Projects are seeded via the database — check your Supabase dashboard.
            </p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left py-3 pl-6 pr-4 w-16" />
                <th className="text-left py-3 pr-6 text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/25">Project</th>
                <th className="text-left py-3 pr-6 text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/25 hidden md:table-cell">Category</th>
                <th className="text-left py-3 pr-6 text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/25">Visibility</th>
                <th className="text-left py-3 pr-6 text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/25 hidden lg:table-cell">Updated</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <ProjectRow key={project.id} project={project} onRefresh={load} />
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Info note */}
      <p className="text-center text-xs text-[#fcf2ec]/20 font-hanken mt-6">
        Toggle visibility to show or hide a project from your live portfolio. Project pages are hardcoded.
      </p>
    </div>
  );
}
