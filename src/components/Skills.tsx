import React, { useRef } from 'react';
import { Skill } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { getPublicAssetPath } from '../utils/assets';
import OptimizedImage from './OptimizedImage';

const skillsData: Skill[] = [
  {
    id: 'html-css',
    name: 'HTML5/CSS3',
    rating: 4,
    image: getPublicAssetPath('img/html-5.svg'),
    alt: 'html5'
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    rating: 3,
    image: getPublicAssetPath('img/wordpress-icon.svg'),
    alt: 'wordpress'
  },
  {
    id: 'javascript',
    name: 'JavaScript/TypeScript',
    rating: 4,
    image: getPublicAssetPath('img/typescript.png'),
    alt: 'typescript'
  },
  {
    id: 'react',
    name: 'React',
    rating: 4,
    image: getPublicAssetPath('img/react.png'),
    alt: 'react'
  },
  {
    id: 'angular',
    name: 'Angular/AngularJS',
    rating: 4,
    image: getPublicAssetPath('img/angular.png'),
    alt: 'angular'
  },
  {
    id: 'backend',
    name: 'JAVA/Kotlin/PHP',
    rating: 3,
    image: getPublicAssetPath('img/java.png'),
    alt: 'java'
  },
  {
    id: 'cloud',
    name: 'AWS/GCP',
    rating: 3,
    image: getPublicAssetPath('img/aws.png'),
    alt: 'aws'
  },
  {
    id: 'database',
    name: 'MySQL/PostgreSQL',
    rating: 4,
    image: getPublicAssetPath('img/mysql.svg'),
    alt: 'mysql'
  },
  {
    id: 'ai-tools',
    name: 'AI開発ツール（Claude Code / Codex）',
    rating: 4,
    image: getPublicAssetPath('img/ai-tools.svg'),
    alt: 'AI開発ツール'
  }
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section className="skill section" id="skill" ref={sectionRef}>
      <div className="container">
        <h2 className="title">SKILL</h2>
        <div className="skill-list">
          {skillsData.map((skill, index) => (
            <div 
              key={skill.id} 
              className={`skill-item ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="skill-img">
                <OptimizedImage 
                  src={skill.image} 
                  alt={skill.alt}
                  width={60}
                  height={60}
                />
              </p>
              <div className="skill-body">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-rating" data-rate={skill.rating}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
