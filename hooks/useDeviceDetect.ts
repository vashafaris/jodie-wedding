import { useEffect, useMemo, useState } from 'react';

const useDeviceDetect = () => {
  const [width, setWidth] = useState<number>(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const isMobile = useMemo(() => width <= 768, [width]);

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return {
    isMobile,
  };
};

export default useDeviceDetect;
