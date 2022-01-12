import * as ActionTypes from "../actionTypes";

export const addOrder = (order)=>({
    type: ActionTypes.ADD_ORDER,
    payload: {order}
})


export const saveOrderToDb = (order, userid, appdate)=>{

    console.log("Order To Be Saved", order);
    console.log("Appdate", appdate); 
    let Year=(appdate.getFullYear()-2000);
    let Month=(appdate.getMonth() + 1);
    let Day= (appdate.getDate());
    let DateString = (Month.toString() + "/" + Day.toString() + "/" + Year.toString() + " at " + appdate.getHours()+":"+ appdate.getMinutes());
    console.log("DateString: "+DateString);
    return function(dispatch) {
        //dispatch(loading(true));
        window.fetch("http://localhost:9090/order/api/saveUserOrder",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, order:order, dateTime:new Date().toLocaleTimeString("en-US"), appDate: DateString})})
        .then (response => response.json())
        .then (userorderresponse => {
            console.log("save order response ", userorderresponse);
            //dispatch(loading(false));
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Saving Order", err);
        }) 
    }
}

export const getprevOrders = (userid)=>{
 
    return function(dispatch) {
        //dispatch(loading(true));
        window.fetch("http://localhost:9090/order/api/getUserOrder",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid})})
        .then (response => response.json())
        .then (orders => {
            console.log("prevOrders: ", orders);
            //dispatch(loading(false));
            /*dispatch({
                type: ActionTypes.FETCH_PREV_ORDERS,
                payload: {orders}
            })*/

            for (const order of orders) {
                console.log("order in for of ", order);
                let action = addOrder(order);
                dispatch(action);
            }

        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While getting prevOrders", err);
        }) 
    }
}

export const cancelOrder = (id)=>({
    type: ActionTypes.CANCEL_ORDER,
    payload: {
        id
    }
})

export const emptyOrders = () => ({
    type: ActionTypes.EMPTY_ORDER
});