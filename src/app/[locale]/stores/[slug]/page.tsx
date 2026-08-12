import Script from 'next/script';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { stores, getStoreBySlug, regionLabels } from '@/lib/stores';
import { brands as allBrands } from '@/lib/brands';

interface Props {
  params: { slug: string };
}

// 全店舗を静的生成
export function generateStaticParams() {
  return stores.map((s) => ({ slug: s.slug }));
}

// 動的メタデータ
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const store = getStoreBySlug(params.slug);
  if (!store) return {};

  const regionLabel = regionLabels[store.region].ja;
  return {
    title:       `${store.nameJa}（${regionLabel}）| 取り扱い店舗 | dot·bridal ASIA`,
    description: `${store.nameJa}は${store.addressJa}にある日本ブライダルリングの取り扱い店舗です。${store.hoursJa}営業。${store.brands.length}ブランドをご試着いただけます。`,
    alternates: {
      canonical: `https://asia.dot-bridal.com/stores/${store.slug}/`,
    },
  };
}

export default function StoreDetailPage({ params }: Props) {
  const store = getStoreBySlug(params.slug);
  if (!store) notFound();

  const storeBrands = allBrands.filter((b) => store.brands.includes(b.slug));
  const regionLabel = regionLabels[store.region];

  // LocalBusiness JSON-LD（SEO：ローカル検索で上位表示に効く）
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type':    'JewelryStore',
    name:       store.nameJa,
    alternateName: [store.nameEn, store.nameZh],
    url:        `https://asia.dot-bridal.com/stores/${store.slug}/`,
    address: {
      '@type':          'PostalAddress',
      streetAddress:    store.addressJa,
      addressLocality:  store.prefecture,
      addressCountry:   store.region === 'japan' ? 'JP'
                      : store.region === 'hongkong' ? 'HK'
                      : 'TW',
    },
    geo: {
      '@type':    'GeoCoordinates',
      latitude:   store.lat,
      longitude:  store.lng,
    },
    telephone:    store.tel,
    openingHours: store.hoursJa,
    priceRange:   '¥¥¥',
    currenciesAccepted: 'JPY, HKD, TWD',
    paymentAccepted: 'Cash, Credit Card',
    hasMap: `https://www.google.com/maps?q=${store.lat},${store.lng}`,
    parentOrganization: {
      '@type': 'Organization',
      name:    '株式会社アグローヴ',
      url:     'https://asia.dot-bridal.com',
    },
  };

  return (
    <>
      {/* LocalBusiness 構造化データ */}
      <Script
        id={`jsonld-store-${store.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-24 pb-20">

        {/* パンくずリスト */}
        <div
          className="border-b border-gold/15"
          style={{ background: '#F8F5F0' }}
        >
          <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)] py-3">
            <nav className="flex items-center gap-2" aria-label="パンくずリスト">
              {[
                { href: '/',        label: 'TOP' },
                { href: '/stores/', label: '店舗一覧' },
                { href: null,       label: store.nameJa },
              ].map(({ href, label }, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span style={{ color: '#C9A84C', fontSize: '0.6rem' }}>›</span>}
                  {href ? (
                    <Link
                      href={href}
                      style={{ fontSize: '0.72rem', color: '#6B6560' }}
                      className="hover:text-gold transition-colors"
                    >
                      {label}
                    </Link>
                  ) : (
                    <span style={{ fontSize: '0.72rem', color: '#1A1A1A' }}>{label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>

        {/* ヒーローセクション */}
        <section
          className="py-16 relative overflow-hidden"
          style={{ background: '#1A1A1A' }}
        >
          <div
            aria-hidden="true"
            style={{
              position:    'absolute',
              fontFamily:  'var(--font-serif-en)',
              fontSize:    'clamp(5rem,14vw,11rem)',
              fontWeight:  300,
              color:       'rgba(255,255,255,0.025)',
              top: '50%', left: '50%',
              transform:   'translate(-50%,-50%)',
              letterSpacing: '0.15em',
              whiteSpace:  'nowrap',
              pointerEvents: 'none',
            }}
          >
            {store.nameEn}
          </div>
          <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)] relative z-10">
            {/* 地域バッジ */}
            <div className="flex items-center gap-3 mb-4">
              <span
                style={{
                  fontSize:      '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding:       '3px 12px',
                  border:        '1px solid rgba(201,168,76,0.4)',
                  color:         '#C9A84C',
                }}
              >
                {regionLabel.ja}
              </span>
              {store.isMainStore && (
                <span
                  style={{
                    fontSize:      '0.6rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    padding:       '3px 12px',
                    background:    '#C9A84C',
                    color:         '#fff',
                  }}
                >
                  Main Store
                </span>
              )}
            </div>

            <h1
              style={{
                fontFamily:  'var(--font-serif-ja)',
                fontSize:    'clamp(1.8rem,3.5vw,3rem)',
                fontWeight:  300,
                color:       '#fff',
                lineHeight:  1.4,
                marginBottom: '0.5rem',
              }}
            >
              {store.nameJa}
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
              {store.nameZh} / {store.nameEn}
            </p>
          </div>
        </section>

        {/* メインコンテンツ */}
        <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)] mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* 左：詳細情報 */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* 基本情報テーブル */}
              <section>
                <h2
                  style={{
                    fontFamily:  'var(--font-serif-ja)',
                    fontSize:    '1.1rem',
                    fontWeight:  300,
                    marginBottom: '1.25rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  店舗情報
                </h2>
                <dl className="flex flex-col gap-4">
                  {[
                    { label: '住所',    value: store.addressJa, subValue: store.addressZh },
                    { label: '電話番号', value: store.tel },
                    { label: '営業時間', value: store.hoursJa, subValue: store.hoursZh },
                    { label: '定休日',   value: store.closedDaysJa, subValue: store.closedDaysZh },
                  ].map(({ label, value, subValue }) => (
                    <div
                      key={label}
                      className="flex gap-5 pb-4"
                      style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}
                    >
                      <dt
                        style={{
                          fontSize:      '0.68rem',
                          letterSpacing: '0.1em',
                          color:         '#C9A84C',
                          width:         '72px',
                          flexShrink:    0,
                          paddingTop:    '2px',
                        }}
                      >
                        {label}
                      </dt>
                      <dd>
                        <p style={{ fontSize: '0.85rem', color: '#1A1A1A', marginBottom: subValue ? '0.2rem' : 0 }}>
                          {value}
                        </p>
                        {subValue && (
                          <p style={{ fontSize: '0.75rem', color: '#6B6560' }}>{subValue}</p>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* 取り扱いブランド */}
              <section>
                <h2
                  style={{
                    fontFamily:  'var(--font-serif-ja)',
                    fontSize:    '1.1rem',
                    fontWeight:  300,
                    marginBottom: '1.25rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  取り扱いブランド（{storeBrands.length}ブランド）
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {storeBrands.map((brand) => (
                    <Link
                      key={brand.slug}
                      href={`/brands/${brand.slug}/`}
                      className="group flex items-center gap-4 p-4 transition-all hover:shadow-sm"
                      style={{
                        background: brand.color,
                        border:     '1px solid rgba(201,168,76,0.1)',
                      }}
                    >
                      <div className="flex-1">
                        <span
                          style={{
                            fontFamily:    'var(--font-serif-en)',
                            fontSize:      '0.58rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color:         '#C9A84C',
                            display:       'block',
                            marginBottom:  '0.2rem',
                          }}
                        >
                          {brand.nameEn}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif-ja)',
                            fontSize:   '0.95rem',
                            fontWeight: 400,
                          }}
                        >
                          {brand.nameJa}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize:  '0.7rem',
                          color:     '#C9A84C',
                          flexShrink: 0,
                        }}
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* 備考 */}
              {store.noteJa && (
                <section
                  className="p-5"
                  style={{
                    background:  'rgba(201,168,76,0.06)',
                    borderLeft:  '2px solid #C9A84C',
                  }}
                >
                  <p
                    style={{
                      fontSize:    '0.72rem',
                      letterSpacing: '0.1em',
                      color:       '#C9A84C',
                      marginBottom: '0.4rem',
                    }}
                  >
                    ℹ︎ ご来店前に
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#6B6560', lineHeight: 1.75 }}>
                    {store.noteJa}
                  </p>
                  {store.noteZh && (
                    <p style={{ fontSize: '0.78rem', color: '#6B6560', marginTop: '0.4rem' }}>
                      {store.noteZh}
                    </p>
                  )}
                </section>
              )}

              {/* Google Maps */}
              <section>
                <h2
                  style={{
                    fontFamily:  'var(--font-serif-ja)',
                    fontSize:    '1.1rem',
                    fontWeight:  300,
                    marginBottom: '1.25rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  アクセス
                </h2>
                <div style={{ border: '1px solid rgba(201,168,76,0.2)', overflow: 'hidden' }}>
                  <iframe
                    title={`${store.nameJa} アクセスマップ`}
                    width="100%"
                    height="360"
                    style={{ border: 0, display: 'block' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? 'YOUR_API_KEY'}&q=${store.lat},${store.lng}&zoom=16`}
                  />
                </div>
                <a
                  href={`https://www.google.com/maps?q=${store.lat},${store.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:       'inline-flex',
                    alignItems:    'center',
                    gap:           '0.4rem',
                    marginTop:     '0.75rem',
                    fontSize:      '0.72rem',
                    letterSpacing: '0.1em',
                    color:         '#C9A84C',
                  }}
                  className="hover:underline"
                >
                  Google Maps で開く →
                </a>
              </section>
            </div>

            {/* 右：サイドバー（予約・連絡） */}
            <aside className="lg:sticky lg:top-24 self-start flex flex-col gap-5">

              {/* 試着予約 */}
              {store.reservationUrl && (
                <div
                  className="p-6"
                  style={{
                    background:  '#1A1A1A',
                    borderTop:   '2px solid #C9A84C',
                  }}
                >
                  <h3
                    style={{
                      fontFamily:  'var(--font-serif-ja)',
                      fontSize:    '1rem',
                      fontWeight:  300,
                      color:       '#fff',
                      marginBottom: '0.5rem',
                    }}
                  >
                    試着のご予約
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1.25rem', lineHeight: 1.8 }}>
                    ご来店前の予約で、専任スタッフがゆっくりご対応します。
                  </p>
                  <a
                    href={store.reservationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display:       'block',
                      textAlign:     'center',
                      padding:       '0.75rem',
                      background:    '#C9A84C',
                      color:         '#fff',
                      fontSize:      '0.78rem',
                      letterSpacing: '0.12em',
                      transition:    'opacity 0.2s',
                    }}
                    className="hover:opacity-85"
                  >
                    予約する →
                  </a>
                </div>
              )}

              {/* 連絡手段 */}
              <div
                className="p-6 flex flex-col gap-3"
                style={{ background: '#F8F5F0', border: '1px solid rgba(201,168,76,0.15)' }}
              >
                <h3
                  style={{
                    fontFamily:  'var(--font-serif-ja)',
                    fontSize:    '0.9rem',
                    fontWeight:  300,
                    marginBottom: '0.25rem',
                  }}
                >
                  お問い合わせ
                </h3>
                <a
                  href={`tel:${store.tel}`}
                  style={{
                    display:       'flex',
                    alignItems:    'center',
                    gap:           '0.5rem',
                    fontSize:      '0.8rem',
                    color:         '#1A1A1A',
                    padding:       '0.6rem 1rem',
                    border:        '1px solid rgba(26,26,26,0.2)',
                    transition:    'all 0.2s',
                  }}
                  className="hover:border-gold hover:text-gold"
                >
                  📞 {store.tel}
                </a>
                {store.whatsapp && (
                  <a
                    href={`https://wa.me/${store.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display:       'flex',
                      alignItems:    'center',
                      gap:           '0.5rem',
                      fontSize:      '0.78rem',
                      padding:       '0.6rem 1rem',
                      background:    '#25D366',
                      color:         '#fff',
                      transition:    'opacity 0.2s',
                    }}
                    className="hover:opacity-85"
                  >
                    WhatsApp で相談
                  </a>
                )}
                {store.line && (
                  <a
                    href={store.line}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display:       'flex',
                      alignItems:    'center',
                      gap:           '0.5rem',
                      fontSize:      '0.78rem',
                      padding:       '0.6rem 1rem',
                      background:    '#06C755',
                      color:         '#fff',
                      transition:    'opacity 0.2s',
                    }}
                    className="hover:opacity-85"
                  >
                    LINE で予約
                  </a>
                )}
              </div>

              {/* 他の店舗 */}
              <div
                className="p-6"
                style={{ background: '#F8F5F0', border: '1px solid rgba(201,168,76,0.15)' }}
              >
                <h3
                  style={{
                    fontFamily:  'var(--font-serif-ja)',
                    fontSize:    '0.85rem',
                    fontWeight:  300,
                    marginBottom: '0.75rem',
                    color:       '#6B6560',
                  }}
                >
                  他の店舗
                </h3>
                <div className="flex flex-col gap-2">
                  {stores
                    .filter((s) => s.slug !== store.slug)
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/stores/${s.slug}/`}
                        className="flex items-center justify-between hover:text-gold transition-colors"
                      >
                        <span style={{ fontSize: '0.78rem', color: '#6B6560' }}>{s.nameJa}</span>
                        <span style={{ fontSize: '0.62rem', color: '#C9A84C' }}>
                          {regionLabels[s.region].ja}
                        </span>
                      </Link>
                    ))}
                </div>
                <Link
                  href="/stores/"
                  style={{
                    display:       'block',
                    textAlign:     'center',
                    marginTop:     '1rem',
                    fontSize:      '0.68rem',
                    letterSpacing: '0.15em',
                    color:         '#C9A84C',
                    paddingTop:    '0.75rem',
                    borderTop:     '1px solid rgba(201,168,76,0.15)',
                  }}
                >
                  全店舗を見る →
                </Link>
              </div>
            </aside>

          </div>
        </div>

      </main>
    </>
  );
}
