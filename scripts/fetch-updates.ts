import { PrismaClient } from "@prisma/client";
import { syncLiveAINews } from "../src/lib/news-fetcher";

const prisma = new PrismaClient();

async function main() {
  console.log("🕒 [CRON] Starting 12-hour automated AI news & ranking batch...");
  
  try {
    const result = await syncLiveAINews(prisma, 5);
    console.log(`✅ [CRON] Successfully fetched and processed ${result.addedCount} real AI news items from Google News RSS!`);
    
    for (const item of result.newItems) {
      console.log(`  📰 [NEWS] [${item.sourceName || "Web"}] ${item.title}`);
      if (item.toolId) {
        console.log(`     🎯 Linked to Tool: ${item.toolId}`);
      }
    }

    console.log("🎉 [CRON] 12-hour batch completed and rankings updated!");
  } catch (error) {
    console.error("❌ [CRON] Batch execution error:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
