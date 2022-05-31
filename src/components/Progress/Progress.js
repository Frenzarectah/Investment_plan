import React, { Component } from 'react';
import '../Progress/Progress.css';
import rect from './assets/Rect_littl.png';
import rect_vert from './assets/rect_vertical.png';


const Progress = (props)=>{    
    return(
            <>
            <div className="text-left flex flex-row text-white montserrat">
                    <div id="placeholder" className="flex justify-center items-center">
                        <img style={{width:"11px",height:"11px"}} src={rect}/>
                    </div>
                    <p className="pl-5 self-center">{props.descr}</p>
            </div>
                    <img class="mt-2 ml-3" style={{width:"4px",height:"9px"}} src={rect_vert}/>
                    <img class="mt-2 ml-3" style={{width:"4px",height:"9px"}} src={rect_vert}/>
            </>
    );
};


export default Progress;