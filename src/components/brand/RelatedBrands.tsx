import Link from 'next/link';
import { useLocale } from 'next-intl';
import type { Brand } from '@/types/brand';

interface Props { brands: Brand[] }

export default function RelatedBrands({ brands }: Props) {
  const locale = useLocale();
  const localePath = (path: string) =>
    locale === 'ja' ? `/ja${path}` : locale === 'en' ? `/en${path}` : path;

  return (
    <section className="py-[clamp(4rem,8vw,6rem)]" style={{ background: '#F8F5F0' }}>
      <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)]">
        <span
          style={{
            fontFamily: 'var(--font-serif-en)',
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            display: 'block',
            marginBottom: '0.5rem',
          }}
        >
          Related Brands
        </span>
        <span className="block w-12 h-px mb-8" style={{ background: '#C9A84C' }} />
        <h2
          style={{
            fontFamily: 'var(--font-serif-ja)',
            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
            fontWeight: 300,
            marginBottom: '2.5rem',
          }}
        >
          同じスタイルの関連ブランド
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={localePath(`/brands/${brand.slug}/`)}
              className="group p-6 transition-all duration-300 hover:shadow-md"
              style={{ background: brand.color }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif-en)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}
              >
                {brand.nameEn}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif-ja)',
                  fontSize: '1.05rem',
                  fontWeight: 400,
                  color: '#1A1A1A',
                  marginBottom: '0.6rem',
                }}
              >
                {brand.nameJa}
              </h3>
              <p style={{ fontSize: '0.78rem', color: '#6B6560', lineHeight: 1.7 }}>
                {brand.taglineJa}
              </p>
              <span
                className="block mt-4 text-xs tracking-widest group-hover:gap-2 transition-all"
                style={{ color: '#C9A84C', fontFamily: 'var(--font-serif-en)' }}
              >
                詳細を見る →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
