import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const tool = await prisma.tool.update({
      where: { id },
      data: {
        votesCount: { increment: 1 },
        rankScore: { increment: 0.1 },
      },
      select: {
        id: true,
        votesCount: true,
        rankScore: true,
      },
    });

    return NextResponse.json(tool);
  } catch (error) {
    console.error("Vote API Error:", error);
    return NextResponse.json(
      { error: "投票の更新に失敗しました。" },
      { status: 500 }
    );
  }
}
