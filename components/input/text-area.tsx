import React from 'react';
import styled from 'styled-components';

interface TextAreaProps {
  placeholder: string;
  rows: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const StyledTextArea = styled.textarea`
  padding: 24px;
  border: 1px solid #bdbdbd;
  color: black;
`;

const TextArea = ({ placeholder, rows, onChange, value, ...rest }: TextAreaProps) => {
  return (
    <StyledTextArea
      placeholder={placeholder}
      rows={rows}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default TextArea;
