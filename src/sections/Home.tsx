import type React from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation("home");

  // URL de Cloudinary - reemplaza con tu propia URL
  const cloudinaryVideoUrl = {
    mp4: "https://res.cloudinary.com/dx4kaqyx0/video/upload/f_auto:video,q_auto/v1/TataMilesi/videos/TataWebVideo1.mp4",
    webm: "https://res.cloudinary.com/dx4kaqyx0/video/upload/f_auto:video,q_auto/v1/TataMilesi/videos/TataWebVideo2",
  };

  const ctaButtons = t("ctaButtons", { returnObjects: true }) as Array<{
    text: string;
    link: string;
    type: string;
  }>;

  return (
    <div
      id="home"
      className=" min-h-screen flex flex-col overflow-hidden bg-verdeoscuro"
    >
      <div className="w-full h-[50vh] md:h-screen md:absolute md:inset-0 md:z-0 m-0 p-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-[50vh] md:h-full object-cover"
        >
          <source src={cloudinaryVideoUrl.mp4} type="video/mp4" />
          <source src={cloudinaryVideoUrl.webm} type="video/webm" />
          <img
            src="https://res.cloudinary.com/dx4kaqyx0/image/upload/f_auto,q_auto/v1/TataMilesi/photos/rniznsdzkhsihn5ls2q8.jpg"
            alt="Background fallback"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </video>
      </div>

      <div className="w-full bg-verdeoscuro py-12  px-4 md:h-screen md:absolute md:inset-0 md:bg-transparent md:z-10 md:flex md:items-center">
        <div className="max-w-xl mx-auto md:mx-0 md:ml-12 lg:ml-24 text-white text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 bg-transparent  p-4 inline-block">
            {t("heroTitle")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8  md:p-4">
            {t("heroSubtitle")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {ctaButtons.map((button, index) => {
              // Botón primario (Latest Release)
              if (button.type === "primary") {
                return (
                  <a
                    key={index}
                    href={button.link}
                    className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center hover:bg-gray-200 transition duration-300"
                  >
                    {button.text}
                    <span className="ml-2">→</span>
                  </a>
                );
              }
              // Botón Secundario
              if (button.type === "secondary") {
                return (
                  <a
                    key={index}
                    href={button.link}
                    className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold flex items-center hover:bg-white hover:bg-opacity-10 transition duration-300 hover:text-gray-800"
                  >
                    {button.text}
                  </a>
                );
              }
              // Botón de Video
              if (button.type === "video") {
                return (
                  <a
                    key={index}
                    href={button.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-verdeoscuro text-white px-6 py-3 rounded-full font-semibold flex items-center hover:bg-gray-800 transition duration-300"
                  >
                    <span className="mr-2">▶</span>
                    {button.text}
                  </a>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
