import './App.css';
import logo1 from './assets/UNITED.png';
import React, { useState} from 'react';
import logo2 from './assets/PROPERTIES.png';
import Progress from './components/Progress/Progress';
import LastProgress from './components/Progress/LastProgress';
import Citation from './components/Citation_box/Citation';
import Page1 from './pages/Page1';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
export const globale = React.createContext();

function App() {
  const [page, setPage] = useState(1);
  
  const openModal = ()=> document.getElementById("modal").style.display="block";
  const closeModal = ()=> document.getElementById("modal").style.display="none";
  
  const setPageMax = ()=>{
    if(page<=3) setPage(page+1);
  }
  return (
    <globale.Provider value={[page,setPage]}>
    <div id="modal">
        <p className="header p-[5px] flex justify-between"><p>NEED HELP?</p><span onClick={()=>closeModal()}>X</span></p>
        <p className='montserrat'>If you do, please call 050/455660 or send an email to helpdesk@unitedproperties.com</p>
    </div>

    <div className="App flex flex-row md:flex-column w-full h-14 md:h-screen">
      <div className="w-full md:w-1/3 h-full bg-[#35A0EE] sm:text-black md:text-white">
        <div id="logo_sect" className="flex flex-row text-left px-[15%] py-[5%] md:pt-12 md:pl-20">
          <img alt="united" src={logo1}></img>
            <img alt="propertier" src={logo2}></img>
        </div>
        <div id="progress_sect" className="pl-20 pt-20">  
          <Progress descr="Contact Details" num="1"/>
          <Progress descr="Investment Plan" num="2"/>
          <LastProgress descr="Investment Preferences" num="3"/>
        </div>
        <div id="citation_sect" className="pl-14 pt-14">
          <Citation/>
      </div>
      </div>
      <div className='w-2/3 border border-black ml-[50px] mt-[36px] mr-[50px] montserrat flex flex-col'>
        <div className='flex flex-row justify-between'>
          <div className='text-[#A4AEB4]'>STEP {page} OF 3</div>
          <div>Lost or have trouble? <a href="#" className='text-[#2696E8] hover:underline' onClick={()=>openModal()}>Get Help!</a></div>
      </div>
      <div id="page_sect" className='montserrat'>  
          <BrowserRouter>
            <Routes>
            <>
              <Route path="/page1" element={<Page1/>}/>
            </>
            </Routes>
          </BrowserRouter>
      </div>
      </div>
      </div>
      <div>{page}</div>
    <p className="text-black" onClick={()=>setPageMax()}>CLICK +1</p>
    <p className='text-black' onClick={()=>setPage(page-1)}>CLICK -1</p>
    
    </globale.Provider>
  );
}

export default App;
