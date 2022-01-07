//this will act as the main file where we first load redux (store, action, reducer) 
//and then we pass these as props into UserComponent
import { connect } from "react-redux";
import { addUserToStore, signinUser } from "../../state/user/userActions";
import User from "../Components/User/UserComponent";



//this will make our component subscriber
//import initial state from store and send it to components as props
let mapStatToProps = (state)=>{ //state is basically store exported from store.js
    return {
        user : state.userReducer.user
    }
}

//this will make our component a publisher
//import actions and then dispatch for publisher
let mapDispatchToProps = (dispatch)=>{
    return {
        addUser : (user)=>{ 
                    dispatch(addUserToStore(user))
                },
        signInUpUser : (user)=>{
                dispatch(signinUser(user))
        }
    }
}

//the connect method makes sure that we have access to state and actions in UserComponent
//export default connect(mapStatToProps, null)(User); //this is just a subscriber not publisher
export default connect(mapStatToProps, mapDispatchToProps)(User)