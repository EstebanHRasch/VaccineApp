import React from "react";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux"

let Header = (props)=>{
    let adminName = props.adminName ? props.adminName : ""

    let userName = props.userName ? props.userName : ""
    return(
        <>

            {userName == "" && adminName == "" ? <b> Please Login to see other features</b> : 
                adminName != "" && userName == ""  ?  <b>Hi Admin {adminName +", "} Welcome to Vaccine Application</b>  : 
                <b>Hi User {userName +", "} Welcome to Vaccine Application</b>

        }

            <hr/>
            <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
            <NavLink to="/user" className="button" activeClassName="success" >{userName == "" ? "Patient Login" : "Patient"} </NavLink>
            <NavLink to="/admin" className="button" activeClassName="success" >{adminName == "" ? "Admin Login" : "Admin"} </NavLink> 
            {(userName || adminName) &&
                <React.Fragment>  
                    <NavLink to="/vaccine" className="button" activeClassName="success" >Vaccine </NavLink>
                    <NavLink to="/hospital" className="button" activeClassName="success" >Hospital </NavLink>
                    <NavLink to="/cart" className="button" activeClassName="success" >Cart </NavLink>
                    <NavLink to="/checkout" className="button" activeClassName="success" >Checkout </NavLink>
                    <NavLink to="/approvedorder" className="button" activeClassName="success" >Approval </NavLink>
             {/* <Dropdown as={ButtonGroup}>
                <Button variant="success">Split Button</Button>

                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item href="/about">About</Dropdown.Item>
                    <Dropdown.Item href="/product">Product</Dropdown.Item>
                    <Dropdown.Item href="/checkout">Checkout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
                </React.Fragment>
            }
            
            <NavLink to="/about" className="button" activeClassName="success" >About </NavLink> 
        </>
    )
}

let mapStateToProps = (state)=>{
    return {
        userName : state.userReducer.user.userName,
        adminName : state.adminReducer.admin.adminName
    }
}

//export default Header;
export default connect(mapStateToProps, null)(Header);

// when user is logged in
// Hi userName, Welcome to SynergisticIT Shopping Cart

// when user is not logged in
// Hi There! Please Login to see other features
