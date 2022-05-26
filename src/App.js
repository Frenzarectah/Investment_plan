import './App.css';
import logo1 from './assets/UNITED.png';
import logo2 from './assets/PROPERTIES.png';
import Progress from './components/Progress/Progress';
import tick from './components/Clock';
import Compt from './components/Clock';
import { ReactDOM, useReducer } from 'react';

const myReducer = (state,action)=>{
  console.log(action.type);
  switch(action.type){
    case "1":{return state+1}
    case "2":{return state-1}
  }
}
function App() {
  const [state, dispatch] = useReducer(myReducer,1);
  const nextPage =()=> dispatch({
    type: "1"  }
  )
  const prevPage =()=> dispatch({
    type: "2"}
  )
  return (
    <div className="App flex flex-row w-full h-screen">
      <div className="w-1/3 h-full bg-[#35A0EE] text-white pt-12 pl-20">
        <div className="flex flex-row">
          <img alt="united" src={logo1}></img>
            <img alt="propertier" src={logo2}></img>
        </div>
        <Progress name="nicola" surname="chimenti"/>  
      </div>
      <div id="clocki">
        <Compt pagina={state}/>
        <Compt/>
        </div>
        <div onClick={nextPage}>PAGINA AVANTI</div>
        <div onClick={prevPage}>PAGINA DIETRO</div>
        <div>{state}</div>
    </div>
  );
}

export default App;
