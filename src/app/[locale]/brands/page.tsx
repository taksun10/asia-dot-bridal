import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTranslations } from 'next-intl';
import { brands } from '@/lib/brands';
import BrandCard from '@/components/brand/BrandCard';

export default function BrandsPage() {
  const t = useTranslations('brands');

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
      {/* ページヘッダー */}
      <div className="container mx-auto px-[clamp(1.25rem,5vw,4rem)]">
        <div className="py-16 border-b border-gold/20">
          <span className="block font-serif-en text-xs tracking-[0.25em] uppercase text-gold mb-3">
            Our Brands
          </span>
          <h1 className="font-serif-ja text-[clamp(2rem,4vw,3rem)] font-light">
            {t('title')}
          </h1>
          <p className="mt-4 text-mid text-sm max-w-prose leading-relaxed">
            アグローヴが手がける8つのブライダルリングブランド。
            それぞれ異なる世界観と美意識を持ち、あなたたちの物語に寄り添うリングを提案します。
          </p>
        </div>
      </div>

      {/* ブランドグリッド */}
      <div className="container mx-auto px-[clamp(1.25rem,5vw,4rem)] mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, i) => (
            <BrandCard key={brand.slug} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}
