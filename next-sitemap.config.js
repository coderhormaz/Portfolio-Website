/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hormaz.tech',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*', '/_next/*']
}
