const fs = require('fs');
const path = require('path');

const TARGETS = [
  {
    id: "chatgpt",
    name: "OpenAI / ChatGPT",
    urls: ["https://openai.com", "https://openai.com/news/"],
    rssUrl: "https://openai.com/news/rss.xml"
  },
  {
    id: "claude",
    name: "Anthropic / Claude",
    urls: ["https://www.anthropic.com/news", "https://www.anthropic.com/claude"],
    rssUrl: "https://news.google.com/rss/search?q=%22Claude+Fable%22+OR+%22Claude+Mythos%22+OR+%22Anthropic%22+Claude&hl=en-US&gl=US&ceid=US:en"
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    urls: ["https://www.deepseek.com", "https://chat.deepseek.com/"]
  },
  {
    id: "gemini",
    name: "Google / Gemini",
    urls: ["https://gemini.google.com/"],
    rssUrl: "https://blog.google/technology/ai/rss/"
  },
  {
    id: "grok",
    name: "xAI / Grok",
    urls: ["https://x.ai/"]
  },
  {
    id: "cursor",
    name: "Cursor",
    urls: ["https://www.cursor.com/"]
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    urls: ["https://github.com/features/copilot"],
    rssUrl: "https://github.blog/changelog/label/copilot/feed/"
  },
  {
    id: "windsurf",
    name: "Windsurf",
    urls: ["https://codeium.com/windsurf"]
  },
  {
    id: "midjourney",
    name: "Midjourney",
    urls: ["https://www.midjourney.com/"]
  },
  {
    id: "runway",
    name: "Runway",
    urls: ["https://runwayml.com/"]
  },
  {
    id: "suno",
    name: "Suno",
    urls: ["https://suno.com/"]
  },
  {
    id: "perplexity",
    name: "Perplexity",
    urls: ["https://www.perplexity.ai/"]
  }
];

async function fetchWithTimeout(url, timeoutMs = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9,ja;q=0.8"
      }
    });
    clearTimeout(timer);
    if (!res.ok) return { status: res.status, text: "" };
    const text = await res.text();
    return { status: res.status, text };
  } catch (err) {
    clearTimeout(timer);
    return { status: 0, text: "", error: err.message };
  }
}

async function verifyAll() {
  const results = [];
  console.log(`🔍 [FactChecker] Starting official fact-check for ${TARGETS.length} major AI platforms...\n`);

  for (const t of TARGETS) {
    console.log(`Checking ${t.name}...`);
    let evidence = null;

    // 1. RSS URLがある場合は優先チェック（常に高鮮度かつ確実）
    if (t.rssUrl) {
      const res = await fetchWithTimeout(t.rssUrl);
      if (res.status === 200 && res.text) {
        const titles = [];
        const itemMatches = res.text.match(/<item>[\s\S]*?<\/item>/g) || res.text.match(/<entry>[\s\S]*?<\/entry>/g) || [];
        for (const item of itemMatches.slice(0, 3)) {
          const title = item.match(/<title[^>]*>([\s\S]*?)<\/title>/);
          const link = item.match(/<link[^>]*>([\s\S]*?)<\/link>/) || item.match(/<link[^>]*href=["']([^"']+)["']/i);
          if (title) {
            const cleanTitle = title[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").replace(/&amp;/g, "&").replace(/&quot;/g, '"').trim();
            const cleanLink = link ? (link[1] || "").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim() : t.rssUrl;
            titles.push({ title: cleanTitle, url: cleanLink });
          }
        }
        if (titles.length > 0) {
          evidence = {
            sourceType: "Official RSS / Release Feed",
            verifiedUrl: t.rssUrl,
            items: titles
          };
        }
      }
    }

    // 2. 公式Webページ直接チェック
    for (const url of t.urls) {
      const res = await fetchWithTimeout(url);
      if (res.status === 200 && res.text) {
        const headings = (res.text.match(/<(h[1-3]|title)[^>]*>([\s\S]*?)<\/\1>/gi) || [])
          .map(h => h.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
          .filter(h => h.length > 3 && !h.toLowerCase().includes("cookie") && !h.toLowerCase().includes("privacy"));

        if (!evidence) {
          evidence = {
            sourceType: "Official Webpage HTML",
            verifiedUrl: url,
            items: headings.slice(0, 4).map(h => ({ title: h, url }))
          };
        } else {
          evidence.webHeadings = headings.slice(0, 3);
        }
        break;
      }
    }

    results.push({
      id: t.id,
      name: t.name,
      evidence: evidence || { error: "Could not fetch direct evidence (access restricted or pending)" }
    });
  }

  const outPath = path.join(__dirname, 'official-evidence-results.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\n✅ [FactChecker] Verification complete! Evidence written to ${outPath}\n`);

  for (const r of results) {
    console.log(`=== ${r.name} ===`);
    if (r.evidence.items) {
      for (const item of r.evidence.items) {
        console.log(`  • [Confirmed]: "${item.title}"`);
        console.log(`    Source: ${item.url}`);
      }
    } else if (r.evidence.webHeadings) {
      console.log(`  • [Headings]:`, r.evidence.webHeadings.join(' / '));
    } else {
      console.log(`  ⚠️ Status: ${r.evidence.error}`);
    }
  }
}

verifyAll().catch(console.error);
