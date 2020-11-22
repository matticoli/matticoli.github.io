import React, { useState, useEffect } from 'react';
import Trapezoid from '../trapezoid';
import style from './style.css';

const Card = (props) => (
	<div className={"wrapper"}>
		<div className={"card"}>
			<img src={props.image} />
			{props.children}
			<a href={props.action}><button>{props.actionText || "More Info..."}</button></a>
		</div>
	</div>
);

export default Card;
