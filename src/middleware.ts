import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  // デフォルトロケールはURLにプレフィックスなし
  // 例: /brands/ → 日本語, /zh/brands/ → 繁体字
  localePrefix: 'as-needed',
});

export const config = {
  // ミドルウェアを適用するパス（静的ファイルは除外）
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
