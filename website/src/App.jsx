import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <HashRouter basename="/personal">
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        {/* About Me Page */}
        <Route path="/aboutme" element={<AboutMePage />} />
        {/* Projects Page */}
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
