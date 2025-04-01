import React from "react";
import ContactInformation from "../components/layout/ContactInformation";
import NavigationBar from "../components/layout/NavigationBar";
import { AboutMeIntro } from "../components/containers/Intros";
import { AboutMeSections } from "../components/containers/Sections";
import PageScreen from "../components/layout/PageScreen";

function AboutMePage() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <NavigationBar />
      <PageScreen>
        <AboutMeIntro />
        <AboutMeSections />
        <ContactInformation />
      </PageScreen>
    </>
  );
}

export default AboutMePage;
