import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <BrowserRouter basename="/personal">
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        {/* About Me Page */}
        <Route path="/aboutme" element={<AboutMePage />} />
        {/* Projects Page */}
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
