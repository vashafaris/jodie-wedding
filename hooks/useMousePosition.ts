/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface UseMousePositionProps {
  includeTouch: boolean;
}

const useMousePosition = ({ includeTouch }: UseMousePositionProps) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const updateMousePosition = (ev: any) => {
      let x, y;

      if (ev.touches) {
        const touch = ev.touches[0];
        [x, y] = [touch.clientX, touch.clientY];
      } else {
        [x, y] = [ev.clientX, ev.clientY];
      }
      setMousePosition({ x, y });
    };

    const timeout = setTimeout(() => {
      window.addEventListener('mousemove', updateMousePosition);

      if (includeTouch) {
        window.addEventListener('touchmove', updateMousePosition);
      }
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (includeTouch) {
        window.removeEventListener('touchmove', updateMousePosition);
      }

      clearTimeout(timeout);
    };
  }, [includeTouch]);

  return mousePosition;
};

export default useMousePosition;
