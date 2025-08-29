import React, { useMemo, useState } from "react";
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import eating from "../../../assets/images/exercise/eating.png";
import coughing from "../../../assets/images/exercise/coughing.png";
import laughing from "../../../assets/images/exercise/laughing.png";
import { ethnicData } from "../../../data/ethnicData";

export default function Exercise1({ lesson, onBack, onComplete, selectedEthnic }) {
  const ethnicKey = ethnicData[selectedEthnic.id]

  const navigate = useNavigate();

  // ---- fallback per-ethnic dictionary if lesson?.items isn't provided ----
  const fallbackByEthnic = {
    dusun: [
      { title: "COUGHING", img: coughing, translation: "Kukul" },
      { title: "EATING", img: eating, translation: "Mogoribas" },
      { title: "LAUGHING", img: laughing, translation: "Mingkakak" },
    ],
    kadazan: [
      { title: "COUGHING", img: coughing, translation: "Kukul" },
      { title: "EATING", img: eating, translation: "Mogoribas" },
      { title: "LAUGHING", img: laughing, translation: "Mingkakak" },
    ],
    bajau: [
      { title: "COUGHING", img: coughing, translation: "Batuk" },
      { title: "EATING", img: eating, translation: "Mangan" },
      { title: "LAUGHING", img: laughing, translation: "Katawa" },
    ],
    murut: [
      // TODO: replace with your actual Murut terms when ready
      { title: "COUGHING", img: coughing, translation: "Kukul" },
      { title: "EATING", img: eating, translation: "Mangan" },
      { title: "LAUGHING", img: laughing, translation: "Katawa" },
    ],
    iban: [
      // TODO: replace with your actual Iban terms when ready
      { title: "COUGHING", img: coughing, translation: "Batuk" },
      { title: "EATING", img: eating, translation: "Makan" },
      { title: "LAUGHING", img: laughing, translation: "Ketawa" },
    ],
  };

  // ---- helpers ----
  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const buildQuestions = (items) => {
    const total = items.length;
    const translations = items.map((x) => x.translation);

    return items.map((item, idx) => {
      // pick 2 distractors from the other translations
      const pool = translations.filter((t) => t !== item.translation);
      const distractors = shuffle(pool).slice(0, 2);
      const options = shuffle([item.translation, ...distractors]);

      return {
        id: idx + 1,
        total,
        english: item.title,
        img: item.img,
        options,
        correct: item.translation,
      };
    });
  };

  // ---- derive questions from lesson.items OR fallbackByEthnic ----
  const questions = useMemo(() => {
    const itemsFromLesson =
      lesson?.items?.map(it => ({
        title: it.title,
        img: it.img,
        translation: it.translation,
      })) || null;
  
    const sourceItems =
      itemsFromLesson && itemsFromLesson.length >= 3
        ? itemsFromLesson
        : fallbackByEthnic[ethnicKey] || fallbackByEthnic["dusun"];
  
    return buildQuestions(sourceItems);
  }, [lesson, ethnicKey]);

  // ---- state ----
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState({});
  const [score, setScore] = useState(0);
  const [xpProgress, setXpProgress] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion.id];
  const currentFeedback = showFeedback[currentQuestion.id];

  const handleSelect = (option) => {
    if (answers[currentQuestion.id]) return;
    const correct = option === currentQuestion.correct;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: { selected: option, isCorrect: correct },
    }));
    setShowFeedback((prev) => ({ ...prev, [currentQuestion.id]: true }));

    if (correct) {
      setScore((s) => s + 1);

      const total = questions.length;
      setXpProgress((prev) => {
        // compute percentage by correct answers
        const nextCorrect = score + 1; // score has not updated yet
        const pct = Math.round((nextCorrect / total) * 100);
        // if it's the last question and correct, force 100
        if (currentQuestionIndex === total - 1) return 100;
        return Math.min(pct, 100);
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
    } else {
      onComplete?.(lesson);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex((i) => i - 1);
  };

  const getButtonStyle = (option) => {
    const isSelected = currentAnswer?.selected === option;
    const isCorrectAnswer = option === currentQuestion.correct;
    const hasAnswered = !!currentAnswer;

    if (hasAnswered) {
      if (isSelected) {
        return currentAnswer.isCorrect
          ? "bg-green-100 border-green-500"
          : "bg-red-100 border-red-500";
      }
      if (isCorrectAnswer && !currentAnswer.isCorrect) {
        return "bg-green-200 border-green-500";
      }
      return "bg-stone-100 border-stone-300 opacity-70";
    }
    return "bg-white border-stone-400 hover:bg-stone-50";
  };

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={onBack}
        className="text-[#A24936] hover:text-red-800 font-semibold pb-4 flex items-center gap-2 hover:underline cursor-pointer"
      >
        <ChevronLeft /> Back to Lessons
      </button>

      {/* Title */}
      <h2 className="text-3xl font-serif font-bold text-stone-800 mb-2">
        Choose the Right Translation
      </h2>
      <p className="text-lg text-stone-600 mb-8">
        Pick the correct answer to earn XP.
      </p>

      {/* Question Card */}
      <div className="bg-white border-2 border-stone-200 rounded-xl shadow-sm p-6 max-w-xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-stone-800 mb-4">
          {currentQuestion.english}
        </h3>

        {currentQuestion.img && (
          <img
            src={currentQuestion.img}
            alt={currentQuestion.english}
            className="mx-auto mb-4 rounded-lg shadow w-48"
          />
        )}

        {/* Options */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={!!currentAnswer}
              className={`px-4 py-2 rounded-lg border transition-all cursor-pointer ${getButtonStyle(
                option
              )}`}
            >
              <div className="flex items-center justify-center gap-2">
                <span>{option}</span>
                {currentFeedback && currentAnswer?.selected === option && (currentAnswer.isCorrect ? (
                  <Check className="text-green-600" size={16} />
                ) : (
                  <X className="text-red-600" size={16} />
                ))}
                {currentFeedback &&
                  option === currentQuestion.correct &&
                  !currentAnswer?.isCorrect && (
                    <Check className="text-green-600" size={16} />
                  )}
              </div>
            </button>
          ))}
        </div>

        {/* Feedback */}
        {currentFeedback && (
          <div
            className={`p-2 rounded-md text-sm font-semibold ${currentAnswer?.isCorrect
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
              }`}
          >
            {currentAnswer?.isCorrect
              ? "Correct! Well done."
              : `Incorrect. The right answer is ${currentQuestion.correct}.`}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-6 max-w-xl mx-auto">
        <button
          onClick={handleBack}
          disabled={currentQuestionIndex === 0}
          className="px-4 py-2 border-2 rounded-lg shadow-sm text-stone-700 hover:bg-stone-50 disabled:opacity-40 flex items-center gap-1 cursor-pointer"
        >
          <ChevronLeft size={16} /> Back
        </button>
        <span className="text-stone-600 font-medium">
          Question {currentQuestion.id}/{currentQuestion.total}
        </span>
        <button
          onClick={handleNext}
          disabled={!currentAnswer}
          className="px-4 py-2 border-2 rounded-lg shadow-sm text-stone-700 hover:bg-stone-50 disabled:opacity-40 flex items-center gap-1 cursor-pointer"
        >
          {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Progress */}
      <div className="max-w-xl mx-auto mt-8">
        <p className="text-sm font-semibold text-stone-700 mb-2">XP Progress</p>
        <div className="h-2 bg-stone-200 rounded-full">
          <div
            className="h-2 bg-green-500 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(xpProgress, 100)}%` }}
          />
        </div>
        <p className="text-xs mt-1 text-center">{Math.min(xpProgress, 100)}%</p>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-4 border-2 border-stone-200">
            <h3 className="text-lg font-bold text-stone-800 mb-2">
              Leave exercise?
            </h3>
            <p className="text-stone-600 mb-6">
              If you go home now,{" "}
              <span className="font-semibold text-red-600">
                your XP progress will be lost
              </span>
              .
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-50"
              >
                Stay
              </button>
              <button
                onClick={() => navigate("/learn/path")}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Yes, Go Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
