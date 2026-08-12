import type { Metadata } from 'next';
import { brands } from '@/lib/brands';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import WhyJapan from '@/components/sections/WhyJapan';
import BrandsGrid from '@/components/sections/BrandsGrid';
import StylesSection from '@/components/sections/StylesSection';
import JournalSection from '@/components/sections/JournalSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';
import SiteWideScripts from '@/components/layout/SiteWideScripts';

export const metadata: Metadata = {
  title: '日本ブライダルリング 厳選9ブランド | dot·bridal ASIA',
  description: '香港・台湾のカップルへ届ける、日本の職人ブライダルリング。アグローヴ厳選9ブランド・84デザインを比較・相談。',
};

export default function HomePage() {
  return (
    <>
      <SiteWideScripts ga4Id={process.env.NEXT_PUBLIC_GA4_ID} />
      <Navbar />
      <main>
        <Hero />
        <WhyJapan />
        <BrandsGrid brands={brands} />
        <StylesSection />
        <JournalSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
