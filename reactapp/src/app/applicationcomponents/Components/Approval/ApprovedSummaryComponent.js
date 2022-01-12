import React from "react";

const ApprovedSummaryComponent = (props)=>{
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

export default ApprovedSummaryComponent;