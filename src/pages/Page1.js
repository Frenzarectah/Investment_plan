import React, {useContext } from 'react';
import { globale } from '../App';
import '../App.css';
import Form from '../components/Form/Form';

const Page1 = () =>{
    const [page,setPage,pageInfo] = useContext(globale);
    return(
        <div className='mt-[50px] mr-[245px] flex flex-col'>
            <div className='montserrat-alt text-black extrabold text-[28px]'>
                {pageInfo[page].title}
            </div>
            <div className='mt-[12px] montserrat text-[#A4AEB4] text-md'>
                {pageInfo[page].subtitle}
            </div>
            <div id="page_form">
                <Form refPage={page}/>
            </div>
        </div>
    )
}
export default Page1;