export type Language = "ja" | "en";

export interface Translations {
  // Common
  siteTitle: string;
  siteSubtitle: string;
  searchPlaceholder: string;
  all: string;
  free: string;
  freemium: string;
  paid: string;
  usageBased: string;
  close: string;
  back: string;
  cancel: string;
  confirm: string;
  save: string;
  saved: string;
  compare: string;
  comparing: string;
  viewDetails: string;
  visitOfficial: string;
  visitSource: string;
  officialPrimarySource: string;
  smartSummary: string;
  version: string;
  pricing: string;
  freeTier: string;
  strengths: string;
  weaknesses: string;
  category: string;
  overallScore: string;
  copied: string;
  copyPrompt: string;

  // Header & Nav
  headerTagline: string;
  navCatalog: string;
  navNews: string;
  navCompare: string;
  navPrompts: string;
  myStack: string;
  startQuiz: string;
  freeConsult: string;

  // Hero Section
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroDesc: string;
  heroBtnDiagnose: string;
  heroBtnQuiz: string;
  heroBtnExplore: string;
  heroFeature1Title: string;
  heroFeature1Desc: string;
  heroFeature2Title: string;
  heroFeature2Desc: string;
  heroFeature3Badge: string;
  heroFeature3Rec: string;

  // News Section
  newsBadge: string;
  newsTitle: string;
  newsDesc: string;
  newsTabAll: string;
  newsTabNews: string;
  newsTabUpdates: string;
  newsSearchPlaceholder: string;
  newsHeadlinesTitle: string;
  newsSelectedOf: string;
  newsEmpty: string;
  newsPreviewTitle: string;
  newsSmartSummaryBadge: string;
  newsSourceButton: string;
  newsToToolButton: string;
  newsCopiedMessage: string;
  syncScopeNews: string;
  syncScopeModels: string;
  syncScopePricing: string;
  syncScopeAll: string;
  syncRunButton: string;
  syncingButton: string;

  // Catalog Section
  catalogBadge: string;
  catalogTitle: string;
  catalogDesc: string;
  catalogSearchPlaceholder: string;
  categoryAll: string;
  categoryGeneral: string;
  categoryWriting: string;
  categoryImage: string;
  categoryVideo: string;
  categoryAudio: string;
  categoryCode: string;
  sortRank: string;
  sortPopular: string;
  sortUpdated: string;
  filterAllPricing: string;
  filterFreeOnly: string;
  filterFreemiumOnly: string;
  filterPaidOnly: string;
  badgeGodTier: string;
  badgeStandard: string;
  badgeFeatured: string;
  badgeTrending: string;
  badgeKnowledge: string;
  badgeArtNo1: string;
  badgeHollywood: string;

  // Comparison Dock & Modal
  dockTitle: string;
  dockCompareNow: string;
  dockClear: string;
  modalCompareTitle: string;
  modalSpecItem: string;

  // Quiz Modal
  quizTitle: string;
  quizSubtitle: string;
  quizRestart: string;
  quizResultTitle: string;

  // Free Input Modal
  freeInputTitle: string;
  freeInputDesc: string;
  freeInputPlaceholder: string;
  freeInputSubmit: string;
  freeInputResultTitle: string;

  // Prompt Gallery
  promptGalleryBadge: string;
  promptGalleryTitle: string;
  promptGalleryDesc: string;
  promptGalleryAll: string;
  promptGalleryRecommended: string;
  promptGalleryCopiedCount: string;
  promptGalleryCopySuccess: string;
  promptGalleryCopyBtn: string;

  // Footer
  footerDesc: string;
  footerRights: string;
}

