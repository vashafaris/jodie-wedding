/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-negated-condition */
import useCursorTracker from 'hooks/useCursorTracker';
// import useMousePosition from 'hooks/useMousePosition';
import type { NextPage } from 'next';
import { useRef } from 'react';
import styled from 'styled-components';

type StyledImgWrapperProps = {
  translateX: number;
  translateY: number;
};

const StyledMain = styled.main`
  position: relative;
`;

const StyledHero = styled.section`
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

const StyledTitle = styled.div<StyledImgWrapperProps>`
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  pointer-events: none;
  transform-style: preserve-3d;
  width: 2820px;
  height: 2350px;
  transform: ${props =>
    props.translateY !== 0 ? `translate(${props.translateX}px, ${props.translateY}px)` : null};
  transition: transform 0.3s;

  will-change: transform;
`;

const StyledImgCanvas = styled.div<StyledImgWrapperProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  pointer-events: none;
  transform-style: preserve-3d;
  width: 2820px;
  height: 2350px;
  transform: ${props =>
    props.translateY !== 0 ? `translate(${props.translateX}px, ${props.translateY}px)` : null};
  transition: transform 0.3s;

  will-change: transform;
`;

const StyledImgWrapper = styled.div<StyledImgWrapperProps>`
  transition: ease-in-out opacity 1s;
  position: relative;
  transform: ${props => `translate(${props.translateX}px, ${props.translateY}px)`};
`;

const StyledImg = styled.img`
  max-width: 215px;
`;

const Home: NextPage = () => {
  const containerRef = useRef(null);
  // const { transformVal } = useCursorTracker(containerRef);
  const mousePosition = useCursorTracker({
    includeTouch: false,
    containerRef,
  });

  // const [transformXTo, setTransformXTo] = useState(0);
  // const [transformYTo, setTransformYTo] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log('test');
  //     setTransformXTo(prev => prev + 20);
  //     setTransformYTo(prev => prev + 20);
  //   }, 50);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <StyledMain>
      <StyledHero>
        <StyledWrapper>
          <StyledCanvas>
            <StyledTitle translateX={mousePosition.x} translateY={mousePosition.y}>
              <h2>join us to celebrate</h2>
              <h1>the wedding of Putri & Jodie</h1>
              <h2>18.12.22</h2>
            </StyledTitle>

            <StyledImgCanvas
              ref={containerRef}
              translateX={mousePosition.x}
              translateY={mousePosition.y}
            >
              <StyledImgWrapper translateX={-331} translateY={-395}>
                <StyledImg src="images/hero-1.png" />
              </StyledImgWrapper>

              {/* <StyledImgWrapper translateX={-31} translateY={125}>
                <StyledImg src="images/hero-2.png" />
              </StyledImgWrapper>

              <StyledImgWrapper translateX={-111} translateY={225}>
                <StyledImg src="images/hero-3.png" />
              </StyledImgWrapper> */}
            </StyledImgCanvas>

            <StyledImgCanvas translateX={mousePosition.x} translateY={mousePosition.y}>
              <StyledImgWrapper translateX={-331} translateY={195}>
                <StyledImg src="images/hero-4.png" />
              </StyledImgWrapper>

              {/* <StyledImgWrapper translateX={-100} translateY={95}>
                <StyledImg src="images/hero-5.png" />
              </StyledImgWrapper>

              <StyledImgWrapper translateX={-231} translateY={40}>
                <StyledImg src="images/hero-6.png" />
              </StyledImgWrapper> */}
            </StyledImgCanvas>
          </StyledCanvas>
        </StyledWrapper>
      </StyledHero>
    </StyledMain>
  );
};

export default Home;
