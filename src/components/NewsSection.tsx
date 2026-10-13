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
  Building2, 
  Share2,
  FileText,
  BadgeCheck
} from "lucide-react";
import { UpdateItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

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
  const [selectedScope, setSelectedScope] = useState<"news" | "models" | "pricing" | "all">("news");

  const { t, isEn, lang } = useLanguage();

  // 外部からの updates 変更に同期
  useEffect(() => {
    setCurrentUpdates(updates);
    if (!selectedId && updates.length > 0) {
      setSelectedId(updates[0].id);
    }
  }, [updates]);

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
        setMessage(data.message || (isEn ? `[${selectedScope}] synced successfully!` : `[${selectedScope}] の同期が完了しました！`));
      } else {
        setMessage(data.message || (isEn ? "Sync failed." : "同期処理中にエラーが発生しました。"));
      }
    } catch (e) {
      setMessage(isEn ? "Network error occurred." : "通信エラーが発生しました。");
    } finally {
      setIsUpdating(false);
      setTimeout(() => setMessage(null), 6000);
    }
  };

  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      if (isEn) {
        return d.toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
      }
      return `${d.getMonth() + 1}月${d.getDate()}日 ${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
    } catch {
      return isoStr;
    }
  };

  // ドメイン抽出ヘルパー
  const getDomainFromUrl = (urlStr?: string | null): string => {
    if (!urlStr) return "";
    try {
      const u = new URL(urlStr);
      return u.hostname.replace(/^www\./, "");
    } catch {
      return "";
    }
  };

  // フィルタリング処理
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
    <section id="news-section" className="py-14 border-t border-slate-800/80 relative bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-bold mb-2.5 border border-cyan-500/20">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>{t.newsBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>{t.newsTitle}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE ({filteredUpdates.length})
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1.5 max-w-3xl leading-relaxed">
              {t.newsDesc}
            </p>
          </div>

          {/* Tiered Sync Controls */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 shadow-md">
            <select
              value={selectedScope}
              onChange={(e) => setSelectedScope(e.target.value as any)}
              disabled={isUpdating}
              aria-label="Select update scope"
              className="bg-slate-950 border border-slate-700/80 text-xs sm:text-sm text-cyan-200 rounded-xl px-3 py-2 font-semibold focus:outline-none focus:border-cyan-400 cursor-pointer"
            >
              <option value="news">{t.syncScopeNews}</option>
              <option value="models">{t.syncScopeModels}</option>
              <option value="pricing">{t.syncScopePricing}</option>
              <option value="all">{t.syncScopeAll}</option>
            </select>
            <button
              onClick={handleManualUpdate}
              disabled={isUpdating}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-2 transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50 active:scale-95 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isUpdating ? "animate-spin" : ""}`} />
              <span>{isUpdating ? t.syncingButton : t.syncRunButton}</span>
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
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                filter === "all"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t.newsTabAll} ({currentUpdates.length})</span>
            </button>
            <button
              onClick={() => setFilter("news")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                filter === "news"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
              }`}
            >
              <Globe2 className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.newsTabNews}</span>
            </button>
            <button
              onClick={() => setFilter("update")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                filter === "update"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
              }`}
            >
              <Wrench className="w-3.5 h-3.5 text-purple-400" />
              <span>{t.newsTabUpdates}</span>
            </button>
          </div>

          {/* Keyword Search */}
          <div className="relative min-w-[220px] sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.newsSearchPlaceholder}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Master-Detail Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Scrollable List of News Headlines (6.5 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2.5 px-1">
              <span>{t.newsHeadlinesTitle}</span>
              <span className="font-mono text-cyan-400">
                {activeIndex >= 0 ? `${activeIndex + 1} / ${filteredUpdates.length} ${t.newsSelectedOf}` : ""}
              </span>
            </div>

            <div className="space-y-3 max-h-[680px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredUpdates.length === 0 ? (
                <div className="p-10 text-center rounded-2xl bg-slate-900/50 border border-slate-800 text-slate-400 text-sm">
                  {t.newsEmpty}
                </div>
              ) : (
                filteredUpdates.map((item, idx) => {
                  const isSelected = activeItem?.id === item.id;
                  const domain = getDomainFromUrl(item.sourceUrl);

                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedId(item.id)}
                      className={`group relative p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col gap-2.5 ${
                        isSelected
                          ? "bg-slate-800/95 border-cyan-400 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-400/60"
                          : "bg-slate-900/70 border-slate-800/90 hover:bg-slate-800/60 hover:border-slate-700"
                      }`}
                    >
                      {/* Active Indicator Bar */}
                      {isSelected && (
                        <div className="absolute left-0 top-3.5 bottom-3.5 w-1.5 bg-cyan-400 rounded-r-full shadow-md shadow-cyan-400" />
                      )}

                      {/* Header Line: Meta Tags */}
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-slate-400 text-[11px] font-medium flex items-center gap-1">
                            <span className="text-slate-500 font-bold">#{idx + 1}</span>
                            <span>{formatDate(item.publishedAt)}</span>
                          </span>

                          {item.sourceName && (
                            <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-950 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                              <Building2 className="w-3 h-3 text-cyan-400" />
                              <span>{item.sourceName}</span>
                            </span>
                          )}

                          {item.toolId ? (
                            <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                              {item.toolId.toUpperCase()}
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                              {isEn ? "INDUSTRY" : "AI業界"}
                            </span>
                          )}
                        </div>

                        <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-cyan-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"}`} />
                      </div>

                      {/* Title Headline */}
                      <h3 className={`text-sm sm:text-base font-bold leading-snug line-clamp-2 transition-colors ${
                        isSelected ? "text-cyan-50" : "text-slate-200 group-hover:text-white"
                      }`}>
                        {item.title}
                      </h3>

                      {/* Footer Row in Card */}
                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
                        {domain && (
                          <span className="font-mono text-slate-400 flex items-center gap-1">
                            <BadgeCheck className="w-3 h-3 text-cyan-400" />
                            <span>{domain}</span>
                          </span>
                        )}
                        <span className="text-cyan-400 group-hover:underline text-[11px] font-semibold flex items-center gap-1 ml-auto">
                          <span>{isEn ? "Read Smart Summary" : "要約を読む"}</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right: Sticky Detail Preview Panel (5.5 cols on desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-24">
            {activeItem ? (
              <div className="glass-panel rounded-2xl p-6 border-2 border-cyan-500/40 bg-slate-900/95 shadow-2xl shadow-cyan-950/40 flex flex-col justify-between min-h-[560px]">
                <div>
                  {/* Top Navigation & Share */}
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-400 font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30">
                        {activeIndex + 1} / {filteredUpdates.length}
                      </span>
                      <span className="text-xs font-bold text-slate-300">{t.newsPreviewTitle}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={handlePrev}
                        disabled={activeIndex <= 0}
                        title={isEn ? "Previous" : "前のニュース"}
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={activeIndex >= filteredUpdates.length - 1}
                        title={isEn ? "Next" : "次のニュース"}
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      {activeItem.sourceUrl && (
                        <button
                          onClick={() => handleCopyShare(activeItem.sourceUrl!)}
                          title={isEn ? "Copy URL" : "記事URLをコピー"}
                          className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors ml-1 cursor-pointer"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Metadata Tags */}
                  <div className="flex items-center gap-2 mb-3.5 flex-wrap text-xs">
                    <span className="text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{formatDate(activeItem.publishedAt)}</span>
                    </span>

                    {activeItem.sourceName && (
                      <span className="px-2.5 py-0.5 rounded-md font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        {activeItem.sourceName}
                      </span>
                    )}

                    {activeItem.toolId && (
                      <span className="px-2.5 py-0.5 rounded-md font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {isEn ? "Tool: " : "対象: "}{activeItem.toolId.toUpperCase()}
                      </span>
                    )}
                  </div>

                  {/* News Full Headline */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug mb-5">
                    {activeItem.title}
                  </h3>

                  {/* Primary Source Summary Card (元ソースの要約) */}
                  <div className="rounded-2xl p-5 bg-slate-950 border border-cyan-500/35 shadow-inner mb-4">
                    <div className="flex items-center justify-between gap-2 text-xs font-extrabold text-cyan-400 uppercase tracking-wider mb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span>{t.newsSmartSummaryBadge}</span>
                      </div>
                      <span className="text-[10px] text-cyan-300/80 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        Verified Summary
                      </span>
                    </div>

                    <div className="text-sm text-slate-200 leading-relaxed space-y-2.5 whitespace-pre-wrap font-sans">
                      {activeItem.summary3Lines}
                    </div>
                  </div>

                  {/* Source Metadata Banner */}
                  {activeItem.sourceUrl && (
                    <div className="flex items-center justify-between text-xs text-slate-400 px-3 py-2 rounded-xl bg-slate-850 border border-slate-800">
                      <span className="flex items-center gap-1.5 font-medium">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                        <span>{isEn ? "Source Domain:" : "情報発信元:"}</span>
                        <strong className="text-slate-200 font-mono">{getDomainFromUrl(activeItem.sourceUrl)}</strong>
                      </span>
                      <span className="text-emerald-400 flex items-center gap-1 text-[11px] font-bold">
                        <BadgeCheck className="w-3.5 h-3.5" />
                        <span>{isEn ? "Primary Source" : "一次情報確認済"}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom Actions: Visit Original Source Button */}
                <div className="pt-5 mt-5 border-t border-slate-800 flex flex-col gap-2.5">
                  {copiedUrl && (
                    <div className="text-center text-xs text-emerald-400 font-semibold mb-1">
                      {t.newsCopiedMessage}
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    {activeItem.sourceUrl && (
                      <a
                        href={activeItem.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25 active:scale-95 cursor-pointer"
                      >
                        <span>{t.newsSourceButton}</span>
                        <ExternalLink className="w-4 h-4 text-slate-950" />
                      </a>
                    )}

                    {activeItem.toolId && (
                      <button
                        onClick={() => onSelectToolById(activeItem.toolId!)}
                        className="px-4 py-3 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                      >
                        <span>{t.newsToToolButton}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
