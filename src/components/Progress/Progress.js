import React, { Component, useContext } from 'react';
import '../Progress/Progress.css';
import { globale } from "../../App";
import rect from './assets/Rect_littl.png';
import rect_vert from './assets/rect_vertical.png';
/*
COMPONENT WHO COMPOSES THE PROGRESS BAR ON THE SIDE OF SITE
*/

const Progress = (props)=>{    
    const {descr,num} = props;
    var op = "opacity-25";
    const [page,setPage] = useContext(globale);
    if(num <= page) op="opacity-100";
    return(
        <div className={op}>
        <div className="text-left flex flex-row text-black md:text-white lg:text-white text-lg montserrat_alt">
                <div id="placeholder" className="flex justify-center items-center">
                    <img style={{width:"11px",height:"11px"}} src={rect}/>
                </div>
                <p className="pl-5 self-center">{descr}</p>
        </div>
                <img class="mt-2 ml-3" style={{width:"4px",height:"9px"}} src={rect_vert}/>
                <img class="mt-2 ml-3 mb-2" style={{width:"4px",height:"9px"}} src={rect_vert}/>
        </div>
    )        
}
export default Progress;