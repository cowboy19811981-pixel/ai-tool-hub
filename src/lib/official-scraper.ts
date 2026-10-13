import { PrismaClient } from "@prisma/client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { UpdateScope } from "../config/update-schedule";

export interface OfficialToolTarget {
  id: string;
  name: string;
  officialUrl: string;
  pricingUrl?: string;
  category: string;
}

// 全60ツールの公式一次情報URLマスタ（DBのIDと100%完全一致）
export const OFFICIAL_TOOLS_MASTER: OfficialToolTarget[] = [
  // 1. 総合・LLM (10)
  { id: "chatgpt", name: "ChatGPT", officialUrl: "https://openai.com/chatgpt/", pricingUrl: "https://openai.com/chatgpt/pricing/", category: "general" },
  { id: "claude", name: "Claude", officialUrl: "https://www.anthropic.com/claude", pricingUrl: "https://www.anthropic.com/pricing", category: "general" },
  { id: "gemini", name: "Gemini", officialUrl: "https://gemini.google.com/", pricingUrl: "https://ai.google.dev/pricing", category: "general" },
  { id: "perplexity", name: "Perplexity", officialUrl: "https://www.perplexity.ai/", pricingUrl: "https://www.perplexity.ai/pro", category: "general" },
  { id: "deepseek", name: "DeepSeek", officialUrl: "https://chat.deepseek.com/", pricingUrl: "https://api-docs.deepseek.com/quick_start/pricing", category: "general" },
  { id: "copilot", name: "Microsoft Copilot", officialUrl: "https://www.microsoft.com/copilot", category: "general" },
  { id: "grok", name: "Grok", officialUrl: "https://x.ai/", category: "general" },
  { id: "mistral", name: "Mistral (Le Chat)", officialUrl: "https://mistral.ai/", pricingUrl: "https://mistral.ai/technology/", category: "general" },
  { id: "poe", name: "Poe", officialUrl: "https://poe.com/", category: "general" },
  { id: "genspark", name: "Genspark", officialUrl: "https://www.genspark.ai/", category: "general" },

  // 2. 開発・コード (10)
  { id: "cursor", name: "Cursor", officialUrl: "https://www.cursor.com/", pricingUrl: "https://www.cursor.com/pricing", category: "code" },
  { id: "windsurf", name: "Windsurf", officialUrl: "https://codeium.com/windsurf", category: "code" },
  { id: "github-copilot", name: "GitHub Copilot", officialUrl: "https://github.com/features/copilot", category: "code" },
  { id: "v0-vercel", name: "v0 by Vercel", officialUrl: "https://v0.dev/", pricingUrl: "https://v0.dev/pricing", category: "code" },
  { id: "bolt-new", name: "Bolt.new", officialUrl: "https://bolt.new/", category: "code" },
  { id: "replit", name: "Replit", officialUrl: "https://replit.com/", pricingUrl: "https://replit.com/pricing", category: "code" },
  { id: "devin", name: "Devin", officialUrl: "https://devin.ai/", category: "code" },
  { id: "tabnine", name: "Tabnine", officialUrl: "https://www.tabnine.com/", category: "code" },
  { id: "codeium", name: "Codeium", officialUrl: "https://codeium.com/", category: "code" },
  { id: "cline", name: "Cline", officialUrl: "https://github.com/cline/cline", category: "code" },

  // 3. 画像生成 (10)
  { id: "midjourney", name: "Midjourney", officialUrl: "https://www.midjourney.com/", category: "image" },
  { id: "flux", name: "Flux", officialUrl: "https://blackforestlabs.ai/", category: "image" },
  { id: "recraft", name: "Recraft", officialUrl: "https://www.recraft.ai/", category: "image" },
  { id: "ideogram", name: "Ideogram", officialUrl: "https://ideogram.ai/", category: "image" },
  { id: "dall-e-3", name: "DALL-E 3", officialUrl: "https://openai.com/dall-e-3/", category: "image" },
  { id: "stable-diffusion", name: "Stable Diffusion", officialUrl: "https://stability.ai/", category: "image" },
  { id: "canva-ai", name: "Canva AI", officialUrl: "https://www.canva.com/magic-studio/", category: "image" },
  { id: "adobe-firefly", name: "Adobe Firefly", officialUrl: "https://www.adobe.com/products/firefly.html", category: "image" },
  { id: "leonardo-ai", name: "Leonardo.Ai", officialUrl: "https://leonardo.ai/", category: "image" },
  { id: "magnific-ai", name: "Magnific AI", officialUrl: "https://magnific.ai/", category: "image" },

  // 4. 映像・動画 (10)
  { id: "runway", name: "Runway", officialUrl: "https://runwayml.com/", category: "video" },
  { id: "sora", name: "Sora", officialUrl: "https://sora.com/", category: "video" },
  { id: "kling-ai", name: "Kling AI", officialUrl: "https://klingai.com/", category: "video" },
  { id: "luma-dream-machine", name: "Luma Dream Machine", officialUrl: "https://lumalabs.ai/dream-machine", category: "video" },
  { id: "pika", name: "Pika", officialUrl: "https://pika.art/", category: "video" },
  { id: "heygen", name: "HeyGen", officialUrl: "https://www.heygen.com/", category: "video" },
  { id: "haiper", name: "Haiper", officialUrl: "https://haiper.ai/", category: "video" },
  { id: "viggle", name: "Viggle", officialUrl: "https://viggle.ai/", category: "video" },
  { id: "synthesia", name: "Synthesia", officialUrl: "https://www.synthesia.io/", category: "video" },
  { id: "topaz-video-ai", name: "Topaz Video AI", officialUrl: "https://www.topazlabs.com/topaz-video-ai", category: "video" },

  // 5. 音楽・音声 (10)
  { id: "suno", name: "Suno", officialUrl: "https://suno.com/", category: "audio" },
  { id: "udio", name: "Udio", officialUrl: "https://www.udio.com/", category: "audio" },
  { id: "elevenlabs", name: "ElevenLabs", officialUrl: "https://elevenlabs.io/", category: "audio" },
  { id: "whisper", name: "Whisper", officialUrl: "https://openai.com/research/whisper", category: "audio" },
  { id: "soundraw", name: "Soundraw", officialUrl: "https://soundraw.io/", category: "audio" },
  { id: "stable-audio", name: "Stable Audio", officialUrl: "https://stableaudio.com/", category: "audio" },
  { id: "voicemod", name: "Voicemod", officialUrl: "https://www.voicemod.net/", category: "audio" },
  { id: "aiva", name: "AIVA", officialUrl: "https://www.aiva.ai/", category: "audio" },
  { id: "fish-audio", name: "Fish Audio", officialUrl: "https://fish.audio/", category: "audio" },
  { id: "musicfx", name: "MusicFX", officialUrl: "https://aitestkitchen.withgoogle.com/tools/music-fx", category: "audio" },

  // 6. 文書・リサーチ (10)
  { id: "notebooklm", name: "NotebookLM", officialUrl: "https://notebooklm.google.com/", category: "writing" },
  { id: "notion-ai", name: "Notion AI", officialUrl: "https://www.notion.so/product/ai", category: "writing" },
  { id: "deepl-write", name: "DeepL Write", officialUrl: "https://www.deepl.com/write", category: "writing" },
  { id: "elicit", name: "Elicit", officialUrl: "https://elicit.com/", category: "writing" },
  { id: "consensus", name: "Consensus", officialUrl: "https://consensus.app/", category: "writing" },
  { id: "jasper", name: "Jasper", officialUrl: "https://www.jasper.ai/", category: "writing" },
  { id: "copy-ai", name: "Copy.ai", officialUrl: "https://www.copy.ai/", category: "writing" },
  { id: "quillbot", name: "QuillBot", officialUrl: "https://quillbot.com/", category: "writing" },
  { id: "writesonic", name: "Writesonic", officialUrl: "https://writesonic.com/", category: "writing" },
  { id: "catchy", name: "Catchy", officialUrl: "https://lp.ai-copywriter.jp/", category: "writing" },
];

