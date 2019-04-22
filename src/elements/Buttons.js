import styled from 'styled-components';
import { teal, elevation } from '../utilities';

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  border: none;
  background: ${teal};
  ${elevation[1]};
  &:hover {
      ${elevation[2]}
  }
  ${({size}) => {
      if(size === 'small'){
          return `
            font-size: 1rem;
            padding: 3px 10px;
          `
      }
  }}
`;

//extend button and overwrite just nedeed property
export const CancelButton = styled(Button)`
  background: tomato;
`;