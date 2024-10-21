import React from "react";
import styled from "styled-components";

type GeneralButtonProps = {
  children: React.ReactNode | string;
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.primary};
  border: 6px solid ${({ theme }) => theme.color.primaryTwo};
`;

const GeneralButton: React.FC<GeneralButtonProps> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default GeneralButton;
