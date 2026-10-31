import React, { useEffect, useRef, useState } from 'react';

/**
 * A <video> that only starts downloading once it is near the viewport.
 * Pass the video's aspect ratio via `style.aspectRatio` so the box keeps its
 * final size before the file loads (no layout shift).
 */
export default function LazyVideo({ src, ...props }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        io.disconnect();
      }
    }, { rootMargin: '600px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <video ref={ref} src={active ? src : undefined} preload={active ? 'auto' : 'none'} {...props} />;
}
