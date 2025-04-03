import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Importa las traducciones iniciales
import commonEN from "./locales/en/common.json";
import homeEN from "./locales/en/home.json";
import musicEN from "./locales/en/music.json";
import tourEN from "./locales/en/tour.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: commonEN,
        home: homeEN,
        music: musicEN,
        tour: tourEN,
      },
    },
    lng: "en", // Lenguaje inicial (inglés)
    fallbackLng: "en",
    supportedLngs: ["en", "es", "de"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["path", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
    defaultNS: "common",
  });

export default i18n;
