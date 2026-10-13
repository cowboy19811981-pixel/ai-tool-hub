"use client";

import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { QuickNavBar } from "./QuickNavBar";
import { HeroSection } from "./HeroSection";
import { CatalogSection } from "./CatalogSection";
import { NewsSection } from "./NewsSection";
import { ComparisonDock } from "./ComparisonDock";
import { ComparisonModal } from "./ComparisonModal";
import { ToolDetailModal } from "./ToolDetailModal";
import { PromptGallerySection } from "./PromptGallerySection";
import { OutputComparisonSection } from "./OutputComparisonSection";
import { MyStackModal } from "./MyStackModal";
import { FreeInputModal } from "./FreeInputModal";
import { QuizModal } from "./QuizModal";
import { Footer } from "./Footer";
import { ToolItem, UpdateItem, PromptItem, GalleryItemType } from "@/types";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

interface MainAppProps {
  initialTools: ToolItem[];
  updates: UpdateItem[];
  prompts: PromptItem[];
  galleries: GalleryItemType[];
}

const MainAppInner: React.FC<MainAppProps> = ({
  initialTools,
  updates,
  prompts,
  galleries,
}) => {
  const { isEn } = useLanguage();
  const [tools, setTools] = useState<ToolItem[]>(initialTools);
  const [searchQuery, setSearchQuery] = useState("");
  
  // 保存・比較ステート (LocalStorage連携)
  const [savedToolIds, setSavedToolIds] = useState<string[]>([]);
  const [compareToolIds, setCompareToolIds] = useState<string[]>([]);

  // モーダル制御
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [isMyStackOpen, setIsMyStackOpen] = useState(false);
  const [isFreeInputOpen, setIsFreeInputOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // LocalStorageからお気に入り読み込み
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ai_compass_saved");
      if (saved) {
        setSavedToolIds(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleToggleSave = (toolId: string) => {
    setSavedToolIds((prev) => {
      let next: string[];
      if (prev.includes(toolId)) {
        next = prev.filter((id) => id !== toolId);
      } else {
        next = [...prev, toolId];
      }
      try {
        localStorage.setItem("ai_compass_saved", JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  const handleToggleCompare = (toolId: string) => {
    setCompareToolIds((prev) => {
      if (prev.includes(toolId)) {
        return prev.filter((id) => id !== toolId);
      }
      if (prev.length >= 3) {
        alert(
          isEn
            ? "You can compare up to 3 tools at a time. Please remove one first."
            : "比較できるツールは最大3件までです。1件削除してから選択してください。"
        );
        return prev;
      }
      return [...prev, toolId];
    });
  };

  const handleVote = async (toolId: string) => {
    // 楽観的UI更新
    setTools((prev) =>
      prev.map((t) =>
        t.id === toolId ? { ...t, votesCount: t.votesCount + 1 } : t
      )
    );

    try {
      await fetch(`/api/tools/${toolId}/vote`, { method: "POST" });
    } catch (e) {
      console.error("Vote failed:", e);
    }
  };

  const handleScrollToCatalog = () => {
    const el = document.getElementById("catalog-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectToolById = (toolId: string) => {
    const found = tools.find((t) => t.id === toolId);
    if (found) {
      setSelectedTool(found);
    }
  };

  const compareTools = tools.filter((t) => compareToolIds.includes(t.id));
  const savedTools = tools.filter((t) => savedToolIds.includes(t.id));
  const dailyPrompt = prompts[0] || null;

  return (
    <div className="flex-1 flex flex-col">
      {/* Global Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        savedToolIds={savedToolIds}
        onOpenMyStack={() => setIsMyStackOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenFreeInput={() => setIsFreeInputOpen(true)}
      />

      {/* Sticky Quick Anchor Bar */}
      <QuickNavBar
        onOpenQuiz={() => setIsQuizOpen(true)}
        newsCount={updates.length}
        toolsCount={tools.length}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          updates={updates}
          dailyPrompt={dailyPrompt}
          onOpenFreeInput={() => setIsFreeInputOpen(true)}
          onOpenQuiz={() => setIsQuizOpen(true)}
          onScrollToCatalog={handleScrollToCatalog}
          onSelectTool={handleSelectToolById}
        />

        {/* 12-Hour Automated Updates & Timeline Section */}
        <NewsSection
          updates={updates}
          onSelectToolById={handleSelectToolById}
        />

        {/* AI Catalog & Directory */}
        <CatalogSection
          tools={tools}
          savedToolIds={savedToolIds}
          compareToolIds={compareToolIds}
          onToggleSave={handleToggleSave}
          onToggleCompare={handleToggleCompare}
          onVote={handleVote}
          onSelectTool={(tool) => setSelectedTool(tool)}
          searchQuery={searchQuery}
          onSyncTools={(newTools) => setTools(newTools)}
        />

        {/* Output Comparison Benchmark Showcase */}
        <OutputComparisonSection galleries={galleries} />

        {/* Prompt Gallery */}
        <PromptGallerySection prompts={prompts} />
      </main>

      {/* Floating Comparison Dock */}
      <ComparisonDock
        compareTools={compareTools}
        onRemove={(id) => setCompareToolIds((prev) => prev.filter((i) => i !== id))}
        onClear={() => setCompareToolIds([])}
        onOpenModal={() => setIsCompareModalOpen(true)}
      />

      {/* Multi-Tool Side-by-Side Comparison Modal */}
      <ComparisonModal
        tools={compareTools}
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
      />

      {/* Tool Detail Modal */}
      <ToolDetailModal
        tool={selectedTool}
        isOpen={!!selectedTool}
        onClose={() => setSelectedTool(null)}
        isSaved={selectedTool ? savedToolIds.includes(selectedTool.id) : false}
        onToggleSave={handleToggleSave}
        onVote={handleVote}
      />

      {/* My AI Stack (Saved Tools) Modal */}
      <MyStackModal
        savedTools={savedTools}
        isOpen={isMyStackOpen}
        onClose={() => setIsMyStackOpen(false)}
        onRemove={handleToggleSave}
        onSelectTool={(t) => setSelectedTool(t)}
        onCompareAll={() => {
          setCompareToolIds(savedTools.slice(0, 3).map((t) => t.id));
          setIsCompareModalOpen(true);
        }}
      />

      {/* Free-input AI Recommendation Modal */}
      <FreeInputModal
        isOpen={isFreeInputOpen}
        onClose={() => setIsFreeInputOpen(false)}
        onSelectToolById={handleSelectToolById}
      />

      {/* 4-Step Quiz Modal */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        tools={tools}
        onSelectToolById={handleSelectToolById}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const MainApp: React.FC<MainAppProps> = (props) => {
  return (
    <LanguageProvider>
      <MainAppInner {...props} />
    </LanguageProvider>
  );
};

