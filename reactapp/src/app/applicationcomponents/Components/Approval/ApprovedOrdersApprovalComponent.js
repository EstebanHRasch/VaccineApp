import React, {Fragment, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate }  from "react-router-dom";

import CartItemComponent from "../Cart/CartItemComponent";
import CartSummaryComponent from "../Cart/CartSummaryComponent";
import { cancelOrder, saveOrderToDb, getprevOrders, emptyOrders } from "../../../state/order/orderActions";
import {saveApprovedOrderToDb, addApprovedOrder} from "../../../state/approved/approvedorderAction";
import OrderComponent from "../../Components/Order/OrderComponent"

let ApprovedOrdersApprovalComponent = (props)=>{

    const cartList = useSelector((state)=>state.cartReducer);
    const orderList = useSelector((state)=>state.orderReducer);
    const User = useSelector((state)=>state.userReducer.user);
    const Admin = useSelector((state)=>state.adminReducer.admin);
    const approvedorderList = useSelector((state)=>state.approvedorderReducer);
    const dispatchGetprevOrders = useDispatch();
    

    let recalculate = (cartItems) => {
        let amount = 0,
            count = 0;
    
        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }
    
        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }

    let navigate = useNavigate();

    let ToApprovedOrders = function(event) {      
        
        navigate('/approvedorder/displayapprovedorders');
        event.preventDefault();
    }

    useEffect(()=>{
        dispatchGetprevOrders(getprevOrders(User._id))
        console.log(`Order fetching started for user ${User._id}`)
    }, [])
    
    return(
        <Fragment>
        <h1>Approval Component</h1>

        {
            Admin && Admin.adminName.length > 0 ?

            orderList
             && orderList.length > 0 ?
             
    <Fragment>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Products</th>
                    <th>Total</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                    {
                        orderList.map(order=>{
                            //return item.name
                            
                            return <tr><OrderComponent 
                                            order={order}
                                            key={order._id}
                                            readOnly = {props.readOnly}
                                /></tr>
                        })
                    } 
                </tbody>

                </table>
                <button onClick={() => ToApprovedOrders()} >
                                See Approved Orders
                            </button>

                </Fragment>:
            "No items to display in cart"

            : "Must sign in as admin"
        }
        </Fragment>
    )
}

export default ApprovedOrdersApprovalComponent;