import React, { Component } from 'react';
import reactDom from 'react-dom';
import { ReactDOM } from 'react';
import '../Progress/Progress.css';
import rect_ from './assets/Rectangle.png';
import rect_xs from './assets/Rectangle_xs.png';

const Progress = (props)=>{    
    const {name, surname}  = props;
    console.log(name)
    if(name === "mario"){
        return(
            <>
                <div>MARIO</div>
            </>
    )}
    else if(name !== "mario"){
        return(
            <>
                <div>NON E' MARIO</div>
            </>
        )
    };
};


export default Progress;