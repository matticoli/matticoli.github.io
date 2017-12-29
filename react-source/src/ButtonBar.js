import React, { Component } from 'react';
import './App.css';

class ButtonBar extends Component {
	render() {
		return (
				<div style={ this.props.style} >
					{ this.props.children }
				</div>
			);
	}
}


export default ButtonBar;
