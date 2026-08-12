'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

export default function Navbar() {
  const t = useLocale();
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // スクロールでボーダー強化
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // ロケールプレフィックス付きリンク生成
  const localePath = (path: string) =>
    locale === 'ja' ? `/ja${path}` : locale === 'en' ? `/en${path}` : path;

  const navLinks = [
    { href: '/brands/',   label: 'ブランド' },
    { href: '/products/', label: 'コレクション' },
    { href: '/styles/',   label: 'スタイルで選ぶ' },
    { href: '/stores/',   label: '店舗を探す' },
    { href: '/guide/',    label: '選び方ガイド' },
    { href: '/journal/',  label: 'ジャーナル' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: 'rgba(248,245,240,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled
          ? '1px solid rgba(201,168,76,0.4)'
          : '1px solid rgba(201,168,76,0.2)',
      }}
    >
      <nav className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)] flex items-center justify-between h-[64px]">
        {/* ロゴ */}
        <Link href={localePath('/')} className="flex items-baseline gap-1">
          <span
            style={{
              fontFamily: 'var(--font-serif-en)',
              fontSize: '1.05rem',
              fontWeight: 300,
              letterSpacing: '0.12em',
              color: '#1A1A1A',
            }}
          >
            dot<span style={{ color: '#C9A84C' }}>·</span>bridal
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans-ja)',
              fontSize: '0.65rem',
              letterSpacing: '0.05em',
              color: '#6B6560',
              marginLeft: '4px',
            }}
          >
            ASIA
          </span>
        </Link>

        {/* PCナビ */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={localePath(href)}
                style={{
                  fontFamily: 'var(--font-sans-ja)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.08em',
                  color: pathname.includes(href) ? '#C9A84C' : '#6B6560',
                  transition: 'color 0.2s',
                }}
                className="hover:text-gold"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + 言語切替 */}
        <div className="hidden md:flex items-center gap-4">
          {/* 言語切替 */}
          <div className="flex items-center gap-2 text-[0.65rem] text-mid">
            <Link href="/" className={locale === 'zh' ? 'text-gold' : 'text-mid hover:text-gold'}>繁中</Link>
            <span className="text-gold/40">|</span>
            <Link href="/en" className={locale === 'en' ? 'text-gold' : 'text-mid hover:text-gold'}>EN</Link>
            <span className="text-gold/40">|</span>
            <Link href="/ja" className={locale === 'ja' ? 'text-gold' : 'text-mid hover:text-gold'}>日本語</Link>
          </div>
          {/* お問い合わせボタン */}
          <Link
            href={localePath('/contact/')}
            style={{
              fontFamily: 'var(--font-sans-ja)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              padding: '0.55rem 1.3rem',
              border: '1px solid #C9A84C',
              color: '#C9A84C',
              transition: 'all 0.25s',
            }}
            className="hover:bg-gold hover:text-white"
          >
            お問い合わせ
          </Link>
        </div>

        {/* ハンバーガー（SP） */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="メニューを開く"
        >
          <span
            className="block w-5 h-px bg-ink transition-all duration-300"
            style={{ transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }}
          />
          <span
            className="block w-5 h-px bg-ink transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px bg-ink transition-all duration-300"
            style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }}
          />
        </button>
      </nav>

      {/* SP：ドロワーメニュー */}
      {menuOpen && (
        <div className="md:hidden bg-washi border-t border-gold/20 px-8 py-6 flex flex-col gap-5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={localePath(href)}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-serif-ja)',
                fontSize: '1rem',
                fontWeight: 300,
                letterSpacing: '0.08em',
                color: '#1A1A1A',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href={localePath('/contact/')}
            onClick={() => setMenuOpen(false)}
            className="mt-2 self-start px-6 py-3 border border-gold text-gold text-sm tracking-widest"
          >
            お問い合わせ
          </Link>
        </div>
      )}
    </header>
  );
}
