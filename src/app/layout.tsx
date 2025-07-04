import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import SEOStructuredData from "@/components/SEOStructuredData";
import PerformanceMonitoring from "@/components/PerformanceMonitoring";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hormaz.dev'),
  title: {
    default: "Hormaz Daruwala | Full-Stack Developer & UI/UX Designer | coderhormaz",
    template: "%s | Hormaz Daruwala - Full Stack Developer"
  },
  description: "Hormaz Daruwala (coderhormaz) - Professional Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Expert Frontend & Backend Developer creating exceptional digital experiences with cutting-edge solutions.",
  keywords: [
    "Hormaz",
    "Hormaz Daruwala", 
    "Hormaz Coder",
    "coder hormaz",
    "coderhormaz",
    "Developer Hormaz",
    "Hormaz Developer",
    "Hormaz Full Stack Developer",
    "Hormaz Frontend Developer",
    "Hormaz Backend Developer",
    "Hormaz React Developer",
    "Hormaz Next.js Developer",
    "Hormaz TypeScript Developer",
    "Hormaz UI/UX Designer",
    "Hormaz Web Developer",
    "Hormaz Software Engineer",
    "Hormaz Portfolio",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Expert",
    "TypeScript Specialist",
    "Frontend Engineer",
    "Backend Engineer",
    "UI/UX Designer",
    "Web Development",
    "Software Engineering",
    "JavaScript Developer",
    "Node.js Developer",
    "Modern Web Technologies",
    "Responsive Design",
    "Performance Optimization"
  ],
  authors: [{ name: "Hormaz Daruwala", url: "https://hormaz.dev" }],
  creator: "Hormaz Daruwala",
  publisher: "Hormaz Daruwala",
  category: "Technology",
  classification: "Professional Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hormaz.dev",
    title: "Hormaz Daruwala | Full-Stack Developer & UI/UX Designer | coderhormaz",
    description: "Hormaz Daruwala (coderhormaz) - Professional Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Expert Frontend & Backend Developer creating exceptional digital experiences.",
    siteName: "Hormaz Daruwala Portfolio",
    images: [
      {
        url: "https://hormaz.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hormaz Daruwala - Full Stack Developer Portfolio",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hormaz Daruwala | Full-Stack Developer & UI/UX Designer | coderhormaz",
    description: "Hormaz Daruwala (coderhormaz) - Professional Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    creator: "@hormaz_dev",
    site: "@hormaz_dev",
    images: ["https://hormaz.dev/og-image.jpg"]
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
    canonical: "https://hormaz.dev",
    languages: {
      'en-US': 'https://hormaz.dev',
      'en': 'https://hormaz.dev'
    }
  },
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000'
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
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://hormaz.dev" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <PerformanceMonitoring />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
