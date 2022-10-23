import { DEVICE_SIZE } from 'constants/device-size';
import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '~/components/button/button';
import TextArea from '~/components/input/text-area';
import TextInput from '~/components/input/text-input';
import LoadingSpinner from '~/components/loading-spinner';
import fetch from '~/lib/fetch';

import { useGetComments } from '../hooks/get-comments';

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

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 100px 24px;
    gap: 24px;
  }

  .input-comment-container {
    display: flex;
    flex: 1;
    gap: 24px;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      flex-direction: column;
      text-align: center;
    }

    .title-container {
      display: flex;
      flex: 1;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        align-self: center;
      }
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

    .comment-loading-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .load-more-container {
      margin-top: 24px;
      align-self: center;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      color: #091f40;
      font-weight: bold;
    }
  }
`;

interface CommentProps {
  name: string;
  comment: string;
}

const Comment = ({ name, comment }: CommentProps) => {
  return (
    <StyledComment>
      <span>{name}</span>

      <p>{comment}</p>
    </StyledComment>
  );
};

const Comments = () => {
  const { comments, count, isLoading, limit, fetchMore, refetch } = useGetComments();

  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false);

  const handlePostComment = async () => {
    if (!message) {
      return;
    }

    setIsSubmitLoading(true);

    await fetch('api/post-comment', {
      method: 'POST',
      body: JSON.stringify({
        name: name ? name : 'Anonymous',
        comment: message,
      }),
    });

    setName('');
    setMessage('');

    await refetch();
    setIsSubmitLoading(false);
  };

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
          <TextInput
            placeholder="Nama..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            value={name}
          />
          <TextArea
            placeholder="Pesan..."
            rows={4}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            value={message}
          />

          <Button isLoading={isSubmitLoading} onClick={handlePostComment}>
            Kirim
          </Button>
        </div>
      </div>

      <div className="list-comment-container">
        {isLoading && comments.length === 0 ? (
          <div className="comment-loading-container">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {comments.map(comment => (
              <Comment key={comment._id} name={comment.name} comment={comment.comment} />
            ))}
            {limit < count ? (
              <div>
                {isLoading ? (
                  <div className="comment-loading-container">
                    <LoadingSpinner />
                  </div>
                ) : (
                  <div className="load-more-container">
                    <button
                      onClick={async () => {
                        await fetchMore();
                      }}
                    >
                      MORE LOVELY MESSAGES
                    </button>
                  </div>
                )}
              </div>
            ) : null}
          </>
        )}
      </div>
    </StyledComments>
  );
};

export default Comments;
