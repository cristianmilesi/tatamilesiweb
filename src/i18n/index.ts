import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Importa las traducciones iniciales
import commonEN from "./locales/en/common.json";
import homeEN from "./locales/en/home.json";
import musicEN from "./locales/en/music.json";
import tourEN from "./locales/en/tour.json";
import biographyEN from "./locales/en/biography.json";
import commonES from "./locales/es/common.json";
import homeES from "./locales/es/home.json";
import musicES from "./locales/es/music.json";
import tourES from "./locales/es/tour.json";
import biographyES from "./locales/es/biography.json";

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
        biography: biographyEN,
      },
      es: {
        common: commonES,
        home: homeES,
        music: musicES,
        tour: tourES,
        biography: biographyES,
      },
    },

    fallbackLng: "en",
    ns: ["common", "home", "music", "tour", "biography"],
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
