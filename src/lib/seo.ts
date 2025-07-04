import { Metadata } from 'next';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  schemaType?: string;
}

// Primary target keywords for Hormaz Daruwala
export const PRIMARY_KEYWORDS = [
  'Hormaz',
  'Hormaz Daruwala', 
  'Hormaz Coder',
  'coder hormaz',
  'coderhormaz',
  'Developer Hormaz',
  'Hormaz Developer',
  'Hormaz Full Stack Developer',
  'Hormaz Frontend Developer',
  'Hormaz Backend Developer',
  'Hormaz React Developer',
  'Hormaz Next.js Developer',
  'Hormaz TypeScript Developer'
];

export const SECONDARY_KEYWORDS = [
  'Full-Stack Developer',
  'React Developer',
  'Next.js Expert',
  'TypeScript Specialist',
  'Frontend Engineer',
  'Backend Engineer',
  'UI/UX Designer',
  'Web Development',
  'Software Engineering',
  'JavaScript Developer',
  'Node.js Developer',
  'Modern Web Technologies',
  'Responsive Design',
  'Performance Optimization'
];

export const SITE_CONFIG = {
  name: 'Hormaz Daruwala Portfolio',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hormaz.dev',
  description: 'Hormaz Daruwala (coderhormaz) - Professional Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Expert Frontend & Backend Developer creating exceptional digital experiences.',
  author: 'Hormaz Daruwala',
  creator: 'Hormaz Daruwala',
  keywords: [...PRIMARY_KEYWORDS, ...SECONDARY_KEYWORDS],
  twitter: '@hormaz_dev',
  social: {
    twitter: 'https://twitter.com/hormaz_dev',
    linkedin: 'https://www.linkedin.com/in/hormazdaruwala/',
    github: 'https://github.com/coderhormaz',
    instagram: 'https://www.instagram.com/horma_z/',
    email: 'hormazdaruwala86@gmail.com'
  }
};

export function generateSEO({
  title,
  description = SITE_CONFIG.description,
  keywords = [],
  canonical,
  ogImage = '/og-image.jpg',
  noIndex = false
}: SEOProps = {}): Metadata {
  const fullTitle = title 
    ? `${title} | ${SITE_CONFIG.author} - Full Stack Developer`
    : `${SITE_CONFIG.author} | Full-Stack Developer & UI/UX Designer | coderhormaz`;

  const allKeywords = [...PRIMARY_KEYWORDS, ...SECONDARY_KEYWORDS, ...keywords];
  const canonicalUrl = canonical || SITE_CONFIG.url;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_CONFIG.url}${ogImage}`;

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.creator,
    publisher: SITE_CONFIG.creator,
    category: 'Technology',
    classification: 'Professional Portfolio',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.author} - Full Stack Developer Portfolio`,
          type: 'image/jpeg'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: SITE_CONFIG.twitter,
      site: SITE_CONFIG.twitter,
      images: [ogImageUrl]
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': canonicalUrl,
        'en': canonicalUrl
      }
    },
    other: {
      'msapplication-TileColor': '#000000',
      'theme-color': '#000000'
    }
  };
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

// Generate FAQ schema for common questions
export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Hormaz Daruwala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hormaz Daruwala (also known as coderhormaz) is a professional Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. He creates exceptional digital experiences with cutting-edge solutions.'
        }
      },
      {
        '@type': 'Question',
        name: 'What technologies does Hormaz specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hormaz specializes in React, Next.js, TypeScript, JavaScript, Node.js, UI/UX Design, and modern web development technologies. He is expert in both frontend and backend development.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I contact Hormaz for development projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact Hormaz Daruwala through his portfolio website at https://hormaz.dev, via email at hormazdaruwala86@gmail.com, or through his social media profiles on LinkedIn, GitHub, and Instagram.'
        }
      }
    ]
  };
}
