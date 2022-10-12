import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 12px 32px;
  border-radius: 100px;
  border: 2px solid #193053;
  width: fit-content;
`;

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => <StyledButton>{children}</StyledButton>;

export default Button;
