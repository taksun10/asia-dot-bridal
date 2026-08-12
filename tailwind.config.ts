import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ブランドカラー（デザイントークン）
      colors: {
        ink:        '#1A1A1A',
        washi:      '#F8F5F0',
        gold:       '#C9A84C',
        'gold-light': '#E8D9A8',
        sakura:     '#E8C4C4',
        'sakura-pale': '#F5EAEA',
        mid:        '#6B6560',
      },
      // フォントファミリー
      fontFamily: {
        'serif-ja': ['Noto Serif JP', 'serif'],
        'serif-en': ['Cormorant Garamond', 'serif'],
        'sans-ja':  ['Noto Sans JP', 'sans-serif'],
      },
      // アニメーション
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fall':       'fall linear infinite',
        'pulse-line': 'pulseLine 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fall: {
          '0%':   { transform: 'translateY(-10px) rotate(0deg)', opacity: '0.5' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        },
        pulseLine: {
          '0%, 100%': { width: '40px', opacity: '1' },
          '50%':      { width: '60px', opacity: '0.4' },
        },
      },
      // スペーシング（セクション間隔）
      spacing: {
        section: 'clamp(5rem, 10vw, 8rem)',
      },
    },
  },
  plugins: [],
};

export default config;
