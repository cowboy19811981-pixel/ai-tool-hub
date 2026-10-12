import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Compass | 次世代AI総合ポータル＆自律レコメンドプラットフォーム",
  description: "主要6分野60サービスの徹底比較、最新バージョン特性、無料版vs有料版の違い、12時間ごとの最新自動要約、2系統のパーソナライズ診断、コピペで使えるプロンプト図鑑を網羅したAI総合情報ハブ。",
  keywords: ["AI比較", "ChatGPT", "Claude", "Cursor", "画像生成AI", "AIポータル", "プロンプト集", "最新AIニュース"],
  openGraph: {
    title: "AI Compass | 次世代AI総合ポータル",
    description: "あなたに最適なAIが1分で見つかる。60ツールのスペック比較＆動的ランキング。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="dark">
      <body className="min-h-screen flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
