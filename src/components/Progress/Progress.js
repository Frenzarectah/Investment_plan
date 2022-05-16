
import React, { Component } from 'react';
import reactDom from 'react-dom';
import '../Progress/Progress.css';
import rect_ from './assets/Rectangle.png';
import rect_xs from './assets/Rectangle_xs.png';

const Progress = (props)=>{
    return(
        <div>
        <div class="montserrat h-[180px] mt-[200px] text-left text-white">pippone</div>
            <div id="placeholder">
                <img src={rect_}/>
            </div>
        </div>
        )
}

export default Progress;