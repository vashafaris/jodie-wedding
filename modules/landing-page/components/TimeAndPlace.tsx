import React from 'react';
import styled from 'styled-components';

import Button from '~/components/button/button';

const StyledTimeAndPlace = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 94px;

  h2 {
    font-size: 72px;
  }

  .styled-container {
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 15%;

    .title {
      display: flex;
      flex: 1;
      justify-content: flex-end;
    }

    .information {
      display: flex;
      flex: 1;
      flex-direction: column;
      font-size: 28px;

      .address {
        font-size: 18px;
      }
    }
  }
`;

const TimeAndPlace = () => {
  return (
    <StyledTimeAndPlace>
      <div className="styled-container">
        <div className="title">
          <h1>Waktu</h1>
        </div>

        <div className="information">
          <span>Minggu,</span>
          <span>18 Desember 2022</span>
          <br />
          <span>19.00 - 21.00 WIB</span>
          <br />

          <Button>Lihat Livestreaming</Button>
        </div>
      </div>

      <div className="styled-container">
        <div className="title">
          <h1>Tempat</h1>
        </div>

        <div className="information">
          <span>Kembali Ke Rumah Sarwono</span>

          <br />

          <span className="address">
            Jl. Raya Pasar Minggu KM 18.2
            <br />
            RT. 12 / RW.1 - Ragunan
            <br />
            Kec. Pasar Minggu - Jakarta Selatan
          </span>

          <br />

          <Button>Lihat Lokasi di Google Maps</Button>
        </div>
      </div>
    </StyledTimeAndPlace>
  );
};

export default TimeAndPlace;
