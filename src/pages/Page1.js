import React, {useContext } from 'react';
import { globale } from '../App';
import '../App.css';

const Page1 = () =>{
    const [page,setPage,pageInfo] = useContext(globale);
    return(
        <div className='mt-[50px] flex flex-col'>
            <div className='montserrat-alt text-black extrabold text-[28px]'>
                {pageInfo[page].title}
            </div>
            <div className='mt-[12px] montserrat text-[#A4AEB4] text-md'>
                {pageInfo[page].subtitle}
            </div>
        </div>
    )
}
export default Page1;