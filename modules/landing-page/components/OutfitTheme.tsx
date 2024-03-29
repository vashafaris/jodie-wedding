/* eslint-disable @typescript-eslint/no-floating-promises */
import { DEVICE_SIZE } from 'constants/device-size';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import ImageOverlay from '~/components/image-overlay';

const StyledOutfitTheme = styled.section`
  min-height: 600px;
  height: 100vh;

  display: flex;
  align-items: center;
  gap: 15%;
  overflow: hidden;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 60px 24px;
    flex-direction: column;
    height: unset;
  }

  .image-container {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    padding: 24px;
    overflow: hidden;
  }

  .information-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: 36px;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      padding-right: 0;
    }

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      text-align: center;
    }

    h1 {
      margin-bottom: 20px;
    }

    span {
      font-size: 18px;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        font-size: 18px;
      }
    }
  }
`;

const OutfitTheme = () => {
  const imgAnimation = useAnimation();
  const informationAnimation = useAnimation();

  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (isInView) {
      imgAnimation.start({
        opacity: 1,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      });

      informationAnimation.start({
        opacity: 1,
        translateY: '0px',
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      });
    }
  }, [imgAnimation, informationAnimation, isInView]);

  return (
    <StyledOutfitTheme ref={ref}>
      <div className="image-container">
        <ImageOverlay
          alt="Berkain"
          src="images/berkain.png"
          className="profile-img"
          height={398}
          width={600}
          isInView={isInView}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, translateY: '40px' }}
        animate={informationAnimation}
        className="information-container"
      >
        <h1>Tema Busana</h1>
        <span>Mari kenakan kain batik</span>
        <span>atau tenun kesayanganmu!</span>
        <br />
        <span>
          Acara akan dilaksanakan di area semi-outdoor,
          <br />
          oleh karena itu mohon hindari menggunakan sepatu hak tinggi
        </span>
      </motion.div>
    </StyledOutfitTheme>
  );
};

export default OutfitTheme;
