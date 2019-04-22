import styled from 'styled-components';

import { fixedTop } from '../utilities';

export const Button = styled.button`
  background: indigo;
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  border: none;
  background: 'indigo';
`;

//extend button and overwrite just nedeed property
export const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop};
`;