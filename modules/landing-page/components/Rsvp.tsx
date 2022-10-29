import { DEVICE_SIZE } from 'constants/device-size';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import Button from '~/components/button/button';

const StyledRsvp = styled.section`
  height: 50vh;
  min-height: 400px;
  background-image: linear-gradient(to bottom, #193053, #061c3d);
  color: white;

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

  if (router.query.type !== 'rsvp') {
    return null;
  }

  return (
    <StyledRsvp>
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
