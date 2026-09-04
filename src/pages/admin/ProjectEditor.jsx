import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import {
  adminGetProjectById,
  adminCreateProject,
  adminUpdateProject,
  adminPublishProject,
  adminUnpublishProject,
  adminSaveBlocks,
  generateSlug,
  isSlugTaken,
} from '../../api/cmsApi';
import BlockEditor from '../../components/admin/BlockEditor';
import ImageUploader from '../../components/admin/ImageUploader';
import toast from 'react-hot-toast';
import { ArrowLeft, Eye, Save, Globe, EyeOff, ExternalLink, AlertCircle } from 'lucide-react';

const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#fcf2ec] text-sm font-hanken placeholder:text-white/20 focus:outline-none focus:border-primary/40 transition-all resize-none";
const labelCls = "block text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/50 mb-1.5";

function Field({ label, children, hint }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className={labelCls}>{label}</label>}
      {children}
      {hint && <p className="text-xs text-[#fcf2ec]/25 font-hanken">{hint}</p>}
    </div>
  );
}

function SaveIndicator({ state }) {
  if (state === 'saving') return <span className="text-xs text-[#fcf2ec]/40 font-clash animate-pulse">Saving...</span>;
  if (state === 'saved') return <span className="text-xs text-emerald-400 font-clash">Saved ✓</span>;
  if (state === 'error') return <span className="text-xs text-red-400 font-clash">Save failed</span>;
  return null;
}

