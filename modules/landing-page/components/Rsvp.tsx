import { DEVICE_SIZE } from 'constants/device-size';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import Button from '~/components/button/button';

type StyledRsvpProps = {
  isInView: boolean;
};

const StyledRsvp = styled.section<StyledRsvpProps>`
  ${props =>
    props.isInView &&
    `
    -webkit-animation: 1s cubic-bezier(0.87, 0, 0.13, 1) forwards background-easing;
    animation: 1s cubic-bezier(0.87, 0, 0.13, 1) forwards background-easing;
  `}

  height: 150vh;
  min-height: 400px;
  background-image: linear-gradient(to bottom, #193053, #061c3d);
  color: white;

  opacity: 0;
  display: flex;
  align-items: center;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .title-container {
    display: flex;
    flex: 1;
    justify-content: center;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      align-items: flex-end;
      margin-bottom: 24px;
    }

    h1 {
      color: white;
    }
  }

  .information-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    font-size: 28px;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      align-items: center;
      text-align: center;
      font-size: 18px;
      letter-spacing: 0.05em;
    }

    span {
      &:last-of-type {
        margin-bottom: 44px;
      }
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
  }
`;

const StyledButton = styled(Button)`
  @media (min-width: ${DEVICE_SIZE.tablet}) {
    font-size: 28px;
    padding: 12px 70px;
  }
`;

const Rsvp = () => {
  const router = useRouter();

  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  if (router.query.type !== 'rsvp') {
    return null;
  }

  return (
    <StyledRsvp ref={ref} isInView={isInView}>
      <div className="title-container">
        <h1>RSVP</h1>
      </div>

      <div className="information-container">
        <span>Mohon konfirmasi kehadiran</span>
        <span>Bapak/Ibu/Saudara/i</span>

        <StyledButton types="secondary">Klik untuk RSVP</StyledButton>
      </div>
    </StyledRsvp>
  );
};

export default Rsvp;
