import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {addUserToStore, signinUser} from "../../../state/user/userActions";
import {signinAdmin} from "../../../state/admin/adminActions";

let AdminComponent = (props)=>{

    const inputAdminName = useRef(null);
    const inputPassword = useRef(null);
    const inputRole = useRef(null);
    const inputAddress = useRef(null);
    const inputAdminID = useRef(null);

    // to make our component subscribe to the store we need to use - useSelector and then
    // select the state with which we want to map our data (mapStateToProps)
    const admin = useSelector((state)=>state.adminReducer.admin);//this also works in async

    // this hook is used to replace map dispatch to props so that we are able to 
    // make our functional component publish the new data
    //this hook is used to do the job of mapDispatchToProps, we need to initilize it and then use it on handler
    const dispatchAdminObj = useDispatch();

    const setInt= setInterval(() => {
        console.log("My name is Something")
    }, 1000);

    // replacemnet of shouldComponentUpdate or componentDidMount or componentWillUnmout
    useEffect(()=>{
        //console.log(user)        
        inputAdminName.current.value = admin.adminName;        
        inputPassword.current.value = admin.password;
        inputRole.current.value = admin.role;
        inputAddress.current.value = admin.address;  
        //inputAdminID.current.value = admin.adminid;      

        //componentWillUnmount
        return function cleanup() {
            //we must avoid doing any data cleanup, it is for javascript functions, callbacks, 
            console.log("useEffect is working as component will unmount, to cleanup the component");
            clearInterval(setInt); //cleaning up interval call
        };
    })

    //submit handler to signinup user
    const handleSubmit = (evt)=>{
        // `current` points to the mounted text input element
        
        let adminObj = {
            adminName : inputAdminName.current.value,
            password : inputPassword.current.value,
            role : inputRole.current.value,
            address : inputAddress.current.value,
            allow : true,
            session : new Date().toLocaleTimeString("en-US")
            //adminid : inputAdminID.current.value
        }


        //alert("User Object :" + JSON.stringify(userObj))
        
        //dispatchUserObj(addUserToStore(userObj));

        // this hook is used to replace map dispatch to props so that we are able to 
        // make our functional component publish the new data

        dispatchAdminObj(signinAdmin(adminObj))

        evt.preventDefault();
    }

    return(
        <>
            <h1>Admin Login/Register</h1>
            <form className={"form col-md-10 userHook"} onSubmit={handleSubmit}>                
                <label>
                    <b>Admin Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputAdminName} 
                            placeholder="Please enter user name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} ref={inputPassword} 
                            placeholder="Please enter password" maxLength={20} />
                </label>
                <br/>
                <label>
                    <b>Address :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputAddress} 
                            placeholder="Please enter address" maxLength={20}/>
                </label>
                <br/>
                <label>
                    <b>Role :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputRole} 
                            placeholder="Please enter role" />
                </label>

                <br/>
                <input type="submit" className={"btn btn-primary"} value="Signin" />
            </form>
        </>
    )

}

export default AdminComponent;