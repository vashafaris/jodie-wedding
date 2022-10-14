import React from 'react';
import styled from 'styled-components';

import Button from '~/components/button/button';

const StyledTimeAndPlace = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 72px;
  }
`;

const TimeAndPlace = () => {
  return (
    <StyledTimeAndPlace className="flex flex-col p-14">
      <div className="flex mb-14">
        <div className="flex flex-1 justify-center">
          <h1 className="leading-10">Waktu</h1>
        </div>

        <div className="flex flex-col flex-1 mt-2">
          <span className="text-2xl">Minggu,</span>
          <span className="text-2xl mb-14">18 Desember 2022</span>
          <span className="text-2xl mb-8">19.00 - 21.00 WIB</span>

          <Button>Lihat Livestreaming</Button>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-1 justify-center">
          <h1 className="leading-10">Tempat</h1>
        </div>

        <div className="flex flex-col flex-1 mt-2">
          <span className="text-2xl mb-5">Kembali Ke Rumah Sarwono</span>

          <span className="text-lg">Jl. Raya Pasar Minggu KM 18.2</span>
          <span className="text-lg">RT. 12 / RW.1 - Ragunan</span>
          <span className="text-lg mb-5">Kec. Pasar Minggu - Jakarta Selatan</span>

          <Button>Lihat Lokasi di Google Maps</Button>
        </div>
      </div>
    </StyledTimeAndPlace>
  );
};

export default TimeAndPlace;
