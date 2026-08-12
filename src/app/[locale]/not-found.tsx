import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ background: '#F8F5F0' }}>
      <div className="text-center px-8">
        {/* 装飾的な404 */}
        <div
          style={{
            fontFamily: 'var(--font-serif-en)',
            fontSize: 'clamp(6rem, 20vw, 14rem)',
            fontWeight: 300,
            color: 'rgba(201,168,76,0.12)',
            lineHeight: 1,
            marginBottom: '-2rem',
            letterSpacing: '0.1em',
          }}
          aria-hidden="true"
        >
          404
        </div>

        <span
          style={{
            fontFamily: 'var(--font-serif-en)',
            fontSize: '0.7rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            display: 'block',
            marginBottom: '1rem',
          }}
        >
          Page Not Found
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-serif-ja)',
            fontSize: 'clamp(1.3rem, 3vw, 2rem)',
            fontWeight: 300,
            lineHeight: 1.6,
            marginBottom: '1rem',
          }}
        >
          お探しのページが<br />見つかりませんでした
        </h1>

        <p style={{ fontSize: '0.85rem', color: '#6B6560', marginBottom: '3rem' }}>
          URLが変更されたか、ページが削除された可能性があります。
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            style={{
              padding: '0.85rem 2rem',
              background: '#1A1A1A',
              color: '#fff',
              fontSize: '0.78rem',
              letterSpacing: '0.14em',
              transition: 'background 0.25s',
            }}
            className="hover:bg-gold"
          >
            トップへ戻る
          </Link>
          <Link
            href="/brands/"
            style={{
              padding: '0.85rem 2rem',
              border: '1px solid #1A1A1A',
              color: '#1A1A1A',
              fontSize: '0.78rem',
              letterSpacing: '0.14em',
              transition: 'all 0.25s',
            }}
            className="hover:border-gold hover:text-gold"
          >
            ブランドを見る
          </Link>
        </div>
      </div>
    </main>
  );
}
