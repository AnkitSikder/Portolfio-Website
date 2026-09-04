import React, { useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

export default function VideoBlock({ content, sectionId, isAlternate }) {
  const { videoUrl, posterUrl, autoPlay = true, loop = true, muted = true, caption, heading, navLabel } = content;
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      // Attempt to play if autoPlay is true (muted is usually required for autoPlay)
      videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
    }
  }, [autoPlay]);

  if (!videoUrl) return null;

  const getGoogleDriveId = (url) => {
    if (!url) return null;
    const match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };
  const gDriveId = getGoogleDriveId(videoUrl);
  const videoTitle = heading || navLabel;

  return (
    <section id={sectionId} className={`py-10 md:py-16 lg:py-20 px-5 md:px-12 lg:px-24 ${isAlternate ? 'bg-foreground/5' : 'bg-background'} text-white w-full overflow-hidden`}>
      <div className="max-w-[1200px] mx-auto flex flex-col">
        {videoTitle && (
          <h2 className="text-4xl md:text-5xl font-franchise uppercase text-foreground mb-8 tracking-wider">
            {videoTitle}
          </h2>
        )}
        <div className="rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 relative group shadow-2xl">
        {gDriveId ? (
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={`https://drive.google.com/file/d/${gDriveId}/preview`}
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="autoplay"
              allowFullScreen
              title="Google Drive Video"
            ></iframe>
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
              controls={!autoPlay}
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
          <p className="font-clash text-sm md:text-base text-white/50 tracking-wide">{caption}</p>
        </div>
      )}
      </div>
    </section>
  );
}
