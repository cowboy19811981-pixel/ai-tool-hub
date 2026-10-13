import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { userPrompt, lang } = await req.json();
    const isEn = lang === "en";

    if (!userPrompt || typeof userPrompt !== "string" || userPrompt.trim() === "") {
      return NextResponse.json(
        { error: isEn ? "Please enter your requirements." : "ご要望のテキストを入力してください。" },
        { status: 400 }
      );
    }

    // データベースから全60ツールの基本情報を取得
    const allTools = await prisma.tool.findMany({
      select: {
        id: true,
        name: true,
        category: true,
        categoryLabel: true,
        version: true,
        summary: true,
        pricingMonthly: true,
        hasFreeTier: true,
        supportsJapanese: true,
        commercialUse: true,
        officialUrl: true,
      },
    });

    const apiKey = process.env.GEMINI_API_KEY;
    const modelName = process.env.GEMINI_MODEL || "gemini-3.8-flash";

    // 1. Gemini API呼び出し (キーがある場合)
    if (apiKey && apiKey.trim() !== "") {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: modelName });

        const systemPrompt = isEn ? `
You are the world's premier AI consultant and architect.
A user has submitted their goals, workflow bottlenecks, and requirements.
From the following verified database of 60 leading AI tools, select the optimal 2-3 tools that best match the user's needs.
Provide clear reasoning and ready-to-copy practical prompts entirely in ENGLISH.

[Available AI Database]:
${allTools
  .map(
    (t) =>
      `- ID: "${t.id}", Name: "${t.name}", Category: "${t.category}", Pricing: "${t.pricingMonthly}", Summary: "${t.summary}"`
  )
  .join("\n")}

[Response Format]:
Return ONLY valid JSON matching this schema without markdown fences:
{
  "recommendations": [
    {
      "toolId": "exact tool ID matching the database above",
      "toolName": "Tool Name",
      "reason": "Specific explanation of why this tool fits the user's workflow (approx. 100 words in English)",
      "recommendedPrompt": "Practical, ready-to-use prompt template for this tool in English"
    }
  ],
  "advice": "Actionable overall advice on workflow adoption, free vs. paid tier recommendations in English"
}
` : `
あなたは世界最高のAIアドバイザーです。
ユーザーから「やりたいこと・悩み・要望」が届きました。
以下の登録済みAIデータベース（60種）から、ユーザーの要望に最も合致する最適な【上位2〜3ツール】を厳選し、具体的な理由と、そのツールで即座に使える推奨プロンプトを提案してください。

【対象AIデータベース】:
${allTools
  .map(
    (t) =>
      `- ID: "${t.id}", 名前: "${t.name}", 分野: "${t.categoryLabel}", 料金: "${t.pricingMonthly}", 特徴: "${t.summary}"`
  )
  .join("\n")}

【回答ルール】:
必ず以下のJSONフォーマットのみを返してください。マークダウンの装飾や前置きは含めないでください。
{
  "recommendations": [
    {
      "toolId": "ツールのID（上記データベースのIDと完全一致）",
      "toolName": "ツールの名前",
      "reason": "なぜこのツールがユーザーの要望に最適なのかの具体的解説（150文字程度）",
      "recommendedPrompt": "ユーザーがそのツールにコピペして即座に試せる実用プロンプト例文"
    }
  ],
  "advice": "ユーザーへの全体的な活用アドバイス・課金すべきか無料版で足りるかの一言コメント"
}
`;

        const userMessage = isEn
          ? `User Requirements: "${userPrompt}"`
          : `ユーザーの要望: "${userPrompt}"`;

        const result = await model.generateContent([systemPrompt, userMessage]);
        const responseText = result.response.text();
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          return NextResponse.json(parsed);
        }
      } catch (geminiError) {
        console.warn("Gemini API call failed, falling back to heuristic engine:", geminiError);
      }
    }

    // 2. インテリジェント・フォールバック (APIキーなし、またはAPIエラー時)
    const p = userPrompt.toLowerCase();
    let matchedToolIds: string[] = [];
    let adviceText = isEn
      ? "Start with the free tier to evaluate output fidelity, then upgrade to paid tiers as your workflow demands scale."
      : "まずは無料枠で使い勝手を試し、業務頻度が高まった段階で有料プランを検討するのが最もコスパが良いです。";

    if (
      p.includes("画像") || p.includes("イラスト") || p.includes("写真") || p.includes("ロゴ") || p.includes("デザイン") ||
      p.includes("image") || p.includes("photo") || p.includes("draw") || p.includes("design") || p.includes("logo")
    ) {
      matchedToolIds = ["midjourney", "flux", "recraft"];
      adviceText = isEn
        ? "Midjourney offers photorealistic artistic nuance, FLUX provides flawless text & hands at zero cost, and Recraft excels at vector SVGs."
        : "芸術的リアルさならMidjourney、指や文字入れの正確さなら無料のFlux、SVGやアイコンならRecraftが最適です。";
    } else if (
      p.includes("動画") || p.includes("映像") || p.includes("youtube") || p.includes("ショート") || p.includes("tiktok") || p.includes("アニメ") ||
      p.includes("video") || p.includes("shorts") || p.includes("animation") || p.includes("film")
    ) {
      matchedToolIds = ["runway", "kling-ai", "heygen"];
      adviceText = isEn
        ? "Runway delivers cinematic visual fidelity, Kling AI excels at smooth physics and generous free credits, while HeyGen dominates multilingual avatars."
        : "実写の映画クオリティならRunway、人物の滑らかな動きと無料枠ならKling、多言語解説動画ならHeyGenが最強です。";
    } else if (
      p.includes("音楽") || p.includes("曲") || p.includes("作曲") || p.includes("歌") || p.includes("bgm") || p.includes("声") || p.includes("音声") ||
      p.includes("music") || p.includes("song") || p.includes("audio") || p.includes("voice") || p.includes("speech")
    ) {
      matchedToolIds = ["suno", "udio", "elevenlabs"];
      adviceText = isEn
        ? "Suno delivers full radio-ready songs with vocals, Udio provides unmatched stems separation, and ElevenLabs sets the gold standard for voice cloning."
        : "歌入りのJ-POPならSuno、楽器の分離や音質ならUdio、人間の声と見分けがつかないナレーションならElevenLabsです。";
    } else if (
      p.includes("コード") || p.includes("プログラミング") || p.includes("開発") || p.includes("バグ") || p.includes("react") || p.includes("python") || p.includes("web") ||
      p.includes("code") || p.includes("programming") || p.includes("dev") || p.includes("software") || p.includes("app")
    ) {
      matchedToolIds = ["cursor", "v0-vercel", "github-copilot"];
      adviceText = isEn
        ? "Cursor rules multi-file codebase refactoring, v0 creates full-stack React UIs instantly, and GitHub Copilot provides reliable autocomplete."
        : "複数ファイル一括編集のCursor、React UI一発生成のv0、月10ドルで安定補完のGitHub Copilotが王道の組み合わせです。";
    } else if (
      p.includes("論文") || p.includes("リサーチ") || p.includes("要約") || p.includes("pdf") || p.includes("本") || p.includes("検索") || p.includes("調べ") ||
      p.includes("research") || p.includes("summary") || p.includes("paper") || p.includes("search")
    ) {
      matchedToolIds = ["notebooklm", "perplexity", "elicit"];
      adviceText = isEn
        ? "NotebookLM digests PDFs and sources with zero hallucinations, while Perplexity provides real-time citations across the live web."
        : "PDFや資料の要約なら完全無料のNotebookLM、最新Web情報の出典付き調査ならPerplexityが圧倒的です。";
    } else {
      matchedToolIds = ["chatgpt", "claude", "gemini"];
      adviceText = isEn
        ? "Compare ChatGPT's reasoning versatility against Claude's exceptional nuanced writing and coding precision."
        : "まずは万能のChatGPTと、文章・コード精度が抜群のClaudeを使い分けて比較してみることをおすすめします。";
    }

    const matchedTools = allTools.filter((t) => matchedToolIds.includes(t.id));

    const fallbackRecommendations = matchedTools.map((t) => ({
      toolId: t.id,
      toolName: t.name,
      reason: isEn
        ? `${t.name} specializes in high-fidelity workflows. It directly addresses your goal of "${userPrompt.slice(0, 35)}..." with proven performance.`
        : `${t.name}は${t.summary} ご要望の「${userPrompt.slice(0, 30)}…」に対して最も高い親和性を持ちます。`,
      recommendedPrompt: isEn
        ? `Act as an expert specialist in ${t.name}. Outline a step-by-step strategy to accomplish: "${userPrompt}". Provide best practices and clear milestones.`
        : `「${userPrompt}」について、初心者でもわかりやすく、具体的な手順とベストプラクティスをステップ形式で教えてください。`,
    }));

    return NextResponse.json({
      recommendations: fallbackRecommendations,
      advice: adviceText,
    });
  } catch (error: any) {
    console.error("Recommend API Error:", error);
    return NextResponse.json(
      { error: "Error occurred during recommendation analysis." },
      { status: 500 }
    );
  }
}

