import type React from 'react';
import { useEffect, useState } from 'react';

const PageTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={`page-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="ページ先頭へ戻る"
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <span className="material-icons-outlined">expand_less</span>
    </button>
  );
};

export default PageTop;
