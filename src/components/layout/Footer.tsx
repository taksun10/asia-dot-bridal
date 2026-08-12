import Link from 'next/link';
import { useLocale } from 'next-intl';
import { brands } from '@/lib/brands';

export default function Footer() {
  const locale = useLocale();
  const localePath = (path: string) =>
    locale === 'ja' ? `/ja${path}` : locale === 'en' ? `/en${path}` : path;

  const guideLinks = [
    { href: '/guide/how-to-choose/', label: 'リングの選び方' },
    { href: '/guide/materials/',     label: '素材解説' },
    { href: '/guide/size-guide/',    label: 'サイズガイド' },
    { href: '/guide/budget/',        label: '予算ガイド' },
    { href: '/journal/',             label: 'ジャーナル' },
    { href: '/about/',               label: 'アグローヴについて' },
    { href: '/contact/',             label: 'お問い合わせ' },
  ];

  return (
    <footer style={{ background: '#1A1A1A', color: 'rgba(255,255,255,0.4)' }}>
      <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,4rem)] pt-14 pb-8">

        {/* メインエリア */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* ブランド説明 */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif-en)',
                fontSize: '1rem',
                fontWeight: 300,
                letterSpacing: '0.12em',
                color: '#fff',
                marginBottom: '0.75rem',
              }}
            >
              dot<span style={{ color: '#C9A84C' }}>·</span>bridal ASIA
            </div>
            <p style={{ fontSize: '0.76rem', lineHeight: 1.9 }}>
              日本トップブライダルリングブランドの<br />
              海外向け公式ポータルサイト。<br />
              株式会社アグローヴが運営。<br />
              香港・台湾のカップルのために。
            </p>
          </div>

          {/* ブランドリスト */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif-en)',
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                marginBottom: '1rem',
              }}
            >
              Brands
            </h3>
            <ul className="flex flex-col gap-[0.55rem]">
              {brands.map((brand) => (
                <li key={brand.slug}>
                  <Link
                    href={localePath(`/brands/${brand.slug}/`)}
                    style={{ fontSize: '0.76rem', transition: 'color 0.2s' }}
                    className="hover:text-white"
                  >
                    {brand.nameJa}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ガイドリスト */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif-en)',
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                marginBottom: '1rem',
              }}
            >
              Guide
            </h3>
            <ul className="flex flex-col gap-[0.55rem]">
              {guideLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={localePath(href)}
                    style={{ fontSize: '0.76rem', transition: 'color 0.2s' }}
                    className="hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ボトムバー */}
        <div
          className="flex flex-wrap justify-between items-center gap-3 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.68rem' }}
        >
          <span>© 2026 株式会社アグローヴ / dot-bridal.com All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/"    className="hover:text-gold transition-colors" style={{ color: locale === 'zh' ? '#C9A84C' : 'inherit' }}>繁體中文</Link>
            <Link href="/en/" className="hover:text-gold transition-colors" style={{ color: locale === 'en' ? '#C9A84C' : 'inherit' }}>English</Link>
            <Link href="/ja/" className="hover:text-gold transition-colors" style={{ color: locale === 'ja' ? '#C9A84C' : 'inherit' }}>日本語</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
