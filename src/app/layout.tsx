import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import SEOStructuredData from "@/components/SEOStructuredData";
import PerformanceMonitoring from "@/components/PerformanceMonitoring";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hormaz.tech'),
  title: {
    default: "Hormaz Daruwala - Full-Stack Developer & UI/UX Designer",
    template: "%s | Hormaz Daruwala"
  },
  description: "Hormaz Daruwala is a full-stack developer specializing in React, Next.js, and TypeScript. View projects, services, and get in touch for your next web development project.",
  keywords: [
    "Hormaz Daruwala", "full-stack developer", "React developer", "Next.js developer",
    "TypeScript developer", "web developer India", "UI/UX designer", "frontend developer",
    "portfolio", "coderhormaz"
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
    title: "Hormaz Daruwala - Full-Stack Developer & UI/UX Designer",
    description: "Hormaz Daruwala is a full-stack developer specializing in React, Next.js, and TypeScript. View projects, services, and get in touch for your next web development project.",
    siteName: "Hormaz Daruwala",
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
    title: "Hormaz Daruwala - Full-Stack Developer & UI/UX Designer",
    description: "Hormaz Daruwala is a full-stack developer specializing in React, Next.js, and TypeScript. View projects and get in touch.",
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
  // TODO: Add real verification codes from Google Search Console and Bing Webmaster Tools
  // verification: {
  //   google: "your-real-google-verification-code",
  // },
  alternates: {
    canonical: "https://hormaz.tech",
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
        color: '#F59E0B'
      }
    ]
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#F59E0B',
    'theme-color': '#080a10',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'application-name': 'Hormaz Daruwala',
    'apple-mobile-web-app-title': 'Hormaz',
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
      </head>
      <body className={outfit.className}>
        <PerformanceMonitoring />
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
