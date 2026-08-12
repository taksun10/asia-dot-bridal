// ブランドデータの型定義
export type BrandStyle = 'romantic' | 'elegant' | 'japanese-modern' | 'minimal';

export interface Brand {
  slug: string;         // URLスラッグ（英語）
  nameJa: string;       // ブランド名（日本語）
  nameEn: string;       // ブランド名（英語）
  taglineJa: string;    // キャッチコピー（日本語）
  taglineZh: string;    // キャッチコピー（繁体字）
  descJa: string;       // ブランド説明（日本語）
  descZh: string;       // ブランド説明（繁体字）
  style: BrandStyle;    // スタイル分類
  priceRange: string;   // 価格帯目安（例: "HK$8,000〜"）
  featured: boolean;    // TOPページでフィーチャーするか
  color: string;        // ブランドカードの背景色
}

// お問い合わせフォームの型
export interface ContactForm {
  name: string;
  region: 'hongkong' | 'taiwan' | 'other';
  brand?: string;
  message: string;
  email: string;
}
