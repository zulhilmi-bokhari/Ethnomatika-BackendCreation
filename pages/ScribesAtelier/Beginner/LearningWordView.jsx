import React, { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, Check, Volume2 } from "lucide-react";

export default function LearningWordsMerged({ lesson, onBack, onComplete, selectedEthnic }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedIds, setCompletedIds] = useState(new Set());
  const [isPlaying, setIsPlaying] = useState(false);

  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use provided items or fallback
  const items = useMemo(() => {
    return (
      lesson?.items || [
        {
          id: 1,
          title: "EATING",
          img: "/src/assets/images/learn_image/eating.png",
          translation: "Mogoribas",
          description: "This word is used when referring to the action of consuming food.",
          example: "Nogoribas ak di rumah",
          pronunciation: "/mo-go-ri-bas/",
        },
        {
          id: 2,
          title: "COUGHING",
          img: "/src/assets/images/learn_image/coughing.png",
          translation: "Kukul",
          description: "This word describes the act of coughing.",
          example: "Kukul ak di rumah sakit",
          pronunciation: "/ku-kul/",
        },
      ]
    ).map((item) => ({
      ...item,
      translation: item.translation || "N/A",
      example: item.example || "No example available",
    }));
  }, [lesson]);

  const current = items[currentIndex];

  const markCurrent = () => {
    setCompletedIds((prev) => new Set(prev).add(current.id));
  };

  const handleNext = () => {
    markCurrent();
    if (currentIndex < items.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      onComplete?.(lesson);
    }
  };

  const handleBackSlide = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const playAudio = (text, lang = "ms-MY", file) => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 1000);

	const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang; // can be "ms-MY", "id-ID", etc.
    speechSynthesis.speak(utterance);

    // const audio = new Audio(file);
    // audio.play();
  };

  const progressPercent = Math.round((completedIds.size / items.length) * 100);
  const allLearned = completedIds.size === items.length;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F4F1DE] text-[#5C4033] gap-6">
      {/* Main Content */}
      <div className="flex-1">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="text-[#A24936] hover:text-red-800 font-semibold mb-6 flex items-center gap-2"
        >
          <ChevronLeft /> Back to Lessons
        </button>

        {/* Title */}
        <h2 className="text-3xl font-serif font-bold text-stone-800 mb-2">
          {lesson?.title || "Learn New Words"}
        </h2>
        <p className="text-lg text-stone-600 mb-6">
          Study these words carefully before moving on to the practice.
        </p>

        {/* Card */}
        <div className="bg-white border border-[#5C4033] rounded-xl p-6 shadow-lg max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-stone-800 mb-4">{current.title}</h3>

          {/* Image */}
          {current.img && (
            <img
              src={current.img}
              alt={current.title}
              className="mx-auto mb-4 rounded-lg shadow w-48"
              onError={(e) => (e.target.src = "/api/placeholder/200/150")}
            />
          )}

          {/* Translation + Audio */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <p className="text-xl font-bold text-[#A24936]">{current.translation}</p>
            <button
              onClick={() => playAudio(current.translation)}
              disabled={isPlaying}
              className="p-2 bg-[#A24936] text-white rounded-full hover:bg-red-800 disabled:opacity-50"
            >
              <Volume2 size={20} />
            </button>
          </div>
          {current.pronunciation && (
            <p className="text-sm text-stone-500 italic mb-4">{current.pronunciation}</p>
          )}

          {/* Description */}
          {current.description && (
            <p className="text-stone-600 mb-4 italic">{current.description}</p>
          )}

          {/* Example */}
          {current.example && (
            <p className="text-stone-700 text-sm mb-4 bg-stone-50 p-3 rounded border">
              <span className="font-semibold">Example:</span> {current.example}
            </p>
          )}

          {/* Feedback */}
          <div className="flex items-center justify-center gap-2 text-green-700 font-semibold">
            <Check size={18} />
            {completedIds.has(current.id)
              ? "Word learned! Great job!"
              : "Click Next when you're ready to continue"}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6 max-w-xl mx-auto">
          <button
            onClick={handleBackSlide}
            disabled={currentIndex === 0}
            className="px-4 py-2 border-2 rounded-lg shadow-sm text-stone-700 hover:bg-stone-50 disabled:opacity-40 flex items-center gap-1"
          >
            <ChevronLeft size={16} /> Back
          </button>
          <span className="text-stone-600 font-medium">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-[#A24936] text-white rounded-lg shadow-sm hover:bg-red-800 flex items-center gap-1 font-semibold"
          >
            {currentIndex === items.length - 1 ? "Complete" : "Next"}
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Completion message */}
        {allLearned && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg text-center max-w-xl mx-auto">
            <h4 className="font-bold text-green-800 mb-2">🎉 Congratulations!</h4>
            <p className="text-green-700">
              You've completed all the words in this lesson. Great job learning{" "}
              {selectedEthnic?.name} vocabulary!
            </p>
          </div>
        )}
      </div>

      {/* Sidebar Progress */}
      <aside className="w-full lg:w-64 p-4 bg-white border border-[#5C4033] rounded-xl shadow h-fit">
        <p className="text-sm font-semibold mb-3 text-stone-800">LEARNING PROGRESS</p>
        <div className="h-3 w-full bg-stone-200 rounded-full mb-2">
          <div
            className="h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <p className="text-xs text-center text-stone-600 mb-4">
          {completedIds.size} of {items.length} words learned
        </p>

        {/* Word status list */}
        <div className="space-y-2">
          {items.map((word) => (
            <div key={word.id} className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full mr-3 flex-shrink-0 ${
                  completedIds.has(word.id)
                    ? "bg-green-500"
                    : word.id === current.id
                    ? "bg-[#A24936]"
                    : "bg-gray-300"
                }`}
              ></div>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-stone-800 block truncate">
                  {word.title}
                </span>
                <span className="text-xs text-stone-500">{word.translation}</span>
              </div>
              {completedIds.has(word.id) && (
                <Check size={14} className="text-green-500 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
