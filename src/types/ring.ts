// 個別商品（リングデザイン）の型定義

export type RingCategory = 'marriage' | 'engagement' | 'set';

export interface Ring {
  slug:          string;       // URLスラッグ
  brandSlug:     string;       // 所属ブランドのslug
  nameEn:        string;       // デザイン名（英語）
  nameJa:        string;       // デザイン名（日本語）
  nameZh:        string;       // デザイン名（繁体字）
  category:      RingCategory; // marriage / engagement / set
  conceptJa:     string;       // コンセプト（花言葉・意味など）日本語
  conceptZh:     string;       // コンセプト（繁体字）
  descJa:        string;       // 詳細説明（日本語）
  descZh:        string;       // 詳細説明（繁体字）
  priceJPY:      number;       // 参考価格（円・税込・1本）
  priceHighJPY?: number;       // 上限価格（円）
  imageUrl:      string;       // オリジナルサイトの画像URL（本番移行まで参照用）
  originalUrl:   string;       // オリジナルサイトのページURL
  materials:     string[];     // 素材選択肢（例: ["Pt950","K18WG"]）
  featured:      boolean;      // ブランドページでフィーチャーするか
}

// JPY → HKD 変換（参考レート：1 JPY = 0.053 HKD）
export function jpyToHkd(jpy: number): number {
  return Math.round(jpy * 0.053 / 1000) * 1000;
}

// HKD 表示フォーマット
export function formatHkd(hkd: number): string {
  return `HK$${hkd.toLocaleString()}〜`;
}

// JPY 表示フォーマット
export function formatJpy(jpy: number): string {
  return `¥${jpy.toLocaleString()}〜`;
}
