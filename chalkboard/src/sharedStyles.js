import { css, keyframes } from 'styled-components';

const chalkUnderlineAnimation = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
`;

const chalkStickAnimation = keyframes`
  0% {
    left: 0;
  }

  99% {
    opacity: 1;
  }

  100% {
    left: 100%;
    opacity: 0;
  }
`;

export const chalkUnderlineStyle = css`
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: -21px;
    left: 0;

    width: 17px;
    height: 17px;
    background-image: url(${process.env.ASSET_PREFIX}/chalk-stick.svg);

    animation: 0.35s ${chalkStickAnimation} linear forwards;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.light};
    animation: 0.35s ${chalkUnderlineAnimation} linear forwards;
  }
`;

export const screenReaderOnly = css`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;
