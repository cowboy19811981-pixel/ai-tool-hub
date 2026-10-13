"use client";

import React, { useState, useEffect } from "react";
import { 
  Clock, 
  ExternalLink, 
  RefreshCw, 
  Sparkles, 
  ArrowRight,
  CheckCircle2, 
  Calendar, 
  Globe2, 
  Wrench, 
  Layers,
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Building2,
  Share2
} from "lucide-react";
import { UpdateItem } from "@/types";

interface NewsSectionProps {
  updates: UpdateItem[];
  onSelectToolById: (id: string) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  updates,
  onSelectToolById,
}) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentUpdates, setCurrentUpdates] = useState<UpdateItem[]>(updates);
  const [filter, setFilter] = useState<"all" | "news" | "update">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string>(updates[0]?.id || "");
  const [message, setMessage] = useState<string | null>(null);
  const [copiedUrl, setCopiedUrl] = useState(false);

  // 外部からの updates 変更に同期
  useEffect(() => {
    setCurrentUpdates(updates);
    if (!selectedId && updates.length > 0) {
      setSelectedId(updates[0].id);
    }
  }, [updates]);

  const [selectedScope, setSelectedScope] = useState<"news" | "models" | "pricing" | "all">("news");

  const handleManualUpdate = async () => {
    setIsUpdating(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/cron/update?scope=${selectedScope}`);
      const data = await res.json();
      if (res.ok) {
        if (data.updates && data.updates.length > 0) {
          setCurrentUpdates(data.updates);
          setSelectedId(data.updates[0].id);
        }
        setMessage(data.message || `[${selectedScope}] の同期が完了しました！`);
      } else {
        setMessage(data.message || "同期処理中にエラーが発生しました。");
      }
    } catch (e) {
      setMessage("通信エラーが発生しました。");
    } finally {
      setIsUpdating(false);
      setTimeout(() => setMessage(null), 6000);
    }
  };

  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return `${d.getMonth() + 1}月${d.getDate()}日 ${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
    } catch {
      return isoStr;
    }
  };

  const filteredUpdates = currentUpdates.filter((item) => {
    if (filter === "news" && item.toolId) return false;
    if (filter === "update" && !item.toolId) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSummary = item.summary3Lines.toLowerCase().includes(q);
      const matchSource = item.sourceName?.toLowerCase().includes(q) || false;
      const matchTool = item.toolId?.toLowerCase().includes(q) || false;
      if (!matchTitle && !matchSummary && !matchSource && !matchTool) return false;
    }
    return true;
  });

  // 選択中のアイテム（フィルタ外れた場合は先頭を選択）
  const activeItem = filteredUpdates.find((u) => u.id === selectedId) || filteredUpdates[0] || null;

  const activeIndex = activeItem ? filteredUpdates.findIndex((u) => u.id === activeItem.id) : -1;

  const handlePrev = () => {
    if (activeIndex > 0) {
      setSelectedId(filteredUpdates[activeIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (activeIndex >= 0 && activeIndex < filteredUpdates.length - 1) {
      setSelectedId(filteredUpdates[activeIndex + 1].id);
    }
  };

  const handleCopyShare = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <section id="news-section" className="py-12 border-t border-slate-800/80 relative bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-bold mb-2 border border-cyan-500/20">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>OFFICIAL PRIMARY SOURCES ＆ REAL-TIME TIMELINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>リアルタイムAI公式速報</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE ({filteredUpdates.length}件)
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1">
              各社公式発表・開発元一次ソースからリアルタイム収集。タイトルを選んで即座にGemini 3行要約をチェックできます。
            </p>
          </div>

          {/* Manual Refresh & Scope Controls */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <select
              value={selectedScope}
              onChange={(e) => setSelectedScope(e.target.value as any)}
              disabled={isUpdating}
              aria-label="更新スコープを選択"
              className="bg-slate-900 border border-slate-700 text-xs sm:text-sm text-cyan-200 rounded-xl px-3 py-2.5 font-semibold focus:outline-none focus:border-cyan-400 cursor-pointer shadow-sm"
            >
              <option value="news">📰 ニュース速報 (12H間隔)</option>
              <option value="models">🤖 モデル情報 (週1間隔)</option>
              <option value="pricing">💰 料金・プラン (月1間隔)</option>
              <option value="all">🌐 全範囲一括同期</option>
            </select>
            <button
              onClick={handleManualUpdate}
              disabled={isUpdating}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-600/25 hover:bg-cyan-600/40 text-cyan-200 hover:text-white border border-cyan-500/50 flex items-center gap-2 transition-all shadow-md disabled:opacity-50 active:scale-95 shrink-0"
            >
              <RefreshCw className={`w-4 h-4 text-cyan-400 ${isUpdating ? "animate-spin" : ""}`} />
              <span>{isUpdating ? "同期中..." : "即時同期を実行"}</span>
            </button>
          </div>
        </div>

        {/* Status Message */}
        {message && (
          <div className="mb-6 p-4 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-200 text-sm font-semibold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>{message}</span>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 p-3 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-inner">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                filter === "all"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>すべて ({currentUpdates.length})</span>
            </button>
            <button
              onClick={() => setFilter("news")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                filter === "news"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
              }`}
            >
              <Globe2 className="w-3.5 h-3.5 text-blue-400" />
              <span>⚡ AI業界速報</span>
            </button>
            <button
              onClick={() => setFilter("update")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                filter === "update"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
              }`}
            >
              <Wrench className="w-3.5 h-3.5 text-purple-400" />
              <span>🛠 ツール機能更新</span>
            </button>
          </div>

          {/* Keyword Search */}
          <div className="relative min-w-[200px] sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ニュース内を検索..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Master-Detail Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Scrollable List of News Headlines (7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2 px-1">
              <span>見出し一覧（クリックで詳細プレビュー）</span>
              <span>{filteredUpdates.length}件中 {activeIndex >= 0 ? activeIndex + 1 : 0}件目を選択</span>
            </div>

            <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1.5 custom-scrollbar">
              {filteredUpdates.length === 0 ? (
                <div className="p-8 text-center rounded-2xl bg-slate-900/50 border border-slate-800 text-slate-400 text-sm">
                  該当するニュースが見つかりませんでした。
                </div>
              ) : (
                filteredUpdates.map((item, idx) => {
                  const isSelected = activeItem?.id === item.id;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedId(item.id)}
                      className={`group relative p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col gap-2 ${
                        isSelected
                          ? "bg-slate-800/90 border-cyan-500/70 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/50"
                          : "bg-slate-900/60 border-slate-800/90 hover:bg-slate-800/50 hover:border-slate-700"
                      }`}
                    >
                      {/* Active Indicator Bar */}
                      {isSelected && (
                        <div className="absolute left-0 top-3 bottom-3 w-1 bg-cyan-400 rounded-r-full shadow-sm shadow-cyan-400" />
                      )}

                      {/* Header Line: Meta Tags */}
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-slate-400 text-[11px] font-medium flex items-center gap-1">
                            <span className="text-slate-500">#{idx + 1}</span>
                            <span>{formatDate(item.publishedAt)}</span>
                          </span>

                          {item.sourceName && (
                            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-950/80 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                              <Building2 className="w-3 h-3 text-cyan-400" />
                              <span>{item.sourceName}</span>
                            </span>
                          )}

                          {item.toolId ? (
                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                              {item.toolId.toUpperCase()}
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                              AI速報
                            </span>
                          )}
                        </div>

                        <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-cyan-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"}`} />
                      </div>

                      {/* Title Headline */}
                      <h3 className={`text-sm sm:text-base font-bold leading-snug line-clamp-2 transition-colors ${
                        isSelected ? "text-cyan-100" : "text-slate-200 group-hover:text-white"
                      }`}>
                        {item.title}
                      </h3>

                      {/* Mobile Inline Summary (Accordion for smaller screens) */}
                      {isSelected && (
                        <div className="lg:hidden mt-2 pt-3 border-t border-slate-700/80 animate-in fade-in">
                          <div className="bg-slate-950/90 rounded-xl p-3.5 border border-cyan-500/20 text-xs text-slate-200 space-y-1.5 whitespace-pre-wrap">
                            <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                              <span>Gemini 3行要約:</span>
                            </div>
                            <div className="leading-relaxed font-sans">{item.summary3Lines}</div>
                          </div>

                          <div className="flex items-center justify-between gap-2 mt-3 pt-2">
                            {item.sourceUrl && (
                              <a
                                href={item.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-cyan-400 hover:underline text-xs font-bold inline-flex items-center gap-1"
                              >
                                <span>公式元記事を見る</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                            {item.toolId && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onSelectToolById(item.toolId!);
                                }}
                                className="px-3 py-1 rounded-lg text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 flex items-center gap-1"
                              >
                                <span>ツール詳細へ</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right: Sticky Detail Preview Panel (5 columns on desktop, hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-24">
            {activeItem ? (
              <div className="glass-panel rounded-2xl p-6 border border-cyan-500/30 bg-slate-900/90 shadow-2xl shadow-cyan-950/30 flex flex-col justify-between min-h-[520px]">
                <div>
                  {/* Top Navigation & Share */}
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                        {activeIndex + 1} / {filteredUpdates.length}
                      </span>
                      <span className="text-xs text-slate-400">詳細プレビュー</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={handlePrev}
                        disabled={activeIndex <= 0}
                        title="前のニュース"
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={activeIndex >= filteredUpdates.length - 1}
                        title="次のニュース"
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      {activeItem.sourceUrl && (
                        <button
                          onClick={() => handleCopyShare(activeItem.sourceUrl!)}
                          title="記事URLをコピー"
                          className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors ml-1"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Metadata Tags */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap text-xs">
                    <span className="text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{formatDate(activeItem.publishedAt)}</span>
                    </span>

                    {activeItem.sourceName && (
                      <span className="px-2.5 py-0.5 rounded-md font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {activeItem.sourceName}
                      </span>
                    )}

                    {activeItem.toolId && (
                      <span className="px-2.5 py-0.5 rounded-md font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        対象: {activeItem.toolId.toUpperCase()}
                      </span>
                    )}
                  </div>

                  {/* News Full Headline */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug mb-5">
                    {activeItem.title}
                  </h3>

                  {/* Gemini 3-Line Summary Card */}
                  <div className="rounded-xl p-4 bg-slate-950/90 border border-cyan-500/30 shadow-inner">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-cyan-400 uppercase tracking-wider mb-2.5">
                      <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                      <span>初心者向け 3行スマート要約</span>
                    </div>

                    <div className="text-sm text-slate-200 leading-relaxed space-y-2 whitespace-pre-wrap font-sans">
                      {activeItem.summary3Lines}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col gap-2.5">
                  {copiedUrl && (
                    <div className="text-center text-xs text-emerald-400 font-semibold mb-1">
                      URLをクリップボードにコピーしました！
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    {activeItem.sourceUrl && (
                      <a
                        href={activeItem.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
                      >
                        <span>公式発表・一次情報で読む</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    {activeItem.toolId && (
                      <button
                        onClick={() => onSelectToolById(activeItem.toolId!)}
                        className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 flex items-center justify-center gap-1.5 transition-all active:scale-95"
                      >
                        <span>AIスペック詳細</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass-panel rounded-2xl p-8 border border-slate-800 text-center text-slate-400 min-h-[400px] flex items-center justify-center">
                <span>左側の見出しをクリックすると詳細が表示されます</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
