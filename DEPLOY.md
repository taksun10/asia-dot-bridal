# asia.dot-bridal.com Vercelデプロイ手順書

## 前提条件

- GitHubアカウント（リポジトリ作成済み）
- Vercelアカウント（無料プランで可）
- `asia.dot-bridal.com` のDNS管理権限（dot-bridal.comのドメイン管理画面）

---

## Step 1：GitHubにプッシュ

```bash
# プロジェクトディレクトリで実行
cd asia-dot-bridal

git init
git add .
git commit -m "初回コミット：asia.dot-bridal.com"

# GitHubで空のリポジトリを作成後：
git remote add origin https://github.com/[your-username]/asia-dot-bridal.git
git branch -M main
git push -u origin main
```

---

## Step 2：Vercelにプロジェクトを作成

1. https://vercel.com にログイン
2. 「Add New → Project」をクリック
3. GitHubリポジトリ `asia-dot-bridal` を選択
4. 設定はそのまま（Next.jsを自動検出）
5. 「Deploy」をクリック

初回デプロイは約2〜3分で完了。

---

## Step 3：環境変数を設定

Vercelの「Settings → Environment Variables」に以下を追加：

| 変数名 | 値 | 対象環境 |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | SanityのプロジェクトID | Production, Preview |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Production, Preview |
| `SANITY_API_TOKEN` | Sanityのシークレットトークン | Production |
| `RESEND_API_KEY` | Resendのシークレットキー | Production |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `85200000000`（香港の番号） | All |
| `NEXT_PUBLIC_LINE_URL` | LINEの公式アカウントURL | All |
| `NEXT_PUBLIC_GA4_ID` | `G-XXXXXXXXXX` | Production |
| `NEXT_PUBLIC_SITE_URL` | `https://asia.dot-bridal.com` | Production |

設定後「Redeploy」を実行。

---

## Step 4：カスタムドメインの設定

### Vercel側
1. 「Settings → Domains」を開く
2. `asia.dot-bridal.com` を入力して「Add」
3. Vercelが表示するDNSレコードをメモする

### DNS側（ドメイン管理画面）
dot-bridal.comのDNS管理画面で以下を追加：

```
Type:  CNAME
Name:  asia
Value: cname.vercel-dns.com
```

または（Vercelが指定するAレコードを追加）：
```
Type:  A
Name:  asia
Value: 76.76.21.21
```

DNSの反映に5分〜48時間かかります。

---

## Step 5：本番リリース前の最終チェック

### SEO
```bash
# サイトマップ生成確認
npm run build
# .next/public/sitemap.xml が生成されていることを確認
```

### Google Search Console
1. https://search.google.com/search-console にアクセス
2. 「プロパティを追加」→ `asia.dot-bridal.com` を入力
3. Vercelに `TXT` レコードを追加して所有権を確認
4. 生成されたサイトマップURLを登録：
   `https://asia.dot-bridal.com/sitemap.xml`

### Google Analytics 4
1. https://analytics.google.com で新しいプロパティを作成
2. 「ウェブ」を選択して `asia.dot-bridal.com` を入力
3. 測定IDを `.env.local` と Vercel環境変数の `NEXT_PUBLIC_GA4_ID` に設定

### ページスピード確認
- https://pagespeed.web.dev/ で `asia.dot-bridal.com` を計測
- モバイルスコア80以上を目標とする

---

## Step 6：言語設定を本番用に切り替え

`src/i18n.ts` を開いて `defaultLocale` を変更：

```ts
// 変更前（開発用）
export const defaultLocale: Locale = 'ja';

// 変更後（本番用）
export const defaultLocale: Locale = 'zh';
```

変更後にコミット＆プッシュすると自動でデプロイされる。

---

## Step 7：WhatsApp・LINE番号の差し替え

プロジェクト内で `XXXXXXXXX` を検索して実際の番号/URLに差し替える：

```bash
# 差し替え箇所を一覧表示
grep -r "XXXXXXXXX" src/
```

対象ファイル：
- `src/components/sections/CtaSection.tsx`
- `src/app/[locale]/contact/page.tsx`
- `src/components/brand/BrandCta.tsx`

---

## デプロイ後の継続作業

| 時期 | 作業 |
|---|---|
| 公開直後 | Search Console にサイトマップ登録 |
| 1週間後 | Search Console のクロールエラーを確認 |
| 1ヶ月後 | GA4でページ別流入を確認・改善 |
| 随時 | 写真素材が揃い次第、各ブランドページに追加 |
| 随時 | ガイド記事の繁体字版を追加 |

---

## トラブルシューティング

### ビルドエラーが出る場合
```bash
# ローカルでビルドを確認
npm run build
# エラーメッセージを確認して対応
```

### 日本語フォントが表示されない場合
- Vercelのネットワーク設定でGoogle Fontsへのアクセスを確認
- `next/font` の設定が正しいか `src/app/[locale]/layout.tsx` を確認

### お問い合わせメールが届かない場合
- Vercel環境変数の `RESEND_API_KEY` を確認
- Resendのダッシュボードでメール送信ログを確認
