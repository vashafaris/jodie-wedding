import { DEVICE_SIZE } from 'constants/device-size';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

type StyledFarewellProps = {
  isInView: boolean;
};

const StyledFarewell = styled.section<StyledFarewellProps>`
  ${props =>
    props.isInView &&
    `
    -webkit-animation: 1s cubic-bezier(0.87, 0, 0.13, 1) forwards background-easing;
    animation: 1s cubic-bezier(0.87, 0, 0.13, 1) forwards background-easing;
  `}

  min-height: 600px;
  opacity: 0;

  background-image: url('images/farewell.png');
  background-position: center bottom;
  background-size: cover;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    background-image: url('images/mobile/farewell.png');
    background-position: center bottom;

    h1 {
      font-size: 72px;
    }
  }

  span {
    font-size: 18px;
  }

  @keyframes background-easing {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes background-easing {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Farewell = () => {
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <StyledFarewell ref={ref} isInView={isInView}>
      <h1>sampai jumpa</h1>

      <span>Designed by Putri & Jodie</span>
    </StyledFarewell>
  );
};

export default Farewell;
