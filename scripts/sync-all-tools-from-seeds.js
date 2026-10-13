const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// TypeScriptコンパイル後のデータを読み込むか、ts-node相当で読み込む
const { generalTools } = require('../prisma/data/general');
const { codeTools } = require('../prisma/data/code');
const { imageTools } = require('../prisma/data/image');
const { videoTools } = require('../prisma/data/video');
const { audioTools } = require('../prisma/data/audio');
const { writingTools } = require('../prisma/data/writing');

async function syncSeeds() {
  const allSeeds = [
    ...generalTools,
    ...codeTools,
    ...imageTools,
    ...videoTools,
    ...audioTools,
    ...writingTools,
  ];

  console.log(`🚀 [SeedSync] Updating database with verified seed data for ${allSeeds.length} tools...`);
  let count = 0;

  for (const item of allSeeds) {
    try {
      await prisma.tool.upsert({
        where: { id: item.id },
        update: {
          name: item.name,
          category: item.category,
          categoryLabel: item.categoryLabel,
          badge: item.badge,
          version: item.version,
          versionFeatures: JSON.stringify(item.versionFeatures),
          estimatedUsers: item.estimatedUsers,
          rankScore: item.rankScore,
          categoryRank: item.categoryRank,
          overallRank: item.overallRank,
          pricingType: item.pricingType,
          pricingMonthly: item.pricingMonthly,
          freePlanDetails: JSON.stringify(item.freePlanDetails),
          paidPlanDetails: JSON.stringify(item.paidPlanDetails),
          paidWorthRating: item.paidWorthRating,
          hasFreeTier: item.hasFreeTier,
          supportsJapanese: item.supportsJapanese,
          commercialUse: item.commercialUse,
          hasApi: item.hasApi,
          hasApp: item.hasApp,
          summary: item.summary,
          description: item.description,
          pros: JSON.stringify(item.pros),
          cons: JSON.stringify(item.cons),
          specs: JSON.stringify(item.specs),
          officialUrl: item.officialUrl,
          lastUpdated: new Date(),
        },
        create: {
          id: item.id,
          name: item.name,
          category: item.category,
          categoryLabel: item.categoryLabel,
          badge: item.badge,
          version: item.version,
          versionFeatures: JSON.stringify(item.versionFeatures),
          estimatedUsers: item.estimatedUsers,
          rankScore: item.rankScore,
          categoryRank: item.categoryRank,
          overallRank: item.overallRank,
          pricingType: item.pricingType,
          pricingMonthly: item.pricingMonthly,
          freePlanDetails: JSON.stringify(item.freePlanDetails),
          paidPlanDetails: JSON.stringify(item.paidPlanDetails),
          paidWorthRating: item.paidWorthRating,
          hasFreeTier: item.hasFreeTier,
          supportsJapanese: item.supportsJapanese,
          commercialUse: item.commercialUse,
          hasApi: item.hasApi,
          hasApp: item.hasApp,
          summary: item.summary,
          description: item.description,
          pros: JSON.stringify(item.pros),
          cons: JSON.stringify(item.cons),
          specs: JSON.stringify(item.specs),
          officialUrl: item.officialUrl,
          lastUpdated: new Date(),
        },
      });
      count++;
    } catch (err) {
      console.error(`Error updating tool ${item.id}:`, err.message);
    }
  }

  console.log(`✅ [SeedSync] Successfully updated ${count} / ${allSeeds.length} tools in SQLite database!`);
}

syncSeeds().catch(console.error).finally(() => prisma.$disconnect());
