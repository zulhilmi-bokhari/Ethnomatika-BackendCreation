import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import LandingPage from "../pages/LandingPage";
import MuseumHub from "../pages/MuseumHub";
import { UserDashboard } from "../pages/Dashboard";
import { HeritageGallery } from "../pages/HeritageGallery";
import { InterpretersRoom } from "../pages/Interpreter";
import { ScribesAtelier } from "../pages/ScribesAtelier";
import { AskTheElder } from "../pages/TheElder";
import { LevelSelector } from "../pages/ScribesAtelier/Level/LevelSelector";
import { LevelOutlet } from "../pages/ScribesAtelier/Level/LevelOutlet";
import { LessonRouter } from "../pages/ScribesAtelier/Level/LessonRouter";

export default function AppRoutes({
  activeView,
  user,
  selectedEthnic,
  currentLesson,
  setCurrentLesson,
  showBadge,
  onExhibitSelect,
  onNavigate,
  onAuthClick,
  onEthnicSelect,
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <LandingPage
              onNavigate={onNavigate}
              onAuthClick={onAuthClick}
              onEthnicSelect={onEthnicSelect}
            />
          }
        />
        <Route
          path="/hub"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <MuseumHub
                onNavigate={onNavigate}
                selectedEthnic={selectedEthnic}
              />
            </motion.div>
          }
        />
        <Route
          path="/dashboard"
          element={
            user ? (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <UserDashboard
                  user={user}
                  onNavigate={onNavigate}
                  selectedEthnic={selectedEthnic}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Navigate to="/" />
              </motion.div>
            )
          }
        />
        <Route
          path="/interpreter"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <InterpretersRoom
                selectedEthnic={selectedEthnic}
                onNavigate={onNavigate}
              />
            </motion.div>
          }
        />
        <Route
          path="/scribe"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ScribesAtelier
                selectedEthnic={selectedEthnic}
                onNavigate={onNavigate}
                currentLesson={currentLesson}
                setCurrentLesson={setCurrentLesson}
                showBadge={showBadge}
                onExhibitSelect={onExhibitSelect}
              />
            </motion.div>
          }
        >
          <Route index element={<LevelSelector />} />

          {/* Outlet per level */}
          <Route path=":level">
            <Route index element={<LevelOutlet />} />
            {/* Lesson page inside a level */}
            <Route path="lesson/:lessonId" element={<LessonRouter showBadge={showBadge} selectedEthnic={selectedEthnic} onEthnicSelect={onEthnicSelect}/>} />
          </Route>
        </Route>
        <Route
          path="/gallery"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <HeritageGallery
                selectedEthnic={selectedEthnic}
                onExhibitSelect={onExhibitSelect}
                onNavigate={onNavigate}
              />
            </motion.div>
          }
        />
        <Route
          path="/elder"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <AskTheElder
                selectedEthnic={selectedEthnic}
                onNavigate={onNavigate}
                onExhibitSelect={onExhibitSelect}
              />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
