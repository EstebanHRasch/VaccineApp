import React, { useRef, useEffect, useState, Fragment, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate }  from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

import CartItemComponent from "../Cart/CartItemComponent";
import CartSummaryComponent from "../Cart/CartSummaryComponent";

import { saveCartToDb } from "../../../state/cart/cartActions";
import { saveOrderToDb } from "../../../state/order/orderActions";
import { addOrder } from "../../../state/order/orderActions";

let CheckoutComponent = (props)=>{

    const cartList = useSelector((state)=>state.cartReducer);
    const User = useSelector((state)=>state.userReducer.user);
    const [AppointmentDate, setAppointmentDate] = useState(null);

    let dispatchToSaveCart = useDispatch();
    let dispatchToSaveOrder = useDispatch();
    
    let handleAppointmentDate = (date) => {
            
            setAppointmentDate(date);
            console.log("Year: "+ date.getFullYear() + "Month: "+ date.getMonth()+"Day: "+ date.getDate());
        };

    let recalculate = (cartItems) => {
        let amount = 0,
            count = 0;
    
        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }
    
        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }

    let navigate = useNavigate();

    let func = function(event) {      
        
        navigate('/checkout/buy');
        event.preventDefault();
    }

    let PlaceOrder = (cartlist, id, appointmentdate)=>{
        
        if (!id) {
            alert("User not logged in! Please login to save")
        } else {
            console.log("Save order appdate: "+appointmentdate);
            dispatchToSaveCart(saveCartToDb(cartlist, id))
            dispatchToSaveOrder(saveOrderToDb(cartlist, id, appointmentdate))
            navigate('/checkout/buy');
        }    
    }
    
    return(
        <Fragment>
        <h1>Checkout</h1>

        {
            cartList && cartList.length > 0 ?
            <Fragment>
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Effect</th>
                            <th>Origin</th>
                            <th>Doses</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartList.map(item=>{
                                //return item.name
                                
                                return <CartItemComponent 
                                                item={item}
                                                key={item._id}
                                                readOnly = {props.readOnly}
                                    />
                            })
                        } 
                    </tbody>
                </table>

                <CartSummaryComponent data={recalculate(cartList)}/>

                <label>Select Appointment Date: </label>
                <DatePicker
                selected={AppointmentDate}
                minDate={new Date()}
                onChange={handleAppointmentDate}
            />

                {
                    props.readOnly ? "" : 
                        <Fragment>

                            <button onClick={() => PlaceOrder(cartList, User._id, AppointmentDate)} >
                                Place Your Vaccination Appointment
                            </button>

                        </Fragment> 
                }

            

            <h1>Vaccine appointment for: </h1>
            <td>{User.userName}</td>
            <td>{User.street}</td>
            <td>{User.mobile}</td>

                </Fragment>:
            "No vaccines to display in cart"
        }
        </Fragment>
    )
}

export default CheckoutComponent;