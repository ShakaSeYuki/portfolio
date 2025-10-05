import React, { useRef } from 'react';
import { Profile, ProfilePeriod } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import OptimizedImage from './OptimizedImage';

const profileData: Profile = {
  name: 'Yuki Nishino',
  image: '/img/profile.png',
  periods: [
    {
      period: '1989/01/13生まれ。',
      description: ''
    },
    {
      period: '2012〜2019',
      description: '会社員、社内SEとして活動。競馬予想サイト開発・運用・保守。JQuery・PHP・PostgreSQLなど'
    },
    {
      period: '2019〜2022',
      description: 'フリーランス、SESとして活動。銀行系アプリの開発・運用・保守。Angular・JAVA・MySQLなど'
    },
    {
      period: '2022〜現在',
      description: 'フリーランス、SESとして活動。転職サイトの開発・運用・保守。Angular・React・Kotlin・MySQLなど'
    }
  ]
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <h2 className="title">ABOUT</h2>
        <div className={`profile ${isVisible ? 'animate-in' : ''}`}>
          <p className="profile-img">
            <OptimizedImage 
              src={profileData.image} 
              alt={profileData.name}
              width={150}
              height={150}
              priority={true}
            />
          </p>
          <div className="profile-body">
            {profileData.periods.map((period, index) => (
              <p key={index}>
                {period.period && <strong>{period.period}</strong>}
                {period.description && (
                  <>
                    {period.period && ' '}
                    {period.description}
                  </>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;