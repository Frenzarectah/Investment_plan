import React,{useContext} from "react";
import { globale } from "../../App";
import App from "../../App";
import arrow from "./assets/arrow_left.png";
const Footer = () =>{
    const [page,setPage] = useContext(globale);
    return(
        <footer className="mt-[30px] mr-0 w-full flex flex-row">
            <div className="text-[16px] text-[#2696E8] flex flex-row items-baseline">
            <a href="#" onClick={()=>setPage(page+1)}>  
                <img style={{width:"16px",height:"8px"}} src={arrow}/>
            </a>
            <span>Back to Homepage</span>
            </div>
        </footer>
    )
}
export default Footer;