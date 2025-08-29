import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Star, Zap, BrainCircuit } from "lucide-react";

export const LevelSelector = () => {
  const { selectedEthnic } = useOutletContext();

  return (
    <>
      <h2 className="text-4xl font-serif font-bold text-stone-800 mb-2">
        The Scribe's Atelier: <span className="text-[#A24936]">{selectedEthnic.name}</span>
      </h2>
      <p className="text-lg text-stone-600 mb-8">Choose your level to start learning.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="beginner"
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition"
        >
          <Star className="text-[#D3A625] w-12 h-12 mb-3" />
          <h3 className="text-xl font-bold">Beginner</h3>
          <p className="text-stone-500 mt-2">Start with basics & phrases</p>
        </Link>

        <Link
          to="intermediate"
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition"
        >
          <Zap className="text-orange-500 w-12 h-12 mb-3" />
          <h3 className="text-xl font-bold">Intermediate</h3>
          <p className="text-stone-500 mt-2">Expand your vocabulary</p>
        </Link>

        <Link
          to="advanced"
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition"
        >
          <BrainCircuit className="text-purple-500 w-12 h-12 mb-3" />
          <h3 className="text-xl font-bold">Advanced</h3>
          <p className="text-stone-500 mt-2">Deep dive into culture</p>
        </Link>
      </div>
    </>
  );
};
