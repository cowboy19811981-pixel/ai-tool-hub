export interface ModelVersionDetail {
  name: string;
  shortName?: string;
  tier?: "free" | "paid" | "preview";
  speed: "超高速" | "高速" | "標準" | "じっくり推論" | "じっくり生成" | "可変・高速";
  intelligence: "最高峰" | "高度" | "標準";
  bestFor: string;
  planAvailability: string;
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

export interface ToolSeedItem {
  id: string;
  name: string;
  category: "general" | "writing" | "image" | "video" | "audio" | "code";
  categoryLabel: string;
  badge?: string;
  version: string;
  versionFeatures: {
    evolution: string;
    strengths: string[];
    weaknesses: string[];
    architecture: string;
    versionsList?: ModelVersionDetail[];
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
}
