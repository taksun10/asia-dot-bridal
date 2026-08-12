# asia.dot-bridal.com

株式会社アグローヴ 香港・台湾向けブライダルリングポータルサイト

## 技術スタック

| レイヤー | 技術 |
|---|---|
| フレームワーク | Next.js 14（App Router） |
| スタイリング | Tailwind CSS |
| 国際化 | next-intl（ja / zh / en） |
| CMS | Sanity（予定） |
| ホスティング | Vercel |
| メール送信 | Resend（APIルート経由） |
| サイトマップ | next-sitemap |

## ローカル開発手順

```bash
# 1. 依存パッケージをインストール
npm install

# 2. 環境変数を設定
cp .env.example .env.local
# .env.local を編集して各APIキーを入力

# 3. 開発サーバー起動
npm run dev
# → http://localhost:3000 で確認
```

## ディレクトリ構成

```
src/
├── app/
│   ├── [locale]/          # ロケール別ルーティング
│   │   ├── layout.tsx     # フォント・メタ・hreflang
│   │   ├── page.tsx       # TOPページ
│   │   ├── brands/        # ブランド一覧・個別
│   │   ├── styles/        # スタイル別
│   │   ├── guide/         # 選び方ガイド
│   │   ├── journal/       # ジャーナル
│   │   └── contact/       # お問い合わせ
│   ├── api/
│   │   └── contact/       # メール送信APIルート
│   └── globals.css
├── components/
│   ├── sections/          # TOPページの各セクション
│   ├── brand/             # ブランド関連コンポーネント
│   ├── layout/            # Navbar, Footer
│   └── ui/                # 汎用UIパーツ
├── lib/
│   └── brands.ts          # ブランドマスターデータ
├── types/
│   └── brand.ts           # 型定義
├── i18n.ts                # next-intl設定
└── middleware.ts           # 言語ルーティング

messages/
├── ja.json                # 日本語（確認用・開発デフォルト）
├── zh.json                # 繁体字中国語（本番デフォルト）
└── en.json                # 英語

```

## 本番リリース前のチェックリスト

- [ ] `.env.local` の全APIキーを入力
- [ ] WhatsApp番号・LINE URLを実際のものに差し替え
- [ ] 各ブランドの画像を `/public/images/brands/` に配置
- [ ] `src/i18n.ts` の `defaultLocale` を `'ja'` → `'zh'` に変更
- [ ] Vercel環境変数に本番用の値を設定
- [ ] Google Search Console に `asia.dot-bridal.com` を登録
- [ ] GA4 のプロパティを作成してIDを設定
- [ ] `next-sitemap` でサイトマップ生成確認

## ロケール切替

- `/`         → 繁体字（本番のデフォルト）
- `/ja/`      → 日本語（確認・管理用）
- `/en/`      → 英語

開発中は `src/i18n.ts` の `defaultLocale` が `'ja'` なので、
`/` アクセスで日本語が表示される。

---

## クイックデプロイ（v9〜）

```bash
# 1. 環境変数を設定
cp .env.example .env.local
# .env.local を編集

# 2. デプロイ（Git初期化・ビルド・GitHub・Vercel を一括実行）
bash deploy.sh

# 3. 本番切替（確認完了後に実行）
bash go-live.sh
```

## 現在のデータ規模

| 種別 | 数 |
|---|---|
| ブランド | 9社 |
| 商品（リング） | 84デザイン |
| 店舗 | 7店舗（日本3・香港2・台湾2） |
| 言語 | 日本語・繁体字・英語 |
| SEOガイド記事 | 8本 |

## 写真の差し替え方法

各商品の画像URLは `src/lib/rings.ts` の `imageUrl` フィールドで管理。
写真が揃ったら以下の2通りで差し替え可能：

1. **外部URL方式（即時対応）**: `imageUrl` を本番写真のURLに変更
2. **ローカル配置方式（推奨）**: `/public/images/rings/[slug].jpg` に配置し `imageUrl: '/images/rings/[slug].jpg'` に変更
