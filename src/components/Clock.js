import { render } from "@testing-library/react";
import React, { useState } from "react";
import { ReactDOM } from "react";
import "../components/Clock.css";

const Clock = (props)=>{
    const {name, color} = props;
    const [col,setCol] = useState('black');
    const changeCol =()=> setCol('violet');
    return(
        <div onClick={changeCol} style={{width:'100px', color:"white"}} className={col}>{name}</div>

    )
}
export default Clock;