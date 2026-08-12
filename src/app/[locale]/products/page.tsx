import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import { rings, getRingsByBrand } from '@/lib/rings';
import { brands } from '@/lib/brands';
import { jpyToHkd, formatHkd, formatJpy } from '@/types/ring';

export const metadata: Metadata = {
  title: '全コレクション 84デザイン｜日本ブライダルリング | dot·bridal ASIA',
  description: '9ブランド84デザインの日本製ブライダルリングを一覧で比較。HKD価格付き。シェールラブ・アムール・ノイシュプール・ハートアイランドほか全ブランド掲載。',
};

const categoryLabels = {
  marriage:   '結婚指輪',
  engagement: '婚約指輪',
  set:        'セットリング',
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: '日本ブライダルリング全コレクション',
  numberOfItems: rings.length,
  itemListElement: rings.map((ring, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `${ring.nameJa}（${ring.nameEn}）`,
    url: `https://asia.dot-bridal.com/products/${ring.slug}/`,
  })),
};

export default function ProductsPage() {
  const brandsWithRings = brands
    .map((b) => ({ brand: b, brandRings: getRingsByBrand(b.slug) }))
    .filter(({ brandRings }) => brandRings.length > 0);

  return (
    <>
      <Script id="jsonld-products" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <main className="pt-24 pb-20">

        {/* ヘッダー */}
        <div className="py-16 relative overflow-hidden" style={{ background: '#1A1A1A' }}>
          <div aria-hidden="true" style={{ position: 'absolute', fontFamily: 'var(--font-serif-en)', fontSize: 'clamp(6rem,16vw,13rem)', fontWeight: 300, color: 'rgba(255,255,255,0.025)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', letterSpacing: '0.2em', whiteSpace: 'nowrap', pointerEvents: 'none' }}>RINGS</div>
          <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)] relative z-10">
            <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', display: 'block', marginBottom: '0.75rem' }}>Collections</span>
            <h1 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 300, color: '#fff', lineHeight: 1.4, marginBottom: '0.75rem' }}>全コレクション</h1>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)' }}>{rings.length}デザイン — 9ブランド</p>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)] mt-12">

          {brandsWithRings.map(({ brand, brandRings }) => {
            const byCategory = brandRings.reduce((acc, ring) => {
              if (!acc[ring.category]) acc[ring.category] = [];
              acc[ring.category].push(ring);
              return acc;
            }, {} as Record<string, typeof brandRings>);

            return (
              <section key={brand.slug} className="mb-20">
                <div className="flex items-center justify-between py-6 mb-8" style={{ borderBottom: '1px solid rgba(201,168,76,0.3)' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.62rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#C9A84C', display: 'block', marginBottom: '0.3rem' }}>{brand.nameEn}</span>
                    <h2 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.3rem,2.5vw,1.9rem)', fontWeight: 300 }}>{brand.nameJa}</h2>
                  </div>
                  <Link href={`/brands/${brand.slug}/`} style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: '#C9A84C', borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: '2px' }} className="hover:border-gold whitespace-nowrap">ブランド詳細 →</Link>
                </div>

                {Object.entries(byCategory).map(([cat, catRings]) => (
                  <div key={cat} className="mb-12">
                    <h3 className="flex items-center gap-3 mb-6" style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6560' }}>
                      <span style={{ width: '24px', height: '1px', background: '#C9A84C', display: 'inline-block' }} />
                      {categoryLabels[cat as keyof typeof categoryLabels] ?? cat}
                      <span style={{ color: '#C9A84C' }}>({catRings.length})</span>
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {catRings.map((ring) => {
                        const hkd = jpyToHkd(ring.priceJPY);
                        return (
                          <Link key={ring.slug} href={`/products/${ring.slug}/`} className="group flex flex-col">
                            {/* 画像 */}
                            <div className="aspect-square mb-3 relative overflow-hidden" style={{ background: brand.color }}>
                              {ring.imageUrl && (
                                <Image
                                  src={ring.imageUrl}
                                  alt={`${ring.nameJa}（${ring.nameEn}）- ${brand.nameJa}`}
                                  fill
                                  sizes="(max-width:768px) 50vw, (max-width:1200px) 25vw, 20vw"
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              )}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ background: 'rgba(26,26,26,0.55)' }}>
                                <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#fff', textTransform: 'uppercase' }}>詳細を見る</span>
                              </div>
                            </div>
                            {/* テキスト */}
                            <div className="flex flex-col gap-1">
                              <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.7rem', letterSpacing: '0.1em', color: '#1A1A1A' }} className="group-hover:text-gold transition-colors">{ring.nameEn}</span>
                              <span style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.8rem', color: '#6B6560' }}>{ring.nameJa}</span>
                              {ring.conceptJa && <span style={{ fontSize: '0.68rem', color: '#C9A84C' }}>{ring.conceptJa}</span>}
                              <span style={{ fontSize: '0.72rem', color: '#1A1A1A', marginTop: '2px' }}>
                                {formatHkd(hkd)} <span style={{ fontSize: '0.6rem', color: '#6B6560' }}>({formatJpy(ring.priceJPY)})</span>
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </section>
            );
          })}

          {/* CTA */}
          <div className="mt-8 p-10 text-center" style={{ background: '#F5EAEA' }}>
            <p style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.1rem,2vw,1.5rem)', fontWeight: 300, marginBottom: '0.75rem' }}>気になるリングはありましたか？</p>
            <p style={{ fontSize: '0.85rem', color: '#6B6560', marginBottom: '2rem' }}>試着のご相談・HKD価格のお見積もりはお気軽に。</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} style={{ padding: '0.85rem 2rem', background: '#25D366', color: '#fff', fontSize: '0.78rem', letterSpacing: '0.1em' }} className="hover:opacity-85 transition-opacity">WhatsApp で相談</a>
              <Link href="/contact/" style={{ padding: '0.85rem 2rem', border: '1px solid #1A1A1A', color: '#1A1A1A', fontSize: '0.78rem', letterSpacing: '0.1em' }} className="hover:bg-ink hover:text-white transition-all">フォームで相談</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
