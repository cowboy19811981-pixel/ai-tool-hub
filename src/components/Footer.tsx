import React from "react";
import { Compass, Heart, Github, Twitter } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60 pt-12 pb-8 mt-auto text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center">
              <Compass className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-base text-white tracking-tight">
              AI COMPASS
            </span>
            <span className="text-slate-500 text-[11px] ml-2">
              次世代AI総合ポータル＆自律レコメンドプラットフォーム
            </span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a href="#catalog-section" className="hover:text-white transition-colors">
              AIカタログ (60種)
            </a>
            <a href="#" className="hover:text-white transition-colors">
              利用規約
            </a>
            <a href="#" className="hover:text-white transition-colors">
              プライバシーポリシー
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} AI COMPASS. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Powered by Next.js, Prisma & Google Gemini API</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
