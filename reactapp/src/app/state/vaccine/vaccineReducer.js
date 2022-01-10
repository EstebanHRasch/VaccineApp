import * as ActionTypes from "../actionTypes";

let INITIAL_STATE = {
     vaccines:[],
     defaultVaccine : {
        name: "Default Name",
        type: "NA",
        price: 0,
        effect: "NA",
        origin: "Somewhere",
        doses: 0,
        desc: "NA"
     }
}


export default function VaccineReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        

        case ActionTypes.ADD_VACCINES_TOSTORE:            
            return {...state, vaccines:action.payload.vaccines};

        // case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
        //     return {...state, products:action.payload};

        default:
            return state;
    }
}