"use client";

import React from "react";
import { 
  X, 
  Check, 
  XCircle, 
  Star, 
  ExternalLink, 
  Zap, 
  Layers
} from "lucide-react";
import { ToolItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { getCategoryLabel } from "@/lib/i18n";

interface ComparisonModalProps {
  tools: ToolItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  tools,
  isOpen,
  onClose,
}) => {
  const { t, isEn, lang } = useLanguage();

  if (!isOpen || tools.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            <h3 className="font-extrabold text-lg sm:text-xl text-white">
              {isEn ? `Side-by-Side Spec Comparison (${tools.length} Tools)` : `AIスペック横並び徹底比較 (${tools.length}ツール)`}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Comparison Table */}
        <div className="p-6 overflow-y-auto overflow-x-auto space-y-6">
          <table className="w-full text-left border-collapse min-w-[650px]">
            {/* Tool Header Row */}
            <thead>
              <tr className="border-b border-slate-800">
                <th className="py-4 px-3 w-1/4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {t.modalSpecItem}
                </th>
                {tools.map((tool) => (
                  <th key={tool.id} className="py-4 px-3 w-1/4 align-top">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-xs font-bold bg-cyan-500/20 text-cyan-300">
                        #{tool.categoryRank}
                      </span>
                      <span className="font-extrabold text-base sm:text-lg text-white">
                        {tool.name}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mb-2 font-mono">
                      {tool.version}
                    </div>
                    <a
                      href={tool.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 cursor-pointer"
                    >
                      <span>{t.visitOfficial} ↗</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
              {/* カテゴリ */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  {t.category}
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3 font-semibold text-slate-200">
                    {getCategoryLabel(tool.category, lang)}
                  </td>
                ))}
              </tr>

              {/* 料金・プラン */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  {t.pricing}
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3 font-semibold text-white">
                    {tool.pricingMonthly}
                  </td>
                ))}
              </tr>

              {/* 課金推奨度 */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  {isEn ? "Paid ROI Rating" : "有料版コスパ推奨度"}
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: tool.paidWorthRating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                      <span className="text-xs text-slate-400 ml-1">({tool.paidWorthRating}/5)</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* 無料枠の制限 */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  {t.freeTier}
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3 text-slate-300 leading-relaxed text-xs">
                    {tool.freePlanDetails.limits}
                  </td>
                ))}
              </tr>

              {/* 有料版で解放される決定打 */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  {isEn ? "Unlocked in Paid Plan" : "有料版の決定打"}
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3 text-emerald-300 text-xs">
                    <ul className="space-y-1">
                      {tool.paidPlanDetails.unlockedFeatures.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* 日本語対応 */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  {isEn ? "Japanese UI" : "日本語対応"}
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3">
                    {tool.supportsJapanese ? (
                      <span className="text-cyan-400 font-bold flex items-center gap-1">
                        <Check className="w-4 h-4" /> {isEn ? "Supported" : "対応"}
                      </span>
                    ) : (
                      <span className="text-slate-500 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> {isEn ? "English Only" : "非対応"}
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* 商用利用 */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  {isEn ? "Commercial Use" : "商用利用"}
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3">
                    {tool.commercialUse ? (
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <Check className="w-4 h-4" /> {isEn ? "Allowed" : "可能"}
                      </span>
                    ) : (
                      <span className="text-rose-400 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> {isEn ? "Restricted" : "制限あり"}
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* 主な強み */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  {t.strengths}
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3 text-slate-300 text-xs">
                    <ul className="space-y-1">
                      {tool.pros.slice(0, 3).map((p, i) => (
                        <li key={i}>・{p}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* 注意点・制限 */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  {t.weaknesses}
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3 text-rose-300/90 text-xs">
                    <ul className="space-y-1">
                      {tool.cons.slice(0, 2).map((c, i) => (
                        <li key={i}>・{c}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 flex justify-end bg-slate-950/50">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
