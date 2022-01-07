import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../state/cart/cartActions";


let DisplayProductDetails = ({product})=>{

    const [showDetails, showHideDetails] = useState(false);

    const dispatchAddToCart = useDispatch();
    //console.log("render ", product);

    const handleClick = (evt) => {
        evt.target.classList.contains("product") ? 
                showHideDetails(!showDetails) : "";
        //alert("handleClick ")
        evt.preventDefault();
    }

    const addProductToCart = (product)=>{
        //alert("product "+ JSON.stringify(product))
        dispatchAddToCart(addItemToCart(product));
    }
    
    return(
        <ul className={"product"}>
            <li className={"product"} onClick={handleClick}>
                {product.name}
                { showDetails ?
                <ul className={"productDetails"}>
                    <li>{product.price}</li>
                    <li>{product.desc}</li>
                    <li>{product.rating}</li>    
                    <button onClick={()=>{addProductToCart(product)}}>Add To Cart</button>          
                </ul>
                :""}
            </li>
        </ul>
    )
}

export default DisplayProductDetails;