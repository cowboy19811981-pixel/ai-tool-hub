import { PrismaClient } from "@prisma/client";
import { syncAllOfficialTools } from "../src/lib/official-scraper";

const prisma = new PrismaClient();

async function main() {
  console.log("🌐 Starting direct official HP scraping for all 60 AI tools...");
  try {
    const result = await syncAllOfficialTools(prisma);
    console.log(`\n========================================`);
    console.log(`✨ Direct Official Sync Complete!`);
    console.log(`   - Verified & Updated: ${result.successCount} tools`);
    console.log(`   - Timeouts / Skipped: ${result.errorsCount} tools`);
    console.log(`========================================\n`);
  } catch (error) {
    console.error("❌ Fatal sync error:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
