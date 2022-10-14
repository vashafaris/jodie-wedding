import type { NextPage } from 'next';
import styled from 'styled-components';

import Farewell from '~/modules/landing-page/components/Farewell';
import Hero from '~/modules/landing-page/components/Hero';
import OutfitTheme from '~/modules/landing-page/components/OutfitTheme';
import Profile from '~/modules/landing-page/components/Profile';
import Quotes from '~/modules/landing-page/components/Quotes';
import Rsvp from '~/modules/landing-page/components/Rsvp';
import TimeAndPlace from '~/modules/landing-page/components/TimeAndPlace';

const StyledMain = styled.main`
  position: relative;
`;

const Home: NextPage = () => {
  return (
    <StyledMain>
      <Hero />

      <Quotes />

      <Profile />

      <TimeAndPlace />

      <OutfitTheme />

      <Rsvp />

      <Farewell />
    </StyledMain>
  );
};

export default Home;
