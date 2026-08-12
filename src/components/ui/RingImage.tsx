'use client';

import { useState } from 'react';
import Image from 'next/image';

interface RingImageProps {
  src?: string;
  alt: string;
  brandName?: string;
  brandColor?: string;
  aspectRatio?: '1/1' | '3/2' | '4/3' | '16/9';
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

/**
 * RingImage — 3段階フォールバック付き画像コンポーネント
 * 1. src あり → next/image で最適化表示
 * 2. 読み込み失敗 → プレースホルダー
 * 3. src なし → プレースホルダー
 */
export default function RingImage({
  src,
  alt,
  brandName,
  brandColor = '#F8F5F0',
  aspectRatio = '3/2',
  className = '',
  priority = false,
  fill = false,
}: RingImageProps) {
  const [error, setError] = useState(false);
  const showPlaceholder = !src || error;

  const placeholder = (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3"
      style={{ background: brandColor }}
      aria-label={alt}
      role="img"
    >
      <div style={{ width: '72px', height: '72px', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '48px', height: '48px', border: '1px solid rgba(201,168,76,0.5)', borderRadius: '50%' }} />
      </div>
      {brandName && (
        <span style={{ fontFamily: 'var(--font-serif-en)', fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)' }}>
          {brandName}
        </span>
      )}
    </div>
  );

  const content = showPlaceholder ? placeholder : (
    <Image
      src={src!}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover"
      priority={priority}
      onError={() => setError(true)}
    />
  );

  if (fill) return <div className={`relative ${className}`}>{content}</div>;

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio }}>
      {content}
    </div>
  );
}
