import React from "react";
import ContactInformation from "../components/ContactInformation";
import NavigationBar from "../components/NavigationBar";
import { MoreButton, PageScreen, PersonalSection, TechnicalSection } from "../components/Styles";

function AboutMePage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavigationBar />
      <PageScreen>
        <PersonalSection>
          <h1 className="text-[2rem] font-bold text-white">About Me</h1>
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
          <MoreButton
            onClick={() =>
              window.open("https://agnes-tjokrosetio.github.io/personal/AT_Resume.pdf", "_blank", "noopener,noreferrer")
            }
          >
            RESUME
          </MoreButton>
        </PersonalSection>
        <TechnicalSection>
          <h1 className="text-[1.5rem] font-bold text-black">Experience</h1>
          <li className="text-[1rem] text-black">Casual Academic @ UNSW (Sep 2024 - Present)</li>
          <ul className="m-[0]">
            <li className="text-[1rem] text-black">COMP1521 (Computer Systems Fundamentals) Lab Assistant</li>
            <li className="text-[1rem] text-black">Exam Invigilator</li>
          </ul>
          <li className="text-[1rem] text-black">Student Mentor @ UNSW (May 2024 - Present)</li>
          <li className="text-[1rem] text-black">Mathematics Tutor / Marker @ Dr Du Education (Feb 2023 - Present)</li>
          <li className="text-[1rem] text-black">Tutor @ Abacus Coaching Centre (Jan 2020 - Jan 2022)</li>
        </TechnicalSection>
        <TechnicalSection>
          <h1 className="text-[1.5rem] font-bold text-black">Skills</h1>
          <li className="text-[1rem] text-black">TypeScript, JavaScript, HTML, CSS, React</li>
          <li className="text-[1rem] text-black">C, MIPS Assembly, Java, R, SQL/PLpgSQL, Python</li>
          <li className="text-[1rem] text-black">
            Microsoft Office & Teams, Google Workspace, PostgreSQL, SQLite, psycopg2, GitLab/GitHub, Maple, VSCode,
            RStudio, Framer
          </li>
        </TechnicalSection>
        <TechnicalSection>
          <h1 className="text-[1.5rem] font-bold text-black">Relevant Courses</h1>
          <p className="m-[0]">Computer Science</p>
          <li className="text-[1rem] text-black">COMP6080 (Web Front-End Programming) - 87 HD</li>
          <li className="text-[1rem] text-black">MATH1131 (Mathematics 1A) - 95 HD</li>
          <li className="text-[1rem] text-black">MATH1231 (Mathematics 1B) - 92 HD</li>
          <li className="text-[1rem] text-black">MATH1081 (Discrete Mathematics) - 86 HD</li>
          <p className="mb-[0]">Finance</p>
          <li className="text-[1rem] text-black">FINS2618 (Capital Markets and Institutions) - 82 DN</li>
        </TechnicalSection>
        <TechnicalSection>
          <h1 className="text-[1.5rem] font-bold text-black">Interested Pathways</h1>
          <p className="m-[0]">Computer Science</p>
          <li className="text-[1rem] text-black">Front-End Developing and/or Engineering</li>
          <li className="text-[1rem] text-black">Software Engineering</li>
          <li className="text-[1rem] text-black">Software Product Development</li>
          <p className="mb-[0]">Finance</p>
          <li className="text-[1rem] text-black">Investment Banking</li>
          <li className="text-[1rem] text-black">Private Equity</li>
          <li className="text-[1rem] text-black">Real Estate Finance</li>
        </TechnicalSection>
        <TechnicalSection>
          <h1 className="text-[1.5rem] font-bold text-black">Leadership, Activities and Volunteering</h1>
          <li className="text-[1rem] text-black">
            IT Director @ UNSW Financial Technology Society (Nov 2024 - Present)
          </li>
          <li className="text-[1rem] text-black">
            General Vollie (Volunteer) @ Arc Wellness Warriors (May 2024 - Present)
          </li>
          <li className="text-[1rem] text-black">
            Peer Mentor @ UNSW Computer Science and Engineering Society (Jan 2024 - Apr 2024)
          </li>
          <li className="text-[1rem] text-black">
            Marketing Subcommitee @ UNSW Computer Science and Engineering Society (Mar 2023 - Nov 2023)
          </li>
        </TechnicalSection>
        <TechnicalSection>
          <h1 className="text-[1.5rem] font-bold text-black">Hobbies / Interests</h1>
          <li className="text-[1rem] text-black">Composing instrumental music</li>
          <li className="text-[1rem] text-black">Tennis and gym</li>
          <li className="text-[1rem] text-black">Travelling</li>
          <li className="text-[1rem] text-black">Cooking</li>
        </TechnicalSection>
        <ContactInformation />
      </PageScreen>
    </>
  );
}

export default AboutMePage;
