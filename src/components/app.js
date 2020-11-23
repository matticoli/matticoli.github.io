import React from 'react';
import {
    BrowserRouter,
    Switch,
	Route,
	browserHistory
} from "react-router-dom";

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import About from '../routes/about';

export default class App extends React.Component {

	render() {
		return (
			<div id="app">
				{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
				<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js" /> */}
				<BrowserRouter onChange={this.handleRoute} history={browserHistory}>
					<Header />
					<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/projects">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/contact">
						<div>

					<form className={"contactForm"}
						action="https://formspree.io/f/mayldwjn"
						method="POST"
						>
							<h2>Questions? Suggestions? Job Offer?</h2>
							<h3>Feel free to reach out!</h3>

							<label>
								Name:
							</label>
							<input type="text" name="name" />

							<label>
								Email:
							</label>
							<input type="text" name="_replyto" />
							<label>
								Message:
							</label>
							<textarea name="message" />
							<button type="submit">Submit</button>
							</form>
						</div>

					</Route>
						{/* <Home path="/projects/" />
						<Profile path="/about/" user="me" />
						<Profile path="/contact/" user="contact" /> */}
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
