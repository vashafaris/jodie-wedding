import React from 'react';
import styled from 'styled-components';

const StyledProfile = styled.section`
  min-height: 100vh;
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .profile {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h1 {
      font-size: 72px;
      line-height: 80px;
      margin-bottom: 40px;
    }

    .information {
      transform: translateX(50%);
      font-size: 18px;

      .title {
        display: inline-flex;
        color: #5f5f5f;
        margin-bottom: 12px;
      }

      .subtitle {
        color: #193053;
      }
    }
  }
`;

const Profile = () => {
  return (
    <StyledProfile>
      <div className="profile">
        <div>
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

        <div>
          <img src="images/putri-profile.png" alt="Profile Putri" />
        </div>
      </div>

      <div className="profile">
        <div>
          <img src="images/jodie-profile.png" alt="Profile Jodie" />
        </div>

        <div>
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
      </div>
    </StyledProfile>
  );
};

export default Profile;
