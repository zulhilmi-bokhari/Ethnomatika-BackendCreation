import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { borneoEthnicGroups } from "../data/ethnicData";

export const EthnicCarousel = ({ onEthnicSelect, activeIndex, setActiveIndex }) => {
  const totalItems = borneoEthnicGroups.length;
  const angle = 360 / totalItems;
  const radius = 320; // Increased radius for larger cards

  const rotate = (newIndex) => {
    if (newIndex < 0) {
      newIndex = totalItems - 1;
    } else if (newIndex >= totalItems) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const handleItemClick = (index) => {
    if (index === activeIndex) {
      onEthnicSelect(borneoEthnicGroups[index]);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div className="relative w-full h-[30rem] flex flex-col items-center justify-center overflow-hidden">
        <div className="scene w-64 h-80">
          <div
            className="carousel"
            style={{ transform: `rotateY(${-activeIndex * angle}deg)` }}
          >
            {borneoEthnicGroups.map((ethnic, index) => {
              const itemAngle = index * angle;
              return (
                // The container for each item in the 3D space
                <div
                  key={ethnic.id}
                  className="carousel-item w-64 h-80 group" // Set dimensions here
                  style={{
                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  }}
                  onClick={() => handleItemClick(index)}
                >
                  {/* The modern card design is placed inside */}
                  <div
                    className={`w-full h-full rounded-2xl overflow-hidden cursor-pointer relative transition-all duration-300
                      ${
                        index === activeIndex
                          ? "opacity-100 scale-100 shadow-md"
                          : "opacity-60 scale-75 group-hover:opacity-100 group-hover:scale-90"
                      }
                    `}
                  >
                    <img
                      src={ethnic.image}
                      alt={ethnic.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-left">
                      <h3 className="text-white text-3xl font-bold font-serif">
                        {ethnic.name}
                      </h3>
                      <p className="text-white/70">{ethnic.greeting}</p>
                    </div>
                    <div className={`absolute inset-0 border-4 rounded-2xl transition-all duration-300 ${activeIndex === index ? 'border-white' : 'border-transparent'}`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-7 flex items-center justify-center w-84">
          <button
            onClick={() => rotate(activeIndex - 1)}
            className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors absolute cursor-pointer left-0"
          >
            <ChevronLeft size={20} />
          </button>
          {/* The ethnic name display has been removed from here */}
          <button
            onClick={() => rotate(activeIndex + 1)}
            className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors absolute cursor-pointer right-0"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
};
