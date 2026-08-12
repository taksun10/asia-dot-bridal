#!/bin/bash
# =============================================================
# Vercel 環境変数一括設定スクリプト
# 前提: vercel login 済み、プロジェクトが Vercel に紐付け済み
# 使い方: bash set-env.sh
# =============================================================

set -e
GREEN='\033[0;32m'; BLUE='\033[0;34m'; NC='\033[0m'
success() { echo -e "${GREEN}✅ $1${NC}"; }
info()    { echo -e "${BLUE}→  $1${NC}"; }

# .env.local を読み込んで Vercel に設定する
if [ ! -f ".env.local" ]; then
  echo "❌ .env.local が見つかりません"; exit 1
fi

echo ""
echo "Vercel 環境変数を設定します..."
echo ""

# NEXT_PUBLIC_* は全環境に設定、シークレットは本番のみ
while IFS='=' read -r key value; do
  # コメント行・空行をスキップ
  [[ "$key" =~ ^#.*$ ]] && continue
  [[ -z "$key" ]] && continue
  # YOUR_ や example の値はスキップ
  [[ "$value" =~ YOUR_|example|XXXXXXXXX|G-XXXXXXXXXX ]] && continue

  if [[ "$key" == NEXT_PUBLIC_* ]]; then
    info "設定: $key (全環境)"
    echo "$value" | vercel env add "$key" production --force 2>/dev/null || true
    echo "$value" | vercel env add "$key" preview    --force 2>/dev/null || true
    echo "$value" | vercel env add "$key" development --force 2>/dev/null || true
  else
    info "設定: $key (本番のみ)"
    echo "$value" | vercel env add "$key" production --force 2>/dev/null || true
  fi
done < .env.local

success "環境変数の設定が完了しました"
echo ""
echo "Vercel ダッシュボードで確認:"
echo "https://vercel.com/dashboard → プロジェクト → Settings → Environment Variables"
echo ""
