import React from "react";
import ContactInformation from "../components/layout/ContactInformation";
import NavigationBar from "../components/layout/NavigationBar";
import { AboutMeIntro, AboutMeSections } from "../components/containers/AboutMePageContainers";
import PageScreen from "../components/layout/PageScreen";

function AboutMePage() {
  React.useEffect(() => window.scrollTo(0, 0), []);

  const [experience, setExperience] = React.useState(false);
  const [skills, setSkills] = React.useState(false);
  const [courses, setCourses] = React.useState(false);
  const [extracurricular, setExtracurricular] = React.useState(false);
  const [sideinterests, setSideInterests] = React.useState(false);

  const showSection = (section) => {
    setExperience(section === "experience");
    setSkills(section === "skills");
    setCourses(section === "courses");
    setExtracurricular(section === "extracurricular");
    setSideInterests(section === "sideinterests");
  };

  return (
    <>
      <NavigationBar />
      <PageScreen>
        <AboutMeIntro />
        <AboutMeSections
          showSection={showSection}
          experience={experience}
          skills={skills}
          courses={courses}
          extracurricular={extracurricular}
          sideinterests={sideinterests}
        />
        <ContactInformation />
      </PageScreen>
    </>
  );
}

export default AboutMePage;
