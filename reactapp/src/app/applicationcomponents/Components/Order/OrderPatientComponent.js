import React, {Fragment, useEffect} from "react";

import OrderSummaryComponent from "./OrderSummaryComponent";
import { useDispatch, useSelector } from "react-redux";
import { saveCancelOrderToDb } from "../../../state/cancelorder/cancelorderActions";

let OrderPatientComponent = (props)=>{

    const User = useSelector((state)=>state.userReducer.user);
    const dispatchSaveCancelledOrder = useDispatch();


    let recalculateTotal = (cartItems) => {
        let amount = 0, 
            count = 0;
    
        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }
    
        return {
            amount //ES6 syntactic sugar amount: amount 
        }
    }


    let cancelOrderFromOrders = (cancelorder, userid)=>{
        dispatchSaveCancelledOrder(saveCancelOrderToDb(cancelorder, userid))
    }


return(
   <>
   <td>{props.order.dateTime}</td>
    <td>
        <ul>{props.order.order && props.order.order.length ? 
            props.order.order.map((vaccine)=>{
              return(  
              
                <>
                <li> {vaccine.name}, {vaccine.price}</li>
                </>
                
            )}) : "No Order"
        }
        </ul>
    </td>
    

    <OrderSummaryComponent data={recalculateTotal(props.order.order)}/>

    {
                <td>
                    
                    <button onClick={()=>cancelOrderFromOrders(props.order.order, User._id)}>
                        Cancel
                    </button>

                </td>
                }
    
    <td>{props.order.appDate}</td>
    </>
    )
}

export default OrderPatientComponent;


