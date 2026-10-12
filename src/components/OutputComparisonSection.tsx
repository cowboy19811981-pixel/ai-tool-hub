"use client";

import React, { useState } from "react";
import { Sparkles, Eye, CheckCircle2, AlertCircle } from "lucide-react";
import { GalleryItemType } from "@/types";

interface OutputComparisonSectionProps {
  galleries: GalleryItemType[];
}

export const OutputComparisonSection: React.FC<OutputComparisonSectionProps> = ({
  galleries,
}) => {
  const [selectedGalleryId, setSelectedGalleryId] = useState<string>(
    galleries[0]?.id || ""
  );

  const currentGallery = galleries.find((g) => g.id === selectedGalleryId) || galleries[0];

  if (!currentGallery) return null;

  return (
    <section id="output-comparison-section" className="py-12 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-2 border border-indigo-500/20">
            <Eye className="w-3.5 h-3.5" />
            <span>BENCHMARK SHOWCASE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            同一指示での出力比較ギャラリー
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            まったく同じプロンプトを与えたとき、各AIの描画・生成アプローチがどう異なるのかを徹底検証。
          </p>
        </div>

        {/* Theme Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {galleries.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedGalleryId(item.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedGalleryId === item.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-slate-800/60 text-slate-300 hover:bg-slate-800 border border-slate-700/60"
              }`}
            >
              {item.theme}
            </button>
          ))}
        </div>

        {/* Selected Theme Prompt Display */}
        <div className="glass-panel p-4 rounded-xl mb-6 border border-slate-700">
          <div className="text-xs text-indigo-400 font-bold mb-1">
            検証に使用した共通プロンプト:
          </div>
          <code className="text-xs font-mono text-slate-200">
            &ldquo;{currentGallery.inputPrompt}&rdquo;
          </code>
        </div>

        {/* 3-Tool Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {currentGallery.comparisons.map((comp, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 border border-slate-800 flex flex-col justify-between card-hover-glow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-extrabold text-base sm:text-lg text-white">
                    {comp.toolName}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {comp.visualStyle.split("・")[0]}
                  </span>
                </div>

                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 mb-4 text-xs leading-relaxed text-slate-300">
                  <div className="font-semibold text-slate-200 mb-1">出力の特徴:</div>
                  {comp.outputSummary}
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-slate-400 text-[11px] block">作風・レンダリング傾向:</span>
                    <span className="text-slate-300">{comp.visualStyle}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 mt-4 text-xs">
                <span className="font-bold text-cyan-400 text-[11px] block mb-1">比較レビュー:</span>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  {comp.prosVsCons}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