export default function ProjectEditor() {
  const { id } = useParams();
  const isNew = id === 'new' || !id;
  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: '',
    slug: '',
    short_description: '',
    thumbnail: '',
    hero_image: '',
    logo_icon: '',
    category: '',
    featured: false,
    display_order: 0,
    status: 'Draft',
  });
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(!isNew);
  const [saveState, setSaveState] = useState(null);
  const [publishing, setPublishing] = useState(false);
  const [slugManual, setSlugManual] = useState(false);
  const [slugError, setSlugError] = useState('');
  const autosaveTimer = useRef(null);
  const projectIdRef = useRef(isNew ? null : id);

  // Load existing project
  useEffect(() => {
    if (isNew) return;
    adminGetProjectById(id)
      .then(data => {
        const { blocks: bks, ...meta } = data;
        setProject(meta);
        // Attach clientIds for DnD
        setBlocks((bks || []).map(b => ({
          ...b,
          clientId: b.id || `block-${Math.random().toString(36).slice(2)}`,
        })));
        setLoading(false);
      })
      .catch(e => {
        toast.error('Failed to load project: ' + e.message);
        setLoading(false);
      });
  }, [id, isNew]);

  // Auto-generate slug from title (unless manually set)
  useEffect(() => {
    if (!slugManual && isNew) {
      setProject(p => ({ ...p, slug: generateSlug(p.title) }));
    }
  }, [project.title, slugManual, isNew]);

  // Autosave — only for existing projects
  const doSave = useCallback(async (currentProject, currentBlocks, silent = false) => {
    if (!projectIdRef.current) return; // no id yet (new project not yet saved)
    if (!silent) setSaveState('saving');
    try {
      await adminUpdateProject(projectIdRef.current, {
        title: currentProject.title,
        slug: currentProject.slug,
        short_description: currentProject.short_description,
        thumbnail: currentProject.thumbnail,
        hero_image: currentProject.hero_image,
        logo_icon: currentProject.logo_icon,
        category: currentProject.category,
        featured: currentProject.featured,
        display_order: currentProject.display_order,
      });
      await adminSaveBlocks(projectIdRef.current, currentBlocks);
      setSaveState('saved');
      setTimeout(() => setSaveState(null), 2000);
    } catch (e) {
      setSaveState('error');
      if (!silent) toast.error('Autosave failed: ' + e.message);
    }
  }, []);

  // Debounced autosave
  const scheduleAutosave = useCallback((proj, blks) => {
    clearTimeout(autosaveTimer.current);
    autosaveTimer.current = setTimeout(() => doSave(proj, blks, true), 1500);
  }, [doSave]);

  // On blocks change — schedule autosave
  useEffect(() => {
    if (!isNew && projectIdRef.current) scheduleAutosave(project, blocks);
  }, [blocks, project]);

  const validateSlug = async (slug) => {
    if (!slug) { setSlugError('Slug is required'); return false; }
    if (!/^[a-z0-9-]+$/.test(slug)) { setSlugError('Only lowercase letters, numbers, and hyphens'); return false; }
    const taken = await isSlugTaken(slug, projectIdRef.current);
    if (taken) { setSlugError('This slug is already taken'); return false; }
    setSlugError('');
    return true;
  };

  const handleSaveDraft = async () => {
    if (!project.title.trim()) { toast.error('Title is required'); return; }
    const slugOk = await validateSlug(project.slug);
    if (!slugOk) { toast.error(slugError || 'Invalid slug'); return; }

    setSaveState('saving');
    try {
      let savedProject;
      if (isNew) {
        savedProject = await adminCreateProject({
          title: project.title,
          slug: project.slug,
          short_description: project.short_description,
          thumbnail: project.thumbnail,
          hero_image: project.hero_image,
          logo_icon: project.logo_icon,
          category: project.category,
          featured: project.featured,
          display_order: project.display_order,
        });
        projectIdRef.current = savedProject.id;
        setProject(p => ({ ...p, id: savedProject.id, status: 'Draft' }));
        navigate(`/admin/projects/${savedProject.id}/edit`, { replace: true });
      } else {
        savedProject = await adminUpdateProject(projectIdRef.current, project);
      }
      await adminSaveBlocks(projectIdRef.current, blocks);
      setSaveState('saved');
      toast.success('Draft saved!');
      setTimeout(() => setSaveState(null), 2000);
    } catch (e) {
      setSaveState('error');
      toast.error('Save failed: ' + e.message);
    }
  };

  const handlePublish = async () => {
    if (!project.title.trim()) { toast.error('Title is required'); return; }
    if (!project.slug.trim()) { toast.error('Slug is required'); return; }
    if (!project.thumbnail) { toast.error('Thumbnail is required before publishing'); return; }
    if (!project.short_description.trim()) { toast.error('Short description is required'); return; }
    if (blocks.length === 0) { toast.error('Add at least one content block'); return; }

    const slugOk = await validateSlug(project.slug);
    if (!slugOk) { toast.error(slugError || 'Invalid slug'); return; }

    setPublishing(true);
    try {
      // First save everything
      let pid = projectIdRef.current;
      if (!pid) {
        const created = await adminCreateProject(project);
        pid = created.id;
        projectIdRef.current = pid;
        navigate(`/admin/projects/${pid}/edit`, { replace: true });
      } else {
        await adminUpdateProject(pid, project);
      }
      await adminSaveBlocks(pid, blocks);
      await adminPublishProject(pid);
      setProject(p => ({ ...p, status: 'Published' }));
      toast.success('Project published! 🎉');
    } catch (e) {
      toast.error('Publish failed: ' + e.message);
    } finally {
      setPublishing(false);
    }
  };

  const handleUnpublish = async () => {
    try {
      await adminUnpublishProject(projectIdRef.current);
      setProject(p => ({ ...p, status: 'Draft' }));
      toast.success('Project unpublished');
    } catch (e) {
      toast.error(e.message);
    }
  };

  const updateField = (key, val) => {
    setProject(p => {
      const updated = { ...p, [key]: val };
      if (!isNew && projectIdRef.current) scheduleAutosave(updated, blocks);
      return updated;
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  const isPublished = project.status === 'Published';

  return (
    <div className="min-h-screen bg-[#111019]" style={{ cursor: 'default' }}>
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-[#0d0c14]/90 backdrop-blur-xl border-b border-white/5 px-6 py-3 flex items-center gap-4">
        <Link to="/admin/projects" className="flex items-center gap-2 text-[#fcf2ec]/40 hover:text-[#fcf2ec] transition-colors text-sm font-clash">
          <ArrowLeft className="w-4 h-4" />
          Projects
        </Link>

        <div className="flex-1 flex items-center gap-3 min-w-0">
          <span className="text-[#fcf2ec]/20">·</span>
          <h1 className="text-sm font-clash text-[#fcf2ec] truncate">{project.title || 'Untitled Project'}</h1>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-clash font-semibold uppercase tracking-wider border ${
            isPublished ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' :
            'bg-amber-400/10 text-amber-400 border-amber-400/20'
          }`}>
            {project.status || 'Draft'}
          </span>
          <SaveIndicator state={saveState} />
        </div>

        <div className="flex items-center gap-2">
          {isPublished && (
            <a
              href={`/work/${project.slug}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-clash text-[#fcf2ec]/50 hover:text-[#fcf2ec] hover:bg-white/5 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Live
            </a>
          )}
          <button onClick={handleSaveDraft} className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-clash bg-white/8 text-[#fcf2ec] hover:bg-white/12 transition-all border border-white/10">
            <Save className="w-3.5 h-3.5" />
            Save Draft
          </button>
          {isPublished ? (
            <button onClick={handleUnpublish} className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-clash bg-white/8 text-amber-400 hover:bg-amber-400/10 transition-all border border-amber-400/20">
              <EyeOff className="w-3.5 h-3.5" />
              Unpublish
            </button>
          ) : (
            <button onClick={handlePublish} disabled={publishing} className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-clash bg-primary text-white hover:bg-primary/90 disabled:opacity-50 transition-all">
              <Globe className="w-3.5 h-3.5" />
              {publishing ? 'Publishing...' : 'Publish'}
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-10">

        {/* Project Information */}
        <section>
          <h2 className="text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/30 mb-6">Project Information</h2>
          <div className="bg-[#171621] border border-white/8 rounded-2xl p-6 flex flex-col gap-5">

            <Field label="Title">
              <input
                className={inputCls}
                value={project.title}
                onChange={e => updateField('title', e.target.value)}
                placeholder="Project title..."
              />
            </Field>

            <Field label="Slug" hint={slugError ? undefined : `Public URL: /work/${project.slug || 'your-slug'}`}>
              <div className="flex gap-2">
                <span className="flex items-center px-3 bg-white/5 border border-white/10 rounded-xl text-[#fcf2ec]/30 text-sm font-hanken border-r-0 rounded-r-none border-r-transparent">
                  /work/
                </span>
                <input
                  className={`${inputCls} rounded-l-none border-l-0 flex-1 ${slugError ? 'border-red-400/50' : ''}`}
                  value={project.slug}
                  onChange={e => { setSlugManual(true); updateField('slug', e.target.value); setSlugError(''); }}
                  placeholder="project-slug"
                />
              </div>
              {slugError && (
                <div className="flex items-center gap-1.5 text-red-400 text-xs font-hanken">
                  <AlertCircle className="w-3.5 h-3.5" /> {slugError}
                </div>
              )}
              {!slugError && project.slug && (
                <p className="text-xs text-[#fcf2ec]/25 font-hanken">Public URL: /work/{project.slug}</p>
              )}
            </Field>

            <Field label="Short Description" hint="Shown on homepage project cards">
              <textarea
                className={`${inputCls} h-20`}
                value={project.short_description}
                onChange={e => updateField('short_description', e.target.value)}
                placeholder="Brief project description..."
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Category">
                <input className={inputCls} value={project.category} onChange={e => updateField('category', e.target.value)} placeholder="e.g. UX/UI Design" />
              </Field>
              <Field label="Display Order" hint="Lower = appears first">
                <input type="number" className={inputCls} value={project.display_order} onChange={e => updateField('display_order', parseInt(e.target.value) || 0)} />
              </Field>
            </div>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <div
                  onClick={() => updateField('featured', !project.featured)}
                  className={`w-10 h-6 rounded-full transition-all duration-200 relative ${project.featured ? 'bg-primary' : 'bg-white/10'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-200 ${project.featured ? 'left-5' : 'left-1'}`} />
                </div>
                <span className="text-sm font-clash text-[#fcf2ec]/70">Featured Project</span>
              </label>
              <p className="text-xs text-[#fcf2ec]/25 font-hanken">Featured projects appear prominently on the homepage</p>
            </div>
          </div>
        </section>

        {/* Media */}
        <section>
          <h2 className="text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/30 mb-6">Media</h2>
          <div className="bg-[#171621] border border-white/8 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ImageUploader
              label="Thumbnail (Homepage Card)"
              value={project.thumbnail}
              onChange={val => updateField('thumbnail', val)}
              folder="thumbnails"
            />
            <ImageUploader
              label="Hero Image (Case Study)"
              value={project.hero_image}
              onChange={val => updateField('hero_image', val)}
              folder="heroes"
            />
            <ImageUploader
              label="Logo Icon (Homepage Card)"
              value={project.logo_icon}
              onChange={val => updateField('logo_icon', val)}
              folder="logos"
            />
          </div>
        </section>

        {/* Case Study Content */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/30">Case Study Content</h2>
            <span className="text-xs text-[#fcf2ec]/25 font-hanken">{blocks.length} block{blocks.length !== 1 ? 's' : ''}</span>
          </div>
          <BlockEditor blocks={blocks} onChange={setBlocks} />
        </section>

        <div className="pb-16" />
      </div>
    </div>
  );
}
