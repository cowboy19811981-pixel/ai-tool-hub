export interface ModelVersionDetail {
  name: string;
  shortName?: string;
  tier?: "free" | "paid" | "preview";
  speed: string;
  intelligence: "最高峰" | "高度" | "標準";
  bestFor: string;
  planAvailability: string; // e.g. "無料・有料両方", "Plus/Pro限定", "APIのみ"
  description: string;
}

export interface PlanTierDetail {
  id: string; // "free" | "plus" | "pro" | "max" | "team" | "enterprise" | "api"
  name: string;
  priceMonthly: string;
  priceYearly?: string;
  targetAudience: string;
  isPopular?: boolean;
  isFree?: boolean;
  availableModels: string[];
  contextWindow: string;
  messageLimits: string;
  unlockedFeatures: string[];
  limitations?: string[];
  officialUrl?: string;
}

export interface ToolItem {
  id: string;
  name: string;
  category: "general" | "writing" | "image" | "video" | "audio" | "code";
  categoryLabel: string;
  badge?: string | null;
  version: string;
  versionFeatures: {
    evolution: string;
    strengths: string[];
    weaknesses: string[];
    architecture: string;
    versionsList?: ModelVersionDetail[]; // 各モデル・バージョンごとの詳細
  };
  estimatedUsers: string;
  siteRegisteredCount: number;
  votesCount: number;
  rankScore: number;
  categoryRank: number;
  overallRank: number;
  pricingType: string;
  pricingMonthly: string;
  freePlanDetails: {
    limits: string;
    allowedFeatures: string[];
  };
  paidPlanDetails: {
    planName: string;
    price: string;
    unlockedFeatures: string[];
    recommendedFor: string;
  };
  plansList?: PlanTierDetail[];
  paidWorthRating: number;
  hasFreeTier: boolean;
  supportsJapanese: boolean;
  commercialUse: boolean;
  hasApi: boolean;
  hasApp: boolean;
  summary: string;
  description: string;
  pros: string[];
  cons: string[];
  specs: {
    contextWindow: string;
    multimodal: string;
    company: string;
    releaseYear: string;
  };
  officialUrl: string;
  affiliateUrl?: string | null;
  lastUpdated: string;
}

export interface UpdateItem {
  id: string;
  toolId?: string | null;
  toolName?: string;
  title: string;
  summary3Lines: string;
  sourceUrl?: string | null;
  sourceName?: string | null;
  category?: string; // "news" (AI最新ニュース) or "update" (機能更新)
  publishedAt: string;
}

export interface PromptItem {
  id: string;
  toolId: string;
  toolName?: string;
  category: string;
  title: string;
  promptText: string;
  bestPracticeTips?: string | null;
  copiedCount: number;
}

export interface GalleryItemType {
  id: string;
  theme: string;
  category: string;
  inputPrompt: string;
  comparisons: {
    toolName: string;
    outputSummary: string;
    visualStyle: string;
    prosVsCons: string;
    sampleResultUrl?: string;
  }[];
}
