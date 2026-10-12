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
