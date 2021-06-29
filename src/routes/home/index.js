import React, { useState, useEffect } from 'react';

import style from './style';
import Deck from '../../components/deck';
import Card from '../../components/card';
import KarenCover from '../../assets/call-of-karen-cover.png';
import PortfolioCover from '../../assets/portfolio-cover.png';
import JHDBCover from '../../assets/jhdb-cover.png';
import BVGCover from '../../assets/bvg-cover.png';
import MirrorsCover from '../../assets/mirrors-cover.png';
import AcademicCover from '../../assets/academic-cover.png';
import TreasuryCover from '../../assets/treasury-cover.png';
import InprogressCover from '../../assets/inprogress-cover.png';

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
			<Card image={BVGCover} action={"https://buriedvoices.github.io"}>
				<br />
				<p>
				Buried voices is a 3D puzzle-platformer game for PC that explores the issues of historical revisionism and cultural erasure through the lens of Khura's journey to discover the truth about her heritage
				</p>
				<ul>
					<li>Unity 3D (C#)</li>
					<li>Tech Art (Tools/Implementation)</li>
					<li>Web Design/Marketing</li>
				</ul>
			</Card>

		</Deck>
		<div className={"tagline"}>
			<h1>Miscellaneous</h1>
		</div>
		<br />
		<Deck>
			<Card image={MirrorsCover} action={"https://drmgames.github.io/mirrors/game.html"}>
				<br />
				<h3>Mirrors</h3>
				<p>
					Mirrors is a 2D puzzle game built in Perlenspiel, a minimalist web-based game engine
				</p>
			</Card>
			<Card image={AcademicCover} action={"https://digital.wpi.edu/catalog?utf8=%E2%9C%93&search_field=all_fields&q=Mikel+Matticoli"}>
				<br />
				<h3>Academic Work</h3>
				<p>
					Published papers on The Call of Karen, the JHDB Global Contributor Projec, and contributions to other academic work at WPI
				</p>
			</Card>
			<Card image={TreasuryCover} action={"https://treasury.wpi.edu"}>
				<br />
				<h3>WPI Treasury</h3>
				<p>
				A web application to promote financial transparency in WPI's student government by making financial data available to the WPI community
				</p>
			</Card>
			<Card image={InprogressCover} action={"https://github.com/matticoli/paracord"}>
				<br />
				<h3>In Progress: Paracord</h3>
				<p>
					A collaborative tool for building visual novels. The simplicity of Twine with the portability of Google Docs
				</p>
			</Card>

		</Deck>
	</div>
)};

export default Home;
