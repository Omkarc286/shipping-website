import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

const useMedia = (queries, values, defaultValue) => {
  const get = () => values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach(q => matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async urls => {
  await Promise.all(
    urls.map(
      src =>
        new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const Masonry = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false
}) => {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    return items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      // Scale height responsively based on column width and maintain aspect ratio
      // Original ratio: height/width = (child.height/2) / columnWidth
      // New height = columnWidth * (child.height / (2 * 400)) to scale down on small screens
      const baseHeight = Math.max(columnWidth * 0.5, child.height / 3);
      const height = baseHeight;
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const getInitialPosition = item => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return { x: item.x, y: item.y };

      let direction = animateFrom;
      if (animateFrom === 'random') {
        const dirs = ['top', 'bottom', 'left', 'right'];
        direction = dirs[Math.floor(Math.random() * dirs.length)];
      }

      switch (direction) {
        case 'top':
          return { x: item.x, y: -200 };
        case 'bottom':
          return { x: item.x, y: window.innerHeight + 200 };
        case 'left':
          return { x: -200, y: item.y };
        case 'right':
          return { x: window.innerWidth + 200, y: item.y };
        case 'center':
          return {
            x: containerRect.width / 2 - item.w / 2,
            y: containerRect.height / 2 - item.h / 2
          };
        default:
          return { x: item.x, y: item.y + 100 };
      }
    };

    // Create Intersection Observer to trigger animation when section comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && imagesReady && grid.length > 0) {
          setHasAnimated(true);
          
          // Trigger animations for all items
          grid.forEach((item, index) => {
            const selector = `[data-key="${item.id}"]`;
            const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };
            const start = getInitialPosition(item);

            gsap.fromTo(
              selector,
              {
                opacity: 0,
                x: start.x,
                y: start.y,
                width: item.w,
                height: item.h,
                ...(blurToFocus && { filter: 'blur(10px)' })
              },
              {
                opacity: 1,
                ...animProps,
                ...(blurToFocus && { filter: 'blur(0px)' }),
                duration: 0.8,
                ease: 'power3.out',
                delay: index * stagger
              }
            );
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [imagesReady, grid, stagger, blurToFocus, hasAnimated, animateFrom, containerRef]);

  useLayoutEffect(() => {
    if (!imagesReady || !grid.length) return;

    grid.forEach((item) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (hasMounted.current) {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, duration, ease]);

  const handleMouseEnter = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full overflow-hidden"
      style={{
        height: grid.length > 0 ? `${Math.max(...grid.map(item => item.y + item.h))}px` : '400px'
      }}
    >
      {grid.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          className="absolute box-content cursor-pointer"
          style={{ willChange: 'transform, width, height, opacity' }}
          onClick={() => window.open(item.url, '_blank', 'noopener')}
          onMouseEnter={e => handleMouseEnter(item.id, e.currentTarget)}
          onMouseLeave={e => handleMouseLeave(item.id, e.currentTarget)}
        >
          <div
            className="relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)]"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            {colorShiftOnHover && (
              <div 
                className="color-overlay absolute inset-0 rounded-[10px] opacity-0 pointer-events-none" 
                style={{
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.4) 0%, rgba(14, 165, 233, 0.4) 100%)'
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
