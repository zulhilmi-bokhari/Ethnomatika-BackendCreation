import React, { useState, useEffect } from "react";
import { GalleryThumbnails, View, Users } from "lucide-react";
import { ethnicData } from "../data/ethnicData";

export const HeritageGallery = ({
  selectedEthnic,
  onExhibitSelect,
  onNavigate,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const exhibits =
    (selectedEthnic && ethnicData[selectedEthnic.id]?.exhibits) || [];
  const allCategories = [
    "All",
    ...new Set(exhibits.map((item) => item.category)),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300); // Simulate loading
    return () => clearTimeout(timer);
  }, [selectedEthnic, activeCategory]);

  const filteredExhibits =
    activeCategory === "All"
      ? exhibits
      : exhibits.filter((exhibit) => exhibit.category === activeCategory);

  if (!selectedEthnic) {
    return (
      <div className="p-8 pt-24 min-h-screen text-white flex flex-col justify-center items-center text-center">
        <GalleryThumbnails className="w-24 h-24 text-stone-500 mb-4" />
        <h2 className="text-3xl font-serif font-bold text-stone-300 mb-2">
          The Heritage Gallery is Vast
        </h2>
        <p className="text-lg text-stone-400 mb-6 max-w-md">
          Please select an ethnic group to view their unique cultural artifacts.
        </p>
        <button
          onClick={() => onNavigate("landing")}
          className="bg-[#A24936] hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
        >
          Select an Ethnic Group
        </button>
      </div>
    );
  }

  return (
    <div
      className="p-8 pt-24 min-h-screen text-white"
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/pua.png')`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-serif font-bold text-stone-900 mb-4 text-center">
          The Heritage Gallery:{" "}
          <span className="text-[#D3A625]">{selectedEthnic.name}</span>
        </h2>
        <p className="text-xl text-stone-500 mb-8 text-center">
          Explore the sights and sounds of the {selectedEthnic.name} legacy.
        </p>

        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold transition-colors cursor-pointer ${
                activeCategory === category
                  ? "bg-[#D3A625] text-black"
                  : "bg-stone-700 text-stone-200 hover:bg-stone-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-stone-800 rounded-lg overflow-hidden animate-pulse"
                >
                  <div className="w-full h-56 bg-stone-700"></div>
                  <div className="p-5">
                    <div className="h-4 bg-stone-700 rounded w-1/3 mb-2"></div>
                    <div className="h-6 bg-stone-700 rounded w-3/4"></div>
                  </div>
                </div>
              ))
            : filteredExhibits.map((exhibit) => (
                <div
                  key={exhibit.id}
                  onClick={() => onExhibitSelect(exhibit)}
                  className="bg-stone-800 rounded-lg overflow-hidden shadow-lg hover:shadow-[#D3A625]/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                >
                  <div className="relative">
                    <img
                      src={exhibit.imageUrl}
                      alt={exhibit.title}
                      className="w-full h-56 object-cover"
                    />
                    {(exhibit.arEnabled || exhibit.type === "vr") && (
                      <div className="absolute top-3 right-3 bg-black/50 p-2 rounded-full">
                        <View className="text-white" size={24} />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#D3A625] font-semibold">
                      {exhibit.category}
                    </p>
                    <h4 className="text-xl font-bold text-white group-hover:text-[#D3A625] transition-colors mt-1">
                      {exhibit.title}
                    </h4>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
