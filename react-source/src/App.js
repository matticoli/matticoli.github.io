import React, { Component } from 'react';
import './App.css';
import 'material-components-web/dist/material-components-web.min.css';

import AboutPage from './AboutPage.js';

class App extends Component {

  componentWillMount() {
    this.setState(this.getInitState());
  }

  getInitState() {
    return {};
  }

  render() {
    return (
      <div className="App">
        <AboutPage />
      </div>
    );
  }
}

export default App;
