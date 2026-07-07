import React, { useRef } from 'react';
import { Work } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { getBasePath, getPublicAssetPath } from '../utils/assets';
import OptimizedImage from './OptimizedImage';

const worksData: Work[] = [
  {
    id: 'portfolio',
    name: 'このポートフォリオサイト',
    image: getPublicAssetPath('img/favicon.png'),
    alt: 'Portfolio',
    url: getBasePath(),
    isExternal: false
  },
  {
    id: 'pomodoro',
    name: 'ポモドーロタイマー',
    image: getPublicAssetPath('img/pomodoro-timer.png'),
    alt: 'ポモドーロタイマー',
    url: 'https://chromewebstore.google.com/detail/%E3%83%9D%E3%83%A2%E3%83%89%E3%83%BC%E3%83%AD%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BCpomodoro-timer/lpfaeeoapaaljlcgaifnahimgbocleeb?hl=ja',
    isExternal: true
  },
  {
    id: 'cremea',
    name: 'クレメアメーカー',
    image: getPublicAssetPath('img/cremea.png'),
    alt: 'クレメアメーカー',
    url: 'https://shakaseyuki.github.io/cremea-maker/',
    isExternal: true
  }
];

const Works: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section className="works section" id="works" ref={sectionRef}>
      <div className="container">
        <h2 className="title">WORKS</h2>
        <div className="works-text">
          <p>個人開発のもののみ掲載してます</p>
        </div>
        <div className="works-list">
          {worksData.map((work, index) => (
            <a
              key={work.id}
              className={`works-item ${isVisible ? 'animate-in' : ''}`}
              href={work.url}
              target={work.isExternal ? '_blank' : '_self'}
              rel={work.isExternal ? 'noopener noreferrer' : undefined}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="works-img">
                <OptimizedImage 
                  src={work.image} 
                  alt={work.alt}
                  width={300}
                  height={200}
                />
              </div>
              <p className="works-name">{work.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
