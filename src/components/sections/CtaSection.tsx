'use client';

import Link from 'next/link';
import { useFadeUp } from '@/hooks/useInView';

export default function CtaSection() {
  const title = useFadeUp(0);

  return (
    <section style={{ padding: 'clamp(5rem,10vw,8rem) 0', textAlign: 'center', background: 'var(--color-sakura-pale)', position: 'relative', overflow: 'hidden' }}>
      {/* 装飾円 */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '380px', height: '380px', border: '1px solid rgba(201,168,76,0.08)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 clamp(1.25rem,5vw,4rem)', position: 'relative', zIndex: 1 }}>
        <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold)', display: 'block', marginBottom: '0.75rem' }}>Contact Us</span>
        <span style={{ display: 'block', width: '48px', height: '1px', background: 'var(--color-gold)', margin: '0 auto 1.5rem' }} />

        <h2
          ref={title.ref as React.RefObject<HTMLHeadingElement>}
          style={{ ...title.style, fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(1.6rem,3vw,2.6rem)', fontWeight: 300, lineHeight: 1.6, marginBottom: '1rem' }}
        >
          あなたたちに合うリングを<br />一緒に探しましょう
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--color-mid)', marginBottom: '3rem' }}>
          ブライダルリングの専門スタッフが、ブランド選びからご相談に応じます。
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2rem', background: '#25D366', color: '#fff', fontSize: '0.78rem', letterSpacing: '0.1em', transition: 'opacity 0.2s' }}
          >
            WhatsApp（香港向け）
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LINE_URL ?? 'https://line.me'}
            target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2rem', background: '#06C755', color: '#fff', fontSize: '0.78rem', letterSpacing: '0.1em', transition: 'opacity 0.2s' }}
          >
            LINE（台湾向け）
          </a>
          <Link
            href="/contact/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 2rem', border: '1px solid var(--color-ink)', color: 'var(--color-ink)', fontSize: '0.78rem', letterSpacing: '0.1em', transition: 'all 0.2s' }}
          >
            ✉ メールで相談
          </Link>
        </div>
      </div>
    </section>
  );
}
