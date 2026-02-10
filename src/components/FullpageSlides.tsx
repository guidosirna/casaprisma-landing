import React, { useState, useRef, useEffect, useCallback } from 'react';

interface FullpageSlidesProps {
  children: React.ReactNode[];
  onSlideChange?: (index: number) => void;
}

const FullpageSlides: React.FC<FullpageSlidesProps> = ({ children, onSlideChange }) => {
  const [current, setCurrent] = useState(0);
  const isAnimating = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const total = children.length;

  // Pre-reset scroll of a target slide before navigating to it
  const resetSlideScroll = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const slideWrapper = container.querySelector(`[data-slide="${index}"]`) as HTMLElement | null;
    if (slideWrapper) {
      slideWrapper.scrollTop = 0;
    }
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating.current) return;
      const clamped = Math.max(0, Math.min(total - 1, index));
      if (clamped === current) return;
      // Pre-reset the target slide's scroll BEFORE the transition starts
      resetSlideScroll(clamped);
      isAnimating.current = true;
      setCurrent(clamped);
      onSlideChange?.(clamped);
      setTimeout(() => { isAnimating.current = false; }, 900);
    },
    [current, total, onSlideChange, resetSlideScroll]
  );

  // Lock body scroll on mount, unlock on unmount
  useEffect(() => {
    document.documentElement.classList.add('fullpage-active');
    return () => {
      document.documentElement.classList.remove('fullpage-active');
    };
  }, []);

  // Wheel events
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Block all scroll during slide transition to prevent bounce
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      const target = e.target as HTMLElement;

      // Allow horizontal scroll inside carousels
      if (target.closest('.scrollbar-hide')) return;

      // Allow vertical scroll inside overflow-y-auto containers
      const scrollable = target.closest('.overflow-y-auto') as HTMLElement | null;
      if (scrollable) {
        const { scrollTop, scrollHeight, clientHeight } = scrollable;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 5;
        const atTop = scrollTop <= 2;
        if (e.deltaY > 0 && !atBottom) return;
        if (e.deltaY < 0 && !atTop) return;
      }

      e.preventDefault();
      if (Math.abs(e.deltaY) < 30) return;
      goTo(e.deltaY > 0 ? current + 1 : current - 1);
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [current, goTo]);

  // Touch events
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let touchStartEl: HTMLElement | null = null;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartEl = e.target as HTMLElement;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;

      // Check overflow-y-auto boundaries like wheel handler
      if (touchStartEl) {
        const scrollable = touchStartEl.closest('.overflow-y-auto') as HTMLElement | null;
        if (scrollable) {
          const { scrollTop, scrollHeight, clientHeight } = scrollable;
          const atBottom = scrollTop + clientHeight >= scrollHeight - 5;
          const atTop = scrollTop <= 2;
          if (diff > 0 && !atBottom) return;
          if (diff < 0 && !atTop) return;
        }
      }

      goTo(diff > 0 ? current + 1 : current - 1);
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [current, goTo]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault(); goTo(current + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault(); goTo(current - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, goTo]);

  // Hash navigation on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact-form') goTo(total - 1);
    else if (hash === '#about') goTo(1);
    // Clear hash after navigation so it doesn't interfere
    if (hash) {
      setTimeout(() => {
        history.replaceState(null, '', window.location.pathname);
      }, 100);
    }
  }, []); // only on mount

  // Safety net: also reset after transition completes
  useEffect(() => {
    const timer = setTimeout(() => {
      resetSlideScroll(current);
    }, 850);
    return () => clearTimeout(timer);
  }, [current, resetSlideScroll]);

  // Custom event for programmatic navigation
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (typeof detail?.slide === 'number') {
        goTo(detail.slide);
      }
    };
    window.addEventListener('fullpage-goto', handler);
    return () => window.removeEventListener('fullpage-goto', handler);
  }, [goTo]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-10 overflow-hidden">
      <div
        className="transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          height: `${total * 100}vh`,
          transform: `translateY(-${current * 100}vh)`,
        }}
      >
        {children.map((child, i) => (
          <div key={i} className="h-screen w-full">
            <div
              className={`h-full w-full transition-opacity duration-500 ${
                i === current ? 'opacity-100 overflow-y-auto' : 'opacity-70 overflow-hidden'
              }`}
              data-slide={i}
            >
              {child}
            </div>
          </div>
        ))}
      </div>

      {/* Dot navigation */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-prisma-teal scale-125'
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullpageSlides;
