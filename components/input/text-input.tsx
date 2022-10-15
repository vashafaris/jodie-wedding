import React from 'react';
import styled from 'styled-components';

interface TextInputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const StyledTextInput = styled.input`
  padding: 24px;
  border: 1px solid #bdbdbd;
  color: black;
`;

const TextInput = ({ placeholder, onChange, value, ...rest }: TextInputProps) => {
  return <StyledTextInput placeholder={placeholder} onChange={onChange} value={value} {...rest} />;
};

export default TextInput;
