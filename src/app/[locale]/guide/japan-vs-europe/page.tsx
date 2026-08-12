import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '日本製リングとヨーロッパブランドの違いを徹底比較 | dot·bridal ASIA',
  description: '日本製ブライダルリングとヨーロッパブランド（Cartier・Tiffany等）を工芸・デザイン・価格・素材の4軸で比較。香港・台湾のカップルが日本ブランドを選ぶ理由とは。',
};

const compareData = [
  { axis: '製法・工芸',      japan: '職人手作業中心。鍛造・彫金・パヴェセッティングなど伝統技法を継承', europe: '工業生産が主流。精密機械による大量生産で均質な品質を実現' },
  { axis: '美学・デザイン',  japan: '侘び寂び・物哀に基づく静謐な美。装飾より素材と形状を重視',         europe: '装飾的・華やか。宝石の大きさや輝きを前面に出したデザインが多い' },
  { axis: '素材',            japan: 'Pt950プラチナが主流。純度95%の高品質素材',                         europe: 'Pt950〜950、18Kゴールド系が多い。ブランドによって大きく異なる' },
  { axis: '価格帯',          japan: 'HK$8,000〜50,000。品質比で割安感が高い',                           europe: 'HK$20,000〜300,000以上。ブランドプレミアムが価格に含まれる' },
  { axis: 'カスタマイズ',    japan: '内側刻印・石選びなど柔軟に対応。職人に直接依頼できる文化',         europe: 'ブランド標準仕様が中心。カスタムは高額オプション' },
  { axis: 'アフターケア',    japan: '国内職人による修理・サイズ調整が可能',                              europe: 'ブランド公式店のみ対応。海外からの持ち込みは制限あり' },
];

export default function JapanVsEuropePage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-[860px] mx-auto px-[clamp(1.25rem,5vw,4rem)]">

        <div className="py-14 border-b border-gold/20 mb-12">
          <span className="block font-serif-en text-xs tracking-[0.25em] uppercase text-gold mb-3">Comparison</span>
          <h1 className="font-serif-ja text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-relaxed mb-4">
            日本製ブライダルリングとヨーロッパブランドの違い<br />工芸・美学・価格を徹底比較
          </h1>
          <p className="text-mid text-sm leading-relaxed">
            Cartier、Tiffany & Co.、Bvlgariなどのヨーロッパ系ブランドと、日本の職人ブランドを4つの軸で比較します。どちらが「正解」ではなく、あなたたちのストーリーに合う選択を見つけるための参考として読んでください。
          </p>
        </div>

        <article className="flex flex-col gap-10">

          <section>
            <h2 className="font-serif-ja text-xl font-light mb-5 pb-3 border-b border-gold/20">結論から言うと</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: '日本ブランドが向いているカップル', points: ['職人のストーリーや製法に価値を感じる', '静かで深みのある美しさを好む', '予算内で最高品質の素材を求めている', '長く使えるシンプルなデザインが好き'] },
                { title: 'ヨーロッパブランドが向いているカップル', points: ['ブランド名の知名度・社会的証明を重視する', '華やかで存在感のあるデザインが好き', 'ギフトとしてのプレゼンテーションを重視', '予算に余裕があり、資産価値も意識している'] },
              ].map(({ title, points }) => (
                <div key={title} className="p-5" style={{ background: '#F8F5F0', borderTop: '2px solid #C9A84C' }}>
                  <h3 className="font-serif-ja text-sm font-normal mb-3">{title}</h3>
                  <ul className="flex flex-col gap-2">
                    {points.map((p) => (
                      <li key={p} className="flex gap-2 text-xs text-mid">
                        <span className="text-gold flex-shrink-0">✓</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif-ja text-xl font-light mb-5 pb-3 border-b border-gold/20">6軸徹底比較</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 text-left font-normal text-gold bg-ink/5 w-[100px]">比較軸</th>
                    <th className="p-3 text-left font-normal bg-[#F5EAEA]">🇯🇵 日本ブランド</th>
                    <th className="p-3 text-left font-normal bg-washi">🇪🇺 ヨーロッパブランド</th>
                  </tr>
                </thead>
                <tbody>
                  {compareData.map(({ axis, japan, europe }, i) => (
                    <tr key={axis} style={{ background: i % 2 === 0 ? '#fff' : '#fafaf8' }}>
                      <td className="p-3 text-gold font-medium">{axis}</td>
                      <td className="p-3 text-mid leading-relaxed">{japan}</td>
                      <td className="p-3 text-mid leading-relaxed">{europe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-serif-ja text-xl font-light mb-5 pb-3 border-b border-gold/20">「日本旅行×婚約リング」という選択肢</h2>
            <p className="text-sm text-mid leading-relaxed mb-4">
              香港・台湾のカップルに近年人気なのが、「日本旅行のついでにリングを選ぶ」という体験型の購入スタイルです。
            </p>
            <p className="text-sm text-mid leading-relaxed mb-4">
              東京や大阪の直営店で職人と直接話しながらリングを選ぶ体験は、ヨーロッパブランドの百貨店カウンターとは全く異なる感動があります。職人の工房を見学できるブランドも存在し、「このリングがどうやって作られたか」を肌で感じることができます。
            </p>
            <p className="text-sm text-mid leading-relaxed">
              当サイトでは、ご希望のブランド店舗への事前予約サポートも行っています。日本旅行の計画と合わせてご相談ください。
            </p>
          </section>

          <section>
            <h2 className="font-serif-ja text-xl font-light mb-5 pb-3 border-b border-gold/20">よくある誤解</h2>
            {[
              { q: '「日本ブランドはマイナーだから将来的に価値が下がるのでは？」', a: '資産価値を期待するなら、どのブランドであれ婚約指輪は適していません。リングの価値はブランド名ではなく、素材（プラチナ・ダイヤモンド）の市場価格に連動します。Pt950の地金価値は世界共通です。' },
              { q: '「修理やサイズ変更は日本に行かないとできないのでは？」', a: '地元の信頼できる宝石職人であれば対応可能なケースがほとんどです。また、アグローヴが運営する各ブランドは国際郵送でのアフターケア対応も行っています。' },
              { q: '「日本語が分からないと購入できないのでは？」', a: '当サイトのお問い合わせフォームおよびWhatsApp/LINEは繁体字・英語で対応しています。各ブランドとの橋渡しも含めてサポートします。' },
            ].map(({ q, a }) => (
              <div key={q} className="mb-6 pb-6 border-b border-gold/15 last:border-none">
                <p className="text-sm font-normal mb-2" style={{ color: '#1A1A1A' }}>Q. {q}</p>
                <p className="text-sm text-mid leading-relaxed">A. {a}</p>
              </div>
            ))}
          </section>

        </article>

        <div className="mt-12 p-8 text-center" style={{ background: '#1A1A1A' }}>
          <p className="font-serif-ja text-lg font-light text-white mb-2">どのブランドが合うか、一緒に考えましょう</p>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>専門スタッフが無料でご相談に応じます。</p>
          <Link href="/contact/" className="inline-flex px-8 py-3 border border-gold text-gold text-sm tracking-wide hover:bg-gold hover:text-white transition-all">
            無料相談する →
          </Link>
        </div>

      </div>
    </main>
  );
}
