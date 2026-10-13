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

async function verify() {
  console.log("=== VERIFYING SSR HTML OUTPUT (http://localhost:3000) ===");
  const html = await fetchHtml("http://localhost:3000");

  console.log(`Page HTML size: ${html.length} bytes`);

  const checks = [
    { name: "Workspace View / 全画面詳細", regex: /Workspace View|全画面詳細/ },
    { name: "Gemini Advanced / Google One", regex: /Gemini Advanced|Google One/ },
    { name: "全プラン詳細仕様 比較マトリックス", regex: /全プラン詳細仕様|比較マトリックス/ },
    { name: "ChatGPT Plus / Pro", regex: /ChatGPT Plus|ChatGPT Pro/ },
    { name: "Cursor Pro / Hobby", regex: /Cursor Pro|Cursor Hobby/ },
    { name: "Midjourney Plans (Basic/Standard/Pro)", regex: /Midjourney/ },
    { name: "Official Grounding / 公式一次情報", regex: /一次情報|Grounding|エビデンス/ },
  ];

  for (const check of checks) {
    const passed = check.regex.test(html);
    console.log(`[${passed ? "PASS" : "FAIL"}] ${check.name}`);
  }

  console.log("\n=== SSR HTML VERIFICATION COMPLETE ===");
}

verify().catch(console.error);
