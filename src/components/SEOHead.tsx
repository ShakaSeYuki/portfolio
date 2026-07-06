import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Yuki Nishino Portfolio',
  description = '西野友貴のポートフォリオサイトです。React、TypeScript、Angular、Java、AWSなどのスキルを活かしたフロントエンド・バックエンド開発を行っています。',
  ogImage = '/img/favicon.png',
  canonicalUrl = '/'
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yuki Nishino',
    alternateName: '西野友貴',
    jobTitle: 'Frontend Developer',
    description: description,
    url: canonicalUrl,
    image: ogImage,
    birthDate: '1989-01-13',
    workLocation: {
      '@type': 'Place',
      name: 'Remote/Japan'
    },
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Angular',
      'Java',
      'Kotlin',
      'PHP',
      'AWS',
      'GCP',
      'MySQL',
      'PostgreSQL'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Systems Engineer'
    }
  };

  useEffect(() => {
    // ページタイトルを設定
    document.title = title;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default SEOHead;