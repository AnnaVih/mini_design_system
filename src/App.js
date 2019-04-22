import React, { Component } from 'react';
import styled, {css} from 'styled-components';

import logo from './logo.svg';

import GlobalStyle from './Global';

const size = {
  small: 400,
  med: 960,
  large: 1140
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media(min-width: ${size[label]}px){
      ${css(...args)}
    }
  `
  return acc;
}, {});

console.log(above)

const Heading = styled.h1`
  font-size: 2rem;
  ${above.med`
    color: blue; 
  `}
`;
const white = 'white';

const Button = styled.button`
  background: indigo;
  padding: 5px 10px;
  border-radius: 4px;
  color: ${white};
  border: none;
  background: 'indigo';
`;

// Css helper to use for props and mixins
const fixedTop = css`
  position: fixed;
  top: ${({top}) => top + 'px'};
  left: 0;
`;

//extend button and overwrite just nedeed property
const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop};
`

const AppWrapper = styled.div`
  ${Button}{
    margin: 2px;
  }
`;



const Fake = ({className}) => (
  <div className={className}>
    <h3>Fake</h3>
  </div>
)

////Style normal components
const DoubleFake = styled(Fake)`
  h3 {
    color: red;
  }
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Heading>
            Edit <code>src/App.js</code> and save to reload.
          </Heading>
          <DoubleFake/>
          <Button>Save</Button>
          <CancelButton top="100" type="cancel">Cancel</CancelButton>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <GlobalStyle/>
      </AppWrapper>
    );
  }
}

export default App;
