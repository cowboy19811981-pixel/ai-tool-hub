/**
 * AI Portal 自動更新スケジュール & スコープ定義マスタ
 * 情報の変動速度と取得コストに応じて、更新スコープと頻度を柔軟に制御します。
 */

export type UpdateScope = "news" | "models" | "pricing" | "static" | "all";

export interface ScopeConfig {
  scope: UpdateScope;
  label: string;
  description: string;
  recommendedIntervalHours: number; // 推奨更新間隔（時間）
  cronExpression: string; // GitHub Actions / cron 設定用
  targetColumns: string[]; // 更新対象となるDBフィールド
  enabled: boolean;
}

export const UPDATE_SCOPES_CONFIG: Record<UpdateScope, ScopeConfig> = {
  news: {
    scope: "news",
    label: "AI最新ニュース速報",
    description: "AI各社公式ブログ・リリースノート・主要メディアのRSSを取得し、Geminiで3行要約＆ランキング連動",
    recommendedIntervalHours: 12, // 12時間ごと
    cronExpression: "0 */12 * * *",
    targetColumns: ["Update", "Tool.rankScore", "Tool.overallRank", "Tool.categoryRank"],
    enabled: true,
  },
  models: {
    scope: "models",
    label: "AIモデル・バージョン情報",
    description: "各ツールの公式サイトトップ・CHANGELOGを巡回し、提供中モデルやエンジン（Claude Fable 5.1 / GPT-6 / Gemini 3.8 等）を更新",
    recommendedIntervalHours: 168, // 1週間ごと (24 * 7)
    cronExpression: "0 0 * * 1", // 毎週月曜午前0時UTC
    targetColumns: ["Tool.version", "Tool.versionFeatures", "Tool.specs", "Tool.lastUpdated"],
    enabled: true,
  },
  pricing: {
    scope: "pricing",
    label: "料金プラン・無料枠・商用規約",
    description: "各ツールの料金ページ（Pricing）を巡回し、月額費用・無料クレジット制限・商用利用規約の変更を同期",
    recommendedIntervalHours: 720, // 30日ごと (24 * 30)
    cronExpression: "0 0 1 * *", // 毎月1日午前0時UTC
    targetColumns: [
      "Tool.pricingType",
      "Tool.pricingMonthly",
      "Tool.freePlanDetails",
      "Tool.paidPlanDetails",
      "Tool.hasFreeTier",
      "Tool.commercialUse",
      "Tool.lastUpdated",
    ],
    enabled: true,
  },
  static: {
    scope: "static",
    label: "ツール基本マスタ・公式URL",
    description: "ツール名、カテゴリ分類、公式サイトURL、公式紹介文など滅多に変更されない基底情報",
    recommendedIntervalHours: 4320, // 半年ごと (180日)
    cronExpression: "0 0 1 1,7 *", // 年2回（1月1日 & 7月1日）
    targetColumns: ["Tool.name", "Tool.category", "Tool.categoryLabel", "Tool.officialUrl", "Tool.summary"],
    enabled: true,
  },
  all: {
    scope: "all",
    label: "全データ完全同期 (All-in-One)",
    description: "ニュース速報、モデル情報、料金プラン、静的マスタの全範囲を一括で再同期",
    recommendedIntervalHours: 0,
    cronExpression: "manual",
    targetColumns: ["*"],
    enabled: true,
  },
};
