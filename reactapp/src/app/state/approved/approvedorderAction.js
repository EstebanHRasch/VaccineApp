import * as ActionTypes from "../actionTypes";

export const addApprovedOrder = (approvedorder)=>({
    type: ActionTypes.ADD_APPROVED_ORDER,
    payload: {approvedorder}
})


export const saveApprovedOrderToDb = (order, userid)=>{

    console.log("Order To Be Saved", order); 
    return function(dispatch) {
        //dispatch(loading(true));
        window.fetch("http://localhost:9090/approvedorder/api/saveApprovedOrder",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, approvedorder:order, dateTime:new Date().toLocaleTimeString("en-US")})})
        .then (response => response.json())
        .then (userorderresponse => {
            console.log("response ", userorderresponse);
            //dispatch(loading(false));
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Saving Order", err);
        }) 
    }
}

    // console.log("Approved Order To Be Saved", order); 
    // return function(dispatch) {
    //     //dispatch(loading(true));
    //     window.fetch("http://localhost:9090/approvedorder/api/saveApprovedOrder",{
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({userid:userid, approvedorder:order, dateTime:new Date().toLocaleTimeString("en-US")})})
    //     .then (response => response.json())
    //     .then (approvedorderresponse => {
    //         console.log("response ", approvedorderresponse);
    //         //dispatch(loading(false));
    //     })
    //     .catch((err)=>{
    //         //dispatch(loading(false));
    //         console.log("Error While Saving Approved Order", err);
    //     }) 
    // }
//}

export const getprevApprovedOrders = (userid)=>{
 
    return function(dispatch) {
        //dispatch(loading(true));
        window.fetch("http://localhost:9090/approvedorder/api/getApprovedOrder",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid})})
        .then (response => response.json())
        .then (approvedorders => {
            console.log("prevApprovedOrders: ", approvedorders);
            //dispatch(loading(false));
            /*dispatch({
                type: ActionTypes.FETCH_PREV_ORDERS,
                payload: {orders}
            })*/

            for (const order of approvedorders) {
                console.log("order in for of ", order);
                let action = addApprovedOrder(order);
                dispatch(action);
            }

        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While getting prevApprovedOrders", err);
        }) 
    }
}

export const cancelApprovedOrder = (id)=>({
    type: ActionTypes.CANCEL_APPROVED_ORDER,
    payload: {
        id
    }
})

export const emptyOrders = () => ({
    type: ActionTypes.EMPTY_APPROVED_ORDER
});