import React, { useRef, useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function VideoBlock({ content, sectionId, isAlternate }) {
  const { videoUrl, posterUrl, autoPlay = true, loop = true, muted = true, controls, caption, heading, navLabel } = content;
  const videoRef = useRef(null);
  const [showFacade, setShowFacade] = useState(!!posterUrl);

  const isPdfMode = typeof window !== 'undefined' && window.location.pathname === '/pdf';

  useEffect(() => {
    if (videoRef.current && autoPlay && !isPdfMode) {
      // Attempt to play if autoPlay is true (muted is usually required for autoPlay)
      videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
    }
  }, [autoPlay, muted, isPdfMode]);

  if (!videoUrl) return null;

  const getGoogleDriveId = (url) => {
    if (!url) return null;
    const match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };
  const gDriveId = getGoogleDriveId(videoUrl);
  const videoTitle = heading || navLabel;

  if (isPdfMode) {
    const linkUrl = gDriveId ? `https://drive.google.com/file/d/${gDriveId}/view` : videoUrl;
    return (
      <section id={sectionId} className={`py-10 md:py-16 lg:py-20 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-white w-full overflow-hidden text-center`}>
        {videoTitle && (
          <SectionHeader heading={videoTitle} className="!mb-8 items-center text-center" />
        )}
        <div className="inline-block border border-white/20 p-6 md:p-10 rounded-2xl bg-white/5 shadow-xl max-w-3xl mx-auto">
          <p className="mb-4 font-clash text-lg text-white/80">View the demo video here:</p>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-medium text-lg md:text-xl break-all hover:underline">
            {linkUrl}
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id={sectionId} className={`py-10 md:py-16 lg:py-20 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-white w-full overflow-hidden`}>
      <div className="max-w-[1200px] mx-auto flex flex-col">
        {videoTitle && (
          <SectionHeader heading={videoTitle} className="!mb-8" />
        )}
        <div className="rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 relative group shadow-2xl">
        {gDriveId ? (
          <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
            {showFacade ? (
              <div 
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setShowFacade(false)}
              >
                <img src={posterUrl} alt={videoTitle} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-background shadow-xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src={`https://drive.google.com/file/d/${gDriveId}/preview?autoplay=1`}
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="autoplay"
                allowFullScreen
                title="Google Drive Video"
              ></iframe>
            )}
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              src={videoUrl}
              poster={posterUrl}
              autoPlay={autoPlay}
              loop={loop}
              muted={muted}
              controls={controls !== undefined ? controls : !autoPlay}
              playsInline
              className="w-full h-auto object-cover"
            />
            {/* Play overlay for non-autoplay videos */}
            {!autoPlay && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 group-hover:bg-black/20">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-background shadow-xl backdrop-blur-sm opacity-90">
                  <Play className="w-6 h-6 ml-1" />
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {caption && (
        <div className="mt-6 text-center">
          <p className="font-clash text-sm md:text-[15px] text-white/50 tracking-wide">{caption}</p>
        </div>
      )}
      </div>
    </section>
  );
}
