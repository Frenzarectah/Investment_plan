import { useContext } from "react";
import { globale } from "../../App";
import '../Form/Form.css';

const Form = () =>{
    const [page,setPage] = useContext(globale);
    if (page === 1){
        return(
            <>
                <div>{page}</div>
            </>
        )}
    else{
        return(
            <>
                <div>diverso da 1</div>
            </>
        )
    }
}

export default Form;