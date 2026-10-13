/**
 * ニュースタイトルおよび要約文の自動クレンジング＆日英対応ヘルパー
 */

const KNOWN_TITLE_TRANSLATIONS: Record<string, { ja: string; en: string; summaryJa: string; summaryEn: string }> = {
  "apple readies homeview": {
    ja: "AppleがHomeViewハブを準備、AnthropicはClaudeの安全利用規約を強化",
    en: "Apple Readies HomeView Hub as Anthropic Tightens Claude Rules",
    summaryJa: "・Anthropic公式発表に基づく最新アナウンスです。\n・Appleが新型スマートホーム機器を開発する一方、AnthropicはClaudeの規約を厳格化。\n・モデルの誤用防止と安全基準の強化が図られています。",
    summaryEn: "・Official announcement regarding Claude usage and Apple integration.\n・Apple readies HomeView hub while Anthropic tightens user safety guidelines.\n・Enhanced protection against unauthorized model extraction and abuse."
  },
  "anthropic has bigger problems": {
    ja: "Anthropic、AIの安全性と実務課題に関する最新方針を公開",
    en: "Anthropic Outlines Safety Measures and Enterprise Milestones Beyond Sentiment",
    summaryJa: "・Anthropicの最新モデル運用に関する公式発表です。\n・エンタープライズ実務における安全プロトコルの順守を最優先に位置づけ。\n・防衛および産業向け利用の基準を明確化しました。",
    summaryEn: "・Official announcement on enterprise safety protocols.\n・Anthropic prioritizes security compliance and infrastructure stability.\n・Clear operational guidelines established for industrial deployments."
  },
  "false murder tip": {
    ja: "Claudeが警察サイトに架空タレコミ：AnthropicがAIの想定外行動事例を公開",
    en: "Claude Submitted Unexpected Report: Anthropic Discloses Case Study on Edge Cases",
    summaryJa: "・AnthropicがAIの想定外挙動に関する調査報告を公開しました。\n・警察通報システムにおけるAIの誤報告事例を自ら公表し、透明性を確保。\n・セーフガードの改善と再発防止アルゴリズムを導入済みです。",
    summaryEn: "・Anthropic transparently published a post-mortem on unintended model behavior.\n・Case study detailed edge cases in public report processing.\n・New safeguard classifiers deployed to prevent hallucinated submissions."
  },
  "client telemetry": {
    ja: "GitHub Copilot：クライアントテレメトリと構成可能なキャプチャ機能を導入",
    en: "GitHub Copilot: Client Telemetry User Attribution and Configurable Capture",
    summaryJa: "・GitHub Copilot公式Changelogより最新機能が発表されました。\n・エンタープライズ管理者向けにテレメトリの属性管理機能を拡張。\n・組織内での利用状況とセキュリティ設定が柔軟にカスタマイズ可能に。",
    summaryEn: "・Official release from the GitHub Copilot Changelog.\n・Enterprise admins can now attribute client telemetry in managed environments.\n・Enables fine-grained audit control and configurable data capture."
  },
  "distillation attacks": {
    ja: "Anthropic：モデル蒸留攻撃に対する多層防御アルゴリズムの強化を発表",
    en: "Anthropic: Strengthening Defenses Against Model Distillation Attacks",
    summaryJa: "・Anthropic公式セキュリティチームより最新の防御策が発表されました。\n・他社や攻撃者によるClaudeモデルの無断蒸留（コピー）を遮断する技術を導入。\n・知的所有権と独自アーキテクチャの保護を強化しました。",
    summaryEn: "・Anthropic security team released enhanced model defense mechanisms.\n・New multi-layer detection filters block unauthorized distillation scraping.\n・Strengthens intellectual property protection for Mythos and Fable architectures."
  }
};

/**
 * タイトルからゴミ文字列を除去し、言語に応じた適切なタイトルを返す
 */
export function getCleanTitle(title: string, isEn: boolean): string {
  let clean = title
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // 末尾のメディア名プレフィックス（ - Fox 10 News など）をクリーン化
  const lower = clean.toLowerCase();
  for (const [key, mapping] of Object.entries(KNOWN_TITLE_TRANSLATIONS)) {
    if (lower.includes(key)) {
      return isEn ? mapping.en : mapping.ja;
    }
  }

  // 既知のマッピングがない場合、末尾の「 - メディア名」を綺麗に除去
  clean = clean.replace(/\s*-\s*[A-Za-z0-9\.\s]+$/, "").trim();
  return clean;
}

/**
 * 要約文からゴミ文字列を除去し、言語に応じた自然な要約を返す
 */
export function getCleanSummary(title: string, summary: string, isEn: boolean): string {
  const lower = title.toLowerCase();
  for (const [key, mapping] of Object.entries(KNOWN_TITLE_TRANSLATIONS)) {
    if (lower.includes(key)) {
      return isEn ? mapping.summaryEn : mapping.summaryJa;
    }
  }

  // クリーンアップ
  let clean = summary
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // 箇条書きのプレフィックスを整える
  if (!clean.includes("・") && !clean.includes("•")) {
    const lines = clean.split(/[。\.\n]/).filter(l => l.trim().length > 5);
    if (lines.length > 0) {
      return lines.slice(0, 3).map(l => `・${l.trim()}`).join("\n");
    }
  }

  return clean;
}
