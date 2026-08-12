'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '香港・台湾からでも日本のブライダルリングを購入できますか？',
    a: 'はい、可能です。お問い合わせフォームまたはWhatsApp/LINEよりご連絡いただければ、各ブランドのご注文方法や配送手続きについてご案内します。',
  },
  {
    q: '日本製ブライダルリングの価格帯はどのくらいですか？',
    a: 'ブランドやデザインによって異なりますが、ペアリングの目安はHK$8,000〜HK$50,000以上です。各ブランドへのお問い合わせで詳細なお見積もりをご案内します。',
  },
  {
    q: 'Pt950とは何ですか？ホワイトゴールドとの違いは？',
    a: 'Pt950はプラチナ純度95%を意味します。日本のブライダルリングで最も多く使われる素材で、18Kホワイトゴールドと比べて硬度・耐食性・光沢の持続性が優れています。',
  },
  {
    q: '日本の実店舗で試着することはできますか？',
    a: 'はい。日本旅行の際に各ブランドの実店舗でご試着いただけます。ご希望の方には事前予約のサポートも行っていますので、お気軽にご相談ください。',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: 'clamp(5rem,10vw,8rem) 0', background: 'var(--color-ink)', color: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1.25rem,5vw,4rem)' }}>
        <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold-light)', display: 'block', marginBottom: '0.75rem' }}>FAQ</span>
        <span style={{ display: 'block', width: '48px', height: '1px', background: 'var(--color-gold)', marginBottom: 'clamp(2.5rem,5vw,4rem)' }} />

        <div>
          {faqs.map(({ q, a }, i) => (
            <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '1.75rem 0', ...(i === faqs.length - 1 ? { borderBottom: '1px solid rgba(255,255,255,0.1)' } : {}) }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
              >
                <span style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.95rem', fontWeight: 400, color: open === i ? 'var(--color-gold)' : '#fff', transition: 'color 0.2s' }}>
                  {q}
                </span>
                <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '1.3rem', fontWeight: 300, color: 'var(--color-gold)', flexShrink: 0, transition: 'transform 0.3s', transform: open === i ? 'rotate(45deg)' : 'none' }}>
                  +
                </span>
              </button>
              {open === i && (
                <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, marginTop: '1rem', maxWidth: '68ch' }}>
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
