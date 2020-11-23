import React, { useState, useEffect } from 'react';
import Trapezoid from '../trapezoid';
import style from './style.css';

const Card = (props) => {
	const imgStyles = props.icon ? {
		display: 'block',
		height: 70,
		width: 70,
		border: 'none',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 10
	} : {};

	return (
		<div className={"wrapper"}>
			<div className={"card"}>
				{props.image && 
					<img style={
						imgStyles
					} src={props.image} />
				}
				{props.icon && props.image && <br />}
				{props.children}
				{props.action && 
					<a href={props.action}><button>{props.actionText || "More Info..."}</button></a>
				}
			</div>
		</div>
	);
}

export default Card;
