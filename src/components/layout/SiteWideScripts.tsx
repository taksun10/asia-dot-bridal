import Script from 'next/script';

// サイト全体の構造化データ（Organization）
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type':  'Organization',
      '@id':    'https://asia.dot-bridal.com/#organization',
      name:     'dot·bridal ASIA',
      alternateName: '株式会社アグローヴ',
      url:      'https://asia.dot-bridal.com',
      logo: {
        '@type': 'ImageObject',
        url:     'https://asia.dot-bridal.com/logo.png',
        width:   400,
        height:  100,
      },
      sameAs: [
        'https://www.dot-bridal.com',
        'https://aglobe.co.jp',
      ],
      contactPoint: {
        '@type':        'ContactPoint',
        contactType:    'customer support',
        availableLanguage: ['Japanese', 'Chinese', 'English'],
        areaServed:     ['HK', 'TW', 'SG', 'MY'],
      },
    },
    {
      '@type':     'WebSite',
      '@id':       'https://asia.dot-bridal.com/#website',
      url:         'https://asia.dot-bridal.com',
      name:        'dot·bridal ASIA',
      description: '日本ブライダルリングブランドの海外向け公式ポータルサイト',
      publisher: { '@id': 'https://asia.dot-bridal.com/#organization' },
      inLanguage:  ['zh-Hant', 'en', 'ja'],
      potentialAction: {
        '@type':  'SearchAction',
        target: {
          '@type':     'EntryPoint',
          urlTemplate: 'https://asia.dot-bridal.com/guide/?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

interface Props {
  ga4Id?: string;
}

// ルートレイアウトで一度だけ読み込む
export default function SiteWideScripts({ ga4Id }: Props) {
  return (
    <>
      {/* Organization JSON-LD */}
      <Script
        id="jsonld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Google Analytics 4 */}
      {ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}', {
                page_path: window.location.pathname,
                // プライバシー設定：IPアドレスを匿名化
                anonymize_ip: true,
              });
            `}
          </Script>
        </>
      )}
    </>
  );
}
