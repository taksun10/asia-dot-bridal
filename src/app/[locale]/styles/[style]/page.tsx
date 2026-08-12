import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { brands } from '@/lib/brands';
import type { Brand } from '@/types/brand';

// スタイルマスターデータ
const styleData: Record<string, {
  nameJa: string;
  nameEn: string;
  descJa: string;
  bgColor: string;
  keywords: string[];
}> = {
  romantic: {
    nameJa: 'ロマンティック・甘め',
    nameEn: 'Romantic & Sweet',
    descJa: '愛らしさと女性らしさを大切にしたいカップルへ。曲線的なフォルムとハートモチーフが特徴で、ガーリーな美しさと華やかさを兼ね備えたリングが揃います。初めてのブライダルリング選びでも、この世界観に惹かれる方は迷わずこのカテゴリから。',
    bgColor: '#F5EAEA',
    keywords: ['ロマンティック', 'ハートモチーフ', '曲線美', '女性らしい', 'ガーリー'],
  },
  elegant: {
    nameJa: 'エレガント・大人',
    nameEn: 'Elegant & Refined',
    descJa: '品格と存在感を重視するカップルへ。繊細なダイヤモンドセッティングと上質な素材が、成熟した大人の美しさを演出します。派手さよりも深み・格調を求める方に支持されています。',
    bgColor: '#F8F5F0',
    keywords: ['エレガント', 'パヴェダイヤ', '上質', '大人', 'ラグジュアリー'],
  },
  'japanese-modern': {
    nameJa: '和モダン・個性派',
    nameEn: 'Japanese Modern',
    descJa: '日本らしさとオリジナリティを求めるカップルへ。伝統的な日本の意匠を現代的な感覚で昇華したデザインは、他のブランドにはない独自の美意識を持ちます。個性的でありながら、飽きのこない深みが魅力。',
    bgColor: '#EEF0EB',
    keywords: ['和モダン', '侘び寂び', '年輪', '伝統色彩', '職人技'],
  },
  minimal: {
    nameJa: 'シンプル・誓い系',
    nameEn: 'Minimal & Pure',
    descJa: '装飾より誓いの純粋さを大切にしたいカップルへ。余分なものをすべて削ぎ落としたミニマルなフォルムが、永遠の約束を静かに語ります。毎日の生活に溶け込み、長く使い続けられるデザイン。',
    bgColor: '#F0EDE8',
    keywords: ['ミニマル', 'シンプル', '引き算の美学', '誓い', 'ピュア'],
  },
};

interface Props {
  params: { style: string };
}

export function generateStaticParams() {
  return Object.keys(styleData).map((style) => ({ style }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = styleData[params.style];
  if (!data) return {};
  return {
    title: `${data.nameJa}の日本ブライダルリング | dot·bridal ASIA`,
    description: `${data.descJa.slice(0, 120)}`,
  };
}

export default function StylePage({ params }: Props) {
  const data = styleData[params.style];
  if (!data) notFound();

  const matchedBrands = brands.filter((b) => b.style === params.style);
  const otherStyles = Object.entries(styleData).filter(([key]) => key !== params.style);

  return (
    <main className="pt-24 pb-20">

      {/* スタイルヒーロー */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: data.bgColor }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            fontFamily: 'var(--font-serif-en)',
            fontSize: 'clamp(6rem,14vw,12rem)',
            fontWeight: 300,
            color: 'rgba(0,0,0,0.04)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            letterSpacing: '0.2em',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}
        >
          {data.nameEn}
        </div>
        <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)] relative z-10">
          <span
            style={{
              fontFamily: 'var(--font-serif-en)',
              fontSize: '0.7rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            {data.nameEn}
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif-ja)',
              fontSize: 'clamp(2rem,4vw,3rem)',
              fontWeight: 300,
              lineHeight: 1.4,
              marginBottom: '1.5rem',
            }}
          >
            {data.nameJa}
          </h1>
          <p
            style={{
              fontSize: '0.9rem',
              color: '#6B6560',
              lineHeight: 1.9,
              maxWidth: '44ch',
              marginBottom: '2rem',
            }}
          >
            {data.descJa}
          </p>
          {/* キーワードタグ */}
          <div className="flex flex-wrap gap-2">
            {data.keywords.map((kw) => (
              <span
                key={kw}
                style={{
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  padding: '3px 12px',
                  border: '1px solid rgba(201,168,76,0.4)',
                  color: '#C9A84C',
                }}
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 該当ブランド */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)]">
          <h2
            style={{
              fontFamily: 'var(--font-serif-ja)',
              fontSize: 'clamp(1.3rem,2.5vw,1.8rem)',
              fontWeight: 300,
              marginBottom: '2.5rem',
            }}
          >
            このスタイルのブランド（{matchedBrands.length}社）
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matchedBrands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}/`}
                className="group p-8 transition-all duration-300 hover:shadow-md relative overflow-hidden"
                style={{ background: brand.color }}
              >
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: '#C9A84C' }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-serif-en)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.24em',
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
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    marginBottom: '0.75rem',
                  }}
                >
                  {brand.nameJa}
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#6B6560', lineHeight: 1.75, marginBottom: '1rem' }}>
                  {brand.descJa}
                </p>
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: '0.72rem', color: '#6B6560' }}>{brand.priceRange}</span>
                  <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.68rem', color: '#C9A84C' }}>
                    詳細を見る →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 他のスタイルへの導線（内部リンク） */}
      <section className="py-12" style={{ background: '#F8F5F0' }}>
        <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)]">
          <h2
            style={{
              fontFamily: 'var(--font-serif-ja)',
              fontSize: '1.1rem',
              fontWeight: 300,
              marginBottom: '1.5rem',
              color: '#6B6560',
            }}
          >
            他のスタイルも見る
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherStyles.map(([key, style]) => (
              <Link
                key={key}
                href={`/styles/${key}/`}
                className="group flex items-center justify-between p-5 transition-all hover:bg-white"
                style={{ background: style.bgColor }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif-en)',
                      fontSize: '0.58rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#C9A84C',
                      display: 'block',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {style.nameEn}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif-ja)',
                      fontSize: '0.9rem',
                      fontWeight: 300,
                    }}
                  >
                    {style.nameJa}
                  </span>
                </div>
                <span style={{ color: '#C9A84C', fontSize: '0.8rem' }} className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
