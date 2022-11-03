/* eslint-disable @typescript-eslint/no-floating-promises */
import clsx from 'clsx';
import { DEVICE_SIZE } from 'constants/device-size';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

interface StyledQuotesProps {
  isInView: boolean;
}

const StyledQuotes = styled.section<StyledQuotesProps>`
  ${props => props.isInView && `animation: zoomin 1.5s ease-out forwards;`}
  position: relative;
  height: 100vh;
  max-height: 600px;
  background-image: url('images/bg-2.png');
  background-size: cover;
  overflow: hidden;
  opacity: 0;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    background-image: url('images/mobile/bg-2.png');
    background-size: cover;
    background-position: center bottom;
    padding: 80px 44px;
  }

  .quotes {
    position: absolute;
    top: 20%;
    left: 60%;
    width: 20%;
    letter-spacing: 0.03em;
    line-height: 150%;

    p {
      font-size: 18px;
      margin-bottom: 12px;
      font-weight: 450;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        letter-spacing: 0.03em;
      }
    }

    span {
      font-size: 36px;
      font-family: Doppelganger;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        font-size: 48px;
      }
    }

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      display: flex;
      flex-direction: column;
      position: relative;
      top: unset;
      width: unset;
      left: unset;
    }
  }

  .animation {
    opacity: 1;
    background: red !important;
    animation: zoomin 1.5s ease-out;
  }

  @keyframes zoomin {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Quotes = () => {
  const quotesAnimation = useAnimation();

  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (isInView) {
      quotesAnimation.start({
        opacity: 1,
        translateY: '0px',
        transition: {
          ease: 'easeOut',
          duration: 1.5,
          delay: 1,
        },
      });
    }
  }, [isInView, quotesAnimation]);

  return (
    <StyledQuotes
      ref={ref}
      className={clsx({
        animation: isInView,
      })}
      isInView={isInView}
    >
      <motion.div
        animate={quotesAnimation}
        initial={{
          opacity: 0,
          translateY: '20px',
        }}
        className="quotes"
      >
        <p>
          And one of His signs is that He created for you spouses from among yourselves so that you
          may find comfort in them. And He has placed between you compassion and mercy. Surely in
          these are signs for people who reflect.
        </p>

        <br />

        <span>QS Ar-Rum 21</span>
      </motion.div>
    </StyledQuotes>
  );
};

export default Quotes;
