import { useState } from "react";
import { useTranslation } from "react-i18next";

// Definir la interfaz para un álbum
export interface Album {
  id: number;
  title: string;
  year: string;
  cover: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  youtubeUrl: string;
  bandcampUrl: string;
  soundcloudUrl: string;
  tidalUrl: string;
  generalInfo: string;
  label?: string;
  producer?: string;
  recordingStudio?: string;
  musicians?: Array<{ role: string; name: string }>;
  additionalCredits?: string;
  tracks: Array<{
    id: number;
    title: string;
    duration: string;
    lyrics?: { es: string; en: string };
  }>;
}

// Definir la interfaz para el resultado del hook
export interface AlbumManagerResult {
  albums: Album[];
  currentAlbum: Album;
  activeAlbum: number;
  isAnimating: boolean;
  animationDirection: "enter" | "exit";
  handleAlbumChange: (albumId: number) => void;
  getSpotifyAlbumId: (url: string) => string;
}

export function useAlbumManager(): AlbumManagerResult {
  const { t } = useTranslation("music");
  const [activeAlbum, setActiveAlbum] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<
    "enter" | "exit"
  >("enter");

  // Obtener los álbumes del archivo de traducción
  const albums = t("albums", { returnObjects: true }) as Album[];

  // Encontrar el álbum activo
  const currentAlbum =
    albums.find((album) => album.id === activeAlbum) || albums[0];

  // Manejar el cambio de álbum con animación
  const handleAlbumChange = (albumId: number) => {
    if (albumId === activeAlbum || isAnimating) return;

    // Iniciar animación de salida
    setAnimationDirection("exit");
    setIsAnimating(true);

    // Después de que termine la animación de salida, cambiar el álbum
    setTimeout(() => {
      setActiveAlbum(albumId);
      setAnimationDirection("enter");

      // Resetear el estado de animación después de que termine la animación de entrada
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 500);
  };

  // Función auxiliar para extraer el ID del álbum de Spotify de la URL
  const getSpotifyAlbumId = (url: string): string => {
    // Ejemplo de URL: https://open.spotify.com/album/1DFixLWuPkv3KT3TnV35m3
    try {
      const parts = url.split("/");
      return parts[parts.length - 1].split("?")[0];
    } catch (error) {
      console.error("Error extracting Spotify album ID:", error);
      return "";
    }
  };

  return {
    albums,
    currentAlbum,
    activeAlbum,
    isAnimating,
    animationDirection,
    handleAlbumChange,
    getSpotifyAlbumId,
  };
}
