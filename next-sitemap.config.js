/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://asia.dot-bridal.com',
  generateRobotsTxt: true,
  // デフォルトロケール（zh）はURLプレフィックスなし
  alternateRefs: [
    { href: 'https://asia.dot-bridal.com',     hreflang: 'zh-HK' },
    { href: 'https://asia.dot-bridal.com',     hreflang: 'zh-TW' },
    { href: 'https://asia.dot-bridal.com/en',  hreflang: 'en' },
    { href: 'https://asia.dot-bridal.com/ja',  hreflang: 'ja' },
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  // ビルド後に自動実行: npm run postbuild
};
