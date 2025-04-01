import React from "react";
import ContactInformation from "../components/ContactInformation";
import NavigationBar from "../components/NavigationBar";
import { ProjectsIntro } from "../components/Intros";
import { ProjectsSection } from "../components/Sections";
import PageScreen from "../components/PageScreen";

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
