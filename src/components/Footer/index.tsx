import SiteLogo from "components/svgLogos/SiteLogo";
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.primaryThree};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
`;

const ImageDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px;
  //height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 130px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 150px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
  }
`;

const Footer: React.FC = () => {
  return (
    <Div>
      <ImageDiv>
        <SiteLogo styles={{ width: "100%", height: "100%" }} />
      </ImageDiv>
    </Div>
  );
};

export default Footer;
