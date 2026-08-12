import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * cn
 * clsx + tailwind-merge のショートカット
 * 条件付きクラス名の結合に使用
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * formatDate
 * 日付を各ロケール向けにフォーマット
 */
export function formatDate(date: string | Date, locale: string = 'ja'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const localeMap: Record<string, string> = {
    ja: 'ja-JP',
    zh: 'zh-TW',
    en: 'en-US',
  };
  return d.toLocaleDateString(localeMap[locale] ?? 'ja-JP', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  });
}

/**
 * truncate
 * 文字列を指定文字数で切り詰める
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '…';
}

/**
 * localePath
 * ロケールプレフィックス付きのパスを生成
 * デフォルトロケール（zh）はプレフィックスなし
 */
export function localePath(path: string, locale: string): string {
  if (locale === 'zh') return path;
  return `/${locale}${path}`;
}
