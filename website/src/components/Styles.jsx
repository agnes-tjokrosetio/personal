import styled from "styled-components";

export const NavBar = styled.div`
  width: 100vw;
  height: 40px;
  padding: 10px;
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
  overflow-x: hidden;
  overflow-y: auto;
`;

export const WelcomeSection = styled.div`
  min-height: 75vh;
  height: auto;
  padding: 3vh 5vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    text-align: center;
    padding: 3vh 3vw;
  }
`;

export const WelcomeButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
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
  text-align: center;

  @media (max-width: 768px) {
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
  height: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ViewType = styled.div`
  position: relative;
  width: 50vw;
  padding: 10vh 5vw;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    width: auto;
  }

  .background {
    position: absolute;
    inset: 0;
    background-image: ${({ bgimage }) => `url(${bgimage})`};
    background-size: cover;
    background-position: left;
    z-index: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover .background {
    opacity: 0.7;
  }

  .content {
    position: relative;
    z-index: 1;
  }
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
  flex-direction: column;
  padding: 5vh 5vw;
  background-color: white;
  border-top: 1px solid grey;
  gap: 20px;
  align-items: left;
  color: black;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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