export const translations: Record<Language, Translations> = {
  ja: {
    // Common
    siteTitle: "AI COMPASS",
    siteSubtitle: "次世代AI総合羅針盤",
    searchPlaceholder: "AIツールや用途を検索...",
    all: "すべて",
    free: "完全無料",
    freemium: "フリーミアム",
    paid: "有料",
    usageBased: "従量課金",
    close: "閉じる",
    back: "戻る",
    cancel: "キャンセル",
    confirm: "確定",
    save: "保存",
    saved: "保存済み",
    compare: "比較",
    comparing: "比較中",
    viewDetails: "詳細スペックを見る",
    visitOfficial: "公式サイトを見る",
    visitSource: "一次情報・元ソースを読む",
    officialPrimarySource: "公式一次ソース検証済み",
    smartSummary: "元ソースの3行スマート要約",
    version: "バージョン",
    pricing: "料金体系",
    freeTier: "無料枠",
    strengths: "主な強み",
    weaknesses: "注意点・制限",
    category: "カテゴリ",
    overallScore: "総合スコア",
    copied: "コピーしました！",
    copyPrompt: "プロンプトをコピー",

    // Header & Nav
    headerTagline: "全60種AIツールの最新スペック比較 ＆ リアルタイム速報",
    navCatalog: "ツール一覧",
    navNews: "公式速報",
    navCompare: "性能比較",
    navPrompts: "実践プロンプト",
    myStack: "保存したツール",
    startQuiz: "30秒適性診断",
    freeConsult: "AI自由相談",

    // Hero Section
    heroBadge: "主要6分野・全60種AIツール 完全網羅データベース",
    heroTitle1: "迷えるすべての人のための、",
    heroTitle2: "次世代AI総合羅針盤",
    heroDesc: "「結局どれを使えばいい？」「有料版は何が違う？」最新バージョン特性、無料vs有料の決定打、分野別ランキング、実践プロンプトまでを徹底網羅。",
    heroBtnDiagnose: "やりたいことAI自由診断",
    heroBtnQuiz: "30秒適性診断（5問）",
    heroBtnExplore: "全60種AI一覧を見る",
    heroFeature1Title: "全60種・バージョン別特徴比較",
    heroFeature1Desc: "「GPT-6 / o3」「Claude Fable 5.1」「Gemini 3.8」「FLUX.1.1」「Suno v4」など、各ツールの現行最新バージョンとモデル別の使い分けを徹底解説。",
    heroFeature2Title: "12H自動更新の動的ランキング",
    heroFeature2Desc: "公式リリースノートを定期取得し、直近で進化したツールが上位に浮上するリアルタイム順位システム。",
    heroFeature3Badge: "本日の実践プロンプト",
    heroFeature3Rec: "推奨AI",

    // News Section
    newsBadge: "OFFICIAL PRIMARY SOURCES ＆ REAL-TIME TIMELINE",
    newsTitle: "リアルタイムAI公式速報",
    newsDesc: "AI各社公式発表・開発元一次ソースからリアルタイム収集。タイトルを選んで即座に元ソース要約をチェックできます。",
    newsTabAll: "全速報",
    newsTabNews: "AI業界速報",
    newsTabUpdates: "ツール機能更新",
    newsSearchPlaceholder: "ニュース内を検索...",
    newsHeadlinesTitle: "見出し一覧（クリックで詳細プレビュー）",
    newsSelectedOf: "件目を選択中",
    newsEmpty: "該当するニュースが見つかりませんでした。",
    newsPreviewTitle: "詳細プレビュー",
    newsSmartSummaryBadge: "一次情報の3行スマート要約",
    newsSourceButton: "公式発表・元ソースを読む ↗",
    newsToToolButton: "ツール詳細へ",
    newsCopiedMessage: "記事URLをクリップボードにコピーしました！",
    syncScopeNews: "📰 ニュース速報 (12H間隔)",
    syncScopeModels: "🤖 モデル情報 (週1間隔)",
    syncScopePricing: "💰 料金・プラン (月1間隔)",
    syncScopeAll: "🌐 全範囲一括同期",
    syncRunButton: "即時同期を実行",
    syncingButton: "同期中...",

    // Catalog Section
    catalogBadge: "AI TOOL DATABASE ＆ BENCHMARKS",
    catalogTitle: "全60種 AIツール完全比較カタログ",
    catalogDesc: "総合スコア、現行バージョン、料金プラン、無料枠の制限を網羅。気になるツールを最大3件選んで徹底横並び比較できます。",
    catalogSearchPlaceholder: "ツール名・機能・モデルで絞り込み...",
    categoryAll: "すべて (60)",
    categoryGeneral: "総合・LLM",
    categoryWriting: "文書・リサーチ",
    categoryImage: "画像生成",
    categoryVideo: "映像・動画",
    categoryAudio: "音楽・音声",
    categoryCode: "コード・開発",
    sortRank: "総合スコア順",
    sortPopular: "人気・登録数順",
    sortUpdated: "更新日時順",
    filterAllPricing: "料金：すべて",
    filterFreeOnly: "完全無料のみ",
    filterFreemiumOnly: "無料枠あり（フリーミアム）",
    filterPaidOnly: "有料のみ",
    badgeGodTier: "神ツール",
    badgeStandard: "定番",
    badgeFeatured: "注目",
    badgeTrending: "急上昇",
    badgeKnowledge: "ナレッジ統合",
    badgeArtNo1: "芸術・画質No.1",
    badgeHollywood: "ハリウッド映画標準",

    // Comparison Dock & Modal
    dockTitle: "比較トレイ",
    dockCompareNow: "横並び比較する",
    dockClear: "クリア",
    modalCompareTitle: "AIツール性能 横並びスペック徹底比較",
    modalSpecItem: "スペック項目",

    // Quiz Modal
    quizTitle: "30秒でわかる！あなたに最適なAI診断",
    quizSubtitle: "5つの質問に答えるだけで、あなたの用途と予算に最もフィットするAIを即座に提案します。",
    quizRestart: "もう一度診断する",
    quizResultTitle: "あなたにおすすめのAIツール",

    // Free Input Modal
    freeInputTitle: "やりたいことAI自由相談",
    freeInputDesc: "「こういう仕事で悩んでいる」「この作業を自動化したい」など、自由に打ち込んでください。最適なツールと使い方を提案します。",
    freeInputPlaceholder: "例: 毎週の営業資料作りを時短したい。図解やイラストも自動で作れるツールはある？",
    freeInputSubmit: "AIにおすすめツールを診断してもらう",
    freeInputResultTitle: "診断結果",

    // Prompt Gallery
    promptGalleryBadge: "PROMPT MASTER DIRECTORY",
    promptGalleryTitle: "実践プロンプト図鑑",
    promptGalleryDesc: "各AIツールの性能を120%引き出す、ワンクリックコピー対応の厳選プロンプト集。",
    promptGalleryAll: "すべて",
    promptGalleryRecommended: "推奨:",
    promptGalleryCopiedCount: "回コピー済み",
    promptGalleryCopySuccess: "コピー完了!",
    promptGalleryCopyBtn: "プロンプトをコピー",

    // Footer
    footerDesc: "AI COMPASSは、全60種類の主要AIツールの一次情報・スペック・料金プランを中立的に集約・比較する総合ポータルです。",
    footerRights: "All Rights Reserved. Verified by Primary Sources.",
  },

  en: {
    // Common
    siteTitle: "AI COMPASS",
    siteSubtitle: "Next-Gen AI Radar & Directory",
    searchPlaceholder: "Search tools, models, workflows...",
    all: "All",
    free: "100% Free",
    freemium: "Freemium",
    paid: "Paid Only",
    usageBased: "Pay-as-you-go",
    close: "Close",
    back: "Back",
    cancel: "Cancel",
    confirm: "Confirm",
    save: "Save",
    saved: "Saved",
    compare: "Compare",
    comparing: "In Compare",
    viewDetails: "View Full Specs",
    visitOfficial: "Visit Official Site",
    visitSource: "Read Primary Source",
    officialPrimarySource: "Verified Primary Source",
    smartSummary: "3-Line Smart Summary of Source",
    version: "Active Version",
    pricing: "Pricing Model",
    freeTier: "Free Tier",
    strengths: "Key Strengths",
    weaknesses: "Limitations & Caveats",
    category: "Category",
    overallScore: "Score",
    copied: "Copied to clipboard!",
    copyPrompt: "Copy Prompt",

    // Header & Nav
    headerTagline: "Specs, Live Benchmarks & Primary News for 60 Leading AI Tools",
    navCatalog: "AI Catalog",
    navNews: "Live Feed",
    navCompare: "Compare",
    navPrompts: "Prompt Vault",
    myStack: "Saved Stack",
    startQuiz: "30s AI Quiz",
    freeConsult: "Free AI Advisor",

    // Hero Section
    heroBadge: "COMPREHENSIVE DIRECTORY OF 60 LEADING AI TOOLS ACROSS 6 CATEGORIES",
    heroTitle1: "Navigate the AI Frontier With",
    heroTitle2: "The Ultimate Next-Gen Compass",
    heroDesc: "Confused about which AI to choose and whether paid tiers are worth it? Get verified specs, version breakdowns, live rankings, and proven prompts in one unified hub.",
    heroBtnDiagnose: "Describe Your Goal to AI",
    heroBtnQuiz: "Take 30s Quiz (5 Questions)",
    heroBtnExplore: "Browse All 60 AI Tools",
    heroFeature1Title: "Version & Engine Breakdown",
    heroFeature1Desc: "Full coverage of modern models like GPT-6 / o3, Claude Fable 5.1, Gemini 3.8, FLUX.1.1, and Suno v4 with recommended workflows.",
    heroFeature2Title: "12-Hour Automated Dynamic Rankings",
    heroFeature2Desc: "Rankings dynamically recalculate as vendors push new updates, giving top spot to rapidly evolving tools.",
    heroFeature3Badge: "PROVEN PROMPT OF THE DAY",
    heroFeature3Rec: "Best AI",

    // News Section
    newsBadge: "OFFICIAL PRIMARY SOURCES ＆ REAL-TIME TIMELINE",
    newsTitle: "Real-Time AI Primary Feed",
    newsDesc: "Directly fetched from AI labs' official announcements & blogs. Select any headline for an instant 3-line smart summary.",
    newsTabAll: "All Feeds",
    newsTabNews: "Industry Releases",
    newsTabUpdates: "Tool Changelogs",
    newsSearchPlaceholder: "Search headlines & summaries...",
    newsHeadlinesTitle: "Headlines (Click to Preview)",
    newsSelectedOf: "selected",
    newsEmpty: "No updates found matching your criteria.",
    newsPreviewTitle: "Detail Preview",
    newsSmartSummaryBadge: "3-Line Smart Summary of Source",
    newsSourceButton: "Read Original Announcement ↗",
    newsToToolButton: "Go to Tool Specs",
    newsCopiedMessage: "Source link copied to clipboard!",
    syncScopeNews: "📰 Live News (12H Interval)",
    syncScopeModels: "🤖 Model Specs (Weekly)",
    syncScopePricing: "💰 Pricing Plans (Monthly)",
    syncScopeAll: "🌐 Full Sync (All Scopes)",
    syncRunButton: "Trigger Sync Now",
    syncingButton: "Syncing...",

    // Catalog Section
    catalogBadge: "AI TOOL DATABASE ＆ BENCHMARKS",
    catalogTitle: "Complete 60 AI Tools Comparison Directory",
    catalogDesc: "Browse performance scores, active versions, monthly fees, and free tier limits. Select up to 3 tools for side-by-side spec comparison.",
    catalogSearchPlaceholder: "Filter by tool name, model, feature...",
    categoryAll: "All (60)",
    categoryGeneral: "General & LLM",
    categoryWriting: "Writing & Research",
    categoryImage: "Image Generation",
    categoryVideo: "Video & Motion",
    categoryAudio: "Audio & Music",
    categoryCode: "Coding & Dev",
    sortRank: "Highest Overall Score",
    sortPopular: "Most Popular",
    sortUpdated: "Recently Updated",
    filterAllPricing: "Pricing: All",
    filterFreeOnly: "100% Free Only",
    filterFreemiumOnly: "Freemium Only",
    filterPaidOnly: "Paid Only",
    badgeGodTier: "God Tier",
    badgeStandard: "Industry Standard",
    badgeFeatured: "Featured",
    badgeTrending: "Trending",
    badgeKnowledge: "Knowledge Hub",
    badgeArtNo1: "Best-in-Class Art",
    badgeHollywood: "Hollywood Film Standard",

    // Comparison Dock & Modal
    dockTitle: "Comparison Dock",
    dockCompareNow: "Compare Side-by-Side",
    dockClear: "Clear All",
    modalCompareTitle: "Side-by-Side AI Specs & Benchmarks Comparison",
    modalSpecItem: "Specification Matrix",

    // Quiz Modal
    quizTitle: "30-Second AI Matchmaker",
    quizSubtitle: "Answer 5 quick questions to find the ideal AI tool matching your exact use case and budget.",
    quizRestart: "Retake Quiz",
    quizResultTitle: "Your Recommended AI Tools",

    // Free Input Modal
    freeInputTitle: "AI Goal Advisor",
    freeInputDesc: "Tell us what you want to achieve or automate. We will analyze your requirements and recommend the optimal AI stack.",
    freeInputPlaceholder: "e.g., I want to automate my weekly client presentations with diagrams and high-res imagery.",
    freeInputSubmit: "Find Best AI for My Workflow",
    freeInputResultTitle: "Recommendations",

    // Prompt Gallery
    promptGalleryBadge: "PROMPT MASTER DIRECTORY",
    promptGalleryTitle: "Practical Prompt Vault",
    promptGalleryDesc: "Curated prompt recipes engineered to unleash 120% of each AI tool's potential with one-click copy.",
    promptGalleryAll: "All",
    promptGalleryRecommended: "Recommended:",
    promptGalleryCopiedCount: "times copied",
    promptGalleryCopySuccess: "Copied!",
    promptGalleryCopyBtn: "Copy Prompt",

    // Footer
    footerDesc: "AI COMPASS is an independent, neutral directory indexing verified primary data, pricing structures, and specifications for 60 world-class AI tools.",
    footerRights: "All Rights Reserved. Verified by Official Primary Sources.",
  },
};

