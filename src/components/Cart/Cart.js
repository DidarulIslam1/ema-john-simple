import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    // Add ten % tax on price:-
    // const tex = total * 10/100;(0.1)
    const tax = (total * 0.1).toFixed(2);
    console.log(tax);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: </h5>
        </div>
    );
};

export default Cart;