import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Arrow from "components/svgLogos/Arrow";
import GeneralButton from "components/GeneralButton";

type SliderProps = {
  children: React.ReactNode;
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const ButtonsDiv = styled.div`
  position: absolute;
  left: 10px;
  bottom: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100px;
    height: 50px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 200px;
    height: 50px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 300px;
    height: 50px;
  }
`;
const ButtonDiv = styled.div`
  width: 40%;
`;

const Slider: React.FC<SliderProps> = ({ children }) => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {}, []);
  return (
    <Div ref={divRef}>
      {children}
      <ButtonsDiv>
        <ButtonDiv>
          <GeneralButton>
            <Arrow styles={{ width: "50%", height: "50%" }} />
          </GeneralButton>
        </ButtonDiv>
        <ButtonDiv>
          <GeneralButton>
            <Arrow
              styles={{
                width: "50%",
                height: "50%",
                transform: "rotate(180deg)",
              }}
            />
          </GeneralButton>
        </ButtonDiv>
      </ButtonsDiv>
    </Div>
  );
};

export default Slider;
