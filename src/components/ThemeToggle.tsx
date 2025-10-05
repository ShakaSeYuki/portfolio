import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useThemeContext();

  const getThemeIcon = () => {
    switch (resolvedTheme) {
      case 'dark':
        return '🌙';
      case 'light':
        return '☀️';
      default:
        return '🌙';
    }
  };

  const getNextThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'ダークモード';
      case 'dark':
        return 'ライトモード';
      case 'system':
        return resolvedTheme === 'dark' ? 'ライトモード' : 'ダークモード';
      default:
        return 'テーマ切り替え';
    }
  };

  return (
    <div className="theme-toggle">
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={getNextThemeLabel()}
        title={getNextThemeLabel()}
      >
        <span className="theme-icon">{getThemeIcon()}</span>
      </button>
      
      <div className="theme-selector">
        <button
          className={`theme-option ${theme === 'light' ? 'active' : ''}`}
          onClick={() => setTheme('light')}
          aria-label="ライトモード"
        >
          ☀️
        </button>
        <button
          className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => setTheme('dark')}
          aria-label="ダークモード"
        >
          🌙
        </button>
        <button
          className={`theme-option ${theme === 'system' ? 'active' : ''}`}
          onClick={() => setTheme('system')}
          aria-label="システム設定に従う"
        >
          💻
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;