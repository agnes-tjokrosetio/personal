import { useNavigate } from "react-router-dom";
import aboutMeImg from "../assets/about-me.jpg";
import projectsImg from "../assets/projects.jpg";
import {
  interestAreas,
  relevantCourses,
  relevantSkills,
  volunteeringActivities,
  workExperience,
  projects,
} from "./info";

export const PortfolioSelectionSection = () => (
  <div className="h-[40vh] flex justify-center flex-col md:flex-row">
    <PortfolioType image={aboutMeImg} link="/aboutme" name="About Me" />
    <PortfolioType image={projectsImg} link="/projects" name="View My Projects" />
  </div>
);

const PortfolioType = ({ image, link, name }) => {
  const navigate = useNavigate();
  return (
    <div
      className="relative md:w-[50vw] p-[10vh] [5vw] text-white flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "left" }}
      onClick={() => navigate(link)}
    >
      <p className="text-[1.5rem] font-semibold">{name}</p>
    </div>
  );
};

export const AboutMeSections = () => {
  const csCourses = relevantCourses.filter((course) => course.degree === "Computer Science");
  const finsCourses = relevantCourses.filter((course) => course.degree === "Finance");

  return (
    <>
      <Section title="Experience">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {workExperience.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </div>
      </Section>
      <Section title="Relevant Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {relevantSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </Section>
      <Section title="Relevant Courses">
        <h2 className="text-[1.25rem] font-semibold">Computer Science</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {csCourses.map((course, index) => (
            <CourseCard key={index} course={course} category="Computer Science" />
          ))}
        </div>
        <h2 className="text-[1.25rem] font-semibold mt-6">Finance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {finsCourses.map((course, index) => (
            <CourseCard key={index} course={course} category="Finance" />
          ))}
        </div>
      </Section>
      <Section title="Leadership, Activities and Volunteering">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {volunteeringActivities.map((item, index) => (
            <ActivitiesCard key={index} item={item} />
          ))}
        </div>
      </Section>
      <Section title="Hobbies / Interests">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {interestAreas.map((item, index) => (
            <InterestCard key={index} item={item} />
          ))}
        </div>
      </Section>
    </>
  );
};

const Section = ({ title, children }) => (
  <div className="flex flex-col text-black bg-[#f8f8f8] gap-6 px-[5vw] py-[5vh] border-t border-gray-400">
    <p className="text-[1.5rem] font-bold text-black">{title}</p>
    {children}
  </div>
);

const ExperienceCard = ({ item }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-2">
    <div className="flex items-center gap-4">
      <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
        <i className="fa fa-briefcase text-gray-500 text-lg" />
      </div>
      <div>
        <h3 className="text-md font-bold text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-500">{item.company}</p>
      </div>
    </div>
    <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
      <i className="fa fa-calendar" aria-hidden="true"></i>
      <span>{item.date}</span>
    </div>
    {item.details && (
      <div className="flex flex-col items-left gap-2 text-sm text-gray-500 mt-2">
        <span>Roles:</span>
        <ul className="list-disc list-inside text-sm text-gray-700 mt-2 ml-2">
          {item.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
    )}
    <div className="flex items-center gap-2 text-sm text-black mt-2">
      <span>{item.description}</span>
    </div>
  </div>
);

const SkillCard = ({ skill }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-4">
    <h3 className="text-lg font-bold text-gray-900">{skill.type}</h3>
    <div className="flex flex-wrap gap-2">
      {skill.details.map((item, i) => (
        <span key={i} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const CourseCard = ({ course, category }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-1">
    <div className="flex items-center gap-3">
      <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
        <i className={`fa ${category === "Computer Science" ? "fa-code" : "fa-line-chart"} text-lg`} />
      </div>
      <h3 className="text-md font-bold text-gray-900">{category}</h3>
    </div>
    <p className="text-sm text-gray-700 mt-2">{course.course}</p>
    <span className="bg-green-100 text-black text-xs font-semibold w-fit px-3 py-1 rounded-full mt-2">
      {course.mark}
    </span>
  </div>
);

const ActivitiesCard = ({ item }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-2">
    <div className="flex items-center gap-4">
      <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
        <i className="fa fa-users text-gray-500 text-lg" />
      </div>
      <div>
        <h3 className="text-md font-bold text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-500">{item.society}</p>
      </div>
    </div>
    <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
      <i className="fa fa-calendar" aria-hidden="true"></i>
      <span>{item.date}</span>
    </div>
    <div className="flex items-center gap-2 text-sm text-black mt-2">
      <span>{item.description}</span>
    </div>
  </div>
);

const InterestCard = ({ item }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-row items-center gap-4">
    <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
      <i className={`fa ${item.icon} text-gray-500 text-lg`} />
    </div>
    <p className="text-[1rem] text-black">{item.label}</p>
  </div>
);

export const ProjectsSection = () => (
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
