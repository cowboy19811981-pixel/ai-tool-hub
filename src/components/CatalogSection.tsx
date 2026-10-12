"use client";

import React, { useState, useMemo } from "react";
import { 
  Sparkles, 
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
  Info
} from "lucide-react";
import { ToolItem } from "@/types";

interface CatalogSectionProps {
  tools: ToolItem[];
  savedToolIds: string[];
  compareToolIds: string[];
  onToggleSave: (toolId: string) => void;
  onToggleCompare: (toolId: string) => void;
  onVote: (toolId: string) => void;
  onSelectTool: (tool: ToolItem) => void;
  searchQuery: string;
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
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"rank" | "users" | "updated" | "worth">("rank");
  
  // フィルター状態
  const [filterFreeTier, setFilterFreeTier] = useState(false);
  const [filterJapanese, setFilterJapanese] = useState(false);
  const [filterCommercial, setFilterCommercial] = useState(false);
  const [filterApi, setFilterApi] = useState(false);
  const [filterApp, setFilterApp] = useState(false);

  const categories = [
    { id: "all", label: "すべて (60種)" },
    { id: "general", label: "総合・LLM (10)" },
    { id: "writing", label: "文書・リサーチ (10)" },
    { id: "image", label: "画像生成 (10)" },
    { id: "video", label: "映像・動画 (10)" },
    { id: "audio", label: "音楽・音声 (10)" },
    { id: "code", label: "開発・コード (10)" },
  ];

  // フィルタリング＆ソート
  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      // 検索クエリ
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

      // カテゴリ
      if (selectedCategory !== "all" && tool.category !== selectedCategory) {
        return false;
      }

