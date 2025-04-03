import type React from "react";
import biography from "../i18n/locales/en/biography.json";

const Biography: React.FC = () => {
  return (
    <div className="py-20 bg-gray-100/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{biography.pageTitle}</h2>
          <div className="w-20 h-1 bg-verde mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">{biography.storyTitle}</h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {biography.storyParagraphs[0]}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {biography.storyParagraphs[1]}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {biography.storyParagraphs[2]}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {biography.storyParagraphs[3]}
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
              {/* <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-lg rounded">
                <p className="font-bold text-lg">
                  "Music is the universal language that connects us all."
                </p>
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-4xl font-bold text-indigo-600 mb-2">3</h4>
            <p className="text-gray-700 font-medium">Studio Albums</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-4xl font-bold text-indigo-600 mb-2">12</h4>
            <p className="text-gray-700 font-medium">Singles Released</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-4xl font-bold text-indigo-600 mb-2">250+</h4>
            <p className="text-gray-700 font-medium">Live Performances</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-4xl font-bold text-indigo-600 mb-2">5M+</h4>
            <p className="text-gray-700 font-medium">Streams Worldwide</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Biography;
