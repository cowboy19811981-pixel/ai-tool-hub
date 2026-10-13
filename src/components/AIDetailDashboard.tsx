"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  ExternalLink, 
  Check, 
  X, 
  CheckCircle2, 
  Zap, 
  Star, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Bookmark, 
  ThumbsUp, 
  ArrowRight,
  Info,
  Calendar,
  Lock,
  Flame,
  Globe
} from "lucide-react";
import { ToolItem, PlanTierDetail } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { getCategoryLabel } from "@/lib/i18n";

interface AIDetailDashboardProps {
  tool: ToolItem;
  allToolsInField: ToolItem[];
  onSelectTool: (tool: ToolItem) => void;
  isSaved: boolean;
  onToggleSave: (toolId: string) => void;
  onVote: (toolId: string) => void;
  onBackToCatalog?: () => void;
}

export const AIDetailDashboard: React.FC<AIDetailDashboardProps> = ({
  tool,
  allToolsInField,
  onSelectTool,
  isSaved,
  onToggleSave,
  onVote,
  onBackToCatalog,
}) => {
  const { t, isEn, lang } = useLanguage();
  const versionsList = tool.versionFeatures.versionsList || [];
  const plansList = tool.plansList || [];

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-200">
      
      {/* ─── 1. MINIMAL MASTER HEADER ─── */}
      <div className="rounded-2xl p-5 sm:p-6 border border-slate-800 bg-slate-900/90 shadow-lg backdrop-blur-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Left: Tool Name & Version */}
          <div className="space-y-1.5 min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-black uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                #{tool.categoryRank} {getCategoryLabel(tool.category, lang)}
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                {tool.specs.company}
              </span>
              {tool.badge && (
                <span className="px-2 py-0.5 rounded text-[11px] font-extrabold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  {tool.badge}
                </span>
              )}
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{isEn ? "Grounded" : "公式一次情報照合済"}</span>
              </span>
            </div>

            <div className="flex items-baseline gap-3 flex-wrap">
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {tool.name}
              </h1>
              <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-mono font-bold bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>{tool.version}</span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl pt-0.5 font-normal">
              {tool.description}
            </p>
          </div>

          {/* Right: Quick Actions */}
          <div className="flex items-center gap-2 shrink-0 self-start lg:self-center">
            <button
              onClick={() => onToggleSave(tool.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                isSaved
                  ? "bg-amber-500/20 border-amber-500 text-amber-300"
                  : "bg-slate-950 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
              title={isEn ? "Save to My AI Stack" : "スタックに保存"}
            >
              <Bookmark className="w-3.5 h-3.5" fill={isSaved ? "currentColor" : "none"} />
              <span>{isSaved ? (isEn ? "Saved" : "保存済") : (isEn ? "Save" : "保存")}</span>
            </button>

            <button
              onClick={() => onVote(tool.id)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-bold transition-all cursor-pointer"
              title={isEn ? "Helpful vote" : "役立つ投票"}
            >
              <ThumbsUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>{tool.votesCount}</span>
            </button>

            <a
              href={tool.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <span>{isEn ? "Official Site" : "公式サイト ↗"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>

      {/* ─── 2. 👑 OFFICIAL PLANS & PRICING COMPARISON ─── */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h2 className="text-lg sm:text-xl font-black text-white">
              {isEn ? `Official Plans & Pricing Breakdown (${plansList.length} Tiers)` : `公式全プラン詳細・内容比較（計${plansList.length}プラン）`}
            </h2>
          </div>
          <span className="text-xs text-slate-400">
            {isEn ? "Directly grounded from official pricing pages" : "各社公式ドキュメントより直接照合"}
          </span>
        </div>

        {/* Plan Cards Grid */}
        {plansList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            {plansList.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-150 ${
                  plan.isPopular
                    ? "bg-slate-900 border-2 border-cyan-400 shadow-lg shadow-cyan-950/20 ring-1 ring-cyan-400/50"
                    : plan.isFree
                    ? "bg-slate-900/90 border border-emerald-500/40"
                    : "bg-slate-900/80 border border-slate-800"
                }`}
              >
                {/* Popular Pill */}
                {plan.isPopular && (
                  <div className="absolute -top-2.5 left-4 px-2.5 py-0.5 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-black tracking-wider uppercase shadow-sm">
                    {isEn ? "★ POPULAR" : "★ 一番人気・推奨"}
                  </div>
                )}

                <div className="space-y-3.5">
                  {/* Plan Name & Tag */}
                  <div>
                    <div className="flex items-center justify-between gap-1.5">
                      <h3 className="font-extrabold text-base text-white">
                        {plan.name}
                      </h3>
                      {plan.isFree && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                          FREE
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {plan.targetAudience}
                    </p>
                  </div>

                  {/* Price Box */}
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                    <div className="text-lg sm:text-xl font-black text-white font-mono">
                      {plan.priceMonthly}
                    </div>
                    {plan.priceYearly && (
                      <div className="text-[11px] text-cyan-300 font-mono mt-0.5">
                        {plan.priceYearly}
                      </div>
                    )}
                  </div>

                  {/* Available Models */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {isEn ? "Available Models:" : "利用可能モデル:"}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {plan.availableModels.map((m, i) => (
                        <span
                          key={i}
                          className="px-1.5 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-cyan-200 border border-slate-700"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quota & Context Limits */}
                  <div className="text-xs text-slate-300 space-y-0.5 pt-1 border-t border-slate-800/60">
                    <div className="flex items-start gap-1">
                      <span className="text-slate-500 text-[11px] font-bold shrink-0">{isEn ? "Quota:" : "上限:"}</span>
                      <span className="font-medium text-slate-200">{plan.messageLimits}</span>
                    </div>
                    {plan.contextWindow && (
                      <div className="flex items-start gap-1">
                        <span className="text-slate-500 text-[11px] font-bold shrink-0">{isEn ? "Context:" : "記憶:"}</span>
                        <span className="font-mono text-cyan-300 font-semibold">{plan.contextWindow}</span>
                      </div>
                    )}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1 pt-1 border-t border-slate-800/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {isEn ? "Features:" : "主な解放機能:"}
                    </span>
                    <ul className="space-y-1 text-xs text-slate-200">
                      {plan.unlockedFeatures.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Limitations if any */}
                  {plan.limitations && plan.limitations.length > 0 && (
                    <div className="space-y-1 pt-1 border-t border-slate-800/60 text-xs text-rose-300/90">
                      <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider block">
                        {isEn ? "Limitations:" : "制限:"}
                      </span>
                      {plan.limitations.slice(0, 2).map((lim, i) => (
                        <div key={i} className="flex items-start gap-1 text-[11px]">
                          <span className="text-rose-400">×</span>
                          <span className="line-clamp-1">{lim}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Plan Link */}
                <div className="pt-3 mt-3 border-t border-slate-800/80">
                  <a
                    href={plan.officialUrl || tool.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      plan.isPopular
                        ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black"
                        : "bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800"
                    }`}
                  >
                    <span>{plan.isFree ? (isEn ? "Start Free" : "無料で試す") : (isEn ? "Official Plan Specs ↗" : "公式プラン詳細 ↗")}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            {isEn ? "Standard Pricing: " : "標準料金: "} {tool.pricingMonthly}
          </div>
        )}

        {/* ─── 2-B: FULL PLAN SPEC COMPARISON MATRIX TABLE ─── */}
        {plansList.length > 0 && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-md mt-4">
            <div className="px-4 py-2.5 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-xs text-white uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isEn ? "Full Plan Comparison Matrix" : "全プラン詳細仕様 比較マトリックス"}</span>
              </div>
              <span className="text-[11px] text-slate-400">
                {tool.name}（計{plansList.length}プラン）
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[650px] text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-400 font-bold">
                    <th className="py-2.5 px-3.5 w-1/5">{isEn ? "Item" : "項目"}</th>
                    {plansList.map((plan) => (
                      <th
                        key={plan.id}
                        className={`py-2.5 px-3.5 ${plan.isPopular ? "bg-cyan-950/20 text-cyan-300" : "text-white"}`}
                      >
                        <div className="font-extrabold flex items-center gap-1">
                          <span>{plan.name}</span>
                          {plan.isPopular && <Star className="w-3 h-3 fill-cyan-400 text-cyan-400" />}
                        </div>
                        <div className="text-[11px] font-mono font-normal text-slate-400">
                          {plan.priceMonthly}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {/* 月額 */}
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-slate-400 bg-slate-950/40">
                      {isEn ? "Monthly Price" : "月額料金"}
                    </td>
                    {plansList.map((p) => (
                      <td key={p.id} className="py-2.5 px-3.5 font-mono font-bold text-white">
                        {p.priceMonthly}
                      </td>
                    ))}
                  </tr>

                  {/* 年額 */}
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-slate-400 bg-slate-950/40">
                      {isEn ? "Annual / Discount" : "年額換算・割引"}
                    </td>
                    {plansList.map((p) => (
                      <td key={p.id} className="py-2.5 px-3.5 text-slate-300">
                        {p.priceYearly || "—"}
                      </td>
                    ))}
                  </tr>

                  {/* 対応モデル */}
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-slate-400 bg-slate-950/40">
                      {isEn ? "Available Engines" : "利用可能モデル"}
                    </td>
                    {plansList.map((p) => (
                      <td key={p.id} className="py-2.5 px-3.5">
                        <div className="flex flex-wrap gap-1">
                          {p.availableModels.map((m, i) => (
                            <span key={i} className="px-1.5 py-0.2 rounded text-[10px] bg-slate-800 text-cyan-200 border border-slate-700">
                              {m}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* コンテキスト長 */}
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-slate-400 bg-slate-950/40">
                      {isEn ? "Context Length" : "コンテキスト長"}
                    </td>
                    {plansList.map((p) => (
                      <td key={p.id} className="py-2.5 px-3.5 font-mono text-cyan-300 font-bold">
                        {p.contextWindow || "—"}
                      </td>
                    ))}
                  </tr>

                  {/* 上限 */}
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-slate-400 bg-slate-950/40">
                      {isEn ? "Message Limits" : "利用上限・クォータ"}
                    </td>
                    {plansList.map((p) => (
                      <td key={p.id} className="py-2.5 px-3.5 text-slate-300 leading-relaxed text-[11px]">
                        {p.messageLimits}
                      </td>
                    ))}
                  </tr>

                  {/* 対象 */}
                  <tr>
                    <td className="py-2.5 px-3.5 font-bold text-slate-400 bg-slate-950/40">
                      {isEn ? "Target Audience" : "おすすめ対象"}
                    </td>
                    {plansList.map((p) => (
                      <td key={p.id} className="py-2.5 px-3.5 text-slate-200 text-[11px] leading-relaxed">
                        {p.targetAudience}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* ─── 3. 🧠 AVAILABLE MODEL ENGINES ─── */}
      {versionsList.length > 0 && (
        <div className="space-y-3 pt-3 border-t border-slate-800/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-white">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isEn ? `Available Model Engines (${versionsList.length})` : `選べるAIエンジン一覧 (${versionsList.length}種)`}</span>
            </div>
            <span className="text-[11px] text-slate-400">
              {isEn ? "Free vs Paid Model Intelligence" : "無料枠モデル vs 有料専用上位モデル"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {versionsList.map((ver, i) => (
              <div
                key={i}
                className="rounded-xl p-3.5 bg-slate-900/80 border border-slate-800 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between gap-1.5">
                  <h4 className="font-extrabold text-sm text-white truncate">
                    {ver.name}
                  </h4>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold border shrink-0 ${
                    ver.tier === "free"
                      ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                      : "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                  }`}>
                    {ver.tier === "free" ? (isEn ? "Free" : "無料枠") : (isEn ? "Paid" : "有料")}
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed text-[11px] line-clamp-2">
                  {ver.description}
                </p>

                <div className="grid grid-cols-2 gap-1.5 pt-1.5 border-t border-slate-800 text-[11px]">
                  <div className="bg-slate-950 p-1.5 rounded border border-slate-800">
                    <span className="text-slate-500 block text-[9px] uppercase font-bold">{isEn ? "Speed:" : "速度:"}</span>
                    <span className="font-bold text-white">{ver.speed}</span>
                  </div>
                  <div className="bg-slate-950 p-1.5 rounded border border-slate-800">
                    <span className="text-slate-500 block text-[9px] uppercase font-bold">{isEn ? "Intelligence:" : "知能:"}</span>
                    <span className="font-bold text-cyan-300">{ver.intelligence}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── 4. ⚖️ STRENGTHS & WEAKNESSES ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-800/80 text-xs">
        <div className="bg-slate-900/80 border border-emerald-500/30 p-4 rounded-xl space-y-2">
          <span className="font-bold text-xs text-emerald-400 flex items-center gap-1.5 uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isEn ? "Key Strengths" : "主な強み・メリット"}</span>
          </span>
          <ul className="space-y-1.5 text-slate-200">
            {tool.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900/80 border border-rose-500/30 p-4 rounded-xl space-y-2">
          <span className="font-bold text-xs text-rose-400 flex items-center gap-1.5 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-rose-400" />
            <span>{isEn ? "Watchouts & Limitations" : "注意点・向いていない用途"}</span>
          </span>
          <ul className="space-y-1.5 text-slate-200">
            {tool.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-rose-400 font-bold">×</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ─── 5. 📜 GROUNDING EVIDENCE ─── */}
      <div className="rounded-xl p-3.5 bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isEn ? "Official Grounding Evidence" : "公式一次情報エビデンス（照合済）"}</span>
          </div>
          <span className="font-mono text-[10px] text-slate-500">Exact Match</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] text-slate-400 pt-0.5">
          <span>Source: <a href={tool.officialUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{tool.officialUrl}</a></span>
          <span>•</span>
          <span>Engine: <strong className="text-slate-300">{tool.versionFeatures.architecture}</strong></span>
        </div>
      </div>

    </div>
  );
};
