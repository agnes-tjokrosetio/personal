import React from "react";
import ContactInformation from "../components/ContactInformation";
import NavigationBar from "../components/NavigationBar";
import { PageScreen, ProjectsIntro, ProjectsSection, ProjectsSectionText, SourceButton } from "../components/Styles";

function ProjectsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavigationBar />
      <PageScreen>
        <ProjectsIntro>
          <h1 className="text-[2rem] font-bold text-white">Projects</h1>
          <p className="text-[1rem] text-white">
            This page is a collection of the projects I have and am completing. Links are provided for the source code
            where possible (source code for works completed through UNSW courses are not provided due to plagiarism and
            intellectual property concerns - demo recordings of applications made may be provided).
          </p>
        </ProjectsIntro>
        <ProjectsSection>
          <img src="mbh.jpg" alt="Mending Broken Hearts"></img>
          <ProjectsSectionText>
            <h1 className="m-[0] text-[1.5rem] font-bold text-white">Software Engineer @ UNSW MBH</h1>
            <p className="m-[0] text-[0.7rem] text-white">Project Timeline: Feb 2025 - Present</p>
            <p className="m-[0] text-[1rem] text-white">
              As a VIP Student, I was able to work as a Software Engineer as part of the Software Team for UNSW Mending
              Broken Hearts. My responsibilities involved refining and designing the patient app accompanying the
              artificial heart and building the website and desktop app for clinician access. I was also collaborating
              with other teams (mainly the Systems team) in working to integrate sensors and Bluetooth into the app
              backend.
            </p>
          </ProjectsSectionText>
        </ProjectsSection>
        <ProjectsSection>
          <ProjectsSectionText>
            <h1 className="m-[0] text-[1.5rem] font-bold text-white">This website!</h1>
            <p className="m-[0] text-[0.7rem] text-white">Project Timeline: Jan 2024 - Present</p>
            <p className="m-[0] text-[1rem] text-white">
              The ideas for having a personal website started out as a bit of a curious mind in wanting to learn more
              about the frontend programming languages (e.g. HTML, CSS, JavaScript). Overtime, I've continued to work on
              building this website using those same languages and also applied my knowledge about React and Vite
              (setting up the website as a React project using Vite) which I have gained on taking relevant front-end
              related couses. This website was published in January 2025.
            </p>
            <SourceButton
              onClick={() =>
                window.open("https://github.com/agnes-tjokrosetio/personal", "_blank", "noopener,noreferrer")
              }
            >
              View Source Code
            </SourceButton>
          </ProjectsSectionText>
          <img src="web-building.jpg" alt="Building Personal Website"></img>
        </ProjectsSection>
        <ContactInformation />
      </PageScreen>
    </>
  );
}

export default ProjectsPage;
