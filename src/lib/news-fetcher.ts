import { PrismaClient } from "@prisma/client";
import { GoogleGenerativeAI } from "@google/generative-ai";

// ツールID検出マップ（小文字比較）
const TOOL_DETECTION_RULES: { keywords: string[]; toolId: string }[] = [
  { keywords: ["chatgpt", "openai", "gpt-4", "gpt-5", "o1", "o3"], toolId: "chatgpt" },
  { keywords: ["claude", "anthropic", "sonnet", "opus", "haiku"], toolId: "claude" },
  { keywords: ["gemini", "deepmind", "google ai"], toolId: "gemini" },
  { keywords: ["copilot", "github copilot", "microsoft copilot"], toolId: "copilot" },
  { keywords: ["midjourney"], toolId: "midjourney" },
  { keywords: ["sora", "sora 2"], toolId: "sora" },
  { keywords: ["cursor"], toolId: "cursor" },
  { keywords: ["deepseek", "r1", "v3"], toolId: "deepseek" },
  { keywords: ["grok", "xai"], toolId: "grok" },
  { keywords: ["perplexity"], toolId: "perplexity" },
  { keywords: ["suno"], toolId: "suno" },
  { keywords: ["runway", "gen-3"], toolId: "runway" },
  { keywords: ["flux", "black forest labs"], toolId: "flux" },
  { keywords: ["notion ai", "notion"], toolId: "notion-ai" },
  { keywords: ["canva"], toolId: "canva-ai" },
];

export interface RawRssItem {
  title: string;
  cleanTitle: string;
  link: string;
  sourceName: string;
  pubDate: Date;
  detectedToolId: string | null;
}

/**
 * Google News RSSからリアルタイムの最新AIニュースを取得・解析する
 */
export async function fetchLiveAINewsFromRSS(maxCount = 10): Promise<RawRssItem[]> {
  try {
    const rssUrl = "https://news.google.com/rss/search?q=AI+OR+%E4%BA%BA%E5%B7%A5%E7%9F%A5%E8%83%BD+OR+%E7%94%9F%E6%88%90AI+OR+ChatGPT+OR+Claude+OR+Gemini&hl=ja&gl=JP&ceid=JP:ja";
    
    const res = await fetch(rssUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AI-Compass-Portal/1.0",
      },
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      console.warn(`[NewsFetcher] RSS fetch failed with status: ${res.status}`);
      return [];
    }

    const xmlText = await res.text();
    const itemMatches = xmlText.match(/<item>[\s\S]*?<\/item>/g) || [];

    const items: RawRssItem[] = [];

    for (const rawItem of itemMatches.slice(0, maxCount * 2)) {
      const titleMatch = rawItem.match(/<title>([\s\S]*?)<\/title>/);
      const linkMatch = rawItem.match(/<link>([\s\S]*?)<\/link>/);
      const pubDateMatch = rawItem.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
      const sourceMatch = rawItem.match(/<source[^>]*>([\s\S]*?)<\/source>/);

      if (!titleMatch || !linkMatch) continue;

      let fullTitle = titleMatch[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
      let sourceName = sourceMatch ? sourceMatch[1].trim() : "テック速報";

      // タイトル末尾の " - メディア名" を分離してクリーンにする
      let cleanTitle = fullTitle;
      const dashIdx = fullTitle.lastIndexOf(" - ");
      if (dashIdx > 0) {
        if (!sourceMatch) {
          sourceName = fullTitle.substring(dashIdx + 3).trim();
        }
        cleanTitle = fullTitle.substring(0, dashIdx).trim();
      }

      let link = linkMatch[1].trim();
      let pubDate = pubDateMatch ? new Date(pubDateMatch[1]) : new Date();
      if (isNaN(pubDate.getTime())) pubDate = new Date();

      // 関連ツールの判定
      const lower = fullTitle.toLowerCase();
      let detectedToolId: string | null = null;
      for (const rule of TOOL_DETECTION_RULES) {
        if (rule.keywords.some((kw) => lower.includes(kw))) {
          detectedToolId = rule.toolId;
          break;
        }
      }

      items.push({
        title: fullTitle,
        cleanTitle,
        link,
        sourceName,
        pubDate,
        detectedToolId,
      });

      if (items.length >= maxCount) break;
    }

    return items;
  } catch (err) {
    console.error("[NewsFetcher] Error fetching RSS:", err);
    return [];
  }
}

