import { DEVICE_SIZE } from 'constants/device-size';
import React from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../loading-spinner';

interface StyledButtonProps {
  types: 'primary' | 'secondary';
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 12px 32px;
  border-radius: 100px;
  border: 2px solid #193053;
  width: fit-content;
  font-size: 18px;

  transition: all 0.2 ease-out;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    font-size: 14px;
  }

  ${props =>
    props.types === 'secondary' &&
    `
      background: white;
      color: #193053;
    `}
`;

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  types?: 'primary' | 'secondary';
}

const Button = ({
  className = '',
  children,
  onClick,
  isLoading = false,
  types = 'primary',
  ...rest
}: ButtonProps) => (
  <StyledButton className={className} types={types} onClick={onClick} {...rest}>
    {isLoading ? <LoadingSpinner /> : children}
  </StyledButton>
);

export default Button;
