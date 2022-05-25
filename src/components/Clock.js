import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import "../components/Clock.css";

const Clock = (props)=>{
    const {name, status} = props;
    //const [pos,setPos] = useState({x:0, y:0});
    if(status===true){
    return(
        <button>CIOL</button>
    )}
    else{
        return(
        <div>MANGUSTA</div>
        )}
    }
export default Clock;