import React, {Fragment} from "react";
import { useNavigate }  from "react-router-dom";


let CheckoutBuyComponent = (props)=>{


    let navigate = useNavigate();
    let func = function(event) {      
        
        navigate('/order');
        event.preventDefault();
    }

    return(
    <Fragment>
    <h1>Thank you for the payment, your order is under process!</h1>

    <button onClick={func} >
        See Recent Orders
    </button>
    </Fragment>
    )

}

export default CheckoutBuyComponent;