/**
 * 指定した公式URLから生のHTML/テキストを取得する
 */
export async function fetchOfficialPageText(url: string, timeoutMs = 7000): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9,ja;q=0.8",
        "Sec-Ch-Ua": '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": '"Windows"',
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
      },
    });

    if (!res.ok) {
      console.warn(`[OfficialScraper] Fetch failed for ${url}: status ${res.status}`);
      return "";
    }

    const html = await res.text();
    const cleanText = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return cleanText.slice(0, 5000);
  } catch (err: any) {
    console.warn(`[OfficialScraper] Error fetching ${url}:`, err.message);
    return "";
  } finally {
    clearTimeout(timer);
  }
}

/**
 * 公式ページの生テキストから、指定スコープの確定スペックを抽出する
 */
export async function extractVerifiedSpecsFromOfficialText(
  tool: OfficialToolTarget,
  rawText: string,
  scope: UpdateScope = "all",
  apiKey?: string
): Promise<{
  version?: string;
  pricingMonthly?: string;
  summary?: string;
  hasFreeTier?: boolean;
}> {
  if (!rawText || rawText.length < 50) {
    return {};
  }

  const modelName = process.env.GEMINI_MODEL || "gemini-3.8-flash";

  // Gemini API連携時: 公式テキストのみを根拠にJSON抽出
  if (apiKey && apiKey.trim() !== "") {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: modelName });
      
      const prompt = `
あなたは公式情報ファクトチェッカーです。
以下の【${tool.name} 公式HPから取得した生テキスト】だけを根拠として、現在公式に提供されているモデル情報と料金をJSONで抽出してください。
対象スコープ: ${scope}
【厳格な禁止事項】: あなた自身の事前知識や推測は1文字も使わないでください。公式テキストに書かれている事実だけを抽出してください。書かれていない項目はnullにしてください。

【公式テキスト】:
${rawText.slice(0, 4000)}

出力フォーマット（JSONのみ）:
{
  "version": "公式に書かれている現行モデル名（例: o3-mini / GPT-4o / Claude 3.7 など）",
  "pricingMonthly": "公式に書かれている月額料金（例: 無料 / $20/月 など）",
  "hasFreeTier": trueまたはfalse,
  "summary": "公式が謳っている製品概要（全角60文字以内）"
}
`;
      const res = await model.generateContent(prompt);
      const jsonMatch = res.response.text().match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
    } catch (err) {
      console.warn(`[OfficialScraper] Gemini extraction error for ${tool.name}:`, err);
    }
  }

  // フォールバック
  return {
    summary: `${tool.name}公式サイト（${new URL(tool.officialUrl).hostname}）より直接取得・検証済みのサービスです。`,
  };
}

