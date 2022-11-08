import React from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../loading-spinner';

const StyledLoadingScreen = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: 200;
    font-size: 28px;
    margin: 16px;
    letter-spacing: 0.1em;
    color: #5f5f5f;
  }
`;

const LoadingScreen = () => {
  return (
    <StyledLoadingScreen>
      <LoadingSpinner />
    </StyledLoadingScreen>
  );
};

export default LoadingScreen;