/**
 * カテゴリIDから日英の表示ラベルを取得するヘルパー
 */
export function getCategoryLabel(category: string, lang: Language): string {
  const map: Record<string, { ja: string; en: string }> = {
    general: { ja: "総合・LLM", en: "General & LLM" },
    writing: { ja: "文書・リサーチ", en: "Writing & Research" },
    image: { ja: "画像生成", en: "Image Generation" },
    video: { ja: "映像・動画", en: "Video & Motion" },
    audio: { ja: "音楽・音声", en: "Audio & Music" },
    code: { ja: "コード・開発", en: "Coding & Dev" },
  };
  return map[category]?.[lang] || category;
}

/**
 * 料金タイプの日英ラベル
 */
export function getPricingTypeLabel(pricingType: string, lang: Language): string {
  if (lang === "ja") return pricingType;
  if (pricingType.includes("無料") && !pricingType.includes("フリーミアム")) return "Free";
  if (pricingType.includes("フリーミアム")) return "Freemium";
  if (pricingType.includes("有料")) return "Paid";
  if (pricingType.includes("買い切り")) return "One-time Purchase";
  if (pricingType.includes("従量課金")) return "Pay-as-you-go";
  return pricingType;
}

/**
 * バッジの日英ラベル
 */
export function getBadgeLabel(badge: string | null | undefined, lang: Language): string {
  if (!badge) return "";
  if (lang === "ja") return badge;
  const badgeMap: Record<string, string> = {
    "神ツール": "God Tier",
    "定番": "Industry Standard",
    "注目": "Featured",
    "急上昇": "Trending",
    "ナレッジ統合": "Knowledge Hub",
    "芸術・画質No.1": "Art Quality #1",
    "完全無料・神ツール": "100% Free · Top Tier",
    "ハリウッド映画標準": "Hollywood Grade",
    "現代の業界新標準": "New Industry Standard",
    "世界最高峰AI音声・声真似": "World Class Voice AI",
    "音楽生成No.1": "Music Generation #1",
    "音質・音楽性No.1": "Acoustic Quality #1",
    "プロ用4K/8K高画質化・補間": "Pro 4K/8K Upscaler",
    "人物の動き＆無料枠◎": "Realistic Motion & Free Tier",
    "世界最高峰知能・Fable 5.1": "World Leading AI · Fable 5.1",
    "GPT-6.1 Sol & Daybreak": "GPT-6.1 Sol & Daybreak",
    "V4.1-Flash進化・神コスパ": "V4.1-Flash Native · Unbeatable Value",
    "xAIフラグシップ・Grok 4.7": "xAI Flagship · Grok 4.7",
    "物理世界シミュレータ": "World Physics Simulator",
    "英語文字描写の先駆者": "Typography Pioneer",
  };
  return badgeMap[badge] || badge;
}

/**
 * プロンプトカテゴリの日英ラベル
 */
export function getPromptCategoryLabel(category: string, lang: Language): string {
  if (category === "all") return lang === "en" ? "All" : "すべて";
  const map: Record<string, string> = {
    "ビジネス・企画": "Business & Strategy",
    "コーディング・設計": "Coding & Architecture",
    "画像生成": "Image Generation",
    "音楽生成": "Music Generation",
    "動画生成": "Video Generation",
    "開発・エディタ": "Dev & Editors",
  };
  return lang === "en" ? (map[category] || category) : category;
}

