import React from "react";
import '../Citation_box/Citation.css';

const Citation = () =>{
    return(
        <>
            <div style={{width:"300px",height:"180px"}} className="flex justify-center items-center bg-white montserrat text-[#A4AEB4] rounded">
            <p>We care about your time, that's why we created a 3-stage onboarding 
                    that will not take more than 5 minutes to complete</p>
            </div>               
            <div className="citate bg-white rounded shadow-black z-10 border border-[#35A0EE]" style={{width:"56px",height:"56px"}}></div>
        </>
    )
}
export default Citation;