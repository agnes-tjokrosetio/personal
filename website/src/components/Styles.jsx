import styled from "styled-components";

export const PortfolioSelection = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PortfolioSection = styled.div`
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
