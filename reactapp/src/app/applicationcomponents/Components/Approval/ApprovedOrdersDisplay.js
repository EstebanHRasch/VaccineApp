import React, {Fragment, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate }  from "react-router-dom";

import ApprovedOrderComponent from "../../Components/Approval/ApprovedOrderComponent";
import {getprevApprovedOrders} from "../../../state/approved/approvedorderAction";


let ApprovedOrdersDisplayComponent = (props)=>{

    const User = useSelector((state)=>state.userReducer.user);
    const approvedorderList = useSelector((state)=>state.approvedorderReducer);
    

    const dispatchGetprevApprovedOrders = useDispatch();
    const dispatchEmptyOrders = useDispatch();

    // let emptyAllOrders = function(event) {
    //     dispatchEmptyOrders(emptyOrders())
    //     event.preventDefault();

    // }

    let navigate = useNavigate();

    let ToApprovalOrders = function(event) {      
        
        navigate('/approvedorder');
        event.preventDefault();
    }

    useEffect(()=>{
        dispatchGetprevApprovedOrders(getprevApprovedOrders(User._id))
        console.log(`Approved Order fetching started for user ${User._id}`)
    }, [])

    return(
        <>
    <h1>Here are the approved orders: </h1>
    {approvedorderList && approvedorderList.length > 0 ? 
    
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Date Placed</th>
                        <th>Userid</th>
                        <th>Vaccine, Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            approvedorderList.map(approvedorder=>{
                                //return item.name
                                
                                return <tr><ApprovedOrderComponent 
                                                approvedorder={approvedorder}
                                                key={approvedorder._id}
                                                readOnly = {props.readOnly}
                                    /></tr>
                            })
                        } 
                    </tbody>
            </table>

                    <Fragment>
                            
                            <button onClick={() => ToApprovalOrders()} >
                                Back To Approval Orders
                            </button>

                        </Fragment> 
        
        </Fragment>
        : <span>No Approved Orders</span>
    } 
    </>

    )

}

export default ApprovedOrdersDisplayComponent;



