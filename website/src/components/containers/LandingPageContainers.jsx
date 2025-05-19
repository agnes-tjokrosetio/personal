import { useNavigate } from "react-router-dom";
import profilePhoto from "../../assets/profile-photo.jpg";
import aboutMeImg from "../../assets/about-me.jpg";
import projectsImg from "../../assets/projects.jpg";
import "font-awesome/css/font-awesome.min.css";

export const LandingIntro = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[75vh] h-auto px-[4vw] py-[3vh] flex items-center text-[#f5f5f5] flex-col justify-center text-center px-[3vw] md:flex-row md:justify-center md:text-left">
      <div className="bg-[#1a1a1a] m-8 w-[65%] h-auto p-4 gap-4 flex flex-col justify-center items-center rounded-[10px]">
        <img src={profilePhoto} alt="Profile" className="w-[100%] h-auto rounded-[10px] object-cover" />
        <div className="flex flex-row gap-6">
          <a
            className="!text-white hover:text-gray-400 transition duration-300"
            href="https://www.linkedin.com/in/agnestjokrosetio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin !text-2xl" aria-hidden="true"></i>
          </a>
          <a
            className="!text-white hover:text-gray-400 transition duration-300"
            href="https://github.com/agnes-tjokrosetio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github !text-2xl" aria-hidden="true"></i>
          </a>
          <a
            className="!text-white hover:text-gray-400 transition duration-300"
            href="mailto:agnes.tjokrosetio@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope !text-2xl" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 max-w-[800px] px-12 py-4">
        <p className="text-[2rem] font-extrabold text-[white]">Hi, I'm Agnes</p>
        <p className="text-[1.5rem] text-gray-300 font-medium">Commerce / Computer Science Student</p>
        <p className="text-[1rem] text-[#f0f0f0] max-w-[600px]">
          I am a 3rd year UNSW student studying a <b>Bachelor of Computer Science / Commerce</b>, majoring in Computer
          Science and Finance.
        </p>
        <p className="text-[1rem] text-white">
          This website has been created to to showcase my portfolio, including my projects and my activities!
        </p>
        <div className="flex flex-wrap gap-4 mt-4 md:justify-start justify-center">
          <button
            className="bg-[#1a1a1a] text-white hover:text-gray-500 hover:!bg-[white] hover:!border-white px-6 py-2 font-semibold"
            onClick={() => navigate("/aboutme")}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export const PortfolioSelectionSection = () => (
  <div className="h-[40vh] flex justify-center flex-col md:flex-row">
    <PortfolioType image={aboutMeImg} link="/aboutme" name="About Me" />
    <PortfolioType image={projectsImg} link="/projects" name="View My Projects" />
  </div>
);

const PortfolioType = ({ image, link, name }) => {
  const navigate = useNavigate();
  return (
    <div
      className="relative md:w-[50vw] p-[10vh] [5vw] text-white flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "left" }}
      onClick={() => navigate(link)}
    >
      <p className="text-[1.5rem] font-semibold">{name}</p>
    </div>
  );
};
