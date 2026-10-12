import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const modelName = process.env.GEMINI_MODEL || "gemini-2.0-flash";

    // 更新候補
    const candidateNews = [
      {
        toolId: "deepseek",
        title: "DeepSeekが推論モデルR1のAPIクォータを大幅拡張",
        rawContent: "DeepSeek expanded server infrastructure for DeepSeek-R1, reducing latency by 35% and allowing high-throughput developer workloads.",
        sourceUrl: "https://chat.deepseek.com",
      },
      {
        toolId: "suno",
        title: "Suno v4にオーディオアップロード・リミックス機能が追加",
        rawContent: "Suno released audio-to-audio remixing in version 4, allowing creators to upload their humming or acoustic guitar and turn it into full band production.",
        sourceUrl: "https://suno.com",
      },
      {
        toolId: "claude",
        title: "Claude 3.5 Haikuが一般公開、高速応答と安価なコストを両立",
        rawContent: "Anthropic officially launched Claude 3.5 Haiku globally, delivering Sonnet-level speed and high coding benchmarks at fraction of token cost.",
        sourceUrl: "https://www.anthropic.com",
      },
    ];

    const target = candidateNews[Math.floor(Math.random() * candidateNews.length)];
    let summary3Lines = `・${target.title}が発表されました。
・処理速度が向上し、日常の作業効率がさらにアップ。
・最新の機能により、より手軽に高品質な結果を得られます。`;

    if (apiKey && apiKey.trim() !== "") {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: modelName });
        const res = await model.generateContent(`
AI初心者向けに以下のニュースを「・」で始まる3行以内の要約にしてください:
${target.title}
${target.rawContent}
`);
        summary3Lines = res.response.text().trim();
      } catch (e) {
        console.warn("Gemini error in route:", e);
      }
    }

    // 1. Update追加
    const newUpdate = await prisma.update.create({
      data: {
        toolId: target.toolId,
        title: target.title,
        summary3Lines,
        sourceUrl: target.sourceUrl,
        publishedAt: new Date(),
      },
    });

    // 2. 注目スコア加算
    await prisma.tool.update({
      where: { id: target.toolId },
      data: {
        rankScore: { increment: 5.0 },
        lastUpdated: new Date(),
      },
    });

    // 3. ランキング再計算
    const categories = ["general", "writing", "image", "video", "audio", "code"];
    for (const cat of categories) {
      const catTools = await prisma.tool.findMany({
        where: { category: cat },
        orderBy: [{ rankScore: "desc" }, { votesCount: "desc" }],
      });
      for (let i = 0; i < catTools.length; i++) {
        await prisma.tool.update({
          where: { id: catTools[i].id },
          data: { categoryRank: i + 1 },
        });
      }
    }

    const allTools = await prisma.tool.findMany({
      orderBy: [{ rankScore: "desc" }, { votesCount: "desc" }],
    });
    for (let i = 0; i < allTools.length; i++) {
      await prisma.tool.update({
        where: { id: allTools[i].id },
        data: { overallRank: i + 1 },
      });
    }

    return NextResponse.json({
      success: true,
      message: "12時間更新バッチが即時手動実行されました。",
      update: newUpdate,
    });
  } catch (error: any) {
    console.error("Cron Route Error:", error);
    return NextResponse.json(
      { error: "Cron実行中にエラーが発生しました。" },
      { status: 500 }
    );
  }
}
