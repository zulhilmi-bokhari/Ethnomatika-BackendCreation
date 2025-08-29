import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { EthnicCarousel } from "../components/EthnicCarousel";
import { borneoEthnicGroups } from "../data/ethnicData";

const LandingPage = ({ onEthnicSelect, onAuthClick }) => {
  const location = useLocation(); // Get the location object from the router

  // --- FIX ---
  // Check if we arrived from the hub. If so, skip the welcome screen.
  // Otherwise, show it as normal.
  const [showWelcome, setShowWelcome] = useState(!location.state?.skipWelcome);
  
  const [animating, setAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBegin = () => {
    setAnimating(true);
    setTimeout(() => {
      setShowWelcome(false);
      setAnimating(false);
    }, 600);
  };

  const currentBackgroundImage = borneoEthnicGroups[activeIndex].image;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Welcome Screen */}
      {showWelcome && (
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center bg-[#cba564] z-50 transition-all duration-700 ${
            animating ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
          style={{ willChange: "opacity, transform" }}
        >
          <h1 className="text-5xl md:text-8xl font-serif font-extrabold text-white mb-8 drop-shadow-lg">
            ETHNOMATIKA
          </h1>
          <button
            onClick={handleBegin}
            className="bg-[#A24936] hover:bg-red-800 text-white font-bold py-4 px-10 rounded-lg text-2xl shadow-lg"
          >
            Begin Your Journey
          </button>
        </div>
      )}

      {/* Main Landing Content */}
      <main
        className={`flex-grow grid grid-cols-1 lg:grid-cols-2 transition-opacity duration-700 ${
          showWelcome ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div
          className="relative flex bg-black flex-col justify-center items-center text-center p-8 bg-cover bg-center text-white pt-24 lg:pt-8 transition-all duration-500 ease-in-out"
          style={{ backgroundImage: `url(${currentBackgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif font-extrabold mb-4 leading-tight">
              Step into the <span className="animate-pulse"><span className="text-red-500 animate-heartbeat transition inline-block">Heart</span></span> of Borneo.
            </h2>
            <p className="text-xl md:text-2xl text-stone-200 max-w-3xl">
              Discover the rich tapestry of indigenous cultures.
            </p>
          </div>
        </div>
        <div
          id="ethnic-selection"
          className="min-h-screen bg-[#cba564] py-20 px-8 text-center flex flex-col justify-center items-center"
        >
          <div>
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Begin Your Personalized Journey
            </h2>
            <EthnicCarousel
              onEthnicSelect={onEthnicSelect}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
