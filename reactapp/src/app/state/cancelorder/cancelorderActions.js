import * as ActionTypes from "../actionTypes";

export const addCancelOrder = (order)=>({
    type: ActionTypes.ADD_CANCEL_ORDER,
    payload: {order}
})

export const saveCancelOrderToDb = (order, userid)=>{

    console.log("Order To Be Saved", order); 
    return function(dispatch) {
        //dispatch(loading(true));
        window.fetch("http://localhost:9090/cancelorder/api/saveUserCancelOrder",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, order:order, dateTime:new Date().toLocaleTimeString("en-US")})})
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

export const getprevCancelOrders = (userid)=>{
 
    return function(dispatch) {
        //dispatch(loading(true));
        window.fetch("http://localhost:9090/cancelorder/api/getUserCancelOrder",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid})})
        .then (response => response.json())
        .then (cancelorders => {
            console.log("prevOrders: ", cancelorders);
            //dispatch(loading(false));
            /*dispatch({
                type: ActionTypes.FETCH_PREV_ORDERS,
                payload: {orders}
            })*/

            for (const cancelorder of cancelorders) {
                console.log("order in for of ", cancelorder);
                let action = addCancelOrder(cancelorder);
                dispatch(action);
            }

        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While getting prevOrders", err);
        }) 
    }
}

export const emptyCancelOrders = () => ({
    type: ActionTypes.EMPTY_CANCEL_ORDER
});