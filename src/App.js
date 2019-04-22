import React, { Component } from 'react';
import GlobalStyle from './Global';
import Header from './layouts/Header';
import { Button, CancelButton } from './elements';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <GlobalStyle />
          <Button size="small">Say Hello</Button>
          <CancelButton size="small">Do not say Hello</CancelButton>
      </div>
    );
  }
}

export default App;
