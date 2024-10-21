import React from "react";
import styled from "styled-components";

type FullDivFlexProps = {
  children: React.ReactNode;
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FullDivFlex: React.FC<FullDivFlexProps> = ({ children }) => {
  return <Div>{children}</Div>;
};

export default FullDivFlex;
