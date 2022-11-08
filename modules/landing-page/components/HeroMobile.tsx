import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { DEVICE_SIZE } from 'constants/device-size';

const StyledTitle = styled.div`
  -webkit-animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadein;
  animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadein;
  animation-delay: 3s;

  opacity: 0;
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
  }

  .name-animation {
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
      <motion.img className="img-1" src="images/putri-profile-raw.png" alt="Putri" />

      <motion.img className="img-2" src="images/jodie-profile-raw.png" alt="Jodie" />

      <motion.img className="img-3" src="images/hero/bw-1.png" alt="Putri & Jodie B/W" />

      <motion.img className="img-4" src="images/hero/colored-1.png" alt="Putri & Jodie Colored" />

      <StyledTitle>
        <img className="image-animation" src="images/main-hero-avatar.png" alt="Putri and Jodie" />
        <h2 className="info-animation">join us to celebrate</h2>
        <h1 className="name-animation">
          the wedding of
          <br />
          Putri & Jodie
        </h1>
        <h2 className="date-animation">18.12.22</h2>
      </StyledTitle>
    </StyledHeroMobile>
  );
};

export default HeroMobile;
