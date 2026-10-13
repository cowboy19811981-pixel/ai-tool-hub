const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const tools = await prisma.tool.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      version: true,
      badge: true,
      specs: true,
    },
    orderBy: { category: 'asc' },
  });

  console.log('Total tools in DB:', tools.length);
  for (const t of tools) {
    let ctx = '-';
    let model = '-';
    try {
      const sp = JSON.parse(t.specs || '{}');
      ctx = sp.contextWindow || '-';
      model = sp.baseModel || sp.architecture || sp.model || '-';
    } catch (e) {}
    console.log(`${t.category.padEnd(8)} | ${t.id.padEnd(16)} | ${t.name.padEnd(20)} | Ver: ${(t.version || 'none').padEnd(18)} | Ctx: ${ctx.padEnd(12)} | Base: ${model}`);
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
