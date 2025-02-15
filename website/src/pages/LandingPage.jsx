import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import "font-awesome/css/font-awesome.min.css";
import {
  PageScreen,
  WelcomeSection,
  Divider,
  AboutSection,
  MoreButton,
  ViewSection,
  ViewType,
} from "../components/Styles";
import ContactInformation from "../components/ContactInformation";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar />
      <PageScreen>
        <WelcomeSection>
          <h1 className="text-[2rem] font-bold text-white">Welcome to my personal portfolio!</h1>
          <Divider />
        </WelcomeSection>
        <AboutSection>
          <h1 className="text-[1.5rem] font-bold text-white">Hi, I'm Agnes!</h1>
          <p className="text-[1rem] text-white">
            I am a 3rd year UNSW student studying a <b>Bachelor of Computer Science / Commerce</b>, majoring in Computer
            Science and Finance. My career aspirations lie mainly in Computer Science and I have a strong interest in{" "}
            <b>software product development, software engineering and frontend developing and engineering</b>.
          </p>
          <p className="text-[1rem] text-white">
            This website has been created to to showcase my portfolio, including my projects and my activities!
          </p>
          <MoreButton onClick={() => navigate("/aboutme")}>See More</MoreButton>
        </AboutSection>
        <ViewSection>
          <ViewType bgimage="about-me.jpg" onClick={() => navigate("/aboutme")}>
            <p className="text-[1.5rem] text-white">About Me</p>
            <Divider />
          </ViewType>
          <ViewType bgimage="projects.jpg" onClick={() => navigate("/projects")}>
            <p className="text-[1.5rem] text-white">Projects</p>
            <Divider />
          </ViewType>
        </ViewSection>
        <ContactInformation />
      </PageScreen>
    </>
  );
}

export default LandingPage;
