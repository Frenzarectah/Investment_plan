import { useContext } from "react";
import { globale } from "../../App";
import '../Citation_box/Citation.css';

const cit = {
    0:"We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete",
    1:"Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free"
}
const Citation = () =>{
    const [page,setPage] = useContext(globale);
    return(
        <>
            <div style={{width:"320px",height:"200px"}} className="flex justify-center px-[20px] pt-[10px] items-center bg-white montserrat text-[#A4AEB4] text-md rounded">
            <p>{cit[page]}</p>
            </div>               
            <div className="citate bg-white rounded shadow-black z-10 border border-[#35A0EE]" style={{width:"56px",height:"56px"}}></div>
        </>
    )
}
export default Citation;