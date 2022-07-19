import './App.css';
import logo1 from './assets/UNITED.png';
import React, { useState} from 'react';
import logo2 from './assets/PROPERTIES.png';
import Progress from './components/Progress/Progress';
import LastProgress from './components/Progress/LastProgress';
import Citation from './components/Citation_box/Citation';
import Page1 from './pages/Page1';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
export const globale = React.createContext(); //context creation in main App

const pageInfo = {
  1:{title:"Contact Details",subtitle:"Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you"},
  2:{title:"Investment plans",subtitle:"Let us know about your investment plans. This will help us get you to the right expert who will help you further"},
  3:{title:"Investment details",subtitle:"This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals"}
}

function App() {
  //setting the state
  const [page, setPage] = useState(1);

  //setting two funct to open/close the help modal
  const openModal = ()=> document.getElementById("modal").style.display="block";
  const closeModal = ()=> document.getElementById("modal").style.display="none";
  
  //setting higher level setter functs to limit the state "page"
  const setPageMax = ()=> page<3?setPage(page+1):setPage(page);
  const setPageMin = ()=> page>1?setPage(page-1):setPage(page);
  
  return (
    //takes the status and puts into context
    <globale.Provider value={[page,setPage,pageInfo]}>
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
          <Progress descr={pageInfo[1].title} num="1"/>
          <Progress descr={pageInfo[2].title} num="2"/>
          <LastProgress descr={pageInfo[3].title} num="3"/>
        </div>
        <div id="citation_sect" className="pl-14 pt-14">
          <Citation/>
      </div>
      </div>
      <div className='w-2/3 border border-black ml-[117px] mt-[36px] mr-[50px] montserrat flex flex-col'>
        <div className='flex flex-row justify-between'>
          <div className='text-[#A4AEB4]'>STEP {page} OF 3</div>
          <div>Lost or have trouble? <a href="#" className='text-[#2696E8] hover:underline' onClick={()=>openModal()}>Get Help!</a></div>
      </div>
      <div id="page_sect" className='montserrat'>  
          <BrowserRouter>
            <Routes>
            <>
              <Route path="/" element={<Page1/>}/>
            </>
            </Routes>
          </BrowserRouter>
      </div>
      </div>
      </div>
      <div>{page}</div>
    <p className="text-black" onClick={()=>setPageMax()}>CLICK +1</p>
    <p className='text-black' onClick={()=>setPageMin()}>CLICK -1</p>
    
    </globale.Provider>
  );
}

export default App;
