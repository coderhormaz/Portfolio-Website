/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use server actions
  serverActions: true,
  
  // Module resolution for framer-motion and other packages
  transpilePackages: ['framer-motion'],
  
  // Optimize images
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },

  // Experimental features
  experimental: {
    // Clean cache on startup
    optimizePackageImports: ['framer-motion', 'lucide-react', '@react-three/drei'],
  }
};

module.exports = nextConfig;
