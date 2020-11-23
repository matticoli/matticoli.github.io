import React, { useState, useEffect } from 'react';

import style from './style';
import Deck from '../../components/deck';
import Card from '../../components/card';
import KarenCover from '../../assets/call-of-karen-cover.png';
import ProfilePic from '../../assets/me-profile.png';
import ExperienceIcon from '../../assets/icons8-experience-skill-48.png';
import LearningIcon from '../../assets/icons8-visualization-skill-96.png';
import CommunicationIcon from '../../assets/icons8-communication-skill-96.png';
import Resume from '../../resume.pdf';

const About = () => {

	let [vw, setVw] = useState(document.documentElement.clientWidth || 0, window.innerWidth || 0);

	
	useEffect( () => {
		const updateWidth = () => {
			const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
			setVw(width);
		}
		window.addEventListener('resize', updateWidth);
		return () => {
			window.removeEventListener('resize', updateWidth);
		}
	}, []);

	return (

	<div className={"about"}>
		{vw >= 1025 && (
			<div className={"taglineContainer"}>
				<img className={"taglineImg"} src={ProfilePic} />
				<div className={"taglineText"}>
					<h1>Developer  |  Designer  |  Engineer</h1>
					<h3>I enjoy making things and helping people</h3>
				</div>
			</div>)
		}

		{vw < 1025 && (
			<div className={"taglineContainer"}>
				<div className={"taglineText"}>
					{/* <div> */}
						<img className={"taglineImg"} src={ProfilePic} />
						<h1>Developer  |  Designer  |  Engineer</h1>
					{/* </div> */}
					<h3>I enjoy making things and helping people</h3>
				</div>
			</div>)
		}


		<br />
		<Deck>
			<Card icon={true} image={ExperienceIcon}>
				<h3>7+ Years of industry experience</h3>
				<p>
				I was lucky to land my first software engineering internship my sophomore year of High School, and have industry experience in programming, project management, research, and UX.
				</p>
			</Card>
			<Card icon={true} image={CommunicationIcon}>
				<h3>Practiced Communication Skills</h3>
				<p>
				I'm fluent in English/Spanish & proficient in French. More importantly, I have experience communicating effectively with stakeholders and team members across backgrounds/disciplines.
				</p>
			</Card>
			<Card icon={true} image={LearningIcon}>
				<h3>I Enjoy Learning!</h3>
				<p>
				Through my various jobs and projects I have learned many useful skills and helped others to do the same. I am always willing to help out where I can and learn something new!
				</p>
			</Card>

		</Deck>
		<div className={"taglineContainer"}>
			<div className={"taglineText"}>
				<h1>Resume</h1>
				<a href={Resume}><h3>Click here for PDF</h3></a>
			</div>
		</div>
		<br />
		<iframe  width="800" height="1200" style={{border: 'none', display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%', maxHeight: '90vh'}} src={Resume} />
	</div>
)};

export default About;
