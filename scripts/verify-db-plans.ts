import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("=== VERIFYING DATABASE PLANS LIST ===");
  const tools = await prisma.tool.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      plansList: true,
    },
  });

  console.log(`Total tools in DB: ${tools.length}`);

  const withPlans = tools.filter((t) => !!t.plansList);
  console.log(`Tools with multi-tier plansList: ${withPlans.length}`);

  for (const tool of withPlans) {
    try {
      const parsed = JSON.parse(tool.plansList!);
      console.log(`\nTool: [${tool.name}] (${tool.category}) -> ${parsed.length} plans:`);
      for (const p of parsed) {
        console.log(`  - Plan: ${p.name} | Monthly: ${p.priceMonthly} | Popular: ${!!p.isPopular} | Free: ${!!p.isFree}`);
      }
    } catch (e: any) {
      console.error(`Failed to parse plans for ${tool.name}:`, e.message);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
