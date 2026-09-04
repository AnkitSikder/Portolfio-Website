import React, { useState, useCallback } from 'react';
import { uploadMedia } from '../../api/cmsApi';
import { Upload, Loader2, X } from 'lucide-react';
import toast from 'react-hot-toast';

/**
 * A reusable image uploader field.
 * Accepts an existing URL and allows replacing it by uploading or typing a URL.
 */
export default function ImageUploader({ value, onChange, label = 'Image', folder = 'images', acceptType = 'image' }) {
  const [uploading, setUploading] = useState(false);
  const [mode, setMode] = useState('upload'); // 'upload' | 'url'

  const handleFileChange = useCallback(async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate
    const isVideo = acceptType === 'video';
    const isAll = acceptType === 'all';
    const validImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
    const validVideoTypes = ['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime'];
    
    let isValid = false;
    if (isAll) {
      isValid = validImageTypes.includes(file.type) || validVideoTypes.includes(file.type);
    } else if (isVideo) {
      isValid = validVideoTypes.includes(file.type);
    } else {
      isValid = validImageTypes.includes(file.type);
    }

    if (!isValid) {
      toast.error(isVideo ? 'Only videos are supported (MP4, WebM, MOV)' : (isAll ? 'Only images and videos are supported' : 'Only images are supported (JPEG, PNG, WebP, GIF, SVG)'));
      return;
    }
    
    // 50MB limit for videos, 10MB for images
    const maxSize = (isVideo || isAll) ? 50 * 1024 * 1024 : 10 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error(`File must be under ${maxSize / (1024 * 1024)}MB`);
      return;
    }

    setUploading(true);
    try {
      const url = await uploadMedia(file, folder);
      onChange(url);
      toast.success('Upload complete!');
    } catch (err) {
      toast.error('Upload failed: ' + err.message);
    } finally {
      setUploading(false);
    }
  }, [onChange, folder]);

  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    const fakeEvent = { target: { files: [file] } };
    handleFileChange(fakeEvent);
  }, [handleFileChange]);

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/50">{label}</label>}

      {/* Preview */}
      {value && (() => {
        const gDriveMatch = value.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
        const gDriveId = gDriveMatch ? gDriveMatch[1] : null;
        
        return (
        <div className="relative w-full h-40 rounded-xl overflow-hidden bg-white/5 border border-white/10 group flex items-center justify-center">
          {gDriveId ? (
            <iframe
              src={`https://drive.google.com/file/d/${gDriveId}/preview`}
              className="w-full h-full border-0"
              allow="autoplay"
              allowFullScreen
              title="Google Drive Preview"
            ></iframe>
          ) : value.match(/\.(mp4|webm|ogg|mov)$/i) || acceptType === 'video' ? (
            <video src={value} className="w-full h-full object-cover" controls muted />
          ) : (
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
          )}
          <button
            onClick={() => onChange('')}
            className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-white hover:bg-red-500/80 transition-all opacity-0 group-hover:opacity-100"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
        );
      })()}

      {/* Tabs */}
      <div className="flex gap-1 mb-1">
        {['upload', 'url'].map(m => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`px-3 py-1 rounded-lg text-xs font-clash transition-all ${mode === m ? 'bg-white/10 text-[#fcf2ec]' : 'text-[#fcf2ec]/30 hover:text-[#fcf2ec]/60'}`}
          >
            {m === 'upload' ? 'Upload File' : 'Paste URL'}
          </button>
        ))}
      </div>

      {mode === 'upload' ? (
        <label
          className="relative flex flex-col items-center justify-center gap-2 border-2 border-dashed border-white/10 rounded-xl p-6 cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-all group"
          onDrop={handleDrop}
          onDragOver={e => e.preventDefault()}
        >
          {uploading ? (
            <Loader2 className="w-6 h-6 text-primary animate-spin" />
          ) : (
            <Upload className="w-6 h-6 text-white/30 group-hover:text-primary transition-colors" />
          )}
          <span className="text-xs text-[#fcf2ec]/40 font-hanken">
            {uploading ? 'Uploading...' : 'Drag & drop or click to upload'}
          </span>
          <input 
            type="file" 
            accept={acceptType === 'video' ? 'video/*' : (acceptType === 'all' ? 'image/*,video/*' : 'image/*')} 
            onChange={handleFileChange} 
            className="absolute inset-0 opacity-0 cursor-pointer" 
            disabled={uploading} 
          />
        </label>
      ) : (
        <input
          type="url"
          value={value || ''}
          onChange={e => onChange(e.target.value)}
          placeholder={acceptType === 'video' ? 'https://example.com/video.mp4' : 'https://example.com/image.jpg'}
          className="admin-input"
        />
      )}
    </div>
  );
}
