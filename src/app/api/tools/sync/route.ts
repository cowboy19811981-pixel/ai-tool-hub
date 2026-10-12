import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { syncAllOfficialTools } from "@/lib/official-scraper";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const targetIds = body.targetIds as string[] | undefined;

    const result = await syncAllOfficialTools(prisma, targetIds);

    const updatedTools = await prisma.tool.findMany({
      orderBy: [{ overallRank: "asc" }, { rankScore: "desc" }],
    });

    return NextResponse.json({
      success: true,
      message: `公式HPからの直接データ同期が完了しました（更新: ${result.successCount}件）`,
      result,
      tools: updatedTools,
    });
  } catch (error: any) {
    console.error("[OfficialSyncRoute] Error:", error);
    return NextResponse.json(
      { error: "公式HPの同期中にエラーが発生しました。" },
      { status: 500 }
    );
  }
}
