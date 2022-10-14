import { DEVICE_SIZE } from 'constants/device-size';
import React from 'react';
import styled from 'styled-components';

const StyledQuotes = styled.section`
  position: relative;
  height: 100vh;
  max-height: 600px;
  background-image: url('images/bg-2.png');
  background-size: cover;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    background-image: url('images/mobile/bg-2.png');
    background-size: cover;
    background-position: center bottom;
    padding: 80px 44px;
  }

  .quotes {
    position: absolute;
    top: 20%;
    left: 60%;
    width: 20%;
    letter-spacing: 0.03em;
    line-height: 150%;

    p {
      font-size: 18px;
      margin-bottom: 12px;
      font-weight: 450;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        letter-spacing: 0.03em;
      }
    }

    span {
      font-size: 36px;
      font-family: Doppelganger;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        font-size: 48px;
      }
    }

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      display: flex;
      flex-direction: column;
      position: relative;
      top: unset;
      width: unset;
      left: unset;
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
