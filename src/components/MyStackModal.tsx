"use client";

import React from "react";
import { X, Bookmark, ExternalLink, Trash2, ArrowRight, Layers } from "lucide-react";
import { ToolItem } from "@/types";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-400" />
            <h3 className="font-extrabold text-lg text-white">
              My AI Stack ({savedTools.length}ツール保存中)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-3">
          {savedTools.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs">
              <Bookmark className="w-8 h-8 mx-auto mb-2 opacity-40 text-amber-400" />
              <p>まだ保存されたAIツールはありません。</p>
              <p className="mt-1 text-slate-500">カタログのブックマークアイコンをクリックして、愛用ツールを登録してください。</p>
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
                    onSelectTool(tool);
                    onClose();
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-white text-sm hover:text-cyan-400">
                      {tool.name}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                      {tool.categoryLabel}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">
                    {tool.pricingMonthly}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={tool.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-cyan-400"
                    title="公式リンク"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => onRemove(tool.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-400"
                    title="スタックから削除"
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
          <div className="p-4 border-t border-slate-800 flex items-center justify-between shrink-0 bg-slate-950/40 text-xs">
            <span className="text-slate-400">
              合計 {savedTools.length} ツール
            </span>
            <button
              onClick={() => {
                onCompareAll();
                onClose();
              }}
              className="px-4 py-2 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4" />
              <span>まとめてスペック比較</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
