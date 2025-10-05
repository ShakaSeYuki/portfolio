import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href) as HTMLElement;
      if (target) {
        const headerHeight = 73;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="header-logo">
          <a href="/">Yuki Nishino</a>
        </h1>
        <nav className="gnav">
          <ul className="gnav-list">
            <li className="gnav-item">
              <a href="#works" onClick={(e) => handleNavClick(e, '#works')}>WORKS</a>
            </li>
            <li className="gnav-item">
              <a href="#skill" onClick={(e) => handleNavClick(e, '#skill')}>SKILL</a>
            </li>
            <li className="gnav-item">
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>ABOUT</a>
            </li>
            <li className="gnav-item">
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>CONTACT</a>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;