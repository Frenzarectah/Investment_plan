import React, { Component } from 'react';
import reactDom from 'react-dom';
import '../Progress/Progress.css';
import rect_ from './assets/Rectangle.png';
import rect_xs from './assets/Rectangle_xs.png';

const cocktailList =[
    "mario cocktail",
    "caio sempronio",
    "dio stronzo",
    "madonna troia"
];

const Progress = ()=>{
    const listaNomi = cocktailList.map(uno =><li>{uno}</li>);
        return(
        <>
        <ul>{listaNomi}</ul>
        </>
        )

}
export default Progress;