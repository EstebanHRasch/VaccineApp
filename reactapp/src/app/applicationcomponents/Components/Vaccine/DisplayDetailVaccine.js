import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../state/cart/cartActions";


let DisplayVaccineDetails = ({vaccine})=>{

    const [showDetails, showHideDetails] = useState(false);

    const dispatchAddToCart = useDispatch();
    //console.log("render ", product);

    const handleClick = (evt) => {
        evt.target.classList.contains("vaccine") ? 
                showHideDetails(!showDetails) : "";
        //alert("handleClick ")
        evt.preventDefault();
    }

    const addVaccineToCart = (vaccine)=>{
        //alert("product "+ JSON.stringify(product))
        dispatchAddToCart(addItemToCart(vaccine));
    }
    
    return(
        <ul className={"vaccine"}>
            <li className={"vaccine"} onClick={handleClick}>
                {vaccine.name}
                { showDetails ?
                <ul className={"vaccineDetails"}>
                    <li>{vaccine.price}</li>
                    <li>{vaccine.desc}</li>
                    <li>{vaccine.rating}</li>    
                    <button onClick={()=>{addVaccineToCart(vaccine)}}>Add To Cart</button>          
                </ul>
                :""}
            </li>
        </ul>
    )
}

export default DisplayVaccineDetails;