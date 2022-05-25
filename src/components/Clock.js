import { render } from "@testing-library/react";
import React, { useEffect, useState} from "react";
import { useReducer } from 'react';
import { ReactDOM } from "react";
import "../components/Clock.css";

const myReducer =(stato,azione)=>{
    console.log(azione);
    if (azione ==="add"){ return stato};
    if (azione ==="delete"){ return stato};
}

const Compt =()=>{
    const [stato, dispatch] = useReducer(myReducer,"actual");
    const addOne = ()=> dispatch({
        type:"add",
        stato:"adding.."
    });
    const delOne =()=> dispatch({
        type:"delete",
        stato:"deleting..."
    });
return(
    <div>
        <div>{stato}</div>
        <div style={{border:"2px red solid"}} onClick={addOne}>ADD</div>
        <div style={{border:"2px red solid"}} onClick={delOne}> DELETE</div>
    </div>
)
}

export default Compt;