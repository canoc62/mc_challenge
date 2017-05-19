import React, { Component } from 'react';
import Main from './Main';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;