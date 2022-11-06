/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useCallback, useEffect, useRef, useState } from 'react';

interface UseMousePositionProps {
  containerRef: any;
}

const useTouchTracker = ({ containerRef }: UseMousePositionProps) => {
  const mousePosition = useRef({
    x: containerRef?.current?.offsetWidth / 2,
    y: containerRef?.current?.offsetHeight / 2,
  });

  const [transformPosition, setTransformPosition] = useState({
    x: containerRef?.current?.offsetWidth / 2,
    y: containerRef?.current?.offsetHeight / 2,
  });

  const tickerMobile = useCallback(() => {
    if (!!containerRef.current.offsetWidth) {
      setTransformPosition(() => ({
        x: mousePosition.current.x,
        y: mousePosition.current.y,
      }));
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

    window.addEventListener('touchmove', updateMousePosition);

    const interval = setInterval(() => {
      tickerMobile();
    }, 33);

    return () => {
      window.removeEventListener('touchmove', updateMousePosition);

      clearInterval(interval);
    };
  }, [tickerMobile]);

  return transformPosition;
};

export default useTouchTracker;
