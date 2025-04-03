import type React from "react";
import { Link } from "react-router-dom";

const Presskit: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300 mb-8"
        >
          <span className="mr-2">←</span>
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Press Kit</h1>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Download official press materials, photos, music, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="/placeholder.svg?height=800&width=600"
              alt="Official press photo"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Biography</h2>
            <div className="prose max-w-none">
              <p>
                Songwriter Name is an independent artist based in Madrid, Spain.
                With a unique blend of folk, indie, and electronic influences,
                they have been captivating audiences worldwide since their debut
                in 2018.
              </p>
              <p>
                Their music has been featured in various films, TV shows, and
                commercials, including [Example Film] and [Example Show]. They
                have performed at major festivals such as [Festival Name] and
                [Festival Name], and have toured extensively throughout Europe
                and North America.
              </p>
              <p>
                Their latest album, "Album Title" (2024), has received critical
                acclaim from publications like [Publication] and [Publication],
                with [Publication] calling it "a masterpiece of modern
                songwriting."
              </p>
              <p>
                Songwriter Name is currently signed to [Label Name] and is
                represented by [Management Company].
              </p>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition duration-300"
              >
                <span className="mr-2">⬇️</span>
                Download Full Bio (PDF)
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-indigo-600 mr-2">🖼️</span>
              <h3 className="text-xl font-bold">Photos</h3>
            </div>
            <p className="text-gray-600 mb-4">
              High-resolution press photos for media use.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300"
            >
              <span className="mr-1">⬇️</span>
              Download Photos
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-indigo-600 mr-2">🎵</span>
              <h3 className="text-xl font-bold">Music</h3>
            </div>
            <p className="text-gray-600 mb-4">Audio files and album artwork.</p>
            <a
              href="#"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300"
            >
              <span className="mr-1">⬇️</span>
              Download Music
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-indigo-600 mr-2">📄</span>
              <h3 className="text-xl font-bold">Press Releases</h3>
            </div>
            <p className="text-gray-600 mb-4">Latest news and announcements.</p>
            <a
              href="#"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300"
            >
              <span className="mr-1">⬇️</span>
              Download Press Releases
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-indigo-600 mr-2">📅</span>
              <h3 className="text-xl font-bold">Tour Dates</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Current and upcoming performances.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300"
            >
              <span className="mr-1">⬇️</span>
              Download Tour Schedule
            </a>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-bold mb-6">Selected Press Quotes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-indigo-600 pl-4">
              <p className="italic text-gray-700 mb-2">
                "One of the most promising songwriters of their generation. A
                rare talent that combines technical skill with raw emotional
                power."
              </p>
              <p className="font-medium">— Music Magazine</p>
            </div>

            <div className="border-l-4 border-indigo-600 pl-4">
              <p className="italic text-gray-700 mb-2">
                "Their latest album showcases a maturity and depth that sets
                them apart from their contemporaries."
              </p>
              <p className="font-medium">— The Music Review</p>
            </div>

            <div className="border-l-4 border-indigo-600 pl-4">
              <p className="italic text-gray-700 mb-2">
                "A live performance that captivates from the first note to the
                last. Unmissable."
              </p>
              <p className="font-medium">— Concert Weekly</p>
            </div>

            <div className="border-l-4 border-indigo-600 pl-4">
              <p className="italic text-gray-700 mb-2">
                "Their songwriting has a timeless quality that resonates with
                listeners of all ages."
              </p>
              <p className="font-medium">— Indie Music Blog</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Management</h3>
              <p className="text-gray-700">Manager Name</p>
              <a
                href="mailto:manager@example.com"
                className="text-indigo-600 hover:text-indigo-800 transition duration-300"
              >
                manager@example.com
              </a>
              <p className="text-gray-700">+34 123 456 789</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Booking</h3>
              <p className="text-gray-700">Booking Agent Name</p>
              <a
                href="mailto:booking@example.com"
                className="text-indigo-600 hover:text-indigo-800 transition duration-300"
              >
                booking@example.com
              </a>
              <p className="text-gray-700">+34 987 654 321</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Press</h3>
              <p className="text-gray-700">PR Representative Name</p>
              <a
                href="mailto:press@example.com"
                className="text-indigo-600 hover:text-indigo-800 transition duration-300"
              >
                press@example.com
              </a>
              <p className="text-gray-700">+34 456 789 123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presskit;
