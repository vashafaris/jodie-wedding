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

  const ticker = useCallback(() => {
    if (!!containerRef.current.offsetWidth)
      setTransformPosition({
        x: ((containerRef.current.offsetWidth / 4 || 0) - mousePosition.current.x) * 3,
        y: ((containerRef.current.offsetHeight / 8 || 0) - mousePosition.current.y) * 3,
      });
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
      window.addEventListener('mousemove', updateMousePosition);

      if (includeTouch) {
        window.addEventListener('touchmove', updateMousePosition);
      }

      interval = setInterval(() => {
        ticker();
      }, 33);
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (includeTouch) {
        window.removeEventListener('touchmove', updateMousePosition);
      }

      clearTimeout(timeout);

      clearInterval(interval);
    };
  }, [includeTouch, ticker]);

  return transformPosition;
};

export default useCursorTracker;
