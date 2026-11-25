/**
 * Utility to reliably and immediately scroll to the top of the viewport
 * across all mobile browsers, desktop browsers, iframes, and Chrome extension mobile simulators.
 */
export const forceScrollToTop = () => {
  if (typeof window === 'undefined') return;

  const docEl = typeof document !== 'undefined' ? document.documentElement : null;
  const body = typeof document !== 'undefined' ? document.body : null;
  const root = typeof document !== 'undefined' ? document.getElementById('root') : null;

  // Temporarily disable smooth scrolling to prevent browser animation cancellation during DOM changes
  if (docEl) {
    docEl.style.scrollBehavior = 'auto';
  }
  if (body) {
    body.style.scrollBehavior = 'auto';
  }

  const applyScroll = () => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    } catch {
      window.scrollTo(0, 0);
    }
    if (docEl) {
      docEl.scrollTop = 0;
      docEl.scrollLeft = 0;
    }
    if (body) {
      body.scrollTop = 0;
      body.scrollLeft = 0;
    }
    if (root) {
      root.scrollTop = 0;
      root.scrollLeft = 0;
    }
  };

  // 1. Immediate pass
  applyScroll();

  // 2. Next animation frame pass
  requestAnimationFrame(() => {
    applyScroll();
  });

  // 3. Post-render ticks to guarantee scroll after React unmounts/mounts DOM elements
  setTimeout(() => {
    applyScroll();
  }, 30);

  setTimeout(() => {
    applyScroll();
    // Restore CSS smooth scrolling for standard in-page user interactions
    if (docEl) docEl.style.scrollBehavior = '';
    if (body) body.style.scrollBehavior = '';
  }, 120);
};
