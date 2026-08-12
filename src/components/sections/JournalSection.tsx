'use client';

import Link from 'next/link';
import { useFadeUp } from '@/hooks/useInView';

const articles = [
  { href: '/guide/brand-ranking/', cat: 'Brand Guide', title: '2026年版｜日本ブライダルリングブランド完全比較ガイド', bg: 'linear-gradient(135deg,#e8c4c4,#f0dada)' },
  { href: '/guide/japan-vs-europe/', cat: 'Comparison',  title: '日本製リングとヨーロッパブランドの違い｜職人技と美学の徹底比較', bg: 'linear-gradient(135deg,#c5cbb5,#d8dece)' },
  { href: '/guide/pt950/',           cat: 'Material',    title: 'Pt950とPt900の違いとは？プラチナ純度ガイド完全版', bg: 'linear-gradient(135deg,#d4cfc7,#e8e4dc)' },
];

export default function JournalSection() {
  const title = useFadeUp(0);

  return (
    <section style={{ padding: 'clamp(5rem,10vw,8rem) 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1.25rem,5vw,4rem)' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(2.5rem,5vw,4rem)', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '0.75rem' }}>Journal</span>
            <span style={{ display: 'block', width: '48px', height: '1px', background: 'var(--color-gold)', marginBottom: '1.5rem' }} />
            <h2
              ref={title.ref as React.RefObject<HTMLHeadingElement>}
              style={{ ...title.style, fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontWeight: 300 }}
            >
              日本のブライダルリングについて、<br />知りたいことすべて
            </h2>
          </div>
          <Link href="/journal/" style={{ fontSize: '0.75rem', letterSpacing: '0.18em', color: 'var(--color-gold)', borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: '2px', whiteSpace: 'nowrap' }}>
            全記事を見る →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>
          {articles.map(({ href, cat, title: t, bg }, i) => {
            const item = useFadeUp(i * 100);
            return (
              <Link key={href} href={href} className="group" ref={item.ref as React.RefObject<HTMLAnchorElement>} style={{ ...item.style, display: 'flex', flexDirection: 'column', gap: '0.9rem', textDecoration: 'none' }}>
                {/* サムネイル */}
                <div style={{ aspectRatio: '3/2', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: bg, transition: 'transform 0.5s ease' }} className="group-hover:scale-105" />
                </div>
                <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>{cat}</span>
                <h3 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.95rem', fontWeight: 400, lineHeight: 1.65, color: 'var(--color-ink)' }} className="group-hover:text-gold transition-colors">{t}</h3>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-mid)', marginTop: 'auto' }}>2026.08</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
