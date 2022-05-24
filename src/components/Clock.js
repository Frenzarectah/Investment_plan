import { render } from "@testing-library/react";
import React, { useState } from "react";
import { ReactDOM } from "react";
import "../components/Clock.css";

const Clock = (props)=>{
    const {name, color} = props;
    const [pos,setPos] = useState({x:0, y:0});
    const settingPos = ()=> setPos({
        ...pos, 
        x: x30
    });
    return(
        <div onClick={settingPos}>{pos.x}</div>

    )
}
export default Clock;