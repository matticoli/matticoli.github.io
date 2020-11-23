import React, { useState, useEffect } from 'react';

import style from './style';
import Deck from '../../components/deck';
import Card from '../../components/card';
import KarenCover from '../../assets/call-of-karen-cover.png';
import PortfolioCover from '../../assets/portfolio-cover.png';
import JHDBCover from '../../assets/jhdb-cover.png';

const Home = () => {
	return (
	<div className={"home"}>
		<div className={"tagline"}>
			<h1>Featured Projects</h1>
		</div>
		<br />
		<Deck>
			<Card image={KarenCover} action={"https://callofkaren.com"}>
				<p>
					The Call of Karen is a PC Comedy/Simulation game where you play as a stereotypical 1950's suburban housewife whose home is being invaded by Cthulhu.  (100k+ Copies on Steam!)
				</p>
				<ul>
					<li>UE4 C++/Blueprint</li>
					<li>Tech Art (Implementation)</li>
					<li>Web Design/Marketing</li>
				</ul>
			</Card>
			<Card image={JHDBCover} action={"https://global.jazzhistorydatabase.com"}>
				<br />
				<p>
					The Contributor Portal empowers jazz musicians, archivists and educators from all around the world to effortlessly contribute to the JHDB's online museum without technical barriers   
				</p>
				<ul>
					<li>Lead Developer/Designer</li>
					<li>SRE/Systems Engineer</li>
					<li>Instructional/Customer Support</li>
				</ul>
			</Card>
			<Card image={PortfolioCover}>
				<br />
				<p>
				Built from scratch using React and plain CSS, this website was a fun exercise in designing something a bit more unique. I'll admit I spent a little too long making responsive hexagons in pure CSS...
				</p>
				<ul>
					<li>Web Design</li>
					<li>ReactJS + Parcel</li>
					<li>CSS Triangles</li>
				</ul>
			</Card>

		</Deck>
		<div className={"tagline"}>
			<h1>Miscellaneous</h1>
		</div>
		<br />
		<Deck>
			<Card image={null} action={"https://drmgames.github.io/mirrors/game.html"}>
				<br />
				<h3>Mirrors</h3>
				<p>
					Mirrors is a puzzle game built in Perlenspiel, a minimalist web-based game engine
				</p>
			</Card>
			<Card image={null} action={"https://digitalcommons.wpi.edu/do/search/?q=Mikel Matticoli&start=0"}>
				<br />
				<h3>Academic Work</h3>
				<p>
					Published papers on The Call of Karen, the JHDB Global Contributor Projec, and contributions to other academic work at WPI
				</p>
			</Card>
			<Card image={null} action={"https://github.com/matticoli/paracord"}>
				<br />
				<h3>In Progress: Paracord</h3>
				<p>
					A collaborative tool for building visual novels. The simplicity of Twine with the portability of Google Docs
				</p>
			</Card>
			<Card image={null} action={"https://github.com/buriedvoices"}>
				<br />
				<h3>In Progress: Buried Voices</h3>
				<p>
				Buried Voices is a narrative-driven exploration game where you must investigate an ancient library overtaken by invaders to discover the erased history about its previous inhabitants.
				</p>
			</Card>
			<Card image={null} action={"https://github.com/WPI-SGA-Financials/treasury-web"}>
				<br />
				<h3>In Progress: WPI Treasury</h3>
				<p>
				A web application to promote financial transparency in WPI's student government by making financial data available to the WPI community
				</p>
			</Card>

		</Deck>
	</div>
)};

export default Home;
