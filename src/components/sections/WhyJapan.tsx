'use client';

import { useFadeUp } from '@/hooks/useInView';

const reasons = [
  {
    num: '01',
    titleJa: '百年の職人工芸',
    body: '日本のブライダル職人は伝統の金工技術を継承し、一枚一枚を数十もの工程で丁寧に仕上げます。細部にこそ、比類なき品質が宿っています。',
  },
  {
    num: '02',
    titleJa: '独自の美意識',
    body: '「物哀」と「侘び寂び」が育んだ東洋の美学は、ヨーロッパブランドとは一線を画す静謐な輝きをリングに与えます。派手でなく、深い美しさ。',
  },
  {
    num: '03',
    titleJa: '変わらぬ品質保証',
    body: 'Pt950プラチナと厳選された宝石を採用。日本国内の品質基準を満たした全ブランドが、永遠の誓いにふさわしい耐久性を保証します。',
  },
];

export default function WhyJapan() {
  const title = useFadeUp(0);

  return (
    <section style={{ padding: 'clamp(5rem,10vw,8rem) 0', background: 'var(--color-ink)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* 背景テキスト */}
      <div aria-hidden="true" style={{ position: 'absolute', fontFamily: 'var(--font-serif-en)', fontSize: 'clamp(8rem,18vw,16rem)', fontWeight: 300, color: 'rgba(255,255,255,0.025)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', letterSpacing: '0.3em', whiteSpace: 'nowrap', pointerEvents: 'none' }}>
        JAPAN
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1.25rem,5vw,4rem)', position: 'relative', zIndex: 1 }}>
        <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold-light)', display: 'block', marginBottom: '0.75rem' }}>
          Why Japan
        </span>
        <span style={{ display: 'block', width: '48px', height: '1px', background: 'var(--color-gold)', marginBottom: '1.5rem' }} />

        <h2 ref={title.ref as React.RefObject<HTMLHeadingElement>} style={{ ...title.style, fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.6rem,3vw,2.6rem)', fontWeight: 300, lineHeight: 1.6, marginBottom: '3.5rem' }}>
          日本のリングを選ぶ<br />3つの理由
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '3rem' }}>
          {reasons.map(({ num, titleJa, body }, i) => {
            const item = useFadeUp(i * 100);
            return (
              <div key={num} ref={item.ref as React.RefObject<HTMLDivElement>} style={item.style}>
                <div style={{ fontFamily: 'var(--font-serif-en)', fontSize: '2.8rem', fontWeight: 300, color: 'var(--color-gold)', opacity: 0.45, lineHeight: 1, marginBottom: '1rem' }}>{num}</div>
                <h3 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '1rem', fontWeight: 400, marginBottom: '0.75rem' }}>{titleJa}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.9 }}>{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
