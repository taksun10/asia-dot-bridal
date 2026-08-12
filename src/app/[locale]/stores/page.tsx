'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { stores, getStoresByRegion, regionLabels } from '@/lib/stores';
import { brands as allBrands } from '@/lib/brands';
import type { StoreRegion } from '@/types/store';

const regions: StoreRegion[] = ['japan', 'hongkong', 'taiwan'];

export default function StoresPage() {
  const [activeRegion, setActiveRegion] = useState<StoreRegion>('japan');
  const filteredStores = getStoresByRegion(activeRegion);

  // 地図の中心座標（地域別）
  const mapCenters: Record<StoreRegion, { lat: number; lng: number; zoom: number }> = {
    japan:    { lat: 35.6762, lng: 139.6503, zoom: 6 },
    hongkong: { lat: 22.3193, lng: 114.1694, zoom: 12 },
    taiwan:   { lat: 25.0330, lng: 121.5654, zoom: 12 },
  };
  const center = mapCenters[activeRegion];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">

      {/* ページヘッダー */}
      <div
        className="py-16 relative overflow-hidden"
        style={{ background: '#1A1A1A' }}
      >
        <div
          aria-hidden="true"
          style={{
            position:    'absolute',
            fontFamily:  'var(--font-serif-en)',
            fontSize:    'clamp(6rem,16vw,13rem)',
            fontWeight:  300,
            color:       'rgba(255,255,255,0.025)',
            top: '50%', left: '50%',
            transform:   'translate(-50%,-50%)',
            letterSpacing: '0.2em',
            whiteSpace:  'nowrap',
            pointerEvents: 'none',
          }}
        >
          STORES
        </div>
        <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)] relative z-10">
          <span
            style={{
              fontFamily:  'var(--font-serif-en)',
              fontSize:    '0.7rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color:       '#C9A84C',
              display:     'block',
              marginBottom: '0.75rem',
            }}
          >
            Store Locator
          </span>
          <h1
            style={{
              fontFamily:  'var(--font-serif-ja)',
              fontSize:    'clamp(1.8rem,3.5vw,3rem)',
              fontWeight:  300,
              color:       '#fff',
              lineHeight:  1.4,
              marginBottom: '0.75rem',
            }}
          >
            取り扱い店舗
          </h1>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)' }}>
            日本・香港・台湾の{stores.length}店舗でご試着いただけます
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)] mt-10">

        {/* 地域タブ */}
        <div className="flex gap-0 mb-10 border-b border-gold/20">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className="transition-all duration-200"
              style={{
                fontFamily:    'var(--font-serif-ja)',
                fontSize:      '0.85rem',
                padding:       '0.75rem 2rem',
                color:         activeRegion === region ? '#C9A84C' : '#6B6560',
                background:    'none',
                border:        'none',
                borderBottom:  activeRegion === region ? '2px solid #C9A84C' : '2px solid transparent',
                cursor:        'pointer',
                letterSpacing: '0.06em',
              }}
            >
              {regionLabels[region].ja}
              <span
                style={{
                  marginLeft:  '0.5rem',
                  fontSize:    '0.65rem',
                  color:       activeRegion === region ? '#C9A84C' : 'rgba(107,101,96,0.5)',
                }}
              >
                {getStoresByRegion(region).length}店
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* 左：店舗カード一覧 */}
          <div className="flex flex-col gap-5">
            {filteredStores.map((store) => {
              // 取り扱いブランド情報を取得
              const storeBrands = allBrands.filter((b) =>
                store.brands.includes(b.slug)
              );

              return (
                <div
                  key={store.slug}
                  className="group"
                  style={{
                    background:  '#fff',
                    border:      '1px solid rgba(201,168,76,0.15)',
                    transition:  'border-color 0.3s, box-shadow 0.3s',
                  }}
                >
                  {/* メイン店舗バッジ */}
                  {store.isMainStore && (
                    <div
                      style={{
                        background:    '#C9A84C',
                        padding:       '4px 12px',
                        fontSize:      '0.6rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color:         '#fff',
                        display:       'inline-block',
                      }}
                    >
                      Main Store
                    </div>
                  )}

                  <div className="p-6">
                    {/* 店舗名 */}
                    <div className="mb-4">
                      <span
                        style={{
                          fontFamily:    'var(--font-serif-en)',
                          fontSize:      '0.6rem',
                          letterSpacing: '0.22em',
                          textTransform: 'uppercase',
                          color:         '#C9A84C',
                          display:       'block',
                          marginBottom:  '0.3rem',
                        }}
                      >
                        {store.prefecture}
                      </span>
                      <h2
                        style={{
                          fontFamily: 'var(--font-serif-ja)',
                          fontSize:   '1.1rem',
                          fontWeight: 400,
                          color:      '#1A1A1A',
                        }}
                      >
                        {store.nameJa}
                      </h2>
                    </div>

                    {/* 基本情報 */}
                    <dl className="flex flex-col gap-2 mb-5">
                      {[
                        { label: '住所', value: store.addressJa },
                        { label: '電話', value: store.tel },
                        { label: '営業', value: store.hoursJa },
                        { label: '定休', value: store.closedDaysJa },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex gap-3">
                          <dt
                            style={{
                              fontSize:      '0.62rem',
                              letterSpacing: '0.1em',
                              color:         '#C9A84C',
                              width:         '32px',
                              flexShrink:    0,
                              paddingTop:    '2px',
                            }}
                          >
                            {label}
                          </dt>
                          <dd style={{ fontSize: '0.82rem', color: '#6B6560', lineHeight: 1.6 }}>
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    {/* 取り扱いブランドタグ */}
                    <div className="mb-5">
                      <span
                        style={{
                          fontSize:      '0.6rem',
                          letterSpacing: '0.12em',
                          color:         '#C9A84C',
                          display:       'block',
                          marginBottom:  '0.5rem',
                        }}
                      >
                        取り扱いブランド
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {storeBrands.map((brand) => (
                          <Link
                            key={brand.slug}
                            href={`/brands/${brand.slug}/`}
                            style={{
                              fontSize:      '0.65rem',
                              letterSpacing: '0.08em',
                              padding:       '3px 10px',
                              border:        '1px solid rgba(201,168,76,0.35)',
                              color:         '#6B6560',
                              transition:    'all 0.2s',
                            }}
                            className="hover:border-gold hover:text-gold"
                          >
                            {brand.nameJa}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* 備考 */}
                    {store.noteJa && (
                      <p
                        style={{
                          fontSize:      '0.75rem',
                          color:         '#C9A84C',
                          background:    'rgba(201,168,76,0.06)',
                          padding:       '8px 12px',
                          marginBottom:  '1rem',
                          lineHeight:    1.7,
                        }}
                      >
                        ℹ︎ {store.noteJa}
                      </p>
                    )}

                    {/* アクション */}
                    <div className="flex gap-3 flex-wrap">
                      <Link
                        href={`/stores/${store.slug}/`}
                        style={{
                          fontSize:      '0.72rem',
                          letterSpacing: '0.12em',
                          padding:       '0.6rem 1.4rem',
                          background:    '#1A1A1A',
                          color:         '#fff',
                          transition:    'background 0.2s',
                        }}
                        className="hover:bg-gold"
                      >
                        店舗詳細 →
                      </Link>
                      {store.reservationUrl && (
                        <a
                          href={store.reservationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize:      '0.72rem',
                            letterSpacing: '0.12em',
                            padding:       '0.6rem 1.4rem',
                            border:        '1px solid #C9A84C',
                            color:         '#C9A84C',
                            transition:    'all 0.2s',
                          }}
                          className="hover:bg-gold hover:text-white"
                        >
                          試着予約
                        </a>
                      )}
                      {store.whatsapp && (
                        <a
                          href={`https://wa.me/${store.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize:      '0.72rem',
                            letterSpacing: '0.12em',
                            padding:       '0.6rem 1.4rem',
                            background:    '#25D366',
                            color:         '#fff',
                          }}
                          className="hover:opacity-85 transition-opacity"
                        >
                          WhatsApp
                        </a>
                      )}
                      {store.line && (
                        <a
                          href={store.line}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize:      '0.72rem',
                            letterSpacing: '0.12em',
                            padding:       '0.6rem 1.4rem',
                            background:    '#06C755',
                            color:         '#fff',
                          }}
                          className="hover:opacity-85 transition-opacity"
                        >
                          LINE
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 右：Google Maps埋め込み（スティッキー） */}
          <div className="lg:sticky lg:top-24">
            <div
              style={{
                border:        '1px solid rgba(201,168,76,0.2)',
                overflow:      'hidden',
              }}
            >
              <iframe
                title={`${regionLabels[activeRegion].ja}の店舗地図`}
                width="100%"
                height="480"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/view?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? 'YOUR_API_KEY'}&center=${center.lat},${center.lng}&zoom=${center.zoom}&maptype=roadmap`}
              />
            </div>
            {/* 各店舗のピン凡例 */}
            <div
              className="p-4 flex flex-col gap-2"
              style={{ background: '#F8F5F0', borderTop: '1px solid rgba(201,168,76,0.15)' }}
            >
              {filteredStores.map((store) => (
                <Link
                  key={store.slug}
                  href={`/stores/${store.slug}/`}
                  className="flex items-center gap-3 hover:text-gold transition-colors"
                >
                  <span
                    style={{
                      width:        '8px',
                      height:       '8px',
                      borderRadius: '50%',
                      background:   '#C9A84C',
                      flexShrink:   0,
                    }}
                  />
                  <span style={{ fontSize: '0.78rem', color: '#6B6560' }}>
                    {store.nameJa}
                  </span>
                  <span style={{ fontSize: '0.65rem', color: '#C9A84C', marginLeft: 'auto' }}>
                    {store.prefecture}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}
