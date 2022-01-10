//only one store is allowed in one applicaiton, applications data model,
//one reducer per store so we need to combine if multilpe reducers are there
//store sends notification to view for change of state
//this allows to inject middlewares like thunk, promise in application 

import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"; //is used to pipeline the dispatched objects and give us a feeling of sync execution by being async
import promise from "redux-promise-middleware";//is used to make calls to the server using promise

import userReducer from "./user/userReducer";
import productReducer from "./product/productReducer";
import cartReducer from "./cart/cartReducer";
import loadingReducer from "./loading/LoadingReducer";
import adminReducer from "./admin/adminReducer";
import vaccineReducer from "./vaccine/vaccineReducer";
import hospitalReducer from "./hospital/hospitalReducer";

let logger = () => (next) => (action) => {
    //currying in javasript where we pass function as input and recieve function as output
    console.log("Logged Action : Store File ", action); 

    next(action); //move to the actual execution
};

export default createStore(
    combineReducers({
        userReducer, //userReducer : userReducer
        adminReducer,
        productReducer,
        cartReducer,
        loadingReducer,
        vaccineReducer,
        hospitalReducer
    }),
    {},//inital state if we want to set from store instead of reducer
    applyMiddleware(logger, thunk, promise)
)


//state directory - represents everything that we need to implement for reducer to maintain data

//redux

//action creator - we refer to this event creator like event handles such button click, mouse hove etc...
//action - an object json {type : signinuser, payload : userObject} that contains, key value pair of actiontype (signin user) and payload (user object for user state)
//callback/reducer - a function which will generate new state for every action (action type), using the payload dispatched in action
//dispatch - we have a tightly coupled way of sending message to store for state update which passes through store by using dispatch method
//store - only one store is allowed in one application to maintain data, as one way flow

//react-redux
//this will provide us the access to store (redux) in react component, by using hooks or otherwise
// we need to bootstrap our application with react-redux Provider

//redux-thunk

//promise-middleware