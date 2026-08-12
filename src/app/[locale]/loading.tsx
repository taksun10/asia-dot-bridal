// ページ遷移中に表示されるローディングUI
// Next.js App Router の loading.tsx として機能する

export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: '#F8F5F0' }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* 金のパルスアニメーション */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-2 h-2 rounded-full"
              style={{
                background: '#C9A84C',
                animation: 'pulse 1.2s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
        <span
          style={{
            fontFamily: 'var(--font-serif-en)',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#C9A84C',
          }}
        >
          Loading
        </span>
      </div>
    </div>
  );
}
