import React, {Fragment, useEffect} from "react";

import OrderSummaryComponent from "../../Components/Order/OrderSummaryComponent";
import { saveApprovedOrderToDb } from "../../../state/approved/approvedorderAction";
import { useDispatch, useSelector } from "react-redux";
import { saveCancelOrderToDb } from "../../../state/cancelorder/cancelorderActions";

let OrderComponent = (props)=>{

    const User = useSelector((state)=>state.userReducer.user);
    const dispatchSaveApprovedOrder = useDispatch();
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

    let approveOrderFromOrders1 = (approvedorder, userid)=>{
        dispatchSaveApprovedOrder(saveApprovedOrderToDb(approvedorder, userid))
        //alert("Approved Order alert")
    }


return(
   <>
   <td>{props.order.dateTime}</td>
    <td>
        <ul>{props.order.order && props.order.order.length ? 
            props.order.order.map((product)=>{
              return(  
              
                <>
                <li> {product.name}, {product.price}</li>
                </>
                
            )}) : "No Order"
        }
        </ul>
    </td>

    <OrderSummaryComponent data={recalculateTotal(props.order.order)}/>

    {
                <td>

                    <button onClick={()=>approveOrderFromOrders1(props.order.order, User._id)}>
                        Approve
                    </button>
                    
                    <button onClick={()=>cancelOrderFromOrders(props.order.order, User._id)}>
                        Cancel
                    </button>


                </td>
                }
    </>
    )
}

export default OrderComponent;


