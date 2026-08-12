import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Sanity CDN（本番CMS）
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      // 各ブランド公式サイト（移行期間中の画像参照）
      { protocol: 'https', hostname: 'www.cher-luv.com' },
      { protocol: 'https', hostname: 'amour-amulet.com' },
      { protocol: 'https', hostname: 'neuspur.jp' },
      { protocol: 'https', hostname: 'ironoha.jp' },
      { protocol: 'https', hostname: 'www.ankhore.com' },
      { protocol: 'https', hostname: 'baum-ring.com' },
      { protocol: 'https', hostname: 'promise-ring.jp' },
      { protocol: 'https', hostname: 'heart-islands.com' },
      { protocol: 'https', hostname: 'aglobe.co.jp' },
      { protocol: 'https', hostname: 'dot-bridal.com' },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default withNextIntl(nextConfig);
