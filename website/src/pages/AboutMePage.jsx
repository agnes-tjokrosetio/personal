import React from "react";
import ContactInformation from "../components/ContactInformation";
import NavigationBar from "../components/NavigationBar";
import { AboutMeIntro } from "../components/Intros";
import { AboutMeSections } from "../components/Sections";
import PageScreen from "../components/PageScreen";

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
