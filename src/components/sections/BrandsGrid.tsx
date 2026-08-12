import Link from 'next/link';
import type { Brand } from '@/types/brand';

interface Props { brands: Brand[] }

export default function BrandsGrid({ brands }: Props) {
  return (
    <section style={{ padding: 'clamp(5rem,10vw,8rem) 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1.25rem,5vw,4rem)' }}>

        {/* ヘッダー */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(2.5rem,5vw,4rem)', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '0.75rem' }}>Our 9 Brands</span>
            <span style={{ display: 'block', width: '48px', height: '1px', background: 'var(--color-gold)', marginBottom: '1.5rem' }} />
            <h2 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.5rem,2.8vw,2.2rem)', fontWeight: 300 }}>厳選9ブランド</h2>
          </div>
          <Link href="/brands/" style={{ fontSize: '0.75rem', letterSpacing: '0.18em', color: 'var(--color-gold)', borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: '2px' }}>
            全ブランドを見る →
          </Link>
        </div>

        {/* 家紋モチーフグリッド */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5px', background: 'rgba(201,168,76,0.15)' }}>
          {brands.map((brand, i) => (
            <BrandCard key={brand.slug} brand={brand} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandCard({ brand, featured }: { brand: Brand; featured: boolean }) {
  return (
    <Link
      href={`/brands/${brand.slug}/`}
      className="group"
      style={{
        background: brand.color,
        padding: featured ? '3.5rem 3rem' : '2.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        position: 'relative',
        overflow: 'hidden',
        gridColumn: featured ? 'span 2' : 'span 1',
        gridRow:   featured ? 'span 2' : 'span 1',
        transition: 'background 0.3s',
        textDecoration: 'none',
      }}
    >
      {/* ボトムライン */}
      <span style={{ position: 'absolute', bottom: 0, left: 0, height: '2px', background: 'var(--color-gold)', width: '0', transition: 'width 0.4s ease' }}
        className="group-hover:w-full" />

      <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.62rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
        {brand.nameEn}
      </span>
      <h3 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: featured ? 'clamp(1.3rem,2vw,1.8rem)' : '1rem', fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.4 }}>
        {brand.nameJa}
      </h3>
      <p style={{ fontSize: '0.78rem', color: 'var(--color-mid)', lineHeight: 1.75 }}>
        {brand.taglineJa}
      </p>
      <span style={{ marginTop: 'auto', fontFamily: 'var(--font-serif-en)', fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        詳細を見る →
      </span>
    </Link>
  );
}
