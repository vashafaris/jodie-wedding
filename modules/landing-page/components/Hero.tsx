/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-negated-condition */
import { DEVICE_SIZE } from 'constants/device-size';
import useCursorTracker from 'hooks/useCursorTracker';
import useDeviceDetect from 'hooks/useDeviceDetect';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type StyledImgWrapperProps = {
  height: number;
  width: number;
  translateX: number;
  translateY: number;
};

const StyledHero = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 2;
`;

const StyledGradient = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 999;

  height: 50px;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), white);
`;

const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledCanvas = styled.div`
  position: absolute;
  width: 102vw;
  height: 102vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    position: absolute;
    top: 0;
    overflow: auto;
    width: 1800px;
  }
`;

const StyledTitle = styled.div.attrs((props: StyledImgWrapperProps) => ({
  style: {
    transform:
      props.translateY !== 0 ? `translate(${props.translateX}px, ${props.translateY}px)` : null,
    height: props.height,
    width: props.width,
    transition: `transform 4s cubic-bezier(0.33, 1, 0.68, 1)`,
  },
}))<StyledImgWrapperProps>`
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  pointer-events: none;
  transform-style: preserve-3d;

  will-change: transform opacity transition clip-path;

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

  img {
    width: 50%;
    max-width: 600px;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      width: 60%;
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
    -webkit-animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadeins;
    animation: 0.5s cubic-bezier(0.76, 0, 0.24, 1) forwards fadeins;
    animation-delay: 3s;
  }

  .first-row-animation {
    opacity: 0;
    animation: clipPathDown 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
  }

  .second-row-animation {
    opacity: 0;
    animation: clipPathDown 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
    animation-delay: 0.2s;
  }

  .third-row-animation {
    opacity: 0;
    animation: clipPathDown 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
    animation-delay: 0.4s;
  }

  .fourth-row-animation {
    opacity: 0;
    animation: clipPathDown 3s cubic-bezier(0.76, 0, 0.24, 1) forwards;
    animation-delay: 0.6s;
  }

  @keyframes fadeins {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeins {
    0% {
      opacity: 0;
    }
    100% {
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

const StyledImgCanvas = styled.div.attrs((props: StyledImgWrapperProps) => ({
  style: {
    transform:
      props.translateY !== 0 ? `translate(${props.translateX}px, ${props.translateY}px)` : null,
    height: props.height,
    width: props.width,
    transition: `transform 4s cubic-bezier(0.33, 1, 0.68, 1)`,
  },
}))<StyledImgWrapperProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  pointer-events: none;
  transform-style: preserve-3d;
  will-change: transform opacity transition clip-path;

  @media (min-width: ${DEVICE_SIZE.tablet}) {
    width: 3820px;
    height: 3350px;
  }

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    display: none;
  }
`;

const StyledImgWrapper = styled.div.attrs((props: StyledImgWrapperProps) => ({
  style: {
    transform:
      props.translateY !== 0 ? `translate(${props.translateX}px, ${props.translateY}px)` : null,
    height: props.height,
    width: props.width,
  },
}))<StyledImgWrapperProps>`
  transition: ease-in-out opacity 1s;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface StyledImgProps {
  maxWidth: number;
}

const StyledImg = styled.img<StyledImgProps>`
  position: absolute;
  max-width: ${props => props.maxWidth}px;

  opacity: 0;

  -webkit-animation: 1s ease-out 0s normal forwards 1 fadein;
  animation: 1s ease-out 0s normal forwards 1 fadein;
  animation-delay: 3s;

  @keyframes fadein {
    0% {
      opacity: 0;
      scale: 1.2;
    }
    50% {
      opacity: 1;
    }
    100% {
      scale: 1;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    0% {
      opacity: 0;
      scale: 1.2;
    }
    50% {
      opacity: 1;
    }
    100% {
      scale: 1;
      opacity: 1;
    }
  }
`;

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [screenSize, setScreenSize] = useState({
    x: 0,
    y: 0,
  });

  const { isMobile } = useDeviceDetect();

  const mousePosition = useCursorTracker({
    includeTouch: isMobile,
    containerRef,
  });

  useEffect(() => {
    setScreenSize({
      x: screen.width,
      y: screen.height,
    });
  }, []);

  return (
    <StyledHero>
      <StyledContainer>
        <StyledCanvas>
          <StyledTitle
            height={screenSize.y * 1.4}
            width={screenSize.x * 1.4}
            translateX={mousePosition.x * 0.98}
            translateY={mousePosition.y * 0.98}
          >
            <img
              className="image-animation"
              src="images/main-hero-avatar.png"
              alt="Putri and Jodie"
            />
            <h2 className="first-row-animation">join us to celebrate</h2>
            <h1 className="second-row-animation">the wedding of</h1>
            <h1 className="third-row-animation">Putri & Jodie</h1>
            <h2 className="fourth-row-animation">18.12.22</h2>
          </StyledTitle>

          {/* =======================3======================== */}

          <StyledImgCanvas
            ref={containerRef}
            height={screenSize.y * 1.4}
            width={screenSize.x * 1.4}
            translateX={mousePosition.x * 0.92}
            translateY={mousePosition.y * 0.92}
          >
            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={-300}
              translateY={-480}
            >
              <StyledImg src="images/hero/colored-1.png" maxWidth={256} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={0}
              translateY={620}
            >
              <StyledImg src="images/hero/colored-6.png" maxWidth={346} />
            </StyledImgWrapper>
            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={975}
              translateY={680}
            >
              <StyledImg src="images/hero/colored-8.png" maxWidth={482} />
            </StyledImgWrapper>

            {/* bw */}

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={600}
              translateY={-500}
            >
              <StyledImg src="images/hero/bw-2.png" maxWidth={365} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={-550}
              translateY={270}
            >
              <StyledImg src="images/hero/bw-4.png" maxWidth={448} />
            </StyledImgWrapper>
          </StyledImgCanvas>

          {/* ===========================4===================== */}

          <StyledImgCanvas
            height={screenSize.y * 1.4}
            width={screenSize.x * 1.4}
            translateX={mousePosition.x * 0.87}
            translateY={mousePosition.y * 0.87}
          >
            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={-800}
              translateY={-500}
            >
              <StyledImg src="images/hero/bw-1.png" maxWidth={291} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={1050}
              translateY={-400}
            >
              <StyledImg src="images/hero/bw-3.png" maxWidth={365} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={-700}
              translateY={720}
            >
              <StyledImg src="images/hero/bw-5.png" maxWidth={365} />
            </StyledImgWrapper>

            {/* color */}

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={100}
              translateY={-780}
            >
              <StyledImg src="images/hero/colored-2.png" maxWidth={310} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={-1100}
              translateY={70}
            >
              <StyledImg src="images/hero/colored-3.png" maxWidth={333} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={550}
              translateY={100}
            >
              <StyledImg src="images/hero/colored-4.png" maxWidth={333} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={420}
              translateY={525}
            >
              <StyledImg src="images/hero/colored-7.png" maxWidth={333} />
            </StyledImgWrapper>
          </StyledImgCanvas>
        </StyledCanvas>
      </StyledContainer>

      <StyledGradient />
    </StyledHero>
  );
};

export default Hero;
