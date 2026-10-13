"use client";

import React from "react";
import { Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { t, isEn } = useLanguage();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60 pt-12 pb-8 mt-auto text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center">
              <Compass className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-base text-white tracking-tight">
              {t.siteTitle}
            </span>
            <span className="text-slate-500 text-[11px] ml-2">
              {isEn ? "The Next-Gen AI Compass & Verified Benchmark Hub" : "次世代AI総合羅針盤ポータル＆公式一次情報ベンチマーク"}
            </span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a href="#news-section" className="hover:text-white transition-colors">
              {t.navNews}
            </a>
            <a href="#catalog-section" className="hover:text-white transition-colors">
              {t.navCatalog}
            </a>
            <a href="#prompt-gallery-section" className="hover:text-white transition-colors">
              {t.navPrompts}
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} AI COMPASS. {t.footerRights}
          </div>
          <div className="flex items-center gap-1 font-mono">
            <span>Powered by Next.js, Prisma SQLite & Gemini API</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
