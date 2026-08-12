import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt    = 'dot·bridal ASIA — 日本ブライダルリング 厳選8ブランド';
export const size   = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width:      '100%',
          height:     '100%',
          display:    'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: '#1A1A1A',
          padding:    '80px',
          position:   'relative',
        }}
      >
        {/* 背景の装飾円 */}
        <div
          style={{
            position:     'absolute',
            top:          '50%',
            right:        '80px',
            transform:    'translateY(-50%)',
            width:        '400px',
            height:       '400px',
            border:       '1px solid rgba(201,168,76,0.15)',
            borderRadius: '50%',
            display:      'flex',
            alignItems:   'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width:        '260px',
              height:       '260px',
              border:       '1px solid rgba(201,168,76,0.25)',
              borderRadius: '50%',
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: '14px', letterSpacing: '6px', color: 'rgba(201,168,76,0.5)' }}>
              JAPAN BRIDAL
            </span>
          </div>
        </div>

        {/* ゴールドライン */}
        <div
          style={{
            width:        '48px',
            height:       '1px',
            background:   '#C9A84C',
            marginBottom: '24px',
          }}
        />

        {/* ブランド名 */}
        <div
          style={{
            fontSize:      '18px',
            letterSpacing: '8px',
            color:         '#C9A84C',
            marginBottom:  '20px',
            fontWeight:    300,
          }}
        >
          dot · bridal ASIA
        </div>

        {/* メインコピー */}
        <div
          style={{
            fontSize:      '52px',
            fontWeight:    300,
            color:         '#fff',
            lineHeight:    1.3,
            marginBottom:  '24px',
            maxWidth:      '620px',
          }}
        >
          日本の職人が生む<br />
          <span style={{ color: '#C9A84C' }}>永遠のリング</span>を、<br />
          あなたたちへ。
        </div>

        {/* サブコピー */}
        <div
          style={{
            fontSize:    '16px',
            color:       'rgba(255,255,255,0.5)',
            letterSpacing: '2px',
            maxWidth:    '500px',
          }}
        >
          香港・台湾のカップルへ届ける、アグローヴ厳選8ブランド
        </div>
      </div>
    ),
    { ...size },
  );
}
