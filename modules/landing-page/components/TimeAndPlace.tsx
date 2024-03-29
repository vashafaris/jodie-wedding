/* eslint-disable @typescript-eslint/no-floating-promises */
import { DEVICE_SIZE } from 'constants/device-size';
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import Button from '~/components/button/button';

const StyledTimeAndPlace = styled.section`
  padding: 20vh 0;
  padding-bottom: 10vh;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 94px;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 36px 0;
  }

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
  const router = useRouter();

  let time = '';

  switch (router.query.sesi) {
    case 'akad':
      time = '08.30 - 10.30';
      break;
    case '1':
      time = '11.00 - 13.00';
      break;
    case '2':
      time = '15.30 - 17.30';
      break;
    default:
      time = '08-30 - 17.30';
  }

  const titleAnimation = useAnimation();
  const informationAnimation = useAnimation();

  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const handleOpenMaps = () => {
    const GMAPS_URL = 'https://maps.app.goo.gl/QbmFVTpTsXxindWH9?g_st=ic';

    window.open(GMAPS_URL, '_blank', 'noopener,noreferrer');
  };

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
          delay: 0.2,
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
          <span className="time">{time} WIB</span>
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
          <span>Kediaman Mempelai Wanita</span>

          <br />

          <span className="address">
            Jalan MPR II no. 8A Cilandak
            <br />
            Barat, Jakarta Selatan
          </span>

          <br />

          <Button onClick={handleOpenMaps}>Lihat Lokasi di Google Maps</Button>
        </motion.div>
      </div>
    </StyledTimeAndPlace>
  );
};

export default TimeAndPlace;
