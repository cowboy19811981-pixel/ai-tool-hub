"use client";

import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Flame, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  Zap,
  TrendingUp,
  Cpu
} from "lucide-react";
import { UpdateItem, PromptItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  updates: UpdateItem[];
  dailyPrompt: PromptItem | null;
  onOpenFreeInput: () => void;
  onOpenQuiz: () => void;
  onScrollToCatalog: () => void;
  onSelectTool: (toolId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  updates,
  dailyPrompt,
  onOpenFreeInput,
  onOpenQuiz,
  onScrollToCatalog,
  onSelectTool,
}) => {
  const [currentUpdateIdx, setCurrentUpdateIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const { t, isEn } = useLanguage();

  // ニュースティッカー自動スライド
  useEffect(() => {
    if (updates.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentUpdateIdx((prev) => (prev + 1) % updates.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [updates.length]);

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentUpdate = updates[currentUpdateIdx];

  return (
    <section className="relative pt-8 pb-12 overflow-hidden">
      {/* Background Aurora Glow Effects */}
      <div className="aurora-glow top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full animate-pulse-slow pointer-events-none" />
      <div className="aurora-glow top-12 right-1/4 w-96 h-96 bg-violet-600 rounded-full animate-pulse-slow pointer-events-none delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* News Flash Ticker */}
        {currentUpdate && (
          <div className="mb-8 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-xs sm:text-sm text-slate-200 max-w-full overflow-hidden shadow-lg shadow-cyan-500/10">
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-[11px] shrink-0 uppercase tracking-wider border border-cyan-500/30">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span>{currentUpdate.sourceName || (isEn ? "Live Feed" : "公式速報")}</span>
            </span>
            <span className="truncate font-medium text-slate-100">
              {currentUpdate.title}
            </span>
            {currentUpdate.toolId ? (
              <button
                onClick={() => onSelectTool(currentUpdate.toolId!)}
                className="text-cyan-400 hover:text-cyan-300 font-semibold underline shrink-0 ml-1 inline-flex items-center gap-0.5 text-xs"
              >
                {isEn ? "Specs" : "詳細"} <ArrowRight className="w-3 h-3" />
              </button>
            ) : (
              <a
                href="#news-section"
                className="text-cyan-400 hover:text-cyan-300 font-semibold underline shrink-0 ml-1 inline-flex items-center gap-0.5 text-xs"
              >
                {isEn ? "Feed" : "ニュース一覧"} <ArrowRight className="w-3 h-3" />
              </a>
            )}
          </div>
        )}

        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-bold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.heroBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight sm:leading-tight">
            {t.heroTitle1}
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              {t.heroTitle2}
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            {t.heroDesc}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenFreeInput}
              className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.heroBtnDiagnose}</span>
            </button>
            <button
              onClick={onOpenQuiz}
              className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 shadow-md hover:border-cyan-500/40 transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>{t.heroBtnQuiz}</span>
            </button>
            <button
              onClick={onScrollToCatalog}
              className="px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>{t.heroBtnExplore}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feature Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-8">
          {/* Card 1 */}
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden card-hover-glow border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-white text-lg sm:text-xl mb-2">
              {t.heroFeature1Title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 font-normal">
              {t.heroFeature1Desc}
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-cyan-400 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isEn ? "Verified Limits & Cost Comparisons" : "無料枠 vs 有料版の制限・決定打も網羅"}</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden card-hover-glow border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-white text-lg sm:text-xl mb-2">
              {t.heroFeature2Title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 font-normal">
              {t.heroFeature2Desc}
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-violet-400 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isEn ? "Global User Base & In-App Activity Stats" : "世界のユーザー規模 ＆ 当サイト登録数集計"}</span>
            </div>
          </div>

          {/* Card 3: Today's Prompt */}
          {dailyPrompt && (
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden card-hover-glow border-amber-500/30">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-bold border border-amber-500/30">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{t.heroFeature3Badge}</span>
                </div>
                <span className="text-xs text-slate-300 font-mono font-semibold">
                  {t.heroFeature3Rec}: {dailyPrompt.toolName || "All"}
                </span>
              </div>
              <h4 className="font-extrabold text-white text-base mb-2 truncate">
                {dailyPrompt.title}
              </h4>
              <div className="bg-slate-900/90 rounded-xl p-3.5 mb-3 border border-slate-800 text-xs sm:text-sm text-slate-200 font-mono line-clamp-2 leading-relaxed">
                {dailyPrompt.promptText}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {isEn ? "Instant production prompt" : "コピーしてすぐ使えます"}
                </span>
                <button
                  onClick={() => handleCopyPrompt(dailyPrompt.promptText)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.copyPrompt}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
