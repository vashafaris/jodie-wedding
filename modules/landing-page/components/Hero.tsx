/* eslint-disable no-negated-condition */
import { DEVICE_SIZE } from 'constants/device-size';
import useCursorTracker from 'hooks/useCursorTracker';
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

  @media ${DEVICE_SIZE.mobileL} {
    max-width: 800px;
  }
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
`;

const StyledTitle = styled.div.attrs((props: StyledImgWrapperProps) => ({
  style: {
    transform:
      props.translateY !== 0 ? `translate(${props.translateX}px, ${props.translateY}px)` : null,
    height: props.height,
    width: props.width,
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
  /* width: 3820px;
  height: 3350px; */
  transition: transform 3s cubic-bezier(0.33, 1, 0.68, 1);

  will-change: transform;

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
`;

const StyledImgCanvas = styled.div.attrs((props: StyledImgWrapperProps) => ({
  style: {
    transform:
      props.translateY !== 0 ? `translate(${props.translateX}px, ${props.translateY}px)` : null,
    height: props.height,
    width: props.width,
  },
}))<StyledImgWrapperProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  pointer-events: none;
  transform-style: preserve-3d;
  width: 3820px;
  height: 3350px;
  transition: transform 3s cubic-bezier(0.33, 1, 0.68, 1);

  will-change: transform;
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
`;

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [screenSize, setScreenSize] = useState({
    x: 0,
    y: 0,
  });

  // const mousePosition = {
  //   x: 0,
  //   y: 0,
  // };

  const mousePosition = useCursorTracker({
    includeTouch: false,
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
            <img src="images/main-hero-avatar.png" alt="Putri and Jodie" />
            <h2>join us to celebrate</h2>
            <h1>
              the wedding of
              <br />
              Putri & Jodie
            </h1>
            <h2>18.12.22</h2>
          </StyledTitle>

          <StyledImgCanvas
            ref={containerRef}
            height={screenSize.y * 1.4}
            width={screenSize.x * 1.4}
            translateX={mousePosition.x * 0.9}
            translateY={mousePosition.y * 0.9}
          >
            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={-200}
              translateY={-380}
            >
              <StyledImg src="images/hero/colored-1.png" maxWidth={256} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={0}
              translateY={-780}
            >
              <StyledImg src="images/hero/colored-2.png" maxWidth={310} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={-900}
              translateY={100}
            >
              <StyledImg src="images/hero/colored-3.png" maxWidth={333} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={450}
              translateY={100}
            >
              <StyledImg src="images/hero/colored-4.png" maxWidth={333} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={850}
              translateY={200}
            >
              <StyledImg src="images/hero/colored-5.png" maxWidth={333} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={0}
              translateY={800}
            >
              <StyledImg src="images/hero/colored-6.png" maxWidth={346} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={400}
              translateY={650}
            >
              <StyledImg src="images/hero/colored-7.png" maxWidth={333} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={800}
              translateY={750}
            >
              <StyledImg src="images/hero/colored-8.png" maxWidth={333} />
            </StyledImgWrapper>
          </StyledImgCanvas>

          <StyledImgCanvas
            height={screenSize.y * 1.4}
            width={screenSize.x * 1.4}
            translateX={mousePosition.x * 0.93}
            translateY={mousePosition.y * 0.93}
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
              translateX={600}
              translateY={-500}
            >
              <StyledImg src="images/hero/bw-2.png" maxWidth={365} />
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
              translateX={-450}
              translateY={300}
            >
              <StyledImg src="images/hero/bw-4.png" maxWidth={448} />
            </StyledImgWrapper>

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={-700}
              translateY={720}
            >
              <StyledImg src="images/hero/bw-5.png" maxWidth={365} />
            </StyledImgWrapper>
          </StyledImgCanvas>
        </StyledCanvas>
      </StyledContainer>

      <StyledGradient />
    </StyledHero>
  );
};

export default Hero;
