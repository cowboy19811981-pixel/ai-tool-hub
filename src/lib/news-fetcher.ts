import { PrismaClient } from "@prisma/client";
import { GoogleGenerativeAI } from "@google/generative-ai";

export interface OfficialFeedConfig {
  sourceName: string;
  url: string;
  defaultToolId: string | null;
  officialDomain: string;
}

// AI開発元の公式一次情報フィード一覧（公式一次ソース＋高鮮度AI速報）
export const OFFICIAL_AI_FEEDS: OfficialFeedConfig[] = [
  {
    sourceName: "Anthropic 公式発表 (Fable / Mythos / Claude)",
    url: "https://news.google.com/rss/search?q=%22Claude+Fable%22+OR+%22Claude+Mythos%22+OR+%22Anthropic%22+Claude&hl=en-US&gl=US&ceid=US:en",
    defaultToolId: "claude",
    officialDomain: "anthropic.com",
  },
  {
    sourceName: "Anthropic Claude 国内速報",
    url: "https://news.google.com/rss/search?q=Anthropic+Claude+OR+%22Claude+Fable%22+OR+%22Claude+Mythos%22&hl=ja&gl=JP&ceid=JP:ja",
    defaultToolId: "claude",
    officialDomain: "anthropic.com",
  },
  {
    sourceName: "OpenAI 公式発表",
    url: "https://openai.com/news/rss.xml",
    defaultToolId: "chatgpt",
    officialDomain: "openai.com",
  },
  {
    sourceName: "OpenAI 最新リリース・速報",
    url: "https://news.google.com/rss/search?q=OpenAI+%22o3%22+OR+%22GPT-5%22+OR+%22GPT-6%22+OR+Sora&hl=ja&gl=JP&ceid=JP:ja",
    defaultToolId: "chatgpt",
    officialDomain: "openai.com",
  },
  {
    sourceName: "Google AI & DeepMind 公式",
    url: "https://blog.google/technology/ai/rss/",
    defaultToolId: "gemini",
    officialDomain: "blog.google",
  },
  {
    sourceName: "GitHub Copilot 公式リリース",
    url: "https://github.blog/changelog/label/copilot/feed/",
    defaultToolId: "copilot",
    officialDomain: "github.blog",
  },
  {
    sourceName: "Cursor / 開発AI速報",
    url: "https://news.google.com/rss/search?q=Cursor+AI+OR+Windsurf+AI+OR+v0+Vercel&hl=ja&gl=JP&ceid=JP:ja",
    defaultToolId: "cursor",
    officialDomain: "cursor.com",
  },
  {
    sourceName: "Hugging Face 公式ブログ",
    url: "https://huggingface.co/blog/feed.xml",
    defaultToolId: null,
    officialDomain: "huggingface.co",
  },
];

export interface OfficialNewsItem {
  title: string;
  link: string;
  sourceName: string;
  pubDate: Date;
  toolId: string | null;
  snippet?: string;
}

/**
 * AI各社の公式サイト・公式ブログRSSから直接一次情報を取得する
 */
export async function fetchOfficialAINews(itemsPerFeed = 2): Promise<OfficialNewsItem[]> {
  const allItems: OfficialNewsItem[] = [];

  for (const feed of OFFICIAL_AI_FEEDS) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 6000);
      const res = await fetch(feed.url, {
        signal: controller.signal,
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        },
      });
      clearTimeout(timer);

      if (!res.ok) {
        console.warn(`[OfficialNews] ${feed.sourceName} returned status ${res.status}`);
        continue;
      }

      const text = await res.text();
      const entries = text.match(/<item>[\s\S]*?<\/item>/g) || text.match(/<entry>[\s\S]*?<\/entry>/g) || [];

      let count = 0;
      for (const entry of entries) {
        const titleMatch = entry.match(/<title[^>]*>([\s\S]*?)<\/title>/);
        const linkMatch = entry.match(/<link[^>]*>([\s\S]*?)<\/link>/) || entry.match(/<link[^>]*href=["']([^"']+)["']/i);
        const pubDateMatch = entry.match(/<pubDate>([\s\S]*?)<\/pubDate>/) || entry.match(/<published>([\s\S]*?)<\/published>/) || entry.match(/<updated>([\s\S]*?)<\/updated>/);
        const descMatch = entry.match(/<description>([\s\S]*?)<\/description>/) || entry.match(/<summary[^>]*>([\s\S]*?)<\/summary>/);

        if (!titleMatch) continue;

        let title = titleMatch[1]
          .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
          .replace(/&amp;/g, "&")
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&lt;.*?&gt;/g, "")
          .trim();

        let link = "";
        if (linkMatch) {
          link = (linkMatch[1] || "").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();
        }

        if (!link || !title) continue;

        let pubDate = pubDateMatch ? new Date(pubDateMatch[1]) : new Date();
        if (isNaN(pubDate.getTime())) pubDate = new Date();

        let snippet = "";
        if (descMatch) {
          snippet = descMatch[1]
            .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&amp;/g, "&")
            .replace(/<[^>]+>/g, " ")
            .replace(/\s+/g, " ")
            .slice(0, 300)
            .trim();
        }

        // ツールID判定（タイトルとフィード設定から自動検出）
        let toolId = feed.defaultToolId;
        const lower = title.toLowerCase() + " " + snippet.toLowerCase();
        if (lower.includes("chatgpt") || lower.includes("gpt-4o") || lower.includes("gpt-5") || lower.includes("gpt-6") || lower.includes("o1") || lower.includes("o3") || lower.includes("openai")) {
          toolId = "chatgpt";
        } else if (lower.includes("claude") || lower.includes("anthropic") || lower.includes("fable") || lower.includes("mythos")) {
          toolId = "claude";
        } else if (lower.includes("gemini") || lower.includes("deepmind")) {
          toolId = "gemini";
        } else if (lower.includes("copilot")) {
          toolId = "copilot";
        } else if (lower.includes("cursor")) {
          toolId = "cursor";
        } else if (lower.includes("flux") || lower.includes("black forest")) {
          toolId = "flux";
        } else if (lower.includes("suno")) {
          toolId = "suno";
        } else if (lower.includes("kling")) {
          toolId = "kling-ai";
        } else if (lower.includes("runway")) {
          toolId = "runway";
        } else if (lower.includes("v0") || lower.includes("vercel")) {
          toolId = "v0-vercel";
        }

        allItems.push({
          title,
          link,
          sourceName: feed.sourceName,
          pubDate,
          toolId,
          snippet,
        });

        count++;
        if (count >= itemsPerFeed) break;
      }
    } catch (err: any) {
      console.error(`[OfficialNews] Failed to fetch feed ${feed.sourceName}:`, err.message);
    }
  }

  // 日付の新しい順にソート
  allItems.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
  return allItems;
}

