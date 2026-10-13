"use client";

import React, { useState } from "react";
import { 
  X, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight, 
  Sparkles,
  ExternalLink
} from "lucide-react";
import { ToolItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { getCategoryLabel } from "@/lib/i18n";

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

  const { t, isEn, lang } = useLanguage();

  if (!isOpen) return null;

  const questions = [
    {
      id: "purpose",
      title: isEn ? "Q1. What is your primary intended goal?" : "Q1. 最も使いたい主な目的は何ですか？",
      options: isEn ? [
        { label: "Work efficiency, summarization & documentation", value: "writing" },
        { label: "Image, illustration & creative graphic design", value: "image" },
        { label: "Video, motion & animation production", value: "video" },
        { label: "Music, vocal tracks & audio sound design", value: "audio" },
        { label: "Software engineering, coding & fullstack dev", value: "code" },
        { label: "General reasoning, research & intellectual advice", value: "general" },
      ] : [
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
      title: isEn ? "Q2. What is your monthly budget preference?" : "Q2. 月額の予算イメージはどれですか？",
      options: isEn ? [
        { label: "100% Free only ($0 / month forever)", value: "free" },
        { label: "Willing to spend $10 - $20 / month for top value", value: "standard" },
        { label: "No limit! Maximum intelligence & speed prioritized", value: "premium" },
      ] : [
        { label: "完全無料だけで一生使い倒したい (0円)", value: "free" },
        { label: "月額1,500円〜3,000円以内なら投資可能 (定番プラン)", value: "standard" },
        { label: "予算上限なし！最上位・最高峰のクオリティ最優先", value: "premium" },
      ],
    },
    {
      id: "skill",
      title: isEn ? "Q3. What is your technical proficiency level?" : "Q3. あなたのIT・AIスキルレベルは？",
      options: isEn ? [
        { label: "Beginner: Easy promptless interface", value: "beginner" },
        { label: "Intermediate: Ready to tweak parameters and workflows", value: "intermediate" },
        { label: "Advanced / Engineer: Full API & agent integration needed", value: "advanced" },
      ] : [
        { label: "初心者：難しいプロンプトなしで手軽に動かしたい", value: "beginner" },
        { label: "中級者：多少の設定やコツを掴んで高品質な成果物を作りたい", value: "intermediate" },
        { label: "上級者・エンジニア：自由自在にフルカスタマイズ・API連携したい", value: "advanced" },
      ],
    },
    {
      id: "device",
      title: isEn ? "Q4. Where will you primarily use this tool?" : "Q4. 主にどのデバイス・環境で使いますか？",
      options: isEn ? [
        { label: "Mobile / Tablet with dedicated app", value: "mobile" },
        { label: "Desktop Web Browser", value: "browser" },
        { label: "IDE / Terminal / Desktop Code Editor", value: "editor" },
      ] : [
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
      calculateResult(updated);
    }
  };

  const calculateResult = (finalAnswers: typeof answers) => {
    const { purpose, budget, skill, device } = finalAnswers;
    let matched: ToolItem | undefined;

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
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResultTool(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <h3 className="font-extrabold text-lg text-white">
              {t.quizTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!resultTool ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-3">
                <span className="text-cyan-400 font-mono">
                  {isEn ? `Step ${currentStep + 1} of ${questions.length}` : `質問 ${currentStep + 1} / ${questions.length}`}
                </span>
                <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 mb-6 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Title */}
              <h4 className="text-base sm:text-lg font-bold text-white mb-5 leading-snug">
                {questions[currentStep].title}
              </h4>

              {/* Options */}
              <div className="space-y-2.5">
                {questions[currentStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(questions[currentStep].id, opt.value)}
                    className="w-full text-left p-3.5 sm:p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-white transition-all text-xs sm:text-sm font-semibold flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="text-center py-2 animate-in fade-in space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  {t.quizResultTitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {resultTool.name}
                </h3>
                <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {getCategoryLabel(resultTool.category, lang)} #{resultTool.categoryRank}
                </span>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                {resultTool.summary}
              </p>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left text-xs space-y-1.5 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.version}:</span>
                  <span className="font-mono font-bold text-cyan-300">{resultTool.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.pricing}:</span>
                  <span className="font-bold text-white">{resultTool.pricingMonthly}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onSelectToolById(resultTool.id);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 cursor-pointer"
                >
                  {t.viewDetails}
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.quizRestart}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
