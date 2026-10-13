"use client";

import React, { useState } from "react";
import { 
  X, 
  Sparkles, 
  Send, 
  Loader2, 
  Check, 
  Copy, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FreeInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectToolById: (id: string) => void;
}

interface Recommendation {
  toolId: string;
  toolName: string;
  reason: string;
  recommendedPrompt: string;
}

export const FreeInputModal: React.FC<FreeInputModalProps> = ({
  isOpen,
  onClose,
  onSelectToolById,
}) => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    recommendations: Recommendation[];
    advice: string;
  } | null>(null);
  const [copiedPromptIdx, setCopiedPromptIdx] = useState<number | null>(null);

  const { t, isEn } = useLanguage();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userPrompt: inputText, lang: isEn ? "en" : "ja" }),
      });
      const data = await res.json();
      if (res.ok) {
        setResult(data);
      } else {
        alert(data.error || (isEn ? "Analysis failed." : "診断に失敗しました。"));
      }
    } catch (err) {
      alert(isEn ? "Network error." : "通信エラーが発生しました。");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptIdx(idx);
    setTimeout(() => setCopiedPromptIdx(null), 2000);
  };

  const presetExamples = isEn ? [
    "I want to create faceless YouTube Shorts with viral hooks and high quality.",
    "Instantly summarize long corporate PDF manuals and query answers with citations.",
    "Build a modern Next.js web application with accelerated code & UI generation.",
    "Polish English business emails and academic papers to flawless native prose.",
  ] : [
    "副業でYouTubeショート動画を作りたい。顔出しなしで高品質に仕上げるには？",
    "社内の業務マニュアルや長大なPDFを一瞬で要約して質問したい",
    "React + Next.jsでWebアプリを作りたいが、デザインもコードも時短したい",
    "英語のビジネスメールや論文をネイティブ級に自然に直したい",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-950/40">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-md shadow-cyan-500/20">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white">
                {t.freeInputTitle}
              </h3>
              <p className="text-[11px] text-slate-400">
                {t.freeInputDesc}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-5 custom-scrollbar">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                {isEn ? "Describe your goal, challenge or workflow:" : "やりたいこと・悩み・作ってみたいものを自由に記入してください"}
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={t.freeInputPlaceholder}
                rows={3}
                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
              />
            </div>

            {/* Presets */}
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block mb-1.5">
                {isEn ? "💡 Common Examples (Click to Fill):" : "💡 よくある相談の例（クリックで入力）:"}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {presetExamples.map((ex, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setInputText(ex)}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition-colors text-left cursor-pointer"
                  >
                    {ex}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-1 flex justify-end">
              <button
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 disabled:opacity-50 flex items-center gap-2 transition-all cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{isEn ? "Analyzing with Gemini AI..." : "Gemini AIが最適解を分析中..."}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.freeInputSubmit}</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Results */}
          {result && (
            <div className="pt-4 border-t border-slate-800 space-y-4 animate-in fade-in">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t.freeInputResultTitle}</span>
              </div>

              {result.advice && (
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-cyan-300 block mb-1">
                    {isEn ? "🧭 Strategic Advice:" : "🧭 総合アドバイス:"}
                  </strong>
                  {result.advice}
                </div>
              )}

              <div className="space-y-3">
                {result.recommendations.map((rec, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-base text-white">
                        #{idx + 1} {rec.toolName}
                      </span>
                      <button
                        onClick={() => {
                          onClose();
                          onSelectToolById(rec.toolId);
                        }}
                        className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>{t.viewDetails}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong className="text-slate-200">
                        {isEn ? "Why this tool: " : "おすすめの理由: "}
                      </strong>
                      {rec.reason}
                    </p>

                    {rec.recommendedPrompt && (
                      <div className="bg-slate-950/90 rounded-lg p-3 border border-slate-800">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                            {isEn ? "Recommended Production Prompt:" : "推奨の実践プロンプト:"}
                          </span>
                          <button
                            onClick={() => handleCopy(rec.recommendedPrompt, idx)}
                            className="text-[10px] font-bold text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                          >
                            {copiedPromptIdx === idx ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400">{t.copied}</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>{t.copyPrompt}</span>
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed">
                          {rec.recommendedPrompt}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