/**
 * 公式発表を日本語で初心者向け3行要約する
 */
export async function summarizeOfficialRelease(
  item: OfficialNewsItem,
  apiKey?: string,
  modelName = process.env.GEMINI_MODEL || "gemini-3.8-flash"
): Promise<string> {
  if (apiKey && apiKey.trim() !== "") {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: modelName });
      const prompt = `
あなたは信頼性最優先のAI総合ポータルの公式アナウンス解説員です。
以下の【一次情報・公式リリース】の内容を、日本のAI初心者・ビジネスパーソンに向けて正確かつ平易に日本語で「3行箇条書き要約（各行全角50文字以内）」にしてください。
必ず「・」で各行を始めてください。推測や誇張は一切交えず、公式が発表した事実のみを要約してください。

【発信元】: ${item.sourceName}
【公式タイトル】: ${item.title}
【概要抜粋】: ${item.snippet || "なし"}
`;
      // 6秒タイムアウト付きでGemini要約を呼び出し
      const timeoutPromise = new Promise<null>((_, reject) =>
        setTimeout(() => reject(new Error("Gemini timeout")), 6000)
      );
      const res: any = await Promise.race([
        model.generateContent(prompt),
        timeoutPromise,
      ]);
      const text = res?.response?.text()?.trim();
      if (text && text.includes("・")) {
        return text;
      }
    } catch (err) {
      console.warn("[OfficialNews] Gemini summary failed:", err);
    }
  }

  // フォールバック要約（公式発表の抜粋を用いた具体的で確実な要約）
  let cleanSnippet = item.snippet
    ? item.snippet
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
    : "";
  if (cleanSnippet.startsWith("http") || cleanSnippet.includes("news.google.com")) {
    cleanSnippet = "";
  }

  return `・${item.sourceName}より最新の公式アナウンスが公開されました。
${cleanSnippet ? `・公式概要: ${cleanSnippet.slice(0, 90)}…` : "・最新の機能改善・モデル仕様が公式アップデートされています。"}
・公式発表の詳細全文は添付の一次情報リンクよりご確認いただけます。`;
}

/**
 * 公式ニュースを取得してDBに保存・更新するメイン処理
 */
export async function syncLiveAINews(
  prisma: PrismaClient,
  limit = 25
): Promise<{ addedCount: number; newItems: any[] }> {
  const apiKey = process.env.GEMINI_API_KEY;
  const modelName = process.env.GEMINI_MODEL || "gemini-3.5-flash";

  const rawItems = await fetchOfficialAINews(4);
  const newItems: any[] = [];
  let addedCount = 0;

  for (const item of rawItems) {
    // 既存チェック
    const existing = await prisma.update.findFirst({
      where: {
        OR: [
          { title: item.title },
          { sourceUrl: item.link },
        ],
      },
    });

    if (existing) continue;

    // ツール存在チェック
    let validToolId: string | null = null;
    if (item.toolId) {
      const toolExists = await prisma.tool.findUnique({
        where: { id: item.toolId },
      });
      if (toolExists) {
        validToolId = item.toolId;
      }
    }

    // 3行要約生成
    const summary3Lines = await summarizeOfficialRelease(item, apiKey, modelName);

    const saved = await prisma.update.create({
      data: {
        toolId: validToolId,
        title: item.title,
        summary3Lines,
        sourceUrl: item.link,
        sourceName: item.sourceName,
        category: validToolId ? "update" : "news",
        publishedAt: item.pubDate,
      },
    });

    if (validToolId) {
      await prisma.tool.update({
        where: { id: validToolId },
        data: {
          rankScore: { increment: 2.0 },
          lastUpdated: new Date(),
        },
      });
    }

    newItems.push(saved);
    addedCount++;

    if (addedCount >= limit) break;
  }

  if (addedCount > 0) {
    await recalculateAllRankings(prisma);
  }

  return { addedCount, newItems };
}

/**
 * 全ツールの動的ランキング再計算
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
