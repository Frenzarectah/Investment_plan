import React, {useContext } from 'react';
import { globale } from '../App';
import '../App.css';
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
const Page = () =>{
    const [page,setPage,pageInfo] = useContext(globale);
    return(
        <>
        <div className='mt-[20px] mr-[245px] flex flex-col'>
            <div className='montserrat-alt text-black extrabold text-[28px]'>
                {pageInfo[page].title}
            </div>
            <div className='mt-[12px] montserrat text-[#A4AEB4] text-md'>
                {pageInfo[page].subtitle}
            </div>
            <div id="page_form">
            <BrowserRouter>
            <Routes>
            <>
              <Route path="/" element={<Form/>}/>
              <Route path="/page1" element={<Form/>}/>
              <Route path="/page2" element={<Form/>}/>
            </>
            </Routes>
          </BrowserRouter>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Page;