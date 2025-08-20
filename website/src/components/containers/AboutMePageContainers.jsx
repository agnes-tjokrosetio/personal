import { interestAreas, relevantCourses, relevantSkills, volunteeringActivities, workExperience } from "../data/info";

export const AboutMeIntro = () => (
  <div className="flex flex-col text-white gap-4 py-[6vh] px-[10vw] md:px-[5vw] text-center">
    <p className="text-[2rem] font-bold text-white">About Me</p>
    <p className="text-[1rem] text-white">
      I'm Agnes and I am currently a 3rd year UNSW student studying a Bachelor of Computer Science / Commerce, majoring
      in Computer Science and Finance.
    </p>
    <p className="text-[1rem] text-white">
      In terms of the pathways in Computer Science, I have a strong interest in software product development, software
      engineering and frontend developing and engineering. As for Finance, I also have a strong interest in areas of
      investment banking, private equity and real estate.
    </p>
    <p className="text-[1rem] text-white">
      I am known for being an enthusiastic learner and with a bubbly and empathetic nature. I am looking for
      opportunities to creating intuitive and engaging user experiences by using my technical skills and further develop
      my understanding of design and programming by learning from industry professionals. I am also keen on further
      developing my knowledge in investing and managing money to grow with businesses on expanding operations and
      sources of funding.
    </p>
  </div>
);

export const AboutMeSections = ({ showSection, experience, skills, courses, extracurricular, interests }) => {
  return (
    <div className="flex flex-col max-w-full justify-center gap-4">
      <AboutNavigation showSection={showSection} />
      <ShowSections
        experience={experience}
        skills={skills}
        courses={courses}
        extracurricular={extracurricular}
        interests={interests}
      />
    </div>
  );
};

const AboutNavigation = ({ showSection }) => {
  const professional = ["experience", "skills", "courses"];
  const nonProfessional = ["extracurricular", "interests"];
  return (
    <div className="flex flex-col md:flex-row gap-4 pb-4 justify-center">
      <div className="flex flex-row gap-4 justify-center">
        {professional.map((item, index) => (
          <button
            key={index}
            className="w-auto max-w-max bg-[#1a1a1a] text-white hover:text-gray-500 hover:!bg-[white] hover:!border-[white] px-6 py-2 font-semibold transition duration-300"
            onClick={() => showSection(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex flex-row gap-4 justify-center">
        {nonProfessional.map((item, index) => (
          <button
            key={index}
            className="w-auto max-w-max bg-[#1a1a1a] text-white hover:text-gray-500 hover:!bg-[white] hover:!border-[white] px-6 py-2 font-semibold transition duration-300"
            onClick={() => showSection(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

const ShowSections = ({ experience, skills, courses, extracurricular, interests }) => {
  const csCourses = relevantCourses.filter((course) => course.degree === "Computer Science");
  const finsCourses = relevantCourses.filter((course) => course.degree === "Commerce (Finance)");

  return (
    <>
      {experience && (
        <Section title="Experience">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workExperience.map((item, index) => (
              <ExperienceCard key={index} item={item} />
            ))}
          </div>
        </Section>
      )}
      {skills && (
        <Section title="Relevant Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relevantSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </Section>
      )}
      {courses && (
        <Section title="Relevant Courses">
          <h2 className="text-[1.25rem] font-semibold">Computer Science</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {csCourses.map((course, index) => (
              <CourseCard key={index} course={course} category="Computer Science" />
            ))}
          </div>
          <h2 className="text-[1.25rem] font-semibold mt-6">Commerce (Finance)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {finsCourses.map((course, index) => (
              <CourseCard key={index} course={course} category="Finance" />
            ))}
          </div>
        </Section>
      )}
      {extracurricular && (
        <Section title="Extracurricular">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {volunteeringActivities.map((item, index) => (
              <ActivitiesCard key={index} item={item} />
            ))}
          </div>
        </Section>
      )}
      {interests && (
        <Section title="Interests">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {interestAreas.map((item, index) => (
              <InterestCard key={index} item={item} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
};

const Section = ({ title, children }) => (
  <div className="flex flex-col text-black bg-[#f8f8f8] gap-6 px-10 py-15 border-t border-gray-400 rounded-t-[50px]">
    <p className="text-[1.5rem] text-center font-bold text-black">{title}</p>
    {children}
  </div>
);

const ExperienceCard = ({ item }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-2 border-l-8 border-gray-300">
    <div className="flex items-center gap-4">
      <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
        <i className="fa fa-briefcase text-gray-500 text-lg" />
      </div>
      <div>
        <h3 className="text-md font-bold text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-500">
          {item.company} - {item.location}
        </p>
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
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-4 border-l-8 border-blue-300">
    <h3 className="text-lg font-bold text-gray-900">{skill.type}</h3>
    <div className="flex flex-wrap gap-2">
      {skill.details.map((item, i) => (
        <span
          key={i}
          className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full hover:shadow-lg transition-shadow duration-300"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const CourseCard = ({ course, category }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-1 border-l-8 border-green-300">
    <div className="flex items-center gap-3">
      <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
        <i className={`fa ${category === "Computer Science" ? "fa-code" : "fa-line-chart"} text-lg`} />
      </div>
      <h3 className="text-md font-bold text-gray-900">{category}</h3>
    </div>
    <p className="text-sm text-gray-700 mt-2">{course.course}</p>
    <span className="bg-green-100 text-black text-xs font-semibold w-fit px-4 py-2 rounded-full mt-2">
      {course.mark}
    </span>
  </div>
);

const ActivitiesCard = ({ item }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-2 border-l-8 border-red-300">
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
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-row items-center gap-4 border-l-8 border-purple-300">
    <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
      <i className={`fa ${item.icon} text-gray-500 text-lg`} />
    </div>
    <p className="text-[1rem] text-black">{item.label}</p>
  </div>
);
