import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, region, brand, message } = body;

    // バリデーション
    if (!name || !email || !region || !message) {
      return NextResponse.json({ error: '必須項目が不足しています' }, { status: 400 });
    }

    // ======================================================
    // 本番実装例（Resend を使う場合）
    // npm install resend が必要
    // ======================================================
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'noreply@asia.dot-bridal.com',
    //   to: 'info@dot-bridal.com',
    //   subject: `【お問い合わせ】${name}様より`,
    //   html: `
    //     <p>お名前：${name}</p>
    //     <p>メール：${email}</p>
    //     <p>地域：${region}</p>
    //     <p>ブランド：${brand || '未選択'}</p>
    //     <p>メッセージ：${message}</p>
    //   `,
    // });

    // 開発環境：コンソールに出力するだけ
    console.log('お問い合わせ受信:', { name, email, region, brand, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'サーバーエラー' }, { status: 500 });
  }
}
