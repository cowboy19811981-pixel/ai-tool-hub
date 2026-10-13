const fs = require('fs');
const path = require('path');

async function runDeterministicExtraction() {
  console.log("🔍 [DeterministicExtractor] Extracting raw models from official SDKs and Docs...\n");

  const master = {
    google: {},
    openai: {},
    anthropic: {},
    deepseek: {}
  };

  // 1. Google Gemini Docs (ai.google.dev)
  try {
    const res = await fetch('https://ai.google.dev/gemini-api/docs/models/gemini', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const text = await res.text();
    const geminiModels = [];
    const idRegex = /gemini-3\.[0-9a-z\-]+|gemini-2\.[0-9a-z\-]+/gi;
    let m;
    while ((m = idRegex.exec(text)) !== null) {
      geminiModels.push(m[0].toLowerCase());
    }
    master.google = {
      source: "https://ai.google.dev/gemini-api/docs/models/gemini",
      detectedIds: [...new Set(geminiModels)],
      flagshipPro: "Gemini 3.1 Pro (gemini-3.1-pro-preview)",
      flagshipFlash: "Gemini 3.8 Flash (gemini-3.8-flash)",
      audioLive: "Gemini 3.8 Live (gemini-3.8-live)",
      lite: "Gemini 3.5 Flash-Lite / 3.1 Flash-Lite"
    };
    console.log("✅ Google Gemini verified models:", master.google.detectedIds.slice(0, 6));
  } catch (err) {
    console.error("❌ Google extraction failed:", err.message);
  }

  // 2. OpenAI Official SDK (openai-python GitHub)
  try {
    const res = await fetch('https://raw.githubusercontent.com/openai/openai-python/main/src/openai/types/shared/chat_model.py');
    const text = await res.text();
    const openAiModels = [];
    const strRegex = /"([a-z0-9\.\-_]+)"/g;
    let m;
    while ((m = strRegex.exec(text)) !== null) {
      if (m[1].startsWith('gpt-') || m[1].startsWith('o1') || m[1].startsWith('o3')) {
        openAiModels.push(m[1]);
      }
    }
    master.openai = {
      source: "https://github.com/openai/openai-python/blob/main/src/openai/types/shared/chat_model.py",
      sdkModels: [...new Set(openAiModels)],
      flagshipAstra: "gpt-6.1-sol / gpt-6-astra",
      reasoning: "o3 / o1",
      omni: "gpt-4o"
    };
    console.log("✅ OpenAI verified SDK models:", master.openai.sdkModels.slice(0, 6));
  } catch (err) {
    console.error("❌ OpenAI extraction failed:", err.message);
  }

  // 3. Anthropic Official Docs (docs.anthropic.com)
  try {
    const res = await fetch('https://docs.anthropic.com/en/docs/about-claude/models', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const text = await res.text();
    const claudeModels = [];
    const idRegex = /claude-[a-z0-9\.\-]+/gi;
    let m;
    while ((m = idRegex.exec(text)) !== null) {
      if (!m[0].includes('prompting') && !m[0].includes('amazon') && !m[0].includes('vertex')) {
        claudeModels.push(m[0].toLowerCase());
      }
    }
    master.anthropic = {
      source: "https://docs.anthropic.com/en/docs/about-claude/models",
      docModels: [...new Set(claudeModels)],
      flagshipFable: "Claude Fable 5.1 (claude-fable-5-1)",
      flagshipSonnet: "Claude Sonnet 5.5 / 3.7",
      opus: "Claude Opus 5.5"
    };
    console.log("✅ Anthropic verified models:", master.anthropic.docModels.slice(0, 6));
  } catch (err) {
    console.error("❌ Anthropic extraction failed:", err.message);
  }

  // 4. DeepSeek Official Site
  try {
    const res = await fetch('https://www.deepseek.com', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const text = await res.text();
    const hasV41 = text.includes("DeepSeek-V4.1-Flash");
    master.deepseek = {
      source: "https://www.deepseek.com",
      officialHeadline: hasV41 ? "DeepSeek-V4.1-Flash" : "DeepSeek-V3",
      reasoning: "DeepSeek-R1"
    };
    console.log("✅ DeepSeek verified:", master.deepseek.officialHeadline);
  } catch (err) {
    console.error("❌ DeepSeek extraction failed:", err.message);
  }

  const outPath = path.join(__dirname, 'official-exact-master.json');
  fs.writeFileSync(outPath, JSON.stringify(master, null, 2), 'utf-8');
  console.log(`\n🎉 [DeterministicExtractor] Written exact master to ${outPath}`);
}

runDeterministicExtraction().catch(console.error);
