import { useNavigate } from "react-router-dom";
import profilePhoto from "../../assets/profile-photo.jpg";
import "font-awesome/css/font-awesome.min.css";

export const LandingIntro = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[75vh] h-auto px-[5vw] py-[3vh] flex items-center text-[#f5f5f5] flex-col justify-center text-center px-[3vw] md:flex-row md:justify-center md:text-left">
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
      <div className="flex flex-col gap-4 max-w-[800px] px-16 py-4">
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

export const AboutMeIntro = () => (
  <div className="flex flex-col text-white gap-4 py-[8vh] px-[10vw] md:px-[5vw] text-center md:text-left">
    <p className="text-[2rem] font-bold text-white">About Me</p>
    <p className="text-[1rem] text-white">
      I'm Agnes and I am currently a 3rd year UNSW student studying a Bachelor of Computer Science / Commerce, majoring
      in Computer Science and Finance.
    </p>
    <p className="text-[1rem] text-white">
      In terms of the pathways in Computer Science, I have a strong interest in software product development, software
      engineering and frontend developing and engineering. As for Finance, I also have a strong interest in areas of
      investment banking, private equity and real estate.
    </p>
    <p className="text-[1rem] text-white">
      I am known for being an enthusiastic learner and with a bubbly and empathetic nature. I am looking for
      opportunities to creating intuitive and engaging user experiences by using my technical skills and further develop
      my understanding of design and programming by learning from industry professionals. I am also keen on further
      developing my knowledge in investing and managing money to grow with businesses on expanding operations and
      sources of funding.
    </p>
    <div className="flex justify-center md:justify-start w-full pt-2">
      <button
        className="w-auto max-w-max bg-[#1a1a1a] text-white hover:text-gray-500 hover:!bg-[white] hover:!border-[white] px-6 py-2 font-semibold transition duration-300"
        onClick={() =>
          window.open("https://agnes-tjokrosetio.github.io/personal/AT_Resume.pdf", "_blank", "noopener,noreferrer")
        }
      >
        RESUME
      </button>
    </div>
  </div>
);

export const ProjectsIntro = () => (
  <div className="flex flex-col text-white gap-4 py-[8vh] px-[10vw] md:px-[5vw] text-center md:text-left">
    <p className="text-[2rem] font-bold text-white">Projects</p>
    <p className="text-[1rem] text-white">
      This page is a collection of the projects I have and am completing. Links are provided for the source code where
      possible (source code for works completed through UNSW courses are not provided due to plagiarism and intellectual
      property concerns - demo recordings of applications made may be provided).
    </p>
  </div>
);
