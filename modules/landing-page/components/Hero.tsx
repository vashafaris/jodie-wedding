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
  isMobile: boolean;
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
    transition: `transform ${props.isMobile ? '0.2s' : '4s'} cubic-bezier(0.33, 1, 0.68, 1)`,
  },
}))<StyledImgWrapperProps>`
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // transform-origin: center;
  pointer-events: none;
  transform-style: preserve-3d;

  will-change: transform opacity transition;

  opacity: 0;

  -webkit-animation: 0.8s ease-out 0s normal forwards 1 fadein;
  animation: 0.8s ease-out 0s normal forwards 1 fadein;

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

    -webkit-animation: 0.8s ease-out 0s normal forwards 1 fadein;
    animation: 0.8s ease-out 0s normal forwards 1 fadein;

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
  }

  .name-animation {
    opacity: 0;

    -webkit-animation: 0.8s ease-out 0s normal forwards 1 fadein;
    animation: 0.8s ease-out 0s normal forwards 1 fadein;

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
  }
`;

const StyledImgCanvas = styled.div.attrs((props: StyledImgWrapperProps) => ({
  style: {
    transform:
      props.translateY !== 0 ? `translate(${props.translateX}px, ${props.translateY}px)` : null,
    height: props.height,
    width: props.width,
    transition: `transform ${props.isMobile ? '0.2s' : '4s'} cubic-bezier(0.33, 1, 0.68, 1)`,
  },
}))<StyledImgWrapperProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  pointer-events: none;
  transform-style: preserve-3d;
  will-change: transform opacity transition;

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
  animationDelay: number;
}

const StyledImg = styled.img<StyledImgProps>`
  position: absolute;
  max-width: ${props => props.maxWidth}px;

  opacity: 0;

  -webkit-animation: 4s ease-out 0s normal forwards 1 fadein;
  animation: 2s ease-out 0s normal forwards 1 fadein;
  animation-delay: ${props => props.animationDelay * 1.2}s;

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
            isMobile={isMobile}
          >
            <img
              className="image-animation"
              src="images/main-hero-avatar.png"
              alt="Putri and Jodie"
            />
            <h2 className="info-animation">join us to celebrate</h2>
            <h1 className="name-animation">
              the wedding of
              <br />
              Putri & Jodie
            </h1>
            <h2 className="date-animation">18.12.22</h2>
          </StyledTitle>

          {/* =======================3======================== */}

          <StyledImgCanvas
            ref={containerRef}
            height={screenSize.y * 1.4}
            width={screenSize.x * 1.4}
            translateX={mousePosition.x * 0.92}
            translateY={mousePosition.y * 0.92}
            isMobile={isMobile}
          >
            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={-300}
              translateY={-480}
            >
              <StyledImg animationDelay={1.2} src="images/hero/colored-1.png" maxWidth={256} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={0}
              translateY={620}
            >
              <StyledImg animationDelay={1.3} src="images/hero/colored-6.png" maxWidth={346} />
            </StyledImgWrapper>
            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={975}
              translateY={680}
            >
              <StyledImg animationDelay={1.4} src="images/hero/colored-8.png" maxWidth={482} />
            </StyledImgWrapper>

            {/* bw */}

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={600}
              translateY={-500}
            >
              <StyledImg animationDelay={1.2} src="images/hero/bw-2.png" maxWidth={365} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={-550}
              translateY={270}
            >
              <StyledImg animationDelay={1.4} src="images/hero/bw-4.png" maxWidth={448} />
            </StyledImgWrapper>
          </StyledImgCanvas>

          {/* ===========================4===================== */}

          <StyledImgCanvas
            height={screenSize.y * 1.4}
            width={screenSize.x * 1.4}
            translateX={mousePosition.x * 0.87}
            translateY={mousePosition.y * 0.87}
            isMobile={isMobile}
          >
            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={-800}
              translateY={-500}
            >
              <StyledImg animationDelay={1.2} src="images/hero/bw-1.png" maxWidth={291} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={1050}
              translateY={-400}
            >
              <StyledImg animationDelay={1.4} src="images/hero/bw-3.png" maxWidth={365} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={-700}
              translateY={720}
            >
              <StyledImg animationDelay={1.6} src="images/hero/bw-5.png" maxWidth={365} />
            </StyledImgWrapper>

            {/* color */}

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={100}
              translateY={-780}
            >
              <StyledImg animationDelay={1.5} src="images/hero/colored-2.png" maxWidth={310} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={-1100}
              translateY={70}
            >
              <StyledImg animationDelay={1.7} src="images/hero/colored-3.png" maxWidth={333} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={550}
              translateY={100}
            >
              <StyledImg animationDelay={1.4} src="images/hero/colored-4.png" maxWidth={333} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={420}
              translateY={525}
            >
              <StyledImg animationDelay={1.3} src="images/hero/colored-7.png" maxWidth={333} />
            </StyledImgWrapper>
          </StyledImgCanvas>
        </StyledCanvas>
      </StyledContainer>

      <StyledGradient />
    </StyledHero>
  );
};

export default Hero;
