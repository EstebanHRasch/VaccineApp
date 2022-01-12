import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = []; //instead of objet in array we are directly putting array

export default function OrderReducer(state = INITIAL_STATE, action) {
    console.log("order Reducer", state, action);
    // additem, removeitem, updateitem, emptyitem


    switch(action.type) {

        case ActionTypes.ADD_ORDER:
            //checking for duplicate item with _id
            //let newState = state.filter(order => order._id != action.payload.order._id);
            return [...state, action.payload.order];//creating a new state with new item
        
        //to select all the items except the one which we click to remove
        case ActionTypes.CANCEL_ORDER:
            return state.filter(order => order._id!=action.payload.id)


        case ActionTypes.EMPTY_ORDER:
            return [];

        default:
            return state;
    }
}