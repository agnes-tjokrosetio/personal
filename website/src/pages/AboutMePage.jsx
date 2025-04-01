import React from "react";
import ContactInformation from "../components/ContactInformation";
import NavigationBar from "../components/NavigationBar";
import { PageScreen } from "../components/Styles";
import {
  interestAreas,
  relevantCourses,
  relevantSkills,
  volunteeringActivities,
  workExperience,
} from "../components/info";

const Section = ({ title, children }) => (
  <div className="flex flex-col text-black bg-[#f8f8f8] gap-6 px-[5vw] py-[10vh] border-t border-gray-400">
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
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-2">
    <div className="flex items-center gap-3">
      <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
        <i className={`fa ${category === "Computer Science" ? "fa-code" : "fa-line-chart"} text-lg`} />
      </div>
      <h3 className="text-md font-bold text-gray-900">{category}</h3>
    </div>
    <p className="text-sm text-gray-700 mt-2">{course.course}</p>
    <span className="bg-green-100 text-green-700 text-xs font-semibold w-fit px-3 py-1 rounded-full mt-2">
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

function AboutMePage() {
  React.useEffect(() => window.scrollTo(0, 0), []);

  const csCourses = relevantCourses.filter((course) => course.degree === "Computer Science");
  const finsCourses = relevantCourses.filter((course) => course.degree === "Finance");

  return (
    <>
      <NavigationBar />
      <PageScreen>
        <div className="flex flex-col text-white gap-4 py-[8vh] px-[10vw] md:px-[5vw] text-center md:text-left">
          <p className="text-[2rem] font-bold text-white">About Me</p>
          <p className="text-[1rem] text-white">
            I'm Agnes and I am currently a 3rd year UNSW student studying a Bachelor of Computer Science / Commerce,
            majoring in Computer Science and Finance.
          </p>
          <p className="text-[1rem] text-white">
            In terms of the pathways in Computer Science, I have a strong interest in software product development,
            software engineering and frontend developing and engineering. As for Finance, I also have a strong interest
            in areas of investment banking, private equity and real estate.
          </p>
          <p className="text-[1rem] text-white">
            I am known for being an enthusiastic learner and with a bubbly and empathetic nature. I am looking for
            opportunities to creating intuitive and engaging user experiences by using my technical skills and further
            develop my understanding of design and programming by learning from industry professionals. I am also keen
            on further developing my knowledge in investing and managing money to grow with businesses on expanding
            operations and sources of funding.
          </p>
          <div className="flex justify-center md:justify-start w-full pt-2">
            <button
              className="w-auto max-w-max bg-[#1a1a1a] text-white hover:text-gray-500 hover:!bg-[white] hover:!border-[white] px-6 py-2 font-semibold transition duration-300"
              onClick={() =>
                window.open(
                  "https://agnes-tjokrosetio.github.io/personal/AT_Resume.pdf",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              RESUME
            </button>
          </div>
        </div>
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
          <h2 className="text-[1.25rem] font-semibold mb-4">Computer Science</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {csCourses.map((course, index) => (
              <CourseCard key={index} course={course} category="Computer Science" />
            ))}
          </div>
          <h2 className="text-[1.25rem] font-semibold mb-4 mt-6">Finance</h2>
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
        <ContactInformation />
      </PageScreen>
    </>
  );
}

export default AboutMePage;
