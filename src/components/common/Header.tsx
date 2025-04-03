import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

// Función para scroll suave hacia secciones
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Offset para el header fijo
      behavior: "smooth",
    });
  }
};

const Header: React.FC = () => {
  const { t } = useTranslation("common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-black shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-2xl font-bold"
          >
            Tata Milesi
          </a>

          {/* Menú para móvil */}
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Menú para desktop */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="hover:text-secondary"
            >
              {t("header.home")}
            </a>
            <a
              href="#biography"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("biography");
              }}
              className="hover:text-secondary"
            >
              {t("header.biography")}
            </a>
            <a
              href="#music"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("music");
              }}
              className="hover:text-secondary"
            >
              {t("header.music")}
            </a>
            <a
              href="#tour"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("tour");
              }}
              className="hover:text-secondary"
            >
              {t("header.tour")}
            </a>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("gallery");
              }}
              className="hover:text-secondary"
            >
              {t("header.gallery")}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="hover:text-secondary"
            >
              {t("header.contact")}
            </a>
          </nav>

          <div className="hidden md:block">
            <LanguageSelector />
          </div>
        </div>

        {/* Menú móvil expandido */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-3">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                  setIsMenuOpen(false);
                }}
                className="hover:text-secondary"
              >
                {t("header.home")}
              </a>
              <a
                href="#biography"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("biography");
                  setIsMenuOpen(false);
                }}
                className="hover:text-secondary"
              >
                {t("header.biography")}
              </a>
              <a
                href="#music"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("music");
                  setIsMenuOpen(false);
                }}
                className="hover:text-secondary"
              >
                {t("header.music")}
              </a>
              <a
                href="#tour"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("tour");
                  setIsMenuOpen(false);
                }}
                className="hover:text-secondary"
              >
                {t("header.tour")}
              </a>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("gallery");
                  setIsMenuOpen(false);
                }}
                className="hover:text-secondary"
              >
                {t("header.gallery")}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
                className="hover:text-secondary"
              >
                {t("header.contact")}
              </a>
              <LanguageSelector />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
