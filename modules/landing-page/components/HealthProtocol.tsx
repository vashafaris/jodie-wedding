import { DEVICE_SIZE } from 'constants/device-size';
import React from 'react';
import styled from 'styled-components';

const StyledHealthProtocol = styled.section`
  min-height: 600px;
  display: flex;
  align-items: start;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .title-container {
    display: flex;
    flex: 1;
    justify-content: center;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      margin-bottom: 24px;
    }
  }

  .information-container {
    display: flex;
    flex: 1;
    flex-direction column;

    .protocol-row-container {
      display: grid;
      grid-template-columns: auto auto;
      gap: 24px;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        grid-template-columns: auto;
      }

      span {
        font-size: 18px;
      }
    }
  }
`;

const HealthProtocol = () => {
  return (
    <StyledHealthProtocol>
      <div className="title-container">
        <h1>
          Protokol
          <br />
          Kesehatan
        </h1>
      </div>

      <div className="information-container">
        <div className="protocol-row-container">
          <div>
            <span>1. Gunakan masker</span>
            <img src="images/protocol-masker.png" alt="Please wear masker" />
          </div>

          <div>
            <span>2. Jaga jarak</span>
            <img
              src="images/protocol-social-distancing.png"
              alt="Dont forget to social distancing"
            />
          </div>

          <div>
            <span>
              3. Hindari berjabat tangan
              <br />
              dan gunakan salam isyarat
            </span>
            <img src="images/protocol-namaste.png" alt="Namaste" />
          </div>

          <div>
            <span>4. Cuci tangan secara berkala</span>
            <img src="images/protocol-hand-wash.png" alt="Wash your hand" />
          </div>
        </div>
      </div>
    </StyledHealthProtocol>
  );
};

export default HealthProtocol;
