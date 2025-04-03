"use client";

import type React from "react";
import { useState } from "react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Live performance at concert hall",
      category: "live",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Studio recording session",
      category: "studio",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Behind the scenes at music video",
      category: "behind-the-scenes",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=800&width=800",
      alt: "Portrait photoshoot",
      category: "portraits",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Festival performance",
      category: "live",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Backstage moment",
      category: "behind-the-scenes",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Recording vocals",
      category: "studio",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=800&width=800",
      alt: "Promotional photoshoot",
      category: "portraits",
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "live", label: "Live Shows" },
    { id: "studio", label: "Studio" },
    { id: "behind-the-scenes", label: "Behind the Scenes" },
    { id: "portraits", label: "Portraits" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((image) => image.category === activeFilter);

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A visual journey through performances, studio sessions, and more.
          </p>
        </div>

        <div className="flex justify-center mb-10 flex-wrap">
          <div className="inline-flex bg-gray-100 rounded-full p-1 flex-wrap justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 m-1 rounded-full text-sm font-medium transition duration-300 ${
                  activeFilter === filter.id
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">
              No images found in this category.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition duration-300"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition duration-300"
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
