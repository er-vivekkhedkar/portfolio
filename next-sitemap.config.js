/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vivekkhedkar.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/404', '/admin'], // Optional, if any
};
