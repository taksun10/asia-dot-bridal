import Link from 'next/link';
import { getStoresByBrand, regionLabels } from '@/lib/stores';

interface Props {
  brandSlug: string;
}

export default function BrandStores({ brandSlug }: Props) {
  const storesForBrand = getStoresByBrand(brandSlug);

  if (storesForBrand.length === 0) return null;

  return (
    <section className="py-[clamp(4rem,8vw,6rem)]" style={{ background: '#F8F5F0' }}>
      <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)]">
        <span
          style={{
            fontFamily:    'var(--font-serif-en)',
            fontSize:      '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color:         '#C9A84C',
            display:       'block',
            marginBottom:  '0.5rem',
          }}
        >
          Where to Try
        </span>
        <span className="block w-12 h-px mb-6" style={{ background: '#C9A84C' }} />
        <h2
          style={{
            fontFamily:  'var(--font-serif-ja)',
            fontSize:    'clamp(1.2rem,2vw,1.6rem)',
            fontWeight:  300,
            marginBottom: '2rem',
          }}
        >
          このブランドを試着できる店舗
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {storesForBrand.map((store) => (
            <Link
              key={store.slug}
              href={`/stores/${store.slug}/`}
              className="group flex flex-col gap-3 p-5 transition-all hover:shadow-md"
              style={{
                background: '#fff',
                border:     '1px solid rgba(201,168,76,0.15)',
              }}
            >
              {/* 地域バッジ */}
              <span
                style={{
                  fontSize:      '0.58rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  padding:       '2px 8px',
                  border:        '1px solid rgba(201,168,76,0.35)',
                  color:         '#C9A84C',
                  alignSelf:     'flex-start',
                }}
              >
                {regionLabels[store.region].ja}
              </span>

              {/* 店舗名 */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-ja)',
                    fontSize:   '0.95rem',
                    fontWeight: 400,
                    color:      '#1A1A1A',
                    marginBottom: '0.25rem',
                  }}
                >
                  {store.nameJa}
                </h3>
                <p style={{ fontSize: '0.75rem', color: '#6B6560' }}>
                  {store.addressJa}
                </p>
              </div>

              {/* 営業時間 */}
              <p style={{ fontSize: '0.72rem', color: '#6B6560' }}>
                {store.hoursJa}（定休：{store.closedDaysJa}）
              </p>

              {/* 詳細リンク */}
              <span
                style={{
                  marginTop:     'auto',
                  fontSize:      '0.68rem',
                  letterSpacing: '0.15em',
                  color:         '#C9A84C',
                }}
                className="group-hover:gap-2 transition-all"
              >
                店舗詳細・予約 →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/stores/"
            style={{
              fontSize:      '0.72rem',
              letterSpacing: '0.18em',
              color:         '#C9A84C',
              borderBottom:  '1px solid rgba(201,168,76,0.4)',
              paddingBottom: '2px',
            }}
            className="hover:border-gold"
          >
            全店舗一覧を見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
