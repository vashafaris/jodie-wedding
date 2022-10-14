import { DEVICE_SIZE } from 'constants/device-size';
import React from 'react';
import styled from 'styled-components';

const StyledOutfitTheme = styled.section`
  min-height: 600px;

  display: flex;
  align-items: center;
  gap: 15%;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 60px 0;
    flex-direction: column;
  }

  .image-container {
    display: flex;
    justify-content: flex-end;
    flex: 1;

    img {
      max-width: 80%;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        max-width: 100%;
        object-fit: contain;
      }
    }
  }

  .information-container {
    display: flex;
    flex-direction: column;
    flex: 1;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      text-align: center;
    }

    h1 {
      margin-bottom: 20px;
    }

    span {
      font-size: 28px;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        font-size: 18px;
      }
    }
  }
`;

const OutfitTheme = () => {
  return (
    <StyledOutfitTheme>
      <div className="image-container">
        <img src="images/berkain.png" alt="Berkain" />
      </div>

      <div className="information-container">
        <h1>Tema Busana</h1>
        <span>Mari kenakan kain batik</span>
        <span>atau tenun kesayanganmu!</span>
      </div>
    </StyledOutfitTheme>
  );
};

export default OutfitTheme;
