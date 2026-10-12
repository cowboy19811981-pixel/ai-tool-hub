"use client";

import React from "react";
import { 
  X, 
  ExternalLink, 
  Check, 
  XCircle, 
  Star, 
  ThumbsUp, 
  Bookmark, 
  Zap, 
  Users, 
  Building2, 
  Layers, 
  CheckCircle2
} from "lucide-react";
import { ToolItem } from "@/types";

interface ToolDetailModalProps {
  tool: ToolItem | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onVote: (id: string) => void;
}

export const ToolDetailModal: React.FC<ToolDetailModalProps> = ({
  tool,
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
  onVote,
}) => {
  if (!isOpen || !tool) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 shrink-0 bg-slate-950/40">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-lg text-xs font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {tool.categoryLabel} #{tool.categoryRank}位
              </span>
              {tool.badge && (
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  {tool.badge}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {tool.name}
            </h2>
            <div className="text-xs text-cyan-400 font-mono mt-1">
              現行バージョン: {tool.version}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(tool.id)}
              className={`p-2 rounded-xl transition-colors ${
                isSaved ? "bg-amber-500/20 text-amber-400" : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
              title={isSaved ? "My AI Stackから削除" : "My AI Stackに追加"}
            >
              <Bookmark className="w-5 h-5" fill={isSaved ? "currentColor" : "none"} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* 概要 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              概要・解説
            </h4>
            <p className="text-slate-200 leading-relaxed">
              {tool.description}
            </p>
          </div>

          {/* バージョン特性ボックス */}
          <div className="bg-slate-950/60 rounded-xl p-4 border border-cyan-500/30 space-y-2">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wider">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>最新バージョンの特性・進化点</span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {tool.versionFeatures.evolution}
            </p>
            <div className="pt-2 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
              <div>基盤構造: <strong className="text-slate-200 font-mono">{tool.versionFeatures.architecture}</strong></div>
              <div>利用規模: <strong className="text-indigo-300">{tool.estimatedUsers}</strong></div>
            </div>
          </div>

          {/* 料金 & 無料 vs 有料 徹底比較 */}
          <div className="glass-panel p-4 rounded-xl border border-slate-700/80 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400">料金体系: </span>
                <span className="font-bold text-white ml-1">{tool.pricingMonthly}</span>
              </div>
              <div className="flex items-center gap-1 text-amber-400 font-bold text-xs">
                <span>課金推奨度:</span>
                <div className="flex items-center">
                  {Array.from({ length: tool.paidWorthRating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-xs">
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <span className="font-bold text-slate-300 block mb-1">【無料版】の範囲と制限</span>
                <p className="text-slate-400 leading-relaxed text-[11px] mb-2">{tool.freePlanDetails.limits}</p>
                <div className="space-y-1">
                  {tool.freePlanDetails.allowedFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-1 text-slate-300 text-[11px]">
                      <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-lg border border-emerald-500/20">
                <span className="font-bold text-emerald-300 block mb-1">【有料版】で解放されること</span>
                <p className="text-slate-400 text-[11px] mb-2">おすすめ: {tool.paidPlanDetails.recommendedFor}</p>
                <div className="space-y-1">
                  {tool.paidPlanDetails.unlockedFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-1 text-emerald-200 text-[11px]">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 強み vs 弱み */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800">
              <h5 className="font-bold text-cyan-300 mb-2">得なこと・メリット</h5>
              <ul className="space-y-1.5 text-slate-300">
                {tool.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800">
              <h5 className="font-bold text-rose-300 mb-2">苦手・注意点</h5>
              <ul className="space-y-1.5 text-slate-400">
                {tool.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 技術スペック */}
          <div className="text-xs text-slate-400 bg-slate-800/30 p-3 rounded-xl border border-slate-800 flex flex-wrap gap-4 justify-between">
            <div>コンテキスト長: <strong className="text-slate-200">{tool.specs.contextWindow}</strong></div>
            <div>対応形式: <strong className="text-slate-200">{tool.specs.multimodal}</strong></div>
            <div>開発元: <strong className="text-slate-200">{tool.specs.company}</strong></div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 flex items-center justify-between shrink-0 bg-slate-950/40">
          <button
            onClick={() => onVote(tool.id)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold"
          >
            <ThumbsUp className="w-4 h-4 text-cyan-400" />
            <span>使ってよかった ({tool.votesCount})</span>
          </button>

          <a
            href={tool.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 flex items-center gap-1.5 transition-all"
          >
            <span>公式サイトへアクセス</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
