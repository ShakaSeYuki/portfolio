import { useEffect } from 'react';

export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalImages = () => {
      const criticalImages = [
        '/img/profile.png',
        '/img/favicon.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize font loading
    const optimizeFontLoading = () => {
      if ('fonts' in document) {
        Promise.all([
          document.fonts.load('400 16px Montserrat'),
          document.fonts.load('700 16px Montserrat')
        ]).then(() => {
          document.body.classList.add('fonts-loaded');
        });
      }
    };

    // Reduce layout thrashing
    const optimizeScrollPerformance = () => {
      let ticking = false;
      
      const updateScrollPosition = () => {
        // Batch DOM reads and writes
        requestAnimationFrame(() => {
          ticking = false;
        });
      };

      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    };

    preloadCriticalImages();
    optimizeFontLoading();
    const cleanup = optimizeScrollPerformance();

    return cleanup;
  }, []);
};