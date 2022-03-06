import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    let totalQuantity =0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const tax = (total / 7).toFixed(2);
    const totalBeforeTax = (total + shipping).toFixed(2);;
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    return (
        <div className='cart'>
            <div className="cart-header">
                <h3>Order Summary</h3>
                <p>Item ordered : {cart.length} </p>
            </div>
            <div className="cart-body">
                <div className="cart-body-left">
                    {
                        cart.map(pd => <p>{pd.key} :</p>)
                    }
                    <h4>Total Item:</h4>
                    <p>Product Price :</p>
                    <p>Shipping Cost :</p>
                    <p>Total before tax :</p>
                    <p>Estimated tax :</p>
                    <h4>Order Total :</h4>
                </div>
                <div className="cart-body-right">
                    {
                        cart.map(pd => <p>{pd.quantity} : Item.P - ${pd.price * pd.quantity}</p>)
                    }
                    <h4>{totalQuantity}</h4>
                    <p>${total.toFixed(2)}</p>
                    <p>${shipping}</p>
                    <p>${totalBeforeTax}</p>
                    <p>${tax}</p>
                    <h4>${grandTotal}</h4>
                </div>
            </div>
            {
                props.children
            }
        </div>
    );
};

export default Cart;