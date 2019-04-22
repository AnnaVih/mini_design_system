import { css } from 'styled-components';

// Css helper to use for props and mixins
export const fixedTop = css`
  position: fixed;
  top: ${({top}) => top + 'px'};
  left: 0;
`;