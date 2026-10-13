"use client";

import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  RefreshCw
} from "lucide-react";
import { UpdateItem, PromptItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  updates: UpdateItem[];
  dailyPrompt?: PromptItem | null;
  onOpenFreeInput: () => void;
  onOpenQuiz: () => void;
  onScrollToCatalog: () => void;
  onSelectTool: (toolId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  updates,
  onOpenFreeInput,
  onOpenQuiz,
  onSelectTool,
}) => {
  const [currentUpdateIdx, setCurrentUpdateIdx] = useState(0);
  const { t, isEn } = useLanguage();

  // ニュースティッカー自動スライド
  useEffect(() => {
    if (updates.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentUpdateIdx((prev) => (prev + 1) % updates.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [updates.length]);

  const currentUpdate = updates[currentUpdateIdx];

  return (
    <div className="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
        
        {/* Left: 1-Line Live Feed Ticker */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-[11px] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
            <Clock className="w-3 h-3 text-cyan-400" />
            <span>{currentUpdate?.sourceName || (isEn ? "OFFICIAL" : "公式一次情報")}</span>
          </span>

          {currentUpdate ? (
            <div className="flex items-center gap-1.5 truncate text-slate-300">
              <span className="truncate font-medium">{currentUpdate.title}</span>
              {currentUpdate.toolId && (
                <button
                  onClick={() => onSelectTool(currentUpdate.toolId!)}
                  className="text-cyan-400 hover:text-cyan-300 font-bold underline shrink-0 inline-flex items-center gap-0.5 text-[11px] cursor-pointer"
                >
                  <span>{isEn ? "View Specs" : "詳細スペック"}</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </button>
              )}
            </div>
          ) : (
            <span className="text-slate-400">
              {isEn ? "All 60 AI specs grounded from official sources." : "全60ツール公式一次情報グラウンディング済み"}
            </span>
          )}
        </div>

        {/* Right: Clean Quick Tools & Status */}
        <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-auto text-slate-400">
          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isEn ? "100% Grounded in Official Docs" : "公式一次情報・ハルシネーション防止基準準拠"}</span>
          </div>

          <div className="h-3 w-px bg-slate-800 hidden md:block" />

          <button
            onClick={onOpenFreeInput}
            className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors flex items-center gap-1 text-[11px] font-semibold cursor-pointer"
            title={isEn ? "Find best AI by free text purpose" : "やりたい事からAIを逆引き診断"}
          >
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>{isEn ? "Purpose Finder" : "目的から逆引き"}</span>
          </button>

          <button
            onClick={onOpenQuiz}
            className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors flex items-center gap-1 text-[11px] font-semibold cursor-pointer"
            title={isEn ? "Quick 4-step quiz to choose AI" : "4問であなたに最適なAIを判定"}
          >
            <span>{isEn ? "Quiz" : "4問診断"}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
