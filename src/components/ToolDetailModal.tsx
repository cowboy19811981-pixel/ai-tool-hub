"use client";

import React, { useState } from "react";
import { 
  X, 
  ExternalLink, 
  Check, 
  Star, 
  ThumbsUp, 
  Bookmark, 
  Zap, 
  Users, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Sparkles,
  BadgeCheck,
  Globe
} from "lucide-react";
import { ToolItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { getCategoryLabel, getBadgeLabel, getPricingTypeLabel } from "@/lib/i18n";

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
  const { t, isEn, lang } = useLanguage();

  if (!isOpen || !tool) return null;

  const versionsList = tool.versionFeatures.versionsList || [];
  const categoryLabel = getCategoryLabel(tool.category, lang);
  const badgeLabel = getBadgeLabel(tool.badge, lang);
  const pricingLabel = getPricingTypeLabel(tool.pricingType, lang);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-start justify-between gap-4 shrink-0 bg-slate-950/50">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-lg text-xs sm:text-sm font-extrabold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {categoryLabel} #{tool.categoryRank}
              </span>
              {badgeLabel && (
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  {badgeLabel}
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
            <div className="text-xs sm:text-sm text-cyan-400 font-mono mt-1 font-semibold flex items-center gap-2">
              <span>{isEn ? "Active Model:" : "現行バージョン:"} {tool.version}</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <BadgeCheck className="w-3 h-3" />
                <span>{isEn ? "Verified Primary Source" : "公式一次情報確認済"}</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(tool.id)}
              className={`p-2.5 rounded-xl transition-colors cursor-pointer ${
                isSaved ? "bg-amber-500/20 text-amber-400" : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
              title={isSaved ? (isEn ? "Remove from Stack" : "My AI Stackから削除") : (isEn ? "Add to Stack" : "My AI Stackに追加")}
            >
              <Bookmark className="w-5 h-5" fill={isSaved ? "currentColor" : "none"} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/30 px-6 gap-4 text-sm font-bold">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === "overview"
                ? "border-cyan-400 text-cyan-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            {isEn ? "Overview & Strengths" : "概要・強み・適性"}
          </button>
          <button
            onClick={() => setActiveTab("versions")}
            className={`py-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === "versions"
                ? "border-cyan-400 text-cyan-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            {isEn ? `Available Engines (${versionsList.length || 1})` : `選べるモデル・バージョン (${versionsList.length || 1})`}
          </button>
          <button
            onClick={() => setActiveTab("pricing")}
            className={`py-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === "pricing"
                ? "border-cyan-400 text-cyan-300"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            {isEn ? "Pricing & Free vs Paid" : "料金・無料vs有料の違い"}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 custom-scrollbar">
          {/* TAB 1: 概要 */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Primary Source Summary Card */}
              <div className="rounded-xl p-4 bg-slate-950 border border-cyan-500/30 shadow-inner">
                <div className="flex items-center justify-between text-xs font-bold text-cyan-400 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>{isEn ? "Official Primary Source Summary" : "公式一次ソース要約"}</span>
                  </div>
                  <a
                    href={tool.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>{isEn ? "Open Source Site ↗" : "一次情報サイトへ移動 ↗"}</span>
                  </a>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Strengths & Weaknesses Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl space-y-2">
                  <span className="font-extrabold text-sm text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t.strengths}</span>
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                    {tool.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400">・</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-rose-950/20 border border-rose-500/30 p-4 rounded-xl space-y-2">
                  <span className="font-extrabold text-sm text-rose-400 flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    <span>{t.weaknesses}</span>
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                    {tool.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-400">・</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Specs Matrix */}
              <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  {isEn ? "Technical Specifications" : "技術仕様・提供形態"}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block">{isEn ? "Vendor" : "開発元"}</span>
                    <span className="font-bold text-white text-sm truncate block">{tool.specs.company}</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block">{isEn ? "Context / Capacity" : "コンテキスト長"}</span>
                    <span className="font-bold text-cyan-300 text-sm truncate block">{tool.specs.contextWindow}</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block">{isEn ? "Multimodal" : "入出力形式"}</span>
                    <span className="font-bold text-white text-sm truncate block">{tool.specs.multimodal}</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block">{isEn ? "Launch" : "ローンチ"}</span>
                    <span className="font-bold text-white text-sm truncate block">{tool.specs.releaseYear}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: モデル一覧 */}
          {activeTab === "versions" && (
            <div className="space-y-4">
              {versionsList.length > 0 ? (
                <div className="space-y-3">
                  {versionsList.map((ver, i) => (
                    <div key={i} className="glass-panel p-4 sm:p-5 rounded-xl border border-slate-800 space-y-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-cyan-400" />
                          <h4 className="font-extrabold text-base text-white">{ver.name}</h4>
                        </div>
                        <span className="px-2 py-0.5 rounded text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {ver.planAvailability}
                        </span>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {ver.description}
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs pt-2">
                        <div className="bg-slate-900 p-2 rounded border border-slate-800">
                          <span className="text-slate-400 block">{isEn ? "Speed:" : "速度:"}</span>
                          <span className="font-bold text-white">{ver.speed}</span>
                        </div>
                        <div className="bg-slate-900 p-2 rounded border border-slate-800">
                          <span className="text-slate-400 block">{isEn ? "Reasoning:" : "知能・推論:"}</span>
                          <span className="font-bold text-cyan-300">{ver.intelligence}</span>
                        </div>
                        <div className="bg-slate-900 p-2 rounded border border-slate-800 col-span-2 sm:col-span-1">
                          <span className="text-slate-400 block">{isEn ? "Best for:" : "最適用途:"}</span>
                          <span className="font-bold text-slate-200 truncate block">{ver.bestFor}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass-panel p-5 rounded-xl border border-slate-800 space-y-3">
                  <div className="font-bold text-white text-base">
                    {tool.name} {tool.version}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {tool.versionFeatures.evolution}
                  </p>
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
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">{t.pricing}</span>
                    <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                      {tool.pricingMonthly}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-bold block mb-1">{isEn ? "ROI Rating" : "有料版の課金推奨度"}</span>
                    <div className="flex items-center gap-1 text-amber-400 font-bold text-sm justify-end">
                      {Array.from({ length: tool.paidWorthRating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                      <span className="text-white ml-1">({tool.paidWorthRating}.0 / 5)</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200">
                  <strong className="text-amber-300 block mb-0.5">{isEn ? "🎯 Who should upgrade?" : "🎯 誰が課金すべきか？"}</strong>
                  {tool.paidPlanDetails.recommendedFor}
                </div>
              </div>

              {/* Free vs Paid Side-by-Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-3">
                  <span className="font-extrabold text-base text-slate-200 block border-b border-slate-800 pb-2">
                    {isEn ? "Free Tier Limits" : "【無料版】でできること・制限"}
                  </span>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {tool.freePlanDetails.limits}
                  </p>
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">{isEn ? "Included Features:" : "利用可能機能:"}</span>
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
                    {isEn ? "Paid Plan Upgrades" : "【有料版】で解放される機能"}
                  </span>
                  <div className="text-xs sm:text-sm text-emerald-400 font-semibold">
                    {tool.paidPlanDetails.planName} ({tool.paidPlanDetails.price})
                  </div>
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">{isEn ? "Unlocked Superpowers:" : "解放される決定打:"}</span>
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
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
          >
            <ThumbsUp className="w-4 h-4 text-cyan-400" />
            <span>{isEn ? `Helpful (${tool.votesCount})` : `使ってよかった (${tool.votesCount})`}</span>
          </button>

          <a
            href={tool.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>{isEn ? "Visit Official Website ↗" : "公式サイトへアクセス ↗"}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
