"use client";

import React, { useState } from "react";
import { Copy, Check, Sparkles, BookOpen, Tag } from "lucide-react";
import { PromptItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { getPromptCategoryLabel } from "@/lib/i18n";

interface PromptGallerySectionProps {
  prompts: PromptItem[];
}

export const PromptGallerySection: React.FC<PromptGallerySectionProps> = ({
  prompts,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { t, isEn, lang } = useLanguage();

  const categories = ["all", "ビジネス・企画", "コーディング・設計", "画像生成", "音楽生成", "動画生成", "開発・エディタ"];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredPrompts = selectedCategory === "all"
    ? prompts
    : prompts.filter((p) => p.category.includes(selectedCategory));

  return (
    <section id="prompt-gallery-section" className="py-12 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-2 border border-amber-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t.promptGalleryBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.promptGalleryTitle}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              {t.promptGalleryDesc}
            </p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                  : "bg-slate-800/60 text-slate-400 hover:text-white border border-slate-700/60"
              }`}
            >
              {getPromptCategoryLabel(cat, lang)}
            </button>
          ))}
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="glass-panel rounded-2xl p-5 flex flex-col justify-between card-hover-glow border border-slate-800"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-slate-800 text-cyan-400 border border-slate-700">
                    <Tag className="w-3 h-3" />
                    <span>{getPromptCategoryLabel(prompt.category, lang)}</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {t.promptGalleryRecommended} <strong className="text-slate-200">{prompt.toolName || prompt.toolId}</strong>
                  </span>
                </div>

                <h3 className="font-bold text-white text-base mb-3">
                  {prompt.title}
                </h3>

                {/* Prompt Box */}
                <div className="bg-slate-950/80 rounded-xl p-3.5 mb-3 border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                  {prompt.promptText}
                </div>

                {/* Tips */}
                {prompt.bestPracticeTips && (
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-4 pl-2 border-l-2 border-amber-500/60">
                    💡 <strong className="text-slate-300">Tips: </strong>{prompt.bestPracticeTips}
                  </p>
                )}
              </div>

              {/* Copy Action */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  {isEn
                    ? `Copied: ${prompt.copiedCount} times`
                    : `コピーされた回数: ${prompt.copiedCount}回`}
                </span>
                <button
                  onClick={() => handleCopy(prompt.id, prompt.promptText)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    copiedId === prompt.id
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                      : "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white shadow-md shadow-amber-500/20"
                  }`}
                >
                  {copiedId === prompt.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t.promptGalleryCopySuccess}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.promptGalleryCopyBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

