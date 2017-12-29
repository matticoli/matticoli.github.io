import React, { Component } from 'react';

import ButtonBar from './ButtonBar.js';
import ButtonBarButton from './ButtonBarButton.js';

import { Elevation, Fab, Icon } from 'react-mdc-web';
import githubIcon from './images/github.png';
import resumeIcon from './images/resume.png';
import header from './images/header.jpg';
import $ from 'jquery';

const headerStyle = {
  backgroundImage: "url(" + header + ")",
  backgroundPosition: "center",
  backgroundSize: "1000px 1000px"
},
buttonBarStyle = {
  position: "fixed",
  bottom: "10vh",
  textAlign: "center"
}

class AboutPage extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
      <div className="About-content" style={ headerStyle }>
        <Elevation transition z={4}>
          <h4>Welcome</h4>
        </Elevation>
      </div>
        <ButtonBar style={ buttonBarStyle } >
          <ButtonBarButton src= { githubIcon } />
          <ButtonBarButton src= { resumeIcon } />
        </ButtonBar>
      </div>
    );
  }
}

export default AboutPage;
