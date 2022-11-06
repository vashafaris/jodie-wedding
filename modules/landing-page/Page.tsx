import useDeviceDetect from 'hooks/useDeviceDetect';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LoadingScreen from '~/components/loading-screen';

import Comments from '~/modules/landing-page/components/Comments';
import Farewell from '~/modules/landing-page/components/Farewell';
import HealthProtocol from '~/modules/landing-page/components/HealthProtocol';
import Hero from '~/modules/landing-page/components/Hero';
import OutfitTheme from '~/modules/landing-page/components/OutfitTheme';
import Profile from '~/modules/landing-page/components/Profile';
import Quotes from '~/modules/landing-page/components/Quotes';
import Rsvp from '~/modules/landing-page/components/Rsvp';
import TimeAndPlace from '~/modules/landing-page/components/TimeAndPlace';
import HeroMobile from './components/HeroMobile';

const StyledMain = styled.main`
  position: relative;
`;

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { isMobile } = useDeviceDetect();

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener('load', handleLoading);

    return () => window.removeEventListener('load', handleLoading);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <StyledMain>
      {isMobile ? <HeroMobile /> : <Hero />}
      <Quotes />
      <Profile />
      <TimeAndPlace />
      <OutfitTheme />
      <HealthProtocol />
      <Rsvp />
      <Comments />
      <Farewell />
    </StyledMain>
  );
};

export default LandingPage;
