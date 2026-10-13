"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, Translations, translations } from "@/lib/i18n";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
  isEn: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("ja");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("ai_compass_lang") as Language | null;
      if (savedLang === "ja" || savedLang === "en") {
        setLangState(savedLang);
        document.documentElement.lang = savedLang;
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("ai_compass_lang", newLang);
      document.documentElement.lang = newLang;
    } catch (e) {
      console.error(e);
    }
  };

  const toggleLang = () => {
    const nextLang = lang === "ja" ? "en" : "ja";
    setLang(nextLang);
  };

  const t = translations[lang];
  const isEn = lang === "en";

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isEn }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
