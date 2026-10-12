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
  Info,
  Cpu,
  Globe,
  RefreshCw
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
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"rank" | "users" | "updated" | "worth">("rank");
  const [isSyncingOfficial, setIsSyncingOfficial] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

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
        setSyncMessage(data.message || "公式HPからの最新データ同期が完了しました！");
      } else {
        setSyncMessage(data.message || "同期が完了しました。");
      }
    } catch (e) {
      setSyncMessage("公式HPとの通信中にエラーが発生しました。");
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

  return (
    <section id="catalog-section" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-bold mb-2 border border-cyan-500/20">
              <Layers className="w-4 h-4" />
              <span>AI DIRECTORY & BENCHMARK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              AIカタログ・詳細スペック比較
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1.5">
              バージョンごとの進化特性、無料版制限と有料版の決定打、分野別ランキングを完全収録。
            </p>
          </div>

          {/* Sort Selector & Official Sync Button */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <button
              onClick={handleSyncOfficial}
              disabled={isSyncingOfficial}
              className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5 transition-all shadow-md disabled:opacity-50"
              title="全60ツールの公式HPを直接巡回して最新スペックに更新"
            >
              <RefreshCw className={`w-4 h-4 text-cyan-400 ${isSyncingOfficial ? "animate-spin" : ""}`} />
              <span>{isSyncingOfficial ? "公式HP巡回中..." : "🌐 公式HPから直接同期"}</span>
            </button>

            <span className="text-xs sm:text-sm text-slate-300 font-semibold ml-2">並び替え:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-800 text-slate-100 text-xs sm:text-sm font-bold rounded-xl px-3.5 py-2.5 border border-slate-700 focus:outline-none focus:border-cyan-500"
            >
              <option value="rank">👑 ランキング順 (推奨)</option>
              <option value="users">🔥 登録者・人気順</option>
              <option value="worth">⭐ 課金コスパ順</option>
              <option value="updated">⚡ 最新アップデート順</option>
            </select>
          </div>
        </div>

        {/* Sync Status Banner */}
        {syncMessage && (
          <div className="mb-6 p-4 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-200 text-sm font-semibold flex items-center gap-2 animate-in fade-in">
            <Globe className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>{syncMessage}</span>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Feature Filters Pill Bar */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8 p-4 rounded-2xl glass-panel text-xs sm:text-sm">
          <span className="flex items-center gap-1 text-slate-300 font-bold mr-1">
            <Filter className="w-4 h-4 text-cyan-400" />
            <span>絞り込み:</span>
          </span>

          <button
            onClick={() => setFilterFreeTier(!filterFreeTier)}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              filterFreeTier
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            ✓ 無料枠あり
          </button>

          <button
            onClick={() => setFilterJapanese(!filterJapanese)}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              filterJapanese
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            ✓ 日本語対応
          </button>

          <button
            onClick={() => setFilterCommercial(!filterCommercial)}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              filterCommercial
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            ✓ 商用利用OK
          </button>

          <button
            onClick={() => setFilterApi(!filterApi)}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              filterApi
                ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            ✓ API提供あり
          </button>

          <button
            onClick={() => setFilterApp(!filterApp)}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
              filterApp
                ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
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
              className="text-slate-400 hover:text-white underline ml-auto font-semibold"
            >
              条件をリセット
            </button>
          )}
        </div>

        {/* Tools Count Indicator */}
        <div className="flex items-center justify-between text-sm text-slate-300 mb-4 px-1 font-medium">
          <span>表示中: <strong className="text-white font-extrabold text-base">{filteredTools.length}</strong> 件のAIサービス</span>
          <span className="text-cyan-400">※最大3ツールを選択して画面下部で横並び比較可能</span>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const isSaved = savedToolIds.includes(tool.id);
            const isCompared = compareToolIds.includes(tool.id);
            const versionsList = tool.versionFeatures.versionsList || [];

            return (
              <div
                key={tool.id}
                className={`glass-panel rounded-2xl p-6 relative flex flex-col justify-between card-hover-glow border transition-all ${
                  isCompared ? "ring-2 ring-cyan-400 border-cyan-400/80 shadow-xl shadow-cyan-500/20" : ""
                }`}
              >
                <div>
                  {/* Header Row: Rank Badge & Name & Save Button */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
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
                        title={`${tool.categoryLabel}内 第${tool.categoryRank}位`}
                      >
                        #{tool.categoryRank}
                      </span>

                      {/* Tool Name */}
                      <h3 className="font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                        {tool.name}
                      </h3>

                      {/* Specialty Badge */}
                      {tool.badge && (
                        <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
                          {tool.badge}
                        </span>
                      )}
                    </div>

                    {/* Bookmark / Stack Toggle */}
                    <button
                      onClick={() => onToggleSave(tool.id)}
                      className={`p-2 rounded-xl transition-colors ${
                        isSaved
                          ? "bg-amber-500/20 text-amber-400"
                          : "text-slate-400 hover:text-white hover:bg-slate-800"
                      }`}
                      title={isSaved ? "My AI Stackから削除" : "My AI Stackに追加"}
                    >
                      <Bookmark className="w-5 h-5" fill={isSaved ? "currentColor" : "none"} />
                    </button>
                  </div>

                  {/* Version & Official Company & Direct Official Link */}
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-xs sm:text-sm">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-800/90 text-cyan-300 font-mono text-xs font-bold border border-slate-700/80">
                      ⚡ {tool.version}
                    </span>
                    <span className="flex items-center gap-1 text-slate-300 text-xs font-semibold px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/50" title="公式開発元">
                      <span className="text-indigo-400 font-bold">開発元:</span>
                      <span>{tool.specs.company}</span>
                    </span>
                    {tool.officialUrl && (
                      <a
                        href={tool.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 hover:text-white border border-blue-500/30 hover:bg-blue-500/20 transition-colors"
                        title="開発元の公式HPを直接開く（一次情報）"
                      >
                        <Globe className="w-3 h-3 text-blue-400" />
                        <span>公式HP ↗</span>
                      </a>
                    )}
                  </div>

                  {/* 1-Line Summary (大きめの文字で見やすく) */}
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4 line-clamp-2 font-medium">
                    {tool.summary}
                  </p>

                  {/* Version Breakdown (バージョン別モデル一覧がある場合) */}
                  {versionsList.length > 0 && (
                    <div className="bg-slate-900/90 rounded-xl p-3.5 mb-3 border border-cyan-500/30 text-xs sm:text-sm space-y-1.5">
                      <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-xs uppercase tracking-wider">
                        <Cpu className="w-4 h-4 text-cyan-400" />
                        <span>選べるモデル・バージョン ({versionsList.length}種):</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {versionsList.map((v, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold"
                            title={v.description}
                          >
                            {v.name.split(" ")[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Version Evolution Box */}
                  <div className="bg-slate-900/60 rounded-xl p-3.5 mb-3 border border-slate-800 text-xs sm:text-sm space-y-1">
                    <div className="flex items-start gap-1.5 text-cyan-300 font-bold text-xs">
                      <Zap className="w-4 h-4 shrink-0 text-cyan-400 mt-0.5" />
                      <span>進化・特性の要約:</span>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2 pl-5">
                      {tool.versionFeatures.evolution}
                    </p>
                  </div>

                  {/* Free vs Paid Deciding Factor */}
                  <div className="bg-slate-800/50 rounded-xl p-3.5 mb-4 border border-slate-700/60 text-xs sm:text-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 font-semibold">料金: <strong className="text-white font-bold">{tool.pricingMonthly}</strong></span>
                      <div className="flex items-center gap-1 text-amber-400 font-bold" title={`課金推奨度: ${tool.paidWorthRating}/5`}>
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span>{tool.paidWorthRating}.0</span>
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200 pt-1.5 border-t border-slate-700/50">
                      <span className="text-emerald-400 font-bold">有料版の決定打: </span>
                      <span className="text-slate-200 line-clamp-1 font-medium">{tool.paidPlanDetails.unlockedFeatures[0]}</span>
                    </div>
                  </div>

                  {/* Feature Check Badges */}
                  <div className="flex flex-wrap gap-2 mb-4 text-xs font-semibold">
                    <span className={`px-2.5 py-1 rounded-lg ${tool.hasFreeTier ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30" : "bg-rose-500/15 text-rose-300 border border-rose-500/30"}`}>
                      {tool.hasFreeTier ? "✓ 無料枠あり" : "✕ 無料枠なし"}
                    </span>
                    <span className={`px-2.5 py-1 rounded-lg ${tool.supportsJapanese ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30" : "bg-slate-800 text-slate-400 border border-slate-700"}`}>
                      {tool.supportsJapanese ? "✓ 日本語対応" : "✕ 英語推奨"}
                    </span>
                    <span className={`px-2.5 py-1 rounded-lg ${tool.commercialUse ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30" : "bg-slate-800 text-slate-400 border border-slate-700"}`}>
                      {tool.commercialUse ? "✓ 商用利用可" : "非商用"}
                    </span>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2 text-xs sm:text-sm">
                  {/* Compare Checkbox */}
                  <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-cyan-300 select-none">
                    <input
                      type="checkbox"
                      checked={isCompared}
                      onChange={() => onToggleCompare(tool.id)}
                      className="w-4 h-4 rounded border-slate-700 text-cyan-500 focus:ring-0 bg-slate-800"
                    />
                    <span className="font-bold text-xs sm:text-sm">
                      {isCompared ? "比較中" : "比較に追加"}
                    </span>
                  </label>

                  {/* Upvote & Detail Button */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onVote(tool.id)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors"
                      title="このAIが役立つと思ったら投票"
                    >
                      <ThumbsUp className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="font-sans text-xs font-bold">
                        {tool.votesCount > 0 ? `${tool.votesCount}` : "役立つ!"}
                      </span>
                    </button>

                    <button
                      onClick={() => onSelectTool(tool)}
                      className="px-4 py-2 rounded-xl font-bold bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 transition-all flex items-center gap-1"
                    >
                      <span>詳細スペック</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Result */}
        {filteredTools.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-2xl">
            <Info className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h4 className="text-xl font-bold text-white mb-2">一致するAIサービスが見つかりませんでした</h4>
            <p className="text-sm text-slate-400">検索ワードや絞り込み条件を変更してお試しください。</p>
          </div>
        )}
      </div>
    </section>
  );
};
