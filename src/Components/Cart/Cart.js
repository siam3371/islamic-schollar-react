import React from 'react';
import Preacher from '../Preacher/Preacher';
import './Cart.css' 
const Cart = (props) => { 
     // destructerting props.cart
    const {cart} = props;
     let followers = 0;
    for(const preacher of cart){
         followers = preacher.facebookFollowers + followers
    } 
    return (
        <div>  
         <div className="card-container">
        <div className="cart-color">
        <h4>
            <i class="fas fa-users"></i>  
                Players Added :{cart.length}</h4>
            <h4> 
             <i class="fab fa-facebook"></i>
             Total Followers: {followers}</h4>
        </div>
            <ol>
            {
             cart.map(preacher => <Preacher preacher={preacher}></Preacher>)
         }
            </ol> 
         </div>
        </div>
    );
};

export default Cart;