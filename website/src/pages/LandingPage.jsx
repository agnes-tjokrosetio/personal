import React from "react";
import NavigationBar from "../components/NavigationBar";
import ContactInformation from "../components/ContactInformation";
import { LandingIntro } from "../components/Intros";
import { PortfolioSelectionSection } from "../components/Sections";
import PageScreen from "../components/PageScreen";

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
