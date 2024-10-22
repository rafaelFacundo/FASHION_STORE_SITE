import React from "react";
import styled from "styled-components";

type GeneralButtonProps = {
  children: React.ReactNode | string;
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 3px;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.primary};
  border: 6px solid ${({ theme }) => theme.colors.primaryTwo};
`;

const GeneralButton: React.FC<GeneralButtonProps> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default GeneralButton;
