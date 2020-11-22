import React, { useState, useEffect } from 'react';
import style from './style.css';

const Deck = (props) => (
	<div className={"deck"}>
		{props.children}
	</div>
);

export default Deck;
