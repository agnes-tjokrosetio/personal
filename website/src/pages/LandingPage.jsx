import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import "font-awesome/css/font-awesome.min.css";
import {
  PageScreen,
  WelcomeSection,
  Divider,
  ViewSection,
  ViewType,
  ContactIcon,
  WelcomeButtons,
} from "../components/Styles";
import ContactInformation from "../components/ContactInformation";
import profilePhoto from "../assets/profile-photo.jpg";
import aboutMeImg from "../assets/about-me.jpg";
import projectsImg from "../assets/projects.jpg";

function LandingPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <NavigationBar />
      <PageScreen>
        <WelcomeSection>
          <div className="bg-[#1a1a1a] m-8 w-[65%] h-auto p-4 gap-4 flex flex-col justify-center items-center rounded-[10px]">
            <img src={profilePhoto} alt="Profile" className="h-[100%] w-auto rounded-[10px] object-cover" />
            <div className="flex flex-row gap-6">
              <ContactIcon
                href="https://www.linkedin.com/in/agnestjokrosetio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin !text-2xl" aria-hidden="true"></i>
              </ContactIcon>
              <ContactIcon href="https://github.com/agnes-tjokrosetio" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github !text-2xl" aria-hidden="true"></i>
              </ContactIcon>
              <ContactIcon href="mailto:agnes.tjokrosetio@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-envelope !text-2xl" aria-hidden="true"></i>
              </ContactIcon>
            </div>
          </div>

          <div className="flex flex-col gap-4 max-w-[800px] px-16 py-4">
            <p className="text-[2rem] font-extrabold text-[white]">Hi, I'm Agnes</p>
            <p className="text-[1.5rem] text-gray-300 font-medium">Commerce / Computer Science Student</p>
            <p className="text-[1rem] text-[#f0f0f0] max-w-[600px]">
              I am a 3rd year UNSW student studying a <b>Bachelor of Computer Science / Commerce</b>, majoring in
              Computer Science and Finance.
            </p>
            <p className="text-[1rem] text-white">
              This website has been created to to showcase my portfolio, including my projects and my activities!
            </p>
            <WelcomeButtons>
              <button
                className="bg-[#1a1a1a] text-white hover:text-gray-500 hover:!bg-[white] hover:!border-white px-6 py-2 font-semibold"
                onClick={() => navigate("/aboutme")}
              >
                See More
              </button>
            </WelcomeButtons>
          </div>
        </WelcomeSection>

        <ViewSection>
          <ViewType bgimage={aboutMeImg} onClick={() => navigate("/aboutme")}>
            <div className="background" />
            <div className="content">
              <p className="text-[1.5rem] font-[600]">About Me</p>
            </div>
          </ViewType>

          <ViewType bgimage={projectsImg} onClick={() => navigate("/projects")}>
            <div className="background" />
            <div className="content">
              <p className="text-[1.5rem] font-[600]">View My Projects</p>
            </div>
          </ViewType>
        </ViewSection>
        <ContactInformation />
      </PageScreen>
    </>
  );
}

export default LandingPage;
