import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pt950とPt900の違いとは？プラチナ純度がリングの品質に与える影響 | dot·bridal ASIA',
  description: 'ブライダルリングに使われるPt950・Pt900・18Kホワイトゴールドを徹底比較。硬度・耐久性・価格の違いを分かりやすく解説。日本製リングがPt950を使う理由とは。',
};

export default function Pt950Page() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-[860px] mx-auto px-[clamp(1.25rem,5vw,4rem)]">

        <div className="py-14 border-b border-gold/20 mb-12">
          <span className="block font-serif-en text-xs tracking-[0.25em] uppercase text-gold mb-3">Material Guide</span>
          <h1 className="font-serif-ja text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-relaxed mb-4">
            Pt950とPt900の違いとは？<br />プラチナ純度ガイド完全版
          </h1>
          <p className="text-mid text-sm leading-relaxed">
            ブライダルリングを選ぶ際に必ず出てくる「Pt950」「Pt900」「18K」という表記。何が違うのか、なぜ日本製リングにはPt950が多いのかを解説します。
          </p>
        </div>

        <article className="flex flex-col gap-10">

          {/* 素材比較テーブル */}
          <section>
            <h2 className="font-serif-ja text-xl font-light mb-5 pb-3 border-b border-gold/20">素材別スペック比較</h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr style={{ background: '#1A1A1A', color: '#fff' }}>
                    {['素材', 'プラチナ純度', '硬度', '色の変化', '価格感', '主な使用国'].map(h => (
                      <th key={h} className="p-3 text-left font-normal tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mat: 'Pt950', purity: '95%', hard: '◎ 最高', color: 'ほぼなし', price: '高め', country: '日本・欧州' },
                    { mat: 'Pt900', purity: '90%', hard: '○ 高い', color: 'ほぼなし', price: '中〜高', country: '日本（旧規格）' },
                    { mat: '18Kホワイトゴールド', purity: '（金75%）', hard: '△ 普通', color: 'ロジウムが剥がれると黄変', price: '低〜中', country: '欧州ブランド多' },
                    { mat: '14Kホワイトゴールド', purity: '（金58%）', hard: '△ 普通', color: '同上', price: '低', country: '米国系ブランド' },
                  ].map(({ mat, purity, hard, color, price, country }, i) => (
                    <tr key={mat} style={{ background: i % 2 === 0 ? '#fff' : '#F8F5F0' }}>
                      <td className="p-3 font-medium text-ink">{mat}</td>
                      <td className="p-3 text-mid">{purity}</td>
                      <td className="p-3 text-mid">{hard}</td>
                      <td className="p-3 text-mid">{color}</td>
                      <td className="p-3 text-mid">{price}</td>
                      <td className="p-3 text-mid">{country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-serif-ja text-xl font-light mb-5 pb-3 border-b border-gold/20">Pt950が選ばれる3つの理由</h2>
            {[
              { num: '01', title: '純度が高いほど、金属アレルギーのリスクが低い', body: 'プラチナは純度が上がるほど混ぜ物が減ります。Pt950は95%がプラチナのため、金属アレルギーを持つ方にも安心して使用できる素材です。ブライダルリングは一生つけ続けるものだからこそ、この点は非常に重要です。' },
              { num: '02', title: '傷がついても研磨で元通りになる', body: 'プラチナの特性として「素材が失われず移動する」という性質があります。傷がつくと金属が凹むのではなく、表面が動くだけ。職人による研磨で元の輝きに戻せます。18Kゴールドは傷で素材が削れてしまうため、繰り返しの研磨には限界があります。' },
              { num: '03', title: '年月が経っても色が変わらない', body: '18Kホワイトゴールドはロジウムメッキの蒸発で黄色みが出てきます。Pt950は素材自体が白いため、何十年経っても同じ色味を保ちます。毎日つけ続けるブライダルリングには、この永続性が最大の強みです。' },
            ].map(({ num, title, body }) => (
              <div key={num} className="flex gap-5 mb-7">
                <span className="font-serif-en text-3xl text-gold/30 font-light flex-shrink-0 leading-none">{num}</span>
                <div>
                  <h3 className="font-serif-ja text-base font-normal mb-2">{title}</h3>
                  <p className="text-sm text-mid leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </section>

          <section>
            <h2 className="font-serif-ja text-xl font-light mb-5 pb-3 border-b border-gold/20">Pt900との違いは実際にあるのか？</h2>
            <p className="text-sm text-mid leading-relaxed mb-4">
              Pt900（純度90%）とPt950（純度95%）の違いは、日常使用においてほぼ体感できません。どちらも高品質なプラチナリングとして長期使用に耐えます。
            </p>
            <p className="text-sm text-mid leading-relaxed mb-4">
              ただし、日本のブライダルジュエリー業界は2000年代以降にPt950を業界標準として採用しました。アグローヴの各ブランドがPt950を使うのは、「業界最高水準の素材を当たり前の選択として提供する」という品質哲学によるものです。
            </p>
            <div className="p-5 bg-[#F5EAEA] text-sm text-mid leading-relaxed">
              <strong className="text-ink font-normal">ポイント：</strong>
              ヨーロッパブランドでPt950表記が少ない理由は、多くの場合Pt850〜950の混合規格を使用しているためです。「プラチナ」と記載されていても純度の確認が必要です。日本の製品はJIS規格に基づき純度を明記することが義務づけられています。
            </div>
          </section>

        </article>

        <div className="mt-12">
          <h3 className="font-serif-ja text-base font-light mb-6 pb-3 border-b border-gold/20">関連記事</h3>
          <div className="flex flex-col gap-3">
            {[
              { href: '/guide/brand-ranking/', title: '2026年版 日本ブライダルリングブランド完全比較ガイド' },
              { href: '/guide/japan-vs-europe/', title: '日本製リングとヨーロッパブランドの違いを徹底比較' },
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
