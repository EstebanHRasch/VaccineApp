//action : an object that contains two properties : type and payload
//type : action type and payload : object that we want to update in reducer for new state (userObject)

import * as ActionTypes from "../actionTypes";
import { loading } from "../Loading/LoadingAction";

//action that would be dispatched to the store (eventually to reducer)
export const addAdminToStore = (admin) => ({    //user : is the user object dispatched from user component    
    type: ActionTypes.AddAdminToStore,
    payload: {admin}
})

//we'll use react fetch api to make ajax post call to server to signup and signin user
export const signinAdmin = (adminObject)=>{ 

    // thunk, returns function as an action
    return function (dispatch, getState) {
        // here we go with ajax call : to save data to the server or fetch it from the server
        // using fetch method of react
        console.log("called by thunk");
        dispatch(loading(true));
        window.fetch("http://localhost:9090/admin/api/signinup",//uri or end point of singninup api
            {
                method: 'POST', //rest method type to save the data
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(adminObject)
            })
            .then(response => response.json())//response from the server/ api - parsing to json
            .then(adminresp => {
                console.log("response ", adminresp); // this response will come with _id    
                let action = addAdminToStore(adminresp);
                dispatch(action); // it will keep the current context to update the user object and takes it to the reducer
                
                dispatch(loading(false));
                //dispatch(getUserCart(adminresp._id));
            })
            .catch((err)=>{
                dispatch(loading(false));
                console.log("Error While Login Admin", err)
            });
    }

}