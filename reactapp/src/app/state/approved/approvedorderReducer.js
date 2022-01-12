import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = []; //instead of objet in array we are directly putting array

export default function ApprovedOrderReducer(state = INITIAL_STATE, action) {
    console.log("approved order Reducer", state, action);
    // additem, removeitem, updateitem, emptyitem


    switch(action.type) {

        case ActionTypes.ADD_APPROVED_ORDER:
            //checking for duplicate item with _id
            //let newState = state.filter(order => order._id != action.payload.order._id);
            return [...state, action.payload.approvedorder];//creating a new state with new item
        
        //to select all the items except the one which we click to remove
        case ActionTypes.CANCEL_APPROVED_ORDER:
            return state.filter(approvedorder => approvedorder._id!=action.payload.id)


        case ActionTypes.EMPTY_APPROVED_ORDER:
            return [];

        default:
            return state;
    }
}