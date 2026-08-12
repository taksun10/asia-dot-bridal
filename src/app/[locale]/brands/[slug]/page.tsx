import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { brands, getBrandBySlug } from '@/lib/brands';
import BrandDetailHero from '@/components/brand/BrandDetailHero';
import BrandStory from '@/components/brand/BrandStory';
import BrandStores from '@/components/brand/BrandStores';
import BrandCta from '@/components/brand/BrandCta';
import RelatedBrands from '@/components/brand/RelatedBrands';

interface Props {
  params: { locale: string; slug: string };
}

// ビルド時に全ブランドページを静的生成
export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

// SEOメタデータ（ブランド別）
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const brand = getBrandBySlug(params.slug);
  if (!brand) return {};

  const baseUrl = 'https://asia.dot-bridal.com';
  const url = `${baseUrl}/brands/${brand.slug}`;

  return {
    title: `${brand.nameJa}（${brand.nameEn}）| 日本ブライダルリング | dot·bridal ASIA`,
    description: brand.descJa,
    alternates: { canonical: url },
    openGraph: {
      title: `${brand.nameJa} | dot·bridal ASIA`,
      description: brand.taglineJa,
      url,
    },
    // 構造化データ（JSON-LD）は BrandDetailHero コンポーネント内で <Script> として出力
  };
}

export default function BrandDetailPage({ params }: Props) {
  const brand = getBrandBySlug(params.slug);

  // 存在しないスラッグは404
  if (!brand) notFound();

  // 関連ブランド（同スタイルの他ブランド3社まで）
  const related = brands
    .filter((b) => b.style === brand.style && b.slug !== brand.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
      {/* ヒーロー＋ブランドストーリー */}
      <BrandDetailHero brand={brand} />
      <BrandStory brand={brand} />

      {/* 取り扱い店舗 */}
      <BrandStores brandSlug={brand.slug} />

      {/* お問い合わせCTA */}
      <BrandCta brand={brand} />

      {/* 関連ブランド（内部リンク強化） */}
      {related.length > 0 && <RelatedBrands brands={related} />}
    </main>
      <Footer />
    </>
  );
}
