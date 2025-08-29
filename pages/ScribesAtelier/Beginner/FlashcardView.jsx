import React from "react";
import { ChevronLeft, Volume2 } from "lucide-react";

export const FlashcardView = ({ lesson, onBack, onComplete }) => {
  window.scrollTo(0, 0);
  const [flippedCards, setFlippedCards] = React.useState([]);
  const allFlipped =
    flippedCards.length > 0 && flippedCards.length === lesson.phrases.length;

  React.useEffect(() => {
    if (allFlipped) {
      onComplete();
    }
  }, [allFlipped, onComplete]);

  // 🔄 Toggle flip
  const handleCardClick = (id) => {
    setFlippedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  // 🔊 Speak text (TTS)
  const handlePlay = (text, lang = "ms-MY", file) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang; // can be "ms-MY", "id-ID", etc.
    speechSynthesis.speak(utterance);

    // const audio = new Audio(file);
    // audio.play();
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="text-[#A24936] hover:text-red-800 font-semibold pb-4 flex items-center gap-2 hover:underline cursor-pointer"
      >
        <ChevronLeft /> Back to Lessons
      </button>

      <h2 className="text-3xl font-serif font-bold text-stone-800 mb-2">
        {lesson.title}
      </h2>
      <p className="text-lg text-stone-600 mb-8">
        Click on a card to flip it and see the translation.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {lesson.phrases.map((phrase) => (
          <div
            key={phrase.id}
            className="perspective-1000"
            onClick={() => handleCardClick(phrase.id)}
          >
            <div
              className={`relative w-full h-48 transition-transform duration-700 transform-style-3d ${
                flippedCards.includes(phrase.id) ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg flex items-center justify-center p-4 text-center cursor-pointer">
                <p className="text-xl font-semibold text-stone-800">
                  {phrase.english}
                </p>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full backface-hidden bg-[#A24936] text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-4 text-center rotate-y-180 cursor-pointer">
                <p className="text-xl font-semibold">{phrase.translation}</p>
                <button
                  className="mt-4 p-2 rounded-full bg-white/20 hover:bg-white/30 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent flipping
                    handlePlay(phrase.translation, phrase.lang || "ms-MY", '');
                  }}
                >
                  <Volume2 size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
