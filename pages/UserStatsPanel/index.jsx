import React from "react";
import { Star, Flame, Trophy, Award } from "lucide-react";

// XP & Level
const XPCard = ({ xp, getXPLevel, getXPProgress }) => (
  <div className="bg-white border border-[#5C4033] rounded-lg p-4 shadow">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-semibold text-stone-800 flex items-center gap-2">
        <Star className="text-yellow-500" size={20} />
        Level {getXPLevel(xp)}
      </h3>
      <span className="text-sm text-stone-600">{xp} XP</span>
    </div>

    <div className="mb-2">
      <div className="flex justify-between text-xs text-stone-600 mb-1">
        <span>{getXPProgress(xp)}/100 XP</span>
        <span>Next Level</span>
      </div>
      <div className="h-3 w-full bg-stone-200 rounded-full">
        <div
          className="h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500"
          style={{ width: `${getXPProgress(xp)}%` }}
        ></div>
      </div>
    </div>

    <p className="text-xs text-stone-500 text-center">
      Complete lessons to earn XP and level up!
    </p>
  </div>
);

// Learning Streak
const StreakCard = ({ streak, getStreakColor }) => (
  <div className="bg-white border border-[#5C4033] rounded-lg p-4 shadow">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-semibold text-stone-800 flex items-center gap-2">
        <Flame className={`${getStreakColor(streak)}`} size={20} />
        Learning Streak
      </h3>
    </div>

    <div className="text-center">
      <div className={`text-3xl font-bold ${getStreakColor(streak)} mb-2`}>
        {streak}
      </div>
      <p className="text-sm text-stone-600 mb-3">
        {streak === 0 ? "Start your streak today!" : streak === 1 ? "Day" : "Days"}
      </p>

      {/* Streak milestones */}
      <div className="flex justify-center space-x-2">
        {[7, 14, 30].map((milestone) => (
          <div
            key={milestone}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              streak >= milestone
                ? "bg-orange-500 text-white"
                : "bg-stone-200 text-stone-400"
            }`}
          >
            {milestone}
          </div>
        ))}
      </div>
    </div>

    <p className="text-xs text-stone-500 text-center mt-3">
      Learn daily to maintain your streak!
    </p>
  </div>
);

// Badges
const BadgesCard = ({ badges }) => (
  <div className="bg-white border border-[#5C4033] rounded-lg p-4 shadow">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-semibold text-stone-800 flex items-center gap-2">
        <Trophy className="text-purple-500" size={20} />
        Badges
      </h3>
      <span className="text-sm text-stone-600">{badges.length}</span>
    </div>

    {badges.length > 0 ? (
      <div className="space-y-2 max-h-32 overflow-y-auto">
        {badges.slice(-3).map((badge, index) => (
          <div
            key={badge.id || index}
            className="flex items-center gap-3 p-2 bg-stone-50 rounded-lg"
          >
            <span className="text-lg">{badge.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-stone-800 truncate">
                {badge.name}
              </p>
              <p className="text-xs text-stone-600 truncate">
                {badge.description}
              </p>
            </div>
          </div>
        ))}
        {badges.length > 3 && (
          <p className="text-xs text-stone-500 text-center">
            +{badges.length - 3} more badges
          </p>
        )}
      </div>
    ) : (
      <div className="text-center py-4">
        <Award className="w-12 h-12 text-stone-300 mx-auto mb-2" />
        <p className="text-sm text-stone-500">No badges yet</p>
        <p className="text-xs text-stone-400">
          Complete lessons to earn your first badge!
        </p>
      </div>
    )}
  </div>
);

// Quick Stats
const QuickStatsCard = ({ xp, streak, badges, getXPLevel }) => (
  <div className="bg-white border border-[#5C4033] rounded-lg p-4 shadow">
    <h3 className="text-lg font-semibold text-stone-800 mb-3">Quick Stats</h3>
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-stone-600">Current Level:</span>
        <span className="font-medium text-stone-800">{getXPLevel(xp)}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-stone-600">Total XP:</span>
        <span className="font-medium text-stone-800">{xp}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-stone-600">Best Streak:</span>
        <span className="font-medium text-stone-800">{streak} days</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-stone-600">Badges Earned:</span>
        <span className="font-medium text-stone-800">{badges.length}</span>
      </div>
    </div>
  </div>
);

// Main Sidebar Component
export const UserStatsPanel = ({ userStats, getXPLevel, getXPProgress, getStreakColor }) => {
  return (
    <div className="w-80 space-y-4">
      <XPCard xp={userStats.xp} getXPLevel={getXPLevel} getXPProgress={getXPProgress} />
      <StreakCard streak={userStats.streak} getStreakColor={getStreakColor} />
      <BadgesCard badges={userStats.badges} />
      <QuickStatsCard
        xp={userStats.xp}
        streak={userStats.streak}
        badges={userStats.badges}
        getXPLevel={getXPLevel}
      />
    </div>
  );
};
