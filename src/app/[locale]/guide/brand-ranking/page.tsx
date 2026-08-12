import type { Metadata } from 'next';
import Link from 'next/link';
import { brands } from '@/lib/brands';

export const metadata: Metadata = {
  title: '2026年版｜日本ブライダルリングブランド完全比較ガイド | dot·bridal ASIA',
  description: '香港・台湾のカップル向けに、日本のブライダルリングブランド9社を徹底比較。スタイル・価格帯・素材・世界観を詳しく解説。シェールラブ、いろのは、バウムほか。',
};

export default function BrandRankingPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-[860px] mx-auto px-[clamp(1.25rem,5vw,4rem)]">

        {/* ヘッダー */}
        <div className="py-14 border-b border-gold/20 mb-12">
          <span className="block font-serif-en text-xs tracking-[0.25em] uppercase text-gold mb-3">Brand Guide</span>
          <h1 className="font-serif-ja text-[clamp(1.6rem,3vw,2.6rem)] font-light leading-relaxed mb-4">
            2026年版｜日本ブライダルリングブランド<br />完全比較ガイド
          </h1>
          <p className="text-mid text-sm leading-relaxed">
            香港・台湾のカップルが日本のブライダルリングを選ぶ際に知っておくべき、9ブランドの特徴・価格帯・世界観を一挙に比較・解説します。
          </p>
          <div className="flex gap-4 mt-6 text-xs text-mid">
            <span>公開：2026年8月</span>
            <span>|</span>
            <span>読了目安：約8分</span>
          </div>
        </div>

        {/* 目次 */}
        <nav className="mb-12 p-6 bg-white border-l-2 border-gold">
          <h2 className="font-serif-ja text-sm font-normal mb-4 text-gold">目次</h2>
          <ol className="flex flex-col gap-2 text-sm text-mid list-decimal list-inside">
            <li><a href="#why-japan" className="hover:text-gold transition-colors">日本のブライダルリングが選ばれる理由</a></li>
            <li><a href="#brand-list" className="hover:text-gold transition-colors">8ブランド一覧と特徴まとめ</a></li>
            <li><a href="#style-guide" className="hover:text-gold transition-colors">スタイル別おすすめブランド</a></li>
            <li><a href="#price-guide" className="hover:text-gold transition-colors">予算別の選び方</a></li>
            <li><a href="#how-to-order" className="hover:text-gold transition-colors">香港・台湾から購入する方法</a></li>
          </ol>
        </nav>

        {/* 本文 */}
        <article className="prose-custom flex flex-col gap-10">

          <section id="why-japan">
            <h2 className="font-serif-ja text-xl font-light mb-5 pb-3 border-b border-gold/20">
              日本のブライダルリングが選ばれる理由
            </h2>
            <p className="text-sm text-mid leading-relaxed mb-4">
              香港・台湾を中心に、アジア全域で日本製ブライダルリングへの関心が高まっています。その背景には、単なる「トレンド」ではなく、明確な品質上の根拠があります。
            </p>
            <p className="text-sm text-mid leading-relaxed mb-4">
              日本のブライダル職人は、伝統的な金工技術を現代のデザインに融合させる独自の技術を持ちます。一本のリングが完成するまでに経る工程数は、量産ラインでは不可能なレベルに達します。たとえば、パヴェセッティング（石留め）では職人が0.1mm単位でダイヤモンドの位置を調整し、隙間なく並べていく作業を何時間もかけて行います。
            </p>
            <p className="text-sm text-mid leading-relaxed">
              また「侘び寂び」や「物哀」に代表される日本の美意識は、ヨーロッパブランドとは異なる「静謐な輝き」をリングに与えます。派手さより深さを重視するその美学が、成熟したカップルの心を捉えています。
            </p>
          </section>

          <section id="brand-list">
            <h2 className="font-serif-ja text-xl font-light mb-5 pb-3 border-b border-gold/20">
              8ブランド一覧と特徴まとめ
            </h2>
            <p className="text-sm text-mid leading-relaxed mb-6">
              株式会社アグローヴが手がける8つのブライダルリングブランドを、スタイル・価格帯・こだわりポイントとともに比較します。
            </p>

            {/* ブランド比較テーブル */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr style={{ background: '#1A1A1A', color: '#fff' }}>
                    <th className="text-left p-3 font-normal tracking-wide">ブランド</th>
                    <th className="text-left p-3 font-normal tracking-wide">スタイル</th>
                    <th className="text-left p-3 font-normal tracking-wide">参考価格</th>
                    <th className="text-left p-3 font-normal tracking-wide">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((brand, i) => (
                    <tr
                      key={brand.slug}
                      style={{ background: i % 2 === 0 ? '#fff' : '#F8F5F0' }}
                    >
                      <td className="p-3">
                        <Link href={`/brands/${brand.slug}/`} className="text-gold hover:underline font-normal">
                          {brand.nameJa}
                        </Link>
                      </td>
                      <td className="p-3 text-mid">{brand.style}</td>
                      <td className="p-3 text-mid">{brand.priceRange}</td>
                      <td className="p-3 text-mid">{brand.taglineJa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 各ブランド個別解説 */}
            {brands.map((brand) => (
              <div key={brand.slug} className="mb-8 p-6" style={{ background: brand.color }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="block font-serif-en text-xs tracking-widest text-gold uppercase mb-1">{brand.nameEn}</span>
                    <h3 className="font-serif-ja text-lg font-light">{brand.nameJa}</h3>
                  </div>
                  <span className="text-xs text-mid whitespace-nowrap">{brand.priceRange}</span>
                </div>
                <p className="text-sm text-mid leading-relaxed mb-4">{brand.descJa}</p>
                <Link
                  href={`/brands/${brand.slug}/`}
                  className="text-xs tracking-widest text-gold hover:underline"
                >
                  詳細を見る →
                </Link>
              </div>
            ))}
          </section>

          <section id="style-guide">
            <h2 className="font-serif-ja text-xl font-light mb-5 pb-3 border-b border-gold/20">
              スタイル別おすすめブランド
            </h2>
            {[
              {
                style: 'ロマンティック・甘め',
                brands: ['シェールラブ', 'ハートアイランド'],
                desc: '愛らしさと女性らしさを大切にしたいカップルへ。曲線的なフォルムとハートモチーフが特徴で、ガーリーな美しさを求める方に支持されています。',
              },
              {
                style: 'エレガント・大人',
                brands: ['アムールアミュレット', 'パヴェオショコラ'],
                desc: '品格と存在感を重視するカップルへ。繊細なダイヤモンドセッティングと上質な素材が、成熟した大人の美しさを演出します。',
              },
              {
                style: '和モダン・個性派',
                brands: ['いろのは', 'バウム'],
                desc: '日本らしさとオリジナリティを求めるカップルへ。伝統的な日本の意匠を現代的な感覚で昇華したデザインは、他のブランドにはない独自性があります。',
              },
              {
                style: 'シンプル・誓い系',
                brands: ['アンクオーレ', 'プロミスリング'],
                desc: '装飾より誓いの純粋さを大切にしたいカップルへ。余分なものをすべて削ぎ落としたミニマルなフォルムが、永遠の約束を静かに語ります。',
              },
            ].map(({ style, brands: bl, desc }) => (
              <div key={style} className="mb-6">
                <h3 className="font-serif-ja text-base font-normal mb-2 text-ink">{style}</h3>
                <p className="text-xs text-gold mb-2">推奨ブランド：{bl.join('・')}</p>
                <p className="text-sm text-mid leading-relaxed">{desc}</p>
              </div>
            ))}
          </section>

          <section id="price-guide">
            <h2 className="font-serif-ja text-xl font-light mb-5 pb-3 border-b border-gold/20">
              予算別の選び方
            </h2>
            {[
              { range: 'HK$8,000〜15,000', label: 'エントリー', desc: 'シンプルなデザインのPt950リング。プロミスリング・アンクオーレが中心。素材の品質は最高水準を維持しつつ、装飾を抑えることでコストを実現。' },
              { range: 'HK$15,000〜30,000', label: 'スタンダード', desc: 'ダイヤモンドのアクセントや個性的なテクスチャーを持つリング。多くのブランドのメインラインがこの価格帯に集中。' },
              { range: 'HK$30,000〜', label: 'プレミアム', desc: 'パヴェセッティングや特注ダイヤモンドを使用した高級ライン。パヴェオショコラ・アムールアミュレットの上位コレクション。' },
            ].map(({ range, label, desc }) => (
              <div key={range} className="flex gap-5 mb-5 pb-5 border-b border-gold/15 last:border-none">
                <div className="flex-shrink-0 w-[100px]">
                  <span className="block text-xs text-gold mb-1">{label}</span>
                  <span className="block text-xs text-mid">{range}</span>
                </div>
                <p className="text-sm text-mid leading-relaxed">{desc}</p>
              </div>
            ))}
          </section>

          <section id="how-to-order">
            <h2 className="font-serif-ja text-xl font-light mb-5 pb-3 border-b border-gold/20">
              香港・台湾から購入する方法
            </h2>
            <p className="text-sm text-mid leading-relaxed mb-4">
              日本国内に実店舗を持つ各ブランドへのアクセス方法は、大きく2つあります。
            </p>
            <ol className="flex flex-col gap-4">
              {[
                { title: '日本旅行のついでに実店舗で試着', desc: '最もおすすめの方法。東京・大阪の各ブランド直営店で実際に試着できます。事前予約のサポートも当サイトで対応しています。' },
                { title: 'オンラインで相談・注文', desc: 'WhatsApp（香港向け）またはLINE（台湾向け）で日本語・繁体字で相談可能。サイズ測定キットの郵送にも対応しています。' },
              ].map(({ title, desc }, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-serif-en text-2xl text-gold/40 font-light flex-shrink-0 leading-none mt-1">0{i + 1}</span>
                  <div>
                    <h3 className="font-serif-ja text-sm font-normal mb-1">{title}</h3>
                    <p className="text-sm text-mid leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

        </article>

        {/* CTA */}
        <div className="mt-16 p-8 text-center" style={{ background: '#F5EAEA' }}>
          <p className="font-serif-ja text-lg font-light mb-2">気になるブランドが見つかりましたか？</p>
          <p className="text-sm text-mid mb-6">専門スタッフが選び方をサポートします。</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://wa.me/XXXXXXXXX" className="px-6 py-3 bg-[#25D366] text-white text-sm tracking-wide hover:opacity-85 transition-opacity">WhatsApp で相談</a>
            <Link href="/contact/" className="px-6 py-3 border border-ink text-ink text-sm tracking-wide hover:bg-ink hover:text-white transition-all">メールで相談</Link>
          </div>
        </div>

        {/* 関連記事 */}
        <div className="mt-12">
          <h3 className="font-serif-ja text-base font-light mb-6 pb-3 border-b border-gold/20">関連記事</h3>
          <div className="flex flex-col gap-3">
            {[
              { href: '/guide/japan-vs-europe/', title: '日本製リングとヨーロッパブランドの違いを徹底比較' },
              { href: '/guide/pt950/', title: 'Pt950とPt900の違いとは？プラチナ純度ガイド' },
              { href: '/guide/budget/', title: '婚約・結婚指輪の予算配分ガイド' },
            ].map(({ href, title }) => (
              <Link key={href} href={href} className="flex items-center gap-3 text-sm text-mid hover:text-gold transition-colors">
                <span className="text-gold">→</span>{title}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
