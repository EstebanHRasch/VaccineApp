import * as ActionTypes from "../actionTypes";

let INITIAL_STATE = {
     products:[],
     defaultProduct : {
         name : "Product Name 1.1",
         price : 2.2,
         desc : "Product Description 2.3",
         rating : "Product Rating 2.4"
     }
}


export default function ProductReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        

        case ActionTypes.ADD_PRODUCTS_TOSTORE:            
            return {...state, products:action.payload.products};

        // case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
        //     return {...state, products:action.payload};

        default:
            return state;
    }
}