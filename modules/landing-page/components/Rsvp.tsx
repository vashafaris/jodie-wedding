import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import Button from '~/components/button/button';

const StyledRsvp = styled.section`
  min-height: 400px;
  background-image: linear-gradient(to bottom, #193053, #061c3d);
  color: white;

  display: flex;
  align-items: center;

  .title-container {
    display: flex;
    flex: 1;
    justify-content: center;

    h1 {
      font-size: 72px;
      color: white;
    }
  }

  .information-container {
    display: flex;
    flex: 1;
    flex-direction: column;

    span {
      font-size: 28px;

      &:last-of-type {
        margin-bottom: 44px;
      }
    }
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

        <Button>Klik untuk RSVP</Button>
      </div>
    </StyledRsvp>
  );
};

export default Rsvp;
