import React from "react";
import NavigationBar from "../components/layout/NavigationBar";
import ContactInformation from "../components/layout/ContactInformation";
import { LandingIntro, PortfolioSelectionSection } from "../components/containers/LandingPageContainers";
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
