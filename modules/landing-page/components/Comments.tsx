import React from 'react';
import styled from 'styled-components';

import Button from '~/components/button/button';
import TextArea from '~/components/input/text-area';
import TextInput from '~/components/input/text-input';

const StyledComment = styled.section`
  padding: 24px 0;
  border-bottom: 1px solid black;

  &:last-of-type {
    border-bottom: none;
  }

  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    color: #828282;
    font-weight: bold;
  }

  p {
    color: #193053;
    font-weight: 400;
  }
`;

const StyledComments = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 100px 128px;
  gap: 100px;

  .input-comment-container {
    display: flex;
    flex: 1;

    .title-container {
      display: flex;
      flex: 1;
    }

    .comment-section {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 16px;

      button {
        align-self: flex-end;
      }
    }
  }

  .list-comment-container {
    display: flex;
    flex-direction: column;

    button {
      color: #091f40;
      font-weight: bold;
    }
  }
`;

const Comment = () => {
  return (
    <StyledComment>
      <span>Jodie Rizky</span>

      <p>Confokingratiz, mate. Semoga daft punk kembali tur. COPIUM</p>
    </StyledComment>
  );
};

const Comments = () => {
  return (
    <StyledComments>
      <div className="input-comment-container">
        <div className="title-container">
          <h1>
            message for the
            <br />
            Love Birds
          </h1>
        </div>

        <div className="comment-section">
          <TextInput placeholder="Nama..." />
          <TextArea placeholder="Pesan..." rows={4} />

          <Button>Kirim</Button>
        </div>
      </div>

      <div className="list-comment-container">
        <Comment />
        <Comment />
        <div>
          <button>MORE LOVELY MESSAGES</button>
        </div>
      </div>
    </StyledComments>
  );
};

export default Comments;
