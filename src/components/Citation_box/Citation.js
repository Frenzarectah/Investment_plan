import { useContext } from "react";
import { globale } from "../../App";
import '../Citation_box/Citation.css';

const Citation = () =>{
    const [page, setPage] = useContext(globale);
    return(
        <>
            <div style={{width:"320px",height:"200px"}} className="flex justify-center px-[20px] pt-[10px] items-center bg-white montserrat text-[#A4AEB4] text-md rounded">
            <p>{page}</p>
            <p onClick={()=>setPage(page+1)}>CLICK HERE!</p>
            <p>We care about your time, that's why we created a 3-stage onboarding 
                    that will not take more than 5 minutes to complete</p>
            </div>               
            <div className="citate bg-white rounded shadow-black z-10 border border-[#35A0EE]" style={{width:"56px",height:"56px"}}></div>
        </>
    )
}
export default Citation;