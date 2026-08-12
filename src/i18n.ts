import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// サポートするロケール
export const locales = ['ja', 'zh', 'en'] as const;
export type Locale = (typeof locales)[number];

// デフォルトロケール（本番では 'zh' に変更する）
export const defaultLocale: Locale = 'ja';

export default getRequestConfig(async ({ locale }) => {
  // 無効なロケールは404
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
