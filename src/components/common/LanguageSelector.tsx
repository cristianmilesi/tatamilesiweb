import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation("common");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`px-2 py-1 rounded text-sm ${
          i18n.language === "en"
            ? "bg-secondary text-white"
            : "bg-gray-700 text-gray-200"
        }`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={`px-2 py-1 rounded text-sm ${
          i18n.language === "es"
            ? "bg-secondary text-white"
            : "bg-gray-700 text-gray-200"
        }`}
        onClick={() => changeLanguage("es")}
        disabled={true} // Temporalmente deshabilitado
      >
        ES
      </button>
      <button
        className={`px-2 py-1 rounded text-sm ${
          i18n.language === "de"
            ? "bg-secondary text-white"
            : "bg-gray-700 text-gray-200"
        }`}
        onClick={() => changeLanguage("de")}
        disabled={true} // Temporalmente deshabilitado
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSelector;
