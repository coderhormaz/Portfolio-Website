/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://hormaz.dev',
  generateRobotsTxt: false, // We have a custom robots.txt
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 1.0,
  exclude: [
    '/api/*',
    '/admin/*',
    '/_next/*',
    '/404',
    '/500'
  ],
  additionalPaths: async (config) => [
    // Main pages with high priority for your keywords
    {
      loc: '/',
      changefreq: 'daily',
      priority: 1.0,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: 'https://hormaz.dev',
          hreflang: 'en',
        },
        {
          href: 'https://coderhormaz.dev',
          hreflang: 'en',
        }
      ]
    },
    {
      loc: '/#about',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/#projects',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/#contact',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://hormaz.dev/sitemap.xml',
      'https://coderhormaz.dev/sitemap.xml'
    ],
  },
  transform: async (config, path) => {
    // Custom transform for better SEO
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
      images: [
        {
          loc: 'https://hormaz.dev/og-image.jpg',
          title: 'Hormaz Daruwala - Full Stack Developer Portfolio',
          caption: 'Professional portfolio of Hormaz Daruwala, expert full-stack developer specializing in React, Next.js, and modern web technologies'
        }
      ]
    }
  }
}
