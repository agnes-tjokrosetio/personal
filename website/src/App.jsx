import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import LandTopOfPage from "./components/TopPage";

function App() {
  return (
    <BrowserRouter basename="/personal">
      <LandTopOfPage />
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
