import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity クライアントの初期化
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // 本番は true、プレビューは false
});

// 画像URL生成ヘルパー
const builder = imageUrlBuilder(sanityClient);
export function sanityImage(source: any) {
  return builder.image(source);
}

// ブランド一覧を取得（Sanity版）
// 現在は src/lib/brands.ts の静的データを使用
// Sanity CMS 設定後にこの関数に差し替える
export async function fetchBrandsFromSanity() {
  const query = `*[_type == "brand"] | order(order asc) {
    "slug": slug.current,
    nameJa,
    nameEn,
    taglineJa,
    taglineZh,
    descJa,
    descZh,
    style,
    priceRange,
    featured,
    color,
    heroImage
  }`;
  return sanityClient.fetch(query);
}

// 記事一覧を取得
export async function fetchArticles(category?: string) {
  const filter = category
    ? `*[_type == "article" && category == "${category}"]`
    : `*[_type == "article"]`;

  const query = `${filter} | order(publishedAt desc) {
    "slug": slug.current,
    category,
    titleJa,
    titleZh,
    excerptJa,
    excerptZh,
    coverImage,
    publishedAt
  }`;
  return sanityClient.fetch(query);
}

// 記事個別ページを取得
export async function fetchArticleBySlug(slug: string) {
  const query = `*[_type == "article" && slug.current == $slug][0] {
    "slug": slug.current,
    category,
    titleJa,
    titleZh,
    excerptJa,
    excerptZh,
    bodyJa,
    bodyZh,
    coverImage,
    publishedAt,
    seoDescJa,
    seoDescZh,
    "relatedBrands": relatedBrands[]-> {
      "slug": slug.current,
      nameJa,
      nameEn,
      taglineJa,
      color
    }
  }`;
  return sanityClient.fetch(query, { slug });
}
