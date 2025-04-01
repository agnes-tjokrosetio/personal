import React from "react";
import ContactInformation from "../components/ContactInformation";
import NavigationBar from "../components/NavigationBar";
import { projects } from "../components/info";

const ProjectsIntro = () => (
  <div className="flex flex-col text-white gap-4 py-[8vh] px-[10vw] md:px-[5vw] text-center md:text-left">
    <p className="text-[2rem] font-bold text-white">Projects</p>
    <p className="text-[1rem] text-white">
      This page is a collection of the projects I have and am completing. Links are provided for the source code where
      possible (source code for works completed through UNSW courses are not provided due to plagiarism and intellectual
      property concerns - demo recordings of applications made may be provided).
    </p>
  </div>
);

const Projects = () => (
  <div className="flex flex-col gap-6 px-[5vw]">
    {projects.map((project, index) => (
      <div key={index} className="bg-white rounded-2xl p-6 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <p className="text-xl font-bold text-gray-900">{project.name}</p>
          <span className="text-sm text-gray-500">Project Timeline: {project.date}</span>
        </div>
        <p className="text-sm text-gray-700">{project.description}</p>
        <div className="flex gap-4 mt-2 flex-wrap">
          {project.code && (
            <button
              onClick={() => window.open(project.code, "_blank", "noopener,noreferrer")}
              className="bg-black text-white !text-sm px-4 py-2 rounded hover:text-gray-500 hover:!bg-[white] hover:!border-[black]"
            >
              View Code
            </button>
          )}
          {project.demo && (
            <button
              onClick={() => window.open(project.demo, "_blank", "noopener,noreferrer")}
              className="bg-black text-white !text-sm px-4 py-2 rounded bg-[#1a1a1a] text-white hover:text-gray-500 hover:!bg-[white] hover:!border-[black]"
            >
              View Demo
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
);

function ProjectsPage() {
  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <NavigationBar />
      <div className="w-full min-h-screen flex flex-col bg-[#242424] overflow-x-hidden overflow-y-auto pt-[40px]">
        <ProjectsIntro />
        <Projects />
        <ContactInformation />
      </div>
    </>
  );
}

export default ProjectsPage;
