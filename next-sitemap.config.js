/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hormaz.tech',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*', '/_next/*', '/robots.txt', '/sitemap.xml'],
  transform: async (config, path) => {
    // Enhanced priority for key pages
    const corePages = [
      '/',
      '/about',
      '/portfolio',
      '/services',
      '/contact'
    ];
    
    let priority = 0.7;
    let changefreq = 'weekly';
    
    if (corePages.includes(path)) {
      priority = path === '/' ? 1.0 : 0.9;
      changefreq = path === '/' ? 'daily' : 'weekly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
}
