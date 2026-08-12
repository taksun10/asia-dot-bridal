import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '株式会社アグローヴについて | dot·bridal ASIA',
  description: '株式会社アグローヴが運営する日本ブライダルリングブランドポータル「dot·bridal ASIA」の運営会社情報。8ブランドの背景にある職人技術と品質へのこだわりを紹介。',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
      <div className="max-w-[860px] mx-auto px-[clamp(1.25rem,5vw,4rem)]">

        {/* ヘッダー */}
        <div className="py-14 border-b border-gold/20 mb-16">
          <span className="block font-serif-en text-xs tracking-[0.25em] uppercase text-gold mb-3">About</span>
          <h1 className="font-serif-ja text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-relaxed mb-4">
            アグローヴについて
          </h1>
          <p className="text-mid text-sm leading-relaxed">
            株式会社アグローヴは、日本のブライダルジュエリー業界で複数のブランドを展開する専門企業です。香港・台湾のカップルに向けた本ポータルサイト「dot·bridal ASIA」を通じて、日本の職人技術と美意識を世界へ届けます。
          </p>
        </div>

        {/* ミッション */}
        <section className="mb-16">
          <span className="block font-serif-en text-xs tracking-[0.25em] uppercase text-gold mb-3">Our Mission</span>
          <span className="block w-12 h-px mb-6" style={{ background: '#C9A84C' }} />
          <h2 className="font-serif-ja text-2xl font-light mb-6">
            「日本の職人仕事を、<br />世界中のカップルへ」
          </h2>
          <p className="text-sm text-mid leading-relaxed mb-4">
            日本のブライダルリングには、世界に誇れる品質と美意識があります。しかし、その価値は長い間、言語・流通・情報の壁によって海外のカップルに届いていませんでした。
          </p>
          <p className="text-sm text-mid leading-relaxed">
            dot·bridal ASIAは、その壁を取り除くために生まれました。香港・台湾をはじめとするアジアのカップルが、日本の職人ブランドに直接アクセスできる窓口として機能します。
          </p>
        </section>

        {/* ブランド一覧 */}
        <section className="mb-16">
          <span className="block font-serif-en text-xs tracking-[0.25em] uppercase text-gold mb-3">Our 8 Brands</span>
          <span className="block w-12 h-px mb-6" style={{ background: '#C9A84C' }} />
          <h2 className="font-serif-ja text-2xl font-light mb-6">9つの異なる世界観</h2>
          <p className="text-sm text-mid leading-relaxed mb-8">
            アグローヴが運営する9ブランドは、それぞれ独自のコンセプトと美学を持ちます。「ロマンティック」「エレガント」「和モダン」「ミニマル」の4スタイルにわたって展開し、どのカップルのストーリーにも寄り添えるラインナップを揃えています。
          </p>
          <Link
            href="/brands/"
            className="inline-flex items-center gap-2 text-sm tracking-widest text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
          >
            全ブランドを見る →
          </Link>
        </section>

        {/* 品質へのこだわり */}
        <section className="mb-16 p-8" style={{ background: '#1A1A1A', color: '#fff' }}>
          <span
            style={{
              fontFamily: 'var(--font-serif-en)',
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            Quality Standard
          </span>
          <h2 className="font-serif-ja text-xl font-light mb-6">品質へのこだわり</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Pt950プラチナを標準採用', body: 'すべてのブランドで純度95%のPt950プラチナを基本素材として採用。業界最高水準の素材を標準で提供します。' },
              { title: 'JIS規格準拠の品質管理', body: '日本工業規格（JIS）に基づく品質管理を全ブランドで実施。純度・重量・仕上げの全工程を国内基準で管理。' },
              { title: '職人手仕上げ', body: '機械工程のみでは作れない繊細な仕上がりを実現するため、最終工程は必ず職人の手作業で完成させます。' },
              { title: '国際アフターケア対応', body: '香港・台湾在住のお客様も国際郵送でのサイズ直し・研磨対応が可能。購入後も安心のサポート体制。' },
            ].map(({ title, body }) => (
              <div key={title}>
                <h3 className="text-sm font-normal mb-2" style={{ color: '#C9A84C' }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 会社情報 */}
        <section>
          <span className="block font-serif-en text-xs tracking-[0.25em] uppercase text-gold mb-3">Company Info</span>
          <span className="block w-12 h-px mb-6" style={{ background: '#C9A84C' }} />
          <dl className="flex flex-col gap-4">
            {[
              { dt: '会社名',    dd: '株式会社アグローヴ' },
              { dt: '英語表記', dd: 'Agurove Co., Ltd.' },
              { dt: '事業内容', dd: 'ブライダルジュエリーブランドの企画・製造・販売' },
              { dt: '海外事業', dd: 'dot·bridal ASIA（香港・台湾向け公式ポータル）' },
              { dt: '公式サイト', dd: 'dot-bridal.com' },
            ].map(({ dt, dd }) => (
              <div key={dt} className="flex gap-6 pb-4 border-b border-gold/15">
                <dt className="text-xs text-gold w-[80px] flex-shrink-0">{dt}</dt>
                <dd className="text-sm text-mid">{dd}</dd>
              </div>
            ))}
          </dl>
        </section>

      </div>
    </main>
      <Footer />
    </>
  );
}
