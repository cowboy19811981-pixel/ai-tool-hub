import { PrismaClient } from "@prisma/client";
import { generalTools } from "./data/general";
import { writingTools } from "./data/writing";
import { imageTools } from "./data/image";
import { videoTools } from "./data/video";
import { audioTools } from "./data/audio";
import { codeTools } from "./data/code";
import { promptsData } from "./data/prompts";
import { galleriesData } from "./data/galleries";
import { updatesData } from "./data/updates";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed database...");

  // 1. 全60ツールをマージ
  const allTools = [
    ...generalTools,
    ...writingTools,
    ...imageTools,
    ...videoTools,
    ...audioTools,
    ...codeTools,
  ];

  console.log(`📦 Seeding ${allTools.length} AI tools...`);

  for (const tool of allTools) {
    await prisma.tool.upsert({
      where: { id: tool.id },
      update: {
        name: tool.name,
        category: tool.category,
        categoryLabel: tool.categoryLabel,
        badge: tool.badge,
        version: tool.version,
        versionFeatures: JSON.stringify(tool.versionFeatures),
        estimatedUsers: tool.estimatedUsers,
        siteRegisteredCount: tool.siteRegisteredCount,
        votesCount: tool.votesCount,
        rankScore: tool.rankScore,
        categoryRank: tool.categoryRank,
        overallRank: tool.overallRank,
        pricingType: tool.pricingType,
        pricingMonthly: tool.pricingMonthly,
        freePlanDetails: JSON.stringify(tool.freePlanDetails),
        paidPlanDetails: JSON.stringify(tool.paidPlanDetails),
        paidWorthRating: tool.paidWorthRating,
        hasFreeTier: tool.hasFreeTier,
        supportsJapanese: tool.supportsJapanese,
        commercialUse: tool.commercialUse,
        hasApi: tool.hasApi,
        hasApp: tool.hasApp,
        summary: tool.summary,
        description: tool.description,
        pros: JSON.stringify(tool.pros),
        cons: JSON.stringify(tool.cons),
        specs: JSON.stringify(tool.specs),
        officialUrl: tool.officialUrl,
      },
      create: {
        id: tool.id,
        name: tool.name,
        category: tool.category,
        categoryLabel: tool.categoryLabel,
        badge: tool.badge,
        version: tool.version,
        versionFeatures: JSON.stringify(tool.versionFeatures),
        estimatedUsers: tool.estimatedUsers,
        siteRegisteredCount: tool.siteRegisteredCount,
        votesCount: tool.votesCount,
        rankScore: tool.rankScore,
        categoryRank: tool.categoryRank,
        overallRank: tool.overallRank,
        pricingType: tool.pricingType,
        pricingMonthly: tool.pricingMonthly,
        freePlanDetails: JSON.stringify(tool.freePlanDetails),
        paidPlanDetails: JSON.stringify(tool.paidPlanDetails),
        paidWorthRating: tool.paidWorthRating,
        hasFreeTier: tool.hasFreeTier,
        supportsJapanese: tool.supportsJapanese,
        commercialUse: tool.commercialUse,
        hasApi: tool.hasApi,
        hasApp: tool.hasApp,
        summary: tool.summary,
        description: tool.description,
        pros: JSON.stringify(tool.pros),
        cons: JSON.stringify(tool.cons),
        specs: JSON.stringify(tool.specs),
        officialUrl: tool.officialUrl,
      },
    });
  }

  // 2. プロンプト集
  console.log(`💡 Seeding ${promptsData.length} prompts...`);
  for (const prompt of promptsData) {
    await prisma.prompt.upsert({
      where: { id: prompt.id },
      update: {
        toolId: prompt.toolId,
        category: prompt.category,
        title: prompt.title,
        promptText: prompt.promptText,
        bestPracticeTips: prompt.bestPracticeTips,
        copiedCount: prompt.copiedCount,
      },
      create: {
        id: prompt.id,
        toolId: prompt.toolId,
        category: prompt.category,
        title: prompt.title,
        promptText: prompt.promptText,
        bestPracticeTips: prompt.bestPracticeTips,
        copiedCount: prompt.copiedCount,
      },
    });
  }

  // 3. ギャラリー比較
  console.log(`🖼️ Seeding ${galleriesData.length} gallery comparisons...`);
  for (const item of galleriesData) {
    await prisma.galleryItem.upsert({
      where: { id: item.id },
      update: {
        theme: item.theme,
        category: item.category,
        inputPrompt: item.inputPrompt,
        comparisons: JSON.stringify(item.comparisons),
      },
      create: {
        id: item.id,
        theme: item.theme,
        category: item.category,
        inputPrompt: item.inputPrompt,
        comparisons: JSON.stringify(item.comparisons),
      },
    });
  }

  // 4. 最新アップデートニュース
  console.log(`📰 Seeding ${updatesData.length} updates...`);
  // 既存のUpdateをクリーンアップしてから投入
  await prisma.update.deleteMany();
  for (const update of updatesData) {
    await prisma.update.create({
      data: {
        toolId: update.toolId,
        title: update.title,
        summary3Lines: update.summary3Lines,
        sourceUrl: update.sourceUrl,
        sourceName: update.sourceName || "公式発表",
        category: update.category || (update.toolId ? "update" : "news"),
        publishedAt: update.publishedAt,
      },
    });
  }

  console.log("✅ Database seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
