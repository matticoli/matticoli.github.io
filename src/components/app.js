import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends React.Component {

	render() {
		return (
			<div id="app">
				{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
				<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js" /> */}
				<Header />
				<Router onChange={this.handleRoute}>
					<Switch>
						<Route path="/">
							<Home />
						</Route>
						{/* <Home path="/projects/" />
						<Profile path="/about/" user="me" />
						<Profile path="/contact/" user="contact" /> */}
					</Switch>
				</Router>
			</div>
		);
	}
}
