import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static optimization for better SEO
  trailingSlash: false,
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    domains: ['hormaz.tech', 'localhost'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400, // 24 hours
  },
  
  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          // Cache headers for better performance
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400'
          },
          {
            key: 'Content-Type',
            value: 'application/xml'
          }
        ]
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400'
          },
          {
            key: 'Content-Type',
            value: 'text/plain'
          }
        ]
      }
    ]
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      // Redirect common variations to canonical URL
      {
        source: '/home',
        destination: '/',
        permanent: true
      },
      {
        source: '/index',
        destination: '/',
        permanent: true
      }
    ]
  },
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  }
};

export default nextConfig;
