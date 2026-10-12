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
        body: JSON.stringify({ userPrompt: inputText }),
      });
      const data = await res.json();
      if (res.ok) {
        setResult(data);
      } else {
        alert(data.error || "診断に失敗しました。");
      }
    } catch (err) {
      alert("通信エラーが発生しました。");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptIdx(idx);
    setTimeout(() => setCopiedPromptIdx(null), 2000);
  };

  const presetExamples = [
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
                やりたいこと自由入力AI診断
              </h3>
              <p className="text-[11px] text-slate-400">
                あなたの要望・悩みに最適なツールを60種の中から瞬時に判定
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-5">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                やりたいこと・悩み・作ってみたいものを自由に記入してください
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="例: 副業でInstagramのオシャレな投稿画像とキャッチコピーを毎日量産したいです。なるべく無料で始められる組み合わせを教えてください。"
                rows={3}
                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
              />
            </div>

            {/* Presets */}
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block mb-1.5">
                💡 よくある相談の例（クリックで入力）:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {presetExamples.map((ex, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setInputText(ex)}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition-colors text-left"
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
                className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 disabled:opacity-50 flex items-center gap-2 transition-all"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Gemini AIが最適解を分析中...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>AIに最適なツールを聞く</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Result Section */}
          {result && (
            <div className="space-y-4 pt-4 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
              {/* Advice */}
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-3.5 text-xs text-cyan-200 leading-relaxed">
                <span className="font-bold block mb-1 text-cyan-300">🎯 全体アドバイス・課金の判断:</span>
                {result.advice}
              </div>

              {/* Recommendations Cards */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  あなたに推奨する上位ツール
                </h4>

                {result.recommendations.map((rec, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-4 rounded-xl border border-slate-700 space-y-3 bg-slate-900/60"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-cyan-500/20 text-cyan-300">
                          おすすめ #{idx + 1}
                        </span>
                        <h5 className="font-extrabold text-base text-white">
                          {rec.toolName}
                        </h5>
                      </div>
                      <button
                        onClick={() => {
                          onSelectToolById(rec.toolId);
                          onClose();
                        }}
                        className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                      >
                        <span>スペックを見る</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {rec.reason}
                    </p>

                    {/* Recommended Prompt Box */}
                    <div className="bg-slate-950/80 rounded-lg p-3 border border-slate-800 text-xs font-mono text-slate-300 relative group">
                      <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mb-1">
                        即戦力おすすめプロンプト:
                      </div>
                      <div className="pr-12 text-slate-200">
                        {rec.recommendedPrompt}
                      </div>
                      <button
                        onClick={() => handleCopy(rec.recommendedPrompt, idx)}
                        className="absolute right-2.5 top-2.5 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-[10px] font-bold flex items-center gap-1"
                        title="プロンプトをコピー"
                      >
                        {copiedPromptIdx === idx ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span>済</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>コピー</span>
                          </>
                        )}
                      </button>
                    </div>
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
