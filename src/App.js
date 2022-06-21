import './App.css';
import logo1 from './assets/UNITED.png';
import React, { useState} from 'react';
import logo2 from './assets/PROPERTIES.png';
import Progress from './components/Progress/Progress';
import LastProgress from './components/Progress/LastProgress';
import Citation from './components/Citation_box/Citation';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
export const globale = React.createContext();

function App() {
  const [page, setPage] = useState(0);
  
  const setPageMax = ()=>{
    if(page<=1) setPage(page+1);
  }
  return (
    <globale.Provider value={[page,setPage]}>
    <div>{page}</div>
    <p className="text-black" onClick={()=>setPageMax()}>CLICK +1</p>
    <p className='text-black' onClick={()=>setPage(page-1)}>CLICK -1</p>
    <div className="App flex flex-row md:flex-column w-full h-14 md:h-screen">
      <div className="w-full md:w-1/3 h-full bg-[#35A0EE] sm:text-black md:text-white">
        <div id="logo_sect" className="flex flex-row text-left px-[15%] py-[5%] md:pt-12 md:pl-20">
          <img alt="united" src={logo1}></img>
            <img alt="propertier" src={logo2}></img>
        </div>
        <div id="progress_sect" className="pl-20 pt-20">  
          <Progress descr="Contact Details" num="0"/>
          <Progress descr="Investment Plan" num="1"/>
          <LastProgress descr="Investment Preferences" num="2"/>
        </div>
        <div id="citation_sect" className="pl-14 pt-14">
          <Citation/>
      </div>
      </div>
      <BrowserRouter>
      <Routes>
      <>
        <Route path="/cita" element={<Citation/>}/>
      </>
      </Routes>
      </BrowserRouter>
      </div>
    </globale.Provider>
  );
}

export default App;
