import React from 'react';
import './Review.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { clearTheCart, deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                const saveCart = getStoredCart();
                const productKeys = Object.keys(saveCart);
                const cartProducts = productKeys.map(key => {
                    const product = data.find(pd => pd.key === key);
                    product.quantity = saveCart[key];
                    return product;
                })
                setCart(cartProducts);
            })
            .catch(error => console.log(error))
    }, [])
    // console.log(cart)
    const handleRemoveProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        deleteFromDb(productKey)
    }
    const [orderPlaced, setOrderPlaced] = useState(false);
    const handlePlaceOrder = () => {
        setCart([])
        setOrderPlaced(true)
        clearTheCart()
    }
    let thankYou;
    if (orderPlaced) {
        thankYou = <img src={happyImage} alt=" " />
    }
    return (
        <div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        cart.map(pd => <ReviewItem key={pd.key} product={pd} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                    }
                    {thankYou}
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button onClick={handlePlaceOrder} className='cart-button'>Place Order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Review;