import Link from 'next/link';
import type { Brand } from '@/types/brand';

interface Props { brand: Brand }

export default function BrandCta({ brand }: Props) {
  return (
    <section
      className="py-[clamp(4rem,8vw,6rem)] text-center"
      style={{ background: '#1A1A1A' }}
    >
      <div className="max-w-[700px] mx-auto px-8">
        <span
          style={{
            fontFamily: 'var(--font-serif-en)',
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            display: 'block',
            marginBottom: '0.75rem',
          }}
        >
          Enquire
        </span>
        <span className="block w-12 h-px mx-auto mb-6" style={{ background: '#C9A84C' }} />
        <h2
          style={{
            fontFamily: 'var(--font-serif-ja)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 300,
            color: '#fff',
            lineHeight: 1.6,
            marginBottom: '0.75rem',
          }}
        >
          {brand.nameJa}について<br />もっと詳しく知りたい方へ
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem' }}>
          価格・在庫・試着のご予約など、お気軽にご相談ください。
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(`${brand.nameJa}について相談したいです`)}`}
            style={{ background: '#25D366', color: '#fff' }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide transition-opacity hover:opacity-85"
          >
            WhatsApp で相談する
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LINE_URL ?? '#'}
            style={{ background: '#06C755', color: '#fff' }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide transition-opacity hover:opacity-85"
          >
            LINE で相談する
          </a>
          <Link
            href="/contact/"
            style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)' }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide transition-all hover:border-gold hover:text-gold"
          >
            メールで相談する
          </Link>
        </div>
      </div>
    </section>
  );
}
