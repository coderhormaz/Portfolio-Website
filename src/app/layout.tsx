import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import SEOStructuredData from "@/components/SEOStructuredData";
import PerformanceMonitoring from "@/components/PerformanceMonitoring";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hormaz.tech'),
  title: {
    default: "Hormaz | Full-Stack Developer Portfolio | Hormaz Daruwala | coderhormaz",
    template: "%s | Hormaz Daruwala - Global Elite Developer"
  },
  description: "Hormaz - Professional Full-Stack Developer and UI/UX Designer. Hormaz Daruwala (coderhormaz) specializes in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    // ULTRA-HIGH PRIORITY PRIMARY KEYWORDS
    "Hormaz", "Hormaz Daruwala", "Hormaz Developer", "Hormaz Coder", "Hormaz Portfolio", "Hormaz Tech",
    "Hormaz Expert", "Hormaz Professional", "Hormaz Elite", "Hormaz World-Class", "Hormaz #1", "Hormaz Best",
    "Hormaz Top", "Hormaz Ultimate", "Hormaz Premium", "Hormaz Excellence", "Hormaz Specialist", "Hormaz Guru",
    
    // AGGRESSIVE BRANDED VARIATIONS
    "coderhormaz", "coder hormaz", "hormaz coder", "dev hormaz", "hormaz dev", "hormaz.tech", "hormaz tech",
    "hormaz coding", "hormaz programming", "hormaz solutions", "hormaz services", "hormaz agency", "hormaz studio",
    
    // ROLE-BASED DOMINANCE KEYWORDS
    "Hormaz Full Stack Developer", "Hormaz Frontend Developer", "Hormaz Backend Developer", "Hormaz React Developer",
    "Hormaz Next.js Developer", "Hormaz TypeScript Developer", "Hormaz JavaScript Developer", "Hormaz Node.js Developer",
    "Hormaz UI/UX Designer", "Hormaz Web Developer", "Hormaz Software Engineer", "Hormaz Development Expert",
    
    // SUPERLATIVE KEYWORDS FOR DOMINANCE
    "Best Hormaz", "Top Hormaz", "Expert Hormaz", "Professional Hormaz", "Elite Hormaz", "Premium Hormaz",
    "World-Class Hormaz", "#1 Hormaz", "Leading Hormaz", "Ultimate Hormaz", "Master Hormaz", "Genius Hormaz",
    
    // LOCATION + NAME (for local SEO)
    "Hormaz India", "Hormaz Mumbai", "Hormaz Developer India", "Hormaz Daruwala India", "Hormaz Daruwala Mumbai",
    
    // EXTREME TECHNICAL KEYWORDS
    "Hormaz React Expert", "Hormaz Next.js Specialist", "Hormaz TypeScript Master", "Hormaz JavaScript Guru",
    "Hormaz Full Stack Expert", "Hormaz Frontend Specialist", "Hormaz Backend Expert", "Hormaz Web App Developer",
    "Hormaz Modern Developer", "Hormaz Progressive Web Apps", "Hormaz Performance Expert", "Hormaz SEO Expert",
    
    // COMPETITIVE KEYWORDS
    "Best Developer", "Top Developer", "Expert Developer", "Elite Developer", "Professional Developer",
    "Full Stack Developer", "React Developer", "Next.js Developer", "TypeScript Developer", "Frontend Developer",
    "Backend Developer", "Web Developer", "Software Engineer", "UI/UX Designer", "JavaScript Developer"
  ],
  authors: [{ name: "Hormaz Daruwala", url: "https://hormaz.tech" }],
  creator: "Hormaz Daruwala",
  publisher: "Hormaz Daruwala",
  category: "Technology",
  classification: "Professional Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hormaz.tech",
    title: "Hormaz | Full-Stack Developer Portfolio | Hormaz Daruwala | coderhormaz",
    description: "Hormaz - Professional Full-Stack Developer and UI/UX Designer. Hormaz Daruwala (coderhormaz) specializes in React, Next.js, TypeScript, and modern web technologies. Expert Frontend & Backend Developer creating exceptional digital experiences.",
    siteName: "Hormaz Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hormaz - Full Stack Developer Portfolio",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hormaz | Full-Stack Developer Portfolio | Hormaz Daruwala | coderhormaz",
    description: "Hormaz - Professional Full-Stack Developer and UI/UX Designer. Hormaz Daruwala (coderhormaz) specializes in React, Next.js, TypeScript, and modern web technologies.",
    creator: "@hormaz_dev",
    site: "@hormaz_dev",
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code"
    }
  },
  alternates: {
    canonical: "https://hormaz.tech",
    languages: {
      'en-US': 'https://hormaz.tech',
      'en': 'https://hormaz.tech',
      'x-default': 'https://hormaz.tech'
    }
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.png',
        color: '#8B5CF6'
      }
    ]
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#8B5CF6',
    'theme-color': '#8B5CF6',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'application-name': 'Hormaz Daruwala - Elite Developer',
    'apple-mobile-web-app-title': 'Hormaz',
    'msapplication-tooltip': 'Hormaz Daruwala - World\'s #1 Developer',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <SEOStructuredData />
        {/* Preconnect to important domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Enhanced PWA and Icon Support */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Hormaz" />
        <meta name="apple-mobile-web-app-title" content="Hormaz" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-TileImage" content="/icon-192" />
        
        {/* Google-specific meta tags for better recognition */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="google" content="notranslate" />
        <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        
        {/* Rich Snippets and Structured Data Enhancement */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content={new Date().toISOString()} />
        <meta property="article:author" content="Hormaz Daruwala" />
        <meta property="article:publisher" content="https://hormaz.tech" />
        
        {/* Twitter Cards Enhancement */}
        <meta name="twitter:domain" content="hormaz.tech" />
        <meta name="twitter:url" content="https://hormaz.tech" />
        <meta name="twitter:label1" content="Developer" />
        <meta name="twitter:data1" content="Full-Stack" />
        <meta name="twitter:label2" content="Experience" />
        <meta name="twitter:data2" content="Expert Level" />
        
        {/* Additional Brand and Identity Meta Tags */}
        <meta name="author" content="Hormaz Daruwala" />
        <meta name="publisher" content="Hormaz Daruwala" />
        <meta name="copyright" content="© 2025 Hormaz Daruwala. All rights reserved." />
        <meta name="designer" content="Hormaz Daruwala" />
        <meta name="owner" content="Hormaz Daruwala" />
        <meta name="url" content="https://hormaz.tech" />
        <meta name="identifier-URL" content="https://hormaz.tech" />
        <meta name="directory" content="submission" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="1 days" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="audience" content="all" />
        <meta name="subject" content="Full-Stack Web Development, React, Next.js, TypeScript" />
        <meta name="language" content="en" />
        <meta name="web_author" content="Hormaz Daruwala" />
        <meta name="reply-to" content="hormaz@hormaz.tech" />
        <meta name="category" content="Technology, Web Development, Software Engineering" />
        
        {/* Search Engine Specific Tags */}
        <meta name="slurp" content="index,follow" />
        <meta name="msnbot" content="index,follow" />
        <meta name="alexabot" content="index,follow" />
        <meta name="psbot" content="index,follow" />
        <meta name="yahoobot" content="index,follow" />
        <meta name="bingbot" content="index,follow" />
        <meta name="facebookbot" content="index,follow" />
        <meta name="twitterbot" content="index,follow" />
        <meta name="linkedinbot" content="index,follow" />
        
        {/* Content Security and Performance */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://hormaz.tech" />
        
        {/* Enhanced Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
        <link rel="icon" href="/logo.png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="mask-icon" href="/logo.png" color="#8B5CF6" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body className={inter.className}>
        <PerformanceMonitoring />
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
