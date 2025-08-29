import React, { useMemo } from "react";
import { useParams, useOutletContext, Link, useNavigate } from "react-router-dom";
import { Star, Zap, BrainCircuit, BookOpen, Play, ChevronLeft } from "lucide-react";
import { ethnicData } from "../../../data/ethnicData";
import { UserStatsPanel } from "../../UserStatsPanel";

const SectionGrid = ({ section, level }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {section?.lessons?.length ? (
      section.lessons.map((lesson) => (
        <Link
          key={lesson.id}
          to={`lesson/${lesson.id}`}
          className="bg-white p-6 rounded-lg shadow text-left hover:shadow-lg hover:-translate-y-1 transition-transform"
        >
          <h4 className="font-bold text-lg text-stone-800">{lesson.title}</h4>
          <p className="text-stone-500 capitalize">{lesson.type.replace("-", " ")}</p>
        </Link>
      ))
    ) : (
      <p className="text-stone-500 md:col-span-3">No lessons available.</p>
    )}
  </div>
);

export const LevelOutlet = () => {
  const { level } = useParams(); // "beginner" | "intermediate" | "advanced"
  const { selectedEthnic, userStats = { xp: 0, streak: 0, badges: [] } } = useOutletContext();

  const learning = useMemo(
    () => ethnicData[selectedEthnic.id]?.learning || {},
    [selectedEthnic]
  );

  const getIcon = (lvl) => {
    switch ((lvl || "").toLowerCase()) {
      case "beginner":
        return <Star className="text-[#D3A625] w-4 h-4" />;
      case "intermediate":
        return <Zap className="text-orange-500 w-4 h-4" />;
      case "advanced":
        return <BrainCircuit className="text-purple-500 w-4 h-4" />;
      default:
        return <BookOpen className="text-stone-400 w-4 h-4" />;
    }
  };

  const navigate = useNavigate();

  const header = {
    beginner: { icon: <Star className="text-[#D3A625]" />, title: "Beginner" },
    intermediate: { icon: <Zap className="text-orange-500" />, title: "Intermediate" },
    advanced: { icon: <BrainCircuit className="text-purple-500" />, title: "Advanced" },
  }[level];

  // helper functions for stats
  const getXPLevel = (xp) => Math.floor(xp / 100) + 1;
  const getXPProgress = (xp) => xp % 100;
  const getStreakColor = (streak) => {
    if (streak >= 30) return "text-red-500";
    if (streak >= 14) return "text-orange-500";
    if (streak >= 7) return "text-yellow-500";
    return "text-blue-500";
  };

  // ====== LEVEL NOT FOUND ======
  if (!header) {
    const available = Object.keys(ethnicData[selectedEthnic.id]?.learning) ?? [];

    return (
      <div className="p-8 pt-24 min-h-screen bg-[#F4F1DE] flex items-start justify-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 flex items-center justify-center bg-stone-50 rounded-lg">
              <svg className="w-8 h-8 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4" />
                <circle cx="12" cy="14" r="1" />
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 12A9 9 0 1112 3a9 9 0 019 9z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-stone-800">Level not found</h3>
              <p className="text-stone-600 mt-1 mb-4">
                The level <span className="font-medium">{level}</span> doesn't exist for{" "}
                <span className="font-medium">{selectedEthnic?.name || "this language"}</span>.
              </p>

              {available.length > 0 ? (
                <>
                  <p className="text-stone-600 mb-3">Choose one of the available levels instead:</p>
                  <div className="flex flex-wrap gap-3 mb-4 py-4">
                    {available.map((lvl) => {
                      const label = lvl.charAt(0).toUpperCase() + lvl.slice(1);
                      return (
                        <button
                          key={lvl}
                          onClick={() => navigate(`/scribe/${lvl}`)}
                          aria-label={`Open ${label} level`}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-stone-50 border border-stone-300 text-stone-700 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#A24936] transition hover:border-[#A24936] cursor-pointer"
                        >
                          <span className="flex items-center justify-center w-5 h-5 text-stone-500">
                            {getIcon(lvl)}
                          </span>
                          <span className="text-sm font-medium">{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </>
              ) : (
                <p className="text-stone-500 mb-4">No levels are available for this ethnic group yet.</p>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => navigate("/scribe")}
                  className="px-4 py-2 rounded-lg bg-[#A24936] text-white font-semibold hover:bg-amber-800 cursor-pointer transition-colors"
                >
                  Back to levels
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ====== MAIN LAYOUT ======
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <Link to="/scribe" className="mb-6 inline-block text-[#A24936] font-bold hover:underline">
          ← Back to Levels
        </Link>

        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          {header.icon} {header.title}
        </h2>

        {level === "beginner" && (
          <>
            {/* Beginner sections */}
            <section className="mb-8">
              <Link
                to={`lesson/d-b3`}
                className="inline-block bg-gradient-to-r from-[#A24936] to-red-700 text-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group w-full text-left"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Play className="w-6 h-6" />
                      <h4 className="font-bold text-xl">Interactive Learning Module</h4>
                    </div>
                    <p className="text-red-100 mb-2">
                      Learn essential words through interactive slides with examples and practice exercises
                    </p>
                    <div className="text-sm text-red-200 bg-red-800/30 px-3 py-1 rounded-full inline-block">
                      ✨ New Learning Experience
                    </div>
                  </div>
                  <ChevronLeft className="w-8 h-8 rotate-180 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </section>

            <section className="mb-8">
              <h4 className="text-xl font-semibold text-stone-600 mb-3">
                {learning.beginner.introduction.title}
              </h4>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="mb-4">{learning.beginner.introduction.overview}</p>
                <h5 className="font-bold mb-2">Pronunciation Guide:</h5>
                <ul className="list-disc list-inside">
                  {learning.beginner.introduction.pronunciationGuide.map((p) => (
                    <li key={p.example}>
                      <strong>{p.sound}:</strong> e.g., <em>{p.example}</em>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h4 className="text-xl font-semibold text-stone-600 mb-3">
                {learning.beginner.essentialPhrases.title}
              </h4>
              <SectionGrid section={learning.beginner.essentialPhrases} level={level} />
            </section>

            <section>
              <h4 className="text-xl font-semibold text-stone-600 mb-3">
                {learning.beginner.basicVocabulary.title}
              </h4>
              <SectionGrid section={learning.beginner.basicVocabulary} level={level} />
            </section>
          </>
        )}

        {level === "intermediate" && (
          <section>
            <h4 className="text-xl font-semibold text-stone-600 mb-3">
              {learning.intermediate.expandedVocabulary.title}
            </h4>
            <SectionGrid section={learning.intermediate.expandedVocabulary} level={level} />
          </section>
        )}

        {level === "advanced" && (
          <>
            <section className="mb-8">
              <h4 className="text-xl font-semibold text-stone-600 mb-3">
                {learning.advanced.advancedVocabulary.title}
              </h4>
              <SectionGrid section={learning.advanced.advancedVocabulary} level={level} />
            </section>
            <section>
              <h4 className="text-xl font-semibold text-stone-600 mb-3">
                {learning.advanced.culturalImmersion.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {learning.advanced.culturalImmersion.texts.map((text) => (
                  <div key={text.id} className="bg-white p-6 rounded-lg shadow">
                    <h5 className="font-bold text-lg text-stone-800">{text.title}</h5>
                    <p className="text-stone-600 mt-2 mb-4">{text.text}</p>
                    <Link
                      to={`lesson/${text.fullStoryId}`}
                      className="text-[#A24936] font-bold hover:underline"
                    >
                      Read Full Story
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>

      {/* Side stats panel */}
      <aside className="w-full lg:w-80 shrink-0">
        <UserStatsPanel
          userStats={userStats}
          getXPLevel={getXPLevel}
          getXPProgress={getXPProgress}
          getStreakColor={getStreakColor}
        />
      </aside>
    </div>
  );
};
