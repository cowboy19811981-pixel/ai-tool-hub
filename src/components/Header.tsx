"use client";

import React, { useState, useEffect } from "react";
import { 
  Compass, 
  Search, 
  Bookmark, 
  Sun, 
  Moon, 
  Sparkles, 
  Menu, 
  X, 
  SlidersHorizontal,
  Layers,
  Clock,
  Languages
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  savedToolIds: string[];
  onOpenMyStack: () => void;
  onOpenQuiz: () => void;
  onOpenFreeInput: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  savedToolIds,
  onOpenMyStack,
  onOpenQuiz,
  onOpenFreeInput,
}) => {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t, isEn } = useLanguage();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDark]);

  return (
    <header className="sticky top-0 z-40 glass-nav transition-colors duration-200 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  {t.siteTitle}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {isEn ? "GLOBAL HUB" : "羅針盤ポータル"}
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-300">
          <a href="#news-section" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>{t.navNews}</span>
          </a>
          <a href="#catalog-section" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>{t.navCatalog}</span>
          </a>
        </nav>

        {/* Search Bar (Center / Desktop) */}
        <div className="hidden md:flex flex-1 max-w-sm mx-2 relative">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/80 dark:bg-slate-900/90 border border-slate-700/80 rounded-full pl-10 pr-4 py-2 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher (JP / EN Toggle) */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs bg-slate-800/90 hover:bg-slate-700 border border-cyan-500/40 text-cyan-300 hover:text-cyan-100 shadow-md transition-all active:scale-95 cursor-pointer"
            title={isEn ? "日本語に切り替える" : "Switch to English"}
          >
            <Languages className="w-4 h-4 text-cyan-400" />
            <span className="font-mono">{isEn ? "🇺🇸 EN" : "🇯🇵 JP"}</span>
          </button>

          {/* AI診断ボタン */}
          <button
            onClick={onOpenFreeInput}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 transition-all duration-200"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.freeConsult}</span>
          </button>

          <button
            onClick={onOpenQuiz}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.startQuiz}</span>
          </button>

          {/* My AI Stack (お気に入り) */}
          <button
            onClick={onOpenMyStack}
            className="relative p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
            title={t.myStack}
          >
            <Bookmark className="w-4 h-4 text-amber-400" />
            {savedToolIds.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow">
                {savedToolIds.length}
              </span>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-800/80 text-slate-300"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Search & Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-800 px-4 py-3 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => {
                onOpenFreeInput();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-cyan-600 text-white"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.freeConsult}</span>
            </button>
            <button
              onClick={() => {
                onOpenQuiz();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.startQuiz}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
