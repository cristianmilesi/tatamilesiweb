import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useAlbumManager } from "../hooks/useAlbumManager";
import {
  FaSpotify,
  FaBandcamp,
  FaMusic,
  FaYoutube,
  FaClipboardList,
} from "react-icons/fa";
import { SiTidal } from "react-icons/si";
import LyricsModal from "../components/Music/LyricsModal";
import TechnicalSheetModal from "../components/Music/TechnicalSheetModal";
import { MdLyrics } from "react-icons/md";

const Music: React.FC = () => {
  const { t } = useTranslation("music");
  const [isTechnicalSheetOpen, setIsTechnicalSheetOpen] = useState(false);
  const [isLyricsOpen, setIsLyricsOpen] = useState(false);
  const [playerVisible, setPlayerVisible] = useState(false);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const {
    albums,
    currentAlbum,
    activeAlbum,
    isAnimating,
    animationDirection,
    handleAlbumChange,
    getSpotifyAlbumId,
  } = useAlbumManager();

  const animationClass = isAnimating ? `album-slide-${animationDirection}` : "";

  const technicalSheetLabels = {
    generalInfo: t("technicalSheetLabels.generalInfo"),
    title: t("technicalSheetLabels.title"),
    releaseYear: t("technicalSheetLabels.releaseYear"),
    label: t("technicalSheetLabels.label"),
    producer: t("technicalSheetLabels.producer"),
    recordingStudio: t("technicalSheetLabels.recordingStudio"),
    musicians: t("technicalSheetLabels.musicians"),
    additionalCredits: t("technicalSheetLabels.additionalCredits"),
  };

  // Configurar Intersection Observer para cargar Spotify cuando sea visible
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 0.1, // Cargar cuando al menos 10% del elemento sea visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPlayerVisible(true);
          // Desconectar el observer después de cargar
          observer.disconnect();
        }
      });
    }, options);

    if (playerContainerRef.current) {
      observer.observe(playerContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [activeAlbum]);

  // Función para extraer el ID del video de YouTube de la URL
  function getYoutubeVideoId(url: string): string {
    try {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11 ? match[2] : "";
    } catch (error) {
      console.error("Error extracting YouTube video ID:", error);
      return "";
    }
  }

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("pageTitle")}</h2>
          <div className="w-20 h-1 bg-verde mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t("pageDescription")}
          </p>
        </div>

        {/* Selector de álbumes */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {albums.map((album) => (
              <button
                key={album.id}
                onClick={() => handleAlbumChange(album.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  activeAlbum === album.id
                    ? "bg-verdeoscuro text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
                disabled={isAnimating} // Deshabilitar el botón durante la animación
              >
                {album.title}
              </button>
            ))}
          </div>
        </div>

        {/* Visualización del álbum activo */}
        <div className="relative overflow-hidden">
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-start ${animationClass}`}
          >
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <img
                  src={currentAlbum.cover || "/placeholder.svg"}
                  alt={`${currentAlbum.title} album cover`}
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-2xl font-bold">{currentAlbum.title}</h3>
                <p className="text-gray-600 mb-4">{currentAlbum.year}</p>

                <div className="flex flex-wrap gap-4 mb-6">
                  {/* Spotify - mostrar solo si hay URL */}
                  {currentAlbum.spotifyUrl && (
                    <a
                      href={currentAlbum.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-600 hover:text-green-700 transition duration-300"
                    >
                      <FaSpotify className="mr-2 text-xl" />
                      <span>Spotify</span>
                    </a>
                  )}
                  {currentAlbum.youtubeUrl && (
                    <a
                      href={currentAlbum.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-red-700 hover:text-bordo transition duration-300"
                    >
                      <FaYoutube className="mr-2 text-xl" />
                      <span>YouTube</span>
                    </a>
                  )}

                  {/* Apple Music - mostrar solo si hay URL */}
                  {currentAlbum.appleMusicUrl && (
                    <a
                      href={currentAlbum.appleMusicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-pink-600 hover:text-pink-700 transition duration-300"
                    >
                      <FaMusic className="mr-2 text-xl" />
                      <span>Apple Music</span>
                    </a>
                  )}

                  {/* Tidal - mostrar solo si hay URL */}
                  {currentAlbum.tidalUrl && (
                    <a
                      href={currentAlbum.tidalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700 transition duration-300"
                    >
                      <SiTidal className="mr-2 text-xl" />
                      <span>Tidal</span>
                    </a>
                  )}

                  {/* Bandcamp - mostrar solo si hay URL */}
                  {currentAlbum.bandcampUrl && (
                    <a
                      href={currentAlbum.bandcampUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-teal-600 hover:text-teal-700 transition duration-300"
                    >
                      <FaBandcamp className="mr-2 text-xl" />
                      <span>Bandcamp</span>
                    </a>
                  )}
                </div>

                {/* Botones para ficha técnica y letras */}
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => setIsTechnicalSheetOpen(true)}
                    className="text-verde hover:text-verdeoscuro transition duration-300 flex items-center"
                  >
                    <FaClipboardList />
                    {t("technicalSheetButton")}
                  </button>
                  <button
                    onClick={() => setIsLyricsOpen(true)}
                    className="text-verde hover:text-verdeoscuro transition duration-300 flex items-center"
                  >
                    <MdLyrics />
                    {t("lyricsButton")}
                  </button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              {/* Reproductor de Spotify o YouTube según disponibilidad */}
              <div
                ref={playerContainerRef}
                className="bg-gray-50 rounded-lg p-6"
              >
                {currentAlbum.spotifyUrl ? (
                  // Reproductor de Spotify
                  <>
                    <h4 className="text-xl font-semibold mb-4">
                      {t("listenOnSpotify")}
                    </h4>
                    <div className="aspect-auto h-[380px]">
                      {!playerVisible ? (
                        // Placeholder mientras se carga
                        <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center">
                          <div className="text-center">
                            <div className="animate-pulse w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                              <span className="text-2xl">🎵</span>
                            </div>
                            <p className="text-gray-600">
                              {t("loadingPlayer", "Cargando reproductor...")}
                            </p>
                          </div>
                        </div>
                      ) : (
                        // Reproductor de Spotify
                        <iframe
                          src={`https://open.spotify.com/embed/album/${getSpotifyAlbumId(
                            currentAlbum.spotifyUrl
                          )}`}
                          width="100%"
                          height="100%"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          title={`${currentAlbum.title} on Spotify`}
                          className="rounded-md"
                        ></iframe>
                      )}
                    </div>
                  </>
                ) : currentAlbum.youtubeUrl ? (
                  // Reproductor de YouTube (alternativa cuando no hay Spotify)
                  <>
                    <h4 className="text-xl font-semibold mb-4">
                      {t("watchOnYouTube")}
                    </h4>
                    <div className="aspect-video">
                      {!playerVisible ? (
                        // Placeholder mientras se carga
                        <div className="w-full h-0 pt-[56.25%] relative bg-gray-100 rounded-md">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="animate-pulse w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">▶️</span>
                              </div>
                              <p className="text-gray-600">
                                {t("loadingVideo", "Cargando video...")}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Reproductor de YouTube
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${getYoutubeVideoId(
                            currentAlbum.youtubeUrl
                          )}`}
                          title={`${currentAlbum.title} on YouTube`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-md"
                        ></iframe>
                      )}
                    </div>
                  </>
                ) : (
                  // Mensaje cuando no hay reproductor disponible
                  <div className="text-center py-8">
                    <p className="text-gray-500">{t("NoMusic")}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para Ficha Técnica */}
      <TechnicalSheetModal
        isOpen={isTechnicalSheetOpen}
        onClose={() => setIsTechnicalSheetOpen(false)}
        album={currentAlbum}
        labels={technicalSheetLabels}
      />

      {/* Modal para Letras */}
      <LyricsModal
        isOpen={isLyricsOpen}
        onClose={() => setIsLyricsOpen(false)}
        album={currentAlbum}
      />
    </div>
  );
};

export default Music;