      // 複合トグルフィルター
      if (filterFreeTier && !tool.hasFreeTier) return false;
      if (filterJapanese && !tool.supportsJapanese) return false;
      if (filterCommercial && !tool.commercialUse) return false;
      if (filterApi && !tool.hasApi) return false;
      if (filterApp && !tool.hasApp) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "rank") {
        // 分野別選択時は分野内順位、すべて選択時は総合順位
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

  return (
    <section id="catalog-section" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold mb-2 border border-cyan-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>AI DIRECTORY & BENCHMARK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              AIカタログ・詳細スペック比較
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              バージョンごとの進化特性、無料版制限と有料版の決定打、分野別ランキングを完全収録。
            </p>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs text-slate-400 font-medium">並び替え:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-800/90 text-slate-200 text-xs font-semibold rounded-lg px-3 py-2 border border-slate-700 focus:outline-none focus:border-cyan-500"
            >
              <option value="rank">👑 ランキング順 (推奨)</option>
              <option value="users">🔥 登録者・人気順</option>
              <option value="worth">⭐ 課金コスパ順</option>
              <option value="updated">⚡ 最新アップデート順</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Feature Filters Pill Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-3 rounded-xl glass-panel text-xs">
          <span className="flex items-center gap-1 text-slate-400 font-semibold mr-1">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>絞り込み:</span>
          </span>

          <button
            onClick={() => setFilterFreeTier(!filterFreeTier)}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              filterFreeTier
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            ✓ 無料枠あり
          </button>

          <button
            onClick={() => setFilterJapanese(!filterJapanese)}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              filterJapanese
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            ✓ 日本語対応
          </button>

          <button
            onClick={() => setFilterCommercial(!filterCommercial)}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              filterCommercial
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            ✓ 商用利用OK
          </button>

          <button
            onClick={() => setFilterApi(!filterApi)}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              filterApi
                ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            ✓ API提供あり
          </button>

          <button
            onClick={() => setFilterApp(!filterApp)}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              filterApp
                ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            ✓ アプリあり
          </button>

          {(filterFreeTier || filterJapanese || filterCommercial || filterApi || filterApp) && (
            <button
              onClick={() => {
                setFilterFreeTier(false);
                setFilterJapanese(false);
                setFilterCommercial(false);
                setFilterApi(false);
                setFilterApp(false);
              }}
              className="text-slate-400 hover:text-white underline ml-auto text-xs"
            >
              リセット
            </button>
          )}
        </div>

        {/* Tools Count Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-4 px-1">
          <span>表示中: <strong className="text-white font-bold">{filteredTools.length}</strong> 件のAIサービス</span>
          <span className="text-slate-500">※最大3ツールを選択して画面下部で横並び比較可能</span>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool) => {
            const isSaved = savedToolIds.includes(tool.id);
            const isCompared = compareToolIds.includes(tool.id);
            const isTop3 = tool.categoryRank <= 3;

            return (
              <div
                key={tool.id}
                className={`glass-panel rounded-2xl p-5 relative flex flex-col justify-between card-hover-glow border transition-all ${
                  isCompared ? "ring-2 ring-cyan-400 border-cyan-400/80 shadow-lg shadow-cyan-500/20" : ""
                }`}
              >
                {/* Header Row: Rank Badge & Name & Save Button */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      {/* Category Rank Badge */}
                      <span
                        className={`px-2 py-0.5 rounded-lg text-xs font-black tracking-wide ${
                          tool.categoryRank === 1
                            ? "bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-sm shadow-amber-400/20"
                            : tool.categoryRank === 2
                            ? "bg-slate-300/20 text-slate-200 border border-slate-300/40"
                            : tool.categoryRank === 3
                            ? "bg-amber-700/20 text-amber-500 border border-amber-700/40"
                            : "bg-slate-800 text-slate-400 border border-slate-700"
                        }`}
                        title={`${tool.categoryLabel}内 第${tool.categoryRank}位`}
                      >
                        #{tool.categoryRank}
                      </span>

                      {/* Tool Name */}
                      <h3 className="font-extrabold text-lg sm:text-xl text-white tracking-tight">
                        {tool.name}
                      </h3>

                      {/* Specialty Badge */}
                      {tool.badge && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 truncate max-w-[100px]">
                          {tool.badge}
                        </span>
                      )}
                    </div>

                    {/* Bookmark / Stack Toggle */}
                    <button
                      onClick={() => onToggleSave(tool.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isSaved
                          ? "bg-amber-500/20 text-amber-400"
                          : "text-slate-400 hover:text-white hover:bg-slate-800"
                      }`}
                      title={isSaved ? "My AI Stackから削除" : "My AI Stackに追加"}
                    >
                      <Bookmark className="w-4 h-4" fill={isSaved ? "currentColor" : "none"} />
                    </button>
                  </div>

                  {/* Version & Users Meta */}
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300 font-mono text-[11px] border border-slate-700/60">
                      ⚡ {tool.version}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 text-[11px]" title="推計利用規模">
                      <Users className="w-3 h-3 text-indigo-400" />
                      <span>{tool.estimatedUsers}</span>
                    </span>
                  </div>

                  {/* 1-Line Summary */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {tool.summary}
                  </p>

                  {/* Version Characteristics Highlight Box */}
                  <div className="bg-slate-900/70 rounded-xl p-3 mb-3 border border-slate-800/80 text-xs space-y-1.5">
                    <div className="flex items-start gap-1.5 text-cyan-300 font-semibold text-[11px]">
                      <Zap className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>最新進化点:</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-2 pl-5">
                      {tool.versionFeatures.evolution}
                    </p>
                  </div>

                  {/* Free vs Paid Deciding Factor */}
                  <div className="bg-slate-800/40 rounded-xl p-3 mb-4 border border-slate-700/50 text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-medium">料金: <strong className="text-slate-200">{tool.pricingMonthly}</strong></span>
                      <div className="flex items-center gap-0.5 text-amber-400 font-bold" title={`課金推奨度: ${tool.paidWorthRating}/5`}>
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{tool.paidWorthRating}.0</span>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-300 pt-1 border-t border-slate-700/40">
                      <span className="text-emerald-400 font-bold">有料版の価値: </span>
                      <span className="text-slate-300 line-clamp-1">{tool.paidPlanDetails.unlockedFeatures[0]}</span>
                    </div>
                  </div>

                  {/* Feature Check Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4 text-[11px]">
                    <span className={`px-2 py-0.5 rounded font-medium ${tool.hasFreeTier ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
                      {tool.hasFreeTier ? "✓ 無料枠あり" : "✕ 無料枠なし"}
                    </span>
                    <span className={`px-2 py-0.5 rounded font-medium ${tool.supportsJapanese ? "bg-cyan-500/10 text-cyan-400" : "bg-slate-800 text-slate-400"}`}>
                      {tool.supportsJapanese ? "✓ 日本語対応" : "✕ 英語推奨"}
                    </span>
                    <span className={`px-2 py-0.5 rounded font-medium ${tool.commercialUse ? "bg-indigo-500/10 text-indigo-400" : "bg-slate-800 text-slate-400"}`}>
                      {tool.commercialUse ? "✓ 商用可" : "非商用"}
                    </span>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2 text-xs">
                  {/* Compare Checkbox */}
                  <label className="flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-cyan-300 select-none">
                    <input
                      type="checkbox"
                      checked={isCompared}
                      onChange={() => onToggleCompare(tool.id)}
                      className="rounded border-slate-700 text-cyan-500 focus:ring-0 bg-slate-800"
                    />
                    <span className="font-semibold text-[11px]">
                      {isCompared ? "比較中" : "比較に追加"}
                    </span>
                  </label>

                  {/* Upvote & Detail Button */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onVote(tool.id)}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                      title="使ってよかったボタン"
                    >
                      <ThumbsUp className="w-3 h-3 text-cyan-400" />
                      <span className="font-mono text-[11px] font-bold">{tool.votesCount}</span>
                    </button>

                    <button
                      onClick={() => onSelectTool(tool)}
                      className="px-3 py-1.5 rounded-lg font-bold bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 transition-all flex items-center gap-1"
                    >
                      <span>詳細</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Result */}
        {filteredTools.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-2xl">
            <Info className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">一致するAIサービスが見つかりませんでした</h4>
            <p className="text-xs text-slate-400">検索ワードや絞り込み条件を変更してお試しください。</p>
          </div>
        )}
      </div>
    </section>
  );
};
