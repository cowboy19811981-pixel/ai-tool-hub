import React from "react";
import { prisma } from "@/lib/prisma";
import { MainApp } from "@/components/MainApp";
import { ToolItem, UpdateItem, PromptItem, GalleryItemType } from "@/types";

export const revalidate = 60; // 60秒ごとに再検証（動的更新対応）

export default async function HomePage() {
  // DBから全ツール取得
  const dbTools = await prisma.tool.findMany({
    orderBy: [
      { overallRank: "asc" },
      { rankScore: "desc" },
    ],
  });

  // DBから最新ニュース取得 (直近30件)
  const dbUpdates = await prisma.update.findMany({
    orderBy: { publishedAt: "desc" },
    take: 30,
  });

  // DBからプロンプト取得
  const dbPrompts = await prisma.prompt.findMany({
    orderBy: { copiedCount: "desc" },
  });

  // DBからギャラリー取得
  const dbGalleries = await prisma.galleryItem.findMany({
    orderBy: { createdAt: "desc" },
  });

  // データをフロントエンド型へマッピング
  const tools: ToolItem[] = dbTools.map((t) => ({
    id: t.id,
    name: t.name,
    category: t.category as any,
    categoryLabel: t.categoryLabel,
    badge: t.badge,
    version: t.version,
    versionFeatures: JSON.parse(t.versionFeatures),
    estimatedUsers: t.estimatedUsers,
    siteRegisteredCount: t.siteRegisteredCount,
    votesCount: t.votesCount,
    rankScore: t.rankScore,
    categoryRank: t.categoryRank,
    overallRank: t.overallRank,
    pricingType: t.pricingType,
    pricingMonthly: t.pricingMonthly,
    freePlanDetails: JSON.parse(t.freePlanDetails),
    paidPlanDetails: JSON.parse(t.paidPlanDetails),
    plansList: t.plansList ? JSON.parse(t.plansList) : undefined,
    paidWorthRating: t.paidWorthRating,
    hasFreeTier: t.hasFreeTier,
    supportsJapanese: t.supportsJapanese,
    commercialUse: t.commercialUse,
    hasApi: t.hasApi,
    hasApp: t.hasApp,
    summary: t.summary,
    description: t.description,
    pros: JSON.parse(t.pros),
    cons: JSON.parse(t.cons),
    specs: JSON.parse(t.specs),
    officialUrl: t.officialUrl,
    affiliateUrl: t.affiliateUrl,
    lastUpdated: t.lastUpdated.toISOString(),
  }));

  const updates: UpdateItem[] = dbUpdates.map((u) => ({
    id: u.id,
    toolId: u.toolId,
    title: u.title,
    summary3Lines: u.summary3Lines,
    sourceUrl: u.sourceUrl,
    sourceName: u.sourceName,
    category: u.category,
    publishedAt: u.publishedAt.toISOString(),
  }));

  const prompts: PromptItem[] = dbPrompts.map((p) => {
    const parentTool = tools.find((t) => t.id === p.toolId);
    return {
      id: p.id,
      toolId: p.toolId,
      toolName: parentTool?.name || p.toolId,
      category: p.category,
      title: p.title,
      promptText: p.promptText,
      bestPracticeTips: p.bestPracticeTips,
      copiedCount: p.copiedCount,
    };
  });

  const galleries: GalleryItemType[] = dbGalleries.map((g) => ({
    id: g.id,
    theme: g.theme,
    category: g.category,
    inputPrompt: g.inputPrompt,
    comparisons: JSON.parse(g.comparisons),
  }));

  return (
    <MainApp
      initialTools={tools}
      updates={updates}
      prompts={prompts}
      galleries={galleries}
    />
  );
}
