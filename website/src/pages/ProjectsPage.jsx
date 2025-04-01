import React from "react";
import ContactInformation from "../components/layout/ContactInformation";
import NavigationBar from "../components/layout/NavigationBar";
import { ProjectsIntro } from "../components/containers/Intros";
import { ProjectsSection } from "../components/containers/Sections";
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
