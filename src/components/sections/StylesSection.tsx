'use client';

import Link from 'next/link';
import { useFadeUp } from '@/hooks/useInView';

const styles = [
  { slug: 'romantic',        label: 'ロマンティック・甘め', en: 'Romantic',        bg: 'linear-gradient(135deg,#e8c4c4,#f0dada)', dark: false },
  { slug: 'elegant',         label: 'エレガント・大人',      en: 'Elegant',         bg: 'linear-gradient(135deg,#2a2420,#3d3028)', dark: true  },
  { slug: 'japanese-modern', label: '和モダン・個性派',      en: 'Japanese Modern', bg: 'linear-gradient(135deg,#c5cbb5,#d8dece)', dark: false },
  { slug: 'minimal',         label: 'シンプル・誓い系',      en: 'Minimal',         bg: 'linear-gradient(135deg,#e8e4dc,#f0ece4)', dark: false },
];

export default function StylesSection() {
  const title = useFadeUp(0);

  return (
    <section style={{ padding: 'clamp(5rem,10vw,8rem) 0', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1.25rem,5vw,4rem)' }}>
        <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '0.75rem' }}>
          Explore by Style
        </span>
        <span style={{ display: 'block', width: '48px', height: '1px', background: 'var(--color-gold)', marginBottom: '1.5rem' }} />
        <h2
          ref={title.ref as React.RefObject<HTMLHeadingElement>}
          style={{ ...title.style, fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.5rem,2.8vw,2.2rem)', fontWeight: 300, marginBottom: 'clamp(2.5rem,5vw,4rem)' }}
        >
          スタイルでリングを探す
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2px' }}>
          {styles.map(({ slug, label, en, bg, dark }) => (
            <Link
              key={slug}
              href={`/styles/${slug}/`}
              className="group"
              style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', textDecoration: 'none' }}
            >
              <div style={{ position: 'absolute', inset: 0, background: bg, transition: 'transform 0.6s ease' }} className="group-hover:scale-[1.04]" />
              <div style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.4rem' }}>{en}</div>
                <div style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.1rem,2.2vw,1.5rem)', fontWeight: 300, color: dark ? '#fff' : 'var(--color-ink)' }}>{label}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
