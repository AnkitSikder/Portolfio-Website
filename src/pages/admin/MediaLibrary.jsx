import React, { useEffect, useState, useCallback } from 'react';
import { listMedia, uploadMedia, deleteMedia } from '../../api/cmsApi';
import toast from 'react-hot-toast';
import { Upload, Trash2, Copy, Loader2, Image as ImageIcon } from 'lucide-react';

const FOLDERS = ['', 'images', 'thumbnails', 'heroes', 'blocks', 'screens', 'personas'];

export default function MediaLibrary() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [folder, setFolder] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const files = await listMedia(folder);
      setMedia(files);
    } catch (e) {
      toast.error('Could not load media: ' + e.message);
    } finally {
      setLoading(false);
    }
  }, [folder]);

  useEffect(() => { load(); }, [load]);

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setUploading(true);
    try {
      for (const file of files) {
        await uploadMedia(file, folder || 'images');
      }
      toast.success(`${files.length} file(s) uploaded!`);
      load();
    } catch (err) {
      toast.error('Upload failed: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`Delete "${item.name}"?`)) return;
    try {
      const path = folder ? `${folder}/${item.name}` : item.name;
      await deleteMedia(path);
      toast.success('Deleted');
      load();
    } catch (e) {
      toast.error(e.message);
    }
  };

  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url);
    toast.success('URL copied!');
  };

  return (
    <div className="p-8 max-w-7xl mx-auto" style={{ cursor: 'default' }}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-clash font-semibold text-[#fcf2ec]">Media Library</h1>
          <p className="text-sm text-[#fcf2ec]/40 font-hanken mt-1">{media.length} files in this folder</p>
        </div>

        <label className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-clash cursor-pointer transition-all ${uploading ? 'bg-primary/50 text-white/50' : 'bg-primary text-white hover:bg-primary/90'}`}>
          {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
          {uploading ? 'Uploading...' : 'Upload Files'}
          <input type="file" multiple accept="image/*,video/*" onChange={handleUpload} className="hidden" disabled={uploading} />
        </label>
      </div>

      {/* Folder Tabs */}
      <div className="flex gap-1.5 flex-wrap mb-6">
        {FOLDERS.map(f => (
          <button
            key={f}
            onClick={() => setFolder(f)}
            className={`px-4 py-2 rounded-lg text-xs font-clash transition-all ${folder === f ? 'bg-primary/15 text-primary border border-primary/30' : 'text-[#fcf2ec]/40 hover:text-[#fcf2ec] hover:bg-white/5'}`}
          >
            {f || 'Root'}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-32">
          <div className="w-7 h-7 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      ) : media.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 border-2 border-dashed border-white/10 rounded-2xl">
          <ImageIcon className="w-10 h-10 text-white/20 mb-3" />
          <p className="text-[#fcf2ec]/40 font-clash text-sm">No files in this folder</p>
          <p className="text-[#fcf2ec]/20 font-hanken text-xs mt-1">Upload files to see them here</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {media.map((item) => (
            <div key={item.name} className="group relative bg-[#171621] border border-white/8 rounded-xl overflow-hidden hover:border-white/20 transition-all">
              {/* Preview */}
              <div className="aspect-square bg-white/5 overflow-hidden">
                {item.metadata?.mimetype?.startsWith('image/') || item.url?.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i) ? (
                  <img src={item.url} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/20">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-2.5">
                <p className="text-xs font-hanken text-[#fcf2ec]/60 truncate" title={item.name}>{item.name}</p>
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  onClick={() => handleCopyUrl(item.url)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                  title="Copy URL"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(item)}
                  className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-300 transition-all"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
