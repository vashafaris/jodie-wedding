import React from 'react';
import styled from 'styled-components';

interface TextAreaProps {
  placeholder: string;
  rows: number;
}

const StyledTextArea = styled.textarea`
  padding: 24px;
  border: 1px solid #bdbdbd;
  color: black;
`;

const TextArea = ({ placeholder, rows }: TextAreaProps) => {
  return <StyledTextArea placeholder={placeholder} rows={rows} />;
};

export default TextArea;
