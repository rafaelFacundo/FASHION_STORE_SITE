import React from "react";
import styled from "styled-components";
import SiteLogo from "components/svgLogos/SiteLogo";
import ThreeBarsMenuLogo from "components/svgLogos/ThreeBarsMenuLogo";

const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 130px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 200px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
  }
`;
const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 130px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 150px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
  }
`;
const HeaderOptions = styled.ul`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 1;
  list-style: none;
  padding: 4px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`;
const HeaderOption = styled.li`
  margin-left: 10px;
  width: 150px;
  font-size: 20px;
  padding-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-family: "Oswald";
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryTwo};
  }
`;
const ThreeBarsMenuLogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80px;
    height: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100px;
    height: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderTag>
      <ImageDiv>
        <SiteLogo styles={{ width: "100%", height: "100%" }} />
      </ImageDiv>
      <HeaderOptions>
        <HeaderOption>Masculino</HeaderOption>
        <HeaderOption>Feminino</HeaderOption>
        <HeaderOption>Infantil</HeaderOption>
        <HeaderOption>Contato</HeaderOption>
        <HeaderOption>Sobre nós</HeaderOption>
        <HeaderOption>Login</HeaderOption>
      </HeaderOptions>
      <ThreeBarsMenuLogoDiv>
        <ThreeBarsMenuLogo styles={{ width: "100%", height: "100%" }} />
      </ThreeBarsMenuLogoDiv>
    </HeaderTag>
  );
};

export default Header;
