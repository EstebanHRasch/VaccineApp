import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../state/cart/cartActions";


let DisplayHospitalDetails = ({hospital})=>{

    const [showDetails, showHideDetails] = useState(false);

    const dispatchAddToCart = useDispatch();
    //console.log("render ", product);

    const handleClick = (evt) => {
        evt.target.classList.contains("hospital") ? 
                showHideDetails(!showDetails) : "";
        //alert("handleClick ")
        evt.preventDefault();
    }

    const addHospitalToCart = (hospital)=>{
        //alert("product "+ JSON.stringify(product))
        dispatchAddToCart(addItemToCart(hospital));
    }
    
    return(
        <ul className={"hospital"}>
            <li className={"hospital"} onClick={handleClick}>
                {hospital.name}
                { showDetails ?
                <ul className={"hospitalDetails"}>
                    <li>{hospital.address}</li>
                    <li>{hospital.vaccines}</li>
                    <li>{hospital.type}</li>    
                    <button onClick={()=>{addHospitalToCart(hospital)}}>Add To Cart</button>          
                </ul>
                :""}
            </li>
        </ul>
    )
}

export default DisplayHospitalDetails;