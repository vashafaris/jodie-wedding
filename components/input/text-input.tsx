import React from 'react';
import styled from 'styled-components';

interface TextInputProps {
  placeholder: string;
}

const StyledTextInput = styled.input`
  padding: 24px;
  border: 1px solid #bdbdbd;
  color: black;
`;

const TextInput = ({ placeholder }: TextInputProps) => {
  return <StyledTextInput placeholder={placeholder} />;
};

export default TextInput;
