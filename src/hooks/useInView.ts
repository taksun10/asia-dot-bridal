'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean; // 一度表示したら監視を止める（デフォルト true）
}

/**
 * useInView
 * 要素がビューポートに入ったかどうかを検出するフック
 * fade-up アニメーションや遅延ロードに使用
 */
export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.12, rootMargin = '0px', once = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}

/**
 * useFadeUp
 * よく使うパターンのショートカット
 * 返り値の ref を要素にアタッチし、style を適用する
 */
export function useFadeUp(delay = 0) {
  const { ref, inView } = useInView();

  const style: React.CSSProperties = {
    opacity:         inView ? 1 : 0,
    transform:       inView ? 'translateY(0)' : 'translateY(24px)',
    transition:      `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  };

  return { ref, style };
}
