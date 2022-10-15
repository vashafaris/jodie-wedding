/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @next/next/no-img-element */
import { DEVICE_SIZE } from 'constants/device-size';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const StyledHealthProtocol = styled.section`
  min-height: 600px;
  display: flex;
  align-items: start;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .title-container {
    display: flex;
    flex: 1;
    justify-content: center;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      margin-bottom: 24px;
    }
  }

  .information-container {
    display: flex;
    flex: 1;
    flex-direction column;

    .protocol-row-container {
      display: grid;
      grid-template-columns: auto auto;
      gap: 24px;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        grid-template-columns: auto;
      }

      span {
        font-size: 18px;
      }
    }
  }
`;

const HealthProtocol = () => {
  const titleAnimation = useAnimation();
  const descriptionAnimation = useAnimation();
  const imgAnimation = useAnimation();

  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.9,
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

      descriptionAnimation.start({
        opacity: 1,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      });

      imgAnimation.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      });
    }
  }, [isInView]);

  return (
    <StyledHealthProtocol ref={ref}>
      <motion.div
        animate={titleAnimation}
        initial={{
          opacity: 0,
          translateY: '40px',
        }}
        className="title-container"
      >
        <h1>
          Protokol
          <br />
          Kesehatan
        </h1>
      </motion.div>

      <div className="information-container">
        <div className="protocol-row-container">
          <div>
            <motion.span
              animate={descriptionAnimation}
              initial={{
                opacity: 0,
              }}
            >
              1. Gunakan masker
            </motion.span>
            <motion.img
              animate={imgAnimation}
              initial={{
                opacity: 0,
                scale: 1.4,
              }}
              src="images/protocol-masker.png"
              alt="Please wear masker"
            />
          </div>

          <div>
            <motion.span
              animate={descriptionAnimation}
              initial={{
                opacity: 0,
              }}
            >
              2. Jaga jarak
            </motion.span>
            <motion.img
              animate={imgAnimation}
              initial={{
                opacity: 0,
                scale: 1.4,
              }}
              src="images/protocol-social-distancing.png"
              alt="Dont forget to social distancing"
            />
          </div>

          <div>
            <motion.span
              animate={descriptionAnimation}
              initial={{
                opacity: 0,
              }}
            >
              3. Hindari berjabat tangan
              <br />
              dan gunakan salam isyarat
            </motion.span>
            <motion.img
              animate={imgAnimation}
              initial={{
                opacity: 0,
                scale: 1.4,
              }}
              src="images/protocol-namaste.png"
              alt="Namaste"
            />
          </div>

          <div>
            <motion.span animate={descriptionAnimation} initial={{ opacity: 0 }}>
              4. Cuci tangan secara berkala
            </motion.span>
            <motion.img
              animate={imgAnimation}
              initial={{
                opacity: 0,
                scale: 1.4,
              }}
              src="images/protocol-hand-wash.png"
              alt="Wash your hand"
            />
          </div>
        </div>
      </div>
    </StyledHealthProtocol>
  );
};

export default HealthProtocol;
