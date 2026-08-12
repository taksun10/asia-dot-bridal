'use client';

import { useState } from 'react';
import { brands } from '@/lib/brands';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // 本番環境では Resend などのメール送信APIに差し替える
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name:    data.get('name'),
          region:  data.get('region'),
          brand:   data.get('brand'),
          message: data.get('message'),
          email:   data.get('email'),
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error('送信失敗');
      setState('success');
      form.reset();
    } catch {
      setState('error');
    }
  }

  // 送信成功
  if (state === 'success') {
    return (
      <div className="py-10 text-center">
        <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-gold text-lg">✓</span>
        </div>
        <p className="font-serif-ja text-lg">ありがとうございます</p>
        <p className="text-mid text-sm mt-2">
          2営業日以内にご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* お名前 */}
      <div>
        <label className="block text-xs tracking-widest uppercase text-mid mb-2">
          お名前 <span className="text-gold">*</span>
        </label>
        <input
          name="name"
          type="text"
          required
          className="w-full border border-gold/30 bg-white px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none transition-colors"
          placeholder="山田 花子"
        />
      </div>

      {/* メールアドレス */}
      <div>
        <label className="block text-xs tracking-widest uppercase text-mid mb-2">
          メールアドレス <span className="text-gold">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full border border-gold/30 bg-white px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none transition-colors"
          placeholder="example@email.com"
        />
      </div>

      {/* お住まいの地域 */}
      <div>
        <label className="block text-xs tracking-widest uppercase text-mid mb-2">
          お住まいの地域 <span className="text-gold">*</span>
        </label>
        <select
          name="region"
          required
          className="w-full border border-gold/30 bg-white px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none transition-colors appearance-none"
        >
          <option value="">選択してください</option>
          <option value="hongkong">香港</option>
          <option value="taiwan">台湾</option>
          <option value="other">その他</option>
        </select>
      </div>

      {/* 気になるブランド（任意） */}
      <div>
        <label className="block text-xs tracking-widest uppercase text-mid mb-2">
          気になるブランド（任意）
        </label>
        <select
          name="brand"
          className="w-full border border-gold/30 bg-white px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none transition-colors appearance-none"
        >
          <option value="">未選択</option>
          {brands.map((b) => (
            <option key={b.slug} value={b.slug}>
              {b.nameJa}（{b.nameEn}）
            </option>
          ))}
        </select>
      </div>

      {/* ご質問・ご要望 */}
      <div>
        <label className="block text-xs tracking-widest uppercase text-mid mb-2">
          ご質問・ご要望 <span className="text-gold">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full border border-gold/30 bg-white px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none transition-colors resize-none"
          placeholder="ご予算・気になるデザイン・ご来店希望など、お気軽にお書きください。"
        />
      </div>

      {/* エラー表示 */}
      {state === 'error' && (
        <p className="text-red-500 text-sm">
          送信に失敗しました。WhatsAppまたはLINEよりご連絡ください。
        </p>
      )}

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={state === 'sending'}
        className="self-start px-8 py-3 bg-ink text-white text-sm tracking-widest transition-colors hover:bg-gold disabled:opacity-50"
      >
        {state === 'sending' ? '送信中...' : '送信する →'}
      </button>
    </form>
  );
}
