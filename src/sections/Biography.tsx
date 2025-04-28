import type React from "react";
import { useTranslation } from "react-i18next";

const Biography: React.FC = () => {
  const { t } = useTranslation("biography");
  return (
    <div className="py-20 bg-gray-100/40 aparicion">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("pageTitle")}</h2>
          <div className="w-20 h-1 bg-verde mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">{t("storyTitle")}</h3>

            <p className="text-gray-700 mb-6 leading-relaxed  text-pretty">
              {t("storyParagraphs.0")}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-pretty">
              {t("storyParagraphs.1")}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-pretty">
              {t("storyParagraphs.2")}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-pretty">
              {t("storyParagraphs.3")}
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dx4kaqyx0/image/upload/v1743587517/TataMilesi/photos/DSC_7750_wmcp15.jpg"
                alt="Songwriter portrait"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                style={{ maxHeight: "500px" }}
              />
              <div className="absolute bottom-3 right-3 bg-black/60 px-3 py-1 rounded-full">
                <p className="text-white text-xs">Ph: Jessica Cordoba</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