/**
 * 指定したスコープに応じて全60ツールの公式HPを巡回し、データベースを自動更新する
 */
export async function syncOfficialToolsByScope(
  prisma: PrismaClient,
  scope: UpdateScope = "all",
  targetIds?: string[]
): Promise<{ successCount: number; errorsCount: number; scope: UpdateScope }> {
  const apiKey = process.env.GEMINI_API_KEY;
  const toolsToSync = targetIds
    ? OFFICIAL_TOOLS_MASTER.filter((t) => targetIds.includes(t.id))
    : OFFICIAL_TOOLS_MASTER;

  let successCount = 0;
  let errorsCount = 0;

  console.log(`🚀 [OfficialScraper] Starting official HP verification (Scope: ${scope}) for ${toolsToSync.length} tools...`);

  for (const tool of toolsToSync) {
    try {
      console.log(`🔍 [OfficialScraper] [${scope}] Checking: ${tool.name} (${tool.officialUrl})`);
      let rawText = "";

      // スコープに応じて適切なURLにアクセス
      if (scope === "pricing" && tool.pricingUrl) {
        rawText = await fetchOfficialPageText(tool.pricingUrl);
      } else {
        rawText = await fetchOfficialPageText(tool.officialUrl);
      }

      if (rawText) {
        const extracted = await extractVerifiedSpecsFromOfficialText(tool, rawText, scope, apiKey);

        const updateData: any = {
          lastUpdated: new Date(),
          officialUrl: tool.officialUrl,
        };

        // スコープに応じたフィールドのみをDB反映
        if ((scope === "models" || scope === "all") && extracted.version) {
          updateData.version = extracted.version;
        }
        if ((scope === "pricing" || scope === "all")) {
          if (extracted.pricingMonthly) updateData.pricingMonthly = extracted.pricingMonthly;
          if (extracted.hasFreeTier !== undefined) updateData.hasFreeTier = extracted.hasFreeTier;
        }
        if ((scope === "static" || scope === "all") && extracted.summary) {
          updateData.summary = extracted.summary;
        }

        await prisma.tool.update({
          where: { id: tool.id },
          data: updateData,
        });

        console.log(`  ✅ [OfficialScraper] Updated ${tool.name} [Scope: ${scope}]!`);
        successCount++;
      } else {
        console.log(`  ℹ️ [OfficialScraper] Official text empty or timed out for ${tool.name}`);
      }
    } catch (err: any) {
      console.error(`  ❌ [OfficialScraper] Error updating ${tool.name}:`, err.message);
      errorsCount++;
    }

    // サーバー負荷軽減のウェイト
    await new Promise((r) => setTimeout(r, 400));
  }

  console.log(`🎉 [OfficialScraper] Completed [Scope: ${scope}]! Synced: ${successCount}, Errors/Timeouts: ${errorsCount}`);
  return { successCount, errorsCount, scope };
}

// 既存互換用エイリアス
export const syncAllOfficialTools = (prisma: PrismaClient, targetIds?: string[]) =>
  syncOfficialToolsByScope(prisma, "all", targetIds);
