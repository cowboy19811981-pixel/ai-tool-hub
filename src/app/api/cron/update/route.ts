import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { syncLiveAINews } from "@/lib/news-fetcher";
import { syncOfficialToolsByScope } from "@/lib/official-scraper";
import { UpdateScope, UPDATE_SCOPES_CONFIG } from "@/config/update-schedule";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const scopeParam = searchParams.get("scope") as UpdateScope | null;
    const scope: UpdateScope = scopeParam && UPDATE_SCOPES_CONFIG[scopeParam] ? scopeParam : "news";

    console.log(`🕒 [API /api/cron/update] Triggered for scope: "${scope}"`);

    let newsResult: any = null;
    let scraperResult: any = null;

    if (scope === "news") {
      // ニュース速報とランキングの更新 (12時間ごと想定)
      newsResult = await syncLiveAINews(prisma, 3);
    } else if (scope === "models") {
      // モデル・バージョン情報の同期 (週1回想定)
      scraperResult = await syncOfficialToolsByScope(prisma, "models");
    } else if (scope === "pricing") {
      // 料金プラン・無料枠の同期 (月1回想定)
      scraperResult = await syncOfficialToolsByScope(prisma, "pricing");
    } else if (scope === "static") {
      // ツール基本マスタ・概要の同期 (半期ごと想定)
      scraperResult = await syncOfficialToolsByScope(prisma, "static");
    } else if (scope === "all") {
      // 全範囲の一括同期
      newsResult = await syncLiveAINews(prisma, 3);
      scraperResult = await syncOfficialToolsByScope(prisma, "all");
    }

    const latestUpdates = await prisma.update.findMany({
      orderBy: { publishedAt: "desc" },
      take: 10,
    });

    const scopeConfig = UPDATE_SCOPES_CONFIG[scope];

    return NextResponse.json({
      success: true,
      scope,
      scopeLabel: scopeConfig.label,
      recommendedIntervalHours: scopeConfig.recommendedIntervalHours,
      message: `[${scopeConfig.label}] の同期処理が完了しました。`,
      details: {
        newsAddedCount: newsResult?.addedCount ?? 0,
        toolsSyncedCount: scraperResult?.successCount ?? 0,
        errorsCount: scraperResult?.errorsCount ?? 0,
      },
      updates: latestUpdates,
    });
  } catch (error: any) {
    console.error("[API /api/cron/update] Error:", error);
    return NextResponse.json(
      { error: "更新処理中にエラーが発生しました。", message: error.message },
      { status: 500 }
    );
  }
}
