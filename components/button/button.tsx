import { DEVICE_SIZE } from 'constants/device-size';
import React from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../loading-spinner';

const StyledButton = styled.button`
  padding: 12px 32px;
  border-radius: 100px;
  border: 2px solid #193053;
  width: fit-content;
  font-size: 18px;

  transition: all 0.2 ease-out;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 14px;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
}

const Button = ({ children, onClick, isLoading = false, ...rest }: ButtonProps) => (
  <StyledButton onClick={onClick} {...rest}>
    {isLoading ? <LoadingSpinner /> : children}
  </StyledButton>
);

export default Button;
