import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { guideArticles } from '@/lib/guide-content';

interface Props {
  params: { slug: string };
}

// 静的パス生成
export function generateStaticParams() {
  return guideArticles.map((a) => ({ slug: a.slug }));
}

// 動的メタデータ
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = guideArticles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.titleJa} | dot·bridal ASIA`,
    description: article.descJa,
  };
}

export default function GuidePage({ params }: Props) {
  const article = guideArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-[860px] mx-auto px-[clamp(1.25rem,5vw,4rem)]">

        {/* ヘッダー */}
        <div className="py-14 border-b border-gold/20 mb-12">
          <span className="block font-serif-en text-xs tracking-[0.25em] uppercase text-gold mb-3">
            Guide
          </span>
          <h1 className="font-serif-ja text-[clamp(1.5rem,3vw,2.4rem)] font-light leading-relaxed mb-4">
            {article.titleJa}
          </h1>
          <p className="text-mid text-sm leading-relaxed">{article.descJa}</p>
        </div>

        {/* 本文 */}
        <article className="flex flex-col gap-12">
          {article.sections.map(({ h2, body }) => (
            <section key={h2}>
              <h2 className="font-serif-ja text-xl font-light mb-5 pb-3 border-b border-gold/20">
                {h2}
              </h2>
              <div className="flex flex-col gap-3">
                {body.trim().split('\n').map((line, i) => {
                  const trimmed = line.trim();
                  if (!trimmed) return null;
                  if (trimmed.startsWith('【') || trimmed.startsWith('Step') || trimmed.startsWith('方法')) {
                    return (
                      <p key={i} className="text-sm font-normal text-ink mt-2">{trimmed}</p>
                    );
                  }
                  return (
                    <p key={i} className="text-sm text-mid leading-relaxed">{trimmed}</p>
                  );
                })}
              </div>
            </section>
          ))}
        </article>

        {/* CTA */}
        <div className="mt-16 p-8 text-center" style={{ background: '#F5EAEA' }}>
          <p className="font-serif-ja text-lg font-light mb-2">ご質問はお気軽にどうぞ</p>
          <p className="text-sm text-mid mb-6">専門スタッフが丁寧にご相談に応じます。</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://wa.me/XXXXXXXXX" className="px-6 py-3 bg-[#25D366] text-white text-sm tracking-wide hover:opacity-85 transition-opacity">
              WhatsApp（香港）
            </a>
            <a href="https://line.me/XXXXXXXXX" className="px-6 py-3 bg-[#06C755] text-white text-sm tracking-wide hover:opacity-85 transition-opacity">
              LINE（台湾）
            </a>
          </div>
        </div>

        {/* 他のガイド記事 */}
        <div className="mt-12">
          <h3 className="font-serif-ja text-base font-light mb-6 pb-3 border-b border-gold/20">
            他のガイド記事
          </h3>
          <div className="flex flex-col gap-3">
            {guideArticles
              .filter((a) => a.slug !== params.slug)
              .map(({ slug, titleJa }) => (
                <Link
                  key={slug}
                  href={`/guide/${slug}/`}
                  className="flex items-center gap-3 text-sm text-mid hover:text-gold transition-colors"
                >
                  <span className="text-gold">→</span>{titleJa}
                </Link>
              ))}
          </div>
        </div>

      </div>
    </main>
  );
}
