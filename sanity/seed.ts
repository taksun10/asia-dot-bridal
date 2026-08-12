/**
 * Sanity データ初期投入スクリプト
 *
 * 使い方：
 *   1. .env.local に SANITY_API_TOKEN を設定
 *   2. npx tsx sanity/seed.ts
 *
 * 実行すると brands コレクションに8ブランドのデータが投入される。
 * 既存データとの重複を避けるため、slug でチェックしてから投入。
 */

import { createClient } from '@sanity/client';
import { brands } from '../src/lib/brands';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false, // 書き込み時は false
});

async function seed() {
  console.log('📦 Sanity データ初期投入を開始します...\n');

  for (let index = 0; index < brands.length; index++) {
    const brand = brands[index];
    // 既存データのチェック
    const existing = await client.fetch(
      `*[_type == "brand" && slug.current == $slug][0]._id`,
      { slug: brand.slug },
    );

    if (existing) {
      console.log(`⏭  スキップ（既存）: ${brand.nameJa}`);
      continue;
    }

    // データを投入
    await client.create({
      _type:      'brand',
      slug:       { _type: 'slug', current: brand.slug },
      nameJa:     brand.nameJa,
      nameEn:     brand.nameEn,
      taglineJa:  brand.taglineJa,
      taglineZh:  brand.taglineZh,
      descJa:     brand.descJa,
      descZh:     brand.descZh,
      style:      brand.style,
      priceRange: brand.priceRange,
      featured:   brand.featured,
      color:      brand.color,
      order:      index + 1,
    });

    console.log(`✅ 投入完了: ${brand.nameJa} (${brand.nameEn})`);
  }

  console.log('\n🎉 全ブランドの初期投入が完了しました。');
}

seed().catch((err) => {
  console.error('❌ エラーが発生しました:', err);
  process.exit(1);
});
