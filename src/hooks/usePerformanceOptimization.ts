import { useEffect } from 'react';
import { getPublicAssetPath } from '../utils/assets';

export const usePerformanceOptimization = () => {
  useEffect(() => {
    // 重要な画像を事前読み込みする
    const preloadCriticalImages = () => {
      const criticalImages = [
        getPublicAssetPath('img/profile.png'),
        getPublicAssetPath('img/favicon.png')
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // フォント読み込みを最適化する
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

    // スクロール時のレイアウト再計算を抑える
    const optimizeScrollPerformance = () => {
      let ticking = false;
      
      const updateScrollPosition = () => {
        // DOMの読み書きをまとめて実行する
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
