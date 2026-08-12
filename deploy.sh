#!/bin/bash
# =============================================================
# asia.dot-bridal.com — デプロイ自動化スクリプト
# 実行前に .env.local を設定済みであること
# =============================================================

set -e  # エラーで即停止

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

info()    { echo -e "${BLUE}ℹ  $1${NC}"; }
success() { echo -e "${GREEN}✅ $1${NC}"; }
warn()    { echo -e "${YELLOW}⚠  $1${NC}"; }
error()   { echo -e "${RED}❌ $1${NC}"; exit 1; }

echo ""
echo "======================================"
echo " dot·bridal ASIA — デプロイ開始"
echo "======================================"
echo ""

# ─── Step 1: 必要ツールの確認 ───
info "必要なツールを確認しています..."

command -v node >/dev/null 2>&1 || error "Node.js が見つかりません。https://nodejs.org からインストールしてください。"
command -v npm  >/dev/null 2>&1 || error "npm が見つかりません。"
command -v git  >/dev/null 2>&1 || error "git が見つかりません。"

NODE_VER=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$NODE_VER" -lt 18 ]; then
  error "Node.js 18以上が必要です。現在: $(node -v)"
fi
success "Node.js $(node -v) / npm $(npm -v)"

# ─── Step 2: .env.local の確認 ───
info ".env.local を確認しています..."

if [ ! -f ".env.local" ]; then
  if [ -f ".env.example" ]; then
    warn ".env.local が見つかりません。.env.example からコピーします。"
    cp .env.example .env.local
    warn "⚠  .env.local を開いて以下を設定してください:"
    warn "   NEXT_PUBLIC_WHATSAPP_NUMBER"
    warn "   NEXT_PUBLIC_LINE_URL"
    warn "   NEXT_PUBLIC_GA4_ID"
    warn "   NEXT_PUBLIC_GOOGLE_MAPS_KEY"
    echo ""
    read -p "設定が完了したら Enter を押してください..." _
  else
    error ".env.example が見つかりません。"
  fi
fi
success ".env.local 確認OK"

# ─── Step 3: npm install ───
info "依存パッケージをインストールしています..."
npm install --silent
success "npm install 完了"

# ─── Step 4: ビルドテスト ───
info "ビルドを実行しています（約1〜2分）..."
npm run build
success "ビルド成功"

# ─── Step 5: Git 初期化 ───
info "Git リポジトリを初期化しています..."

if [ ! -d ".git" ]; then
  git init
  git branch -M main
  success "Git 初期化完了"
else
  success "Git 既存リポジトリを使用"
fi

# .gitignore に .env.local が含まれているか確認
if ! grep -q ".env.local" .gitignore 2>/dev/null; then
  echo ".env.local" >> .gitignore
  warn ".env.local を .gitignore に追加しました"
fi

git add .
git commit -m "feat: asia.dot-bridal.com 初回コミット — 9ブランド84デザイン" 2>/dev/null || \
git commit --allow-empty -m "feat: asia.dot-bridal.com 初回コミット"
success "Git コミット完了"

# ─── Step 6: GitHub リポジトリへのプッシュ案内 ───
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " 📦 GitHub へのプッシュ手順"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo " 1. https://github.com/new にアクセス"
echo " 2. リポジトリ名: asia-dot-bridal"
echo " 3. Private を選択（ソースコード保護）"
echo " 4. 「Create repository」をクリック"
echo " 5. 表示されたURLを以下に入力してください"
echo ""
read -p " GitHub リポジトリ URL を入力 (例: https://github.com/yourname/asia-dot-bridal.git): " GITHUB_URL

if [ -n "$GITHUB_URL" ]; then
  git remote add origin "$GITHUB_URL" 2>/dev/null || git remote set-url origin "$GITHUB_URL"
  git push -u origin main
  success "GitHub へのプッシュ完了"
else
  warn "GitHub URL が未入力のためスキップ。後で手動でプッシュしてください。"
  warn "コマンド: git remote add origin <URL> && git push -u origin main"
fi

# ─── Step 7: Vercel CLI デプロイ ───
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " 🚀 Vercel デプロイ"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if command -v vercel >/dev/null 2>&1; then
  info "Vercel CLI が見つかりました。デプロイを開始します..."
  vercel --prod
  success "Vercel デプロイ完了"
else
  warn "Vercel CLI が見つかりません。以下の方法でデプロイしてください:"
  echo ""
  echo " 方法A（推奨）: Vercel ダッシュボード"
  echo "   1. https://vercel.com にログイン"
  echo "   2. 「Add New → Project」"
  echo "   3. GitHub の asia-dot-bridal を選択"
  echo "   4. 「Deploy」をクリック"
  echo ""
  echo " 方法B: Vercel CLI インストール後に実行"
  echo "   npm i -g vercel"
  echo "   vercel --prod"
fi

# ─── Step 8: 環境変数の設定リマインダー ───
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " ⚙️  Vercel 環境変数（必ず設定）"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo " Vercel ダッシュボード → Settings → Environment Variables"
echo ""
echo " 変数名                          | 説明"
echo " --------------------------------|------------------------"
echo " NEXT_PUBLIC_WHATSAPP_NUMBER     | 香港WhatsApp番号"
echo " NEXT_PUBLIC_LINE_URL            | 台湾LINE公式URL"
echo " NEXT_PUBLIC_GA4_ID              | Google Analytics 4 ID"
echo " NEXT_PUBLIC_GOOGLE_MAPS_KEY     | Google Maps Embed API"
echo " RESEND_API_KEY                  | メール送信（Resend）"
echo " NEXT_PUBLIC_SANITY_PROJECT_ID   | Sanity CMS（後で設定可）"
echo " NEXT_PUBLIC_SANITY_DATASET      | production"
echo ""

# ─── Step 9: DNS 設定案内 ───
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " 🌐 DNS 設定（dot-bridal.com 管理画面）"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo " Type:  CNAME"
echo " Name:  asia"
echo " Value: cname.vercel-dns.com"
echo ""
echo " 設定後、Vercel の Settings → Domains に"
echo " asia.dot-bridal.com を追加してください。"
echo ""

success "デプロイスクリプト完了 🎉"
echo ""
echo " 次のステップ:"
echo " 1. Vercel に環境変数を設定"
echo " 2. DNS に CNAME レコードを追加"
echo " 3. Google Search Console に asia.dot-bridal.com を登録"
echo " 4. src/i18n.ts の defaultLocale を 'ja' → 'zh' に変更（本番切替時）"
echo ""
