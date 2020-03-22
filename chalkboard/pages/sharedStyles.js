import { css } from 'styled-components';

export const chalkUnderlineStyle = css`
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 4px;

    ${({ theme }) =>
      theme.isChalkboardTheme &&
      css`
        background-image: url(${process.env.ASSET_PREFIX}/chalk-line.png);
        background-repeat: no-repeat;
        background-size: 100%;
      `}

    ${({ theme }) =>
      !theme.isChalkboardTheme &&
      css`
        height: 2px;
        background-color: ${theme.colors.light};
      `}
  }
`;

export const screenReaderOnly = css`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;
