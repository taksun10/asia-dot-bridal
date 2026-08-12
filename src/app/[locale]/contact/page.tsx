import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';

export const metadata = {
  title: 'お問い合わせ | dot·bridal ASIA',
  description: '日本ブライダルリングについてのご相談はこちら。WhatsApp・LINE・メールフォームでお気軽にどうぞ。',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
      <div className="container mx-auto px-[clamp(1.25rem,5vw,4rem)]">
        <div className="max-w-2xl mx-auto">
          <div className="py-16">
            <span className="block font-serif-en text-xs tracking-[0.25em] uppercase text-gold mb-3">
              Contact Us
            </span>
            <h1 className="font-serif-ja text-[clamp(1.8rem,3vw,2.8rem)] font-light mb-4">
              お問い合わせ
            </h1>
            <p className="text-mid text-sm leading-relaxed mb-12">
              ブランドについてのご質問、試着のご相談、香港・台湾への配送方法など、
              お気軽にご連絡ください。
            </p>

            {/* クイックCTA（WhatsApp / LINE） */}
            <div className="flex gap-4 mb-12 flex-wrap">
              <a
                href="https://wa.me/XXXXXXXXX"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm tracking-wide transition-opacity hover:opacity-85"
              >
                WhatsApp（香港向け）
              </a>
              <a
                href="https://line.me/XXXXXXXXX"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#06C755] text-white text-sm tracking-wide transition-opacity hover:opacity-85"
              >
                LINE（台湾向け）
              </a>
            </div>

            {/* メールフォーム */}
            <div className="border-t border-gold/20 pt-10">
              <h2 className="font-serif-ja text-lg font-light mb-6">メールでのお問い合わせ</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}
