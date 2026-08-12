import type { Store } from '@/types/store';

/**
 * 店舗マスターデータ
 * 実際の店舗情報に差し替えて使用する
 * Sanity CMS 導入後はAPIコールに切り替え可能
 */
export const stores: Store[] = [
  // ──────────────────────────────
  // 日本
  // ──────────────────────────────
  {
    slug:         'tokyo-omotesando',
    nameJa:       '表参道セレクトジュエリー',
    nameEn:       'Omotesando Select Jewelry',
    nameZh:       '表參道精選珠寶',
    region:       'japan',
    prefecture:   '東京都',
    addressJa:    '東京都渋谷区神宮前X-XX-XX ○○ビル1F',
    addressZh:    '東京都澀谷區神宮前X-XX-XX ○○大廈1樓',
    lat:          35.6654,
    lng:          139.7127,
    tel:          '03-XXXX-XXXX',
    hoursJa:      '11:00〜20:00',
    hoursZh:      '11:00〜20:00',
    closedDaysJa: '火曜日',
    closedDaysZh: '星期二',
    brands:       ['cher-luv', 'amour-amulette', 'ironoha', 'baum'],
    reservationUrl: 'https://example.com/reserve/omotesando',
    noteJa:       '完全予約制。ご来店前にご予約をお願いします。',
    noteZh:       '完全預約制。請於到訪前預約。',
    isMainStore:  true,
  },
  {
    slug:         'osaka-shinsaibashi',
    nameJa:       '心斎橋ブライダルジュエリー',
    nameEn:       'Shinsaibashi Bridal Jewelry',
    nameZh:       '心齋橋婚戒珠寶',
    region:       'japan',
    prefecture:   '大阪府',
    addressJa:    '大阪府大阪市中央区心斎橋筋X-XX-XX △△ビル2F',
    addressZh:    '大阪府大阪市中央區心齋橋筋X-XX-XX △△大廈2樓',
    lat:          34.6727,
    lng:          135.5014,
    tel:          '06-XXXX-XXXX',
    hoursJa:      '11:00〜19:30',
    hoursZh:      '11:00〜19:30',
    closedDaysJa: '水曜日',
    closedDaysZh: '星期三',
    brands:       ['cher-luv', 'pave-au-chocolat', 'anc-coeur', 'promise-ring', 'heart-island'],
    reservationUrl: 'https://example.com/reserve/shinsaibashi',
    noteJa:       '土日祝は混み合います。事前予約がおすすめです。',
    noteZh:       '週末及假日較為繁忙，建議提前預約。',
    isMainStore:  false,
  },
  {
    slug:         'fukuoka-tenjin',
    nameJa:       '天神ジュエリーサロン',
    nameEn:       'Tenjin Jewelry Salon',
    nameZh:       '天神珠寶沙龍',
    region:       'japan',
    prefecture:   '福岡県',
    addressJa:    '福岡県福岡市中央区天神X-XX-XX □□ビル1F',
    addressZh:    '福岡縣福岡市中央區天神X-XX-XX □□大廈1樓',
    lat:          33.5904,
    lng:          130.3983,
    tel:          '092-XXX-XXXX',
    hoursJa:      '10:30〜19:00',
    hoursZh:      '10:30〜19:00',
    closedDaysJa: '月曜日・第3火曜日',
    closedDaysZh: '星期一・每月第3個星期二',
    brands:       ['ironoha', 'baum', 'anc-coeur', 'promise-ring'],
    reservationUrl: 'https://example.com/reserve/tenjin',
    isMainStore:  false,
  },

  // ──────────────────────────────
  // 香港
  // ──────────────────────────────
  {
    slug:         'hongkong-central',
    nameJa:       'セントラル・ジュエリーギャラリー',
    nameEn:       'Central Jewelry Gallery',
    nameZh:       '中環珠寶廊',
    region:       'hongkong',
    prefecture:   '香港',
    addressJa:    '香港中環XX通XX號 ○○センター3F',
    addressZh:    '香港中環XX街XX號 ○○中心3樓',
    lat:          22.2822,
    lng:          114.1580,
    tel:          '+852-XXXX-XXXX',
    hoursJa:      '11:00〜20:00',
    hoursZh:      '11:00〜20:00',
    closedDaysJa: '日曜日',
    closedDaysZh: '星期日',
    brands:       ['cher-luv', 'amour-amulette', 'pave-au-chocolat', 'heart-island'],
    whatsapp:     '85200000000',
    reservationUrl: 'https://example.com/reserve/hk-central',
    noteJa:       '日本語スタッフ常駐。お気軽にどうぞ。',
    noteZh:       '設有日語員工，歡迎隨時前來。',
    isMainStore:  true,
  },

  {
    slug:         'hongkong-diamond-store',
    nameJa:       'ダイヤモンドストア（尖沙咀）',
    nameEn:       'diamond store',
    nameZh:       '鑽石店（尖沙咀）',
    region:       'hongkong',
    prefecture:   '香港',
    addressJa:    '香港 九龍 尖沙咀 ペニンシュラセンター',
    addressZh:    '香港九龍尖沙咀半島中心',
    lat:          22.2967,
    lng:          114.1722,
    tel:          '+852-2907-3828',
    hoursJa:      '営業時間はお問い合わせください',
    hoursZh:      '營業時間請洽詢',
    closedDaysJa: '要確認',
    closedDaysZh: '請確認',
    brands:       ['promise-ring'],
    whatsapp:     '85229073828',
    reservationUrl: 'https://diamondstorehk.com/',
    noteJa:       'プロミスリングの香港正規取扱店。尖沙咀ペニンシュラセンター内。',
    noteZh:       'Promise Ring香港正規經銷商，位於尖沙咀半島中心。',
    isMainStore:  false,
  },

  // ──────────────────────────────
  // 台湾
  // ──────────────────────────────
  {
    slug:         'taiwan-warmstory',
    nameJa:       'Warm Story 恆溫故事（台南）',
    nameEn:       'Warm Story',
    nameZh:       '恆溫故事',
    region:       'taiwan',
    prefecture:   '台南市',
    addressJa:    '台湾台南市中西区民権路二段64巷33号',
    addressZh:    '台灣台南市中西區民權路二段64巷33號',
    lat:          22.9972,
    lng:          120.2013,
    tel:          '+886-6-227-4688',
    hoursJa:      '12:30〜20:30（火〜日）',
    hoursZh:      '12:30〜20:30（週二至週日）',
    closedDaysJa: '月曜日',
    closedDaysZh: '星期一',
    brands:       ['heart-island'],
    reservationUrl: 'https://www.warmstory.tw/',
    line:         'https://line.me/R/ti/p/@warmstory',
    noteJa:       '完全予約制。一組ずつの完全個室対応。ハートアイランド台湾公式取扱店。',
    noteZh:       '完全預約制，一次僅接待一組客人，完全包廂服務。Heart Island台灣官方授權門市。',
    isMainStore:  true,
  },
  {
    slug:         'taipei-xinyi',
    nameJa:       '信義ブライダルスタジオ',
    nameEn:       'Xinyi Bridal Studio',
    nameZh:       '信義婚戒工作室',
    region:       'taiwan',
    prefecture:   '台北市',
    addressJa:    '台湾台北市信義区XX路XX號 △△ビルB1',
    addressZh:    '台灣台北市信義區XX路XX號 △△大廈B1',
    lat:          25.0338,
    lng:          121.5645,
    tel:          '+886-2-XXXX-XXXX',
    hoursJa:      '11:00〜20:30',
    hoursZh:      '11:00〜20:30',
    closedDaysJa: '月曜日',
    closedDaysZh: '星期一',
    brands:       ['cher-luv', 'ironoha', 'baum', 'anc-coeur', 'promise-ring'],
    line:         'https://line.me/R/ti/p/@xxxxxxxx',
    reservationUrl: 'https://example.com/reserve/taipei-xinyi',
    noteJa:       'LINE予約推奨。日本語での対応も可能です。',
    noteZh:       '推薦使用LINE預約。亦可提供日語服務。',
    isMainStore:  true,
  },
];

// ──────────────────────────────
// ヘルパー関数
// ──────────────────────────────

/** スラッグから店舗を取得 */
export function getStoreBySlug(slug: string): Store | undefined {
  return stores.find((s) => s.slug === slug);
}

/** 地域でフィルタリング */
export function getStoresByRegion(region: StoreRegion): Store[] {
  return stores.filter((s) => s.region === region);
}

/** ブランドslugで取り扱い店舗を取得 */
export function getStoresByBrand(brandSlug: string): Store[] {
  return stores.filter((s) => s.brands.includes(brandSlug));
}

/** 地域ラベル */
export const regionLabels: Record<StoreRegion, { ja: string; zh: string; en: string }> = {
  japan:     { ja: '日本',  zh: '日本', en: 'Japan' },
  hongkong:  { ja: '香港',  zh: '香港', en: 'Hong Kong' },
  taiwan:    { ja: '台湾',  zh: '台灣', en: 'Taiwan' },
};

import type { StoreRegion } from '@/types/store';
