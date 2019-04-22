import { css } from 'styled-components';

// Css helper to use for props and mixins
// export const fixedTop = css`
//   position: fixed;
//   top: ${({top}) => top + 'px'};
//   left: 0;
// `;

//Helpers function
export const fixed = ({x = 0, y = 0} = {}) => {
    return css`
        position: fixed;
        top: ${x};
        left: ${y};
    `
};

export const absolute = ({x = 0, y = 0, yProp = 'top', xProp = 'left'} = {}) => {
    return css`
        position: absolute;
        ${yProp}: ${x};
        ${xProp}: ${y};
    `;
};