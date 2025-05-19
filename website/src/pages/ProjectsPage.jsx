import React from "react";
import ContactInformation from "../components/layout/ContactInformation";
import NavigationBar from "../components/layout/NavigationBar";
import { ProjectsIntro, ProjectsSection } from "../components/containers/ProjectsPageContainers";
import PageScreen from "../components/layout/PageScreen";

function ProjectsPage() {
  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <NavigationBar />
      <PageScreen>
        <ProjectsIntro />
        <ProjectsSection />
        <ContactInformation />
      </PageScreen>
    </>
  );
}

export default ProjectsPage;
