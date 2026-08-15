import type React from 'react';
import { useEffect } from 'react';
import { getBasePath, getPublicAssetPath } from '../utils/assets';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Yuki Nishino Portfolio',
  description = '西野友貴のポートフォリオサイトです。React、TypeScript、Angular、Java、AWSなどのスキルを活かしたフロントエンド・バックエンド開発を行っています。',
  ogImage = getPublicAssetPath('img/favicon.png'),
  canonicalUrl = getBasePath(),
}) => {
  useEffect(() => {
    document.title = title;

    // props から組み立てるため、effect の中で作って props を依存に入れる。
    // 外に置くとレンダーのたびに新しい参照になり、props が変わっても
    // 構造化データが古いままになる
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
        name: 'Remote/Japan',
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
        'PostgreSQL',
      ],
      alumniOf: {
        '@type': 'Organization',
        name: 'Systems Engineer',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [title, description, canonicalUrl, ogImage]);

  return null;
};

export default SEOHead;
