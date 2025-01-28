import NavigationBar from "../components/NavigationBar";
import { PageScreen, ProjectsIntro, ProjectsSection, ProjectsSectionText } from "../components/Styles";

function ProjectsPage() {
  return (
    <>
      <NavigationBar />
      <PageScreen>
        <ProjectsIntro>
          <h1 className="text-[2rem] font-bold text-white">Projects</h1>
          <p className="text-[1rem] text-white">
            This page is a collection of the projects I have and am completing. GitHub links are provided for the source
            code.
          </p>
        </ProjectsIntro>
        <ProjectsSection>
          <img src="mbh.jpg" alt="Mending Broken Hearts"></img>
          <ProjectsSectionText>
            <h1 className="text-[1.5rem] font-bold text-white">Software Engineer @ UNSW MBH</h1>
            <p className="text-[1rem] text-white">
              As a VIP Student, I was able to work as a Software Engineer as part of the Software Team for UNSW Mending
              Borken Hearts. My responsibilities involved refining and designing the patient app accompanying the
              artificial heart and building the website and desktop app for clinician access. I was also collaborating
              with other teams (mainly the Systems team) in working to integrate sensors and Bluetooth into the app
              backend.
            </p>
          </ProjectsSectionText>
        </ProjectsSection>
      </PageScreen>
    </>
  );
}

export default ProjectsPage;
