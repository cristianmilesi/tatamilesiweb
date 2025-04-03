import React, { useState, useEffect } from "react";
import { Modal } from "../common/Modal";

interface Track {
  id: number;
  title: string;
  lyricsPath?: {
    es?: string;
    en?: string;
  };
}

interface Album {
  id: number;
  title: string;
  tracks: Track[];
}

interface LyricsModalProps {
  isOpen: boolean;
  onClose: () => void;
  album: Album;
}

const LyricsModal: React.FC<LyricsModalProps> = ({
  isOpen,
  onClose,
  album,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<"es" | "en">("es");
  const [loadedLyrics, setLoadedLyrics] = useState<
    Record<string, Record<string, string>>
  >({});

  // Cargar letras solo cuando el modal esté abierto
  useEffect(() => {
    if (!isOpen) return;

    // Cargar las letras para el álbum actual
    const loadLyrics = async () => {
      const lyricsData: Record<string, Record<string, string>> = {};

      for (const track of album.tracks) {
        lyricsData[track.id] = {};

        // Si tenemos rutas a archivos de letras, intentamos cargarlos
        if (track.lyricsPath) {
          if (track.lyricsPath.es) {
            try {
              const response = await fetch(track.lyricsPath.es);
              if (response.ok) {
                lyricsData[track.id].es = await response.text();
              }
            } catch (error) {
              console.error(
                `Error loading Spanish lyrics for track ${track.id}`,
                error
              );
            }
          }

          if (track.lyricsPath.en) {
            try {
              const response = await fetch(track.lyricsPath.en);
              if (response.ok) {
                lyricsData[track.id].en = await response.text();
              }
            } catch (error) {
              console.error(
                `Error loading English lyrics for track ${track.id}`,
                error
              );
            }
          }
        }
      }

      setLoadedLyrics(lyricsData);
    };

    loadLyrics();
  }, [isOpen, album]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Letras - ${album.title}`}>
      <div>
        {/* Selector de idioma */}
        <div className="mb-6 flex justify-end">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setCurrentLanguage("es")}
              className={`px-4 py-1 rounded-full text-sm font-medium transition duration-300 ${
                currentLanguage === "es"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Español
            </button>
            <button
              onClick={() => setCurrentLanguage("en")}
              className={`px-4 py-1 rounded-full text-sm font-medium transition duration-300 ${
                currentLanguage === "en"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Lista de canciones con letras */}
        <div className="space-y-8">
          {album.tracks.map((track, index) => (
            <div key={track.id} className="border-b pb-6 last:border-b-0">
              <h4 className="text-lg font-semibold mb-2">
                {index + 1}. {track.title}
              </h4>
              <div className="whitespace-pre-line text-gray-700">
                {loadedLyrics[track.id]?.[currentLanguage] ||
                  (currentLanguage === "es"
                    ? "Letra en español no disponible."
                    : "English lyrics not available.")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default LyricsModal;
