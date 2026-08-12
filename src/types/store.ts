// 店舗データの型定義

export type StoreRegion = 'japan' | 'hongkong' | 'taiwan';

export interface Store {
  slug:           string;       // URLスラッグ
  nameJa:         string;       // 店舗名（日本語）
  nameEn:         string;       // 店舗名（英語）
  nameZh:         string;       // 店舗名（繁体字）
  region:         StoreRegion;  // 地域
  prefecture:     string;       // 都道府県・地域名
  addressJa:      string;       // 住所（日本語）
  addressZh:      string;       // 住所（繁体字）
  lat:            number;       // 緯度（Google Maps）
  lng:            number;       // 経度（Google Maps）
  tel:            string;       // 電話番号
  hoursJa:        string;       // 営業時間（日本語）
  hoursZh:        string;       // 営業時間（繁体字）
  closedDaysJa:   string;       // 定休日（日本語）
  closedDaysZh:   string;       // 定休日（繁体字）
  brands:         string[];     // 取り扱いブランドのslug配列
  reservationUrl?: string;      // 試着予約URL（任意）
  whatsapp?:      string;       // 店舗別WhatsApp（任意）
  line?:          string;       // 店舗別LINE（任意）
  noteJa?:        string;       // 備考（日本語）
  noteZh?:        string;       // 備考（繁体字）
  isMainStore:    boolean;      // メイン店舗フラグ
}
