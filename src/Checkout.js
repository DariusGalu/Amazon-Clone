import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    
    
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" 
            src="https://www.fortune3.com/en/images/header-amazon.png" alt="" />
        
        {basket?.length === 0 ? (
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2>Your Shopping Cart is empty</h2>
            </div>
        ) : (
            <div>
                <h3>Hello, {user.email}</h3>
                <h2 className="checkout_title">Your Shopping Cart</h2>
            {/* list out all of the checkout products */}
            {basket?.map((item) => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))}
            </div>
        )}
        </div>
        {basket.length > 0 &&(
            <div className="checkout_right">
            <Subtotal />
            </div>
        )}
        </div>
    );
}

export default Checkout;
