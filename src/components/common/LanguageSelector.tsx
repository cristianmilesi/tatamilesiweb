// src/components/common/LanguageSelector.tsx
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Opcional: guardar la preferencia en localStorage
    localStorage.setItem("language", lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage("es")}
        className={`px-2 py-1 text-sm rounded-md transition-colors ${
          i18n.language === "es"
            ? "bg-white text-black font-bold"
            : "text-white hover:bg-white/20"
        }`}
        aria-label="Cambiar a español"
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 py-1 text-sm rounded-md transition-colors ${
          i18n.language === "en"
            ? "bg-white text-black font-bold"
            : "text-white hover:bg-white/20"
        }`}
        aria-label="Change to English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
