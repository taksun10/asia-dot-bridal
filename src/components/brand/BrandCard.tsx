import Link from 'next/link';
import { useLocale } from 'next-intl';
import type { Brand } from '@/types/brand';

const styleLabels: Record<Brand['style'], string> = {
  'romantic':        'ロマンティック',
  'elegant':         'エレガント',
  'japanese-modern': '和モダン',
  'minimal':         'シンプル',
};

interface Props {
  brand: Brand;
  index: number;
}

export default function BrandCard({ brand, index }: Props) {
  const locale = useLocale();
  const href =
    locale === 'ja' ? `/ja/brands/${brand.slug}/`
    : locale === 'en' ? `/en/brands/${brand.slug}/`
    : `/brands/${brand.slug}/`;

  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 p-8 relative overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{ background: brand.color, animationDelay: `${index * 0.05}s` }}
    >
      {/* ボトムラインアニメーション */}
      <span
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
        style={{ background: '#C9A84C' }}
        aria-hidden="true"
      />

      {/* ブランド名 */}
      <div className="flex flex-col gap-1">
        <span
          style={{
            fontFamily: 'var(--font-serif-en)',
            fontSize: '0.62rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#C9A84C',
          }}
        >
          {brand.nameEn}
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-serif-ja)',
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            fontWeight: 400,
            lineHeight: 1.4,
            color: '#1A1A1A',
          }}
        >
          {brand.nameJa}
        </h2>
      </div>

      {/* タグライン */}
      <p style={{ fontSize: '0.82rem', color: '#6B6560', lineHeight: 1.75 }}>
        {brand.taglineJa}
      </p>

      {/* スタイルバッジ＋価格帯 */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/10">
        <span
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            padding: '3px 10px',
            border: '1px solid rgba(201,168,76,0.4)',
            color: '#C9A84C',
          }}
        >
          {styleLabels[brand.style]}
        </span>
        <span style={{ fontSize: '0.72rem', color: '#6B6560' }}>
          {brand.priceRange}
        </span>
      </div>

      {/* 矢印 */}
      <span
        style={{
          fontFamily: 'var(--font-serif-en)',
          fontSize: '0.68rem',
          letterSpacing: '0.15em',
          color: '#C9A84C',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
        className="group-hover:gap-3 transition-all duration-200"
      >
        ブランドを見る →
      </span>
    </Link>
  );
}
