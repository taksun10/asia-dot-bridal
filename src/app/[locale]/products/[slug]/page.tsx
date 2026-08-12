import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { rings, getRingBySlug, getRingsByBrand } from '@/lib/rings';
import { brands } from '@/lib/brands';
import { jpyToHkd, formatHkd, formatJpy } from '@/types/ring';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return rings.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ring = getRingBySlug(params.slug);
  if (!ring) return {};
  const brand = brands.find((b) => b.slug === ring.brandSlug);
  const hkd = jpyToHkd(ring.priceJPY);
  return {
    title: `${ring.nameJa}（${ring.nameEn}）| ${brand?.nameJa ?? ''} 結婚指輪 | dot·bridal ASIA`,
    description: `${ring.conceptJa}。${ring.descJa} ${formatHkd(hkd)}（参考）。香港・台湾で試着相談受付中。`,
    alternates: { canonical: `https://asia.dot-bridal.com/products/${ring.slug}/` },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const ring = getRingBySlug(params.slug);
  if (!ring) notFound();

  const brand = brands.find((b) => b.slug === ring.brandSlug);
  const hkd = jpyToHkd(ring.priceJPY);
  const hkdHigh = ring.priceHighJPY ? jpyToHkd(ring.priceHighJPY) : null;

  // 同ブランドの他商品（関連商品）
  const related = getRingsByBrand(ring.brandSlug)
    .filter((r) => r.slug !== ring.slug && r.category === ring.category)
    .slice(0, 4);

  // Product JSON-LD
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type':    'Product',
    name:       `${ring.nameJa}（${ring.nameEn}）`,
    description: `${ring.conceptJa}。${ring.descJa}`,
    image:      ring.imageUrl,
    url:        `https://asia.dot-bridal.com/products/${ring.slug}/`,
    brand: {
      '@type': 'Brand',
      name:    brand?.nameJa ?? ring.brandSlug,
    },
    offers: {
      '@type':         'AggregateOffer',
      priceCurrency:   'HKD',
      lowPrice:        hkd,
      ...(hkdHigh && { highPrice: hkdHigh }),
      availability:    'https://schema.org/InStoreOnly',
      areaServed:      ['HK', 'TW'],
    },
    additionalProperty: ring.materials.map((mat) => ({
      '@type': 'PropertyValue',
      name:    '素材',
      value:   mat,
    })),
  };

  return (
    <>
      <Script
        id={`jsonld-product-${ring.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <main className="pt-24 pb-20">

        {/* パンくずリスト */}
        <div className="border-b border-gold/15" style={{ background: '#F8F5F0' }}>
          <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)] py-3">
            <nav className="flex items-center gap-2 flex-wrap" aria-label="パンくずリスト">
              {[
                { href: '/',                       label: 'TOP' },
                { href: '/products/',              label: 'コレクション' },
                { href: `/brands/${ring.brandSlug}/`, label: brand?.nameJa ?? ring.brandSlug },
                { href: null,                      label: ring.nameJa },
              ].map(({ href, label }, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span style={{ color: '#C9A84C', fontSize: '0.6rem' }}>›</span>}
                  {href ? (
                    <Link href={href} style={{ fontSize: '0.72rem', color: '#6B6560' }} className="hover:text-gold transition-colors">{label}</Link>
                  ) : (
                    <span style={{ fontSize: '0.72rem', color: '#1A1A1A' }}>{label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)] mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* 左：商品画像 */}
            <div>
              {/* メイン画像プレースホルダー */}
              <div
                className="aspect-square w-full relative overflow-hidden"
                style={{ background: brand?.color ?? '#F8F5F0' }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div style={{ width: '120px', height: '120px', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '80px', height: '80px', border: '1px solid rgba(201,168,76,0.5)', borderRadius: '50%' }} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.7rem', letterSpacing: '0.25em', color: 'rgba(201,168,76,0.6)', textTransform: 'uppercase' }}>
                    {ring.nameEn}
                  </span>
                  <span style={{ fontSize: '0.6rem', color: 'rgba(107,101,96,0.5)', letterSpacing: '0.12em' }}>
                    Photo Coming Soon
                  </span>
                </div>
              </div>

              {/* オリジナルサイトで画像確認 */}
              <a
                href={ring.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-3 hover:text-gold transition-colors"
                style={{ fontSize: '0.72rem', color: '#6B6560', letterSpacing: '0.08em' }}
              >
                <span style={{ color: '#C9A84C' }}>↗</span>
                日本公式サイトで画像を確認する
              </a>
            </div>

            {/* 右：商品情報 */}
            <div className="flex flex-col gap-6">

              {/* ブランド名 */}
              <div>
                <Link
                  href={`/brands/${ring.brandSlug}/`}
                  style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.65rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#C9A84C' }}
                  className="hover:underline"
                >
                  {brand?.nameEn ?? ring.brandSlug}
                </Link>
              </div>

              {/* 商品名 */}
              <div>
                <h1 style={{ fontFamily: 'var(--font-serif-en)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 300, letterSpacing: '0.12em', color: '#1A1A1A', marginBottom: '0.25rem' }}>
                  {ring.nameEn}
                </h1>
                <p style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1rem', color: '#6B6560', fontWeight: 300 }}>
                  {ring.nameJa} / {ring.nameZh}
                </p>
              </div>

              {/* コンセプト */}
              {ring.conceptJa && (
                <div style={{ borderLeft: '2px solid #C9A84C', paddingLeft: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.9rem', color: '#C9A84C', marginBottom: '0.25rem' }}>
                    {ring.conceptJa}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: '#6B6560' }}>{ring.conceptZh}</p>
                </div>
              )}

              {/* 説明 */}
              <p style={{ fontSize: '0.88rem', color: '#6B6560', lineHeight: 1.9 }}>
                {ring.descJa}
              </p>
              <p style={{ fontSize: '0.78rem', color: '#6B6560', lineHeight: 1.85 }}>
                {ring.descZh}
              </p>

              {/* 価格 */}
              <div style={{ padding: '1.25rem', background: '#F8F5F0', borderTop: '2px solid #C9A84C' }}>
                <div className="flex items-baseline gap-3 flex-wrap mb-2">
                  <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, color: '#1A1A1A' }}>
                    {formatHkd(hkd)}
                  </span>
                  {hkdHigh && (
                    <span style={{ fontSize: '0.8rem', color: '#6B6560' }}>
                      〜 {formatHkd(hkdHigh)}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '0.68rem', color: '#6B6560' }}>
                  参考：{formatJpy(ring.priceJPY)}{ring.priceHighJPY ? `〜${formatJpy(ring.priceHighJPY)}` : ''}（日本円・税込・1本）
                </p>
                <p style={{ fontSize: '0.62rem', color: '#C9A84C', marginTop: '0.5rem' }}>
                  ※ HKD価格は参考レート換算。実際の価格はお問い合わせください。
                </p>
              </div>

              {/* 素材 */}
              <div>
                <p style={{ fontSize: '0.62rem', letterSpacing: '0.15em', color: '#C9A84C', marginBottom: '0.5rem' }}>素材</p>
                <div className="flex flex-wrap gap-2">
                  {ring.materials.map((mat) => (
                    <span key={mat} style={{ fontSize: '0.72rem', padding: '3px 12px', border: '1px solid rgba(201,168,76,0.35)', color: '#6B6560' }}>
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href={`https://wa.me/XXXXXXXXX?text=${encodeURIComponent(`${ring.nameJa}（${ring.nameEn}）について相談したいです`)}`}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem', background: '#25D366', color: '#fff', fontSize: '0.82rem', letterSpacing: '0.12em' }}
                  className="hover:opacity-85 transition-opacity"
                >
                  WhatsApp でこのリングを相談する
                </a>
                <a
                  href="https://line.me/XXXXXXXXX"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem', background: '#06C755', color: '#fff', fontSize: '0.82rem', letterSpacing: '0.12em' }}
                  className="hover:opacity-85 transition-opacity"
                >
                  LINE でこのリングを相談する
                </a>
                <Link
                  href="/contact/"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.85rem', border: '1px solid #1A1A1A', color: '#1A1A1A', fontSize: '0.78rem', letterSpacing: '0.1em' }}
                  className="hover:bg-ink hover:text-white transition-all"
                >
                  メールで問い合わせる
                </Link>
              </div>
            </div>
          </div>

          {/* 関連商品 */}
          {related.length > 0 && (
            <section className="mt-20 pt-12" style={{ borderTop: '1px solid rgba(201,168,76,0.2)' }}>
              <h2 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.1rem,2vw,1.4rem)', fontWeight: 300, marginBottom: '2rem', color: '#6B6560' }}>
                同ブランドの他デザイン
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {related.map((r) => {
                  const rHkd = jpyToHkd(r.priceJPY);
                  return (
                    <Link key={r.slug} href={`/products/${r.slug}/`} className="group flex flex-col gap-2">
                      <div
                        className="aspect-square relative overflow-hidden"
                        style={{ background: brand?.color ?? '#F8F5F0' }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div style={{ width: '40px', height: '40px', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '50%' }} />
                        </div>
                      </div>
                      <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.7rem', letterSpacing: '0.1em' }} className="group-hover:text-gold transition-colors">
                        {r.nameEn}
                      </span>
                      <span style={{ fontSize: '0.68rem', color: '#6B6560' }}>{r.nameJa}</span>
                      <span style={{ fontSize: '0.7rem', color: '#1A1A1A' }}>{formatHkd(rHkd)}</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
