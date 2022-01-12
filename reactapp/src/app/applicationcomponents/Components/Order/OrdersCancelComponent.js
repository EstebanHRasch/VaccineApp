import React, {Fragment, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate }  from "react-router-dom";


import { saveCancelOrderToDb, getprevCancelOrders } from "../../../state/cancelorder/cancelorderActions";
import OrderPatientComponent from "../../Components/Order/OrderPatientComponent";


let CancelOrdersComponent = (props)=>{

    const User = useSelector((state)=>state.userReducer.user);
    const cancelorderList = useSelector((state)=>state.cancelorderReducer);
    

    const dispatchGetprevCancelOrders = useDispatch();
    const dispatchToCancel = useDispatch();
    const dispatchToReorder = useDispatch();


    let ReOrderToList = ( orderid )=>{
        //dispatchSaveCancelOrder(saveCancelOrderToDb(orderid))
        //dispatchToReorder(Reorder(orderid))
    }

    let navigate = useNavigate();

    let BackToOrders = function(event) {      
        
        navigate('/order');
        event.preventDefault();
    }

    useEffect(()=>{
        dispatchGetprevCancelOrders(getprevCancelOrders(User._id))
        console.log(`Cancel Order fetching started for user ${User._id}`)
    }, [])

    return(
        <>
    <h1>Hello {User.name} here are your cancelled orders: </h1>
    {cancelorderList && cancelorderList.length > 0 ? 
    
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Products</th>
                        <th>Total</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            cancelorderList.map(order=>{
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
                            
                            <button onClick={() => BackToOrders()} >
                                See Recent Orders
                            </button>

                        </Fragment> 
        
        </Fragment>
        :
    <Fragment>
        <span>No Cancelled Orders</span>

        <button onClick={() => BackToOrders()} >
            See Recent Orders
        </button>

    </Fragment> 
    } 
    </>

    )

}

export default CancelOrdersComponent;

/*
const date1 = new Date('7/13/2010');
const date2 = new Date('12/15/2010');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

new Date(props.order.dateTime)
new Date()
*/





