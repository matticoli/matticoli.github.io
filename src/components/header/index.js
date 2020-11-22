import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Trapezoid from '../trapezoid';
import style from './style.css';
import githubIcon from '../../assets/icons/icons8-github-100.png';
import linkedinIcon from '../../assets/icons/icons8-linkedin-circled-100.png';
import resumeIcon from '../../assets/icons/icons8-cv-100.png';

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

const Header = () => (
	<div>
		<header className={"header"}>
			<div className={"headerLine"} />
			<h1 className={"mainTitle"}>Mikel Matticoli</h1>
			<div style={{width: '100%', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				<a href="https://github.com/matticoli" className={"headerButton"}>
					<img className={"headerButtonImage"}src={githubIcon} />GitHub
				</a>
				<a href="https://linkedin.com/in/matticoli" className={"headerButton"}>
					<img className={"headerButtonImage"}src={linkedinIcon} />LinkedIn
				</a>
				<a href="/resume" className={"headerButton"}>
					<img className={"headerButtonImage"}src={resumeIcon} />Resume
				</a>
			</div>
			<Trapezoid width={vw > 1000 ? 80 : 100} />
			<div style={{
					position: "relative",
					zIndex: -100,
					marginTop: vw > 1000 ? -40 : -20,
				}}>
				<div className={"headerRectBorder"} />
				<Trapezoid blue width={vw > 1000 ? 80 : 100} />
			</div>
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				<div style={{display: 'block', width: '200px'}} />
				<div style={{display: 'block', width: '200px'}}>
					<Trapezoid width={100}  blue={true}>
						About
					</Trapezoid>
				</div>
				<div style={{display: 'block', width: '30px'}} />
				<div style={{display: 'block', width: '200px'}}>
					<Trapezoid width={100} blue={true} >
						Projects
					</Trapezoid>
				</div>
				<div style={{display: 'block', width: '30px'}} />
				<div style={{display: 'block', width: '200px'}}>
					<Trapezoid width={100}  blue={true} >
						Contact
					</Trapezoid>
				</div>
				<div style={{display: 'block', width: '200px'}} />
			</div>
		</header>
		<nav>
			{/* <Link activeClassName={style.active} href="/">Projects</Link>
			<Link activeClassName={style.active} href="/about">About</Link>
			<Link activeClassName={style.active} href="/contact">Contact</Link> */}
		</nav>
	</div>
);

export default Header;
