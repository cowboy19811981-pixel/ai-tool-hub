"use client";

import React, { useState, useEffect } from "react";
import { 
  Clock, 
  Compass, 
  HelpCircle, 
  Sparkles, 
  Layers
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface QuickNavBarProps {
  onOpenQuiz: () => void;
  newsCount: number;
  toolsCount: number;
}

export const QuickNavBar: React.FC<QuickNavBarProps> = ({
  onOpenQuiz,
  newsCount,
  toolsCount,
}) => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const { t, isEn } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newsEl = document.getElementById("news-section");
      const catalogEl = document.getElementById("catalog-section");
      const galleryEl = document.getElementById("output-comparison-section");
      const promptEl = document.getElementById("prompt-gallery-section");

      if (promptEl && scrollY >= promptEl.offsetTop - 200) {
        setActiveSection("prompts");
      } else if (galleryEl && scrollY >= galleryEl.offsetTop - 200) {
        setActiveSection("galleries");
      } else if (catalogEl && scrollY >= catalogEl.offsetTop - 200) {
        setActiveSection("catalog");
      } else if (newsEl && scrollY >= newsEl.offsetTop - 200) {
        setActiveSection("news");
      } else {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-16 z-30 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 py-2 overflow-x-auto scrollbar-none text-xs sm:text-sm">
          
          {/* Quick Anchor Navigation Links */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => scrollTo("news-section")}
              className={`px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSection === "news"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent"
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isEn ? "⚡ Live Primary Feed" : "⚡ リアルタイム速報"}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono">
                {newsCount}
              </span>
            </button>

            <button
              onClick={() => scrollTo("catalog-section")}
              className={`px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSection === "catalog"
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/50 shadow-sm shadow-indigo-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent"
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-indigo-400" />
              <span>{isEn ? "🧭 AI Catalog" : "🧭 AIツールカタログ"}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono">
                {toolsCount}
              </span>
            </button>

            <button
              onClick={() => scrollTo("output-comparison-section")}
              className={`px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSection === "galleries"
                  ? "bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/50 shadow-sm shadow-fuchsia-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent"
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>{isEn ? "🖼️ Image Benchmarks" : "🖼️ 画像出力比較"}</span>
            </button>

            <button
              onClick={() => scrollTo("prompt-gallery-section")}
              className={`px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSection === "prompts"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm shadow-amber-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{isEn ? "💡 Prompt Vault" : "💡 実践プロンプト集"}</span>
            </button>
          </div>

          {/* Quick Quiz Callout */}
          <div className="shrink-0 pl-2">
            <button
              onClick={onOpenQuiz}
              className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 hover:from-cyan-500/30 hover:to-indigo-500/30 text-cyan-300 border border-cyan-500/40 flex items-center gap-1 transition-all cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">{t.startQuiz}</span>
              <span className="sm:hidden">{isEn ? "Quiz" : "診断"}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
