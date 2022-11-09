/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';

import { DEVICE_SIZE } from 'constants/device-size';

const StyledTitle = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  pointer-events: none;
  transform-style: preserve-3d;
  overflow: auto;
  margin: 0 auto;

  img {
    width: 50%;
    max-width: 600px;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      width: 90%;
    }
  }

  h2 {
    font-weight: 200;
    font-size: 28px;
    margin: 16px;
    letter-spacing: 0.1em;
    color: #5f5f5f;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      font-size: 18px;
    }
  }

  h1 {
    text-align: center;
  }

  .image-animation {
    opacity: 0;
    -webkit-animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadein;
    animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadein;
    animation-delay: 5.2s;
  }

  .first-row-animation {
    opacity: 0;
    animation: clipPathDown 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
    animation-delay: 2.2s;
  }

  .second-row-animation {
    opacity: 0;
    animation: clipPathDown 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
    animation-delay: 2.5s;
  }

  .third-row-animation {
    opacity: 0;
    animation: clipPathDown 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
    animation-delay: 2.8s;
  }

  .fourth-row-animation {
    opacity: 0;
    animation: clipPathDown 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
    animation-delay: 3.1s;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes clipPathUp {
    0% {
      -webkit-clip-path: inset(100% 0 0 0);
      clip-path: inset(100% 0 0 0);
      opacity: 0;
    }
    100% {
      -webkit-clip-path: inset(0 0 0 0);
      clip-path: inset(0 0 0 0);
      opacity: 1;
    }
  }

  @-webkit-keyframes clipPathUp {
    0% {
      -webkit-clip-path: inset(100% 0 0 0);
      clip-path: inset(100% 0 0 0);
      opacity: 0;
    }
    100% {
      -webkit-clip-path: inset(0 0 0 0);
      clip-path: inset(0 0 0 0);
      opacity: 1;
    }
  }

  @keyframes clipPathDown {
    0% {
      transform: translateY(28px);
      -webkit-clip-path: inset(0 0 100% 0);
      clip-path: inset(0 0 100% 0);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      -webkit-clip-path: inset(0 0 0 0);
      clip-path: inset(0 0 0 0);
      opacity: 1;
    }
  }

  @-webkit-keyframes clipPathDown {
    0% {
      transform: translateY(28px);
      -webkit-clip-path: inset(0 0 100% 0);
      clip-path: inset(0 0 100% 0);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      -webkit-clip-path: inset(0 0 0 0);
      clip-path: inset(0 0 0 0);
      opacity: 1;
    }
  }
`;

const StyledHeroMobile = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .img-1 {
    position: absolute;
    opacity: 0;
    -webkit-animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadein,
      0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadeout;
    animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadein,
      0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadeout;
    animation-delay: 0s, 0.5s;
  }

  .img-2 {
    position: absolute;
    opacity: 0;
    -webkit-animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadein,
      0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadeout;
    animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadein,
      0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadeout;
    animation-delay: 0.6s, 1.1s;
  }

  .img-3 {
    position: absolute;
    opacity: 0;
    -webkit-animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadein,
      0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadeout;
    animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadein,
      0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadeout;
    animation-delay: 1.2s, 1.7s;
  }

  .img-4 {
    position: absolute;
    opacity: 0;
    -webkit-animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadein,
      0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadeout;
    animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadein,
      0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadeout;
    animation-delay: 1.8s, 2.3s;
  }

  .img-5 {
    position: absolute;
    opacity: 0;
    -webkit-animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadein,
      0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadeout;
    animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadein,
      0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadeout;
    animation-delay: 2.4s, 2.9s;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const HeroMobile = () => {
  return (
    <StyledHeroMobile>
      <img
        className="img-1"
        src="images/hero-mobile/hero-mobile-1.png"
        alt="Putri & Jodie Pose 1"
      />

      <img
        className="img-2"
        src="images/hero-mobile/hero-mobile-2.png"
        alt="Putri & Jodie Pose 2"
      />

      <img
        className="img-3"
        src="images/hero-mobile/hero-mobile-3.png"
        alt="Putri & Jodie Pose 3"
      />

      <img
        className="img-4"
        src="images/hero-mobile/hero-mobile-4.png"
        alt="Putri & Jodie Pose 4"
      />

      <img
        className="img-5"
        src="images/hero-mobile/hero-mobile-5.png"
        alt="Putri & Jodie Pose 5"
      />

      <StyledTitle>
        <img className="image-animation" src="images/main-hero-avatar.png" alt="Putri and Jodie" />
        <h2 className="first-row-animation">join us to celebrate</h2>
        <h1 className="second-row-animation">the wedding of</h1>
        <h1 className="third-row-animation">Putri & Jodie</h1>
        <h2 className="fourth-row-animation">18.12.22</h2>
      </StyledTitle>
    </StyledHeroMobile>
  );
};

export default HeroMobile;
