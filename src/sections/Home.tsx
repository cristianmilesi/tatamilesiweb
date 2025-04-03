"use client";

import type React from "react";
import { useRef, useState } from "react";
import home from "../i18n/locales/en/home.json";
// Eliminado el import no utilizado de framer-motion

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // URL de Cloudinary - reemplaza con tu propia URL
  const cloudinaryVideoUrl = {
    mp4: "https://res.cloudinary.com/dx4kaqyx0/video/upload/f_auto:video,q_auto/v1/TataMilesi/videos/TataWebVideo1.mp4",
    webm: "https://res.cloudinary.com/dx4kaqyx0/video/upload/f_auto:video,q_auto/v1/TataMilesi/videos/TataWebVideo2",
  };

  const handleVideoModal = () => {
    // Logic to open video modal would go here
    console.log("Open video modal");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font">
      {/* Contenido de texto */}
      <div
        className="md:w-1/2 md:absolute md:left-0 md:top-0 md:bottom-0 md:z-10 
                      flex items-center justify-center p-4 bg-black/60 md:bg-transparent"
      >
        <div className="max-w-xl text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 bg-transparent p-4 inline-block">
            {home.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {home.heroSubtitle}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {home.ctaButtons.map((button, index) => {
              // Botón primario (Latest Release)
              if (button.type === "primary") {
                return (
                  <a
                    key={index}
                    href={button.link}
                    className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center hover:bg-gray-200 transition duration-300"
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
                    className="border-2 border-white text-white px-6 py-3 rounded-full font-bold flex items-center hover:bg-white hover:bg-opacity-10 transition duration-300"
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
                    className="bg-bordo text-white px-6 py-3 rounded-full font-bold flex items-center hover:bg-red-700 transition duration-300"
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

      {/* Video Background - Movido fuera del div de contenido */}
      <div className="relative w-full md:absolute md:inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full md:h-full object-cover"
        >
          <source src={cloudinaryVideoUrl.mp4} type="video/mp4" />
          <source src={cloudinaryVideoUrl.webm} type="video/webm" />
          <img
            src="https://res.cloudinary.com/dx4kaqyx0/image/upload/f_auto,q_auto/v1/TataMilesi/photos/rniznsdzkhsihn5ls2q8.jpg"
            alt="Background fallback"
            className="w-full h-full object-cover"
          />
        </video>
      </div>
    </div>
  );
};

export default Home;
