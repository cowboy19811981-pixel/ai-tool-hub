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
        {/* News Flash Ticker (12時間毎自動更新) */}
        {currentUpdate && (
          <div className="mb-8 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-xs sm:text-sm text-slate-200 max-w-full overflow-hidden shadow-lg shadow-cyan-500/10">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-[11px] shrink-0 uppercase tracking-wider">
              <Clock className="w-3 h-3 animate-spin" />
              12H LIVE UPDATE
            </span>
            <span className="truncate font-medium text-slate-100">
              {currentUpdate.title}
            </span>
            <button
              onClick={() => onSelectTool(currentUpdate.toolId)}
              className="text-cyan-400 hover:text-cyan-300 font-semibold underline shrink-0 ml-1 inline-flex items-center gap-0.5 text-xs"
            >
              詳細 <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>主要6分野 × 各10種 ＝ 計60ツール完全データベース搭載</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight sm:leading-tight">
            迷えるすべての人のための、
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              次世代AI総合羅針盤。
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            「結局どれを使えばいい？」「有料版は何が違う？」
            <br className="hidden sm:inline" />
            最新バージョン特性、無料vs有料の決定打、分野別ランキング、実践プロンプトまでを徹底網羅。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenFreeInput}
              className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>やりたいことAI自由診断</span>
            </button>
            <button
              onClick={onOpenQuiz}
              className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 shadow-md hover:border-cyan-500/40 transition-all duration-200 flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>30秒適性診断（4問）</span>
            </button>
            <button
              onClick={onScrollToCatalog}
              className="px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>60種AI一覧を見る</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feature Grid / Retention Hooks: Today's Pick & Prompt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-8">
          {/* Card 1: 3大コアバリュー保証 */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl relative overflow-hidden card-hover-glow">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base sm:text-lg mb-2">
              全60種・バージョン特性比較
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              「GPT-4o vs o1」「Claude 3.5」「FLUX.1」「Suno v4」など、各ツールの現行最新バージョンと前世代からの進化点を徹底記載。
            </p>
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>無料枠 vs 有料版の制限・決定打も網羅</span>
            </div>
          </div>

          {/* Card 2: 12時間毎の自動更新＆動的ランキング */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl relative overflow-hidden card-hover-glow">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base sm:text-lg mb-2">
              12H自動更新＆動的ランキング
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              公式リリースノートを12時間ごとに自動取得＆Gemini要約。直近で進化したツールが上位に浮上するリアルタイムランキング。
            </p>
            <div className="flex items-center gap-2 text-xs text-violet-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>世界のユーザー規模 ＆ 当サイト登録数集計</span>
            </div>
          </div>

          {/* Card 3: Today's 日替わりプロンプト */}
          {dailyPrompt && (
            <div className="glass-panel p-5 sm:p-6 rounded-2xl relative overflow-hidden card-hover-glow border-amber-500/30">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20">
                  <Flame className="w-3.5 h-3.5" />
                  <span>TODAY'S PROMPT</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">
                  推奨: {dailyPrompt.toolName || "汎用"}
                </span>
              </div>
              <h4 className="font-bold text-white text-sm sm:text-base mb-1.5 truncate">
                {dailyPrompt.title}
              </h4>
              <div className="bg-slate-900/80 rounded-xl p-3 mb-3 border border-slate-800 text-xs text-slate-300 font-mono line-clamp-2">
                {dailyPrompt.promptText}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  コピーしてすぐ使えます
                </span>
                <button
                  onClick={() => handleCopyPrompt(dailyPrompt.promptText)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 flex items-center gap-1 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>コピー完了!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>ワンクリックコピー</span>
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
