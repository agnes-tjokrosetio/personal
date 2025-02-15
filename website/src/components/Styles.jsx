import styled from "styled-components";

export const NavBar = styled.div`
  width: 100vw;
  height: 40px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const NavOptions = styled.button`
  background: none;
  color: white;
  border: none;
  font-size: 0.75rem;
  padding: 5px 10px;
`;

export const PageScreen = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  background-color: #242424;
`;

export const WelcomeSection = styled.div`
  height: 75vh;
  min-height: 50vh;
  padding: 0vh 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  background-image: url("welcome-img.jpg");
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    height: 50vh;
    text-align: center;
    padding: 0vh 7vw;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 2px solid white;
  margin-right: 0;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const AboutSection = styled.div`
  height: auto;
  padding: 10vh 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    padding: 10vh 15vw;
  }
`;

export const MoreButton = styled.button`
  background: none;
  width: 100px;
  height: 50px;
  color: white;
  border: 2px solid white;
  border-radius: 0;
  font-size: 0.75rem;
  padding: 5px 10px;
  margin-top: 3vh;

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
    margin-top: 3vh;
  }
`;

export const ViewSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ViewType = styled.div`
  text-align: center;
  padding: 10vh 5vw;
  width: 50vw;
  background-image: ${({ bgimage }) => `url(${bgimage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContactSection = styled.div`
  height: auto;
  padding: 5vh 5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: left;
  gap: 10px;
`;

export const ContactIcon = styled.a`
  color: white;
`;

export const PersonalSection = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 5vh 5vw 8vh 5vw;

  @media (max-width: 768px) {
    text-align: center;
    padding: 5vh 10vw 8vh 10vw;
  }
`;

export const TechnicalSection = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  padding: 5vh 5vw;
  background-color: white;
  border-top: 1px solid grey;
`;

export const TechnicalSectionList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProjectsIntro = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 5vh 5vw 8vh 5vw;

  @media (max-width: 768px) {
    text-align: center;
    padding: 5vh 10vw 8vh 10vw;
  }
`;

export const ProjectsSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5vh 5vw;
  background-color: white;
  border-top: 1px solid grey;
  gap: 20px;
  align-items: center;

  img {
    height: 250px;
    width: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    img {
      height: 150px;
      width: auto;
      object-fit: cover;
    }
  }
`;

export const ProjectsSectionText = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  gap: 20px;
`;

export const SourceButton = styled.button`
  background: none;
  width: 150px;
  height: 50px;
  color: black;
  border: 1px solid black;
  border-radius: 0;
  font-size: 0.75rem;
  padding: 5px 10px;
`;
