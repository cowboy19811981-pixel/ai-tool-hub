"use client";

import React from "react";
import { 
  X, 
  Check, 
  XCircle, 
  Star, 
  ExternalLink, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Users, 
  Layers
} from "lucide-react";
import { ToolItem } from "@/types";

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
  if (!isOpen || tools.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            <h3 className="font-extrabold text-lg sm:text-xl text-white">
              AIスペック横並び徹底比較 ({tools.length}ツール)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
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
                  比較項目
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
                      className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                    >
                      <span>公式サイト</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
              {/* 料金・プラン */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  料金目安
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
                  有料版課金の価値
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3">
                    <div className="flex items-center gap-1 text-amber-400 font-bold mb-1">
                      {Array.from({ length: tool.paidWorthRating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                      <span className="text-xs text-slate-300 ml-1">
                        ({tool.paidWorthRating}/5)
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      推奨: {tool.paidPlanDetails.recommendedFor}
                    </p>
                  </td>
                ))}
              </tr>

              {/* 無料版でできること */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  無料版の制限・範囲
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3 text-slate-300 leading-relaxed text-xs">
                    {tool.freePlanDetails.limits}
                  </td>
                ))}
              </tr>

              {/* 有料版で解放されること */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  有料版の決定打
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3 text-emerald-300 text-xs space-y-1">
                    {tool.paidPlanDetails.unlockedFeatures.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </td>
                ))}
              </tr>

              {/* バージョン特性・進化点 */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  最新バージョンの進化
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3 text-slate-300 text-xs leading-relaxed">
                    {tool.versionFeatures.evolution}
                  </td>
                ))}
              </tr>

              {/* 得意なこと (Pros) */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  最大の強み (Pros)
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3 text-xs space-y-1">
                    {tool.pros.map((pro, i) => (
                      <div key={i} className="flex items-start gap-1 text-slate-200">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{pro}</span>
                      </div>
                    ))}
                  </td>
                ))}
              </tr>

              {/* 苦手なこと・注意点 (Cons) */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  苦手・注意点 (Cons)
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3 text-xs space-y-1">
                    {tool.cons.map((con, i) => (
                      <div key={i} className="flex items-start gap-1 text-slate-400">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{con}</span>
                      </div>
                    ))}
                  </td>
                ))}
              </tr>

              {/* 技術仕様 */}
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-400 bg-slate-800/20">
                  コンテキスト長・開発元
                </td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3.5 px-3 text-xs space-y-1 text-slate-300">
                    <div>枠: <strong className="text-cyan-300">{tool.specs.contextWindow}</strong></div>
                    <div>開発: {tool.specs.company}</div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
