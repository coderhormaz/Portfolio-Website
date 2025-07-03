import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hormaz | Full-Stack Developer & UI/UX Designer",
  description: "Premium portfolio showcasing modern web development expertise with Next.js, React, and cutting-edge technologies. Creating exceptional digital experiences.",
  keywords: "Full-Stack Developer, React, Next.js, TypeScript, UI/UX Designer, Web Development, Portfolio",
  authors: [{ name: "Hormaz" }],
  creator: "Hormaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hormaz.dev",
    title: "Hormaz | Full-Stack Developer & UI/UX Designer",
    description: "Premium portfolio showcasing modern web development expertise",
    siteName: "Hormaz ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hormaz | Full-Stack Developer & UI/UX Designer",
    description: "Premium portfolio showcasing modern web development expertise",
    creator: "@hormaz_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
