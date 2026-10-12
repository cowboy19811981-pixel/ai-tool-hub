import { PrismaClient } from "@prisma/client";
import { GoogleGenerativeAI } from "@google/generative-ai";

const prisma = new PrismaClient();

// スリープ用ユーティリティ
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchUpdates() {
  console.log("🕒 [CRON] Starting 12-hour automated update & ranking batch...");

  const apiKey = process.env.GEMINI_API_KEY;
  const modelName = process.env.GEMINI_MODEL || "gemini-2.0-flash";
  let genAI: GoogleGenerativeAI | null = null;

  if (apiKey && apiKey.trim() !== "") {
    genAI = new GoogleGenerativeAI(apiKey);
    console.log(`🤖 [CRON] Gemini API configured with model: ${modelName}`);
  } else {
    console.log("ℹ️ [CRON] No GEMINI_API_KEY detected. Running with intelligent rule-based summarizer.");
  }

  // 最新のニュース・更新候補リスト（各社公式アナウンスシミュレーション）
  const candidateNews = [
    {
      toolId: "claude",
      title: "Claude 3.5 SonnetのArtifacts共有機能がアップデート",
      rawContent: "Anthropic announced enhanced collaboration for Artifacts, allowing teams to remix and branch code, diagrams, and visual components directly with one click.",
      sourceUrl: "https://www.anthropic.com/news",
    },
    {
      toolId: "midjourney",
      title: "Midjourney v6.1のWeb版エディタが全ユーザーへ開放",
      rawContent: "Midjourney has expanded its web-based creation and inpainting editor to all active subscribers, eliminating the need to use Discord for image generation and prompting.",
      sourceUrl: "https://www.midjourney.com",
    },
    {
      toolId: "cursor",
      title: "Cursorがマルチリポジトリ横断インデックスに対応",
      rawContent: "Cursor IDE now supports indexing multiple related repositories simultaneously, making microservices and multi-repo architectures seamless to edit with Composer.",
      sourceUrl: "https://www.cursor.com/blog",
    },
    {
      toolId: "gemini",
      title: "Gemini 2.0 Flashがさらに低レイテンシ化、音声入出力が標準化",
      rawContent: "Google DeepMind upgraded Gemini 2.0 Flash with real-time bidirectional audio streaming and sub-second visual reasoning capabilities for global developers.",
      sourceUrl: "https://blog.google/technology/ai",
    },
    {
      toolId: "flux",
      title: "FLUX.1 [pro]が高速版APIをリリース、生成コストが40%削減",
      rawContent: "Black Forest Labs introduced an optimized FLUX.1 pro pipeline, reducing generation latency by half while maintaining superior photorealism and typographic accuracy.",
      sourceUrl: "https://blackforestlabs.ai",
    },
  ];

  // ランダムまたはローテーションで更新対象を選択
  const target = candidateNews[Math.floor(Math.random() * candidateNews.length)];
  console.log(`📡 [CRON] Processing update for target tool: ${target.toolId}`);

  let summary3Lines = "";

  if (genAI) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const prompt = `
以下のAIツールの最新ニュースについて、AI初心者にも分かりやすい「3行箇条書き要約（各行全角50文字以内）」を作成してください。
文頭は必ず「・」で始めてください。

【ニュース内容】:
${target.title}
${target.rawContent}
`;
      const result = await model.generateContent(prompt);
      summary3Lines = result.response.text().trim();
      console.log("✨ [CRON] Gemini summary generated successfully.");
    } catch (err) {
      console.warn("⚠️ [CRON] Gemini call failed, using heuristic summary:", err);
    }
  }

  // フォールバック要約
  if (!summary3Lines) {
    summary3Lines = `・${target.title}が正式リリースされました。
・処理速度と表現力が向上し、実務や創作での使い勝手がさらに進化。
・最新モデルへの対応により、従来よりも少ない手間で高品質な成果が得られます。`;
  }

  // 1. Update テーブルに追加
  const updateRecord = await prisma.update.create({
    data: {
      toolId: target.toolId,
      title: target.title,
      summary3Lines,
      sourceUrl: target.sourceUrl,
      publishedAt: new Date(),
    },
  });
  console.log(`✅ [CRON] Inserted Update record ID: ${updateRecord.id}`);

  // 2. アップデートされたツールの注目スコアを加算 & lastUpdated更新
  const updatedTool = await prisma.tool.update({
    where: { id: target.toolId },
    data: {
      rankScore: { increment: 5.0 }, // 注目スコア+5.0
      lastUpdated: new Date(),
    },
  });
  console.log(`🔥 [CRON] Boosted rankScore for ${updatedTool.name} (New score: ${updatedTool.rankScore})`);

  // レートリミット配慮のスリープ
  await sleep(1500);

  // 3. 全ツールの動的ランキング（categoryRank & overallRank）を自動再計算
  console.log("📊 [CRON] Recalculating dynamic rankings across all 60 tools...");

  // 全カテゴリ一覧
  const categories = ["general", "writing", "image", "video", "audio", "code"];

  for (const cat of categories) {
    const catTools = await prisma.tool.findMany({
      where: { category: cat },
      orderBy: [
        { rankScore: "desc" },
        { votesCount: "desc" },
        { siteRegisteredCount: "desc" },
      ],
    });

    for (let i = 0; i < catTools.length; i++) {
      const rank = i + 1;
      await prisma.tool.update({
        where: { id: catTools[i].id },
        data: { categoryRank: rank },
      });
    }
  }

  // 総合ランキング再計算
  const allTools = await prisma.tool.findMany({
    orderBy: [
      { rankScore: "desc" },
      { votesCount: "desc" },
      { siteRegisteredCount: "desc" },
    ],
  });

  for (let i = 0; i < allTools.length; i++) {
    const overall = i + 1;
    await prisma.tool.update({
      where: { id: allTools[i].id },
      data: { overallRank: overall },
    });
  }

  console.log("🎉 [CRON] 12-hour automated update & ranking batch completed successfully!");
}

fetchUpdates()
  .catch((e) => {
    console.error("❌ [CRON] Fatal batch error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
