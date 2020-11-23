import React, { useState, useEffect } from 'react';
import style from './style.css';

import { useHistory } from "react-router";

const Trapezoid = (props) => {
    const history = useHistory();

    return (
        <a onClick={() => {
                        if(props.LinkTo) {
                            history.push(props.LinkTo);
                        }

                    }}
            className={"hex"} 
            style={{
                width: `${props.width}%`,
                zIndex: (props.LinkTo ? 10 : -20),
                cursor: props.LinkTo ? 'pointer' : 'default'
                }}>
                <div className={`${"leftTri"} ${props.blue ? "blueTri" : ""}`} />
                <div className={`${"rect"} ${props.blue ? "blueRect" : ""}`}>
                    <div className={"contents"}>
                        {props.children}
                    </div>
                </div>
                <div className={`${"rightTri"} ${props.blue ? "blueTri" : ""}`} />
            </a>
    );
};

export default Trapezoid;