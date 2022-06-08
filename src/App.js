import './App.css';
import logo1 from './assets/UNITED.png';
import React, { useState} from 'react';
import logo2 from './assets/PROPERTIES.png';
import Progress from './components/Progress/Progress';
import Citation from './components/Citation_box/Citation';

export const globale = React.createContext();

function App() {
  const [page, setPage] = useState(0);
  
  return (
    <globale.Provider value={{page,setPage}}>
    <div>{page}</div>
    <div className="App flex flex-row md:flex-column w-full h-14 md:h-screen">
      <div className="w-full md:w-1/3 h-full bg-[#35A0EE] sm:text-black md:text-white">
        <div id="logo_sect" className="flex flex-row text-left px-[15%] py-[5%] md:pt-12 md:pl-20">
          <img alt="united" src={logo1}></img>
            <img alt="propertier" src={logo2}></img>
        </div>
        <div id="progress_sect" className="pl-20 pt-20">
          <Progress descr="Contact Details"/>
          <Progress descr="Investment Plants"/>
          <Progress descr="Investment Preferences"/>
        </div>
        <div id="citation_sect" className="pl-14 pt-14">
          <Citation/>
      </div>
      </div>
    </div>
    </globale.Provider>
  );
}

export default App;
