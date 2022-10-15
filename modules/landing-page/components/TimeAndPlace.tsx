/* eslint-disable @typescript-eslint/no-floating-promises */
import { DEVICE_SIZE } from 'constants/device-size';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import Button from '~/components/button/button';

const StyledTimeAndPlace = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 94px;

  h2 {
    font-size: 72px;
  }

  .info-container {
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 15%;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      flex-direction: column;
    }

    .title {
      display: flex;
      flex: 1;
      justify-content: flex-end;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        margin-bottom: 20px;
        justify-content: center;
      }
    }

    .information {
      display: flex;
      flex: 1;
      flex-direction: column;
      font-size: 28px;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        align-items: center;
      }

      .address {
        font-size: 18px;

        @media (max-width: ${DEVICE_SIZE.tablet}) {
          text-align: center;
        }
      }

      .time {
        @media (max-width: ${DEVICE_SIZE.tablet}) {
          font-size: 18px;
        }
      }
    }
  }
`;

const TimeAndPlace = () => {
  const titleAnimation = useAnimation();
  const informationAnimation = useAnimation();

  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (isInView) {
      titleAnimation.start({
        opacity: 1,
        translateY: '0px',
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      });

      informationAnimation.start({
        opacity: 1,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      });
    }
  }, [informationAnimation, isInView, titleAnimation]);

  return (
    <StyledTimeAndPlace ref={ref}>
      <div className="info-container">
        <motion.div
          animate={titleAnimation}
          initial={{
            opacity: 0,
            translateY: '40px',
          }}
          className="title"
        >
          <h1>Waktu</h1>
        </motion.div>

        <motion.div
          animate={informationAnimation}
          initial={{
            opacity: 0,
          }}
          className="information"
        >
          <span>Minggu,</span>
          <span>18 Desember 2022</span>
          <br />
          <span className="time">19.00 - 21.00 WIB</span>
          <br />

          <Button>Lihat Livestreaming</Button>
        </motion.div>
      </div>

      <div className="info-container">
        <motion.div
          animate={titleAnimation}
          initial={{
            opacity: 0,
            translateY: '40px',
          }}
          className="title"
        >
          <h1>Tempat</h1>
        </motion.div>

        <motion.div
          animate={informationAnimation}
          initial={{
            opacity: 0,
          }}
          className="information"
        >
          <span>Kembali Ke Rumah Sarwono</span>

          <br />

          <span className="address">
            Jl. Raya Pasar Minggu KM 18.2
            <br />
            RT. 12 / RW.1 - Ragunan
            <br />
            Kec. Pasar Minggu - Jakarta Selatan
          </span>

          <br />

          <Button>Lihat Lokasi di Google Maps</Button>
        </motion.div>
      </div>
    </StyledTimeAndPlace>
  );
};

export default TimeAndPlace;
