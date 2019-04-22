import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import { purple, elevation, fixed, serif } from '../utilities';

// className - comes as props from styled-components
const Header = ({className}) => {
  return (
    <header className={className}>
        <img src={logo} className="logo" alt="logo"/>
    </header>
  )
}

const StyledHeader = styled(Header)`
    background: ${purple};
    width: 100%;
    padding: 10px 5%;
    ${serif}
    ${fixed()};
    ${elevation[1]};
    .logo {
        width: 60px;
    }
`;

export default StyledHeader
