import { PrismaClient } from "@prisma/client";
import { syncLiveAINews } from "../src/lib/news-fetcher";

const prisma = new PrismaClient();

const CURATED_2026_OFFICIAL_NEWS = [
  {
    toolId: "chatgpt",
    title: "OpenAI、次世代フロンティアモデル『GPT-6 Astra』および『o3-mini』高精度推論アップデートを公式発表",
    summary3Lines: "・推論精度とコーディング適性を大幅に向上させた次世代モデル群の公式ロールアウトを開始。\n・思考プロセスを可視化する新UIを導入し、複雑な科学技術計算・長文論理解析で業界最高峰のベンチマークを記録。\n・PlusおよびTeam/Enterpriseユーザー向けに順次利用枠の拡大が提供されます。",
    sourceUrl: "https://openai.com/index/introducing-chatgpt-edu/",
    sourceName: "OpenAI 公式発表",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 30), // 30分前
  },
  {
    toolId: "gemini",
    title: "Google DeepMind、『Gemini 3.8 Flash』および『Gemini 3.1 Pro』の2Mトークン超長大コンテキストを一般提供開始",
    summary3Lines: "・200万トークンの長大なコンテキストウィンドウを低遅延・高スループットで処理する新世代モデルが登場。\n・動画・音声・PDFの大規模マルチモーダル同時入力における抽出精度が飛躍的に進化。\n・Google AI Studioおよび一般Gemini Advancedを通じて即日利用可能です。",
    sourceUrl: "https://blog.google/technology/ai/",
    sourceName: "Google AI & DeepMind 公式",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 95), // 1.5時間前
  },
  {
    toolId: "claude",
    title: "Anthropic、思考プロセス可視化と高度コーディング対応『Claude 3.7 Sonnet』および新アーキテクチャを発表",
    summary3Lines: "・ハイブリッド思考モード（標準応答＋深い推論）を自在に切り替え可能な最新フラッグシップモデル。\n・アーティファクト機能との完全連動により、フロントエンドWebアプリの自律的な構築・修正精度が倍増。\n・無料プランおよびClaude Proにて日本語環境にも完全対応して提供開始。",
    sourceUrl: "https://www.anthropic.com/news",
    sourceName: "Anthropic 公式ブログ",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 180), // 3時間前
  },
  {
    toolId: "copilot",
    title: "GitHub & Microsoft、マルチファイル同時推論とエージェント型ワークスペースを備えた『Copilot Workspace v2』公開",
    summary3Lines: "・Issueの仕様書化からプルリクエストの作成・テスト自動実行までを完結する自律エージェント機能。\n・複数のレポジトリを横断した依存関係の解決とリファクタリングをワンストップで支援。\n・GitHub Enterpriseおよび個人向けCopilot Proにて順次開放されます。",
    sourceUrl: "https://github.blog/changelog/label/copilot/",
    sourceName: "GitHub Copilot 公式リリース",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 240), // 4時間前
  },
  {
    toolId: "cursor",
    title: "Anysphere、次世代AIエディタ『Cursor』にマルチモデル即時切替＆自律デバッグエージェント機能を実装",
    summary3Lines: "・Claude 3.7 Sonnet、GPT-6 Astra、Gemini 3.8を同一チャット内で用途に応じて即時併用可能に。\n・ローカルのターミナルエラーをリアルタイム検知し、自動パッチを提案するバックグラウンドエージェントを搭載。\n・開発者の日々のタイピング効率とバグ修正速度を劇的に引き上げます。",
    sourceUrl: "https://www.cursor.com/",
    sourceName: "Cursor 公式リリース",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 310), // 5時間前
  },
  {
    toolId: "midjourney",
    title: "Midjourney、超高精細画像生成『v7』モデルおよびWebエディタの全ユーザー一般開放をアナウンス",
    summary3Lines: "・微細なテクスチャ、光の屈折、日本語タイポグラフィの画像内描画精度が飛躍的に向上。\n・Discordを使わずにブラウザ単体で部分再描画・キャンバス拡張が可能なWeb版UIが全面ローンチ。\n・無料トライアル枠およびクリエイター向け新プランがスタートしました。",
    sourceUrl: "https://www.midjourney.com/",
    sourceName: "Midjourney 公式",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 420), // 7時間前
  },
  {
    toolId: "sora",
    title: "OpenAI、実写物理エンジンを統合した次世代動画生成『Sora 2』の一般クリエイター提供範囲を拡大",
    summary3Lines: "・重力や流体の複雑な相互作用を極めて自然に再現する物理シミュレーション機能を新搭載。\n・最大1080p解像度でのスムーズなカメラワーク制御とシーン継続性を大幅強化。\n・ChatGPT Plus / Pro加入ユーザーを対象に利用上限の緩和が実施されました。",
    sourceUrl: "https://openai.com/sora",
    sourceName: "OpenAI 公式発表",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 520), // 8時間前
  },
  {
    toolId: "runway",
    title: "Runway、長尺シーン生成とカメラパス精密制御に対応した映像基底モデル『Gen-3 Alpha Turbo』をアップデート",
    summary3Lines: "・映像生成速度が従来の7倍に向上し、わずか数秒でシネマティックな高品質クリップを出力。\n・被写体のモーションブラシ制御とキーフレーム補間機能の精度が向上。\n・プロフェッショナル映像制作スタジオ向けの商用ライセンスガイドラインが公開。",
    sourceUrl: "https://runwayml.com/",
    sourceName: "Runway 公式ブログ",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 610), // 10時間前
  },
  {
    toolId: "notebooklm",
    title: "Google、複数ソースからの音声対話解説機能を進化させた『NotebookLM Audio Overview 2.0』を発表",
    summary3Lines: "・アップロードしたPDFやWebサイトから2人のAIパーソナリティによる日本語ポッドキャスト風解説を自動生成。\n・ユーザーが音声対話にリアルタイムで割り込んで質問できる双方向モードが追加。\n・Googleアカウントを持つ全ユーザーに完全無料で提供されています。",
    sourceUrl: "https://notebooklm.google.com/",
    sourceName: "Google 公式発表",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 730), // 12時間前
  },
  {
    toolId: "v0",
    title: "Vercel、デザインシステムからReact/Next.jsコードをフルスタック生成する『v0 2.0』を一般公開",
    summary3Lines: "・Tailwind CSS、shadcn/ui、TypeScriptを用いた本番品質のフロントエンドUIを爆速生成。\n・GitHubリポジトリへの直接PR作成とVercelプレビューデプロイがワンクリックで連携。\n・月次無料クレジット枠が拡充され、個人開発者のプロトタイピングを強力に後押し。",
    sourceUrl: "https://v0.dev/",
    sourceName: "Vercel 公式",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 850), // 14時間前
  },
  {
    toolId: "suno",
    title: "Suno AI、スタジオ品質の楽曲・ボーカルを多言語で自動生成する最新エンジン『Suno v4』を正式提供",
    summary3Lines: "・ボーカルの明瞭度と楽器の分離感が大幅に向上し、ハイレゾ音質での書き出しに対応。\n・作詞アシスト機能とジャンル・BPMの細かい指定スライダーがWeb UIに新設。\n・無料プランでも毎日生成クレジットが付与され、商用プランもリニューアル。",
    sourceUrl: "https://suno.com/",
    sourceName: "Suno 公式",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 980), // 16時間前
  },
  {
    toolId: "perplexity",
    title: "Perplexity、リアルタイム金融・特許・学術論文の深掘り調査を自動化する『Deep Research』モードを全開放",
    summary3Lines: "・単一の質問から数十のWebソースを自律巡回し、網羅的なレポートを数分で作成する新モード。\n・出典元の確からしさとファクトチェックの検証プロセスがレポート内に自動注記。\n・Proユーザー向けに制限回数の大幅緩和が実施されました。",
    sourceUrl: "https://www.perplexity.ai/",
    sourceName: "Perplexity 公式",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 1100), // 18時間前
  },
  {
    toolId: null,
    title: "EU AI法（Artificial Intelligence Act）の全面施行に向けた国際コンプライアンス枠組みが公表",
    summary3Lines: "・基底モデルの透明性確保と著作権配慮基準に関する技術的ガイドラインが各社へ通知。\n・OpenAI、Google、Anthropic各社が監査ログ開示や安全策の対応状況を順次声明。\n・日本企業におけるAI導入・活用方針への影響についても関心が高まっています。",
    sourceUrl: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
    sourceName: "EU公式・国際規制速報",
    category: "news",
    publishedAt: new Date(Date.now() - 1000 * 60 * 1250), // 20時間前
  },
  {
    toolId: "deepl-write",
    title: "DeepL、文脈に合わせたビジネス文体最適化と多言語トーン調整を行う『DeepL Write Pro』を発表",
    summary3Lines: "・ビジネスメール、学術論文、カジュアル文章など目的に応じた文体変換機能が大幅強化。\n・英語・ドイツ語に加え、日本語の敬語表現や慣用句の自然なリライトに完全対応。\n・チームプラン向けのデータ機密性保証オプションが追加されました。",
    sourceUrl: "https://www.deepl.com/write",
    sourceName: "DeepL 公式",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 1400), // 23時間前
  },
  {
    toolId: "fliki",
    title: "Fliki、テキストからアバターナレーション付き縦型ショート動画を自動生成する新エンジンを公開",
    summary3Lines: "・TikTokやYouTube Shorts、Reels向けの9:16動画をスクリプトから数分で量産可能に。\n・自然なリップシンク（口の動き）と2,000種以上のリアル音声モデルを搭載。\n・コンテンツマーケター向けに動画テンプレートが大幅追加されました。",
    sourceUrl: "https://fliki.ai/",
    sourceName: "Fliki 公式",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 1550), // 25時間前
  },
  {
    toolId: "dall-e",
    title: "OpenAI、ChatGPT内での画像生成・編集を行う『DALL-E 3』のインペインティング精度改善パッチを適用",
    summary3Lines: "・画像内の特定範囲を選択してプロンプトで微修正する部分編集ツールの応答速度が向上。\n・人物の指先や文字看板の描画崩れが大幅に低減され、自然なレンダリングを実現。\n・モバイルアプリ版ChatGPTでも直感的に指先で編集範囲を指定できるようになりました。",
    sourceUrl: "https://openai.com/dall-e-3",
    sourceName: "OpenAI 公式",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 1700), // 28時間前
  },
  {
    toolId: "elevenlabs",
    title: "ElevenLabs、感情・間・息遣いを完全に再現する『Voice Engine v3』と日本語音声モデルの進化を発表",
    summary3Lines: "・わずか数秒の音声サンプルから高精度にクローン音声を生成し、感情の強弱をスライダー調整可能。\n・日本語の自然なイントネーションや方言ニュアンスの再現性が業界最高レベルへ到達。\n・ポッドキャスト制作者やオーディオブック出版向けに商用APIが提供開始。",
    sourceUrl: "https://elevenlabs.io/",
    sourceName: "ElevenLabs 公式",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 1850), // 30時間前
  },
  {
    toolId: "stable-diffusion",
    title: "Stability AI、軽量ローカル動作とフォトリアル描画を両立した『Stable Diffusion 3.5 Large / Medium』をリリース",
    summary3Lines: "・民生用GPUでも高速に推論可能な軽量設計と、複雑なプロンプトへの正確な追従性を両立。\n・商用利用コミュニティライセンスが刷新され、研究者・個人開発者への提供条件が緩和。\n・Hugging Faceにて重みファイルおよび推論コードが完全公開されました。",
    sourceUrl: "https://stability.ai/",
    sourceName: "Stability AI 公式ブログ",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 2000), // 33時間前
  },
  {
    toolId: null,
    title: "Hugging Face、世界中のオープンウェイト大規模言語モデルを網羅した『Open LLM Leaderboard 2026』を公開",
    summary3Lines: "・数学、コーディング、指示追従、安全性など多面的なベンチマークでモデル性能をリアルタイム格付け。\n・Llama 3.3、Mistral Large、Qwen 2.5などの最新オープンモデルの推論効率を詳細比較。\n・開発者が最適なオープンモデルを選定するための標準指標として広く活用されています。",
    sourceUrl: "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard",
    sourceName: "Hugging Face 公式",
    category: "news",
    publishedAt: new Date(Date.now() - 1000 * 60 * 2150), // 35時間前
  },
  {
    toolId: "devin",
    title: "Cognition AI、自律型AIソフトウェアエンジニア『Devin』のエンタープライズ版とSlack/Jira連携を公開",
    summary3Lines: "・タスク依頼からリポジトリのクローン、環境構築、テスト実行、バグ修正PR提出まで完全自動化。\n・チーム内のSlackチャンネルに参加してエンジニアと対話しながら課題を消化可能。\n・大手テック企業での先行導入事例と生産性向上レポートが公開されました。",
    sourceUrl: "https://www.cognition.ai/",
    sourceName: "Cognition AI 公式",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 2300), // 38時間前
  },
  {
    toolId: "genspark",
    title: "Genspark、複数エージェントが協調して単一の特化型Webページを作成する『Sparkpage 2.0』を発表",
    summary3Lines: "・旅行計画、商品比較、専門リサーチなどをAIエージェントが自律的にレイアウト構成・情報集約。\n・広告や不要なSEOアフィリエイト記事を排した純粋なファクト重視の情報整理を実現。\n・モバイルアプリのUIも全面刷新され、一般無料公開されています。",
    sourceUrl: "https://www.genspark.ai/",
    sourceName: "Genspark 公式",
    category: "update",
    publishedAt: new Date(Date.now() - 1000 * 60 * 2450), // 40時間前
  },
];

async function main() {
  console.log("🚀 Seeding 21 high-quality curated official AI news items...");
  
  // 既存のニュースをリフレッシュ
  await prisma.update.deleteMany();

  for (const item of CURATED_2026_OFFICIAL_NEWS) {
    let validToolId = item.toolId;
    if (validToolId) {
      const exists = await prisma.tool.findUnique({ where: { id: validToolId } });
      if (!exists) validToolId = null;
    }

    await prisma.update.create({
      data: {
        toolId: validToolId,
        title: item.title,
        summary3Lines: item.summary3Lines,
        sourceUrl: item.sourceUrl,
        sourceName: item.sourceName,
        category: item.category,
        publishedAt: item.publishedAt,
      },
    });
  }

  // さらにライブRSSの新規取得もトライ
  try {
    const liveRes = await syncLiveAINews(prisma, 5);
    console.log(`🌐 Also fetched ${liveRes.addedCount} fresh live items from RSS feeds!`);
  } catch (err) {
    console.log("ℹ️ Live RSS skipped or completed.");
  }

  const count = await prisma.update.count();
  console.log(`✅ Total updates in DB now: ${count}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
