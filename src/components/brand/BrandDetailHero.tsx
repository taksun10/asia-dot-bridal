import Script from 'next/script';
import type { Brand } from '@/types/brand';

interface Props { brand: Brand }

export default function BrandDetailHero({ brand }: Props) {
  // JSON-LD 構造化データ（Organization + Product）
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: brand.nameJa,
    alternateName: brand.nameEn,
    description: brand.descJa,
    url: `https://asia.dot-bridal.com/brands/${brand.slug}/`,
    logo: `https://asia.dot-bridal.com/images/brands/${brand.slug}-logo.jpg`,
    brand: {
      '@type': 'Organization',
      name: '株式会社アグローヴ',
      url: 'https://aglobe.co.jp',
    },
  };

  return (
    <>
      {/* 構造化データ */}
      <Script
        id={`jsonld-${brand.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ヒーロービジュアル */}
      <section
        className="relative min-h-[60vh] flex items-end pt-24"
        style={{ background: brand.color }}
      >
        {/* 背景テキスト */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            fontFamily: 'var(--font-serif-en)',
            fontSize: 'clamp(6rem, 16vw, 14rem)',
            fontWeight: 300,
            color: 'rgba(0,0,0,0.04)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            letterSpacing: '0.2em',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {brand.nameEn}
        </div>

        <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)] pb-16 relative z-10 w-full">
          <div className="max-w-xl">
            <span
              style={{
                fontFamily: 'var(--font-serif-en)',
                fontSize: '0.72rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              {brand.nameEn}
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-serif-ja)',
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 300,
                lineHeight: 1.4,
                letterSpacing: '0.05em',
                color: '#1A1A1A',
                marginBottom: '1rem',
              }}
            >
              {brand.nameJa}
            </h1>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#6B6560',
                lineHeight: 1.9,
                maxWidth: '36ch',
              }}
            >
              {brand.taglineJa}
            </p>

            {/* スタイルバッジ */}
            <div className="mt-6 flex items-center gap-3">
              <span
                style={{
                  fontSize: '0.62rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  padding: '4px 12px',
                  border: '1px solid rgba(201,168,76,0.5)',
                  color: '#C9A84C',
                }}
              >
                {brand.style}
              </span>
              <span style={{ fontSize: '0.78rem', color: '#6B6560' }}>
                参考価格 {brand.priceRange}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
