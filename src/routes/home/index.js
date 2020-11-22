import React, { useState, useEffect } from 'react';

import style from './style';
import Deck from '../../components/deck';
import Card from '../../components/card';
import KarenCover from '../../assets/call-of-karen-cover.png';
import JHDBCover from '../../assets/jhdb-cover.png';

const Home = () => {
	return (
	<div className={"home"}>
		<div className={"tagline"}>
			<h1>Projects</h1>
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
			<Card image={JHDBCover}>
				<br />
				<p>
				Buried Voices is a 3D puzzle+stealth fantasy game. Play as Khura and infiltrate the ancient Library to uncover the true history and purpose of the Academy, while avoiding the looming sentinels who guard the archive’s secrets.
				</p>
				<ul>
					<li>Lead Developer/Designer</li>
					<li>SRE/Systems Engineer</li>
					<li>Instructional/Customer Support</li>
				</ul>
			</Card>

		</Deck>
	</div>
)};

export default Home;