/**
 * Geminiまたはルールベースで初心者向け3行要約を生成する
 */
export async function generate3LineSummary(
  item: RawRssItem,
  apiKey?: string,
  modelName = "gemini-2.0-flash"
): Promise<string> {
  if (apiKey && apiKey.trim() !== "") {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: modelName });
      const prompt = `
あなたは初心者向けAI総合ポータルの専属解説員です。
以下の最新AIニュースについて、AI初心者や一般ビジネスパーソンが読んですぐ価値がわかる「3行箇条書き要約（各行全角50文字以内）」を作成してください。
必ず「・」で各行を始めてください。専門用語は噛み砕いてください。

【ニュースタイトル】
${item.cleanTitle}
【発信元メディア】
${item.sourceName}
`;
      const res = await model.generateContent(prompt);
      const text = res.response.text().trim();
      if (text && text.includes("・")) {
        return text;
      }
    } catch (err) {
      console.warn("[NewsFetcher] Gemini summary failed, falling back to heuristic:", err);
    }
  }

  // フォールバック要約（リアルなタイトルから構築）
  return `・${item.cleanTitle}に関する最新ニュースが${item.sourceName}より報じられました。
・AI技術の急速な進化や実務・生活への具体的な影響が注目されています。
・詳細や公式の見解はリンク先（${item.sourceName}）で確認可能です。`;
}

/**
 * リアルタイムAIニュースを取得してDBに保存・更新するメイン処理
 */
export async function syncLiveAINews(
  prisma: PrismaClient,
  limit = 5
): Promise<{ addedCount: number; newItems: any[] }> {
  const apiKey = process.env.GEMINI_API_KEY;
  const modelName = process.env.GEMINI_MODEL || "gemini-2.0-flash";

  const rawItems = await fetchLiveAINewsFromRSS(limit * 2);
  const newItems: any[] = [];
  let addedCount = 0;

  for (const item of rawItems) {
    // 既存チェック（同一タイトルまたは同一リンクがすでにあればスキップ）
    const existing = await prisma.update.findFirst({
      where: {
        OR: [
          { title: item.cleanTitle },
          { sourceUrl: item.link },
        ],
      },
    });

    if (existing) continue;

    // ツール存在チェック（検出されたtoolIdが実在するか確認）
    let validToolId: string | null = null;
    if (item.detectedToolId) {
      const toolExists = await prisma.tool.findUnique({
        where: { id: item.detectedToolId },
      });
      if (toolExists) {
        validToolId = item.detectedToolId;
      }
    }

    // 3行要約生成
    const summary3Lines = await generate3LineSummary(item, apiKey, modelName);

    // カテゴリ判定: ツール個別更新か業界全体ニュースか
    const category = validToolId ? "update" : "news";

    const saved = await prisma.update.create({
      data: {
        toolId: validToolId,
        title: item.cleanTitle,
        summary3Lines,
        sourceUrl: item.link,
        sourceName: item.sourceName,
        category,
        publishedAt: item.pubDate,
      },
    });

    // 関連ツールがあればスコア加算
    if (validToolId) {
      await prisma.tool.update({
        where: { id: validToolId },
        data: {
          rankScore: { increment: 3.0 },
          lastUpdated: new Date(),
        },
      });
    }

    newItems.push(saved);
    addedCount++;

    if (addedCount >= limit) break;
  }

  // ランキング再計算
  if (addedCount > 0) {
    await recalculateAllRankings(prisma);
  }

  return { addedCount, newItems };
}

/**
 * 全ツールのランキング再計算
 */
export async function recalculateAllRankings(prisma: PrismaClient) {
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
      await prisma.tool.update({
        where: { id: catTools[i].id },
        data: { categoryRank: i + 1 },
      });
    }
  }

  const allTools = await prisma.tool.findMany({
    orderBy: [
      { rankScore: "desc" },
      { votesCount: "desc" },
      { siteRegisteredCount: "desc" },
    ],
  });

  for (let i = 0; i < allTools.length; i++) {
    await prisma.tool.update({
      where: { id: allTools[i].id },
      data: { overallRank: i + 1 },
    });
  }
}
