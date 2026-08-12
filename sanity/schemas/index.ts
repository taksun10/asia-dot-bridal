// sanity/schemas/store.ts
export const storeSchema = {
  name: 'store',
  title: '店舗',
  type: 'document',
  fields: [
    { name: 'slug',         title: 'スラッグ（URL）',          type: 'slug', options: { source: 'nameEn' }, validation: (R: any) => R.required() },
    { name: 'nameJa',       title: '店舗名（日本語）',          type: 'string', validation: (R: any) => R.required() },
    { name: 'nameEn',       title: '店舗名（英語）',            type: 'string' },
    { name: 'nameZh',       title: '店舗名（繁体字）',          type: 'string' },
    { name: 'region',       title: '地域',                      type: 'string', options: { list: [{ title: '日本', value: 'japan' }, { title: '香港', value: 'hongkong' }, { title: '台湾', value: 'taiwan' }] } },
    { name: 'prefecture',   title: '都道府県・地域名',          type: 'string' },
    { name: 'addressJa',    title: '住所（日本語）',            type: 'string' },
    { name: 'addressZh',    title: '住所（繁体字）',            type: 'string' },
    { name: 'lat',          title: '緯度',                      type: 'number' },
    { name: 'lng',          title: '経度',                      type: 'number' },
    { name: 'tel',          title: '電話番号',                  type: 'string' },
    { name: 'hoursJa',      title: '営業時間（日本語）',        type: 'string' },
    { name: 'hoursZh',      title: '営業時間（繁体字）',        type: 'string' },
    { name: 'closedDaysJa', title: '定休日（日本語）',          type: 'string' },
    { name: 'closedDaysZh', title: '定休日（繁体字）',          type: 'string' },
    { name: 'brands',       title: '取り扱いブランド',          type: 'array', of: [{ type: 'reference', to: [{ type: 'brand' }] }] },
    { name: 'reservationUrl', title: '試着予約URL',             type: 'url' },
    { name: 'whatsapp',     title: 'WhatsApp番号',              type: 'string', description: '例: 85200000000' },
    { name: 'line',         title: 'LINE URL',                  type: 'url' },
    { name: 'noteJa',       title: '備考（日本語）',            type: 'text', rows: 2 },
    { name: 'noteZh',       title: '備考（繁体字）',            type: 'text', rows: 2 },
    { name: 'isMainStore',  title: 'メイン店舗',                type: 'boolean', initialValue: false },
    { name: 'heroImage',    title: '外観写真',                  type: 'image', options: { hotspot: true } },
  ],
  preview: {
    select: { title: 'nameJa', subtitle: 'region', media: 'heroImage' },
  },
};

// sanity/schemas/brand.ts
// Sanity Studio のスキーマ定義
// セットアップ：npx sanity init でプロジェクト作成後にこのファイルをschemas/に配置

export const brandSchema = {
  name: 'brand',
  title: 'ブランド',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'スラッグ（URL）',
      type: 'slug',
      options: { source: 'nameEn' },
      validation: (R: any) => R.required(),
    },
    {
      name: 'nameJa',
      title: 'ブランド名（日本語）',
      type: 'string',
      validation: (R: any) => R.required(),
    },
    {
      name: 'nameEn',
      title: 'ブランド名（英語）',
      type: 'string',
      validation: (R: any) => R.required(),
    },
    {
      name: 'taglineJa',
      title: 'キャッチコピー（日本語）',
      type: 'string',
    },
    {
      name: 'taglineZh',
      title: 'キャッチコピー（繁体字）',
      type: 'string',
    },
    {
      name: 'descJa',
      title: 'ブランド説明（日本語）',
      type: 'text',
      rows: 4,
    },
    {
      name: 'descZh',
      title: 'ブランド説明（繁体字）',
      type: 'text',
      rows: 4,
    },
    {
      name: 'heroImage',
      title: 'ヒーロー画像',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'galleryImages',
      title: 'ギャラリー画像',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'style',
      title: 'スタイル分類',
      type: 'string',
      options: {
        list: [
          { title: 'ロマンティック', value: 'romantic' },
          { title: 'エレガント',     value: 'elegant' },
          { title: '和モダン',       value: 'japanese-modern' },
          { title: 'シンプル',       value: 'minimal' },
        ],
      },
    },
    {
      name: 'priceRange',
      title: '参考価格帯',
      type: 'string',
      description: '例: HK$10,000〜',
    },
    {
      name: 'featured',
      title: 'TOPページでフィーチャーする',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'color',
      title: 'カードの背景色（16進数）',
      type: 'string',
      description: '例: #F5EAEA',
    },
    {
      name: 'order',
      title: '表示順',
      type: 'number',
    },
  ],
  preview: {
    select: { title: 'nameJa', subtitle: 'nameEn', media: 'heroImage' },
  },
};

// sanity/schemas/article.ts
export const articleSchema = {
  name: 'article',
  title: '記事（ジャーナル・ガイド）',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'スラッグ（URL）',
      type: 'slug',
      options: { source: 'titleJa' },
      validation: (R: any) => R.required(),
    },
    {
      name: 'category',
      title: 'カテゴリ',
      type: 'string',
      options: {
        list: [
          { title: 'ブランドガイド',   value: 'brand-guide' },
          { title: '素材・技術',       value: 'material' },
          { title: '選び方・比較',     value: 'comparison' },
          { title: '購買ガイド',       value: 'buying-guide' },
          { title: 'ジャーナル',       value: 'journal' },
        ],
      },
    },
    {
      name: 'titleJa',
      title: 'タイトル（日本語）',
      type: 'string',
      validation: (R: any) => R.required(),
    },
    {
      name: 'titleZh',
      title: 'タイトル（繁体字）',
      type: 'string',
    },
    {
      name: 'excerptJa',
      title: '概要（日本語）',
      type: 'text',
      rows: 3,
    },
    {
      name: 'excerptZh',
      title: '概要（繁体字）',
      type: 'text',
      rows: 3,
    },
    {
      name: 'bodyJa',
      title: '本文（日本語）',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      name: 'bodyZh',
      title: '本文（繁体字）',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      name: 'coverImage',
      title: 'カバー画像',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'publishedAt',
      title: '公開日',
      type: 'datetime',
    },
    {
      name: 'relatedBrands',
      title: '関連ブランド',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'brand' }] }],
    },
    {
      name: 'seoDescJa',
      title: 'SEOメタディスクリプション（日本語）',
      type: 'string',
      description: '120〜160文字',
    },
    {
      name: 'seoDescZh',
      title: 'SEOメタディスクリプション（繁体字）',
      type: 'string',
    },
  ],
  preview: {
    select: { title: 'titleJa', subtitle: 'category', media: 'coverImage' },
  },
};
