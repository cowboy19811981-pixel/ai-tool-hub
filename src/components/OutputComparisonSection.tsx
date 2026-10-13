"use client";

import React, { useState } from "react";
import { Eye, CheckCircle2 } from "lucide-react";
import { GalleryItemType } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface OutputComparisonSectionProps {
  galleries: GalleryItemType[];
}

export const OutputComparisonSection: React.FC<OutputComparisonSectionProps> = ({
  galleries,
}) => {
  const [selectedGalleryId, setSelectedGalleryId] = useState<string>(
    galleries[0]?.id || ""
  );
  const { isEn } = useLanguage();

  const currentGallery = galleries.find((g) => g.id === selectedGalleryId) || galleries[0];

  if (!currentGallery) return null;

  return (
    <section id="output-comparison-section" className="py-14 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-2.5 border border-indigo-500/20">
            <Eye className="w-3.5 h-3.5" />
            <span>BENCHMARK SHOWCASE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {isEn ? "Identical Prompt Output Benchmarks" : "同一指示での出力比較ギャラリー"}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1.5">
            {isEn 
              ? "See how each flagship AI interprets and renders identical complex prompts."
              : "まったく同じプロンプトを与えたとき、各AIの描画・生成アプローチがどう異なるのかを徹底検証。"}
          </p>
        </div>

        {/* Theme Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {galleries.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedGalleryId(item.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
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
            {isEn ? "Benchmark Test Prompt Used:" : "検証に使用した共通プロンプト:"}
          </div>
          <code className="text-xs font-mono text-slate-200">
            {currentGallery.inputPrompt}
          </code>
        </div>

        {/* Comparisons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentGallery.comparisons.map((c, i) => (
            <div
              key={i}
              className="glass-panel p-5 rounded-2xl border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-extrabold text-lg text-white">
                    {c.toolName}
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    {c.visualStyle}
                  </span>
                </div>

                <div className="space-y-2 mb-4 text-xs">
                  <div className="flex items-start gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-emerald-300">{isEn ? "Output Summary: " : "出力結果: "}</strong>
                      {c.outputSummary}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <span className="text-[11px] text-indigo-300 font-semibold block">
                  {isEn ? "Pros & Cons: " : "評価・特徴: "}
                  <span className="text-slate-300 font-normal">{c.prosVsCons}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
