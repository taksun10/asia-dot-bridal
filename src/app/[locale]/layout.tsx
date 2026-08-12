import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { Noto_Serif_JP, Noto_Sans_JP, Cormorant_Garamond } from 'next/font/google';
import { locales } from '@/i18n';
import '../globals.css';

const notoSerifJP = Noto_Serif_JP({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-serif-ja',
  display: 'swap',
});
const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-sans-ja',
  display: 'swap',
});
const cormorant = Cormorant_Garamond({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif-en',
  display: 'swap',
});

// next-intlのheaders使用と静的生成の衝突を回避（全ページSSR化）
export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://asia.dot-bridal.com';
  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      languages: {
        'zh-HK': `${baseUrl}/`,
        'zh-TW': `${baseUrl}/`,
        'en': `${baseUrl}/en`,
        'ja': `${baseUrl}/ja`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'dot·bridal ASIA',
      images: [{ url: `${baseUrl}/og-image.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // 静的生成のためにロケールを明示的に設定
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale === 'zh' ? 'zh-Hant' : locale}
      className={`${notoSerifJP.variable} ${notoSansJP.variable} ${cormorant.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
