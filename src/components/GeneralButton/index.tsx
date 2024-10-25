import React from "react";
import styled from "styled-components";

type GeneralButtonProps = {
  children: React.ReactNode | string;
  onClick?: () => void;
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
  background: white;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const GeneralButton: React.FC<GeneralButtonProps> = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default GeneralButton;
