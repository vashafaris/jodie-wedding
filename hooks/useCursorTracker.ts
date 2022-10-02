/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useRef, useState } from 'react';

interface UseMousePositionProps {
  includeTouch: boolean;
  containerRef: any;
}

const useCursorTracker = ({ includeTouch, containerRef }: UseMousePositionProps) => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mousePosition = useRef({
    x: 0,
    y: 0,
  });

  const [transformPosition, setTransformPosition] = useState({
    x: 0,
    y: 0,
  });

  const ticker = () => {
    console.log(containerRef.current.offsetWidth);
    if (!!containerRef.current.offsetWidth)
      setTransformPosition({
        x: ((containerRef.current.offsetWidth / 4 || 0) - mousePosition.current.x) * 0.3,
        y: ((containerRef.current.offsetHeight / 8 || 0) - mousePosition.current.y) * 0.3,
      });
  };

  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      let x, y;

      if (ev.touches) {
        const touch = ev.touches[0];
        [x, y] = [touch.clientX, touch.clientY];
      } else {
        [x, y] = [ev.clientX, ev.clientY];
      }
      // setMousePosition({ x, y });
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
  }, [includeTouch]);

  return transformPosition;
};

export default useCursorTracker;

// const useCursorTracker = (containerRef: any) => {
//   const mouseX = useRef(0);
//   const mouseY = useRef(0);
//   const transformXTo = useRef(0);
//   const transformYTo = useRef(0);
//   const [transformVal, setTransformVal] = useState({
//     x: 0,
//     y: 0,
//   });

//   const update = e => {
//     mouseX.current = e?.x;
//     mouseY.current = e?.y;
//   };

//   const ticker = e => {
//     const decay = -0.2;
//     // if (transformXTo > containerRef?.current?.offsetWidth / 2) {
//     //   return;
//     // }

//     const calculateX = mouseX.current * decay;
//     const calculateY = mouseY.current * decay;

//     // setTransformXTo(calculateX);
//     // setTransformYTo(calculateY);
//     transformXTo.current = calculateX;
//     transformYTo.current = calculateY;
//   };

//   useEffect(() => {
//     let intervalTicker: NodeJS.Timer;

//     if (containerRef) {
//       intervalTicker = setInterval(ticker, 33);
//     }

//     return () => {
//       clearInterval(intervalTicker);
//     };
//   }, [containerRef]);

//   useEffect(() => {
//     window.addEventListener('mousemove', update);

//     return () => {
//       window.removeEventListener('mousemove', update);
//     };
//   }, []);

//   useEffect(() => {
//     setTransformVal({
//       x: transformXTo,
//       y: transformYTo,
//     });
//   }, [transformXTo]);

//   return {
//     transformXTo: transformXTo?.current,
//     transformYTo: transformYTo?.current,
//     transformVal,
//   };
// };

// export default useCursorTracker;

// var $container = $('#container');
// var contWidth = $container.width();
// var $point = $('.point');
// var delay = 100;
// var decay = 0.1;

// var intervalId;
// var mouseX, mouseY;

// //this function is called 30 times per second.
// function ticker() {
//   $point.each(function () {
//     if (mouseX > contWidth - $point.width()) {
//       mouseX = contWidth - $point.width(); //instead of returning, just set the value to the max
//     }
//     var xp = $(this).position().left;
//     xp += parseFloat((mouseX - xp) * decay); //using a decay variable for easier tweaking
//     $(this).css({
//       left: xp,
//     });
//   });
// }

// //this interval calls the ticker function every 33 milliseconds
// intervalId = setInterval(ticker, 33); //33 millisecond is about 30 fps  (16 would be roughly 60fps)

// $container.mousemove(function (e) {
//   mouseX = e.offsetX; //store the current mouse position so we can reference it during the interval
//   mouseY = e.offsetY;
// });
