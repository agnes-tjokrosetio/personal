import NavigationBar from "../components/NavigationBar";
import { PageScreen, ProjectsIntro, ProjectsSection } from "../components/Styles";

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
        <ProjectsSection></ProjectsSection>
      </PageScreen>
    </>
  );
}

export default ProjectsPage;
