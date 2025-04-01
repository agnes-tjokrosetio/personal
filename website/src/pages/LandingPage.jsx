import React from "react";
import NavigationBar from "../components/layout/NavigationBar";
import ContactInformation from "../components/layout/ContactInformation";
import { LandingIntro } from "../components/containers/Intros";
import { PortfolioSelectionSection } from "../components/containers/Sections";
import PageScreen from "../components/layout/PageScreen";

function LandingPage() {
  React.useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <NavigationBar />
      <PageScreen>
        <LandingIntro />
        <PortfolioSelectionSection />
        <ContactInformation />
      </PageScreen>
    </>
  );
}

export default LandingPage;
