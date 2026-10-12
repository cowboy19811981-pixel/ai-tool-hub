"use client";

import React, { useState } from "react";
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
  CheckCircle2,
  Cpu,
  Gauge,
  Sparkles
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
  const [activeTab, setActiveTab] = useState<"overview" | "versions" | "pricing">("overview");

  if (!isOpen || !tool) return null;

  const versionsList = tool.versionFeatures.versionsList || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-start justify-between gap-4 shrink-0 bg-slate-950/50">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-lg text-xs sm:text-sm font-extrabold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {tool.categoryLabel} #{tool.categoryRank}位
              </span>
              {tool.badge && (
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  {tool.badge}
                </span>
              )}
              <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                <Users className="w-3.5 h-3.5 text-indigo-400" />
                <span>{tool.estimatedUsers}</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {tool.name}
            </h2>
            <div className="text-xs sm:text-sm text-cyan-400 font-mono mt-1 font-semibold">
              現行バージョン: {tool.version}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(tool.id)}
              className={`p-2.5 rounded-xl transition-colors ${
                isSaved ? "bg-amber-500/20 text-amber-400" : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
              title={isSaved ? "My AI Stackから削除" : "My AI Stackに追加"}
            >
              <Bookmark className="w-5 h-5" fill={isSaved ? "currentColor" : "none"} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/30 px-6 gap-4 text-sm font-bold">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === "overview"
                ? "border-cyan-400 text-cyan-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            📋 概要・スペック
          </button>
          <button
            onClick={() => setActiveTab("versions")}
            className={`py-3 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === "versions"
                ? "border-cyan-400 text-cyan-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>バージョン・モデル別の特徴</span>
            {versionsList.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[11px] bg-cyan-500/20 text-cyan-300">
                {versionsList.length}種
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("pricing")}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === "pricing"
                ? "border-cyan-400 text-cyan-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            💰 料金・無料vs有料の違い
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm sm:text-base">
          {/* TAB 1: 概要・スペック */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* 解説文 */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  サービス概要
                </h4>
                <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                  {tool.description}
                </p>
              </div>

              {/* 進化点ハイライト */}
              <div className="bg-slate-950/70 rounded-xl p-4 sm:p-5 border border-cyan-500/30 space-y-2.5">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm uppercase tracking-wider">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>最新バージョンの進化点・特筆ポイント</span>
                </div>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {tool.versionFeatures.evolution}
                </p>
                <div className="pt-3 border-t border-slate-800 text-xs sm:text-sm text-slate-400 flex flex-wrap gap-4">
                  <div>アーキテクチャ: <strong className="text-slate-200 font-mono">{tool.versionFeatures.architecture}</strong></div>
                  <div>コンテキスト長: <strong className="text-cyan-300">{tool.specs.contextWindow}</strong></div>
                </div>
              </div>

              {/* 長所 vs 短所 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                  <h5 className="font-bold text-cyan-300 mb-2.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>得意なこと・最大のメリット</span>
                  </h5>
                  <ul className="space-y-2 text-slate-200">
                    {tool.pros.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                  <h5 className="font-bold text-rose-300 mb-2.5 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span>苦手なこと・利用時の注意点</span>
                  </h5>
                  <ul className="space-y-2 text-slate-300">
                    {tool.cons.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 技術スペック */}
              <div className="text-xs sm:text-sm text-slate-300 bg-slate-800/40 p-4 rounded-xl border border-slate-700/60 flex flex-wrap gap-6 justify-between">
                <div>マルチモーダル: <strong className="text-white">{tool.specs.multimodal}</strong></div>
                <div>開発元: <strong className="text-white">{tool.specs.company}</strong></div>
                <div>リリース年: <strong className="text-white">{tool.specs.releaseYear}</strong></div>
              </div>
            </div>
          )}

          {/* TAB 2: バージョン・モデル別の特徴 */}
          {activeTab === "versions" && (
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  選択可能なAIバージョン・モデルの一覧と使い分け
                </h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  {tool.name}内で提供されている各モデルの処理速度、知能、最適な使い道を整理しました。
                </p>
              </div>

              {versionsList.length > 0 ? (
                <div className="space-y-4">
                  {versionsList.map((ver, idx) => (
                    <div
                      key={idx}
                      className="glass-panel p-4 sm:p-5 rounded-xl border border-slate-700/80 bg-slate-950/60 space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            モデル {idx + 1}
                          </span>
                          <h5 className="font-extrabold text-base sm:text-lg text-white">
                            {ver.name}
                          </h5>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {ver.planAvailability}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {ver.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-800 text-xs">
                        <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-slate-400 block font-medium">応答速度:</span>
                          <span className="font-bold text-cyan-300">{ver.speed}</span>
                        </div>
                        <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-slate-400 block font-medium">論理・知能:</span>
                          <span className="font-bold text-amber-300">{ver.intelligence}</span>
                        </div>
                        <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 sm:col-span-1">
                          <span className="text-slate-400 block font-medium">こんな用途に最適:</span>
                          <span className="font-semibold text-slate-200 line-clamp-1">{ver.bestFor}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass-panel p-5 rounded-xl border border-slate-800 space-y-3">
                  <div className="font-bold text-white text-base">
                    現行メインモデル: {tool.version}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {tool.versionFeatures.evolution}
                  </p>
                  <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                    主な得意分野: {tool.pros.join(" / ")}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: 料金・無料vs有料の違い */}
          {activeTab === "pricing" && (
            <div className="space-y-6">
              <div className="glass-panel p-5 rounded-xl border border-slate-700 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">月額の目安</span>
                    <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                      {tool.pricingMonthly}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-bold block mb-1">有料版の課金推奨度</span>
                    <div className="flex items-center gap-1 text-amber-400 font-bold text-sm justify-end">
                      {Array.from({ length: tool.paidWorthRating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                      <span className="text-white ml-1">({tool.paidWorthRating}.0 / 5)</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200">
                  <strong className="text-amber-300 block mb-0.5">🎯 誰が課金すべきか？</strong>
                  {tool.paidPlanDetails.recommendedFor}
                </div>
              </div>

              {/* Free vs Paid Side-by-Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-3">
                  <span className="font-extrabold text-base text-slate-200 block border-b border-slate-800 pb-2">
                    【無料版】でできること・制限
                  </span>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {tool.freePlanDetails.limits}
                  </p>
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">利用可能機能:</span>
                    {tool.freePlanDetails.allowedFeatures.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-emerald-500/30 space-y-3">
                  <span className="font-extrabold text-base text-emerald-300 block border-b border-slate-800 pb-2">
                    【有料版】で解放される機能
                  </span>
                  <div className="text-xs sm:text-sm text-emerald-400 font-semibold">
                    プラン名: {tool.paidPlanDetails.planName} ({tool.paidPlanDetails.price})
                  </div>
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">解放される決定打:</span>
                    {tool.paidPlanDetails.unlockedFeatures.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-emerald-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 flex items-center justify-between shrink-0 bg-slate-950/50">
          <button
            onClick={() => onVote(tool.id)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-bold transition-colors"
          >
            <ThumbsUp className="w-4 h-4 text-cyan-400" />
            <span>使ってよかった ({tool.votesCount})</span>
          </button>

          <a
            href={tool.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all"
          >
            <span>公式サイトへアクセス</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
