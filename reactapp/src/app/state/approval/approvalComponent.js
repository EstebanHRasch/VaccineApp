import React, {Fragment} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate }  from "react-router-dom";

import CartItemComponent from "../Cart/CartItemComponent";
import CartSummaryComponent from "../Cart/CartSummaryComponent";

import CouponComponent from "../Coupon/CouponComponent";
import CouponSummaryComponent from "../Coupon/CouponSummaryComponent";
import DisplayCouponDetails from "../Coupon/CouponDisplayComponent";

import { fetchCoupon } from "../../../state/coupon/couponActions";

import { saveCartToDb } from "../../../state/cart/cartActions";
import { saveOrderToDb } from "../../../state/order/orderActions";
import { addOrder } from "../../../state/order/orderActions";

let ApprovalComponent = (props)=>{

    const cartList = useSelector((state)=>state.cartReducer);
    const User = useSelector((state)=>state.userReducer.user);
    const Admin = useSelector((state)=>state.adminReducer.admin);

    let dispatchToSaveCart = useDispatch();

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

    let PlaceOrder = (cartlist, id)=>{
        
        if (!id) {
            alert("User not logged in! Please login to save")
        } else {
            //dispatchToaddOrder(addOrder(cartlist, id))
            dispatchToSaveCart(saveCartToDb(cartlist, id))
            //navigate('/checkout/buy');
        }    
    }
    
    return(
        <Fragment>
        <h1>Approval Component</h1>
        <h1>User Details: </h1>
            <td>{User.userName}</td>
            <td>{User.street}</td>
            <td>{User.mobile}</td>

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

                {
                    props.readOnly ? "" : 
                        <Fragment>

                            <button onClick={() => PlaceOrder(cartList, User._id)} >
                                Place Your Vaccine Order
                            </button>

                        </Fragment> 
                }

                </Fragment>:
            "No items to display in cart"
        }
        </Fragment>
    )
}

export default ApprovalComponent;