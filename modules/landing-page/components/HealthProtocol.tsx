import React from 'react';
import styled from 'styled-components';

const StyledHealthProtocol = styled.section`
  min-height: 600px;
  display: flex;
  align-items: start;

  .title-container {
    display: flex;
    flex: 1;
    justify-content: center;

    h1 {
      font-size: 72px;
    }
  }

  .information-container {
    display: flex;
    flex: 1;
    flex-direction column;

    .protocol-row-container {
      display: flex;
      gap: 24px;

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
        </div>

        <div className="protocol-row-container">
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
