export interface PromptSeedItem {
  id: string;
  toolId: string;
  category: string;
  title: string;
  promptText: string;
  bestPracticeTips: string;
  copiedCount: number;
}

export const promptsData: PromptSeedItem[] = [
  {
    id: "prompt-1",
    toolId: "chatgpt",
    category: "ビジネス・企画",
    title: "新規事業アイデアの逆説・盲点ブレスト",
    promptText: `あなたは世界トップクラスの戦略コンサルタントおよびスタートアップ創業者です。
以下のテーマについて新規事業案を3つ提案してください。

【テーマ】: [ここにテーマや業界を記入、例: 地方在住シニア向けのヘルスケアサービス]
【条件】:
1. 業界の常識や「誰もがやりがちなアイデア」をまず否定する（逆説的アプローチ）。
2. なぜ大手企業が参入しにくく、スタートアップが勝てるのかの「非対称な強み」を明記する。
3. 最初の100人の初期ユーザーを獲得するための超具体的な施策を含める。`,
    bestPracticeTips: "「業界の常識を否定する」という制約を入れることで、ありきたりな回答を排除し、独自の切り口を引き出せます。",
    copiedCount: 432
  },
  {
    id: "prompt-2",
    toolId: "claude",
    category: "コーディング・設計",
    title: "TypeScript / Next.js 最適アーキテクチャ設計＆リファクタ",
    promptText: `以下のコードをシニアフロントエンドアーキテクトの視点でレビューし、Next.js (App Router) + TypeScriptのベストプラクティスに沿ってリファクタリングしてください。

【現状のコード】:
\`\`\`tsx
[ここにコードを貼り付け]
\`\`\`

【求める出力】:
1. パフォーマンス・セキュリティ・型安全性の観点からの問題点3選
2. Server ComponentsとClient Componentsの最適な分離設計
3. リファクタリング後の完全なコードと、変更理由の解説`,
    bestPracticeTips: "Claude 3.5 Sonnetは設計意図の解説と型安全性のレビューにおいて圧倒的な正確さを発揮します。",
    copiedCount: 521
  },
  {
    id: "prompt-3",
    toolId: "gemini",
    category: "リサーチ・分析",
    title: "長大PDF・決算資料のエグゼクティブ1分要約",
    promptText: `添付（または入力）した資料を読み込み、多忙な経営陣が1分で判断できるように以下のフォーマットでエグゼクティブサマリーを作成してください。

1. 【結論】今回の最重要ファクト（30文字以内）
2. 【業績ハイライト】前年同期比のプラス要因とマイナス要因（箇条書き3点）
3. 【潜在リスク】資料の文脈から読み取れる、今後懸念される隠れた課題
4. 【次のアクション】経営陣が今週中に意思決定すべき事項`,
    bestPracticeTips: "Geminiの長文コンテキスト（200万トークン）を活かし、決算説明資料や100ページの報告書を丸ごと読み込ませて使用します。",
    copiedCount: 389
  },
  {
    id: "prompt-4",
    toolId: "midjourney",
    category: "画像生成",
    title: "映画的シネマティックフォト・超リアリズム",
    promptText: `cinematic film still of a futuristic Tokyo alley at twilight, rainy cobblestone reflections, subtle neon teal and warm amber street lanterns, shot on 35mm Arri Alexa camera, shallow depth of field, natural skin texture, Kodak Portra 400 film grain, moody atmosphere, directed by Denis Villeneuve --ar 16:9 --style raw --v 6.1`,
    bestPracticeTips: "--style raw を付けることでMidjourney特有の過度なCG感を抑え、本物の映画用フィルムで撮影したような質感になります。",
    copiedCount: 678
  },
  {
    id: "prompt-5",
    toolId: "flux",
    category: "画像生成",
    title: "文字入りヴィンテージポスター・タイポグラフィ",
    promptText: `A retro vintage coffee advertising poster from the 1970s. The text "MORNING BREW - 100% ARABICA" is clearly written in bold retro typography at the top. Warm grain textures, earthy brown and terracotta tones, illustration of steaming coffee cup on wooden table, high detail, authentic paper texture.`,
    bestPracticeTips: "Fluxは引用符 \" \" で囲んだアルファベット文字列を非常に正確に画像内に描画します。",
    copiedCount: 412
  },
  {
    id: "prompt-6",
    toolId: "suno",
    category: "音楽生成",
    title: "心揺さぶるJ-POP / エモーショナル・ロック",
    promptText: `[Style of Music]: Emotional Japanese Pop Rock, piano intro, soaring female vocals, energetic drums, anime opening style, 165 BPM

[Verse 1]
雨上がりの交差点 滲んだ信号機
傘を畳んだ君の背中 追いかけられずに

[Chorus]
走り出した風の中で 叫んだ名前
消えないように 抱きしめていた 掠れた未来でも`,
    bestPracticeTips: "[Verse], [Chorus] などのメタタグを明記し、BPMや楽器の入り方を指定すると、J-POPの王道構成で曲が仕上がります。",
    copiedCount: 580
  },
  {
    id: "prompt-7",
    toolId: "cursor",
    category: "開発・エディタ",
    title: "Composerへの新機能一括実装指示",
    promptText: `@codebase
現在のユーザー認証フローに、GitHub OAuthでのソーシャルログイン機能を追加してください。

要件:
1. NextAuth / Auth.jsの既存設定ファイルを確認し、GitHub Providerを追加する。
2. ログインモーダルにGitHubアイコン付きボタンを追加し、Tailwindで既存デザインと統一する。
3. 初回ログイン時にUserテーブルにGitHub IDを保存するPrismaスキーマとマイグレーションの確認。
4. 修正対象となるファイル一覧を提示した上で、一括編集してください。`,
    bestPracticeTips: "「@codebase」と指定することで、プロジェクト全体の設計を読み取った上で矛盾のない複数ファイル編集を行わせることができます。",
    copiedCount: 742
  },
  {
    id: "prompt-8",
    toolId: "runway",
    category: "動画生成",
    title: "映画的スローモーション・ドローン旋回",
    promptText: `Cinematic drone shot slowly orbiting around an ancient stone lighthouse standing on dramatic ocean cliffs at sunrise. Golden sunlight breaking through mist, crashing waves with realistic water spray, smooth 24fps film motion, 4k photorealistic, hyper-detailed nature documentary.`,
    bestPracticeTips: "カメラの動き（orbiting, slowly moving forward）と光の方向（sunrise, mist）を英語で具体的に指定するのがコツです。",
    copiedCount: 495
  }
];
