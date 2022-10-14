import React from 'react';
import styled from 'styled-components';

const StyledFarewell = styled.section`
  min-height: 600px;

  background-image: url('images/farewell.png');
  background-position: center bottom;
  background-size: cover;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 80px;

  h1 {
    font-size: 72px;
  }

  span {
    font-size: 18px;
  }
`;

const Farewell = () => {
  return (
    <StyledFarewell>
      <h1>sampai jumpa</h1>

      <span>Desgined by Putri & Jodie</span>
    </StyledFarewell>
  );
};

export default Farewell;
