import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation("common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isContactSectionVisible, setIsContactSectionVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Controlar la visibilidad del header basado en el scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determinar si el usuario está haciendo scroll hacia arriba o hacia abajo
      if (currentScrollY > lastScrollY) {
        // Scroll hacia abajo - ocultar el header después de 100px
        if (currentScrollY > 100 && isHeaderVisible) {
          setIsHeaderVisible(false);
        }
      } else {
        // Scroll hacia arriba - mostrar el header
        if (!isHeaderVisible) {
          setIsHeaderVisible(true);
        }
      }

      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const contactSectionTop = contactSection.getBoundingClientRect().top;
        const contactSectionBottom =
          contactSection.getBoundingClientRect().bottom;
        const isVisible =
          contactSectionTop < window.innerHeight && contactSectionBottom > 0;
        setIsContactSectionVisible(isVisible);
      }

      // Mostrar el botón de scroll to top cuando se ha desplazado más de 500px
      // y no está en la sección de contacto
      if (currentScrollY > 500 && !isContactSectionVisible) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isHeaderVisible]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeaderVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } ${
          lastScrollY > 50
            ? "bg-gray-800 bg-opacity-90 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-white">
            {t("siteName")}
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              {t("header.home")}
            </a>
            <a
              href="#biography"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              {t("header.biography")}
            </a>
            <a
              href="#music"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              {t("header.music")}
            </a>
            <a
              href="#tour"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              {t("header.tour")}
            </a>
            {/* <a
              href="#gallery"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              {t("header.gallery")}
            </a> */}
            <a
              href="#contact"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              {t("header.contact")}
            </a>
            {/* <Link
              to="/presskit"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              {t("header.presskit")}
            </Link> */}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-black bg-opacity-95 py-4 px-4 transition-all duration-300 ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.home")}
            </a>
            <a
              href="#biography"
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.biography")}
            </a>
            <a
              href="#music"
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.music")}
            </a>
            <a
              href="#tour"
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.tour")}
            </a>
            {/* <a
              href="#gallery"
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.gallery")}
            </a> */}
            <a
              href="#contact"
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.contact")}
            </a>
            {/* <Link
              to="/presskit"
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.presskit")}
            </Link> */}
          </div>
        </div>
      </header>

      {/* Botón flotante para volver arriba */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-marron text-white p-3 rounded-full shadow-lg hover:bg-marron hover:opacity-90 transition-all duration-300 z-50 ${
          showScrollToTop && !isContactSectionVisible
            ? "opacity-70 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Volver arriba"
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default Header;
