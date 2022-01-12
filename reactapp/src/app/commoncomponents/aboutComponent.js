import React, {Fragment} from "react";
import { useParams, useNavigate } from "react-router-dom";


let About = (props)=>{
    let params = useParams();    
    let param = params["id"] ? params["id"]: "No Params"; 

    let navigate = useNavigate();

    let func = function(event) {
        event.preventDefault();
        
        navigate('/user');
    }

    return(
        <div className="about" >  
            <h2>We promise to support .... </h2>  
            <p className="about-content">We help people access info on vaccines and can help you setup a vaccination appointment today  
            </p>  
            <p>id = {param}</p>
            <button className={"form-control btn btn-primary col-md-2"} 
                    onClick={func}>Go To User</button>
        </div>
    )
}

export default About;
