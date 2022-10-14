import { DEVICE_SIZE } from 'constants/device-size';
import React from 'react';
import styled from 'styled-components';

const StyledProfile = styled.section`
  min-height: 100vh;
  display: flex;
  gap: 120px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 94px 0;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    gap: 0px;
    padding: 0;
    padding-top: 12px;
    padding-bottom: 94px;
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 15%;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      flex-direction: column;
      gap: 12px;
      padding: 48px;
    }

    .left-section {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: flex-end;
    }

    .right-section {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: flex-start;
    }

    .mobile-section {
      align-self: flex-start;

      @media (min-width: ${DEVICE_SIZE.tablet}) {
        display: none;
      }
    }

    .red-flower {
      position: absolute;
      top: -100px;
      left: -80px;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        left: -40px;
        width: 171px;
      }
    }

    .blue-flower {
      position: absolute;
      top: -100px;
      right: -80px;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        right: -40px;
        width: 171px;
      }
    }

    .profile-img {
      max-width: 306px;
    }

    .img-container {
      position: relative;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        justify-content: center;
        align-items: center;
      }
    }

    h1 {
      margin-bottom: 40px;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        margin-bottom: 24px;
      }
    }

    .information {
      width: fit-content;
      transform: translateX(50%);
      font-size: 18px;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        transform: translateX(20%);
      }

      .title {
        display: inline-flex;
        color: #5f5f5f;
        margin-bottom: 12px;
      }

      .subtitle {
        color: #193053;
      }
    }

    .info-container {
      @media (max-width: ${DEVICE_SIZE.tablet}) {
        display: none;
      }
    }
  }
`;

const Profile = () => {
  return (
    <StyledProfile>
      <div className="profile">
        <div className="left-section info-container">
          <h1>
            Putri
            <br />
            Nadhira
          </h1>

          <div className="information">
            <span className="title">Putri pertama dari</span>
            <br />

            <span className="subtitle">
              Bapak Jusuf Sanggarabudi
              <br />
              &
              <br />
              Ibu Hefi Hifiasih Hasanah
            </span>
          </div>
        </div>

        <div className="right-section img-container">
          <img src="images/red-flower.png" alt="Red Flower" className="red-flower" />
          <img src="images/putri-profile-raw.png" alt="Profile Putri" className="profile-img" />
        </div>

        <div className="mobile-section">
          <h1>Putri Nadhira</h1>

          <div className="information">
            <span className="title">Putri pertama dari</span>
            <br />

            <span className="subtitle">
              Bapak Jusuf Sanggarabudi
              <br />
              &
              <br />
              Ibu Hefi Hifiasih Hasanah
            </span>
          </div>
        </div>
      </div>

      <div className="profile">
        <div className="left-section img-container">
          <img src="images/blue-flower.png" alt="Blue Flower" className="blue-flower" />
          <img src="images/jodie-profile-raw.png" alt="Profile Jodie" className="profile-img" />
        </div>

        <div className="right-section info-container">
          <h1>
            Jodie
            <br />
            Rizky
          </h1>

          <div className="information">
            <span className="title">Putra pertama dari</span>
            <br />

            <span className="subtitle">
              Bapak Jimmy D. Hidayat
              <br />
              &
              <br />
              Ibu Dian Indrijani
            </span>
          </div>
        </div>

        <div className="mobile-section">
          <h1>Jodie Rizky</h1>

          <div className="information">
            <span className="title">Putra pertama dari</span>
            <br />

            <span className="subtitle">
              Bapak Jimmy D. Hidayat
              <br />
              &
              <br />
              Ibu Dian Indrijani
            </span>
          </div>
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
