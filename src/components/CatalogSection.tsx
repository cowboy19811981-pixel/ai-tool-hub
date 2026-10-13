"use client";

import React, { useState, useMemo } from "react";
import { 
  ExternalLink, 
  Check, 
  CheckCircle, 
  XCircle, 
  Star, 
  ThumbsUp, 
  Bookmark, 
  Plus, 
  Layers, 
  Filter, 
  ChevronRight, 
  Users, 
  Clock, 
  Zap, 
  Info, 
  Cpu, 
  Globe, 
  RefreshCw, 
  LayoutGrid, 
  Table,
  BadgeCheck,
  Sparkles
} from "lucide-react";
import { ToolItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { getCategoryLabel, getPricingTypeLabel, getBadgeLabel } from "@/lib/i18n";
import { AIDetailDashboard } from "./AIDetailDashboard";

interface CatalogSectionProps {
  tools: ToolItem[];
  savedToolIds: string[];
  compareToolIds: string[];
  onToggleSave: (toolId: string) => void;
  onToggleCompare: (toolId: string) => void;
  onVote: (toolId: string) => void;
  onSelectTool: (tool: ToolItem) => void;
  searchQuery: string;
  onSyncTools?: (tools: ToolItem[]) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  tools,
  savedToolIds,
  compareToolIds,
  onToggleSave,
  onToggleCompare,
  onVote,
  onSelectTool,
  searchQuery,
  onSyncTools,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const [selectedFocusToolId, setSelectedFocusToolId] = useState<string>("gemini");
  const [displayMode, setDisplayMode] = useState<"focus" | "grid">("focus");
  const [sortBy, setSortBy] = useState<"rank" | "users" | "updated" | "worth">("rank");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [isSyncingOfficial, setIsSyncingOfficial] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  const { t, isEn, lang } = useLanguage();

  const handleSyncOfficial = async () => {
    setIsSyncingOfficial(true);
    setSyncMessage(null);
    try {
      const res = await fetch("/api/tools/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const data = await res.json();
      if (res.ok && data.tools) {
        if (onSyncTools) {
          onSyncTools(data.tools);
        }
        setSyncMessage(data.message || (isEn ? "Live official HP specs synced successfully!" : "公式HPからの最新データ同期が完了しました！"));
      } else {
        setSyncMessage(data.message || (isEn ? "Sync complete." : "同期が完了しました。"));
      }
    } catch (e) {
      setSyncMessage(isEn ? "Network error during sync." : "公式HPとの通信中にエラーが発生しました。");
    } finally {
      setIsSyncingOfficial(false);
      setTimeout(() => setSyncMessage(null), 5000);
    }
  };
  
  // フィルター状態
  const [filterFreeTier, setFilterFreeTier] = useState(false);
  const [filterJapanese, setFilterJapanese] = useState(false);
  const [filterCommercial, setFilterCommercial] = useState(false);
  const [filterApi, setFilterApi] = useState(false);
  const [filterApp, setFilterApp] = useState(false);

  const categories = [
    { id: "all", label: isEn ? "All (60)" : "すべて (60種)" },
    { id: "general", label: isEn ? "General & LLM (10)" : "総合・LLM (10)" },
    { id: "writing", label: isEn ? "Writing & Research (10)" : "文書・リサーチ (10)" },
    { id: "image", label: isEn ? "Image Generation (10)" : "画像生成 (10)" },
    { id: "video", label: isEn ? "Video & Motion (10)" : "映像・動画 (10)" },
    { id: "audio", label: isEn ? "Audio & Music (10)" : "音楽・音声 (10)" },
    { id: "code", label: isEn ? "Coding & Dev (10)" : "開発・コード (10)" },
  ];

  // フィルタリング＆ソート
  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchName = tool.name.toLowerCase().includes(query);
        const matchSummary = tool.summary.toLowerCase().includes(query);
        const matchCategory = tool.categoryLabel.toLowerCase().includes(query);
        const matchVersion = tool.version.toLowerCase().includes(query);
        if (!matchName && !matchSummary && !matchCategory && !matchVersion) {
          return false;
        }
      }

      if (selectedCategory !== "all" && tool.category !== selectedCategory) {
        return false;
      }

      if (filterFreeTier && !tool.hasFreeTier) return false;
      if (filterJapanese && !tool.supportsJapanese) return false;
      if (filterCommercial && !tool.commercialUse) return false;
      if (filterApi && !tool.hasApi) return false;
      if (filterApp && !tool.hasApp) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "rank") {
        if (selectedCategory !== "all") {
          return a.categoryRank - b.categoryRank;
        }
        return a.overallRank - b.overallRank;
      }
      if (sortBy === "users") {
        return b.siteRegisteredCount - a.siteRegisteredCount;
      }
      if (sortBy === "updated") {
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      }
      if (sortBy === "worth") {
        return b.paidWorthRating - a.paidWorthRating;
      }
      return 0;
    });
  }, [
    tools,
    searchQuery,
    selectedCategory,
    sortBy,
    filterFreeTier,
    filterJapanese,
    filterCommercial,
    filterApi,
    filterApp,
  ]);

  // 選択中カテゴリに属する全ツール
  const toolsInCategory = useMemo(() => {
    if (selectedCategory === "all") return tools;
    return tools.filter((t) => t.category === selectedCategory);
  }, [tools, selectedCategory]);

  // フォーカス中のツールオブジェクト
  const currentFocusTool = useMemo(() => {
    const found = tools.find((t) => t.id === selectedFocusToolId);
    if (found) return found;
    return toolsInCategory[0] || tools[0];
  }, [tools, selectedFocusToolId, toolsInCategory]);

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    const catTools = catId === "all" ? tools : tools.filter((t) => t.category === catId);
    if (catTools.length > 0) {
      setSelectedFocusToolId(catTools[0].id);
    }
  };

  return (
    <section id="catalog-section" className="py-5 sm:py-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Studio Control Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 mb-4 pb-3 border-b border-slate-800/80">
          
          {/* Category Tabs (分野セレクター) */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isEn ? "FIELD:" : "分野:"}</span>
            </span>

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-black"
                    : "bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right Controls: View Switcher, Sort & Sync */}
          <div className="flex flex-wrap items-center gap-2 shrink-0 self-start lg:self-auto text-xs">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setDisplayMode("focus")}
                className={`px-2.5 py-1 rounded-md font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  displayMode === "focus"
                    ? "bg-cyan-500 text-slate-950 font-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>{isEn ? "Workspace" : "全画面詳細・プラン"}</span>
              </button>
              <button
                onClick={() => setDisplayMode("grid")}
                className={`px-2.5 py-1 rounded-md font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  displayMode === "grid"
                    ? "bg-cyan-500 text-slate-950 font-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <LayoutGrid className="w-3 h-3" />
                <span>{isEn ? "Browse All" : "一覧カード⊞"}</span>
              </button>
            </div>

            {/* Sort Selector */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-900 text-slate-200 text-xs font-semibold rounded-lg px-2.5 py-1.5 border border-slate-800 focus:outline-none focus:border-cyan-500 cursor-pointer"
            >
              <option value="rank">{isEn ? "👑 Rank" : "👑 推奨順"}</option>
              <option value="users">{isEn ? "🔥 Popular" : "🔥 人気順"}</option>
              <option value="worth">{isEn ? "⭐ Value" : "⭐ コスパ順"}</option>
              <option value="updated">{isEn ? "⚡ Updated" : "⚡ 更新順"}</option>
            </select>

            {/* Official Sync Button */}
            <button
              onClick={handleSyncOfficial}
              disabled={isSyncingOfficial}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 flex items-center gap-1.5 transition-all disabled:opacity-50 cursor-pointer"
              title={isEn ? "Sync specs directly from official homepages" : "全60ツールの公式HPを直接巡回して最新スペックに更新"}
            >
              <RefreshCw className={`w-3 h-3 ${isSyncingOfficial ? "animate-spin" : ""}`} />
              <span>{isSyncingOfficial ? (isEn ? "Syncing..." : "巡回中...") : (isEn ? "Sync" : "公式同期")}</span>
            </button>
          </div>
        </div>

        {/* Sync Status Banner (if active) */}
        {syncMessage && (
          <div className="mb-4 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 text-xs font-semibold flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{syncMessage}</span>
          </div>
        )}

        {/* AI Tool Selector Bar (分野内AI切り替え) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-5 no-scrollbar">
          <span className="text-[11px] font-bold text-slate-400 shrink-0 uppercase tracking-wider flex items-center gap-1 mr-1">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isEn ? "AI:" : "AI選択:"}</span>
          </span>

          {toolsInCategory.map((t) => {
            const isSelected = selectedFocusToolId === t.id && displayMode === "focus";
            return (
              <button
                key={t.id}
                onClick={() => {
                  setSelectedFocusToolId(t.id);
                  setDisplayMode("focus");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-100 text-slate-950 font-black shadow-md ring-1 ring-white"
                    : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                <span className={`text-[9px] px-1 py-0.2 rounded font-mono ${
                  isSelected ? "bg-slate-800 text-cyan-300" : "bg-slate-800 text-slate-400"
                }`}>
                  #{t.categoryRank}
                </span>
                <span>{t.name}</span>
              </button>
            );
          })}
        </div>

        {/* ─── CONDITIONAL DISPLAY: FOCUS DASHBOARD vs GRID CATALOG ─── */}
        {displayMode === "focus" && currentFocusTool ? (
          <AIDetailDashboard
            tool={currentFocusTool}
            allToolsInField={toolsInCategory}
            onSelectTool={(t) => setSelectedFocusToolId(t.id)}
            isSaved={savedToolIds.includes(currentFocusTool.id)}
            onToggleSave={onToggleSave}
            onVote={onVote}
            onBackToCatalog={() => setDisplayMode("grid")}
          />
        ) : (
          <div>
            {/* Feature Filters Pill Bar */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8 p-4 rounded-2xl glass-panel text-xs sm:text-sm border border-slate-800">
          <span className="flex items-center gap-1 text-slate-300 font-bold mr-1">
            <Filter className="w-4 h-4 text-cyan-400" />
            <span>{isEn ? "Filter:" : "絞り込み:"}</span>
          </span>

          <button
            onClick={() => setFilterFreeTier(!filterFreeTier)}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
              filterFreeTier
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            {isEn ? "✓ Has Free Tier" : "✓ 無料枠あり"}
          </button>

          <button
            onClick={() => setFilterJapanese(!filterJapanese)}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
              filterJapanese
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            {isEn ? "✓ Japanese UI" : "✓ 日本語対応"}
          </button>

          <button
            onClick={() => setFilterCommercial(!filterCommercial)}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
              filterCommercial
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            {isEn ? "✓ Commercial Use OK" : "✓ 商用利用可"}
          </button>

          <button
            onClick={() => setFilterApi(!filterApi)}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
              filterApi
                ? "bg-violet-500/20 text-violet-300 border border-violet-500/40 shadow-sm"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            {isEn ? "✓ API Provided" : "✓ API提供あり"}
          </button>

          <button
            onClick={() => setFilterApp(!filterApp)}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
              filterApp
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            {isEn ? "✓ Mobile / Native App" : "✓ スマホ/デスクトップアプリあり"}
          </button>
        </div>

        {/* Tools Count Indicator & View Mode Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-slate-300 mb-5 px-1 font-medium">
          <div className="flex items-center gap-2">
            <span>
              {isEn ? "Showing " : "表示中: "}
              <strong className="text-white font-extrabold text-base">{filteredTools.length}</strong>
              {isEn ? " AI Services" : " 件のAIサービス"}
            </span>
            <span className="hidden sm:inline text-xs text-slate-400">
              {isEn ? "(Select up to 3 tools to compare side-by-side)" : "（最大3件を選択して比較ドックで並列比較可能）"}
            </span>
          </div>

          <div className="flex items-center gap-1.5 self-end sm:self-auto bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{isEn ? "Grid View" : "カード表示"}</span>
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === "table"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>{isEn ? "Table View" : "比較リスト表示"}</span>
            </button>
          </div>
        </div>

        {/* Tools Display: Grid or Table Mode */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const isSaved = savedToolIds.includes(tool.id);
            const isCompared = compareToolIds.includes(tool.id);
            const versionsList = tool.versionFeatures.versionsList || [];
            const categoryLabel = getCategoryLabel(tool.category, lang);
            const badgeLabel = getBadgeLabel(tool.badge, lang);
            const pricingLabel = getPricingTypeLabel(tool.pricingType, lang);

            return (
              <div
                key={tool.id}
                className={`glass-panel rounded-2xl p-6 relative flex flex-col justify-between card-hover-glow border transition-all ${
                  isCompared ? "ring-2 ring-cyan-400 border-cyan-400/80 shadow-xl shadow-cyan-500/20" : "border-slate-800"
                }`}
              >
                <div>
                  {/* Header Row: Rank Badge & Name & Save Button */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      {/* Category Rank Badge */}
                      <span
                        className={`px-2.5 py-1 rounded-lg text-xs sm:text-sm font-black tracking-wide ${
                          tool.categoryRank === 1
                            ? "bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-sm shadow-amber-400/20"
                            : tool.categoryRank === 2
                            ? "bg-slate-300/20 text-slate-100 border border-slate-300/40"
                            : tool.categoryRank === 3
                            ? "bg-amber-700/20 text-amber-500 border border-amber-700/40"
                            : "bg-slate-800 text-slate-300 border border-slate-700"
                        }`}
                        title={`${categoryLabel} #${tool.categoryRank}`}
                      >
                        #{tool.categoryRank}
                      </span>

                      {/* Tool Name */}
                      <h3 className="font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                        {tool.name}
                      </h3>

                      {/* Specialty Badge */}
                      {badgeLabel && (
                        <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
                          {badgeLabel}
                        </span>
                      )}
                    </div>

                    {/* Bookmark / Stack Toggle */}
                    <button
                      onClick={() => onToggleSave(tool.id)}
                      className={`p-2 rounded-xl transition-colors cursor-pointer ${
                        isSaved
                          ? "bg-amber-500/20 text-amber-400"
                          : "text-slate-400 hover:text-white hover:bg-slate-800"
                      }`}
                      title={isSaved ? (isEn ? "Remove from Stack" : "My AI Stackから削除") : (isEn ? "Add to Stack" : "My AI Stackに追加")}
                    >
                      <Bookmark className="w-5 h-5" fill={isSaved ? "currentColor" : "none"} />
                    </button>
                  </div>

                  {/* Version & Official Company & Direct Official Link */}
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-xs sm:text-sm">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-800/90 text-cyan-300 font-mono text-xs font-bold border border-slate-700/80">
                      ⚡ {tool.version}
                    </span>
                    <span className="flex items-center gap-1 text-slate-300 text-xs font-semibold px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/50">
                      <span className="text-indigo-400 font-bold">{isEn ? "By:" : "開発元:"}</span>
                      <span>{tool.specs.company}</span>
                    </span>
                    {tool.officialUrl && (
                      <a
                        href={tool.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 hover:text-white border border-blue-500/30 hover:bg-blue-500/20 transition-colors"
                        title={isEn ? "Open official homepage (Primary Source)" : "開発元の公式HPを直接開く（一次情報）"}
                      >
                        <Globe className="w-3 h-3 text-blue-400" />
                        <span>{isEn ? "Official ↗" : "公式HP ↗"}</span>
                      </a>
                    )}
                  </div>

                  {/* 1-Line Summary */}
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4 line-clamp-2 font-medium">
                    {tool.summary}
                  </p>

                  {/* Version Breakdown (バージョン別モデル一覧：無料・有料プランを明確化) */}
                  {versionsList.length > 0 && (() => {
                    const getModelBadgeName = (v: typeof versionsList[0]) => {
                      if (v.shortName) return v.shortName;
                      const clean = v.name
                        .replace(new RegExp(`^(${tool.name}|Claude|Gemini|ChatGPT|OpenAI|Midjourney|Runway|Suno|Udio|GitHub|DeepSeek|Microsoft)\\s*`, "i"), "")
                        .replace(/\s*\([^)]*\)$/, "")
                        .trim();
                      return clean || v.name;
                    };

                    const freeModels = versionsList.filter((v) => 
                      v.tier === "free" || 
                      v.planAvailability?.toLowerCase().includes("無料") ||
                      v.planAvailability?.toLowerCase().includes("free")
                    );
                    const paidModels = versionsList.filter((v) => 
                      v.tier === "paid" || 
                      v.tier === "preview" || 
                      (!freeModels.includes(v) && (
                        v.planAvailability?.toLowerCase().includes("pro") || 
                        v.planAvailability?.toLowerCase().includes("有料") || 
                        v.planAvailability?.toLowerCase().includes("plus") ||
                        v.planAvailability?.toLowerCase().includes("advanced") ||
                        v.planAvailability?.toLowerCase().includes("individual")
                      ))
                    );
                    const hasSplit = freeModels.length > 0 && paidModels.length > 0;

                    return (
                      <div className="bg-slate-900/90 rounded-xl p-3 mb-3 border border-slate-800 text-xs space-y-2">
                        <div className="flex items-center justify-between text-cyan-300 font-bold text-xs uppercase tracking-wider">
                          <div className="flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{isEn ? "Available Models / Plans" : "選べるモデル・プラン対応"}</span>
                          </div>
                          <span className="text-[10px] font-normal text-slate-400 font-mono">
                            {versionsList.length} {isEn ? "models" : "種"}
                          </span>
                        </div>

                        {hasSplit ? (
                          <div className="space-y-1.5 pt-0.5">
                            {/* 無料枠で使えるモデル */}
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 shrink-0">
                                {isEn ? "Free" : "無料枠"}
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {freeModels.map((v, i) => (
                                  <span
                                    key={`free-${i}`}
                                    className="px-2 py-0.5 rounded bg-slate-800/90 text-emerald-200 border border-emerald-500/20 text-xs font-semibold hover:border-emerald-400 transition-colors"
                                    title={`${v.name} - ${v.planAvailability || ""}: ${v.description || ""}`}
                                  >
                                    {getModelBadgeName(v)}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* 有料プランで解放されるモデル */}
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 shrink-0">
                                {isEn ? "Paid" : "有料枠"}
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {paidModels.map((v, i) => (
                                  <span
                                    key={`paid-${i}`}
                                    className="px-2 py-0.5 rounded bg-slate-800/90 text-cyan-200 border border-cyan-500/20 text-xs font-semibold hover:border-cyan-400 transition-colors"
                                    title={`${v.name} - ${v.planAvailability || ""}: ${v.description || ""}`}
                                  >
                                    {getModelBadgeName(v)}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* 分割なし（全有料または全無料ツール） */
                          <div className="flex flex-wrap gap-1.5 pt-0.5">
                            {versionsList.map((v, i) => (
                              <span
                                key={i}
                                className={`px-2 py-0.5 rounded text-xs font-semibold border ${
                                  v.tier === "paid" || tool.pricingType === "完全有料"
                                    ? "bg-slate-800 text-cyan-300 border-cyan-500/30"
                                    : "bg-slate-800 text-slate-200 border-slate-700"
                                }`}
                                title={`${v.name} - ${v.planAvailability || ""}: ${v.description || ""}`}
                              >
                                {getModelBadgeName(v)}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })()}

                  {/* Pricing Badge & Details */}
                  <div className="bg-slate-950/70 rounded-xl p-3 mb-4 border border-slate-800 text-xs sm:text-sm space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-300">{isEn ? "Pricing:" : "料金:"}</span>
                      <span className="px-2 py-0.5 rounded text-xs font-extrabold bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
                        {pricingLabel}
                      </span>
                    </div>
                    <div className="text-xs text-slate-200 font-mono truncate font-semibold">
                      {tool.pricingMonthly}
                    </div>
                    <div className="text-[11px] text-slate-400 line-clamp-1">
                      <strong className="text-slate-300">{isEn ? "Free Tier: " : "無料枠: "}</strong>
                      {tool.freePlanDetails.limits}
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Compare Checkbox, Upvote & Details */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                  {/* Compare Toggle */}
                  <label className="flex items-center gap-1.5 text-xs text-slate-300 font-bold cursor-pointer select-none hover:text-white">
                    <input
                      type="checkbox"
                      checked={isCompared}
                      onChange={() => onToggleCompare(tool.id)}
                      className="w-4 h-4 rounded text-cyan-500 bg-slate-800 border-slate-700 focus:ring-cyan-500 cursor-pointer"
                    />
                    <span>{isCompared ? t.comparing : t.compare}</span>
                  </label>

                  {/* Upvote & Detail Button */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onVote(tool.id)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                      title={isEn ? "Vote if this AI is helpful" : "このAIが役立つと思ったら投票"}
                    >
                      <ThumbsUp className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="font-sans text-xs font-bold">
                        {tool.votesCount > 0 ? `${tool.votesCount}` : (isEn ? "Vote" : "役立つ!")}
                      </span>
                    </button>

                    <button
                      onClick={() => {
                        setSelectedFocusToolId(tool.id);
                        setDisplayMode("focus");
                        const el = document.getElementById("catalog-section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-3.5 py-2 rounded-xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5 cursor-pointer text-xs sm:text-sm"
                      title={isEn ? "Open full-screen workspace with all plans & models comparison" : "画面全体で全プラン詳細・モデル比較・一次情報を確認"}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isEn ? "Workspace & Plans" : "全画面・プラン比較"}</span>
                    </button>

                    <button
                      onClick={() => onSelectTool(tool)}
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                      title={isEn ? "Quick Preview Modal" : "簡易プレビュー"}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        ) : (
          /* Table Comparison Mode */
          <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-900/80 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-950/90 text-slate-400 font-bold border-b border-slate-800">
                    <th className="py-3.5 px-4 w-16 text-center">{isEn ? "Rank" : "順位"}</th>
                    <th className="py-3.5 px-4 min-w-[200px]">{isEn ? "Tool / Features" : "AIツール名 / 特長"}</th>
                    <th className="py-3.5 px-3 min-w-[100px]">{isEn ? "Category" : "カテゴリ"}</th>
                    <th className="py-3.5 px-3 min-w-[140px]">{isEn ? "Active Version" : "現行バージョン"}</th>
                    <th className="py-3.5 px-3 min-w-[160px]">{isEn ? "Monthly Cost" : "月額料金"}</th>
                    <th className="py-3.5 px-3 text-center">{isEn ? "Free Tier" : "無料枠"}</th>
                    <th className="py-3.5 px-3 text-center">{isEn ? "Japanese" : "日本語"}</th>
                    <th className="py-3.5 px-3 text-center">{isEn ? "Commercial" : "商用利用"}</th>
                    <th className="py-3.5 px-4 text-right min-w-[180px]">{isEn ? "Action" : "操作・比較"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {filteredTools.map((tool) => {
                    const isSaved = savedToolIds.includes(tool.id);
                    const isCompared = compareToolIds.includes(tool.id);
                    const categoryLabel = getCategoryLabel(tool.category, lang);
                    const badgeLabel = getBadgeLabel(tool.badge, lang);

                    return (
                      <tr
                        key={tool.id}
                        className={`hover:bg-slate-800/50 transition-colors ${
                          isCompared ? "bg-cyan-950/20" : ""
                        }`}
                      >
                        <td className="py-3.5 px-4 text-center font-bold font-mono">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-xs ${
                              tool.categoryRank === 1
                                ? "bg-amber-400/20 text-amber-300 font-black"
                                : tool.categoryRank === 2
                                ? "bg-slate-300/20 text-slate-100 font-bold"
                                : tool.categoryRank === 3
                                ? "bg-amber-700/20 text-amber-500 font-bold"
                                : "text-slate-400"
                            }`}
                          >
                            #{tool.categoryRank}
                          </span>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2">
                            <span
                              onClick={() => onSelectTool(tool)}
                              className="font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer text-sm sm:text-base"
                            >
                              {tool.name}
                            </span>
                            {badgeLabel && (
                              <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                {badgeLabel}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {tool.summary}
                          </p>
                        </td>

                        <td className="py-3.5 px-3">
                          <span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300">
                            {categoryLabel}
                          </span>
                        </td>

                        <td className="py-3.5 px-3 font-mono font-semibold text-cyan-300">
                          {tool.version}
                        </td>

                        <td className="py-3.5 px-3 font-mono text-slate-200">
                          {tool.pricingMonthly}
                        </td>

                        <td className="py-3.5 px-3 text-center">
                          {tool.hasFreeTier ? (
                            <CheckCircle className="w-4 h-4 text-emerald-400 inline" />
                          ) : (
                            <XCircle className="w-4 h-4 text-slate-600 inline" />
                          )}
                        </td>

                        <td className="py-3.5 px-3 text-center">
                          {tool.supportsJapanese ? (
                            <CheckCircle className="w-4 h-4 text-cyan-400 inline" />
                          ) : (
                            <XCircle className="w-4 h-4 text-slate-600 inline" />
                          )}
                        </td>

                        <td className="py-3.5 px-3 text-center">
                          {tool.commercialUse ? (
                            <CheckCircle className="w-4 h-4 text-indigo-400 inline" />
                          ) : (
                            <XCircle className="w-4 h-4 text-slate-600 inline" />
                          )}
                        </td>

                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => onToggleCompare(tool.id)}
                              className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer ${
                                isCompared
                                  ? "bg-cyan-500 text-slate-950 font-bold"
                                  : "bg-slate-800 text-slate-300 hover:text-white"
                              }`}
                            >
                              {isCompared ? t.comparing : t.compare}
                            </button>
                            <button
                              onClick={() => {
                                setSelectedFocusToolId(tool.id);
                                setDisplayMode("focus");
                                const el = document.getElementById("catalog-section");
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                              }}
                              className="px-2.5 py-1 rounded text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 cursor-pointer shadow-sm"
                              title={isEn ? "Open full-screen workspace" : "画面全体で全プラン詳細・比較を確認"}
                            >
                              {isEn ? "Workspace" : "全画面詳細"}
                            </button>
                            <button
                              onClick={() => onSelectTool(tool)}
                              className="px-2 py-1 rounded text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
                              title={isEn ? "Quick Preview" : "クイック表示"}
                            >
                              {t.viewDetails}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
          </div>
        )}
      </div>
    </section>
  );
};
