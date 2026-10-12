"use client";

import React, { useState } from "react";
import { 
  Clock, 
  ExternalLink, 
  RefreshCw, 
  Sparkles, 
  Newspaper, 
  ArrowRight,
  CheckCircle2,
  Calendar
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
  const [message, setMessage] = useState<string | null>(null);

  const handleManualUpdate = async () => {
    setIsUpdating(true);
    setMessage(null);
    try {
      const res = await fetch("/api/cron/update");
      const data = await res.json();
      if (res.ok && data.update) {
        setCurrentUpdates((prev) => [data.update, ...prev]);
        setMessage("最新のAIアップデートニュースを取得・要約しました！");
      } else {
        setMessage(data.message || "更新が完了しました。");
      }
    } catch (e) {
      setMessage("通信エラーが発生しました。");
    } finally {
      setIsUpdating(false);
      setTimeout(() => setMessage(null), 4000);
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

  return (
    <section id="news-section" className="py-12 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-bold mb-2 border border-cyan-500/20">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>12-HOUR AUTOMATED TIMELINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              最新AIニュース＆アップデート速報
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1">
              各AIの公式リリース情報を12時間ごとに自動収集。Geminiが初心者向けに3行要約してお届けします。
            </p>
          </div>

          {/* Manual Refresh Button */}
          <button
            onClick={handleManualUpdate}
            disabled={isUpdating}
            className="self-start sm:self-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 flex items-center gap-2 transition-all shadow-md disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 text-cyan-400 ${isUpdating ? "animate-spin" : ""}`} />
            <span>{isUpdating ? "最新情報を取得中..." : "最新情報を取得・再要約"}</span>
          </button>
        </div>

        {/* Status Message */}
        {message && (
          <div className="mb-6 p-4 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-200 text-sm font-semibold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            <span>{message}</span>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUpdates.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between card-hover-glow bg-slate-900/60"
            >
              <div>
                {/* Meta Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{formatDate(item.publishedAt)}</span>
                  </span>
                  <button
                    onClick={() => onSelectToolById(item.toolId)}
                    className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/25 transition-colors"
                  >
                    対象: {item.toolId.toUpperCase()}
                  </button>
                </div>

                {/* News Title */}
                <h3 className="font-extrabold text-base sm:text-lg text-white mb-4 leading-snug">
                  {item.title}
                </h3>

                {/* 3-Line Summary Box */}
                <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/90 text-xs sm:text-sm text-slate-200 leading-relaxed space-y-1.5 whitespace-pre-wrap font-sans">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>初心者向け3行要約:</span>
                  </div>
                  {item.summary3Lines}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between gap-2 text-xs sm:text-sm">
                {item.sourceUrl ? (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>公式ソース</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span />
                )}

                <button
                  onClick={() => onSelectToolById(item.toolId)}
                  className="px-3.5 py-1.5 rounded-lg font-bold bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 flex items-center gap-1 transition-all"
                >
                  <span>このAIの詳細へ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
