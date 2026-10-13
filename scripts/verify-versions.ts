import { prisma } from "../src/lib/prisma";

async function main() {
  const tools = await prisma.tool.findMany();
  for (const id of ["claude", "gemini", "chatgpt", "cursor", "midjourney", "runway", "suno"]) {
    const t = tools.find((x) => x.id === id);
    if (!t) continue;
    const vf = JSON.parse(t.versionFeatures);
    console.log(`\n========================================`);
    console.log(`Tool: ${t.name} (Pricing: ${t.pricingType})`);
    console.log(`========================================`);
    if (vf.versionsList) {
      vf.versionsList.forEach((v: any) => {
        console.log(`- [${v.tier?.toUpperCase() || "UNKNOWN"}] shortName: "${v.shortName}" | Name: "${v.name}" | Plan: "${v.planAvailability}"`);
      });
    } else {
      console.log("No versionsList found");
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
