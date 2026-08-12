import type { Brand } from '@/types/brand';

// 8ブランドのマスターデータ
// Sanity CMS 導入後はここをAPIコールに差し替える
export const brands: Brand[] = [
  {
    slug: 'cher-luv',
    nameJa: 'シェールラブ',
    nameEn: 'Cher Luv',
    taglineJa: '甘さと優雅さが共存する、フレンチロマンティックなリング',
    taglineZh: '甜蜜與優雅並存，法式浪漫的婚戒',
    descJa: '愛の形を纏った曲線美。シェールラブは「愛しい」を意味するフランス語をブランド名に持ち、その名の通り愛らしさと気品を両立したデザインを展開します。',
    descZh: '以愛為形的曲線之美。Cher Luv以法語「親愛的」為名，展現愛與優雅的完美結合。',
    style: 'romantic',
    priceRange: 'HK$12,000〜',
    featured: true,
    color: '#F5EAEA',
  },
  {
    slug: 'amour-amulette',
    nameJa: 'アムールアミュレット',
    nameEn: 'Amour Amulette',
    taglineJa: 'お守りのように、二人の愛の旅路を守り続けるリング',
    taglineZh: '如護身符般，守護兩人愛情旅程的婚戒',
    descJa: 'フランス語で「愛のお守り」を意味するブランド。二人が結ばれた瞬間から、永遠にその絆を守り続けることをコンセプトに、繊細で上質なデザインを提案します。',
    descZh: '法語「愛的護身符」之意。從兩人相遇的那一刻起，守護永恆的羈絆。',
    style: 'elegant',
    priceRange: 'HK$15,000〜',
    featured: false,
    color: '#F8F5F0',
  },
  {
    slug: 'ironoha',
    nameJa: 'いろのは',
    nameEn: 'Ironoha',
    taglineJa: '日本の伝統色彩からインスピレーションを得た、和の美のリング',
    taglineZh: '以日本傳統色彩為靈感，融入和之美的婚戒',
    descJa: '日本の伝統的な色彩感覚「色は匂へど」をブランド名の源流に持ち、移ろいゆく季節と色彩をリングのデザインに落とし込みます。唯一無二の和モダンな美しさ。',
    descZh: '源自日本「色即是空」的傳統色彩感，將四季更迭融入戒指設計，呈現獨一無二的和風現代美學。',
    style: 'japanese-modern',
    priceRange: 'HK$10,000〜',
    featured: false,
    color: '#F0EDE8',
  },
  {
    slug: 'pave-au-chocolat',
    nameJa: 'パヴェオショコラ',
    nameEn: 'Pavé au Chocolat',
    taglineJa: 'チョコレートのように濃密で甘い、パヴェダイヤが輝くリング',
    taglineZh: '如巧克力般醇厚甜蜜，密鑲鑽石閃耀光芒的婚戒',
    descJa: 'チョコレートの石畳を意味するフランス語のブランド名が示す通り、小粒のダイヤモンドをパヴェ（石畳）のように敷き詰めた豪華なリングが特徴。',
    descZh: '以法語「巧克力石板路」為名，將小顆鑽石如石板般密鑲，呈現華麗璀璨的光芒。',
    style: 'elegant',
    priceRange: 'HK$18,000〜',
    featured: false,
    color: '#F8F5F0',
  },
  {
    slug: 'anc-coeur',
    nameJa: 'アンクオーレ',
    nameEn: 'Anc Coeur',
    taglineJa: '錨のように互いの心を結び留める、誓いのリング',
    taglineZh: '如錨般緊扣彼此的心，承載永遠誓言的婚戒',
    descJa: 'アンカー（錨）とクール（心）を組み合わせたブランド名が示す、揺るぎない愛の誓い。ミニマルで洗練されたデザインは、どんなシーンにも溶け込みます。',
    descZh: '結合「錨」與「心」的品牌名，象徵堅定不移的愛的誓言。簡約精緻的設計，適合各種場合。',
    style: 'minimal',
    priceRange: 'HK$8,000〜',
    featured: false,
    color: '#F8F5F0',
  },
  {
    slug: 'promise-ring',
    nameJa: 'プロミスリング',
    nameEn: 'Promise Ring',
    taglineJa: 'ひとつの約束を、ひとつのリングに込めた純粋なブランド',
    taglineZh: '將一個承諾，凝聚於一枚戒指的純粹品牌',
    descJa: 'シンプルであることが最高の誠実さ。プロミスリングは余分な装飾を削ぎ落とし、素材と造形だけで「永遠の約束」を表現することにこだわります。',
    descZh: '簡單即是最高的誠意。Promise Ring去除多餘裝飾，以素材與造型純粹表達「永遠的約定」。',
    style: 'minimal',
    priceRange: 'HK$8,000〜',
    featured: false,
    color: '#F8F5F0',
  },
  {
    slug: 'baum',
    nameJa: 'バウム',
    nameEn: 'Baum',
    taglineJa: '年輪のように、共に刻む歳月をリングに宿すブランド',
    taglineZh: '如年輪般，將共同刻下的歲月銘記於戒指的品牌',
    descJa: 'ドイツ語で「木」を意味するバウム。年輪が木の歴史を刻むように、二人の共に歩む時間を指輪に込めます。使うほどに深まる味わいが魅力。',
    descZh: '德語「樹」之意。如年輪記錄樹的歷史，將兩人共同走過的時光銘刻於指環。越戴越有韻味。',
    style: 'japanese-modern',
    priceRange: 'HK$11,000〜',
    featured: false,
    color: '#EEF0EB',
  },
  {
    slug: 'heart-island',
    nameJa: 'ハートアイランド',
    nameEn: 'Heart Island',
    taglineJa: '職人手彫りのハワイアンジュエリー。8つのモチーフに意味が宿る',
    taglineZh: '職人手雕的夏威夷珠寶，8種主題各有深意',
    descJa: 'ハワイ語の意味を持つ8モチーフを職人がフリーハンドで手彫り。同じリングは世界に二つと存在しない、日本発のハワイアンジュエリーブランド。',
    descZh: '職人以徒手雕刻帶有夏威夷語意義的8種主題，世界上沒有兩枚相同的日本製夏威夷珠寶品牌。',
    style: 'japanese-modern',
    priceRange: 'HK$9,000〜',
    featured: false,
    color: '#EAF0F5',
  },
  // ── 9番目のブランド（2026年8月追加）──
  {
    slug:         'neuspur',
    nameJa:       'ノイシュプール',
    nameEn:       'Neu Spur',
    taglineJa:    '職人がフリーハンドで刻む、二つとない槌目のリング',
    taglineZh:    '職人徒手刻製，獨一無二槌紋的婚戒',
    descJa:       '木洩れ日のような槌目をフリーハンドで刻む、手作り感覚のブライダルリング。量産品ではたどり着けない「ふたりだけの模様」を適正価格で実現します。世界に同じものはひとつも存在しません。',
    descZh:       '職人以徒手刻製如林間光影般的槌紋，呈現手作感的婚戒。以合理價格實現量產品無法達到的「只屬於你們的紋樣」，世界上沒有兩枚相同的戒指。',
    style:        'japanese-modern',
    priceRange:   'HK$9,000〜',
    featured:     false,
    color:        '#EEF0EB',
  },
];

// スラッグからブランドを取得
export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

// スタイルでフィルタリング
export function getBrandsByStyle(style: Brand['style']): Brand[] {
  return brands.filter((b) => b.style === style);
}

