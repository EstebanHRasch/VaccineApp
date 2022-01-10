import * as ActionTypes from "../actionTypes";

let INITIAL_STATE = {
     hospitals:[],
     defaultHospital : {
        name: "Default Name",
        address: "Somewhere",
        type: "NA",
        charges: 0
     }
}


export default function HospitalReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        

        case ActionTypes.ADD_HOSPITALS_TOSTORE:            
            return {...state, hospitals:action.payload.hospitals};

        // case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
        //     return {...state, products:action.payload};

        default:
            return state;
    }
}