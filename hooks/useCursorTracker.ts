/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useCallback, useEffect, useRef, useState } from 'react';

interface UseMousePositionProps {
  includeTouch: boolean;
  containerRef: any;
}

const useCursorTracker = ({ includeTouch, containerRef }: UseMousePositionProps) => {
  const mousePosition = useRef({
    x: containerRef?.current?.offsetWidth / 2,
    y: containerRef?.current?.offsetHeight / 2,
  });

  const [transformPosition, setTransformPosition] = useState({
    x: containerRef?.current?.offsetWidth / 2,
    y: containerRef?.current?.offsetHeight / 2,
  });

  const calculateX = (containerX, mouseX) => {
    let width = containerX;

    if (width < 1920) {
      width = 1920;
    }

    const val = (width || 0) - mouseX * 4;

    if (val > 890) {
      return 890;
    }

    if (val < -1080) {
      return -1080;
    }

    return val;
  };

  const calculateY = (containerY, mouseY) => {
    let height = containerY;
    if (height < 1080) {
      height = 1080;
    }

    const val = (height || 0) - mouseY * 4;

    console.log(val);

    if (val > 830) {
      return 830;
    }

    if (val < -670) {
      return -670;
    }

    return val;
  };

  const ticker = useCallback(() => {
    if (!!containerRef.current.offsetWidth) {
      setTransformPosition({
        x: calculateX(containerRef.current.offsetWidth, mousePosition.current.x),
        y: calculateY(containerRef.current.offsetHeight, mousePosition.current.y),
      });

      // setTransformPosition({
      //   x: ((containerRef.current.offsetWidth / 4 || 0) - calculateX(mousePosition.current.x)) * 4,
      //   y: ((containerRef.current.offsetHeight / 8 || 0) - calculateY(mousePosition.current.y)) * 8,
      // });
    }
  }, [containerRef]);

  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      let x, y;

      if (ev.touches) {
        const touch = ev.touches[0];
        [x, y] = [touch.clientX, touch.clientY];
      } else {
        [x, y] = [ev.clientX, ev.clientY];
      }
      mousePosition.current = { x, y };
    };

    let interval: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      if (includeTouch) {
        window.addEventListener('touchmove', updateMousePosition);
      } else {
        window.addEventListener('mousemove', updateMousePosition);
      }

      interval = setInterval(() => {
        ticker();
      }, 33);
    }, 10);

    return () => {
      if (includeTouch) {
        window.removeEventListener('touchmove', updateMousePosition);
      } else {
        window.removeEventListener('mousemove', updateMousePosition);
      }

      clearTimeout(timeout);

      clearInterval(interval);
    };
  }, [includeTouch, ticker]);

  return transformPosition;
};

export default useCursorTracker;
