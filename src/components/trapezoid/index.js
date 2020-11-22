import React, { useState, useEffect } from 'react';
import style from './style.css';

const Trapezoid = (props) => (
    <div className={"hex"} style={{width: `${props.width}%`}}>
        <div className={`${"leftTri"} ${props.blue ? "blueTri" : ""}`} />
        <div className={`${"rect"} ${props.blue ? "blueRect" : ""}`}>
            <div className={"contents"}>
                {props.children}
            </div>
        </div>
        <div className={`${"rightTri"} ${props.blue ? "blueTri" : ""}`} />
    </div>
);

export default Trapezoid;