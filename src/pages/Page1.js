import React, {useContext } from 'react';
import { globale } from '../App';

const Page1 = () =>{
    const [page,setPage] = useContext(globale);
    return(
        <div className='border border-black mt-[50px]'>
        PAGINA
        </div>
    )
}
export default Page1;