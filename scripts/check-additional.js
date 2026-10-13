async function checkAdditional() {
  const queries = [
    { name: "xAI / Grok", query: "xAI+Grok+official+release+OR+%22Grok+3%22+OR+%22Grok+3.5%22" },
    { name: "Midjourney", query: "Midjourney+official+announcement+OR+%22v7%22+OR+%22v6.1%22" }
  ];

  for (const q of queries) {
    const url = `https://news.google.com/rss/search?q=${q.query}&hl=en-US&gl=US&ceid=US:en`;
    try {
      const res = await fetch(url);
      const text = await res.text();
      const items = (text.match(/<item>[\s\S]*?<\/item>/g) || []).slice(0, 3);
      console.log(`=== ${q.name} ===`);
      for (const item of items) {
        const title = (item.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [])[1];
        const link = (item.match(/<link[^>]*>([\s\S]*?)<\/link>/) || [])[1];
        if (title) {
          console.log(`  • "${title.replace(/&amp;/g, '&')}"`);
          console.log(`    Link: ${link}`);
        }
      }
    } catch(e) {
      console.log(`Error checking ${q.name}:`, e.message);
    }
  }
}

checkAdditional();
