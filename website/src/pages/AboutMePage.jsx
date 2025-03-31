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

function AboutMePage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              className="w-auto max-w-max bg-[#1a1a1a] text-white hover:text-gray-500 px-6 py-2 font-semibold"
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

        <div className="flex flex-col text-black bg-[#f8f8f8] gap-8 px-[5vw] py-[10vh] border-t border-gray-400">
          <p className="text-[1.5rem] font-bold text-black">Experience</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workExperience.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col gap-2"
              >
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
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2 ml-2">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col text-black bg-[#f8f8f8] gap-8 px-[5vw] py-[10vh] border-t border-gray-400">
          <p className="text-[1.5rem] font-bold text-black">Relevant Skills</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relevantSkills.map((skill, index) => {
              const visibleSkills = skill.details.slice(0, 4);
              const remainingCount = skill.details.length - visibleSkills.length;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-4"
                >
                  <h3 className="text-lg font-bold text-gray-900">{skill.type}</h3>

                  <div className="flex flex-wrap gap-2">
                    {visibleSkills.map((item, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                    {remainingCount > 0 && (
                      <span className="bg-[#242424] text-[white] text-sm px-3 py-1 rounded-full cursor-pointer hover:bg-blue-200">
                        +{remainingCount} more
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col text-black bg-[#f8f8f8] gap-8 px-[5vw] py-[10vh] border-t border-gray-400">
          <p className="text-[1.5rem] font-bold text-black">Relevant Courses</p>
          <div>
            <h2 className="text-[1.25rem] font-semibold mb-4">Computer Science</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {csCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 text-gray-600 rounded-full p-2">
                      <i className="fa fa-code text-lg" />
                    </div>
                    <h3 className="text-md font-bold text-gray-900">Computer Science</h3>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">{course.course}</p>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold w-fit px-3 py-1 rounded-full mt-2">
                    {course.mark}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[1.25rem] font-semibold mb-4">Finance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {finsCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 text-gray-600 rounded-full p-2">
                      <i className="fa fa-line-chart text-lg" />
                    </div>
                    <h3 className="text-md font-bold text-gray-900">Finance</h3>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">{course.course}</p>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold w-fit px-3 py-1 rounded-full mt-2">
                    {course.mark}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col text-black bg-[#f8f8f8] px-[5vw] py-[5vh] border-t border-gray-400">
          <p className="text-[1.5rem] font-bold text-black mb-6">Interested Pathways</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Computer Science Pathways */}
            <div className="bg-[white] rounded-2xl shadow-md p-6 flex flex-col gap-2">
              <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-2">Computer Science</h2>
              <ul className="list-disc list-inside text-[1rem] text-black space-y-1">
                <li>Front-End Developing and/or Engineering</li>
                <li>Software Engineering</li>
                <li>Software Product Development</li>
              </ul>
            </div>

            {/* Finance Pathways */}
            <div className="bg-[white] rounded-2xl shadow-md p-6 flex flex-col gap-2">
              <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-2">Finance</h2>
              <ul className="list-disc list-inside text-[1rem] text-black space-y-1">
                <li>Investment Banking</li>
                <li>Private Equity</li>
                <li>Real Estate Finance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-black bg-[#f8f8f8] gap-8 px-[5vw] py-[10vh] border-t border-gray-400">
          <p className="text-[1.5rem] font-bold text-black">Leadership, Activities and Volunteering</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteeringActivities.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col gap-2"
              >
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
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col text-black gap-8 bg-[#f8f8f8] px-[5vw] py-[5vh] border-t border-gray-400">
          <p className="text-[1.5rem] font-bold text-black">Hobbies / Interests</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interestAreas.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 flex flex-row items-center gap-4">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <i className={`fa ${item.icon} text-gray-500 text-lg`} />
                </div>
                <p className="text-[1rem] text-black">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <ContactInformation />
      </PageScreen>
    </>
  );
}

export default AboutMePage;
