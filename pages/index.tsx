/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-negated-condition */
// import useCursorTracker from 'hooks/useCursorTracker';
// import useMousePosition from 'hooks/useMousePosition';
import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '~/components/button/button';

type StyledImgWrapperProps = {
  height: number;
  width: number;
  translateX: number;
  translateY: number;
};

const StyledMain = styled.main`
  position: relative;
`;

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

// Section - 2

const StyledQuotes = styled.section`
  position: relative;
  height: 100vh;
  max-height: 600px;
  background-image: url('images/bg-2.png');

  .quotes {
    position: absolute;
    top: 20%;
    left: 60%;
    width: 20%;
    letter-spacing: 0.03em;
    line-height: 150%;

    p {
      margin-bottom: 12px;
    }

    span {
      font-size: 36px;
      font-family: Doppelganger;
    }
  }
`;

// Section - 3

const StyledProfile = styled.section`
  min-height: 100vh;
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .profile {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h1 {
      font-size: 72px;
      line-height: 80px;
      margin-bottom: 40px;
    }

    .information {
      transform: translateX(50%);
      font-size: 18px;

      .title {
        display: inline-flex;
        color: #5f5f5f;
        margin-bottom: 12px;
      }

      .subtitle {
        color: #193053;
      }
    }
  }
`;

// Section - 4

const StyledTimeAndPlace = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 72px;
  }
