import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ethnicData } from "../../../data/ethnicData";

import { FlashcardView } from "../Beginner/FlashcardView";
import { MatchingExerciseView } from "../Beginner/MatchingExerciseView";
import { FillInTheBlankView } from "../Intermediate/FillInTheBlankView";
import { TranslationExerciseView } from "../Advanced/TranslationExerciseView";
import { ChevronLeft } from "lucide-react";
import LearningWordView from "../Beginner/LearningWordView";
import LearningWordExerciseView from "../Beginner/LearningWordExerciseView";

export const LessonRouter = ({ showBadge, onEthnicSelect, selectedEthnic }) => {
  const { level, lessonId } = useParams();
  const navigate = useNavigate();

  const learning = ethnicData[selectedEthnic.id]?.learning;

  const lesson = useMemo(() => {
    if (!learning || !level) return null;
    const L = learning[level];
    if (!L) return null;

    // Flatten all sections within a level and find by id
    const sections = Object.values(L).flatMap((s) =>
      s?.lessons ? s.lessons : []
    );

    return sections.find((l) => String(l.id) === String(lessonId)) || null;
  }, [learning, level, lessonId]);

  const handleBack = () => navigate(`/scribe/${level}`);
  const handleComplete = () => {
    showBadge(`Completed`);
    const timer = setTimeout(() => {
      navigate(`/scribe/${level}`);
    }, 1000);
    return () => clearTimeout(timer);
  };

  if (!lesson) {
    return (
      <div className="p-4">
        <button onClick={handleBack} className="text-[#A24936] font-bold hover:underline">
          <ChevronLeft /> Back
        </button>
        <p className="mt-4">Lesson not found.</p>
      </div>
    );
  }

  switch (lesson.type) {
    case "flashcards":
      return <FlashcardView lesson={lesson} onBack={handleBack} onComplete={handleComplete} />;
    case "matching":
      return <MatchingExerciseView lesson={lesson} onBack={handleBack} onComplete={handleComplete} />;
    case "learning":
      return (
        <LearningWordView
          lesson={lesson}
          onBack={handleBack}
          onComplete={handleComplete}
          selectedEthnic={selectedEthnic}
        />
      );
    case "exercise":
      return (
        <LearningWordExerciseView
          lesson={lesson}
          onBack={handleBack}
          onComplete={handleComplete}
          selectedEthnic={selectedEthnic}
        />
      );
    case "fill-in-the-blank":
      return <FillInTheBlankView lesson={lesson} onBack={handleBack} onComplete={handleComplete} />;
    case "translation":
      return (
        <TranslationExerciseView
          lesson={lesson}
          onBack={handleBack}
          onComplete={handleComplete}
          selectedEthnic={selectedEthnic}
        />
      );
    default:
      return (
        <div className="p-4">
          <button onClick={handleBack} className="text-[#A24936] font-bold hover:underline">
            ← Back
          </button>
          <p className="mt-4">Unknown lesson type.</p>
        </div>
      );
  }
};
