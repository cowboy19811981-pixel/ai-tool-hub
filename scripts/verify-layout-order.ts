import http from "http";

function fetchHtml(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
      res.on("error", reject);
    });
  });
}

async function verifyLayoutOrder() {
  console.log("=== VERIFYING CLEAN LAYOUT COMPONENT ORDER ===");
  const html = await fetchHtml("http://localhost:3000");

  const catalogIdx = html.indexOf('id="catalog-section"');
  const newsIdx = html.indexOf('id="news-section"');

  console.log(`catalog-section index in HTML: ${catalogIdx}`);
  console.log(`news-section index in HTML: ${newsIdx}`);

  if (catalogIdx < newsIdx && catalogIdx !== -1) {
    console.log("✅ SUCCESS: catalog-section (Main AI Workspace) appears BEFORE news-section!");
  } else {
    console.log("❌ FAILED: news-section is still ahead of catalog-section");
  }

  // Check that old bloated hero features are removed
  const hasOldFeature1 = html.includes("heroFeature1Title") || html.includes("厳選60AIを徹底比較");
  const hasOldFeature2 = html.includes("heroFeature2Title") || html.includes("客観的データ分析");
  console.log(`Old Bloated Card 1 present: ${hasOldFeature1} (Expected: false)`);
  console.log(`Old Bloated Card 2 present: ${hasOldFeature2} (Expected: false)`);
}

verifyLayoutOrder().catch(console.error);