`;

// Section - 5

const StyledOutfitTheme = styled.section`
  min-height: 600px;

  display: flex;
  align-items: center;

  .image-container {
    display: flex;
    justify-content: center;
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

const StyledHealthProtocol = styled.section`
  min-height: 600px;
  display: flex;
  align-items: start;

  .title-container {
    display: flex;
    flex: 1;
    justify-content: center;

    h1 {
      font-size: 72px;
    }
  }

  .information-container {
    display: flex;
    flex: 1;
    flex-direction column;

    .protocol-row-container {
      display: flex;
      gap: 24px;

      span {
        font-size: 18px;
      }
    }
  }
`;

const StyledRsvp = styled.section`
  min-height: 400px;
  background-image: linear-gradient(to bottom, #193053, #061c3d);
  color: white;

  display: flex;
  align-items: center;

  .title-container {
    display: flex;
    flex: 1;
    justify-content: center;

    h1 {
      font-size: 72px;
      color: white;
    }
  }

  .information-container {
    display: flex;
    flex: 1;
    flex-direction: column;

    span {
      font-size: 28px;

      &:last-of-type {
        margin-bottom: 44px;
      }
    }
  }
`;

const StyledFarewell = styled.section`
  min-height: 600px;

  background-image: url('images/farewell.png');
  background-position: center bottom;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 80px;

  h1 {
    font-size: 72px;
  }

  span {
    font-size: 18px;
  }
`;

const Home: NextPage = () => {
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
    <StyledMain>
      <StyledHero>
        <StyledWrapper>
          <StyledCanvas>
            <StyledTitle
              height={screenSize?.y * 1.4}
              width={screenSize?.x * 1.4}
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
              height={screenSize?.y * 1.4}
              width={screenSize?.x * 1.4}
              translateX={mousePosition.x}
              translateY={mousePosition.y}
            >
              <StyledImgWrapper
                height={screenSize?.y * 1.4}
                width={screenSize?.x * 1.4}
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
              height={screenSize?.y * 1.4}
              width={screenSize?.x * 1.4}
              translateX={mousePosition.x}
              translateY={mousePosition.y}
            >
              {/* <StyledImgWrapper translateX={-331} translateY={195}>
                <StyledImg src="images/hero-4.png" />
              </StyledImgWrapper> */}

              <StyledImgWrapper
                height={screenSize?.y * 1.4}
                width={screenSize?.x * 1.4}
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

      <StyledQuotes>
        <div className="quotes">
          <p>
            And one of His signs is that He created for you spouses from among yourselves so that
            you may find comfort in them. And He has placed between you compassion and mercy. Surely
            in these are signs for people who reflect.
          </p>

          <br />

          <span>QS Ar-Rum 21</span>
        </div>
      </StyledQuotes>

      <StyledProfile>
        <div className="profile">
          <div>
            <h1>
              Putri
              <br />
              Nadhira
            </h1>

            <div className="information">
              <span className="title">Putri pertama dari</span>
              <br />

              <span className="subtitle">
                Bapak Jusuf Sanggarabudi
                <br />
                &
                <br />
                Ibu Hefi Hifiasih Hasanah
              </span>
            </div>
          </div>

          <div>
            <img src="images/putri-profile.png" alt="Profile Putri" />
          </div>
        </div>

        <div className="profile">
          <div>
            <img src="images/jodie-profile.png" alt="Profile Jodie" />
          </div>

          <div>
            <h1>
              Jodie
              <br />
              Rizky
            </h1>

            <div className="information">
              <span className="title">Putra pertama dari</span>
              <br />

              <span className="subtitle">
                Bapak Jimmy D. Hidayat
                <br />
                &
                <br />
                Ibu Dian Indrijani
              </span>
            </div>
          </div>
        </div>
      </StyledProfile>

      <StyledTimeAndPlace className="flex flex-col p-14">
        <div className="flex mb-14">
          <div className="flex flex-1 justify-center">
            <h1 className="leading-10">Waktu</h1>
          </div>

          <div className="flex flex-col flex-1 mt-2">
            <span className="text-2xl">Minggu,</span>
            <span className="text-2xl mb-14">18 Desember 2022</span>
            <span className="text-2xl mb-8">19.00 - 21.00 WIB</span>

            <Button>Lihat Livestreaming</Button>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-1 justify-center">
            <h1 className="leading-10">Tempat</h1>
          </div>

          <div className="flex flex-col flex-1 mt-2">
            <span className="text-2xl mb-5">Kembali Ke Rumah Sarwono</span>

            <span className="text-lg">Jl. Raya Pasar Minggu KM 18.2</span>
            <span className="text-lg">RT. 12 / RW.1 - Ragunan</span>
            <span className="text-lg mb-5">Kec. Pasar Minggu - Jakarta Selatan</span>

            <Button>Lihat Lokasi di Google Maps</Button>
          </div>
        </div>
      </StyledTimeAndPlace>

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

      <StyledHealthProtocol>
        <div className="title-container">
          <h1>
            Protokol
            <br />
            Kesehatan
          </h1>
        </div>

        <div className="information-container">
          <div className="protocol-row-container">
            <div>
              <span>1. Gunakan masker</span>
              <img src="images/protocol-masker.png" alt="Please wear masker" />
            </div>

            <div>
              <span>2. Jaga jarak</span>
              <img
                src="images/protocol-social-distancing.png"
                alt="Dont forget to social distancing"
              />
            </div>
          </div>

          <div className="protocol-row-container">
            <div>
              <span>
                3. Hindari berjabat tangan
                <br />
                dan gunakan salam isyarat
              </span>
              <img src="images/protocol-namaste.png" alt="Namaste" />
            </div>

            <div>
              <span>4. Cuci tangan secara berkala</span>
              <img src="images/protocol-hand-wash.png" alt="Wash your hand" />
            </div>
          </div>
        </div>
      </StyledHealthProtocol>

      <StyledRsvp>
        <div className="title-container">
          <h1>RSVP</h1>
        </div>

        <div className="information-container">
          <span>Mohon konfirmasi kehadiran</span>
          <span>Bapak/Ibu/Saudara/i</span>

          <Button>Klik untuk RSVP</Button>
        </div>
      </StyledRsvp>

      <StyledFarewell>
        <h1>sampai jumpa</h1>

        <span>Desgined by Putri & Jodie</span>
      </StyledFarewell>
    </StyledMain>
  );
};

export default Home;
