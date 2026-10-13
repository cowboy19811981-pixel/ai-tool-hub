import { PrismaClient } from "@prisma/client";
import { syncLiveAINews } from "../src/lib/news-fetcher";
import { syncOfficialToolsByScope } from "../src/lib/official-scraper";
import { UpdateScope, UPDATE_SCOPES_CONFIG } from "../src/config/update-schedule";

const prisma = new PrismaClient();

// CLI引数から --scope=xxx を解析
function parseScopeArg(): UpdateScope {
  const args = process.argv.slice(2);
  for (const arg of args) {
    if (arg.startsWith("--scope=")) {
      const scopeVal = arg.replace("--scope=", "") as UpdateScope;
      if (UPDATE_SCOPES_CONFIG[scopeVal]) {
        return scopeVal;
      }
    }
  }
  return "news"; // デフォルトは12時間ごとのニュース速報
}

async function main() {
  const scope = parseScopeArg();
  const config = UPDATE_SCOPES_CONFIG[scope];

  console.log(`====================================================`);
  console.log(`🕒 [BATCH] Running Automated AI Update`);
  console.log(`   Scope: ${scope.toUpperCase()} - ${config.label}`);
  console.log(`   Description: ${config.description}`);
  console.log(`   Interval: Every ${config.recommendedIntervalHours} hours`);
  console.log(`====================================================`);

  try {
    if (scope === "news") {
      console.log("📰 Fetching real-time official AI news & ranking...");
      const result = await syncLiveAINews(prisma, 5);
      console.log(`✅ Successfully processed ${result.addedCount} news items.`);
    } else if (scope === "models") {
      console.log("🤖 Syncing active AI model versions from official homepages...");
      const result = await syncOfficialToolsByScope(prisma, "models");
      console.log(`✅ Model version sync complete: ${result.successCount} tools updated.`);
    } else if (scope === "pricing") {
      console.log("💰 Syncing pricing plans & free tier details from official pricing pages...");
      const result = await syncOfficialToolsByScope(prisma, "pricing");
      console.log(`✅ Pricing sync complete: ${result.successCount} tools updated.`);
    } else if (scope === "static") {
      console.log("📁 Syncing core metadata and official URLs...");
      const result = await syncOfficialToolsByScope(prisma, "static");
      console.log(`✅ Static metadata sync complete: ${result.successCount} tools updated.`);
    } else if (scope === "all") {
      console.log("🌐 Running FULL sync (News + Models + Pricing + Static)...");
      const newsResult = await syncLiveAINews(prisma, 5);
      const toolsResult = await syncOfficialToolsByScope(prisma, "all");
      console.log(`✅ Full sync complete! News: ${newsResult.addedCount}, Tools: ${toolsResult.successCount}`);
    }

    console.log(`🎉 [BATCH] Batch execution finished successfully for scope: ${scope}\n`);
  } catch (error) {
    console.error(`❌ [BATCH] Execution error for scope ${scope}:`, error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
