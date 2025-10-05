import React, { useState, useEffect } from 'react';

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
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`page-top ${isVisible ? 'visible' : ''}`} 
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <span className="material-icons-outlined">expand_less</span>
    </div>
  );
};

export default PageTop;