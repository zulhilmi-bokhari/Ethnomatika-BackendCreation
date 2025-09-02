import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { ExhibitModal } from "./components/ExhibitModal";
import { AuthModal } from "./components/AuthModal";
import { VRTourView } from "./components/VRTourView";
import { BadgeNotification } from "./components/BadgeNotification";
import { ethnicData } from "./data/ethnicData";
import AppRoutes from "./routes";
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 2000,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

function AppContent() {
  const [activeView, setActiveView] = useState(() => {
    return localStorage.getItem("activeView") || "landing";
  });
  const [selectedExhibit, setSelectedExhibit] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeTour, setActiveTour] = useState(null);
  const [badge, setBadge] = useState(null);
  const [navigationSource, setNavigationSource] = useState(null);
  const [selectedEthnic, setSelectedEthnic] = useState(() => {
    const saved = localStorage.getItem("selectedEthnic");
    return saved ? JSON.parse(saved) : null;
  });

  const [currentLesson, setCurrentLesson] = useState(() => {
    const saved = localStorage.getItem("currentLesson");
    return saved ? JSON.parse(saved) : null;
  });


  const navigate = useNavigate();

  const showBadge = (message) => {
    setBadge(message);
    setTimeout(() => setBadge(null), 4000);
  };

  const handleNavigate = (view, source = null) => {
    if (view === "landing") {
      setTimeout(() => {
        setSelectedEthnic(null);
      }, 100);
      setCurrentLesson(null);
    }
    if (source) {
      setNavigationSource(source);
    }
    setActiveView(view);
    navigate(view === "landing" ? "/" : `/${view}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    localStorage.setItem("activeView", activeView);
  }, [activeView]);

  useEffect(() => {
    if (selectedEthnic) {
      localStorage.setItem("selectedEthnic", JSON.stringify(selectedEthnic));
    } else {
      localStorage.removeItem("selectedEthnic");
    }
  }, [selectedEthnic]);

  useEffect(() => {
    if (currentLesson) {
      localStorage.setItem("currentLesson", JSON.stringify(currentLesson));
    } else {
      localStorage.removeItem("currentLesson");
    }
  }, [currentLesson]);

  const handleEthnicSelect = (ethnic) => {
    if (activeView === "scribe" && currentLesson) {
      if (ethnicData[ethnic.id] && ethnicData[ethnic.id].learning) {
        const allNewLessons = [
          ...(ethnicData[ethnic.id].learning.beginner || []),
          ...(ethnicData[ethnic.id].learning.intermediate || []),
          ...(ethnicData[ethnic.id].learning.advanced || []),
        ];
        const equivalentLesson = allNewLessons.find(
          (l) => l.title === currentLesson.title
        );
        setCurrentLesson(equivalentLesson || null);
      } else {
        setCurrentLesson(null);
      }
    }

    setSelectedEthnic(ethnic);

    if (navigationSource) {
      handleNavigate(navigationSource);
      setNavigationSource(null);
    } else if (["landing"].includes(activeView)) {
      handleNavigate("hub");
    }
  };

  const handleExhibitSelect = (exhibit) => {
    if (exhibit) {
      if (exhibit?.type === "vr") {
        setActiveTour(exhibit);
      } else {
        setSelectedExhibit(exhibit);
      }
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Missing exhibits.id with fullStoryId.'
      })
    }
  };

  const handleCloseModal = () => setSelectedExhibit(null);
  const handleCloseTour = () => setActiveTour(null);

  const handleAuthClick = () => setIsAuthModalOpen(true);
  const handleCloseAuthModal = () => setIsAuthModalOpen(false);
  const handleAuthSuccess = (userData) => {
    setUser(userData);
    handleNavigate("dashboard");
  };

  const handleSignOut = () => {
    setUser(null);
    setSelectedEthnic(null);
    setCurrentLesson(null);
    handleNavigate("landing");
  };

  return (
    <div className="font-sans ">
      {selectedEthnic && 
        (<Header
          onNavigate={handleNavigate}
          activeView={activeView}
          user={user}
          onSignOut={handleSignOut}
          onAuthClick={handleAuthClick}
          onEthnicSelect={handleEthnicSelect}
          selectedEthnic={selectedEthnic}
        />)
      }

      <main>
        <AppRoutes
          activeView={activeView}
          user={user}
          selectedEthnic={selectedEthnic}
          currentLesson={currentLesson}
          setCurrentLesson={setCurrentLesson}
          showBadge={showBadge}
          onExhibitSelect={handleExhibitSelect}
          onNavigate={handleNavigate}
          onAuthClick={handleAuthClick}
          onEthnicSelect={handleEthnicSelect}
        />
      </main>

      {activeView !== "landing" && <Footer onNavigate={handleNavigate} />}

      <ExhibitModal exhibit={selectedExhibit} onClose={handleCloseModal} />
      {isAuthModalOpen && (
        <AuthModal
          onClose={handleCloseAuthModal}
          onAuthSuccess={handleAuthSuccess}
        />
      )}
      {activeTour && <VRTourView tour={activeTour} onClose={handleCloseTour} />}
      <BadgeNotification message={badge} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
