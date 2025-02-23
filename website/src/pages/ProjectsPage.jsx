import React from "react";
import ContactInformation from "../components/ContactInformation";
import NavigationBar from "../components/NavigationBar";
import { PageScreen, ProjectsIntro, ProjectsSection, SourceButton } from "../components/Styles";

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
          <h1 className="m-[0] text-[1.5rem] font-bold text-black">UNSW Mending Broken Hearts</h1>
          <p className="m-[0] text-[0.7rem] text-black">Project Timeline: Feb 2025 - Present</p>
          <p className="m-[0] text-[1rem] text-black">
            UNSW Mending Broken Hearts is a student led project involving a hands on experience where we design and
            build a total artificial heart prototype (owned by UNSW) in collaboration with academic researchers. As a
            VIP Student, I was able to work as a <i>Software Engineer</i> as part of the Software Team. My main
            responsibilities involved designing and refining the patient app accompanying the total artificial heart and
            building the website and desktop app for clinician access. I was also collaborating with other teams (mainly
            the Systems team) in working to integrate sensors and Bluetooth into the app backend.
          </p>
        </ProjectsSection>
        <ProjectsSection>
          <h1 className="m-[0] text-[1.5rem] font-bold text-black">This website!</h1>
          <p className="m-[0] text-[0.7rem] text-black">Project Timeline: Jan 2024 - Present</p>
          <p className="m-[0] text-[1rem] text-black">
            This website started out as a way for me to collect all my projects into a portfolio and also learn more
            about the frontend programming languages HTML, CSS, JavaScript. Overtime, I've continued to work on building
            this website using those same languages. Additionally, after taking frontend related courses, I have also
            applied my knowledge about React and Vite (setting up the website as a React project using Vite) to enhance
            the site by design and usability. This website was published in January 2025 and is an ongoing project.
          </p>
          <SourceButton
            onClick={() =>
              window.open("https://github.com/agnes-tjokrosetio/personal", "_blank", "noopener,noreferrer")
            }
          >
            View Source Code
          </SourceButton>
        </ProjectsSection>
        <ContactInformation />
      </PageScreen>
    </>
  );
}

export default ProjectsPage;
