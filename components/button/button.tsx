import { DEVICE_SIZE } from 'constants/device-size';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 12px 32px;
  border-radius: 100px;
  border: 2px solid #193053;
  width: fit-content;
  font-size: 18px;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 14px;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick, ...rest }: ButtonProps) => (
  <StyledButton onClick={onClick} {...rest}>
    {children}
  </StyledButton>
);

export default Button;
