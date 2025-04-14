import type React from "react";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <div id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <div className="w-20 h-1 bg-verde mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">
              {t("contact.information")}{" "}
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <FaEnvelope className="text-verde mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">{t("contact.email")}</h4>
                  <a
                    href="mailto:tatamilesimusica@gmail.com"
                    className="text-gray-600 hover:text-indigo-600 transition duration-300"
                  >
                    tatamilesimusica@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <FaMapMarkerAlt className="text-verde mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">{t("contact.location")} </h4>
                  <p className="text-gray-600">Ingolstadt, Deutschland</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-6">
              {t("contact.folow-me")}{" "}
            </h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <a
                  href="https://instagram.com/tatamilesi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-verdeclaro hover:text-white transition duration-300 flex items-center"
                >
                  <AiFillInstagram className="text-verdeoscuro size-6" />
                </a>
                <span className="ml-2">@tatamilesi</span>
              </div>

              <div className="flex items-center">
                <a
                  href="https://www.facebook.com/tatamilesimusica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-verdeclaro hover:text-white transition duration-300 flex items-center"
                >
                  <FaFacebookSquare className="text-verdeoscuro size-6" />
                </a>
                <span className="ml-2">@tatamilesimusica</span>
              </div>

              <div className="flex items-center">
                <a
                  href="https://www.youtube.com/@tatamilesi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-verdeclaro hover:text-white transition duration-300 flex items-center"
                >
                  <FaYoutube className="text-verdeoscuro size-6" />
                </a>
                <span className="ml-2">@tatamilesi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
