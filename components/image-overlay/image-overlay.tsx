/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';

interface StyledImageOverlayProps {
  height: number;
  isInView: boolean;
  width: number;
}

const StyledImageOverlay = styled.div<StyledImageOverlayProps>`
  ${props => props.isInView && `animation: clipPathUp 2s cubic-bezier(0.76, 0, 0.24, 1) forwards;`}
  background: transparent;
  border: none;
  box-shadow: none;
  transition-delay: 0.4s;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  opacity: 0;

  position: relative;
  display: flex;

  @keyframes clipPathUp {
    0% {
      -webkit-clip-path: inset(100% 0 0 0);
      clip-path: inset(100% 0 0 0);
    }
    100% {
      -webkit-clip-path: inset(0 0 0 0);
      clip-path: inset(0 0 0 0);
      opacity: 1;
    }
  }

  .outer-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .inner-container {
    position: relative;
  }

  img {
    ${props =>
      props.isInView && `animation: zoomOut 3s cubic-bezier(0.76, 0, 0.24, 1) -0.25s forwards;`}
    object-fit: cover;
    vertical-align: middle;
    height: 100% !important;
    width: 100% !important;
    opacity: 0;

    @keyframes zoomOut {
      0% {
        transform: scale(1.4);
        opacity: 0;
      }

      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`;

interface ImageOverlayProps {
  alt: string;
  className?: string;
  height: number;
  isInView?: boolean;
  src: string;
  width: number;
}

const ImageOverlay = ({
  alt,
  className,
  height,
  isInView = true,
  src,
  width,
}: ImageOverlayProps) => {
  return (
    <StyledImageOverlay className={className} height={height} isInView={isInView} width={width}>
      <div className="outer-container">
        <div className="inner-container">
          <img alt={alt} src={src} />
        </div>
      </div>
    </StyledImageOverlay>
  );
};

export default ImageOverlay;
