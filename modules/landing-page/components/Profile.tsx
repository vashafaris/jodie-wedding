/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { DEVICE_SIZE } from 'constants/device-size';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const StyledProfile = styled.section`
  min-height: 100vh;
  display: flex;
  gap: 120px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 94px 0;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    gap: 0px;
    padding: 0;
    padding-top: 12px;
    padding-bottom: 94px;
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 15%;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      flex-direction: column;
      gap: 12px;
      padding: 48px;
    }

    .left-section {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: flex-end;
    }

    .right-section {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: flex-start;
    }

    .mobile-section {
      align-self: flex-start;

      @media (min-width: ${DEVICE_SIZE.tablet}) {
        display: none;
      }
    }

    .red-flower {
      position: absolute;
      top: -100px;
      left: -80px;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        left: -40px;
        width: 171px;
      }
    }

    .blue-flower {
      position: absolute;
      top: -100px;
      right: -80px;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        right: -40px;
        width: 171px;
      }
    }

    .profile-img {
      max-width: 306px;
    }

    .img-container {
      position: relative;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        justify-content: center;
        align-items: center;
      }
    }

    h1 {
      margin-bottom: 40px;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        margin-bottom: 24px;
      }
    }

    .information {
      width: fit-content;
      transform: translateX(50%);
      font-size: 18px;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        transform: translateX(20%);
      }

      .title {
        display: inline-flex;
        color: #5f5f5f;
        margin-bottom: 12px;
      }

      .subtitle {
        color: #193053;
      }
    }

    .info-container {
      @media (max-width: ${DEVICE_SIZE.tablet}) {
        display: none;
      }
    }
  }
`;

const Profile = () => {
  const putriImgAnimation = useAnimation();
  const putriInformationAnimation = useAnimation();

  const jodieImgAnimation = useAnimation();
  const jodieInformationAnimation = useAnimation();

  const [putriRef, isPutriInView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [jodieRef, isJodieInView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (isPutriInView) {
      putriImgAnimation.start({
        opacity: 1,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      });

      putriInformationAnimation.start({
        opacity: 1,
        translateY: '0px',
        transition: {
          ease: 'easeOut',
          duration: 1,
        },
      });
    }
  }, [isPutriInView, putriImgAnimation, putriInformationAnimation]);

  useEffect(() => {
    if (isJodieInView) {
      jodieImgAnimation.start({
        opacity: 1,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      });

      jodieInformationAnimation.start({
        opacity: 1,
        translateY: '0px',
        transition: {
          ease: 'easeOut',
          duration: 1,
        },
      });
    }
  }, [isJodieInView, jodieImgAnimation, jodieInformationAnimation]);

  return (
    <StyledProfile>
      <div className="profile" ref={putriRef}>
        <motion.div
          animate={putriInformationAnimation}
          initial={{
            opacity: 0,
            translateY: '40px',
          }}
          className="left-section info-container"
        >
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
        </motion.div>

        <motion.div
          animate={putriImgAnimation}
          initial={{
            opacity: 0,
          }}
          className="right-section img-container"
        >
          <img src="images/red-flower.png" alt="Red Flower" className="red-flower" />
          <img src="images/putri-profile-raw.png" alt="Profile Putri" className="profile-img" />
        </motion.div>

        <motion.div
          animate={putriInformationAnimation}
          initial={{
            opacity: 0,
          }}
          className="mobile-section"
        >
          <h1>Putri Nadhira</h1>

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
        </motion.div>
      </div>

      <div className="profile" ref={jodieRef}>
        <motion.div
          animate={jodieImgAnimation}
          initial={{
            opacity: 0,
          }}
          className="left-section img-container"
        >
          <img src="images/blue-flower.png" alt="Blue Flower" className="blue-flower" />
          <img src="images/jodie-profile-raw.png" alt="Profile Jodie" className="profile-img" />
        </motion.div>

        <motion.div
          animate={jodieInformationAnimation}
          initial={{
            opacity: 0,
            translateY: '40px',
          }}
          className="right-section info-container"
        >
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
        </motion.div>

        <motion.div
          animate={jodieInformationAnimation}
          initial={{
            opacity: 0,
          }}
          className="mobile-section"
        >
          <h1>Jodie Rizky</h1>

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
        </motion.div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
