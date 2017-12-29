import React, { Component } from 'react';
import './App.css';

import { Elevation, Fab, Icon } from 'react-mdc-web';


const childStyle = {
	display: "inline-block",
	zoom: 1,
	verticalAlign: "top",
	height: "10vh",
	width: "10vh"
}

class ButtonBarButton extends Component {
	render() {
		return (
			<span style={{padding: "8px"}}>
		{/*TODO: if src img elif iconName icon*/}
				<Fab plain style={childStyle}><img className="App-icon" src= { this.props.src }/></Fab>
			</span>
			);
	}
}

export default ButtonBarButton;
