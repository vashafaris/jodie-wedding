/* eslint-disable no-negated-condition */
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
`;

const StyledWrapper = styled.div`
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
  }

  h2 {
    font-weight: 200;
    font-size: 28px;
    margin: 16px;
    letter-spacing: 0.1em;
    color: #5f5f5f;
  }

  h1 {
    font-size: 72px;
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
  /* width: 3820px;
  height: 3350px; */
  transition: transform 3s cubic-bezier(0.33, 1, 0.68, 1);

  will-change: transform;
  display: none;
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
  position: relative;
`;

const StyledImg = styled.img`
  max-width: 215px;
`;

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [screenSize, setScreenSize] = useState({
    x: 0,
    y: 0,
  });

  const mousePosition = {
    x: 0,
    y: 0,
  };

  // const mousePosition = useCursorTracker({
  //   includeTouch: false,
  //   containerRef,
  // });

  useEffect(() => {
    setScreenSize({
      x: screen.width,
      y: screen.height,
    });
  }, []);

  return (
    <StyledHero>
      <StyledWrapper>
        <StyledCanvas>
          <StyledTitle
            height={screenSize.y * 1.4}
            width={screenSize.x * 1.4}
            translateX={mousePosition.x}
            translateY={mousePosition.y}
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
            translateX={mousePosition.x}
            translateY={mousePosition.y}
          >
            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={-230}
              translateY={-275}
            >
              <StyledImg src="images/hero-1.png" />
            </StyledImgWrapper>

            {/* <StyledImgWrapper translateX={-31} translateY={125}>
                <StyledImg src="images/hero-2.png" />
              </StyledImgWrapper> */}

            {/* <StyledImgWrapper translateX={-111} translateY={225}>
                <StyledImg src="images/hero-3.png" />
              </StyledImgWrapper> */}
          </StyledImgCanvas>

          <StyledImgCanvas
            height={screenSize.y * 1.4}
            width={screenSize.x * 1.4}
            translateX={mousePosition.x}
            translateY={mousePosition.y}
          >
            {/* <StyledImgWrapper translateX={-331} translateY={195}>
                <StyledImg src="images/hero-4.png" />
              </StyledImgWrapper> */}

            <StyledImgWrapper
              height={screenSize.y * 1.4}
              width={screenSize.x * 1.4}
              translateX={180}
              translateY={270}
            >
              <StyledImg src="images/hero-5.png" />
            </StyledImgWrapper>

            {/* <StyledImgWrapper translateX={-231} translateY={40}>
                <StyledImg src="images/hero-6.png" />
              </StyledImgWrapper> */}
          </StyledImgCanvas>
        </StyledCanvas>
      </StyledWrapper>
    </StyledHero>
  );
};

export default Hero;
