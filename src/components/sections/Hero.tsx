'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const sakuraRef = useRef<HTMLDivElement>(null);

  // 桜パーティクル生成
  useEffect(() => {
    const container = sakuraRef.current;
    if (!container) return;
    const particles = [
      { left: '12%', duration: '9s', delay: '0s',   size: '6px' },
      { left: '38%', duration: '12s', delay: '2.5s', size: '4px' },
      { left: '65%', duration: '8s',  delay: '5s',   size: '6px' },
      { left: '82%', duration: '14s', delay: '1s',   size: '5px' },
      { left: '52%', duration: '10s', delay: '3s',   size: '4px' },
    ];
    particles.forEach(({ left, duration, delay, size }) => {
      const el = document.createElement('div');
      el.style.cssText = `
        position:absolute; top:-10px; left:${left};
        width:${size}; height:${size};
        background:#E8C4C4; border-radius:50% 0 50% 0;
        opacity:0; pointer-events:none;
        animation:sakuraFall ${duration} linear ${delay} infinite;
      `;
      container.appendChild(el);
    });
    return () => { while (container.firstChild) container.removeChild(container.firstChild); };
  }, []);

  return (
    <>
      <style>{`
        @keyframes sakuraFall {
          0%   { transform: translateY(-10px) rotate(0deg);   opacity: 0.5; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0;   }
        }
        @keyframes scrollPulse {
          0%,100% { width:40px; opacity:1;   }
          50%      { width:60px; opacity:0.4; }
        }
      `}</style>

      <section style={{ minHeight: '100svh', display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative', overflow: 'hidden' }}>

        {/* 左：コピー */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(6rem,8vw,8rem) clamp(2rem,6vw,5rem) 5rem', position: 'relative', zIndex: 2, background: 'var(--color-washi)' }}>
          <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.85rem', fontStyle: 'italic', letterSpacing: '0.2em', color: 'var(--color-gold)', marginBottom: '1.5rem', display: 'block' }}>
            Japan Bridal Ring — Selected 9 Brands
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif-ja)', fontSize: 'clamp(2rem,3.5vw,3.2rem)', fontWeight: 300, lineHeight: 1.5, letterSpacing: '0.06em', marginBottom: '1.5rem' }}>
            日本の職人が生む<br />
            <em style={{ fontStyle: 'normal', color: 'var(--color-gold)' }}>永遠のリング</em>を、<br />
            あなたたちへ。
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-mid)', lineHeight: 2, maxWidth: '34ch', marginBottom: '3rem' }}>
            香港・台湾のカップルに届ける、アグローヴ厳選9ブランド。<br />
            百年の技術と繊細な美意識が宿る、日本のブライダルリング。
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/brands/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 2rem', background: 'var(--color-ink)', color: '#fff', fontSize: '0.8rem', letterSpacing: '0.14em', transition: 'background 0.25s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-gold)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-ink)')}>
              ブランドを見る →
            </Link>
            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 2rem', border: '1px solid var(--color-ink)', color: 'var(--color-ink)', fontSize: '0.8rem', letterSpacing: '0.1em', transition: 'all 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-ink)'; e.currentTarget.style.color = 'var(--color-ink)'; }}>
              WhatsAppで相談
            </a>
          </div>

          {/* スクロールヒント */}
          <div style={{ position: 'absolute', bottom: '2.5rem', left: 'clamp(2rem,6vw,5rem)', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--color-mid)' }}>
            <span style={{ display: 'block', height: '1px', background: 'var(--color-gold)', animation: 'scrollPulse 2s ease-in-out infinite' }} />
            SCROLL
          </div>
        </div>

        {/* 右：ビジュアル */}
        <div ref={sakuraRef} style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg,#2a2420 0%,#3d3028 40%,#1a1a1a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* 写真到着後はここを next/image に差し替え */}
          <div style={{ width: '200px', height: '200px', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', width: '130px', height: '130px', border: '1px solid rgba(201,168,76,0.45)', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'var(--font-serif-ja)', fontSize: '0.7rem', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.3em' }}>指輪</span>
          </div>
        </div>

      </section>
    </>
  );
}
