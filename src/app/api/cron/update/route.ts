import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { syncLiveAINews } from "@/lib/news-fetcher";

export async function GET(req: NextRequest) {
  try {
    const result = await syncLiveAINews(prisma, 3);

    // 最新のニュース一覧を取得して返す
    const latestUpdates = await prisma.update.findMany({
      orderBy: { publishedAt: "desc" },
      take: 12,
    });

    return NextResponse.json({
      success: true,
      message: result.addedCount > 0
        ? `Webから最新のリアルタイムAIニュースを${result.addedCount}件取得・要約しました！`
        : "最新ニュースを確認しました（すべて最新の状態です）。",
      addedCount: result.addedCount,
      updates: latestUpdates,
    });
  } catch (error: any) {
    console.error("Cron Route Error:", error);
    return NextResponse.json(
      { error: "リアルタイムニュースの取得中にエラーが発生しました。" },
      { status: 500 }
    );
  }
}
