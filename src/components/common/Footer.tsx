import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

// Función para scroll suave hacia secciones
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: "smooth",
    });
  }
};

const Footer: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-gray-800 text-gray-200 shadow-md py-4">
      <div className="ccontainer mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Nombre */}
        <h3 className="text-xl font-semibold whitespace-nowrap">Tata Milesi</h3>

        {/* Navegación */}
        <nav className="flex space-x-6 text-sm">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="hover:text-gray-400"
          >
            {t("header.home")}
          </a>
          <a
            href="#bio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("biography");
            }}
            className="hover:text-gray-400"
          >
            {t("header.biography")}
          </a>
          <a
            href="#music"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("music");
            }}
            className="hover:text-gray-400"
          >
            {t("header.music")}
          </a>
          <a
            href="#tour"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("tour");
            }}
            className="hover:text-gray-400"
          >
            {t("header.tour")}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="hover:text-gray-400"
          >
            {t("header.contact")}
          </a>
        </nav>

        {/* Redes Sociales */}
        <div className="flex space-x-4">
          <a
            href="https://instagram.com/tatamilesi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-gray-400" size={24} />
          </a>
          <a
            href="https://www.youtube.com/@tatamilesi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="hover:text-gray-400" size={24} />
          </a>
          <a
            href="https://open.spotify.com/intl-es/artist/60KRMxfvunVgqWVlFxi6kB?si=JhP2eYC2RGCRLwGrRtHj0g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify className="hover:text-gray-400" size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-2">
        <p>&copy; {t("footer.rights")} Tata Milesi 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
