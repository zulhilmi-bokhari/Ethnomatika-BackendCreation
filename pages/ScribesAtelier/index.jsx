import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BookOpen } from "lucide-react";

export const ScribesAtelier = ({ selectedEthnic, onNavigate, currentLesson, setCurrentLesson, showBadge, onExhibitSelect }) => {

  if (!selectedEthnic) {
    return (
      <div className="p-8 min-h-screen bg-[#F4F1DE] flex flex-col justify-center items-center text-center">
        <BookOpen className="w-24 h-24 text-stone-400 mb-4" />
        <h2 className="text-3xl font-serif font-bold text-stone-700 mb-2">
          The Scribe's Atelier Awaits
        </h2>
        <p className="text-lg text-stone-500 mb-6 max-w-md">
          Please select an ethnic group to begin your language learning journey.
        </p>
        <Link to="/"
          onClick={() => onNavigate("landing")} state={{ skipWelcome: true }}
          className="bg-[#A24936] hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
        >
          Select an Ethnic Group
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 pt-24 min-h-screen bg-[#F4F1DE]">
      <div className="container mx-auto">
        <Outlet context={{ selectedEthnic }} />
      </div>
    </div>
  );
};
