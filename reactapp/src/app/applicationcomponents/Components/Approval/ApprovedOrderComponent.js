import React, {Fragment, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import ApprovedOrderSummaryComponent from "../../Components/Approval/ApprovedSummaryComponent";

let ApprovedOrderComponent = (props)=>{

    const User = useSelector((state)=>state.userReducer.user);

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


return(
    <>
    <td>{props.approvedorder.dateTime}</td>
    <td>{props.approvedorder.userid}</td>
     <td>
         <ul>{props.approvedorder.approvedorder && props.approvedorder.approvedorder.length ? 
             props.approvedorder.approvedorder.map((vaccine)=>{
               return(  
               
                 <>
                 <li> {vaccine.name}, {vaccine.price}</li>
                 </>
                 
             )}) : "No Order"
         }
         </ul>
     </td>

    <ApprovedOrderSummaryComponent data={recalculateTotal(props.approvedorder.approvedorder)}/>

    </>
    )
}

export default ApprovedOrderComponent;
