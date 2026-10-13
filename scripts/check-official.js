async function check() {
  const sites = [
    { name: 'OpenAI News', url: 'https://openai.com/news/' },
    { name: 'Anthropic News', url: 'https://www.anthropic.com/news' },
    { name: 'DeepSeek', url: 'https://www.deepseek.com' },
    { name: 'Cursor', url: 'https://www.cursor.com' }
  ];

  for (const s of sites) {
    try {
      const res = await fetch(s.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      const html = await res.text();
      console.log(`\n================== ${s.name} (Status: ${res.status}) ==================`);
      // 見出しやリンクテキストを抽出
      const matches = html.match(/<(h[1-4]|a)[^>]*>([\s\S]*?)<\/\1>/gi) || [];
      const clean = matches
        .map(m => m.replace(/<[^>]+>/g, '').trim())
        .filter(t => t.length > 5 && !t.includes('Cookie') && !t.includes('Privacy') && !t.includes('Terms'))
        .slice(0, 8);
      console.log(clean.join('\n- '));
    } catch (e) {
      console.log(`Error checking ${s.name}: ${e.message}`);
    }
  }
}

check();
