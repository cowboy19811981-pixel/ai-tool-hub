"use client";

import React from "react";
import { Layers, X, ArrowRight } from "lucide-react";
import { ToolItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface ComparisonDockProps {
  compareTools: ToolItem[];
  onRemove: (toolId: string) => void;
  onClear: () => void;
  onOpenModal: () => void;
}

export const ComparisonDock: React.FC<ComparisonDockProps> = ({
  compareTools,
  onRemove,
  onClear,
  onOpenModal,
}) => {
  const { t, isEn } = useLanguage();

  if (compareTools.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4 animate-in fade-in slide-in-from-bottom-5 duration-200">
      <div className="glass-panel bg-slate-900/90 border border-cyan-500/40 rounded-2xl p-3 shadow-2xl shadow-cyan-950/80 flex items-center justify-between gap-3 backdrop-blur-xl">
        <div className="flex items-center gap-2 overflow-x-auto">
          <div className="flex items-center gap-1.5 pl-1 pr-2 border-r border-slate-700/80">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-white whitespace-nowrap">
              {isEn ? `Compare (${compareTools.length}/3)` : `比較 (${compareTools.length}/3)`}
            </span>
          </div>

          {compareTools.map((tool) => (
            <div
              key={tool.id}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200 shrink-0"
            >
              <span className="font-bold text-cyan-300">#{tool.categoryRank}</span>
              <span className="font-semibold truncate max-w-[90px]">{tool.name}</span>
              <button
                onClick={() => onRemove(tool.id)}
                className="text-slate-400 hover:text-rose-400 ml-1 cursor-pointer"
                title={isEn ? "Remove from comparison" : "比較から除外"}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onClear}
            className="text-[11px] text-slate-400 hover:text-white px-2 py-1 cursor-pointer"
          >
            {t.dockClear}
          </button>
          <button
            onClick={onOpenModal}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/30 flex items-center gap-1 transition-all cursor-pointer"
          >
            <span>{t.dockCompareNow}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
