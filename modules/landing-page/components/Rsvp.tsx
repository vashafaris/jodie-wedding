import { DEVICE_SIZE } from 'constants/device-size';
import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import Button from '~/components/button/button';
import { useRouter } from 'next/router';

type StyledRsvpProps = {
  isInView: boolean;
};

const StyledRsvp = styled.section<StyledRsvpProps>`
  ${props =>
    props.isInView &&
    `
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

  const handleOpenRsvp = () => {
    switch (router.query.sesi) {
      case 'akad':
        window.open('https://forms.gle/k6yqT9szJTUuXzBa9', '_blank', 'noopener,noreferrer');
        break;
      case '1':
        window.open('https://forms.gle/8bsU4ASFyVD7ms3j6', '_blank', 'noopener,noreferrer');
        break;
      case '2':
        window.open('https://forms.gle/Eh3ararDH7DA8xRq6', '_blank', 'noopener,noreferrer');
        break;
      default:
        window.open('https://putridanjodie.vercel.app/', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <StyledRsvp ref={ref} isInView={isInView}>
      <div className="title-container">
        <h1>RSVP</h1>
      </div>

      <div className="information-container">
        <span>Mohon konfirmasi kehadiran</span>
        <span>Bapak/Ibu/Saudara/i</span>

        <StyledButton types="secondary" onClick={handleOpenRsvp}>
          Klik untuk RSVP
        </StyledButton>
      </div>
    </StyledRsvp>
  );
};

export default Rsvp;
