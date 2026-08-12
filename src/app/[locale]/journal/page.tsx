import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';
import { guideArticles } from '@/lib/guide-content';
import { brands } from '@/lib/brands';

export const metadata: Metadata = {
  title: 'ジャーナル｜日本ブライダルリングの知識と選び方 | dot·bridal ASIA',
  description: '日本製ブライダルリングの選び方・素材・ブランド比較・予算ガイドなど、香港・台湾のカップルに役立つ情報を発信。',
};

// 記事カテゴリ定義
const categories = [
  { slug: 'brand-guide',   label: 'ブランドガイド' },
  { slug: 'comparison',    label: '比較・検討' },
  { slug: 'material',      label: '素材・技術' },
  { slug: 'buying-guide',  label: '購買ガイド' },
  { slug: 'journal',       label: 'ジャーナル' },
];

// 全記事リスト（静的コンテンツ＋ガイド記事）
const allArticles = [
  {
    slug:     'brand-ranking',
    category: 'brand-guide',
    titleJa:  '2026年版｜日本ブライダルリングブランド完全比較ガイド',
    excerptJa: '香港・台湾のカップルが日本のブライダルリングを選ぶ際に知っておくべき、8ブランドの特徴・価格帯・世界観を一挙に比較・解説します。',
    readMin:  8,
    href:     '/guide/brand-ranking/',
    bgColor:  '#F5EAEA',
    featured: true,
  },
  {
    slug:     'japan-vs-europe',
    category: 'comparison',
    titleJa:  '日本製ブライダルリングとヨーロッパブランドの違い｜工芸・美学・価格を徹底比較',
    excerptJa: 'Cartier、Tiffany & Co.などのヨーロッパ系ブランドと日本の職人ブランドを6つの軸で比較。どちらが向いているかを整理します。',
    readMin:  6,
    href:     '/guide/japan-vs-europe/',
    bgColor:  '#EEF0EB',
    featured: false,
  },
  {
    slug:     'pt950',
    category: 'material',
    titleJa:  'Pt950とPt900の違いとは？プラチナ純度ガイド完全版',
    excerptJa: 'ブライダルリングに使われるPt950・Pt900・18Kホワイトゴールドを徹底比較。硬度・耐久性・価格の違いを分かりやすく解説。',
    readMin:  5,
    href:     '/guide/pt950/',
    bgColor:  '#F0EDE8',
    featured: false,
  },
  ...guideArticles.map((a) => ({
    slug:     a.slug,
    category: 'buying-guide',
    titleJa:  a.titleJa,
    excerptJa: a.descJa,
    readMin:  5,
    href:     `/guide/${a.slug}/`,
    bgColor:  '#F8F5F0',
    featured: false,
  })),
];

export default function JournalPage() {
  const featured = allArticles.find((a) => a.featured)!;
  const others   = allArticles.filter((a) => !a.featured);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
      <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)]">

        {/* ページヘッダー */}
        <div className="py-14 border-b border-gold/20 mb-12">
          <span className="block font-serif-en text-xs tracking-[0.25em] uppercase text-gold mb-3">Journal</span>
          <h1 className="font-serif-ja text-[clamp(1.8rem,3vw,2.8rem)] font-light mb-3">
            日本ブライダルリングの<br />知識と選び方
          </h1>
          <p className="text-mid text-sm leading-relaxed max-w-prose">
            香港・台湾のカップルが後悔しないリング選びをするための、職人技術・素材・ブランド比較・購買ガイドを発信しています。
          </p>
        </div>

        {/* カテゴリフィルター */}
        <div className="flex flex-wrap gap-2 mb-12">
          <span
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.1em',
              padding: '4px 14px',
              background: '#1A1A1A',
              color: '#fff',
            }}
          >
            すべて
          </span>
          {categories.map(({ slug, label }) => (
            <span
              key={slug}
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                padding: '4px 14px',
                border: '1px solid rgba(201,168,76,0.3)',
                color: '#6B6560',
                cursor: 'pointer',
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* フィーチャー記事 */}
        <Link
          href={featured.href}
          className="group block mb-12 p-8 md:p-12 relative overflow-hidden"
          style={{ background: featured.bgColor }}
        >
          <span
            className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
            style={{ background: '#C9A84C' }}
          />
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '3px 10px',
                  background: '#C9A84C',
                  color: '#fff',
                }}
              >
                おすすめ
              </span>
              <span style={{ fontSize: '0.65rem', color: '#C9A84C', letterSpacing: '0.15em' }}>
                ブランドガイド
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif-ja)',
                fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                fontWeight: 300,
                lineHeight: 1.5,
                marginBottom: '1rem',
              }}
            >
              {featured.titleJa}
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#6B6560', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              {featured.excerptJa}
            </p>
            <span
              style={{
                fontFamily: 'var(--font-serif-en)',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                color: '#C9A84C',
              }}
            >
              読む（約{featured.readMin}分） →
            </span>
          </div>
        </Link>

        {/* 記事グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((article) => (
            <Link
              key={article.slug}
              href={article.href}
              className="group flex flex-col relative overflow-hidden"
            >
              {/* サムネイルプレースホルダー */}
              <div
                className="aspect-[3/2] transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ background: article.bgColor }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span
                    style={{
                      fontFamily: 'var(--font-serif-en)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'rgba(201,168,76,0.5)',
                    }}
                  >
                    {categories.find(c => c.slug === article.category)?.label ?? 'Guide'}
                  </span>
                </div>
              </div>
              <div className="pt-4 pb-2 flex flex-col gap-2 flex-1">
                <span
                  style={{
                    fontFamily: 'var(--font-serif-en)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                  }}
                >
                  {categories.find(c => c.slug === article.category)?.label}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-ja)',
                    fontSize: '0.95rem',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: '#1A1A1A',
                  }}
                  className="group-hover:text-gold transition-colors"
                >
                  {article.titleJa}
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#6B6560', lineHeight: 1.75 }}>
                  {article.excerptJa.slice(0, 80)}…
                </p>
                <span
                  className="mt-auto"
                  style={{
                    fontFamily: 'var(--font-serif-en)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: '#C9A84C',
                  }}
                >
                  読む（約{article.readMin}分） →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ブランドへの導線 */}
        <div className="mt-20 pt-12 border-t border-gold/20 text-center">
          <p className="font-serif-ja text-lg font-light mb-2">記事を読んで気になるブランドが見つかりましたか？</p>
          <p className="text-sm text-mid mb-6">専門スタッフがブランド選びをサポートします。</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/brands/" className="px-6 py-3 bg-ink text-white text-sm tracking-wide hover:bg-gold transition-colors">
              全ブランドを見る →
            </Link>
            <Link href="/contact/" className="px-6 py-3 border border-ink text-ink text-sm tracking-wide hover:bg-ink hover:text-white transition-all">
              無料相談する
            </Link>
          </div>
        </div>

      </div>
    </main>
      <Footer />
    </>
  );
}
