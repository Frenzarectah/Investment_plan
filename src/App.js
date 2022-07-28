import './App.css';
import logo1 from './assets/UNITED.png';
import React, { useState} from 'react';
import logo2 from './assets/PROPERTIES.png';
import Progress from './components/Progress/Progress';
import LastProgress from './components/Progress/LastProgress';
import Citation from './components/Citation_box/Citation';
import Page from './pages/Page';
export const globale = React.createContext(); //context creation in main App

let userDatas = 
{
    name:"",
    number:"",
    mail:"",
    country:""
};
export const userDB = React.createContext(userDatas);
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
  
  //setting funct to close the privacy
  const closePrivacy = ()=> document.getElementById("privacy").style.display="none";  
  
  return (
    //takes the status and puts it into context
    <globale.Provider value={[page,setPage,pageInfo]}>
    <div id="modal">
        <p className="header p-[5px] flex justify-between"><p>NEED HELP?</p><span onClick={()=>closeModal()}>X</span></p>
        <p className='align-self-center montserrat'>If you do, please call <a href="tel:050/455660">050/455660</a> or send an email at <a href="mailto:helpdesk@unitedproperties.com">this</a> address</p>
    </div>
    <div id="privacy">
        <p className="header p-[5px] flex justify-between"><p>Privacy Policy</p><span onClick={()=>closePrivacy()}>X</span></p>
        <p className="montserrat">Privacy is Dead</p>
    </div>
    <div className="App flex flex-row md:flex-column w-full h-full md:h-screen">
      <div className="w-full md:w-1/3 h-full bg-[#35A0EE] sm:text-black md:text-white">
        <div id="logo_sect" className="flex flex-row text-left mt-[5px] px-[15%] py-[5%]">
          <img alt="united" src={logo1}></img>
            <img alt="propertier" src={logo2}></img>
        </div>
        <div id="progress_sect" className="pl-20 pt-20">  
          <Progress descr={pageInfo[1].title} num="1"/>
          <Progress descr={pageInfo[2].title} num="2"/>
          <LastProgress descr={pageInfo[3].title} num="3"/>
        </div>
        <div id="citation_sect" className="pl-6 pr-6 pt-14">
          <Citation/>
      </div>
      </div>
      <div className='w-2/3 border border-black ml-[95px] mt-[10px] mr-[50px] montserrat flex flex-col'>
        <div className='flex flex-row justify-between'>
          <div className='text-[#A4AEB4]'>STEP {page} OF 3</div>
          <div>Lost or have trouble? <a href="#" className='text-[#2696E8] hover:underline' onClick={()=>openModal()}>Get Help!</a></div>
      </div>
      <div id="page_sect" className='montserrat'>  
          <Page/>
      </div>
      </div>
      </div> 
    </globale.Provider>
  );
}

export default App;
