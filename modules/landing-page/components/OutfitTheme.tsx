import React from 'react';
import styled from 'styled-components';

const StyledOutfitTheme = styled.section`
  min-height: 600px;

  display: flex;
  align-items: center;
  gap: 15%;

  .image-container {
    display: flex;
    justify-content: flex-end;
    flex: 1;

    img {
      max-width: 80%;
    }
  }

  .information-container {
    display: flex;
    flex-direction: column;
    flex: 1;

    h1 {
      font-size: 72px;
      margin-bottom: 20px;
    }

    span {
      font-size: 28px;
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
