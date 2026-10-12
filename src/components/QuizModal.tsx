"use client";

import React, { useState } from "react";
import { 
  X, 
  SlidersHorizontal, 
  CheckCircle2, 
  RotateCcw, 
  Share2, 
  ArrowRight, 
  Sparkles,
  Twitter
} from "lucide-react";
import { ToolItem } from "@/types";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  tools: ToolItem[];
  onSelectToolById: (id: string) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  tools,
  onSelectToolById,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{
    purpose?: string;
    budget?: string;
    skill?: string;
    device?: string;
  }>({});
  const [resultTool, setResultTool] = useState<ToolItem | null>(null);

  if (!isOpen) return null;

  const questions = [
    {
      id: "purpose",
      title: "Q1. 最も使いたい主な目的は何ですか？",
      options: [
        { label: "業務の効率化・長文要約・メール作成", value: "writing" },
        { label: "画像・イラスト・アートの創作", value: "image" },
        { label: "動画・映像・アニメーション制作", value: "video" },
        { label: "音楽・BGM・ボーカル楽曲の作曲", value: "audio" },
        { label: "プログラミング・Web開発・コード修正", value: "code" },
        { label: "万能の日常雑談・知的な調べ物・相談", value: "general" },
      ],
    },
    {
      id: "budget",
      title: "Q2. 月額の予算イメージはどれですか？",
      options: [
        { label: "完全無料だけで一生使い倒したい (0円)", value: "free" },
        { label: "月額1,500円〜3,000円以内なら投資可能 (定番プラン)", value: "standard" },
        { label: "予算上限なし！最上位・最高峰のクオリティ最優先", value: "premium" },
      ],
    },
    {
      id: "skill",
      title: "Q3. あなたのIT・AIスキルレベルは？",
      options: [
        { label: "初心者：難しいプロンプトなしで日本語で手軽に動かしたい", value: "beginner" },
        { label: "中級者：多少の設定やコツを掴んで高品質な成果物を作りたい", value: "intermediate" },
        { label: "上級者・エンジニア：自由自在にフルカスタマイズ・API連携したい", value: "advanced" },
      ],
    },
    {
      id: "device",
      title: "Q4. 主にどのデバイス・環境で使いますか？",
      options: [
        { label: "スマホ・タブレット中心（アプリ必須）", value: "mobile" },
        { label: "PCのWebブラウザ中心", value: "browser" },
        { label: "VS Codeなどの開発エディタ・専用デスクトップ環境", value: "editor" },
      ],
    },
  ];

  const handleSelectOption = (key: string, value: string) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // 診断計算
      calculateResult(updated);
    }
  };

  const calculateResult = (finalAnswers: typeof answers) => {
    const { purpose, budget, skill, device } = finalAnswers;

    let matched: ToolItem | undefined;

    // 条件判定ロジック
    if (purpose === "code") {
      if (budget === "free") {
        matched = tools.find((t) => t.id === "codeium") || tools.find((t) => t.id === "cline");
      } else {
        matched = tools.find((t) => t.id === "cursor") || tools.find((t) => t.id === "github-copilot");
      }
    } else if (purpose === "image") {
      if (budget === "free") {
        matched = tools.find((t) => t.id === "leonardo-ai") || tools.find((t) => t.id === "flux");
      } else {
        matched = tools.find((t) => t.id === "midjourney") || tools.find((t) => t.id === "flux");
      }
    } else if (purpose === "video") {
      if (budget === "free") {
        matched = tools.find((t) => t.id === "kling-ai") || tools.find((t) => t.id === "luma-dream-machine");
      } else {
        matched = tools.find((t) => t.id === "runway") || tools.find((t) => t.id === "heygen");
      }
    } else if (purpose === "audio") {
      matched = tools.find((t) => t.id === "suno") || tools.find((t) => t.id === "elevenlabs");
    } else if (purpose === "writing") {
      if (budget === "free") {
        matched = tools.find((t) => t.id === "notebooklm") || tools.find((t) => t.id === "perplexity");
      } else {
        matched = tools.find((t) => t.id === "notion-ai") || tools.find((t) => t.id === "claude");
      }
    } else {
      // general
      if (skill === "beginner" && device === "mobile") {
        matched = tools.find((t) => t.id === "chatgpt");
      } else if (skill === "advanced") {
        matched = tools.find((t) => t.id === "claude") || tools.find((t) => t.id === "deepseek");
      } else {
        matched = tools.find((t) => t.id === "chatgpt") || tools.find((t) => t.id === "gemini");
      }
    }

    if (!matched) {
      matched = tools[0];
    }

    setResultTool(matched);
    setCurrentStep(questions.length); // 結果表示へ
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResultTool(null);
  };

  const handleShareTwitter = () => {
    if (!resultTool) return;
    const text = encodeURIComponent(
      `AI Compassで【あなたに合ったAI適性診断】を実施しました！\n私に最もおすすめのAIは『${resultTool.name}』でした✨\n\n#AICompass #AI診断 #${resultTool.name}`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-lg max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-950/40">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-md">
              <SlidersHorizontal className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white">
                あなたに合ったAI適性診断
              </h3>
              <p className="text-[11px] text-slate-400">
                4問の質問に答えるだけで、60種から最高の相棒を特定
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

        {/* Question Flow */}
        <div className="p-6 overflow-y-auto">
          {currentStep < questions.length ? (
            <div className="space-y-6">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1 font-semibold">
                  <span>ステップ {currentStep + 1} / {questions.length}</span>
                  <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Current Question */}
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-4">
                  {questions[currentStep].title}
                </h4>

                <div className="space-y-2.5">
                  {questions[currentStep].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectOption(questions[currentStep].id, opt.value)}
                      className="w-full p-3.5 rounded-xl text-left text-xs sm:text-sm font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white transition-all flex items-center justify-between group"
                    >
                      <span>{opt.label}</span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Result Card */
            resultTool && (
              <div className="text-center space-y-5 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-500 mx-auto flex items-center justify-center shadow-xl shadow-cyan-500/30">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>

                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                    DIAGNOSIS RESULT
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-white mt-1">
                    あなたに最適なAIは
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                      『{resultTool.name}』
                    </span>
                    です！
                  </h4>
                </div>

                {/* Match Card */}
                <div className="glass-panel p-5 rounded-2xl border border-cyan-500/40 text-left bg-slate-900/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                      {resultTool.categoryLabel} #{resultTool.categoryRank}位
                    </span>
                    <span className="text-xs text-slate-400">
                      {resultTool.pricingMonthly}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {resultTool.summary}
                  </p>

                  <div className="text-xs text-slate-300 pt-2 border-t border-slate-800">
                    <strong className="text-cyan-300 block mb-0.5">選定理由:</strong>
                    あなたの回答（{questions[0].options.find(o => o.value === answers.purpose)?.label.split("・")[0]}）に最もマッチした機能性とコストパフォーマンスを備えています。
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
                  <button
                    onClick={() => {
                      onSelectToolById(resultTool.id);
                      onClose();
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-1.5"
                  >
                    <span>スペック詳細を見る</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={handleShareTwitter}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Twitter className="w-3.5 h-3.5 text-sky-400" />
                    <span>結果をXでシェア</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="p-2.5 text-slate-400 hover:text-white"
                    title="最初からやり直す"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
