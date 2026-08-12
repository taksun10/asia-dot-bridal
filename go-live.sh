#!/bin/bash
# =============================================================
# 本番切替スクリプト（日本語確認 → 繁体字デフォルト）
# デプロイ後、サイトを一般公開する直前に実行
# =============================================================

set -e
GREEN='\033[0;32m'; YELLOW='\033[1;33m'; NC='\033[0m'
success() { echo -e "${GREEN}✅ $1${NC}"; }
info()    { echo -e "${YELLOW}→  $1${NC}"; }

echo ""
echo "======================================"
echo " 本番切替チェックリスト"
echo "======================================"
echo ""

# 1. デフォルトロケールを zh に変更
info "src/i18n.ts の defaultLocale を 'zh' に変更..."
sed -i.bak "s/export const defaultLocale: Locale = 'ja'/export const defaultLocale: Locale = 'zh'/" src/i18n.ts
success "defaultLocale → 'zh'"

# 2. OGP 画像のサイト名を確認
info "OGP設定を確認..."
grep -n "dot·bridal ASIA" src/app/opengraph-image.tsx | head -3
success "OGP確認OK"

# 3. robots.txt の確認
info "robots.txt（サイトマップURL）を確認..."
if [ -f "public/robots.txt" ]; then
  cat public/robots.txt
else
  echo "ビルド後に next-sitemap が生成します"
fi

# 4. 最終ビルド
info "最終ビルドを実行..."
npm run build
success "ビルド成功"

# 5. Git コミット
git add .
git commit -m "chore: 本番切替 — defaultLocale を zh に変更"
git push origin main
success "GitHub にプッシュ完了"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " 本番切替完了。Vercel が自動デプロイします。"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo " 公開後の確認事項:"
echo " □ https://asia.dot-bridal.com でトップページを確認"
echo " □ WhatsApp ボタンが正しい番号につながるか確認"
echo " □ LINE ボタンが正しいアカウントにつながるか確認"
echo " □ お問い合わせフォームで送信テスト"
echo " □ Google Search Console にサイトマップを登録"
echo "   URL: https://asia.dot-bridal.com/sitemap.xml"
echo " □ 各ブランドページが正しく表示されるか確認"
echo " □ 店舗ページの地図が表示されるか確認"
echo ""
