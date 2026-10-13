"use client";

import React from "react";
import { X, Bookmark, ExternalLink, Trash2, ArrowRight, Layers } from "lucide-react";
import { ToolItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { getCategoryLabel } from "@/lib/i18n";

interface MyStackModalProps {
  savedTools: ToolItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (id: string) => void;
  onSelectTool: (tool: ToolItem) => void;
  onCompareAll: () => void;
}

export const MyStackModal: React.FC<MyStackModalProps> = ({
  savedTools,
  isOpen,
  onClose,
  onRemove,
  onSelectTool,
  onCompareAll,
}) => {
  const { t, isEn, lang } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-400" />
            <h3 className="font-extrabold text-lg text-white">
              {isEn ? `My AI Stack (${savedTools.length} Saved)` : `My AI Stack (${savedTools.length}ツール保存中)`}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-3 custom-scrollbar">
          {savedTools.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs">
              <Bookmark className="w-8 h-8 mx-auto mb-2 opacity-40 text-amber-400" />
              <p>{isEn ? "No tools saved to your stack yet." : "まだ保存されたAIツールはありません。"}</p>
              <p className="mt-1 text-slate-500">
                {isEn ? "Click the bookmark icon on any tool card in the catalog to add it here." : "カタログのブックマークアイコンをクリックして、愛用ツールを登録してください。"}
              </p>
            </div>
          ) : (
            savedTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors"
              >
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onSelectTool(tool);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white hover:text-cyan-400 transition-colors">
                      {tool.name}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                      {getCategoryLabel(tool.category, lang)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                    {tool.summary}
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onRemove(tool.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors cursor-pointer"
                    title={isEn ? "Remove from stack" : "スタックから削除"}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedTools.length > 0 && (
          <div className="p-4 border-t border-slate-800 flex items-center justify-between bg-slate-950/40">
            <span className="text-xs text-slate-400">
              {isEn ? `${savedTools.length} tools in stack` : `計 ${savedTools.length} ツール`}
            </span>
            <button
              onClick={() => {
                onClose();
                onCompareAll();
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isEn ? "Compare Selected" : "まとめて比較する"}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
