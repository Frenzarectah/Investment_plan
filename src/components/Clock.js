import { render } from "@testing-library/react";
import React, { useEffect, useState} from "react";
import { useReducer } from 'react';
import { ReactDOM } from "react";
import "../components/Clock.css";

const myReducer =(stato, azione)=>{
    console.log(azione);
    switch(azione.type){
        case "add":{ return stato="adding..."};
        case "delete":{ return stato="deleting..."};
    }
}
/*
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
*/

const Compt =(props)=>{
    const [stato, dispatch] = useReducer(myReducer,"stato");
    const addOne = ()=> dispatch({
        type:"add",
    });
    const delOne =()=> dispatch({
        type:"delete",
    });
    if (props.pagina === undefined ){document.onload=()=> {document.getElementsById("visibol").style.display="none"}}
return(
    <div>
        <div>{stato}</div>
        <div style={{border:"2px red solid"}} onClick={addOne}>ADD</div>
        <div style={{border:"2px red solid"}} onClick={delOne}> DELETE</div>
        <div id="visibol">LA PAGINA ATTUALE DELL'APP E' {props.pagina}</div>
    </div>
)
}
/*function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </>
    );
  }
*/
export default Compt;