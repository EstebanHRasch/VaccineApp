import React, {Fragment, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate }  from "react-router-dom";


import { cancelOrder, saveOrderToDb, getprevOrders, emptyOrders } from "../../../state/order/orderActions";
import { saveCancelOrderToDb, getprevCancelOrders } from "../../../state/cancelorder/cancelorderActions";
import OrderPatientComponent from "../../Components/Order/OrderPatientComponent";


let RecentOrdersComponent = (props)=>{

    const User = useSelector((state)=>state.userReducer.user);
    const orderList = useSelector((state)=>state.orderReducer);
    const cartList = useSelector((state)=>state.cartReducer);
    

    const dispatchGetprevOrders = useDispatch();
    const dispatchEmptyOrders = useDispatch();

    let emptyAllOrders = function(event) {
        dispatchEmptyOrders(emptyOrders())
        event.preventDefault();

    }

    let navigate = useNavigate();

    let ToCancelledOrders = function(event) {      
        
        navigate('/cancelorder');
        event.preventDefault();
    }

    useEffect(()=>{
        dispatchGetprevOrders(getprevOrders(User._id))
        console.log(`Order fetching started for user ${User._id}`)
    }, [])

    return(
        <>
    <h1>Hello {User.name} here are your recent orders: </h1>
    {orderList && orderList.length > 0 ? 
    
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Appointment Date</th>
                        <th>Vaccine</th>
                        <th>Total</th>
                        <th>Options</th>
                        <th>Order Date</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            orderList.map(order=>{
                                //return item.name
                                
                                return <tr><OrderPatientComponent 
                                                order={order}
                                                key={order._id}
                                                readOnly = {props.readOnly}
                                    /></tr>
                            })
                        } 
                    </tbody>
            </table>

            <Fragment>
                        <button onClick={()=>emptyAllOrders()}>
                                Empty Orders
                            </button>
            </Fragment>

                    <Fragment>
                            
                            <button onClick={() => ToCancelledOrders()} >
                                See Cancelled Orders
                            </button>

                        </Fragment> 
        
        </Fragment>
        : <span>No Recent Orders</span>
    } 
    </>

    )

}

export default RecentOrdersComponent;

/*
const date1 = new Date('7/13/2010');
const date2 = new Date('12/15/2010');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

new Date(props.order.dateTime)
new Date()
*/





