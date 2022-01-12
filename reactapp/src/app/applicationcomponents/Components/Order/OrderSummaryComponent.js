import React from "react";

const OrderSummaryComponent = (props)=>{
    let {
        count,
        amount
    } = props.data;


    return(
        <div>
            <td> {amount} </td>
        </div>
    )
}

export default OrderSummaryComponent;