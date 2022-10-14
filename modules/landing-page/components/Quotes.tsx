import React from 'react';
import styled from 'styled-components';

const StyledQuotes = styled.section`
  position: relative;
  height: 100vh;
  max-height: 600px;
  background-image: url('images/bg-2.png');

  .quotes {
    position: absolute;
    top: 20%;
    left: 60%;
    width: 20%;
    letter-spacing: 0.03em;
    line-height: 150%;

    p {
      margin-bottom: 12px;
    }

    span {
      font-size: 36px;
      font-family: Doppelganger;
    }
  }
`;

const Quotes = () => {
  return (
    <StyledQuotes>
      <div className="quotes">
        <p>
          And one of His signs is that He created for you spouses from among yourselves so that you
          may find comfort in them. And He has placed between you compassion and mercy. Surely in
          these are signs for people who reflect.
        </p>

        <br />

        <span>QS Ar-Rum 21</span>
      </div>
    </StyledQuotes>
  );
};

export default Quotes;
