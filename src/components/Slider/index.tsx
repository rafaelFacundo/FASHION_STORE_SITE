import React, { useRef } from "react";
import styled from "styled-components";

type SliderProps = {
  children: React.ReactNode;
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slider: React.FC<SliderProps> = ({ children }) => {
  const divRef = useRef<HTMLDivElement>(null);
  return <Div ref={divRef}>{children}</Div>;
};

export default Slider;
