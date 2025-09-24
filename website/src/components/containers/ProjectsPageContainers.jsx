import { projects } from "../data/info";

export const ProjectsIntro = () => (
  <div className="flex flex-col text-white gap-4 py-[8vh] px-[10vw] md:px-[5vw] text-center">
    <p className="text-[2rem] font-bold text-white">Projects</p>
    <p className="text-[1rem] text-white px-[5vw]">
      This page is a collection of the projects I have already completed and am currently in progress completing. Links
      are provided for the source code where possible (source code for works completed through UNSW courses are not
      provided due to plagiarism and intellectual property concerns). Links for demo recordings are also provided where
      possible.
    </p>
  </div>
);

const Project = ({ project }) => (
  <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 border-l-8 border-teal-600 hover:scale-102 transform transition-transform">
    <p className="text-xl font-bold text-gray-900">{project.name}</p>
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <p className="text-sm font-bold text-gray-500">{project.stack}</p>
      <span className="text-sm font-bold text-gray-500">{project.date}</span>
    </div>
    <p className="text-sm text-gray-800">{project.description}</p>
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
);

export const ProjectsSection = () => {
  const ongoing = projects.filter((p) => p.ongoing === true);
  const past = projects.filter((p) => p.ongoing === false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 px-[5vw]">
      <div className="flex flex-col gap-4">
        <h3 className="flex justify-center px-[1vw] text-xl font-bold text-white">Ongoing</h3>
        <div className="flex flex-col p-[1vw] gap-6 h-[60vh] overflow-auto">
          {ongoing.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="flex justify-center px-[1vw] text-xl font-bold text-white">Past</h3>
        <div className="flex flex-col p-[1vw] gap-6 h-[60vh] overflow-auto">
          {past.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
